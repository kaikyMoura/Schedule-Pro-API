import { Field, InputType } from '@nestjs/graphql';
import { PaginationInput } from 'src/common/types/pagination.input';
import { StaffServiceOrderInput } from './staff-service-order.input';

/**
 * Staff service pagination input
 * @class StaffServicePaginationInput
 * @description Staff service pagination input for staff service pagination.
 * @example
 * ```typescript
 * const pagination: StaffServicePaginationInput = {
 *  offset: 0,
 *  limit: 10,
 *  orderDirection: SortOrder.ASC,
 *  orderBy: { isActive: true, isPreferred: false, skillLevel: 1, experience: 1, createdAt: SortOrder.ASC, updatedAt: SortOrder.DESC },
 * }
 * ```
 */
@InputType()
export class StaffServicePaginationInput extends PaginationInput {
  @Field(() => StaffServiceOrderInput, { name: 'orderBy', nullable: true })
  orderBy?: StaffServiceOrderInput;
}
