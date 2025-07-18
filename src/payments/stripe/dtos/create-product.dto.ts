import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsOptional()
  @IsArray()
  marketing_features?: any[];

  @IsOptional()
  @IsObject()
  metadata?: Record<string, string>;

  @IsOptional()
  package_dimensions?: any;

  @IsOptional()
  @IsBoolean()
  shippable?: boolean;

  @IsOptional()
  @IsString()
  statement_descriptor?: string;

  @IsOptional()
  @IsString()
  tax_code?: string;

  @IsOptional()
  @IsString()
  type?: any;

  @IsOptional()
  @IsString()
  unit_label?: string;

  @IsOptional()
  @IsString()
  url?: string;
}
