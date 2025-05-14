import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  /**
   * Exception thrown when the user is not found.
   *
   * Extends the HttpException class and returns a 404 Not Found response by default.
   *
   * @param {string} [message='User not found'] - The message to be displayed
   * for the exception.
   */
  constructor(message?: string) {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        message: message ? message : 'User not found',
        error: 'User Not Found',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
