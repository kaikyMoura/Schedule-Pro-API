import { ApiProperty, OmitType } from '@nestjs/swagger';
import { BaseAppointmentDto } from './base-appointment.dto';

export class AppointmentResponseDto extends OmitType(BaseAppointmentDto, [
  'id',
  'customerId',
  'staffId',
  'serviceId',
] as const) {
  @ApiProperty({ example: 'Dr. John Doe' })
  staffName?: string;

  @ApiProperty({ example: 'Dentist' })
  serviceName: string;
}
