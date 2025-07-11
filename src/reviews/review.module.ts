import { Module } from '@nestjs/common';
import { GoogleModule } from 'src/google/google.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReviewRepository } from './review.repository';
import { ReviewResolver } from './review.resolver';
import { ReviewService } from './review.service';

@Module({
  imports: [GoogleModule],
  providers: [ReviewService, ReviewRepository, ReviewResolver, PrismaService],
  exports: [ReviewService],
})
export class ReviewModule {}
