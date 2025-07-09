import { ID, Field, ObjectType, Int } from '@nestjs/graphql';
import { AppointmentType } from 'src/appointment/type/appointment.type';
import { ServiceItemType } from 'src/serviceItem/type/service-item.type';
import { UserType } from 'src/user/type/user.type';

@ObjectType()
export class ReviewType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  appointmentId: string;

  @Field(() => String)
  customerId: string;

  @Field(() => String, { nullable: true })
  staffId: string;

  @Field(() => String)
  serviceId: string;

  @Field(() => Int)
  rating: number;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  comment: string;

  @Field(() => Boolean)
  isApproved: boolean;

  @Field(() => Boolean)
  isPublic: boolean;

  @Field(() => Date)
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => AppointmentType)
  appointment: AppointmentType;

  @Field(() => UserType)
  customer: UserType;

  @Field(() => UserType, { nullable: true })
  staff: UserType;

  @Field(() => ServiceItemType)
  service: ServiceItemType;
}
