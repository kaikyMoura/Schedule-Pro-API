import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { EmailService } from 'src/common/services/email.service';
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
    EmailService,
    PrismaService,
  ],
  controllers: [UserController],
})
export class UserModule {}
