import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomRequest } from '../types/custom-request';
import { CustomResponse } from '../types/custom-response';

interface RequestMetrics {
  method: string;
  route: string;
  statusCode: number;
  responseTime: number;
  timestamp: Date;
  userAgent?: string;
  userId?: string;
}

@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  private metrics: RequestMetrics[] = [];
  private readonly maxMetrics = 1000;

  constructor(private configService: ConfigService) {}

  /**
   * Intercept all incoming requests, log metrics, and log slow requests
   * @param context - The execution context of the request
   * @param next - The next handler in the request pipeline
   * @returns An observable that emits the response with metrics recorded
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const contextType = context.getType<GqlContextType>();
    const startTime = Date.now();

    let method: string | undefined;
    let route: string | undefined;
    let statusCode: number | undefined;
    let userAgent: string | undefined;
    let userId: string | undefined;

    try {
      if (contextType === 'http') {
        const request = context.switchToHttp().getRequest<CustomRequest>();
        const response = context.switchToHttp().getResponse<CustomResponse>();

        method = request.method;
        route = request.route?.path ?? request.originalUrl;
        statusCode = response.status as unknown as number;
        userAgent = request.headers['user-agent'];
        userId = request.user?.sub;
      } else if (contextType === 'graphql') {
        const gqlContext = GqlExecutionContext.create(context);
        const info = gqlContext.getInfo<{
          fieldName: string;
          operation: { name: { value: string } };
        }>();
        const ctx = gqlContext.getContext<{
          currentUser?: { sub: string };
          req?: { headers: { 'user-agent': string } };
        }>();

        method = info?.operation?.name?.value || 'query';
        route = `GraphQL: ${info?.fieldName || 'unknown'}`;
        statusCode = 200;
        userAgent = ctx.req?.headers?.['user-agent'];
        userId = ctx.currentUser?.sub;
      }
    } catch {
      method = 'unknown';
      route = 'unknown';
      statusCode = 500;
    }

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - startTime;

        const metric: RequestMetrics = {
          method: method || 'unknown',
          route: route || 'unknown',
          statusCode: statusCode || 500,
          responseTime,
          timestamp: new Date(),
          userAgent,
          userId,
        };
        this.addMetric(metric);

        if (responseTime > 1000) {
          console.warn(
            `Slow request detected: ${metric.method} ${metric.route} - ${responseTime}ms`,
          );
        }
      }),
    );
  }

  /**
   * Adds a metric to the metrics array and ensures the array size does not exceed the maximum limit.
   * Removes the oldest metrics if the size exceeds the limit to prevent memory leaks.
   * @param metric - The request metric to be added.
   */
  private addMetric(metric: RequestMetrics): void {
    this.metrics.push(metric);
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }
  }

  /**
   * Retrieves a copy of all recorded request metrics.
   * @returns An array of RequestMetrics objects, each representing a recorded request metric.
   */
  getMetrics(): RequestMetrics[] {
    return [...this.metrics];
  }

  /**
   * Calculates the average response time for the last N minutes.
   * The average is based on the metrics collected since the application started.
   * If no metrics are available, the method returns 0.
   * @param minutes - The number of minutes to consider for the average response time. Defaults to 5.
   * @returns The average response time in milliseconds.
   */
  getAverageResponseTime(minutes: number = 5): number {
    const cutoff = new Date(Date.now() - minutes * 60 * 1000);
    const recentMetrics = this.metrics.filter((m) => m.timestamp > cutoff);

    if (recentMetrics.length === 0) return 0;

    const total = recentMetrics.reduce((sum, m) => sum + m.responseTime, 0);
    return total / recentMetrics.length;
  }

  /**
   * Retrieves the count of requests made in the last N minutes.
   * The count is based on the metrics collected since the application started.
   * If no metrics are available, the method returns 0.
   * @param minutes - The number of minutes to consider for counting requests. Defaults to 5.
   * @returns The number of requests made in the specified time frame.
   */
  getRequestCount(minutes: number = 5): number {
    const cutoff = new Date(Date.now() - minutes * 60 * 1000);
    return this.metrics.filter((m) => m.timestamp > cutoff).length;
  }

  /**
   * Calculates the error rate of requests for the last N minutes.
   * The error rate is determined by the percentage of requests with status codes 400 and above.
   * If no metrics are available, the method returns 0.
   * @param minutes - The number of minutes to consider for calculating the error rate. Defaults to 5.
   * @returns The error rate as a percentage.
   */
  getErrorRate(minutes: number = 5): number {
    const cutoff = new Date(Date.now() - minutes * 60 * 1000);
    const recentMetrics = this.metrics.filter((m) => m.timestamp > cutoff);

    if (recentMetrics.length === 0) return 0;

    const errorCount = recentMetrics.filter((m) => m.statusCode >= 400).length;
    return (errorCount / recentMetrics.length) * 100;
  }
}
