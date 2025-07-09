import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { AuditAction } from 'prisma/app/generated/prisma/client';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomRequest } from '../types/custom-request';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private prisma: PrismaService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<CustomRequest>();
    const { method, url, body, user } = request;

    const userAgent = request.headers['user-agent'];
    const ipAddress = request.ip;
    // Only audit write operations
    if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(method!)) {
      return next.handle();
    }
    const startTime = Date.now();
    return next.handle().pipe(
      tap((response: Response): void => {
        (async () => {
          try {
            const urlParts: string[] =
              typeof url === 'string' ? url.split('/') : [];
            const entityType: string | undefined = urlParts[3];
            const entityId: string | undefined = urlParts[4];
            let action = 'UNKNOWN';
            switch (method) {
              case 'POST':
                action = 'CREATE';
                break;
              case 'PUT':
              case 'PATCH':
                action = 'UPDATE';
                break;
              case 'DELETE':
                action = 'DELETE';
                break;
            }
            // Log audit entry
            await this.prisma.auditLog.create({
              data: {
                tableName: entityType,
                recordId:
                  entityId ??
                  (typeof response === 'object' &&
                  response !== null &&
                  'id' in response
                    ? String((response.id as string) ?? 'unknown')
                    : 'unknown'),
                action: action as AuditAction,
                oldValues:
                  method === 'PUT' || method === 'PATCH'
                    ? body && typeof body === 'object'
                      ? { ...body }
                      : undefined
                    : undefined,
                newValues:
                  method === 'DELETE'
                    ? undefined
                    : body && typeof body === 'object'
                      ? { ...body }
                      : undefined,
                userId: user?.sub,
                ipAddress,
                userAgent,
              },
            });
          } catch (error) {
            console.error('Audit logging failed:', error);
          }
        })()
          .catch((error) => {
            console.error('Audit logging failed:', error);
          })
          .finally(() => {
            const endTime = Date.now();
            const duration = endTime - startTime;
            console.log(`Audit logging completed in ${duration}ms`);
          });
      }),
    );
  }
}
