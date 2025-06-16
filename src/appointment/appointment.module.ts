import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MailModule } from 'src/mail/mail.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceItemModule } from 'src/serviceItem/service-item.module';
import { UserModule } from 'src/user/user.module';
import { AppointmentController } from './appointment.controller';
import { AppointmentRepository } from './appointment.repository';
import { AppointmentResolver } from './appointment.resolver';
import { AppointmentService } from './appointment.service';

@Module({
  imports: [AuthModule, UserModule, MailModule, ServiceItemModule],
  providers: [
    AppointmentService,
    AppointmentRepository,
    AppointmentResolver,
    PrismaService,
  ],
  controllers: [AppointmentController],
  exports: [AppointmentService],
})
export class AppointmentModule {}
