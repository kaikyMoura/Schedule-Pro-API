import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { StaffAvailabilityRepository } from './staff-availability.repository';
import { StaffAvailabilityResolver } from './staff-availability.resolver';
import { StaffAvailabilityService } from './staff-availability.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  providers: [
    StaffAvailabilityService,
    StaffAvailabilityRepository,
    StaffAvailabilityResolver,
    PrismaService,
  ],
})
export class StaffAvailabilityModule {}
