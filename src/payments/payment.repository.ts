import { Injectable } from '@nestjs/common';
import { Payment, Prisma } from 'prisma/app/generated/prisma/client';
import { BaseRepository } from 'src/common/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentRepository implements BaseRepository<Payment> {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Find many payments
   * @param args - Prisma.PaymentFindManyArgs
   * @returns Promise<Payment[]>
   */
  async findMany(args: Prisma.PaymentFindManyArgs): Promise<Payment[]> {
    return await this.prisma.payment.findMany(args);
  }

  /**
   * Find unique payment
   * @param args - Prisma.PaymentFindUniqueArgs
   * @returns Promise<Payment | null>
   */
  async findUnique(
    args: Prisma.PaymentFindUniqueArgs,
  ): Promise<Payment | null> {
    return await this.prisma.payment.findUnique(args);
  }

  /**
   * Find first payment
   * @param args - Prisma.PaymentFindFirstArgs
   * @returns Promise<Payment | null>
   */
  async findFirst(args: Prisma.PaymentFindFirstArgs): Promise<Payment | null> {
    return await this.prisma.payment.findFirst(args);
  }

  /**
   * Create payment
   * @param data - Prisma.PaymentCreateInput
   * @returns Promise<Payment>
   */
  async create(data: Prisma.PaymentCreateInput): Promise<Payment> {
    return await this.prisma.payment.create({ data });
  }

  /**
   * Update payment
   * @param id - string
   * @param data - Prisma.PaymentUpdateInput
   * @returns Promise<void>
   */
  async update(id: string, data: Prisma.PaymentUpdateInput): Promise<void> {
    await this.prisma.payment.update({ where: { id }, data });
  }

  /**
   * Delete payment
   * @param id - string
   * @returns Promise<void>
   */
  async delete(id: string): Promise<void> {
    await this.prisma.payment.delete({ where: { id } });
  }

  /**
   * Exists payment
   * @param id - string
   * @returns Promise<boolean>
   */
  async deactivate(id: string): Promise<void> {
    await this.prisma.payment.update({
      where: { id: id },
      data: { deletedAt: new Date(), updatedAt: new Date() },
    });
  }

  /**
   * Restore payment
   * @param id - string
   * @returns Promise<Payment>
   */
  async restore(id: string): Promise<Payment> {
    return await this.prisma.payment.update({
      where: { id },
      data: { deletedAt: null },
    });
  }

  /**
   * Count payments
   * @param where - Prisma.PaymentWhereInput
   * @returns Promise<number>
   */
  async count(where: Prisma.PaymentWhereInput = {}): Promise<number> {
    return await this.prisma.payment.count({ where });
  }

  /**
   * Activate payment
   * @param id - string
   * @returns Promise<void>
   */
  async activate(id: string): Promise<void> {
    await this.prisma.payment.update({
      where: { id: id },
      data: { deletedAt: null, updatedAt: new Date() },
    });
  }

  /**
   * Exists payment
   * @param id - string
   * @returns Promise<boolean>
   */
  async exists(id: string): Promise<boolean> {
    return (await this.prisma.payment.count({ where: { id } })) > 0;
  }
}
