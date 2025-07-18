import { IsArray, IsBoolean, IsObject, IsString } from 'class-validator';

/**
 * This input is used to update a product in Stripe
 * It is used in the `UpdateProduct` mutation
 * @see https://stripe.com/docs/api/products/update
 */
export class UpdateProductDto {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsBoolean()
  active?: boolean;

  @IsString()
  default_price?: string;

  /**
   *  Set of `key-value` pairs that you can attach to an object.
   * This can be useful for storing additional information about the object in a structured format.
   * Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  @IsObject()
  metadata?: Record<string, string>;

  @IsString()
  tax_code?: string;

  @IsArray()
  images?: string[];

  @IsArray()
  marketing_features?: any[];

  @IsString()
  package_dimensions?: any;

  @IsBoolean()
  shippable?: boolean;

  @IsString()
  statement_descriptor?: string;

  @IsString()
  unit_label?: string;

  @IsString()
  url?: string;
}
