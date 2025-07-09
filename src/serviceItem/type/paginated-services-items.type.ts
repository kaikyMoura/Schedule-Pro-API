import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { ServiceItemType } from './service-item.type';

/**
 * Paginated service items type
 * @class PaginatedServiceItems
 * @description Paginated service items type for service items.
 * @example
 * ```typescript
 * const paginatedServiceItems: PaginatedServiceItems = {
 *  nodes: [ServiceItemType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedServiceItems extends PaginatedResult(ServiceItemType) {}
