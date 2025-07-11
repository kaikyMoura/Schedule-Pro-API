import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

/**
 * Represents a customer review related to an appointment.
 *
 * Includes metadata such as rating, optional comment/title,
 * visibility flags, and timestamps.
 *
 * @example
 * ```ts
 * const review: ReviewType = {
 *   id: 'r123',
 *   appointmentId: 'apt456',
 *   customerId: 'c789',
 *   staffId: 's001',
 *   serviceId: 'srv100',
 *   rating: 4,
 *   title: 'Great experience!',
 *   comment: 'The service was excellent.',
 *   isApproved: true,
 *   isPublic: true,
 *   createdAt: new Date(),
 *   updatedAt: new Date(),
 * };
 * ```
 */

@ObjectType()
export class ReviewType {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  appointmentId: string | null;

  @Field(() => String, { nullable: true })
  customerId: string | null;

  @Field(() => String, { nullable: true })
  staffId: string | null;

  @Field(() => String)
  serviceId: string;

  @Field(() => Int)
  rating: number;

  @Field(() => String, { nullable: true })
  title: string | null;

  @Field(() => String, { nullable: true })
  comment: string | null;

  @Field(() => Boolean)
  isApproved: boolean;

  @Field(() => Boolean)
  isPublic: boolean;

  @Field(() => Date)
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;

  @Field(() => Date, { nullable: true })
  deletedAt: Date | null;
}
