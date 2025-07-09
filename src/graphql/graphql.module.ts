import { Module } from '@nestjs/common';
import { AppointmentModule } from 'src/appointment/appointment.module';
import { ReviewModule } from 'src/reviews/review.module';
import { ServiceItemModule } from 'src/serviceItem/service-item.module';
import { UserModule } from 'src/user/user.module';
import { ServiceItemDataLoader } from './loaders/service-item.dataloader';
import { UserDataLoader } from './loaders/user.dataloader';

@Module({
  imports: [UserModule, ServiceItemModule, AppointmentModule, ReviewModule],
  providers: [UserDataLoader, ServiceItemDataLoader],
})
export class GraphqlModule {}
