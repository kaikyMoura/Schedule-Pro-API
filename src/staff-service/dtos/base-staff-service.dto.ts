import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class BaseStaffServiceDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsString()
  staffId: string;

  @IsString()
  serviceId: string;

  @ApiProperty({ example: 30.0 })
  @IsOptional()
  @IsNumber()
  customPrice?: number | null;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsDate()
  createdAt?: Date;
}
