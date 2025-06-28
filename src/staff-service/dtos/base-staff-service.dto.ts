import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class BaseStaffServiceDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsUUID(undefined, { message: 'staffId must be a valid UUID' })
  @IsNotEmpty({ message: 'staffId is required' })
  staffId: string;

  @IsUUID(undefined, { message: 'serviceId must be a string' })
  @IsNotEmpty({ message: 'serviceId is required' })
  serviceId: string;

  @ApiProperty({ example: 30.0 })
  @IsOptional()
  @IsNumber(undefined, { message: 'customPrice must be a number' })
  customPrice?: number | null;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsDate()
  createdAt?: Date;
}
