import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

@InputType()
export class CreateReviewInput {
  @IsUUID()
  @Field(() => String)
  appointmentId: string;

  @IsUUID()
  @Field(() => String)
  customerId: string;

  @IsUUID()
  @IsOptional()
  @Field(() => String, { nullable: true })
  staffId: string | null;

  @IsUUID()
  @IsOptional()
  @Field(() => String)
  serviceId: string;

  @IsNumber({}, { message: 'Rating must be a number' })
  @Min(1)
  @Max(5)
  @Field(() => Int)
  rating: number;

  @IsString({ message: 'Title must be a string' })
  @IsOptional()
  @Field(() => String, { nullable: true })
  title: string | null;

  @IsString({ message: 'Comment must be a string' })
  @IsOptional()
  @Field(() => String, { nullable: true })
  comment: string | null;

  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isApproved: boolean;

  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  isPublic: boolean;
}
