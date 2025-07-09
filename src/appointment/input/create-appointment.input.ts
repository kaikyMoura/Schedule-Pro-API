import { Field, Float, InputType, Int } from '@nestjs/graphql';
import {
  AppointmentType as PrismaAppointmentType,
  Status,
} from 'prisma/app/generated/prisma/client';

@InputType()
export class CreateAppointmentInput {
  @Field(() => Date)
  scheduledDate: Date;

  @Field(() => String)
  scheduledTime: string;

  @Field(() => Date)
  startTime: Date;

  @Field(() => Date)
  endTime: Date;

  @Field(() => String)
  timezone: string;

  @Field(() => Status)
  status: Status;

  @Field(() => PrismaAppointmentType)
  type: PrismaAppointmentType;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => Float)
  price: number;

  @Field(() => String)
  currency: string;

  @Field(() => Int)
  discount: number;

  @Field(() => Float)
  finalPrice: number;

  @Field(() => String)
  customerId: string;

  @Field(() => String)
  staffId: string;

  @Field(() => String)
  serviceId: string;
}
