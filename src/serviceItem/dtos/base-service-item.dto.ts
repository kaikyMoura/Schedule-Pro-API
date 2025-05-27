import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { BaseAppointmentDto } from 'src/appointment/dto/base-appointment.dto';
import { BaseStaffServiceDto } from 'src/staff-service/dtos/base-staff-service.dto';

export class BaseServiceItemDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty({ example: 'Dentist' })
  @IsString()
  type: string;

  @ApiProperty({ example: '100.0' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: '30' })
  @IsNumber()
  duration: number;

  @ValidateNested({ each: true })
  @Type(() => BaseAppointmentDto)
  @IsOptional()
  @IsObject()
  appointments?: BaseAppointmentDto[];

  @ValidateNested({ each: true })
  @Type(() => BaseStaffServiceDto)
  @IsOptional()
  @IsObject()
  staffServices?: BaseStaffServiceDto[];
}
