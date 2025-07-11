import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerGuard, ThrottlerLimitDetail } from '@nestjs/throttler';
import { CustomRequest } from '../types/custom-request';

@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
  private readonly logger = new Logger(CustomThrottlerGuard.name);

  /**
   * Determines if the request should be skipped for throttling.
   * @param context - The execution context of the request.
   * @returns A promise that resolves to true if throttling should be skipped, false otherwise.
   */
  protected async shouldSkip(context: ExecutionContext): Promise<boolean> {
    if (context.getType() === 'http') {
      const req = context.switchToHttp().getRequest<CustomRequest>();
      const path = req.route?.path;

      if (path === '/health') {
        return true;
      }
    } else if (context.getType<GqlContextType>() === 'graphql') {
      const gqlCtx = GqlExecutionContext.create(context);
      const info = gqlCtx.getInfo<{ fieldName: string }>();

      if (info && info.fieldName === 'health') {
        return true;
      }
    }
    return super.shouldSkip(context);
  }

  /**
   * Throws a throttling exception with a custom message.
   * @param context - The execution context of the request.
   * @param throttlerLimitDetail - Details about the throttling limit.
   * @returns A throttling exception.
   */
  protected throwThrottlingException(
    context: ExecutionContext,
    throttlerLimitDetail: ThrottlerLimitDetail,
  ): any {
    this.logger.warn('The request has been throttled', {
      context,
      throttlerLimitDetail,
    });
    return super.throwThrottlingException(context, throttlerLimitDetail);
  }

  /**
   * Returns a unique identifier for the request to be used for throttling.
   * This method must return a Promise<string> to match the the base ThrottlerGuard signature.
   * @param context - The execution context of the request.
   * @returns A promise that resolves to a string identifier for the request.
   */
  protected async getTracker(context: ExecutionContext): Promise<string> {
    if (!context || typeof context.getType !== 'function') {
      return 'unknown';
    }

    let ip = 'unknown';
    if (context.getType() === 'http') {
      const req = context.switchToHttp().getRequest<CustomRequest>();
      ip = req?.ip || 'http-anonymous';
    } else if (context.getType<GqlContextType>() === 'graphql') {
      const gqlCtx = GqlExecutionContext.create(context);
      const req = gqlCtx.getContext<{ req: CustomRequest }>().req;
      ip = req?.ip || 'graphql-anonymous';
    }
    return ip;
  }

  /**
   * Override canActivate to handle GraphQL context properly.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (context.getType<GqlContextType>() === 'graphql') {
      const tracker = await this.getTracker(context);
      const { ttl, limit, blockDuration } = this.options[0] as {
        ttl: number;
        limit: number;
        blockDuration: number;
      };

      const key = this.generateKey(context, tracker, 'throttler');
      const { totalHits } = await this.storageService.increment(
        key,
        ttl,
        limit,
        blockDuration,
        'throttler',
      );

      if (totalHits > limit) {
        this.logger.warn(`GraphQL request throttled for tracker: ${tracker}`);
        throw this.throwThrottlingException(context, {
          limit,
          ttl,
          totalHits,
          key,
          tracker,
          timeToExpire: 0,
          isBlocked: false,
          timeToBlockExpire: 0,
        });
      }

      return true;
    }

    return super.canActivate(context);
  }
}
