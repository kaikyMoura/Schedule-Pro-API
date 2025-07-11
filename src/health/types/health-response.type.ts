import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HealthResponse {
  @Field(() => String)
  status: string;

  @Field(() => Number)
  uptime: number;

  @Field(() => String)
  timestamp: string;
}
