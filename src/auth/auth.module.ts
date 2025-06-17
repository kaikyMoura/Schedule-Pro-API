import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MailModule } from 'src/mail/mail.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSessionModule } from 'src/user-session/user-session.module';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TokenService } from './token.service';
import { TwilioService } from './utils/twilio.service';

@Module({
  imports: [PassportModule, MailModule, UserSessionModule, UserModule],
  controllers: [AuthController],
  providers: [
    AuthController,
    AuthService,
    TwilioService,
    TokenService,
    PrismaService,
    JwtStrategy,
  ],
  exports: [AuthService, AuthController],
})
export class AuthModule {}
