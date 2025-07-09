import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from '../enums/sort-order.enum';

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: 'Sort order',
});

/**
 * Pagination input
 * @class PaginationInput
 * @description Pagination input for pagination.
 * @example
 * ```typescript
 * const pagination: PaginationInput = {
 *  offset: 0,
 *  limit: 10,
 *  orderDirection: SortOrder.ASC,
 * }
 * ```
 */
@InputType()
export class PaginationInput {
  @Field({ defaultValue: 1, nullable: true })
  page?: number;

  @Field({ defaultValue: 0 })
  offset: number;

  @Field({ defaultValue: 20, nullable: true })
  limit: number;

  @Field(() => SortOrder, { defaultValue: SortOrder.ASC })
  orderDirection: SortOrder;
}
