import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/common/enums/sort-order.enum';

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: 'Sort order',
});

/**
 * ServiceItem order input
 * @class ServiceItemOrderInput
 * @description ServiceItem order input for serviceItem pagination.
 * @example
 * ```typescript
 * const orderBy: ServiceItemOrderInput = {
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
export class ServiceItemOrderInput {
  @Field(() => SortOrder, { name: 'orderByName', nullable: true })
  name?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCategory', nullable: true })
  category?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByBasePrice', nullable: true })
  basePrice?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCurrency', nullable: true })
  currency?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByDurationMinutes', nullable: true })
  durationMinutes?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByBufferMinutes', nullable: true })
  bufferMinutes?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByIsActive', nullable: true })
  isActive?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByIsOnline', nullable: true })
  isOnline?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCreatedAt', nullable: true })
  createdAt?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByDeletedAt', nullable: true })
  deletedAt?: SortOrder;
}
