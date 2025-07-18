import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { CreatePaymentIntentDto } from './dtos/create-payment-intent.dto';
import { CreatePriceDto } from './dtos/create-price.dto';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdatePaymentIntentDto } from './dtos/update-payment-intent.dto';
import { UpdatePriceDto } from './dtos/update-price.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  constructor(private readonly configService: ConfigService) {
    this.stripe = new Stripe(
      this.configService.get<string>('STRIPE_SECRET_KEY')!,
    );
  }

  /**
   * Find a product by its ID
   * @param productId - The ID of the product
   * @returns The product
   */
  async findProductById(productId: string): Promise<Stripe.Product> {
    return await this.stripe.products.retrieve(productId);
  }

  /**
   * Find a price by its ID
   * @param priceId - The ID of the price
   * @returns The price
   */
  async findPriceById(priceId: string): Promise<Stripe.Price> {
    return await this.stripe.prices.retrieve(priceId);
  }

  /**
   * List prices
   * @param params - The parameters for the list
   * @param options - The options for the list
   * @returns The prices
   */
  async listPrices(
    params?: Stripe.PriceListParams,
    options?: Stripe.RequestOptions,
  ): Promise<Stripe.Price[]> {
    return (await this.stripe.prices.list(params, options)).data;
  }

  /**
   * List products
   * @param params - The parameters for the list
   * @param options - The options for the list
   * @returns The products
   */
  async listProducts(
    params?: Stripe.ProductListParams,
    options?: Stripe.RequestOptions,
  ): Promise<Stripe.Product[]> {
    return (await this.stripe.products.list(params, options)).data;
  }

  /**
   * Search for products
   * @param query - The query to search for
   * @returns The products
   */
  async searchProducts(query: string): Promise<Stripe.Product[]> {
    return (await this.stripe.products.search({ query })).data;
  }

  /**
   * Create a new product
   * @param name - The name of the product
   * @param description - The description of the product
   * @returns The created product
   */
  async createProduct(input: CreateProductDto): Promise<Stripe.Product> {
    const product = await this.stripe.products.create({
      ...input,
    });
    return product;
  }

  /**
   * Create a new price
   * @param input - The input for the price
   * @returns The created price
   */
  async createPrice(input: CreatePriceDto): Promise<Stripe.Price> {
    const price = await this.stripe.prices.create({
      ...input,
      product_data: {
        ...input.product_data,
        statement_descriptor:
          input.product_data.statement_descriptor ?? undefined,
        unit_label: input.product_data.unit_label ?? undefined,
      },
      recurring: {
        interval: input.recurring?.interval ?? 'month',
        interval_count: input.recurring?.interval_count ?? undefined,
        usage_type: input.recurring?.usage_type ?? undefined,
        trial_period_days: input.recurring?.trial_period_days ?? undefined,
      },
      unit_amount: input.unit_amount ?? undefined,
      unit_amount_decimal: input.unit_amount_decimal ?? undefined,
    });
    return price;
  }

  /**
   * Create a payment intent
   * @param input - The input for the payment intent
   * @returns The ID of the created payment intent
   */
  async createPaymentIntent(
    input: CreatePaymentIntentDto,
  ): Promise<Stripe.PaymentIntent> {
    const paymentIntent = await this.stripe.paymentIntents.create(input);
    return paymentIntent;
  }

  /**
   * Update a payment intent
   * @param paymentIntentId - The ID of the payment intent
   * @param input - The input for the payment intent
   * @returns The updated payment intent
   */
  async updatePaymentIntent(
    paymentIntentId: string,
    input: UpdatePaymentIntentDto,
  ): Promise<Stripe.PaymentIntent> {
    return await this.stripe.paymentIntents.update(paymentIntentId, {
      ...input,
    });
  }

  /**
   * Update a product
   * @param productId - The ID of the product
   * @param input - The input for the product
   */
  async updateProduct(
    productId: string,
    input: UpdateProductDto,
  ): Promise<void> {
    await this.stripe.products.update(productId, {
      ...input,
    });
  }

  /**
   * Update a price
   * @param priceId - The ID of the price
   * @param input - The input for the price
   */
  async updatePrice(priceId: string, input: UpdatePriceDto): Promise<void> {
    await this.stripe.prices.update(priceId, {
      ...input,
    });
  }

  /**
   * Delete a product
   * @param productId - The ID of the product
   */
  async deleteProduct(productId: string): Promise<void> {
    await this.stripe.products.del(productId);
  }
}
