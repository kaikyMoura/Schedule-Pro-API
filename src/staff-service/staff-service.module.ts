import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceItemRepository } from 'src/serviceItem/service-item.repository';
import { ServiceItemService } from 'src/serviceItem/service-item.service';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { StaffServiceController } from './staff-service.controller';
import { StaffServiceRepository } from './staff-service.repository';
import { StaffServiceResolver } from './staff-service.resolver';
import { StaffServiceService } from './staff-service.service';

@Module({
  imports: [AuthModule],
  providers: [
    StaffServiceService,
    StaffServiceController,
    StaffServiceResolver,
    StaffServiceRepository,
    ServiceItemService,
    ServiceItemRepository,
    UserService,
    UserRepository,
    MailService,
    PrismaService,
  ],
  controllers: [StaffServiceController],
})
export class StaffServiceModule {}
