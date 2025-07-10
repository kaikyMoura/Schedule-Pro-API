import { Field, Float, Int, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateStaffServiceInput {
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

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
