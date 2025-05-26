import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  ValidateNested,
} from 'class-validator';
import { BaseAppointmentDto } from 'src/appointment/dto/base-appointment.dto';
import { AvailabilityDto } from './service-availability.dto';
import { Type } from 'class-transformer';

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

  @ApiProperty({
    example:
      '{"mon": ["10:00-11:00", "14:00-15:00"], "tue": ["09:00-10:00", "14:00-16:00"]}',
  })
  @Matches(/^([01]\d|2[0-3]):[0-5]\d-([01]\d|2[0-3]):[0-5]\d$/, {
    each: true,
    message: 'Each time slot must be in the format HH:mm-HH:mm',
  })
  @ValidateNested({ each: true })
  @Type(() => AvailabilityDto)
  @IsObject()
  availability: AvailabilityDto;

  @IsUUID()
  staffId: string;

  @IsOptional()
  @IsObject()
  appointment?: BaseAppointmentDto;
}
