import { Injectable } from '@nestjs/common';
import { Prisma, Review } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';
import { CreateReviewInput } from './dto/create-review-input';
import { ReviewRepository } from './review.repository';
import { ReviewType } from './types/review.type';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  /**
   * Converts a Review object to a ReviewType object.
   * @param review - The Review object to convert.
   * @returns The converted ReviewType object.
   */
  toReviewType(review: Review): ReviewType {
    return {
      ...review,
    };
  }

  /**
   * Finds many reviews using a filter object.
   * @param spec - The specification for finding reviews.
   * @param options - The options for finding reviews.
   * @returns The found reviews.
   * @example
   * ```typescript
   * const reviews = await this.reviewService.findMany(
   *   new IsApprovedSpec(true),
   *   {
   *     include: { staff: true },
   *     orderBy: { createdAt: 'desc' },
   *   },
   * );
   * ```
   */
  async findMany(
    spec?: Specification<Review>,
    options?: {
      where?: Prisma.ReviewWhereInput;
      skip?: number;
      take?: number;
      include?: Prisma.ReviewInclude;
      orderBy?: Prisma.ReviewOrderByWithRelationInput;
    },
  ): Promise<Review[]> {
    return this.reviewRepository.findMany({
      where: options?.where || spec?.toPrismaWhere(),
      skip: options?.skip,
      take: options?.take,
      include: options?.include,
      orderBy: options?.orderBy,
    });
  }

  /**
   * Finds a review by its ID.
   * @param id - The ID of the review to find.
   * @returns The found review.
   */
  async findById(id: string): Promise<Review | null> {
    return this.reviewRepository.findUnique({
      where: { id },
    });
  }

  /**
   * Finds the first review.
   * @param args - The arguments for finding the first review.
   * @returns The found review.
   */
  async findFirst(args: Prisma.ReviewFindFirstArgs): Promise<Review | null> {
    return this.reviewRepository.findFirst(args);
  }

  /**
   * Creates a review.
   * @param data - The data for creating a review.
   * @returns The created review.
   */
  async create(data: CreateReviewInput): Promise<Review> {
    return this.reviewRepository.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        isApproved: false,
      },
    });
  }

  /**
   * Updates a review.
   * @param id - The ID of the review to update.
   * @param data - The data for updating the review.
   */
  async update(id: string, data: Prisma.ReviewUpdateInput): Promise<void> {
    return this.reviewRepository.update(id, data);
  }

  /**
   * Deactivates a review.
   * @param id - The ID of the review to deactivate.
   */
  async deactivate(id: string): Promise<void> {
    return this.reviewRepository.deactivate(id);
  }

  /**
   * Deletes a review.
   * @param id - The ID of the review to delete.
   */
  async delete(id: string): Promise<void> {
    return this.reviewRepository.delete(id);
  }

  /**
   * Checks if a review exists.
   * @param id - The ID of the review to check.
   * @returns True if the review exists, otherwise false.
   */
  async exists(id: string): Promise<boolean> {
    return this.reviewRepository.exists(id);
  }

  /**
   * Counts the number of reviews.
   * @param where - The where clause for counting reviews.
   * @returns The number of reviews.
   */
  async count(where: Prisma.ReviewWhereInput): Promise<number> {
    return this.reviewRepository.count(where);
  }

  /**
   * Restores a review.
   * @param id - The ID of the review to restore.
   * @returns The restored review.
   */
  async restore(id: string): Promise<Review> {
    return this.reviewRepository.restore(id);
  }
}
