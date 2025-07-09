import { ObjectType } from '@nestjs/graphql';
import { MutationResponseType } from 'src/common/factorys/mutation-response.factory';
import { UserType } from './user.entity';

/**
 * User response type
 * @class UserResponse
 * @description User response type for user.
 * @example
 * ```typescript
 * const userResponse: UserResponse = {
 *  success: true,
 *  message: 'User created successfully',
 *  data: UserType,
 *  error: null,
 * }
 * ```
 */
@ObjectType()
export class UserResponse extends MutationResponseType(UserType) {}
