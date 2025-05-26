import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'prisma/app/generated/prisma/client';
import { CustomRequest } from '../types/custom-request';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    const req = context.switchToHttp().getRequest<CustomRequest>();
    return requiredRoles.includes(req.user.role!);
  }
}
