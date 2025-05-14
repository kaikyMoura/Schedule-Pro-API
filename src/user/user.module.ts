import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { EmailService } from 'src/common/services/email.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';

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
