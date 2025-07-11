import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHash, randomBytes } from 'crypto';
import { User } from 'prisma/app/generated/prisma/client';
import { HashingService } from 'src/hashings/hashing.service';
import { NotificationService } from 'src/notifications/notification.service';
import { CreateUserInput } from 'src/users/dtos/create-user.input';
import { LoginUserInput } from 'src/users/dtos/login-user.input';
import { UserSessionService } from '../user-sessions/user-session.service';
import { UserService } from '../users/user.service';
import { TokenService } from './token.service';
import { AuthTokens } from './types/auth-tokens-interface';
import { LoginResponse } from './types/login-response.type';

@Injectable()
export class AuthService {
  private readonly maxLoginAttempts = 5;
  private readonly lockoutDuration = 15 * 60 * 1000;
  private readonly loginAttempts = new Map<
    string,
    { count: number; lastAttempt: Date }
  >();

  constructor(
    private readonly userService: UserService,
    private readonly userSessionService: UserSessionService,
    private readonly tokenService: TokenService,
    private readonly configService: ConfigService,
    private readonly notificationService: NotificationService,
    private readonly hashingService: HashingService,
  ) {}

  async register(
    registerDto: CreateUserInput,
    userAgent?: string,
    ipAddress?: string,
  ): Promise<LoginResponse> {
    const existingUser = await this.userService.findByEmail(registerDto.email);

    if (existingUser) {
      throw new ConflictException('This email is already in use.');
    }

    const user = await this.userService.create({
      ...registerDto,
    });

    await this.sendVerificationEmail(user.email);

    const session = await this.userSessionService.create({
      user: {
        connect: { id: user.id },
      },
      userAgent: userAgent ?? null,
      ipAddress: ipAddress ?? null,
      refreshToken: '',
      expiresAt: new Date(),
    });

    const tokens = await this.generateTokens(user, session.id);

    await this.userSessionService.update(session.id, {
      refreshToken: tokens.refreshToken,
    });

    return {
      ...tokens,
      user: this.userService.toUserType(user),
    };
  }

  async login(
    loginDto: LoginUserInput,
    userAgent?: string,
    ipAddress?: string,
  ): Promise<LoginResponse> {
    const { email, password } = loginDto;
    this.checkRateLimit(email);

    const user = await this.userService.findByEmail(email);

    if (
      !user ||
      !(await this.hashingService.compare(password, user.password))
    ) {
      this.recordFailedAttempt(email);
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Esta conta está desativada.');
    }

    this.loginAttempts.delete(email);

    await this.userSessionService.deleteExpiredSessions();

    const tempSession = await this.userSessionService.create({
      user: {
        connect: { id: user.id },
      },
      userAgent: userAgent ?? null,
      ipAddress: ipAddress ?? null,
      refreshToken: '',
      expiresAt: new Date(),
    });

    if (!tempSession.id) {
      throw new BadRequestException('Failed to create session');
    }

    const tokens = await this.generateTokens(user, tempSession.id);

    console.log('🔑 Generated tokens:', {
      accessToken: tokens.accessToken ? 'present' : 'missing',
      refreshToken: tokens.refreshToken ? 'present' : 'missing',
      expiresIn: tokens.expiresIn,
    });

    await this.userSessionService.update(tempSession.id, {
      refreshToken: tokens.refreshToken,
    });

    const response = {
      ...tokens,
      user: this.userService.toUserType(user),
    };

    console.log('📤 Login response:', {
      user: response.user ? 'present' : 'missing',
      accessToken: response.accessToken ? 'present' : 'missing',
      refreshToken: response.refreshToken ? 'present' : 'missing',
      expiresIn: response.expiresIn,
    });

    return response;
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    try {
      const payload = await this.tokenService.verifyToken(refreshToken);

      const session = await this.userSessionService.findUnique({
        where: { id: payload.sid },
      });

      if (!session || !session.isActive || !session.id) {
        throw new UnauthorizedException('Invalid or expired session.');
      }

      const user = await this.userService.findById(session.userId);
      if (!user || !user.isActive) {
        throw new UnauthorizedException('Inactive user account');
      }

      await this.userSessionService.update(session.id, {
        lastUsedAt: new Date(),
      });
      return this.generateTokens(user, session.id);
    } catch {
      throw new UnauthorizedException('Invalid refresh token.');
    }
  }

