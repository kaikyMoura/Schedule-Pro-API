import { ObjectType } from '@nestjs/graphql';
import { MutationResponseType } from 'src/common/factorys/mutation-response.factory';
import { ReviewType } from './review.entity';

/**
 * Reviews response type
 * @class ReviewsResponse
 * @description Reviews response type for reviews.
 * @example
 * ```typescript
 * const reviewsResponse: ReviewsResponse = {
 *  success: true,
 *  message: 'Reviews created successfully',
 *  data: ReviewType,
 *  error: null,
 * }
 * ```
 */
@ObjectType()
export class ReviewsResponse extends MutationResponseType(ReviewType) {}
