import { Module } from '@nestjs/common';
import { HashingModule } from 'src/hashing/hashing.module';
import { NotificationModule } from 'src/notification/notification.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [NotificationModule, HashingModule],
  providers: [UserService, UserRepository, UserResolver, PrismaService],
  exports: [UserService],
})
export class UserModule {}
