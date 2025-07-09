import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { ReviewType } from './review.entity';

/**
 * Paginated reviews type
 * @class PaginatedReviews
 * @description Paginated reviews type for reviews.
 * @example
 * ```typescript
 * const paginatedReviews: PaginatedReviews = {
 *  nodes: [ReviewType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedReviews extends PaginatedResult(ReviewType) {}
