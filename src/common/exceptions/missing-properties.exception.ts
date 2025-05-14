import { HttpException, HttpStatus } from '@nestjs/common';

export class MissingRequiredPropertiesException extends HttpException {
  /**
   * Exception thrown when one or more required properties are missing in the request payload.
   *
   * Extends the HttpException class and returns a 400 Bad Request response by default.
   *
   * @param {string} [message='Some required properties are missing from the request.'] - The message to be displayed
   * for the exception.
   */
  constructor(message?: string) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: message
          ? message
          : 'Some required properties are missing from the request.',
        error: 'User Not Found',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
