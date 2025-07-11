import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlContextType } from '@nestjs/graphql';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();

      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let message = 'Internal server error';
      let code = 'INTERNAL_ERROR';
      if (exception instanceof HttpException) {
        status = exception.getStatus();
        const exceptionResponse = exception.getResponse();

        if (typeof exceptionResponse === 'string') {
          message = exceptionResponse;
        } else if (
          typeof exceptionResponse === 'object' &&
          exceptionResponse !== null
        ) {
          const resp = exceptionResponse as Record<string, unknown>;
          message =
            typeof resp.message === 'string' ? resp.message : exception.message;
          code = typeof resp.code === 'string' ? resp.code : 'HTTP_EXCEPTION';
        }
      } else if (exception instanceof PrismaClientKnownRequestError) {
        status = HttpStatus.BAD_REQUEST;

        switch (exception.code) {
          case 'P2002':
            message = 'Unique constraint violation';
            code = 'UNIQUE_CONSTRAINT_VIOLATION';
            break;
          case 'P2025':
            message = 'Record not found';
            code = 'RECORD_NOT_FOUND';
            status = HttpStatus.NOT_FOUND;
            break;
          default:
            message = 'Database error';
            code = 'DATABASE_ERROR';
        }
      } else if (exception instanceof Error) {
        message = exception.message;
        code = 'APPLICATION_ERROR';
      }
      const errorResponse = {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
        message,
        code,
        ...(process.env.NODE_ENV === 'development' && {
          stack: exception instanceof Error ? exception.stack : undefined,
        }),
      };
      this.logger.error(
        `${request.method} ${request.url} - ${status} - ${message}`,
        exception instanceof Error ? exception.stack : 'Unknown error',
      );
      response.status(status).json(errorResponse);
    } else if (host.getType<GqlContextType>() === 'graphql') {
      const gqlHost = GqlArgumentsHost.create(host);
      const info = gqlHost.getInfo<{ fieldName: string }>();

      this.logger.error(
        `GraphQL Error - ${info && typeof info.fieldName === 'string' ? info.fieldName : 'unknown field'}: ${exception instanceof Error ? exception.message : String(exception)}`,
        exception instanceof Error ? exception.stack : 'Unknown error',
      );

      if (exception instanceof BadRequestException) {
        const response = exception.getResponse() as {
          message?: string;
          errors?: unknown[];
        };
        const graphqlError = new Error(response.message || 'Validation failed');
        (graphqlError as { extensions?: unknown }).extensions = {
          code: 'VALIDATION_ERROR',
          errors: response.errors || [],
          timestamp: new Date().toISOString(),
        };
        throw graphqlError;
      }

      if (exception instanceof ConflictException) {
        const graphqlError = new Error(exception.message);
        (graphqlError as { extensions?: unknown }).extensions = {
          code: 'CONFLICT_ERROR',
          timestamp: new Date().toISOString(),
        };
        throw graphqlError;
      }

      if (exception instanceof HttpException) {
        const graphqlError = new Error(exception.message);
        (graphqlError as { extensions?: unknown }).extensions = {
          code: 'HTTP_EXCEPTION',
          statusCode: exception.getStatus(),
          timestamp: new Date().toISOString(),
        };
        throw graphqlError;
      }

      const errorMessage =
        process.env.NODE_ENV === 'development'
          ? exception instanceof Error
            ? exception.message
            : String(exception)
          : 'Internal server error';

      const graphqlError = new Error(errorMessage);
      (graphqlError as { extensions?: unknown }).extensions = {
        code: 'INTERNAL_ERROR',
        timestamp: new Date().toISOString(),
      };
      throw graphqlError;
    }
  }
}
