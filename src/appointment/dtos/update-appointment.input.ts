import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import {
  Status,
  AppointmentType as PrismaAppointmentType,
} from 'prisma/app/generated/prisma/client';

@InputType()
export class UpdateAppointmentInput {
  @IsOptional()
  @Field(() => Date, { nullable: true })
  scheduledDate?: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  scheduledTime?: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  startTime?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  endTime?: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  timezone?: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status?: Status;

  @IsOptional()
  @Field(() => PrismaAppointmentType, { nullable: true })
  type?: PrismaAppointmentType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  notes?: string;

  @IsOptional()
  @Field(() => Float, { nullable: true })
  price?: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  currency?: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  discount?: number;

  @IsOptional()
  @Field(() => Float, { nullable: true })
  finalPrice?: number;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
