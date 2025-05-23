import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyRegisteredException extends HttpException {
  /**
   * Exception thrown when the user is already registered.
   *
   * Extends the HttpException class and returns a 409 Conflict response by default.
   *
   * - default message: 'Try logging in. If you dont remember your password, please use the "Forgot Password" option.'
   *
   * @usageNotes
   * The HTTP response status code will be 409 Conflict by default.
   */
  constructor() {
    super(
      {
        statusCode: HttpStatus.CONFLICT,
        message:
          'Try logging in. If you dont remember your password, please use the "Forgot Password" option.',
        error: 'User already registered',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
