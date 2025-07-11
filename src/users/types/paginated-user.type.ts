import { ObjectType } from '@nestjs/graphql';
import { PaginatedResult } from 'src/common/factorys/pagination-result.facoctory';
import { UserType } from './user.type';

/**
 * Paginated users type
 * @class PaginatedUsers
 * @description Paginated users type for users.
 * @example
 * ```typescript
 * const paginatedUsers: PaginatedUsers = {
 *  nodes: [UserType],
 *  totalCount: 10,
 *  hasNextPage: true,
 *  hasPreviousPage: false,
 * }
 * ```
 */
@ObjectType()
export class PaginatedUsers extends PaginatedResult(UserType) {}
