import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';
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
export class ReviewOrderInput {
  @Field(() => SortOrder, { nullable: true })
  @IsEnum(SortOrder)
  @IsOptional()
  rating?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  @IsEnum(SortOrder)
  @IsOptional()
  createdAt?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  @IsEnum(SortOrder)
  @IsOptional()
  updatedAt?: SortOrder;
}
