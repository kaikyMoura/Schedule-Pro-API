import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { ServiceItemType } from './service-item.entity';

/**
 * Paginated service items type
 * @class PaginatedServiceItem
 * @description Paginated service items type for service items.
 * @example
 * ```typescript
 * const paginatedServiceItems: PaginatedServiceItem = {
 *  nodes: [ServiceItemType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedServiceItem extends PaginatedResult(ServiceItemType) {}
