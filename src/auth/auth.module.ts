import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
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
    MailService,
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
