import { ObjectType } from '@nestjs/graphql';
import { MutationResponseType } from 'src/common/factorys/mutation-response.factory';
import { AppointmentType } from './appointment.entity';

/**
 * Appointment response type
 * @class AppointmentResponse
 * @description Appointment response type for appointment.
 * @example
 * ```typescript
 * const appointmentResponse: AppointmentResponse = {
 *  success: true,
 *  message: 'Appointment created successfully',
 *  data: AppointmentType,
 *  error: null,
 * }
 * ```
 */
@ObjectType()
export class AppointmentResponse extends MutationResponseType(
  AppointmentType,
) {}
