import { BadRequestException } from '@nestjs/common';

export class ToxicContentException extends BadRequestException {
  constructor(message?: string) {
    super(
      message || 'Content contains inappropriate language and cannot be posted',
    );
  }
}
