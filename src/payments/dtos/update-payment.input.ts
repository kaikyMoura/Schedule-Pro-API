import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
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

/**
 * Create payment input
 * @class CreatePaymentInput
 * @description Create payment input for creating a payment.
 * @example
 * ```typescript
 * const createPaymentInput: CreatePaymentInput = {
 *  appointmentId: 'uuid',
 *  userId: 'uuid',
 *  amount: 100,
 *  status: PaymentStatus.PENDING,
 *  currency: 'USD',
 *  stripePaymentId: 'uuid',
 *  transactionId: 'uuid',
 * }
 * ```
 */
@InputType()
export class UpdatePaymentInput {
  @IsUUID()
  @IsOptional()
  @Field(() => String, { nullable: true })
  id: string;

  @IsUUID()
  @IsNotEmpty()
  @Field(() => String)
  appointmentId: string;

  @IsUUID()
  @IsNotEmpty()
  @Field(() => String)
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  amount: number;

  @IsEnum(PaymentStatus)
  @IsNotEmpty()
  @Field(() => PaymentStatus)
  status: PaymentStatus;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  currency?: string;

  @IsEnum(PaymentMethod)
  @IsOptional()
  @Field(() => PaymentMethod, { nullable: true })
  paymentMethod?: PaymentMethod;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  stripePaymentId?: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  transactionId?: string;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
