import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role } from 'prisma/app/generated/prisma/client';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role in the system',
});

/**
 * User type
 * @class UserType
 * @description User type for user.
 * @example
 * ```ts
 * const user = new UserType();
 * user.id = '1';
 * user.email = 'test@test.com';
 * user.firstName = 'John';
 * user.lastName = 'Doe';
 * ```
 */
@ObjectType()
export class UserType {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  phone: string;

  @Field(() => String, { nullable: true })
  avatar: string | null;

  @Field(() => Date, { nullable: true })
  dateOfBirth: Date | null;

  @Field(() => String, { nullable: true })
  gender: string | null;

  @Field(() => String, { nullable: true })
  address: string | null;

  @Field(() => String, { nullable: true })
  city: string | null;

  @Field(() => String, { nullable: true })
  state: string | null;

  @Field(() => String, { nullable: true })
  zipCode: string | null;

  @Field(() => String, { nullable: true })
  country: string | null;

  @Field(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;

  @Field(() => Date, { nullable: true })
  deletedAt: Date | null;
}
