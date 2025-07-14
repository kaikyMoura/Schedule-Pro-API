import { Injectable } from '@nestjs/common';
import { ToxicityAnalysisResult } from 'src/reviews/types/toxicity-limits.type';

@Injectable()
export class MockAiService {
  /**
   * Mock implementation of toxicity analysis for testing
   * @param text The text to analyze.
   * @returns A mock API response with the analysis result.
   */
  async analyzeToxicity(): Promise<ToxicityAnalysisResult> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Return mock analysis with low toxicity scores
    return {
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
    };
  }
}
