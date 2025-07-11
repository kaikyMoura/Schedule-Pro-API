import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/common/enums/sort-order.enum';

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: 'Sort order',
});

/**
 * Availability order input
 * @class AvailabilityOrderInput
 * @description Availability order input for availability pagination.
 * @example
 * ```typescript
 * const orderBy: AvailabilityOrderInput = {
 *  dayOfWeek: SortOrder.ASC,
 *  startTime: SortOrder.DESC,
 *  endTime: SortOrder.ASC,
 *  createdAt: SortOrder.ASC,
 *  updatedAt: SortOrder.DESC,
 * }
 * ```
 */
@InputType()
export class AvailabilityOrderInput {
  @Field(() => SortOrder, { name: 'orderByDayOfWeek', nullable: true })
  dayOfWeek?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByStartTime', nullable: true })
  startTime?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByEndTime', nullable: true })
  endTime?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByIsAvailable', nullable: true })
  isAvailable?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByIsBreak', nullable: true })
  isBreak?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCreatedAt', nullable: true })
  createdAt?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByUpdatedAt', nullable: true })
  updatedAt?: SortOrder;
}
