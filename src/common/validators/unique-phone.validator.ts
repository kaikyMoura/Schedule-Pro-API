import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from 'src/user/user.service';

@ValidatorConstraint({ name: 'IsUniquePhone', async: true })
export class IsUniquePhoneConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(phone: string): Promise<boolean> {
    const user = await this.userService.findByPhone(phone);
    return !user;
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
