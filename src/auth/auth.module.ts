import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { HashingModule } from 'src/hashing/hashing.module';
import { NotificationModule } from 'src/notification/notification.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSessionModule } from 'src/user-session/user-session.module';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TokenService } from './token.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [
    PassportModule,
    NotificationModule,
    UserSessionModule,
    UserModule,
    HashingModule,
  ],
  providers: [
    AuthResolver,
    AuthService,
    TokenService,
    PrismaService,
    JwtStrategy,
    JwtAuthGuard,
    RolesGuard,
  ],
  exports: [AuthService, TokenService, JwtStrategy, JwtAuthGuard, RolesGuard],
})
export class AuthModule {}
