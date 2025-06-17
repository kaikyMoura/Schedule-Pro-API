import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InvalidCredentialsException } from 'src/common/exceptions/invalid-credentials.exception';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { MailService } from 'src/mail/mail.service';
import { UserSessionRepository } from 'src/user-session/user-session.repository';
import { LoginUserDto } from 'src/user/dtos/login-user.dto';
import { UserService } from 'src/user/user.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly emailService: MailService,
    private readonly userService: UserService,
    private readonly userSessionRepository: UserSessionRepository,
    private readonly tokenService: TokenService,
  ) {}

  /**
   * Creates a new user session by generating a refresh token and access token.
   *
   * @param {Omit<BaseUserDto, 'password'>} user - The user data to be associated with the session. Omits the password field.
   * @param {string} userAgent - The user agent string from the request header.
   * @param {string} ip - The IP address from which the request originated.
   *
   * @returns {Object} - An object containing the generated access token, refresh token,
   * and the expiry time of the access token.
   */
  async signIn(
    body: LoginUserDto,
    userAgent: string,
    ip?: string,
  ): Promise<{ accessToken: string; refreshToken: string; expiresIn: string }> {
    const { token: refreshToken, expiresIn } =
      this.tokenService.generateRefreshToken();

    const user = await this.userService._validateCredentials(body);

    await this.userSessionRepository.create({
      userId: user.id!,
      refreshToken,
      userAgent,
      ipAddress: ip,
      expiresAt: expiresIn,
    });

    const access = await this.tokenService.generateAccessToken({
      sub: user.id!,
      email: user.email,
      role: user.role,
    });

    return {
      accessToken: access.token,
      refreshToken,
      expiresIn: access.expiresIn,
    };
  }

  /**
   * Refreshes a user's session by generating a new access token and refresh token.
   * Verifies the provided refresh token and ensures it has not expired.
   *
   * @param {string} refreshToken - The refresh token to be refreshed.
   *
   * @returns {Object} - An object containing the new access token, refresh token,
   * and the expiry time of the access token.
   *
   * @throws {UnauthorizedException} - Thrown if the refresh token is invalid or expired.
   * @throws {UserNotFoundException} - Thrown if the user associated with the session does not exist.
   */
  async refreshSession(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string; expiresIn: string }> {
    const session = await this.userSessionRepository.findUnique(refreshToken);

    if (!session || session.expiresAt < new Date()) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const user = await this.userService.retrieveById(session.userId);
    if (!user) throw new UserNotFoundException();

    const newAccess = await this.tokenService.generateAccessToken({
      sub: user.id!,
      email: user.email,
      role: user.role,
    });

    const { token: newRefreshToken, expiresIn } =
      this.tokenService.generateRefreshToken();

    await this.userSessionRepository.updateRefreshToken(
      session.id,
      newRefreshToken,
      expiresIn,
    );

    return {
      accessToken: newAccess.token,
      refreshToken: newRefreshToken,
      expiresIn: newAccess.expiresIn,
    };
  }

  /**
   * Revokes a user's session by deleting the associated refresh token.
   *
   * @param {string} refreshToken - The refresh token to be revoked.
   *
   * @throws {UnauthorizedException} - Thrown if the refresh token is invalid.
   */
  async revokeSession(refreshToken: string) {
    await this.userSessionRepository.deleteByRefreshToken(refreshToken);
  }

  /**
   * Sends a password reset email to the given email address if a User with that address exists.
   *
   * @param {string} email - The email address of the User to send the password reset email to.
   *
   * @returns {Promise<void>} - A promise that resolves when the password reset email has been sent.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email address is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given email address does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the given email address is invalid.
   */
  async sendPasswordResetEmail(email: string): Promise<string> {
    if (!email) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer = await this.userService.retrieveByEmail(email);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('User not found');
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      retrievedCustomer.email != email
    ) {
      throw new InvalidCredentialsException();
    }

    const { token } = await this.tokenService.generateAccessToken(
      {
        sub: retrievedCustomer.id!,
        email: retrievedCustomer.email,
        role: retrievedCustomer.role,
      },
      '1h',
    );

    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    await this.emailService.sendMail({
      to: email,
      subject: 'Password Reset',
      html: `
            <p>Hello ${retrievedCustomer.name},</p>
            <p>You have requested to reset your password.</p>
            <br />
            <p>Please click the link below to reset your password:</p>
            <p><a href="${resetLink}">Reset Password</a></p>
            <br />
            <p>This link will expire in 1 hour.</p>
            <br />
            <p>If you did not request this, please ignore this email.</p>
        `,
    });

    return 'Password reset email sent successfully';
  }

  /**
   * Resets the password for a User using the provided token and new password.
   *
   * @param {string} token - The token used to verify the User's identity.
   * @param {string} newPassword - The new password to set for the User.
   *
   * @returns {Promise<string>} - A promise that resolves to a string indicating
   * the success of the password reset operation.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the token or new password is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User associated with the token does not exist in the database.
   */
  async resetPassword(token: string, newPassword: string): Promise<string> {
    return await this.userService.resetPassword(token, newPassword);
  }

  /**
   * Sends an email verification link to the given email address if a User with that address exists.
   *
   * @param {string} email - The email address of the User to send the verification email to.
   *
   * @returns {Promise<string>} - A promise that resolves to a string 'Verification email sent successfully' if the operation is successful.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email address is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given email address does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the given email address is invalid.
   */
  async sendVerificationEmail(email: string): Promise<string> {
    if (!email) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer = await this.userService.retrieveByEmail(email);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('User not found');
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      retrievedCustomer.email != email
    ) {
      throw new InvalidCredentialsException();
    }

    const { token } = await this.tokenService.generateAccessToken(
      {
        sub: retrievedCustomer.id!,
        email: retrievedCustomer.email,
        role: retrievedCustomer.role,
      },
      '1h',
    );

    const verificationLink = `http://localhost:3000/verify-email?token=${token}`;

    await this.emailService.sendMail({
      to: email,
      subject: 'Email Verification',
      html: `
            <p>Hello ${retrievedCustomer.name},</p>
            <p>You need to verify your email.</p>
            <br />
            <p>Please click the link below to verify your email:</p>
            <p><a href="${verificationLink}">Verify Email</a></p>
            <br />
            <p>This link will expire in 1 hour.</p>
            <br />
            <p>If you did not request this, please ignore this email.</p>
        `,
    });

    return 'Verification email sent successfully';
  }

  /**
   * Verifies a User by its email in the database.
   *
   * @param {string} email - The email of the User to verify.
   *
   * @returns {Promise<string>} - A promise that resolves to a string 'User verified successfully' if the operation is successful.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given email does not exist in the database.
   */
  async verifyEmail(email: string): Promise<string> {
    return await this.userService.verifyUser(email);
  }
}
