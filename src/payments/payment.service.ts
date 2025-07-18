import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  Payment,
  PaymentStatus,
  Prisma,
} from 'prisma/app/generated/prisma/client';
import { AppointmentService } from 'src/appointments/appointment.service';
import { Specification } from 'src/common/specs/specification.interface';
import { UserService } from 'src/users/user.service';
import { CreatePaymentInput } from './dtos/create-payment.input';
import { UpdatePaymentInput } from './dtos/update-payment.input';
import { PaymentRepository } from './payment.repository';
import { StripeService } from './stripe/stripe.service';
import { PaymentType } from './types/payment.type';

@Injectable()
export class PaymentService {
  constructor(
    private readonly paymentRepository: PaymentRepository,
    private readonly appointmentService: AppointmentService,
    private readonly userService: UserService,
    private readonly stripeService: StripeService,
  ) {}

  toPaymentType(payment: Payment): PaymentType {
    return {
      ...payment,
      amount: payment.amount.toNumber(),
    };
  }

  async findMany(
    spec?: Specification<Payment>,
    options?: {
      where?: Prisma.PaymentWhereInput;
      skip?: number;
      take?: number;
      include?: Prisma.PaymentInclude;
      orderBy?: Prisma.PaymentOrderByWithRelationInput;
    },
  ): Promise<Payment[]> {
    return await this.paymentRepository.findMany({
      where: options?.where || spec?.toPrismaWhere(),
      skip: options?.skip,
      take: options?.take,
      include: options?.include,
      orderBy: options?.orderBy,
    });
  }

  /**
   * Find payment by id
   * @param id - string
   * @returns Promise<Payment | null>
   */
  async findById(id: string): Promise<Payment | null> {
    return await this.paymentRepository.findUnique({
      where: { id },
    });
  }

  /**
   * Create payment
   * @param data - Prisma.PaymentCreateInput
   * @returns Promise<Payment>
   */
  async create(data: CreatePaymentInput): Promise<Payment> {
    if (!data.appointmentId || !data.userId || !data.amount) {
      throw new BadRequestException(
        `Fields appointmentId, userId and amount are required.`,
      );
    }

    const appointment = await this.appointmentService.findById(
      data.appointmentId,
    );
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    const user = await this.userService.findById(data.userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const paymentIntent = await this.stripeService.createPaymentIntent({
      amount: data.amount,
      currency: data.currency,
    });

    if (!paymentIntent) {
      throw new BadRequestException('Failed to create payment intent');
    }

    return await this.paymentRepository.create({
      appointment: {
        connect: {
          id: data.appointmentId,
        },
      },
      user: {
        connect: {
          id: data.userId,
        },
      },
      amount: data.amount,
      status: PaymentStatus.PENDING,
      currency: data.currency,
      paymentMethod: data.paymentMethod,
      stripePaymentId: paymentIntent.id,
      transactionId: data.transactionId,
    });
  }

  async deactivate(id: string): Promise<void> {
    const payment = await this.findById(id);
    if (!payment) {
      throw new NotFoundException('Payment not found');
    }
    await this.paymentRepository.deactivate(id);
  }

  async activate(id: string): Promise<void> {
    const payment = await this.findById(id);
    if (!payment) {
      throw new NotFoundException('Payment not found');
    }
    await this.paymentRepository.activate(id);
  }

  async delete(id: string): Promise<void> {
    const payment = await this.findById(id);
    if (!payment) {
      throw new NotFoundException('Payment not found');
    }
    await this.paymentRepository.delete(id);
  }

  async update(id: string, data: UpdatePaymentInput): Promise<void> {
    const payment = await this.findById(id);
    if (!payment) {
      throw new NotFoundException('Payment not found');
    }
    await this.paymentRepository.update(id, data);
  }
}
