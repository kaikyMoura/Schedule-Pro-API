import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable, from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private readonly ttl = 60; // segundos

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const info = ctx.getInfo<{
      parentType: { name: string };
      fieldName: string;
    }>();
    const args = ctx.getArgs<{ [key: string]: any }>();
    const parentType = info?.parentType?.name || 'UnknownParent';
    const fieldName = info?.fieldName || 'UnknownField';
    const key = `gql:${parentType}:${fieldName}:${JSON.stringify(args)}`;

    if (
      parentType === 'Mutation' &&
      fieldName.toLowerCase().includes('login')
    ) {
      return next.handle();
    }

    return from(this.cacheManager.get(key)).pipe(
      switchMap((cached: any) => {
        if (cached !== undefined && cached !== null) {
          return from([cached]);
        }
        return next.handle().pipe(
          tap((response) => {
            if (response !== undefined && response !== null) {
              void this.cacheManager.set(key, response, this.ttl);
            }
          }),
        );
      }),
    );
  }
}
