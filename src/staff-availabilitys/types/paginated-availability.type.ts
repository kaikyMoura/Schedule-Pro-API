import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { StaffAvailabilityType } from './staff-availability.type';

/**
 * Paginated staff availability type
 * @class PaginatedStaffAvailability
 * @description Paginated staff availability type for staff availability.
 * @example
 * ```typescript
 * const paginatedStaffAvailability: PaginatedStaffAvailability = {
 *  nodes: [StaffAvailabilityType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedStaffAvailability extends PaginatedResult(
  StaffAvailabilityType,
) {}
