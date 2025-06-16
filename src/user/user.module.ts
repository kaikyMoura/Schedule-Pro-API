import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';

@Module({
  imports: [AuthModule],
  providers: [
    UserService,
    UserRepository,
    UserResolver,
    MailService,
    PrismaService,
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
