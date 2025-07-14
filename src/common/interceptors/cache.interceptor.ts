import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { Observable, from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private readonly ttl: number;

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private configService: ConfigService,
  ) {
    this.ttl = this.configService.get<number>('THROTTLER_TTL', 60);
  }

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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return from(this.cacheManager.get(key)).pipe(
      switchMap((cached: any) => {
        if (cached !== undefined && cached !== null) {
          return from([cached]);
        }
        return next.handle().pipe(
          tap((response) => {
            if (response !== undefined && response !== null) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
              void this.cacheManager.set(key, response, this.ttl);
            }
          }),
        );
      }),
    );
  }
}
