import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { NotificationModule } from 'src/notifications/notification.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceItemModule } from 'src/service-items/service-item.module';
import { UserModule } from 'src/users/user.module';
import { AppointmentRepository } from './appointment.repository';
import { AppointmentResolver } from './appointment.resolver';
import { AppointmentService } from './appointment.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    NotificationModule,
    forwardRef(() => ServiceItemModule),
  ],
  providers: [
    AppointmentService,
    AppointmentRepository,
    AppointmentResolver,
    PrismaService,
  ],
  exports: [AppointmentService],
})
export class AppointmentModule {}
