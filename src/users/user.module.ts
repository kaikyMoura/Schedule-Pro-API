import { Module } from '@nestjs/common';
import { HashingModule } from 'src/hashings/hashing.module';
import { NotificationModule } from 'src/notifications/notification.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { IsUniqueEmailConstraint } from 'src/users/validators/unique-mail.validator';
import { IsUniquePhoneConstraint } from 'src/users/validators/unique-phone.validator';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [NotificationModule, HashingModule],
  providers: [
    UserService,
    UserRepository,
    UserResolver,
    PrismaService,
    IsUniqueEmailConstraint,
    IsUniquePhoneConstraint,
  ],
  exports: [UserService, IsUniqueEmailConstraint, IsUniquePhoneConstraint],
})
export class UserModule {}
