import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { Recurring } from '../types/price.type';
import { ProductType } from '../types/product.type';

@InputType()
export class CreatePriceDto {
  @Field(() => String)
  object: string;

  @Field(() => Boolean)
  active: boolean;

  @Field(() => String)
  billing_scheme: any; // should be a string

  @Field(() => Number)
  created: number;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  currency: string;

  @Field(() => Number)
  custom_unit_amount: any; // should be a number

  @Field(() => Boolean)
  livemode: boolean;

  @Field(() => String)
  lookup_key: any; // should be a string

  @Field(() => Object)
  metadata: Record<string, string>;

  @Field(() => String)
  nickname?: string;

  @IsNotEmpty()
  @Field(() => Object)
  product_data: ProductType;

  @IsNotEmpty()
  @Field(() => Object)
  recurring: Recurring | null; // Only interval is required

  @Field(() => String)
  tax_behavior: any; // should be a string

  @Field(() => String)
  tiers_mode: any; // should be a string

  @Field(() => Number)
  transform_quantity: any; // should be a number

  @Field(() => String)
  type: any; // should be a string

  @Field(() => Number)
  unit_amount: number | null;

  @Field(() => String)
  unit_amount_decimal: string | null;
}
