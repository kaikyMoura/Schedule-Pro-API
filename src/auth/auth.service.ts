import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { TokenNotExpiringException } from 'src/common/exceptions/token-not-expiring.exception';

export interface JwtPayload {
  id: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken<T extends { id: string; name: string; email: string }>(
    payload: Omit<T, 'password' | 'createdAt' | 'updatedAt'>,
  ): { token: string; expiresIn: string } {
    const secret = process.env.JWT_SECRET_KEY;

    if (!secret) {
      throw new Error('JWT secret is not defined in environment variables.');
    }

    const token = this.jwtService.sign(
      {
        id: payload.id,
        name: payload.name,
        email: payload.email,
      },
      { secret, expiresIn: '1d' },
    );

    return { token: token, expiresIn: '1d' };
  }

  renewToken<T extends { id: string; name: string; email: string }>(
    payload: Omit<T, 'password' | 'createdAt' | 'updatedAt'>,
    currentToken: string,
  ): { token: string; expiresIn: string } {
    if (!payload.email || !currentToken) {
      throw new MissingRequiredPropertiesException();
    }

    const decoded = this.decodeToken(currentToken);
    const currentTime = Math.floor(Date.now() / 1000);

    if (!decoded || !decoded.exp || decoded.exp - currentTime > 300) {
      throw new TokenNotExpiringException();
    }

    return this.generateToken(payload);
  }

  async verifyToken<T extends object>(token: string): Promise<T> {
    try {
      return await this.jwtService.verifyAsync<T>(token);
    } catch (err) {
      console.error(err);
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }

  decodeToken(token: string): JwtPayload | null {
    try {
      return this.jwtService.decode(token);
    } catch {
      return null;
    }
  }
}
