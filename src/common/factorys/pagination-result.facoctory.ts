import { Field, Int, ObjectType } from '@nestjs/graphql';

/**
 * Paginated result factory
 * @param TItemClass - The class of the item to paginate
 * @returns The paginated result class
 * @example
 * ```typescript
 * const PaginatedResult = PaginatedResult(UserType);
 * ```
 */
export function PaginatedResult<TItem>(TItemClass: object): any {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResultClass {
    @Field(() => [TItemClass])
    nodes: TItem[];

    @Field(() => Int)
    totalCount: number;

    @Field()
    hasNextPage: boolean;

    @Field()
    hasPreviousPage: boolean;
  }

  return PaginatedResultClass;
}
