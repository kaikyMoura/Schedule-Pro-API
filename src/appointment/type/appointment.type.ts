import {
  Field,
  Float,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  AppointmentType as PrismaAppointmentType,
  Status,
} from 'prisma/app/generated/prisma/client';

registerEnumType(Status, {
  name: 'AppointmentStatus',
  description: 'Status of an appointment',
});

registerEnumType(PrismaAppointmentType, {
  name: 'AppointmentType',
  description: 'Type of appointment',
});

@ObjectType()
export class AppointmentType {
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
}