  /**
   * Verifies a user's email address using a verification token.
   *
   * @param {string} token - The verification token.
   *
   * @returns {Promise<void>} - A promise that resolves when the email is verified.
   */
  async verifyEmail(token: string): Promise<void> {
    const tokenHash = this.hashToken(token);
    const user = await this.userService.findByVerificationToken(tokenHash);
    if (!user) {
      throw new BadRequestException('Invalid or expired token.');
    }

    await this.userService.update(user.id, {
      isActive: true,
      verificationToken: '',
    });
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return;
    }

    const resetToken = this.generateSecureToken();
    const resetTokenHash = this.hashToken(resetToken);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await this.userService.setPasswordResetToken(
      user.id,
      resetTokenHash,
      expiresAt,
    );
    await this.sendPasswordResetEmail(user, resetToken);
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    const tokenHash = this.hashToken(token);
    const user = await this.userService.findByPasswordResetToken(tokenHash);

    if (!user) {
      throw new BadRequestException('Invalid or expired token.');
    }

    await this.userService.changePassword(user.id, {
      currentPassword: '',
      newPassword,
    });
  }

  async logout(sessionId: string): Promise<void> {
    await this.userSessionService.deleteByRefreshToken(sessionId);
  }

  private async generateTokens(
    user: User,
    sessionId: string,
  ): Promise<AuthTokens> {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      sid: sessionId,
    };
    const accessTokenExpiresIn = this.configService.get<string>(
      'JWT_ACCESS_EXPIRES',
      '15m',
    );
    const refreshTokenExpiresIn = this.configService.get<string>(
      'JWT_REFRESH_EXPIRATION_TIME',
      '7d',
    );

    const [accessToken, refreshToken] = await Promise.all([
      this.tokenService.generateAccessToken(payload, accessTokenExpiresIn),
      this.tokenService.generateRefreshToken(refreshTokenExpiresIn),
    ]);

    const decodedToken = this.tokenService.decodeToken(accessToken.token);
    const decodedRefreshToken = this.tokenService.decodeToken(
      refreshToken.token,
    );

    return {
      accessToken: accessToken.token,
      refreshToken: refreshToken.token,
      expiresIn: decodedToken?.exp ?? decodedRefreshToken?.exp ?? 0,
    };
  }

  private checkRateLimit(key: string): void {
    const attempts = this.loginAttempts.get(key);
    if (attempts && attempts.count >= this.maxLoginAttempts) {
      const timeSinceLockout = Date.now() - attempts.lastAttempt.getTime();
      if (timeSinceLockout < this.lockoutDuration) {
        const remainingTime = Math.ceil(
          (this.lockoutDuration - timeSinceLockout) / 1000,
        );
        throw new BadRequestException(
          `Too many login attempts. Please try again in ${remainingTime} seconds.`,
        );
      } else {
        this.loginAttempts.delete(key);
      }
    }
  }

  private recordFailedAttempt(key: string): void {
    const attempts = this.loginAttempts.get(key) || {
      count: 0,
      lastAttempt: new Date(),
    };
    attempts.count++;
    attempts.lastAttempt = new Date();
    this.loginAttempts.set(key, attempts);
  }

  private generateSecureToken(): string {
    return randomBytes(32).toString('hex');
  }

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  async sendVerificationEmail(email: string): Promise<void> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const verificationToken = this.generateSecureToken();
    const tokenHash = this.hashToken(verificationToken);
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await this.userService.setPasswordResetToken(user.id, tokenHash, expiresAt);

    await this.notificationService.sendMail({
      to: user.email,
      subject: 'Confirm your email address',
      text: `Please click the link below to verify your email address: ${verificationToken}`,
    });
  }

  private async sendPasswordResetEmail(
    user: User,
    resetToken: string,
  ): Promise<void> {
    await this.notificationService.sendMail({
      to: user.email,
      subject: 'Password Reset Request',
      text: `Please click the link below to reset your password: ${resetToken}`,
    });
  }
}
