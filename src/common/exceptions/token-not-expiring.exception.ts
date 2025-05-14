import { HttpException, HttpStatus } from '@nestjs/common';

export class TokenNotExpiringException extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'This token is not close to expire',
        cause: 'Token Not Expiring',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
