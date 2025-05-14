import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyRegisteredException extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.UNAUTHORIZED,
        message:
          'Try logging in. If you dont remember your password, please use the "Forgot Password" option.',
        error: 'User already registered',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
