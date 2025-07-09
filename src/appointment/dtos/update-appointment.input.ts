import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { AppointmentType, Status } from 'prisma/app/generated/prisma/client';
import { AppointmentType as PrismaAppointmentType } from '../types/appointment.entity';

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
  type?: AppointmentType;

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
