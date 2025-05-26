import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { EmailService } from 'src/common/services/email.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { StaffAvailabilityRepository } from './staff-availability.repository';
import { StaffAvailabilityResolver } from './staff-availability.resolver';
import { StaffAvailabilityService } from './staff-availability.service';
import { StaffAvailabilityController } from './staff-availability.controller';
import { UserService } from 'src/user/user.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [AuthModule],
  providers: [
    StaffAvailabilityService,
    StaffAvailabilityRepository,
    StaffAvailabilityResolver,
    UserService,
    UserRepository,
    EmailService,
    PrismaService,
  ],
  controllers: [StaffAvailabilityController],
})
export class StaffAvailabilityModule {}
