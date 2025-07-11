import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsFutureDate', async: true })
export class IsFutureDateConstraint implements ValidatorConstraintInterface {
  validate(date: Date): boolean {
    const now = new Date();
    const inputDate = new Date(date);

    const minimumAdvance = new Date(now.getTime() + 60 * 60 * 1000);

    return inputDate >= minimumAdvance;
  }
  defaultMessage(): string {
    return 'Appointment must be scheduled at least 1 hour in advance';
  }
}

/**
 * Validates that a date is in the future.
 * @param validationOptions - Validation options.
 * @returns A function that validates the date.
 * @example
 * ```typescript
 * class CreateAppointmentInput {
 *   @IsFutureDate({ message: 'Appointment must be scheduled at least 1 hour in advance' })
 *   date: Date;
 * }
 * ```
 */
export function IsFutureDate(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsFutureDateConstraint,
    });
  };
}
