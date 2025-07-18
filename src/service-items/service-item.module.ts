import { Module, forwardRef } from '@nestjs/common';
import { ServiceItemDataLoader } from 'src/service-items/dataloaders/service-item.loader';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceItemRepository } from './service-item.repository';
import { ServiceItemResolver } from './service-item.resolver';
import { ServiceItemService } from './service-item.service';
import { AppointmentModule } from 'src/appointments/appointment.module';
import { ReviewModule } from 'src/reviews/review.module';
import { StaffServiceModule } from 'src/staff-services/staff-service.module';
import { UserModule } from 'src/users/user.module';
import { PaymentModule } from 'src/payments/payment.module';
import { StripeService } from 'src/payments/stripe/stripe.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => AppointmentModule),
    forwardRef(() => ReviewModule),
    forwardRef(() => StaffServiceModule),
    forwardRef(() => PaymentModule),
  ],
  providers: [
    ServiceItemService,
    ServiceItemRepository,
    ServiceItemResolver,
    ServiceItemDataLoader,
    PrismaService,
    StripeService,
  ],
  exports: [ServiceItemService],
})
export class ServiceItemModule {}
