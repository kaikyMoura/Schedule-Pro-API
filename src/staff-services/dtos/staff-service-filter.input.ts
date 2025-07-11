import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class StaffServiceFilterInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  search?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  staffId?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  serviceId?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isPreferred?: boolean;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  skillLevel?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  experience?: number;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  createdAfter?: Date;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  createdBefore?: Date;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean;
}
