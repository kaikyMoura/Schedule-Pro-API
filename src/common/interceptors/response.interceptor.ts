import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
  path?: string;
  method?: string;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  private readonly logger = new Logger(ResponseInterceptor.name);
  /**
   * Intercepts the response and formats it into a standard structure.
   * @param context - The execution context of the request.
   * @param next - The call handler to process the request.
   * @returns An observable that emits the formatted response.
   */
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const contextType = context.getType<GqlContextType>();

    let path: string | undefined;
    let method: string | undefined;

    try {
      if (contextType === 'http') {
        const request = context.switchToHttp().getRequest<Request>();
        path = request.url;
        method = request.method;
      } else if (contextType === 'graphql') {
        const gqlContext = GqlExecutionContext.create(context);
        const info = gqlContext.getInfo<{
          fieldName: string;
          operation: { name: { value: string } };
        }>();
        path = `GraphQL: ${info?.fieldName || 'unknown'}`;
        method = info?.operation?.name?.value || 'query';
      }
    } catch {
      path = 'unknown';
      method = 'unknown';
    }

    return next.handle().pipe(
      map((data: T) => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
        path,
        method,
      })),
    );
  }
}
