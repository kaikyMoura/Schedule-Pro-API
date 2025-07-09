import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CustomThrottlerGuard } from './throttler.guard';

@Injectable()
export class GlobalGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtGuard: JwtAuthGuard,
    private readonly rolesGuard: RolesGuard,
    private readonly throttlerGuard: CustomThrottlerGuard,
  ) {}

  /**
   * Checks if the request can be activated by combining throttling, JWT authentication, and role-based access control.
   * @param context - The execution context of the request.
   * @returns A promise that resolves to true if all checks pass, false otherwise.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isRateLimited = await this.throttlerGuard.canActivate(context);
    if (!isRateLimited) return false;

    const isAuthenticated = await this.jwtGuard.canActivate(context);
    if (!isAuthenticated) return false;

    return this.rolesGuard.canActivate(context);
  }
}
