import { ObjectType } from '@nestjs/graphql';
import { MutationResponseType } from 'src/common/factorys/mutation-response.factory';
import { ServiceItemType } from './service-item.type';

/**
 * ServiceItem response type
 * @class ServiceItemResponse
 * @description ServiceItem response type for serviceItem.
 * @example
 * ```typescript
 * const serviceItemResponse: ServiceItemResponse = {
 *  success: true,
 *  message: 'Service created successfully',
 *  data: ServiceItemType,
 *  error: null,
 * }
 * ```
 */
@ObjectType()
export class ServiceItemResponse extends MutationResponseType(
  ServiceItemType,
) {}
