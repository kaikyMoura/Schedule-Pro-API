import { Field, Float, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class ReviewsFilterInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  search?: string;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  rating?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  customerId?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  staffId?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  serviceId?: string;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  isApproved?: boolean;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  createdAfter?: Date;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  createdBefore?: Date;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean;
}
