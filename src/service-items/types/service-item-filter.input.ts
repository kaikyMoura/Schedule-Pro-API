import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

@InputType()
export class ServiceItemFilterInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  search?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  category?: string;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  isOnline?: boolean;

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
