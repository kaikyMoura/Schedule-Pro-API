import { Module } from '@nestjs/common';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { LoggingInterceptor } from './interceptors/logger.interceptor';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  providers: [
    GlobalExceptionFilter,
    ResponseInterceptor,
    LoggingInterceptor,
    LoggerMiddleware,
  ],
  exports: [
    GlobalExceptionFilter,
    ResponseInterceptor,
    LoggingInterceptor,
    LoggerMiddleware,
  ],
})
export class CommonModule {}
