import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class UpdateStaffServiceInput {
  @IsUUID()
  @IsNotEmpty({ message: 'Staff ID is required' })
  @Field(() => String)
  staffId: string;

  @IsUUID()
  @IsNotEmpty({ message: 'Service ID is required' })
  @Field(() => String)
  serviceId: string;

  @IsOptional()
  @Field(() => Float, { nullable: true })
  customPrice?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  customDuration?: number;

  @IsOptional()
  @Field(() => Boolean)
  isActive?: boolean;

  @IsOptional()
  @Field(() => Boolean)
  isPreferred?: boolean;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  skillLevel?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  experience?: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
