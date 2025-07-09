import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'prisma/app/generated/prisma/client';

@ObjectType()
export class TokenPayloadType {
  @Field(() => String)
  sub: string;

  @Field(() => String)
  sid: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String)
  email: string;

  @Field(() => Role)
  role: Role;
}
