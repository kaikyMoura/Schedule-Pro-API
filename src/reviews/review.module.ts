import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewRepository } from './review.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReviewResolver } from './review.resolver';

@Module({
  providers: [ReviewService, ReviewRepository, ReviewResolver, PrismaService],
  exports: [ReviewService],
})
export class ReviewModule {}
