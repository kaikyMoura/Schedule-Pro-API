import { Field, InputType } from '@nestjs/graphql';
import { PaginationInput } from 'src/common/types/pagination.input';
import { AvailabilityOrderInput } from './availability-order.input';

/**
 * Availability pagination input
 * @class AvailabilityPaginationInput
 * @description Availability pagination input for availability pagination.
 * @example
 * ```typescript
 * const pagination: AvailabilityPaginationInput = {
 *  offset: 0,
 *  limit: 10,
 *  orderDirection: SortOrder.ASC,
 *  orderBy: { dayOfWeek: DayOfWeek.MONDAY, startTime: SortOrder.ASC },
 * }
 * ```
 */
@InputType()
export class AvailabilityPaginationInput extends PaginationInput {
  @Field(() => AvailabilityOrderInput, { nullable: true })
  orderBy?: AvailabilityOrderInput;
}
