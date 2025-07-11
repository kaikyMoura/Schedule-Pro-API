import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from 'src/users/user.service';

@ValidatorConstraint({ name: 'IsUniquePhone', async: true })
@Injectable()
export class IsUniquePhoneConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(phone: string): Promise<boolean> {
    try {
      console.log('🔍 Validating phone uniqueness:', phone);
      const existingUser = await this.userService.findByPhone(phone);
      const isUnique = !existingUser;
      console.log('📱 Phone validation result:', {
        phone,
        isUnique,
        existingUser: !!existingUser,
      });
      return isUnique;
    } catch (error) {
      console.error('❌ Error in phone validation:', error);
      return false;
    }
  }

  defaultMessage(): string {
    return 'This phone number is already registered.';
  }
}

/**
 * Validates that a phone number is unique.
 * @param validationOptions - Validation options.
 * @returns A function that validates the phone number.
 * @example
 * ```typescript
 * class CreateUserInput {
 *   @IsUniquePhone({ message: 'This phone number is already registered.' })
 *   phone: string;
 * }
 * ```
 */
export function IsUniquePhone(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsUniquePhoneConstraint,
    });
  };
}
