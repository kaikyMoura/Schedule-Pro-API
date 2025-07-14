import { Test, TestingModule } from '@nestjs/testing';
import { ToxicContentException } from 'src/common/exceptions/toxic-content.exception';
import { AiService } from 'src/google/ai/ai.service';
import { CreateReviewInput } from './dtos/create-review-input';
import { ReviewRepository } from './review.repository';
import { ReviewService } from './review.service';

describe('ReviewService', () => {
  let service: ReviewService;

  const mockReviewRepository = {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    deactivate: jest.fn(),
    delete: jest.fn(),
    exists: jest.fn(),
    count: jest.fn(),
    restore: jest.fn(),
  };

  const mockAiService = {
    analyzeToxicity: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {
          provide: ReviewRepository,
          useValue: mockReviewRepository,
        },
        {
          provide: AiService,
          useValue: mockAiService,
        },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    const mockCreateReviewInput: CreateReviewInput = {
      appointmentId: 'appointment-id',
      customerId: 'customer-id',
      staffId: 'staff-id',
      serviceId: 'service-id',
      rating: 5,
      title: 'Great service!',
      comment: 'Very satisfied with the service provided.',
      isApproved: false,
      isPublic: true,
    };

    const mockReview = {
      id: 'review-id',
      ...mockCreateReviewInput,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };

    it('should create a review when content passes toxicity validation', async () => {
      // Mock successful toxicity analysis
      mockAiService.analyzeToxicity.mockResolvedValue({
        attributeScores: {
          TOXICITY: {
            summaryScore: { value: 0.1, type: 'PROBABILITY' },
            spanScores: [],
          },
          INSULT: {
            summaryScore: { value: 0.05, type: 'PROBABILITY' },
            spanScores: [],
          },
          PROFANITY: {
            summaryScore: { value: 0.02, type: 'PROBABILITY' },
            spanScores: [],
          },
          THREAT: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXUALLY_EXPLICIT: {
            summaryScore: { value: 0.03, type: 'PROBABILITY' },
            spanScores: [],
          },
          FLIRTATION: {
            summaryScore: { value: 0.04, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST: {
            summaryScore: { value: 0.02, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST_JOKES: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST_JOKES_2: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST_JOKES_3: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST_JOKES_4: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
        },
      });

      mockReviewRepository.create.mockResolvedValue(mockReview);

      const result = await service.create(mockCreateReviewInput);

      expect(mockAiService.analyzeToxicity).toHaveBeenCalledWith(
        'Great service! Very satisfied with the service provided.',
      );
      expect(mockReviewRepository.create).toHaveBeenCalledWith({
        data: {
          ...mockCreateReviewInput,
          createdAt: expect.any(Date) as Date,
          updatedAt: expect.any(Date) as Date,
          deletedAt: null,
          isApproved: false,
        },
      });
      expect(result).toEqual(mockReview);
    });

    it('should throw ToxicContentException when content exceeds toxicity limit', async () => {
      // Mock toxicity analysis with high toxicity score
      mockAiService.analyzeToxicity.mockResolvedValue({
        attributeScores: {
          TOXICITY: {
            summaryScore: { value: 0.8, type: 'PROBABILITY' }, // Above limit of 0.7
            spanScores: [],
          },
          INSULT: {
            summaryScore: { value: 0.05, type: 'PROBABILITY' },
            spanScores: [],
          },
          PROFANITY: {
            summaryScore: { value: 0.02, type: 'PROBABILITY' },
            spanScores: [],
          },
          THREAT: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXUALLY_EXPLICIT: {
            summaryScore: { value: 0.03, type: 'PROBABILITY' },
            spanScores: [],
          },
          FLIRTATION: {
            summaryScore: { value: 0.04, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST: {
            summaryScore: { value: 0.02, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST_JOKES: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST_JOKES_2: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST_JOKES_3: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
          SEXIST_JOKES_4: {
            summaryScore: { value: 0.01, type: 'PROBABILITY' },
            spanScores: [],
          },
        },
      });

      await expect(service.create(mockCreateReviewInput)).rejects.toThrow(
        ToxicContentException,
      );

      expect(mockAiService.analyzeToxicity).toHaveBeenCalledWith(
        'Great service! Very satisfied with the service provided.',
      );
      expect(mockReviewRepository.create).not.toHaveBeenCalled();
    });

    it('should allow review creation when content is empty', async () => {
      const reviewWithEmptyContent = {
        ...mockCreateReviewInput,
        title: null,
        comment: null,
      };

      mockReviewRepository.create.mockResolvedValue({
        ...mockReview,
        title: null,
        comment: null,
      });

      const result = await service.create(reviewWithEmptyContent);

      expect(mockAiService.analyzeToxicity).not.toHaveBeenCalled();
      expect(mockReviewRepository.create).toHaveBeenCalled();
      expect(result).toEqual({
        ...mockReview,
        title: null,
        comment: null,
      });
    });

    it('should handle API errors gracefully and allow review creation', async () => {
      // Mock API error
      mockAiService.analyzeToxicity.mockRejectedValue(
        new Error('API rate limit exceeded'),
      );

      mockReviewRepository.create.mockResolvedValue(mockReview);

      const result = await service.create(mockCreateReviewInput);

      expect(mockAiService.analyzeToxicity).toHaveBeenCalled();
      expect(mockReviewRepository.create).toHaveBeenCalled();
      expect(result).toEqual(mockReview);
    });
  });
});
