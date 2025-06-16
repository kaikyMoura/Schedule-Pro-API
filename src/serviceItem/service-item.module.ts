import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MailModule } from 'src/mail/mail.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { ServiceItemController } from './service-item.controller';
import { ServiceItemRepository } from './service-item.repository';
import { ServiceItemResolver } from './service-item.resolver';
import { ServiceItemService } from './service-item.service';

@Module({
  imports: [AuthModule, UserModule, MailModule],
  providers: [
    ServiceItemService,
    ServiceItemRepository,
    ServiceItemResolver,
    PrismaService,
  ],
  controllers: [ServiceItemController],
  exports: [ServiceItemService],
})
export class ServiceItemModule {}
