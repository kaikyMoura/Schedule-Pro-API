import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceItemModule } from 'src/service-items/service-item.module';
import { ServiceItemRepository } from 'src/service-items/service-item.repository';
import { ServiceItemService } from 'src/service-items/service-item.service';
import { UserModule } from 'src/users/user.module';
import { StaffServiceRepository } from './staff-service.repository';
import { StaffServiceResolver } from './staff-service.resolver';
import { StaffServiceService } from './staff-service.service';

@Module({
  imports: [UserModule, forwardRef(() => ServiceItemModule)],
  providers: [
    StaffServiceService,
    StaffServiceResolver,
    StaffServiceRepository,
    ServiceItemService,
    ServiceItemRepository,
    PrismaService,
  ],
  exports: [StaffServiceService],
})
export class StaffServiceModule {}
