import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MailModule } from 'src/mail/mail.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSessionModule } from 'src/user-session/user-session.module';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TokenService } from './token.service';
import { TwilioService } from './utils/twilio.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [PassportModule, MailModule, UserSessionModule, UserModule],
  providers: [
    AuthResolver,
    AuthService,
    TwilioService,
    TokenService,
    PrismaService,
    JwtStrategy,
  ],
  exports: [AuthService, TwilioService],
})
export class AuthModule {}
