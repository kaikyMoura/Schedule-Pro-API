import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { DayOfWeek } from 'prisma/app/generated/prisma/client';

@InputType()
export class UpdateStaffAvailabilityInput {
  @IsUUID()
  @Field(() => String, { nullable: true })
  staffId?: string;

  @IsOptional()
  @IsEnum(DayOfWeek)
  @Field(() => DayOfWeek, { nullable: true })
  dayOfWeek?: DayOfWeek;

  @IsDateString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  startTime?: string;

  @IsDateString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  endTime?: string;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  specificDate?: Date;

  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isAvailable?: boolean;

  @IsDateString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  breakStartTime?: string;

  @IsDateString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  breakEndTime?: string;
}
