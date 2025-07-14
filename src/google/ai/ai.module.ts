import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [AiService, ConfigService],
  exports: [AiService],
})
export class AiModule {}
