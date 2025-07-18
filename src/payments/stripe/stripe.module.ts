import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { ConfigService } from '@nestjs/config';
import { StripeResolver } from './stripe.resolver';

@Module({
  providers: [StripeService, ConfigService, StripeResolver],
  exports: [StripeService],
})
export class StripeModule {}
