import { ObjectType } from '@nestjs/graphql';
import { MutationResponseType } from 'src/common/factorys/mutation-response.factory';
import { PaymentType } from './payment.type';

/**
 * Payment response type
 * @class PaymentResponse
 * @description Payment response type for payment.
 * @example
 * ```typescript
 * const paymentResponse: PaymentResponse = {
 *  success: true,
 *  message: 'Payment created successfully',
 *  data: PaymentType,
 *  error: null,
 * }
 * ```
 */
@ObjectType()
export class PaymentResponse extends MutationResponseType(PaymentType) {}
