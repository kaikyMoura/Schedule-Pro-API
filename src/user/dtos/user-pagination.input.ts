import { Field, InputType } from '@nestjs/graphql';
import { PaginationInput } from 'src/common/types/pagination.input';
import { UserOrderInput } from './user-order.input';

/**
 * User pagination input
 * @class UserPaginationInput
 * @description User pagination input for user pagination.
 * @example
 * ```typescript
 * const pagination: UserPaginationInput = {
 *  offset: 0,
 *  limit: 10,
 *  orderDirection: SortOrder.ASC,
 *  orderBy: { name: SortOrder.ASC },
 * }
 * ```
 */
@InputType()
export class UserPaginationInput extends PaginationInput {
  @Field(() => UserOrderInput, { nullable: true })
  orderBy?: UserOrderInput;
}
