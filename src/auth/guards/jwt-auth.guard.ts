import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { CustomRequest } from 'src/common/types/custom-request';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  /**
   * Check if the route is public.
   * @param context the execution context of the request
   * @returns true if the route is public, false otherwise
   */
  canActivate(
    context: ExecutionContext,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  /**
   * Get the request object from the context.
   * @param context the execution context of the request
   * @returns the request object
   */
  getRequest(context: ExecutionContext): CustomRequest {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext<{ req: CustomRequest }>().req;
  }
}
