import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';
import { randomUUID } from 'crypto';
import { JwtPayload } from 'jsonwebtoken';
import { User } from 'prisma/app/generated/prisma/client';
import { ChangePasswordDto } from 'src/user/dtos/change-password-user.schema';
import { InvalidCredentialsException } from 'src/common/exceptions/invalid-credentials.exception';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { MailService } from 'src/mail/mail.service';
import { UserSessionRepository } from 'src/user-session/user-session.repository';
import { BaseUserDto } from 'src/user/dtos/base-user.dto';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userSessionRepository: UserSessionRepository,
    private readonly userRepository: UserRepository,
    private readonly emailService: MailService,
  ) {}

  /**
   * Generates a JWT access token for the given payload.
   *
   * @param {T} payload - The payload containing user information (id, name, email).
   *
   * @returns {{ token: string; expiresIn: string }} - An object containing the generated JWT token and its expiry time in minutes.
   *
   * @template T - A generic type that extends an object with id, name, and email properties.
   */
  generateAccessToken<T extends { id: string; name: string; email: string }>(
    payload: T,
    expiresIn?: string,
  ): { token: string; expiresIn: string } {
    const token = this.jwtService.sign(
      { id: payload.id, name: payload.name, email: payload.email },
      { secret: process.env.JWT_SECRET_KEY, expiresIn: expiresIn ?? '15m' },
    );

    return { token, expiresIn: expiresIn ?? '15m' };
  }

  /**
   * Generates a new refresh token and its expiry date.
   *
   * @returns {{ token: string; expiresIn: Date }} - An object containing the generated refresh token
   * and its expiry date, which is set to 7 days from the current date.
   */
  generateRefreshToken(): { token: string; expiresIn: Date } {
    const token = randomUUID();

    const expiresIn = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    return { token, expiresIn };
  }

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
  async createSession(
    user: Omit<BaseUserDto, 'password'>,
    userAgent: string,
    ip?: string,
  ): Promise<{ accessToken: string; refreshToken: string; expiresIn: string }> {
    const { token: refreshToken, expiresIn } = this.generateRefreshToken();

    await this.userSessionRepository.create({
      userId: user.id!,
      refreshToken,
      userAgent,
      ipAddress: ip,
      expiresAt: expiresIn,
    });

    const access = this.generateAccessToken({
      id: user.id!,
      name: user.name,
      email: user.email,
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

    const user = await this.userRepository.findUnique(session.userId);
    if (!user) throw new UserNotFoundException();

    const newAccess = this.generateAccessToken(user);

    const { token: newRefreshToken, expiresIn } = this.generateRefreshToken();

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
   * Verifies a given JWT token and returns the payload if successful.
   * The payload is expected to be an object that extends the object type.
   * If the verification fails, an UnauthorizedException is thrown.
   *
   * @param token - The token to be verified.
   *
   * @returns {Promise<T>} - A promise that resolves to the payload of the token.
   *
   * @throws {UnauthorizedException} - Thrown if the token is invalid or expired.
   */
  async verifyToken<T extends object>(token: string): Promise<T> {
    try {
      return await this.jwtService.verifyAsync<T>(token, {
        secret: process.env.JWT_SECRET_KEY,
      });
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  /**
   * Decodes a JWT token and returns the payload if successful, or null if the decoding fails.
   *
   * @param token - The token to be decoded.
   *
   * @returns {JwtPayload | null} - The payload of the token, or null if decoding fails.
   */
  decodeToken(token: string): JwtPayload | null {
    try {
      return this.jwtService.decode(token);
    } catch {
      return null;
    }
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
  async forgotPassword(email: string): Promise<string> {
    if (!email) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer =
      await this.userRepository.findUniqueByEmail(email);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('User not found');
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      retrievedCustomer.email != email
    ) {
      throw new InvalidCredentialsException();
    }

    const { token } = this.generateAccessToken(
      {
        id: retrievedCustomer.id,
        name: retrievedCustomer.name,
        email: retrievedCustomer.email,
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
   * Resets the password of a User in the database.
   *
   * @param {string} token - The token to verify the User.
   * @param {ChangePasswordDto} resetPasswordDto - Data transfer object containing the new password of the User.
   *
   * @returns {Promise<string>} - A promise that resolves to a string 'Password reset successfully' if the operation is successful.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the token or new password is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given token does not exist in the database.
   */
  async resetPassword(resetPasswordDto: ChangePasswordDto): Promise<string> {
    const { token, newPassword } = resetPasswordDto;

    if (!token || newPassword) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedUser = await this.verifyToken<User>(token);

    if (!retrievedUser) {
      throw new UserNotFoundException('User not found');
    }

    const hashedNewPassword = await hash(newPassword, 10);

    await this.userRepository.updatePassword(
      retrievedUser.id,
      hashedNewPassword,
    );

    return 'Password reset successfully';
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

    const retrievedCustomer =
      await this.userRepository.findUniqueByEmail(email);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('User not found');
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      retrievedCustomer.email != email
    ) {
      throw new InvalidCredentialsException();
    }

    const { token } = this.generateAccessToken(
      {
        id: retrievedCustomer.id,
        name: retrievedCustomer.name,
        email: retrievedCustomer.email,
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
}
