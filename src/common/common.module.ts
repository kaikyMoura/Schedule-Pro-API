import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { GlobalInterceptor } from './interceptors/global.interceptor';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { AuditInterceptor } from './interceptors/audit.interceptor';
import { MetricsInterceptor } from './interceptors/metrics.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CustomThrottlerGuard } from './guards/throttler.guard';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [
    GlobalExceptionFilter,
    GlobalInterceptor,
    LoggerInterceptor,
    AuditInterceptor,
    MetricsInterceptor,
    ResponseInterceptor,
    LoggerMiddleware,
    CustomThrottlerGuard,
  ],
  exports: [
    GlobalExceptionFilter,
    GlobalInterceptor,
    LoggerInterceptor,
    AuditInterceptor,
    MetricsInterceptor,
    ResponseInterceptor,
    LoggerMiddleware,
    CustomThrottlerGuard,
  ],
})
export class CommonModule {}
