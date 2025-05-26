import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSessionRepository } from './user-session.repository';

@Module({
  imports: [AuthModule],
  providers: [UserSessionRepository, PrismaService],
  controllers: [],
})
export class UserModule {}
