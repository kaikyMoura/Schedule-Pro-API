import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  PaymentMethod,
  PaymentStatus,
} from 'prisma/app/generated/prisma/client';

registerEnumType(PaymentMethod, {
  name: 'PaymentMethod',
  description: 'Payment method',
});

registerEnumType(PaymentStatus, {
  name: 'PaymentStatus',
  description: 'Payment status',
});

@ObjectType()
export class PaymentType {
  @Field(() => String)
  id: string;

  @Field(() => String)
  appointmentId: string | null;

  @Field(() => String)
  userId: string | null;

  @Field(() => Number)
  amount: number;

  @Field(() => String)
  currency: string;

  @Field(() => PaymentStatus)
  status: PaymentStatus;

  @Field(() => PaymentMethod)
  paymentMethod: PaymentMethod;

  @Field(() => String)
  stripePaymentId: string | null;

  @Field(() => String)
  transactionId: string | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date | null;
}
