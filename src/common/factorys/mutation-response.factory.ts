import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Mutation response type
 * @param TItemClass - The class of the item to return
 * @returns The mutation response type
 * @example
 * ```typescript
 * const MutationResponse = MutationResponseType(UserType);
 * ```
 */
export function MutationResponseType<TItem>(TItemClass: object): any {
  @ObjectType({ isAbstract: true })
  abstract class MutationResponse {
    @Field(() => Boolean)
    success: boolean;

    @Field({ nullable: true })
    message?: string;

    @Field(() => TItemClass, { nullable: true })
    data?: TItem;

    @Field({ nullable: true })
    error?: string;
  }

  return MutationResponse;
}
