import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserSessionRepository } from 'src/user-session/user-session.repository';
import { EmailService } from 'src/common/services/email.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthController,
    AuthService,
    EmailService,
    JwtService,
    UserService,
    UserSessionRepository,
    UserRepository,
    PrismaService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
  exports: [AuthService, AuthController],
})
export class AuthModule {}
