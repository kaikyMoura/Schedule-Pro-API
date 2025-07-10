import { Field, InputType } from '@nestjs/graphql';
import {
  IsUUID,
  IsEnum,
  IsDateString,
  IsNotEmpty,
  IsDate,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { DayOfWeek } from 'prisma/app/generated/prisma/client';

@InputType()
export class CreateStaffAvailabilityInput {
  @IsUUID()
  @Field(() => String, { nullable: false })
  staffId: string;

  @IsEnum(DayOfWeek)
  @Field(() => DayOfWeek, { nullable: false })
  dayOfWeek: DayOfWeek;

  @IsDateString()
  @IsNotEmpty({ message: 'Start time is required' })
  @Field(() => String, { nullable: false })
  startTime: string;

  @IsDateString()
  @IsNotEmpty({ message: 'End time is required' })
  @Field(() => String, { nullable: false })
  endTime: string;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  specificDate?: Date;

  @IsBoolean()
  @Field(() => Boolean, { nullable: false })
  isAvailable: boolean;

  @IsDateString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  breakStartTime?: string;

  @IsDateString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  breakEndTime?: string;
}
