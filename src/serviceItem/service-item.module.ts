import { Module, forwardRef } from '@nestjs/common';
import { ServiceItemDataLoader } from 'src/serviceItem/dataloaders/service-item.loader';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceItemRepository } from './service-item.repository';
import { ServiceItemResolver } from './service-item.resolver';
import { ServiceItemService } from './service-item.service';
import { AppointmentModule } from 'src/appointment/appointment.module';
import { ReviewModule } from 'src/reviews/review.module';
import { StaffServiceModule } from 'src/staff-service/staff-service.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => AppointmentModule),
    forwardRef(() => ReviewModule),
    forwardRef(() => StaffServiceModule),
  ],
  providers: [
    ServiceItemService,
    ServiceItemRepository,
    ServiceItemResolver,
    ServiceItemDataLoader,
    PrismaService,
  ],
  exports: [ServiceItemService],
})
export class ServiceItemModule {}
