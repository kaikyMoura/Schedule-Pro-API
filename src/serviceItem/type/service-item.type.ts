import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { AppointmentType } from 'src/appointment/type/appointment.type';
import { ReviewType } from 'src/review/type/review.type';
import { StaffServiceType } from 'src/staff-service/type/staff-service.type';

@ObjectType()
export class ServiceItemType {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  category: string;

  @Field(() => Float)
  basePrice: number;

  @Field(() => String)
  currency: string;

  @Field(() => Int)
  durationMinutes: number;

  @Field(() => Int)
  bufferMinutes: number;

  @Field(() => Int)
  discount: number;

  @Field(() => Float)
  finalPrice: number;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => Boolean)
  isOnline: boolean;

  @Field(() => Int)
  maxAdvanceBooking: number;

  @Field(() => Int)
  minAdvanceBooking: number;

  @Field(() => String)
  color: string;

  @Field(() => String)
  icon: string;

  @Field(() => [String])
  tags: string[];

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => [AppointmentType])
  staffServices: StaffServiceType[];

  @Field(() => [ReviewType])
  reviews: ReviewType[];
}
