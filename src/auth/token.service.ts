import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash, randomUUID } from 'crypto';
import { JwtPayload } from 'jsonwebtoken';
import { TokenPayloadType } from './type/token-payload.type';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
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
  async generateAccessToken(
    payload: TokenPayloadType,
    expiresIn?: string,
  ): Promise<{ token: string; expiresIn: string }> {
    const token = await this.jwtService.signAsync(
      { id: payload.sub, email: payload.email, role: payload.role },
      { expiresIn: expiresIn ?? this.configService.get('JWT_ACCESS_EXPIRES') },
    );

    return {
      token,
      expiresIn: expiresIn! ?? this.configService.get('JWT_ACCESS_EXPIRES'),
    };
  }

  /**
   * Generates a new refresh token and its expiry date.
   *
   * @returns {{ token: string; expiresIn: Date }} - An object containing the generated refresh token
   * and its expiry date, which is set to 7 days from the current date.
   */
  generateRefreshToken(expiresIn?: string): {
    token: string;
    expiresIn: string;
  } {
    const hashedToken = createHash('sha256').update(randomUUID()).digest('hex');

    return {
      token: hashedToken,
      expiresIn: expiresIn ?? this.configService.get('JWT_REFRESH_EXPIRES')!,
    };
  }

  /**
   * Verifies a given JWT token and returns the payload if successful.
   *
   * @param token - The token to be verified.
   *
   * @returns {Promise<TokenPayloadType>} - A promise that resolves to the payload of the token.
   *
   * @throws {UnauthorizedException} - Thrown if the token is invalid or expired.
   */
  async verifyToken(token: string): Promise<TokenPayloadType> {
    try {
      return await this.jwtService.verifyAsync(token);
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
}
