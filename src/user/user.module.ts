import { Module } from '@nestjs/common';
import { MailModule } from 'src/mail/mail.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [MailModule],
  providers: [UserService, UserRepository, UserResolver, PrismaService],
  controllers: [UserController],
  exports: [UserService, UserRepository],
})
export class UserModule {}
