import { Field, ObjectType } from '@nestjs/graphql';

export class Recurring {
  @Field(() => String)
  interval?: RecurringInterval;

  @Field(() => Number)
  interval_count: number;

  @Field(() => Number)
  trial_period_days: number | null;

  @Field(() => String)
  usage_type: RecurringUsageType;
}

export type TaxBehavior = 'inclusive' | 'exclusive' | 'unspecified';
export type RecurringInterval = 'day' | 'week' | 'month' | 'year';
export type RecurringUsageType = 'licensed' | 'metered';

@ObjectType()
export class PriceType {
  @Field(() => String)
  id: string;

  @Field(() => String)
  object: string;

  @Field(() => Boolean)
  active: boolean;

  @Field(() => String)
  billing_scheme: any; // should be a string

  @Field(() => Number)
  created: number;

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
  nickname: string | null;

  @Field(() => String)
  product: any; // should be a string

  @Field(() => Object)
  recurring: Recurring | null;

  @Field(() => String)
  tax_behavior: TaxBehavior | null;

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
