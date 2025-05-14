import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Please check your credentials before trying again.',
        error: 'User Not Found',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
