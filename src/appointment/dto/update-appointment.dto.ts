import { OmitType } from '@nestjs/swagger';
import { BaseAppointmentDto } from './base-appointment.dto';

export class UpdateAppointmentDto extends OmitType(BaseAppointmentDto, [
  'id',
] as const) {}
