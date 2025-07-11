import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from '../loggers/logger.service';
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
    const contextType = context.getType<GqlContextType>();

    let method: string | undefined;
    let url: string | undefined;
    let body: any;
    let query: any;
    let params: any;

    try {
      if (contextType === 'http') {
        const request = context.switchToHttp().getRequest<CustomRequest>();
        if (request) {
          method = request.method;
          url = request.url;
          body = request.body;
          query = request.query;
          params = request.params;
        }
      } else if (contextType === 'graphql') {
        const gqlContext = GqlExecutionContext.create(context);
        const info = gqlContext.getInfo<{
          fieldName: string;
          operation: { name: { value: string } };
        }>();
        method = info?.operation?.name?.value || 'query';
        url = `GraphQL: ${info?.fieldName || 'unknown'}`;
        body = gqlContext.getArgs<unknown>();
        query = null;
        params = null;
      }
    } catch {
      this.logger.warn('Error extracting request information from context');
      method = 'unknown';
      url = 'unknown';
    }

    if (!method || !url) {
      this.logger.warn('No request information found in the execution context');
      return next.handle();
    }

    const now = Date.now();

    this.logger.log(`[Request] ${method} ${url}`);

    if (process.env.NODE_ENV === 'development') {
      if (body) this.logger.debug?.(`Request Body: ${JSON.stringify(body)}`);
      if (query) this.logger.debug?.(`Request Query: ${JSON.stringify(query)}`);
      if (params)
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
