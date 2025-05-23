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

  @IsString()
  type: string;

  @IsNumber()
  price: number;

  @IsNumber()
  duration: number;

  @IsObject()
  availability: any;

  @IsUUID()
  staffId: string;

  @IsOptional()
  @IsObject()
  appointment?: BaseAppointmentDto;
}
