import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { BaseAppointmentDto } from 'src/appointment/dto/base-appointment.dto';

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

  @IsUUID()
  staffId: string;

  @IsOptional()
  @IsObject()
  appointment?: BaseAppointmentDto;
}
