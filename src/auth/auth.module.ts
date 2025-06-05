import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/common/services/email.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSessionRepository } from 'src/user-session/user-session.repository';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TwilioService } from './utils/twilio.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthController,
    AuthService,
    EmailService,
    JwtService,
    UserService,
    TwilioService,
    UserSessionRepository,
    UserRepository,
    PrismaService,
  ],
  exports: [AuthService, AuthController],
})
export class AuthModule {}
