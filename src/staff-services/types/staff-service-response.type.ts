import { ObjectType } from '@nestjs/graphql';
import { MutationResponseType } from 'src/common/factorys/mutation-response.factory';
import { StaffServiceType } from './staff-service.type';

/**
 * Staff services response type
 * @class StaffServiceResponse
 * @description Staff services response type for staff services.
 * @example
 * ```typescript
 * const staffServicesResponse: StaffServiceResponse = {
 *  success: true,
 *  message: 'Staff services created successfully',
 *  data: StaffServiceType,
 *  error: null,
 * }
 * ```
 */
@ObjectType()
export class StaffServiceResponse extends MutationResponseType(
  StaffServiceType,
) {}
