import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { StaffServiceType } from './staff-service.type';

/**
 * Paginated staff services type
 * @class PaginatedStaffService
 * @description Paginated staff services type for staff services.
 * @example
 * ```typescript
 * const paginatedStaffServices: PaginatedStaffService = {
 *  nodes: [StaffServiceType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedStaffService extends PaginatedResult(StaffServiceType) {}
