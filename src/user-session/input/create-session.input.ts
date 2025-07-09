import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSessionInput {
  @Field(() => String)
  userId: string;

  @Field(() => String, { nullable: true })
  userAgent?: string;

  @Field(() => String, { nullable: true })
  ipAddress?: string;

  @Field(() => String)
  refreshToken: string;
}
