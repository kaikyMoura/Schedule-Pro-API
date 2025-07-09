import { Field, InputType } from '@nestjs/graphql';
import { PaginationInput } from 'src/common/types/pagination.input';
import { ServiceItemOrderInput } from './service-item-order.input';

/**
 * ServiceItem pagination input
 * @class ServiceItemPaginationInput
 * @description ServiceItem pagination input for serviceItem pagination.
 * @example
 * ```typescript
 * const pagination: ServiceItemPaginationInput = {
 *  offset: 0,
 *  limit: 10,
 *  orderDirection: SortOrder.ASC,
 *  orderBy: { name: SortOrder.ASC },
 * }
 * ```
 */
@InputType()
export class ServiceItemPaginationInput extends PaginationInput {
  @Field(() => ServiceItemOrderInput, { nullable: true })
  orderBy?: ServiceItemOrderInput;
}
