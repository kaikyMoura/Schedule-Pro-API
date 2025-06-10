import { OmitType } from '@nestjs/swagger';
import { BaseUserDto } from './base-user.dto';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { CreateAppointmentDto } from 'src/appointment/dtos/create-appointment.dto';
import { CreateServiceItemDto } from 'src/serviceItem/dtos/create-service-item.dto';

export class CreateUserDto extends OmitType(BaseUserDto, [
  'id',
  'appointments',
  'services',
  'staffAppointments',
] as const) {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateServiceItemDto)
  services?: CreateServiceItemDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateAppointmentDto)
  appointments?: CreateAppointmentDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateAppointmentDto)
  staffAppointments?: CreateAppointmentDto[];
}
