import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateStaffServiceInput {
  @Field(() => String)
  staffId: string;

  @Field(() => String)
  serviceId: string;

  @Field(() => Float, { nullable: true })
  customPrice: number | null;

  @Field(() => Int, { nullable: true })
  customDuration: number | null;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => Boolean)
  isPreferred: boolean;

  @Field(() => Int, { nullable: true })
  skillLevel: number | null;

  @Field(() => Int, { nullable: true })
  experience: number | null;
}
