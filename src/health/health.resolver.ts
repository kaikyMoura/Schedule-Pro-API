import { Query, Resolver } from '@nestjs/graphql';
import { HealthResponse } from './types/health-response.type';

@Resolver(HealthResponse)
export class HealthResolver {
  @Query(() => HealthResponse, { name: 'health' })
  health(): HealthResponse {
    return {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}
