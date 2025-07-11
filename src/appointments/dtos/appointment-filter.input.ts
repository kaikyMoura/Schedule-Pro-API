import { Field, Float, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  AppointmentType as PrismaAppointmentType,
  Status,
} from 'prisma/app/generated/prisma/client';

@InputType()
export class AppointmentFilterInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  search?: string;

  @Field(() => Status, { nullable: true })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  scheduledDate?: Date;

  @Field(() => String, { nullable: true })
  @IsOptional()
  scheduledTime?: string;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  price?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  currency?: string;

  @Field(() => PrismaAppointmentType, { nullable: true })
  @IsEnum(PrismaAppointmentType)
  @IsOptional()
  type?: PrismaAppointmentType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  userId?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  staffId?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  serviceItemId?: string;

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
