import { Injectable } from '@nestjs/common';
import { Prisma, Review } from 'prisma/app/generated/prisma/client';
import { ToxicContentException } from 'src/common/exceptions/toxic-content.exception';
import { Specification } from 'src/common/specs/specification.interface';
import { AiService } from 'src/google/ai/ai.service';
import { CreateReviewInput } from './dtos/create-review-input';
import { ReviewRepository } from './review.repository';
import { ReviewType } from './types/review.type';
import { ToxicityAnalysisResult } from './types/toxicity-limits.type';

@Injectable()
export class ReviewService {
  private readonly toxicityLimits: Record<string, number> = {
    TOXICITY: 0.6,
    SEVERE_TOXICITY: 0.6,
    IDENTITY_ATTACK: 0.6,
    INSULT: 0.6,
    PROFANITY: 0.6,
    THREAT: 0.6,
    SEXUALLY_EXPLICIT: 0.5,
    FLIRTATION: 0.5,
  };

  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly aiService: AiService,
  ) {}

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
   * Validates the toxicity of review content using Google's Perspective API.
   * @param text - The text content to validate (title + comment).
   * @returns True if the content passes toxicity validation, false otherwise.
   * @throws ToxicContentException if the content exceeds toxicity limits.
   */
  private async validateToxicity(text: string): Promise<boolean> {
    if (!text || text.trim().length === 0) {
      return true;
    }

    try {
      const analysis = (await this.aiService.analyzeToxicity(
        text,
      )) as ToxicityAnalysisResult;

      console.log('Analysis:', analysis);

      if (!analysis?.attributeScores) {
        throw new Error('Invalid response from toxicity analysis');
      }

      // Blocks if the score is greater than the limit
      for (const [attribute, score] of Object.entries(
        analysis.attributeScores,
      )) {
        const limit = this.toxicityLimits[attribute] ?? 0.6;
        if (score && score.summaryScore.value > limit) {
          console.log(
            `${attribute}: ${score.summaryScore.value} (limite: ${limit})`,
          );
          throw new ToxicContentException(
            `Content exceeds ${attribute.toLowerCase()} limit (${score.summaryScore.value.toFixed(2)} > ${limit})`,
          );
        }
      }

      return true;
    } catch (error) {
      if (error instanceof ToxicContentException) {
        throw error;
      }
      console.error('Toxicity analysis failed:', error);
      throw new Error('Toxicity analysis failed');
    }
  }

  /**
   * Creates a review after validating its content for toxicity.
   * @param data - The data for creating a review.
   * @returns The created review.
   * @throws ToxicContentException if the content exceeds toxicity limits.
   */
  async create(data: CreateReviewInput): Promise<Review> {
    // Combine title and comment for toxicity analysis
    const contentToAnalyze = [data.title, data.comment]
      .filter(Boolean)
      .join(' ');

    // Validate toxicity before creating the review
    await this.validateToxicity(contentToAnalyze);

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
