import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomRequest } from '../types/custom-request';
import { MemoryMonitor } from '../utils/memory-monitor';

@Injectable()
export class MemoryMonitorInterceptor implements NestInterceptor {
  constructor(private readonly memoryMonitor: MemoryMonitor) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();
    const contextType = context.getType<GqlContextType>();

    let method: string | undefined;
    let url: string | undefined;

    try {
      if (contextType === 'http') {
        const request = context.switchToHttp().getRequest<CustomRequest>();
        method = request.method;
        url = request.url;
      } else if (contextType === 'graphql') {
        const gqlContext = GqlExecutionContext.create(context);
        const info = gqlContext.getInfo<{
          fieldName: string;
          operation: { name: { value: string } };
        }>();
        method = info?.operation?.name?.value || 'query';
        url = `GraphQL: ${info?.fieldName || 'unknown'}`;
      }
    } catch {
      method = 'unknown';
      url = 'unknown';
      console.log('Error getting method and url', method, url);
    }

    // Log memory usage before request with context
    this.memoryMonitor.logMemoryUsageWithContext(`BEFORE ${method} ${url}`);

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startTime;

        // Log memory usage after request with context
        this.memoryMonitor.logMemoryUsageWithContext(
          `AFTER ${method} ${url} (${duration}ms)`,
        );

        // Force garbage collection for long-running requests
        if (duration > 5000) {
          this.memoryMonitor.forceGarbageCollection();
        }

        // Log detailed memory info for health checks
        if (url?.includes('health')) {
          this.memoryMonitor.logDetailedMemoryInfo();
        }
      }),
    );
  }
}
