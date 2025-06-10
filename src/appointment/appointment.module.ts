import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentController } from './appointment.controller';
import { AppointmentRepository } from './appointment.repository';
import { AppointmentService } from './appointment.service';
import { AppointmentResolver } from './appointment.resolver';
import { UserService } from 'src/user/user.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [AuthModule],
  providers: [
    AppointmentService,
    AppointmentRepository,
    AppointmentResolver,
    MailService,
    PrismaService,
    UserService,
    UserRepository,
  ],
  controllers: [AppointmentController],
  exports: [AppointmentService],
})
export class AppointmentModule {}
