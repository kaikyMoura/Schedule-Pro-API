import { Field, InputType } from '@nestjs/graphql';
import { IsObject, IsOptional, IsString } from 'class-validator';

@InputType()
export abstract class PaginationOptions<OrderBy> {
  @Field({ defaultValue: 0 })
  offset: number;

  @Field({ defaultValue: 20 })
  limit: number;

  @Field({ nullable: true })
  @IsObject()
  @IsOptional()
  orderBy?: OrderBy;

  @Field({ defaultValue: 'asc' })
  @IsString()
  orderDirection: 'asc' | 'desc';
}
