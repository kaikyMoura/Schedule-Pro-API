import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { TaxBehavior } from '../types/price.type';

@InputType()
export class UpdatePriceDto {
  @IsBoolean()
  @IsNotEmpty()
  @Field(() => Boolean)
  active: boolean;

  @IsObject()
  @IsNotEmpty()
  @Field(() => Object)
  metadata: any;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  object: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  nickname?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  tax_behavior: TaxBehavior; // Recommended if calculating taxes

  @IsObject()
  @IsNotEmpty()
  @Field(() => Object)
  currency_options: any;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  lookup_key: string;

  @IsBoolean()
  @IsNotEmpty()
  @Field(() => Boolean)
  transfer_lookup_key?: boolean;
}
