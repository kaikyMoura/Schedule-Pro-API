import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class MailInput {
  /**
   * The email address of the recipient.
   */
  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  to: string;

  /**
   * The email address of the sender.
   */
  @IsEmail()
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
