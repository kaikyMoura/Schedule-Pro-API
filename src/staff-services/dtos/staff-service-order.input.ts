import { Field, InputType, registerEnumType } from '@nestjs/graphql';
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
 * const orderBy: StaffServiceOrderInput = {
 *  isActive: true,
 *  isPreferred: false,
 *  skillLevel: 1,
 *  experience: 1,
 *  createdAt: SortOrder.ASC,
 *  updatedAt: SortOrder.DESC,
 * }
 * ```
 */
@InputType()
export class StaffServiceOrderInput {
  @Field(() => SortOrder, { name: 'orderByIsActive', nullable: true })
  isActive?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByIsPreferred', nullable: true })
  isPreferred?: SortOrder;

  @Field(() => SortOrder, { name: 'orderBySkillLevel', nullable: true })
  skillLevel?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByExperience', nullable: true })
  experience?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByCreatedAt', nullable: true })
  createdAt?: SortOrder;

  @Field(() => SortOrder, { name: 'orderByDeletedAt', nullable: true })
  deletedAt?: SortOrder;
}
