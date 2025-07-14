import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HashingService } from './hashing.service';

@Module({
  providers: [HashingService, ConfigService],
  exports: [HashingService],
})
export class HashingModule {}
