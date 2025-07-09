import { Field, InputType } from '@nestjs/graphql';
import { PaginationInput } from 'src/common/types/pagination.input';
import { AppointmentOrderInput } from './appointment-order.input';

/**
 * Appointment pagination input
 * @class AppointmentPaginationInput
 * @description Appointment pagination input for appointment pagination.
 * @example
 * ```typescript
 * const pagination: AppointmentPaginationInput = {
 *  offset: 0,
 *  limit: 10,
 *  orderDirection: SortOrder.ASC,
 *  orderBy: { status: SortOrder.ASC },
 * }
 * ```
 */
@InputType()
export class AppointmentPaginationInput extends PaginationInput {
  @Field(() => AppointmentOrderInput, { nullable: true })
  orderBy?: AppointmentOrderInput;
}
