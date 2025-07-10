import { Field, Float, Int, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateServiceItemInput {
  @IsOptional()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  description: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  category?: string;

  @IsOptional()
  @Field(() => Float, { nullable: true })
  basePrice: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  currency?: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  durationMinutes?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  bufferMinutes?: number;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isOnline?: boolean;

  @Field(() => Int, { nullable: true })
  maxAdvanceBooking?: number | null;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  minAdvanceBooking?: number | null;

  @IsOptional()
  @Field(() => String, { nullable: true })
  color?: string | null;

  @IsOptional()
  @Field(() => String, { nullable: true })
  icon: string | null;

  @IsOptional()
  @Field(() => [String], { nullable: true })
  tags?: string[] | null;
}
