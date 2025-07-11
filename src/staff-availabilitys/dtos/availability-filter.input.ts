import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { DayOfWeek } from 'prisma/app/generated/prisma/client';

@InputType()
export class AvailabilityFilterInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  search?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  staffId?: string;

  @Field(() => DayOfWeek, { nullable: true })
  @IsEnum(DayOfWeek)
  @IsOptional()
  dayOfWeek?: DayOfWeek;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isBreak?: boolean;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  createdAfter?: Date;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  createdBefore?: Date;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean;
}
