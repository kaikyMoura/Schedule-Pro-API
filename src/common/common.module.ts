import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { CustomThrottlerGuard } from './guards/throttler.guard';
import { AuditInterceptor } from './interceptors/audit.interceptor';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { MemoryMonitorInterceptor } from './interceptors/memory-monitor.interceptor';
import { GlobalInterceptor } from './interceptors/global.interceptor';
import { GraphQLValidationInterceptor } from './interceptors/graphql-validation.interceptor';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { MetricsInterceptor } from './interceptors/metrics.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { MemoryMonitorTask } from './tasks/memory-monitor.task';
import { MemoryMonitor } from './utils/memory-monitor';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [
    GlobalExceptionFilter,
    GlobalInterceptor,
    LoggerInterceptor,
    AuditInterceptor,
    MetricsInterceptor,
    ResponseInterceptor,
    CustomThrottlerGuard,
    GraphQLValidationInterceptor,
    MemoryMonitorInterceptor,
    CacheInterceptor,
    MemoryMonitorTask,
    MemoryMonitor,
  ],
  exports: [
    GlobalExceptionFilter,
    GlobalInterceptor,
    LoggerInterceptor,
    AuditInterceptor,
    MetricsInterceptor,
    ResponseInterceptor,
    CustomThrottlerGuard,
    GraphQLValidationInterceptor,
    MemoryMonitorInterceptor,
    CacheInterceptor,
    MemoryMonitorTask,
    MemoryMonitor,
  ],
})
export class CommonModule {}
