import { Injectable } from '@nestjs/common';
import { Prisma, Review } from 'prisma/app/generated/prisma/client';
import { BaseRepository } from 'src/common/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewRepository implements BaseRepository<Review> {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Finds a unique review by its ID.
   * @param args - The arguments to find a unique review.
   * @returns The review if found, otherwise null.
   */
  async findUnique(args: Prisma.ReviewFindUniqueArgs): Promise<Review | null> {
    return this.prisma.review.findUnique(args);
  }

  /**
   * Finds the first review that matches the given arguments.
   * @param args - The arguments to find the first review.
   * @returns The first review if found, otherwise null.
   */
  async findFirst(args: Prisma.ReviewFindFirstArgs): Promise<Review | null> {
    return this.prisma.review.findFirst(args);
  }

  /**
   * Finds many reviews that match the given arguments.
   * @param args - The arguments to find many reviews.
   * @returns The reviews if found, otherwise null.
   */
  async findMany(args: Prisma.ReviewFindManyArgs): Promise<Review[]> {
    return this.prisma.review.findMany(args);
  }

  /**
   * Creates a new review.
   * @param data - The data to create a new review.
   * @returns The created review.
   */
  async create(args: Prisma.ReviewCreateArgs): Promise<Review> {
    return this.prisma.review.create(args);
  }

  /**
   * Updates a review by its ID.
   * @param id - The ID of the review to update.
   * @param data - The data to update the review.
   */
  async update(id: string, data: Prisma.ReviewUpdateInput): Promise<void> {
    await this.prisma.review.update({ where: { id }, data });
  }

  /**
   * Deactivates a review by its ID.
   * @param id - The ID of the review to deactivate.
   */
  async deactivate(id: string): Promise<void> {
    await this.prisma.review.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  /**
   * Deletes a review by its ID.
   * @param id - The ID of the review to delete.
   */
  async delete(id: string): Promise<void> {
    await this.prisma.review.delete({ where: { id } });
  }

  /**
   * Checks if a review exists by its ID.
   * @param id - The ID of the review to check.
   * @returns True if the review exists, otherwise false.
   */
  async exists(id: string): Promise<boolean> {
    const review = await this.prisma.review.findUnique({ where: { id } });
    return !!review;
  }

  /**
   * Counts the number of reviews that match the given arguments.
   * @param where - The arguments to count the number of reviews.
   * @returns The number of reviews that match the given arguments.
   */
  async count(where: Prisma.ReviewWhereInput): Promise<number> {
    return this.prisma.review.count({ where });
  }

  /**
   * Restores a review by its ID.
   * @param id - The ID of the review to restore.
   * @returns The restored review.
   */
  async restore(id: string): Promise<Review> {
    return this.prisma.review.update({
      where: { id },
      data: { deletedAt: null },
    });
  }
}
