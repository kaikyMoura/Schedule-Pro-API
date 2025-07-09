import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewType } from './types/review.entity';
import { ReviewsFilterInput } from './dto/reviews-filter.input';
import { ReviewsOrderInput } from './dto/reviews-order.input';
import { PaginationInput } from 'src/common/types/pagination.input';
import { PaginatedReviews } from './types/paginated-reviews.type';
import { ReviewsResponse } from './types/reviews-response.type';
import { CreateReviewInput } from './dto/create-review-input';

@Resolver(ReviewType)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => PaginatedReviews, { name: 'reviews' })
  async reviews(
    @Args('filter', { nullable: true }) filter?: ReviewsFilterInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
    @Args('orderBy', { nullable: true }) orderBy?: ReviewsOrderInput,
  ): Promise<PaginatedReviews> {
    return this.reviewService.findMany(undefined, {
      where: filter,
      orderBy: orderBy,
      skip: pagination?.page ? pagination.page * pagination.limit : undefined,
      take: pagination?.limit,
    });
  }

  @Query(() => ReviewsResponse, { name: 'review' })
  async review(@Args('id') id: string): Promise<ReviewsResponse> {
    const review = await this.reviewService.findById(id);
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    return {
      success: true,
      message: `Review found successfully`,
      data: this.reviewService.toReviewType(review),
    };
  }

  @Mutation(() => ReviewsResponse, { name: 'createReview' })
  async createReview(
    @Args('input') input: CreateReviewInput,
  ): Promise<ReviewsResponse> {
    const review = await this.reviewService.create(input);
    return {
      success: true,
      message: `Review created successfully`,
      data: this.reviewService.toReviewType(review),
    };
  }
}
