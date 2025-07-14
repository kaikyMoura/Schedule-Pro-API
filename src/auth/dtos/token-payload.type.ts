import { Field, InputType } from '@nestjs/graphql';
import { Role } from 'prisma/app/generated/prisma/client';

@InputType()
export class TokenPayloadInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  sub: string;

  @Field(() => String, { nullable: false })
  sid: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String)
  email: string;

  @Field(() => Role)
  role: Role;
}
