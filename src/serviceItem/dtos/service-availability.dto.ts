import { IsOptional, IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AvailabilityDto {
  @ApiProperty({ example: ['10:00-12:00'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  mon?: string[];

  @ApiProperty({ example: ['10:00-12:00'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tue?: string[];

  @ApiProperty({ example: ['10:00-12:00'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  wed?: string[];

  @ApiProperty({ example: ['10:00-12:00'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  thu?: string[];

  @ApiProperty({ example: ['10:00-12:00'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  fri?: string[];

  @ApiProperty({ example: ['10:00-12:00'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sat?: string[];

  @ApiProperty({ example: ['10:00-12:00'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sun?: string[];
}
