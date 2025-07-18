import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/common/enums/sort-order.enum';

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: 'Sort order',
});

/**
 * Payment order input
 * @class PaymentOrderInput
 * @description Payment order input for payment pagination.
 * @example
 * ```typescript
 * const orderBy: PaymentOrderInput = {
 *  currency: SortOrder.ASC,
 *  amount: SortOrder.ASC,
 *  createdAt: SortOrder.ASC,
 * }
 * ```
 */
@InputType()
export class PaymentOrderInput {
  @Field(() => SortOrder, { name: 'orderByCreatedAt', nullable: true })
  currency?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByAmount', nullable: true })
  amount?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCreatedAt', nullable: true })
  createdAt?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByDeletedAt', nullable: true })
  deletedAt?: SortOrder;
}
