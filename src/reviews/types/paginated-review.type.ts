import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { ReviewType } from './review.type';

/**
 * Paginated reviews type
 * @class PaginatedReview
 * @description Paginated reviews type for reviews.
 * @example
 * ```typescript
 * const paginatedReviews: PaginatedReview = {
 *  nodes: [ReviewType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedReview extends PaginatedResult(ReviewType) {}
