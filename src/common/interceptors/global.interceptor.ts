import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuditInterceptor } from './audit.interceptor';
import { LoggerInterceptor } from './logger.interceptor';
import { MetricsInterceptor } from './metrics.interceptor';
import { ResponseInterceptor } from './response.interceptor';

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  constructor(
    private readonly loggerInterceptor: LoggerInterceptor,
    private readonly auditInterceptor: AuditInterceptor,
    private readonly metricsInterceptor: MetricsInterceptor,
    private readonly responseInterceptor: ResponseInterceptor<any>,
  ) {}

  /**
   * Intercepts the request and response.
   * @param context - The execution context of the request.
   * @param next - The call handler to process the request.
   * @returns An observable that emits the response.
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return this.loggerInterceptor.intercept(context, {
      handle: () =>
        this.auditInterceptor.intercept(context, {
          handle: () =>
            this.metricsInterceptor.intercept(context, {
              handle: () => this.responseInterceptor.intercept(context, next),
            }),
        }),
    });
  }
}
