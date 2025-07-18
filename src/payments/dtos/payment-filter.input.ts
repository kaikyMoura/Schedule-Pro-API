import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { PaymentStatus } from 'prisma/app/generated/prisma/client';

/**
 * Payment filter input
 * @class PaymentFilterInput
 * @description Payment filter input for payment pagination.
 * @example
 */
@InputType()
export class PaymentFilterInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  search?: string;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  status?: PaymentStatus;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  currency?: string;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  createdAfter?: Date;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  createdBefore?: Date;
}
