import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CustomRequest } from 'src/common/types/custom-request';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}

  /**
   * This guard is used to protect routes that require authentication.
   * It expects a "Authorization" header with a Bearer token.
   * If the token is not provided or is invalid, it throws an UnauthorizedException.
   * If the token is valid, it adds the decoded user to the request object
   * and allows the request to proceed.
   * @param context The execution context of the request.
   * @returns A boolean indicating whether the request is allowed or not.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const req = context.switchToHttp().getRequest<CustomRequest>();
    const token = req.headers['authorization']?.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = await this.authService.verifyToken(token);
      req.user = decoded as { id: string; email: string; name: string };
      return true;
    } catch (err) {
      console.error(err);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
