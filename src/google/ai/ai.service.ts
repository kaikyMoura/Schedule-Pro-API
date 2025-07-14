import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AiService {
  private readonly API_KEY: string;
  private readonly DISCOVERY_URL =
    'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';
  private client: unknown;
  private isInitialized = false;

  constructor(private readonly configService: ConfigService) {
    this.API_KEY = this.configService.get<string>('PERSPECTIVE_API_KEY')!;
  }

  private async ensureInitialized() {
    if (!this.isInitialized && process.env.NODE_ENV !== 'test') {
      await this.initPerspective();
      this.isInitialized = true;
    }
  }

  private async initPerspective() {
    try {
      const { GoogleApis } = await import('googleapis/build/src/googleapis');
      const google = new GoogleApis();
      this.client = await google.discoverAPI(this.DISCOVERY_URL);
    } catch (error) {
      console.warn('Failed to initialize Google Perspective API:', error);
    }
  }

  /**
   * Analyzes the toxicity of a given text using Google's Perspective API.
   * @param text The text to analyze.
   * @returns The API response with the analysis result.
   * @throws An error if the response is invalid or the API call fails.
   */
  async analyzeToxicity(text: string): Promise<any> {
    await this.ensureInitialized();

    if (!this.client) {
      throw new Error('Google Perspective API client not initialized');
    }

    const analyzeRequest = {
      comment: {
        text,
      },
      requestedAttributes: {
        TOXICITY: {},
        SEVERE_TOXICITY: {},
        IDENTITY_ATTACK: {},
        INSULT: {},
        PROFANITY: {},
        THREAT: {},
        SEXUALLY_EXPLICIT: {},
        FLIRTATION: {},
      },
    };

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      (this.client as any).comments.analyze(
        {
          key: this.API_KEY,
          resource: analyzeRequest,
        },
        (err: unknown, response: any) => {
          if (err instanceof Error) {
            reject(err);
          } else if (err) {
            reject(
              new Error(typeof err === 'string' ? err : JSON.stringify(err)),
            );
          } else {
            // Safely access response.data, or reject if not present
            if (
              response &&
              typeof response === 'object' &&
              'data' in response
            ) {
              resolve((response as { data: unknown }).data);
            } else {
              reject(new Error('Invalid response from Perspective API'));
            }
          }
        },
      );
    });
  }
}
