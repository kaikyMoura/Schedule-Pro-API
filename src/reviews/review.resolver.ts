import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginationInput } from 'src/common/types/pagination.input';
import { CreateReviewInput } from './dto/create-review-input';
import { ReviewFilterInput } from './dto/reviews-filter.input';
import { ReviewOrderInput } from './dto/reviews-order.input';
import { ReviewService } from './review.service';
import { PaginatedReview } from './types/paginated-review.type';
import { ReviewsResponse } from './types/review-response.type';
import { ReviewType } from './types/review.type';
import { PubsubService } from 'src/google/pubsub/pubsub.service';

@Resolver(ReviewType)
export class ReviewResolver {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly pubsubService: PubsubService,
  ) {}

  @Query(() => PaginatedReview, { name: 'reviews' })
  async reviews(
    @Args('filter', { nullable: true }) filter?: ReviewFilterInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
    @Args('orderBy', { nullable: true }) orderBy?: ReviewOrderInput,
  ): Promise<PaginatedReview> {
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
    this.pubsubService.publishMessage('addReview-sub', JSON.stringify(review));

    return {
      success: true,
      message: `Review created successfully`,
      data: this.reviewService.toReviewType(review),
    };
  }
}
