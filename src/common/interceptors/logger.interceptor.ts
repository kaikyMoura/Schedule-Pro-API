import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';
import { CustomRequest } from '../types/custom-request';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  /**
   * Intercepts incoming requests and logs the request details.
   * @param context - The execution context of the request.
   * @param next - The next handler in the request pipeline.
   * @returns An observable that emits the response after logging.
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Get the request object from the execution context
    // Use a custom request type to include user information
    const request = context.switchToHttp().getRequest<CustomRequest>();

    if (!request) {
      this.logger.warn('No request found in the execution context');
      return next.handle();
    }
    // Extract relevant information from the request
    const { method, url, body, query, params } = request;

    const now = Date.now();

    this.logger.log(`[Request] ${method} ${url}`);

    // Log the request body, query parameters, and route parameters
    if (process.env.NODE_ENV === 'development') {
      this.logger.debug?.(`Request Body: ${JSON.stringify(body)}`);
      this.logger.debug?.(`Request Query: ${JSON.stringify(query)}`);
      this.logger.debug?.(`Request Params: ${JSON.stringify(params)}`);
    }

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - now;
        this.logger.log(
          `Outgoing Response: ${method} ${url} - ${responseTime}ms`,
        );
      }),
    );
  }
}
