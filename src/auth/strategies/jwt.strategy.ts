import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/users/user.service';
import { TokenPayloadInput } from '../dtos/token-payload.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    configService: ConfigService,
  ) {
    const jwtSecret = configService.get<string>('JWT_SECRET_KEY');

    if (!jwtSecret) {
      throw new Error('JWT_SECRET_KEY is not defined');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  /**
   * Validates the given payload and returns the user data if the
   * validation is successful.
   *
   * @param payload - The payload to validate.
   *
   * @throws {UnauthorizedException} - Thrown if the payload is invalid or
   * expired.
   *
   * @returns {Promise<{ id: string; email: string }>} - The user data if the
   * validation is successful.
   */
  async validate(
    payload: TokenPayloadInput,
  ): Promise<{ id: string; email: string }> {
    const user = await this.userService.findById(payload.sub);

    if (payload.email !== user.email) {
      throw new UnauthorizedException('Invalid or expired token');
    }

    if (!user) throw new UnauthorizedException('Invalid or expired token');

    return { id: user.id, email: user.email };
  }
}
