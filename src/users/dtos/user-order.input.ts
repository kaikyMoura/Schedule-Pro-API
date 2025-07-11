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
export class UserOrderInput {
  @Field(() => SortOrder, { name: 'orderByName', nullable: true })
  name?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCity', nullable: true })
  city?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByState', nullable: true })
  state?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCountry', nullable: true })
  country?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCreatedAt', nullable: true })
  createdAt?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByDeletedAt', nullable: true })
  deletedAt?: SortOrder;
}
