import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { PaymentType } from './payment.type';
/**
 * Paginated payments type
 * @class PaginatedPayments
 * @description Paginated payments type for payments.
 * @example
 * ```typescript
 * const paginatedPayments: PaginatedPayments = {
 *  nodes: [PaymentType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedPayments extends PaginatedResult(PaymentType) {}
