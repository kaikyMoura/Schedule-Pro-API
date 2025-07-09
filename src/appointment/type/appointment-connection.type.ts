import { Field, ObjectType } from '@nestjs/graphql';
import { AppointmentType } from './appointment.type';

@ObjectType()
export class AppointmentConnection {
  @Field(() => [AppointmentType])
  nodes: AppointmentType[];

  @Field()
  totalCount: number;

  @Field()
  hasNextPage: boolean;

  @Field()
  hasPreviousPage: boolean;
}
