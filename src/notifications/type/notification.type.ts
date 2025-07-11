import { Field, ObjectType } from '@nestjs/graphql';
import {
  NotificationChannel,
  NotificationType as PrismaNotificationType,
} from 'prisma/app/generated/prisma/client';
import { UserType } from 'src/users/types/user.type';
import { AppointmentType } from 'src/appointments/types/appointment.entity';

@ObjectType()
export class NotificationType {
  @Field(() => String)
  title: string;

  @Field(() => String)
  message: string;

  @Field(() => PrismaNotificationType)
  type: PrismaNotificationType;

  @Field(() => NotificationChannel)
  channel: NotificationChannel;

  @Field(() => Boolean)
  isRead: boolean;

  @Field(() => Date, { nullable: true })
  readAt?: Date;

  @Field(() => Date, { nullable: true })
  scheduledFor?: Date;

  @Field(() => Date, { nullable: true })
  sentAt?: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => UserType)
  user: UserType;

  @Field(() => AppointmentType, { nullable: true })
  appointment?: AppointmentType;
}
