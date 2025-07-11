import { ObjectType } from '@nestjs/graphql';
import { MutationResponseType } from 'src/common/factorys/mutation-response.factory';
import { StaffAvailabilityType } from './staff-availability.type';

/**
 * Staff availability response type
 * @class StaffAvailabilityResponse
 * @description Staff availability response type for staff availability.
 * @example
 * ```typescript
 * const staffAvailabilityResponse: StaffAvailabilityResponse = {
 *  success: true,
 *  message: 'Staff availability created successfully',
 *  data: StaffAvailabilityType,
 *  error: null,
 * }
 * ```
 */
@ObjectType()
export class StaffAvailabilityResponse extends MutationResponseType(
  StaffAvailabilityType,
) {}
