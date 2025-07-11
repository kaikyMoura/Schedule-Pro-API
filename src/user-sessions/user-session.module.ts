import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSessionRepository } from './user-session.repository';
import { UserSessionService } from './user-session.service';

@Module({
  providers: [UserSessionRepository, PrismaService, UserSessionService],
  exports: [UserSessionService],
})
export class UserSessionModule {}
