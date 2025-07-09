import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class AppointmentStatus {
  @Field()
  totalAppointments: number;

  @Field()
  completedAppointments: number;

  @Field()
  cancelledAppointments: number;

  @Field()
  upcomingAppointments: number;

  @Field(() => Float)
  totalRevenue: number;

  @Field(() => Float)
  averageRating: number;
}
