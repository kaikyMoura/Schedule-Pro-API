import { Module } from '@nestjs/common';
import { AiModule } from './ai/ai.module';
import { PubsubModule } from './pubsub/pubsub.module';

@Module({
  imports: [PubsubModule, AiModule],
  exports: [PubsubModule, AiModule],
})
export class GoogleModule {}
