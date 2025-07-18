import { Module } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { PaymentService } from './payment.service';
import { StripeModule } from './stripe/stripe.module';
import { StripeService } from './stripe/stripe.service';

@Module({
  imports: [StripeModule],
  providers: [PaymentService, PaymentRepository, StripeService],
  exports: [PaymentService, StripeService],
})
export class PaymentModule {}
