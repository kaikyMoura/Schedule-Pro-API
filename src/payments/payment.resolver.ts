import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreatePaymentInput } from './dtos/create-payment.input';
import { UpdatePaymentInput } from './dtos/update-payment.input';
import { PaymentService } from './payment.service';
import { StripeService } from './stripe/stripe.service';
import { PaymentResponse } from './types/payment-response.type';
import { PaymentFilterInput } from './dtos/payment-filter.input';
import { PaymentPaginationInput } from './dtos/payment-pagination.input';
import { PaymentOrderInput } from './dtos/payment-order.input';

@Resolver()
export class PaymentResolver {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly stripeService: StripeService,
  ) {}

  @Query(() => [PaymentResponse], {
    name: 'payments',
    description: 'Get all payments',
  })
  async payments(
    @Args('filter', { nullable: true }) filter?: PaymentFilterInput,
    @Args('pagination', { nullable: true }) pagination?: PaymentPaginationInput,
    @Args('orderBy', { nullable: true }) orderBy?: PaymentOrderInput,
  ): Promise<PaymentResponse[]> {
    const payments = await this.paymentService.findMany(undefined, {
      where: filter,
      skip: pagination?.offset,
      take: pagination?.limit,
      orderBy: orderBy,
    });

    return payments.map((payment) => ({
      success: true,
      message: 'Payments retrieved successfully',
      data: payment,
    }));
  }

  @Query(() => PaymentResponse, {
    name: 'payment',
    description: 'Get a payment by id',
  })
  async payment(@Args('id') id: string): Promise<PaymentResponse> {
    const payment = await this.paymentService.findById(id);

    return {
      success: true,
      message: 'Payment retrieved successfully',
      data: payment,
    };
  }

  @Mutation(() => PaymentResponse, {
    name: 'createPayment',
    description: 'Create a payment',
  })
  async createPayment(
    @Args('input') input: CreatePaymentInput,
  ): Promise<PaymentResponse> {
    const payment = await this.paymentService.create(input);

    return {
      success: true,
      message: 'Payment created successfully',
      data: payment,
    };
  }

  @Mutation(() => PaymentResponse, {
    name: 'updatePayment',
    description: 'Update a payment',
  })
  async updatePayment(
    @Args('id') id: string,
    @Args('input') input: UpdatePaymentInput,
  ): Promise<PaymentResponse> {
    await this.paymentService.update(id, input);

    return {
      success: true,
      message: 'Payment updated successfully',
    };
  }
}
