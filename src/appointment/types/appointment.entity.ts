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

/**
 * Appointment type
 * @class AppointmentType
 * @description Appointment type for appointment.
 * @example
 * ```typescript
 * const appointment: AppointmentType = {
 *  id: '1',
 *  scheduledDate: new Date(),
 *  scheduledTime: '10:00',
 * }
 */
@ObjectType()
export class AppointmentType {
  @Field(() => String)
  id: string;

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
  notes: string | null;

  @Field(() => Float)
  price: number;

  @Field(() => String)
  currency: string;

  @Field(() => Int)
  discount: number;

  @Field(() => Float)
  finalPrice: number;

  @Field(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;

  @Field(() => Date, { nullable: true })
  deletedAt: Date | null;
}
