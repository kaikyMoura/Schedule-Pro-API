import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { DayOfWeek } from 'prisma/app/generated/prisma/client';

registerEnumType(DayOfWeek, {
  name: 'DayOfWeek',
  description: 'The day of the week',
});

/**
 * Input type for creating a staff availability
 * @description This input type is used to create a staff availability
 * @example
 * ```typescript
 * const createStaffAvailabilityInput: CreateStaffAvailabilityInput = {
 *   staffId: '123e4567-e89b-12d3-a456-426614174000',
 *   dayOfWeek: DayOfWeek.MONDAY,
 *   startTime: '09:00',
 *   endTime: '17:00',
 *   isAvailable: true,
 *   breakStartTime: '12:00',
 *   breakEndTime: '13:00',
 * };
 * ```
 */
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
