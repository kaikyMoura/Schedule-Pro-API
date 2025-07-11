import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateServiceItemInput {
  @IsNotEmpty({ message: 'Name is required' })
  @Field(() => String, { nullable: false })
  name: string;

  @IsNotEmpty({ message: 'Description is required' })
  @Field(() => String, { nullable: false })
  description: string;

  @IsNotEmpty({ message: 'Category is required' })
  @Field(() => String, { nullable: false })
  category: string;

  @IsNotEmpty({ message: 'Base price is required' })
  @Field(() => Float, { nullable: false })
  basePrice: number;

  @IsNotEmpty({ message: 'Currency is required' })
  @Field(() => String, { nullable: false })
  currency: string;

  @IsNotEmpty({ message: 'Duration minutes is required' })
  @Field(() => Int, { nullable: false })
  durationMinutes: number;

  @IsNotEmpty({ message: 'Buffer minutes is required' })
  @Field(() => Int, { nullable: false })
  bufferMinutes: number;

  @IsNotEmpty({ message: 'Is active is required' })
  @Field(() => Boolean, { nullable: false })
  isActive: boolean;

  @IsNotEmpty({ message: 'Is online is required' })
  @Field(() => Boolean, { nullable: false })
  isOnline: boolean;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  maxAdvanceBooking: number | null;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  minAdvanceBooking: number | null;

  @IsOptional()
  @Field(() => String, { nullable: true })
  color: string | null;

  @IsOptional()
  @Field(() => String, { nullable: true })
  icon: string | null;

  @IsOptional()
  @Field(() => [String], { nullable: true })
  tags: string[] | null;
}
