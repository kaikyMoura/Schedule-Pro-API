import { Field, InputType } from '@nestjs/graphql';
import { PaginationInput } from 'src/common/types/pagination.input';
import { PaymentOrderInput } from './payment-order.input';

/**
 * Payment pagination input
 * @class PaymentPaginationInput
 * @description Payment pagination input for payment pagination.
 * @example
 * ```typescript
 * const pagination: PaymentPaginationInput = {
 *  offset: 0,
 *  limit: 10,
 *  orderDirection: SortOrder.ASC,
 *  orderBy: { name: SortOrder.ASC },
 * }
 * ```
 */
@InputType()
export class PaymentPaginationInput extends PaginationInput {
  @Field(() => PaymentOrderInput, { nullable: true })
  orderBy?: PaymentOrderInput;
}
