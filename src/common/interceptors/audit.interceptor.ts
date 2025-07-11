import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Response } from 'express';
import { AuditAction, User } from 'prisma/app/generated/prisma/client';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomRequest } from '../types/custom-request';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private prisma: PrismaService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (context.getType() === 'http') {
      return this.handleHttpRequest(context, next);
    } else if (context.getType<GqlContextType>() === 'graphql') {
      return this.handleGraphQLRequest(context, next);
    }

    return next.handle();
  }

  private handleHttpRequest(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const request = context.switchToHttp().getRequest<CustomRequest>();
    const { method, url, body, user } = request;

    const userAgent = request.headers['user-agent'];
    const ipAddress = request.ip;

    if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(method!)) {
      return next.handle();
    }

    const startTime = Date.now();
    return next.handle().pipe(
      tap((response: Response): void => {
        this.logAuditEntry({
          method: method ?? '',
          url: (url as string) ?? '',
          body,
          user,
          userAgent: userAgent ?? '',
          ipAddress: ipAddress ?? '',
          response,
          startTime,
        }).catch((error) => {
          console.error('Audit logging failed:', error);
        });
      }),
    );
  }

  private handleGraphQLRequest(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const gqlCtx = GqlExecutionContext.create(context);
    const info = gqlCtx.getInfo<{
      operation: { operation: string };
      fieldName: string;
    }>();
    const ctx = gqlCtx.getContext<{
      currentUser: CustomRequest['user'];
      req: {
        headers: { 'user-agent': string };
        ip: string;
        body: { variables: any };
      };
    }>();

    if (info.operation.operation !== 'mutation') {
      return next.handle();
    }

    const user = ctx.currentUser;
    const userAgent = ctx.req?.headers?.['user-agent'];
    const ipAddress = ctx.req?.ip;
    const fieldName = info.fieldName;

    const startTime = Date.now();
    return next.handle().pipe(
      tap((response: any): void => {
        this.logAuditEntry({
          method: 'POST',
          url: `/graphql/${fieldName}`,
          body: ctx.req?.body?.variables as unknown,
          user,
          userAgent: userAgent ?? '',
          ipAddress: ipAddress ?? '',
          response: response as unknown,
          startTime,
          entityType: fieldName,
        }).catch((error) => {
          console.error('Audit logging failed:', error);
        });
      }),
    );
  }

  private async logAuditEntry(data: {
    method: string;
    url: string;
    body: any;
    user: any;
    userAgent: string;
    ipAddress: string;
    response: any;
    startTime: number;
    entityType?: string;
  }): Promise<void> {
    const {
      method,
      url,
      body,
      user,
      userAgent,
      ipAddress,
      response,
      startTime,
      entityType,
    } = data as {
      method: string;
      url: string;
      body: unknown;
      user: User;
      userAgent: string;
      ipAddress: string;
      response: unknown;
      startTime: number;
      entityType?: string;
    };

    try {
      const urlParts: string[] = typeof url === 'string' ? url.split('/') : [];
      const entityTypeFromUrl: string | undefined = entityType || urlParts[3];
      const entityId: string | undefined = urlParts[4];

      let action = 'INSERT';
      switch (method) {
        case 'POST':
          action = 'INSERT';
          break;
        case 'PUT':
        case 'PATCH':
          action = 'UPDATE';
          break;
        case 'DELETE':
          action = 'DELETE';
          break;
      }

      const recordId =
        entityId ??
        (typeof response === 'object' && response !== null && 'id' in response
          ? String(response.id as string)
          : undefined);

      if (recordId && recordId !== 'unknown') {
        await this.prisma.auditLog.create({
          data: {
            tableName: entityTypeFromUrl,
            recordId,
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
            userId: user?.id,
            ipAddress,
            userAgent,
          },
        });
      }
    } catch (error) {
      console.error('Audit logging failed:', error);
    } finally {
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log(`Audit logging completed in ${duration}ms`);
    }
  }
}
