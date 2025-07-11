import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { AppointmentType } from './appointment.entity';

/**
 * Paginated appointments type
 * @class PaginatedAppointments
 * @description Paginated appointments type for appointments.
 * @example
 * ```typescript
 * const paginatedAppointments: PaginatedAppointments = {
 *  nodes: [AppointmentType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedAppointments extends PaginatedResult(AppointmentType) {}
