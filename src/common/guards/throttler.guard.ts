import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
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
    const request = context.switchToHttp().getRequest<CustomRequest>();
    const path = request.route?.path;

    // Skip throttling for health check endpoint
    if (path === '/health') {
      return true;
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
    // Log custom throttling message
    this.logger.warn('The request has been throttled', {
      context,
      throttlerLimitDetail,
    });
    return super.throwThrottlingException(context, throttlerLimitDetail);
  }
}
