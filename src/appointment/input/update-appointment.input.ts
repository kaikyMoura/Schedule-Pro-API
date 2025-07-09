import { InputType } from '@nestjs/graphql';
import { AppointmentType } from '../type/appointment.type';

@InputType()
export class UpdateAppointmentInput extends AppointmentType {}
