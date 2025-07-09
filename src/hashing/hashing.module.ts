import { Module } from '@nestjs/common';
import { HashingService } from './hashing.service';

@Module({
  providers: [HashingService]
})
export class HashingModule {}
