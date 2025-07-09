import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ServiceItemType {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  category: string;

  @Field(() => Float)
  basePrice: number;

  @Field(() => String)
  currency: string;

  @Field(() => Int)
  durationMinutes: number;

  @Field(() => Int)
  bufferMinutes: number;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => Boolean)
  isOnline: boolean;

  @Field(() => Int, { nullable: true })
  maxAdvanceBooking: number | null;

  @Field(() => Int, { nullable: true })
  minAdvanceBooking: number | null;

  @Field(() => String, { nullable: true })
  color: string | null;

  @Field(() => String, { nullable: true })
  icon: string | null;

  @Field(() => [String], { nullable: true })
  tags: string[] | null;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
