import { OmitType } from '@nestjs/swagger';
import { BaseAppointmentDto } from './base-appointment.dto';

export class CreateAppointmentDto extends OmitType(BaseAppointmentDto, [
  'id',
  'status',
] as const) {}
