import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MailInput {
  @Field(() => String)
  to: string;

  @Field(() => String, { nullable: true })
  from?: string;

  @Field(() => String, { nullable: true })
  subject?: string;

  @Field(() => String, { nullable: true })
  text?: string;

  @Field(() => String, { nullable: true })
  html?: string;

  @Field(() => String, { nullable: true })
  token?: string;
}
