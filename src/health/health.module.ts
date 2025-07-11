import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HealthController } from './health.controller';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  controllers: [HealthController],
  imports: [TerminusModule, PrismaModule, RedisModule],
})
export class HealthModule {}
