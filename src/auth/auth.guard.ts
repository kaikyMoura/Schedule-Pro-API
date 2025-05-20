import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { TokenNotExpiringException } from 'src/common/exceptions/token-not-expiring.exception';
import { CustomRequest } from 'src/common/types/custom-request';
import { AuthService } from './auth.service';
import { CustomResponse } from 'src/common/types/custom-response';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const req = context.switchToHttp().getRequest<CustomRequest>();
    const res = context.switchToHttp().getResponse<CustomResponse>();

    const token = req.headers['authorization']?.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = await this.authService.verifyToken(token);

      this.renewTokenIfNeeded(
        decoded as { id: string; name: string; email: string },
        token,
        res,
      );
      return true;
    } catch (err) {
      if (err instanceof TokenNotExpiringException) {
        const decoded = this.authService.decodeToken(token);

        if (!decoded) {
          throw new ForbiddenException('Invalid token');
        }

        try {
          this.renewTokenIfNeeded(decoded, token, res);
          req.user = decoded;
          return true;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException('Error while renewing token');
        }
      }

      throw new ForbiddenException('Access denied');
    }
  }

  private renewTokenIfNeeded<
    T extends { id: string; name: string; email: string },
  >(payload: T, token: string, res: CustomResponse) {
    try {
      const renewed = this.authService.renewToken(payload, token);
      if (!res.headersSent) {
        res.setHeader('Authorization', `Bearer ${renewed.token}`);
      }
    } catch (error) {
      if (error instanceof TokenNotExpiringException) {
        return;
      }
      throw error;
    }
  }
}
