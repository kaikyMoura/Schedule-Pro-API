import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GraphQLValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        const gqlContext = GqlExecutionContext.create(context);
        if (gqlContext.getType() === 'graphql') {
          if (error instanceof BadRequestException) {
            const response = error.getResponse() as {
              message: string;
              errors: any[];
            };

            const formattedError = {
              message: response.message || 'Validation failed',
              code: 'VALIDATION_ERROR',
              errors: response.errors || [],
              timestamp: new Date().toISOString(),
            };

            return throwError(() => new BadRequestException(formattedError));
          }
        }

        return throwError(() => error as Error);
      }),
    );
  }
}
