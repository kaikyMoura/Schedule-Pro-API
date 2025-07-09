import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role } from 'prisma/app/generated/prisma/client';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role in the system',
});

@ObjectType()
export class UserType {
  @Field(() => String)
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  phone: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  zipCode?: string;

  @Field(() => String, { nullable: true })
  country?: string;
}
