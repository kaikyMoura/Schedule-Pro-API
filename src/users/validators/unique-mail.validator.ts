import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from 'src/users/user.service';

@ValidatorConstraint({ name: 'IsUniqueEmail', async: true })
@Injectable()
export class IsUniqueEmailConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(email: string): Promise<boolean> {
    try {
      console.log('🔍 Validating email uniqueness:', email);
      const existingUser = await this.userService.findByEmail(email);
      const isUnique = !existingUser;
      console.log('📧 Email validation result:', {
        email,
        isUnique,
        existingUser: !!existingUser,
      });
      return isUnique;
    } catch (error) {
      console.error('❌ Error in email validation:', error);
      // If there's an error, assume the email is not unique to be safe
      return false;
    }
  }

  defaultMessage(): string {
    return 'This email is already registered.';
  }
}

/**
 * Validates that an email is unique.
 * @param validationOptions - Validation options.
 * @returns A function that validates the email.
 * @example
 * ```typescript
 * class CreateUserInput {
 *   @IsUniqueEmail({ message: 'This email is already registered.' })
 *   email: string;
 * }
 * ```
 */
export function IsUniqueEmail(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsUniqueEmailConstraint,
    });
  };
}
