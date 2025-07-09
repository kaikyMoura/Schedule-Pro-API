import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MutationResponse<T = any> {
  @Field(() => Boolean)
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  data?: T;

  @Field({ nullable: true })
  error?: string;
}
