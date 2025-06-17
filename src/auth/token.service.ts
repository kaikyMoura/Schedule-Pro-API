import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { JwtPayload } from 'jsonwebtoken';
import { TokenPayloadDto } from './dtos/token-payload.dto';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

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
    payload: TokenPayloadDto,
    expiresIn?: string,
  ): Promise<{ token: string; expiresIn: string }> {
    const token = await this.jwtService.signAsync(
      { id: payload.sub, email: payload.email, role: payload.role },
      { expiresIn: expiresIn ?? process.env.JWT_ACCESS_EXPIRES },
    );

    return { token, expiresIn: expiresIn! ?? process.env.JWT_ACCESS_EXPIRES };
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
   * Verifies a given JWT token and returns the payload if successful.
   *
   * @param token - The token to be verified.
   *
   * @returns {Promise<TokenPayloadDto>} - A promise that resolves to the payload of the token.
   *
   * @throws {UnauthorizedException} - Thrown if the token is invalid or expired.
   */
  async verifyToken(token: string): Promise<TokenPayloadDto> {
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
