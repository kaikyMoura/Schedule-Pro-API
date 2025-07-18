import { Field, InputType } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  IsObject,
} from 'class-validator';

@InputType()
export class UpdatePaymentIntentDto {
  @IsNumber({}, { message: 'Amount must be a number' })
  @Field(() => Number)
  amount: number;

  @IsString({ message: 'Currency must be a string' })
  @Field(() => String)
  currency: string;

  @IsObject({ message: 'Automatic payment methods must be an object' })
  @Field(() => Object, { nullable: true })
  automatic_payment_methods?: {
    enabled: boolean;
    allow_redirects?: any;
  };

  @IsBoolean({ message: 'Confirm must be a boolean' })
  @Field(() => Boolean, { nullable: true })
  confirm?: boolean;

  @IsString({ message: 'Customer must be a string' })
  @Field(() => String, { nullable: true })
  customer?: string;

  @IsString({ message: 'Description must be a string' })
  @Field(() => String, { nullable: true })
  description?: string;

  @IsArray({ message: 'Metadata must be an array' })
  @Field(() => Object, { nullable: true })
  metadata?: any;

  @IsBoolean({ message: 'Off session must be a boolean' })
  @Field(() => Boolean, { nullable: true })
  off_session?: boolean;

  @IsString({ message: 'Payment method must be a string' })
  @Field(() => String, { nullable: true })
  payment_method?: string;

  @IsEmail({}, { message: 'Receipt email must be an email' })
  @Field(() => String, { nullable: true })
  receipt_email?: string;

  @IsString({ message: 'Setup future usage must be a string' })
  @Field(() => String, { nullable: true })
  setup_future_usage?: 'off_session' | 'on_session';
}
