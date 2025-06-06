import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { EmailService } from 'src/common/services/email.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceItemController } from './service-item.controller';
import { ServiceItemRepository } from './service-item.repository';
import { ServiceItemService } from './service-item.service';
import { ServiceItemResolver } from './service-item.resolver';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [AuthModule],
  providers: [
    ServiceItemService,
    ServiceItemRepository,
    ServiceItemResolver,
    EmailService,
    PrismaService,
    UserService,
    UserRepository,
  ],
  controllers: [ServiceItemController],
})
export class ServiceItemModule {}
