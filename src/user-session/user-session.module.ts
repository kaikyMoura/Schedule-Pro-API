import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSessionRepository } from './user-session.repository';

@Module({
  providers: [UserSessionRepository, PrismaService],
  exports: [UserSessionRepository],
})
export class UserSessionModule {}
