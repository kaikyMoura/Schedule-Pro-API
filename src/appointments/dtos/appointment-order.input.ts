import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/common/enums/sort-order.enum';

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: 'Sort order',
});

/**
 * User order input
 * @class UserOrderInput
 * @description User order input for user pagination.
 * @example
 * ```typescript
 * const orderBy: UserOrderInput = {
 *  name: SortOrder.ASC,
 *  city: SortOrder.DESC,
 *  state: SortOrder.ASC,
 *  country: SortOrder.DESC,
 *  createdAt: SortOrder.ASC,
 *  deletedAt: SortOrder.DESC,
 * }
 * ```
 */
@InputType()
export class AppointmentOrderInput {
  @Field(() => SortOrder, { name: 'orderByStatus', nullable: true })
  status?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByType', nullable: true })
  type?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByScheduledDate', nullable: true })
  scheduledDate?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByScheduledTime', nullable: true })
  scheduledTime?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByPrice', nullable: true })
  price?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCurrency', nullable: true })
  currency?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCreatedAt', nullable: true })
  createdAt?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByDeletedAt', nullable: true })
  deletedAt?: SortOrder;
}
