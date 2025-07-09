import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsBusinessHours', async: true })
export class IsBusinessHoursConstraint implements ValidatorConstraintInterface {
  validate(time: string, args: ValidationArguments): boolean {
    const [startHour = 9, endHour = 17] = args.constraints as [number, number];

    const [hours, minutes] = time.split(':').map(Number);
    const timeInMinutes = hours * 60 + minutes;
    const startInMinutes = startHour * 60;
    const endInMinutes = endHour * 60;

    return timeInMinutes >= startInMinutes && timeInMinutes <= endInMinutes;
  }
  defaultMessage(args: ValidationArguments): string {
    const [startHour = 9, endHour = 17] = args.constraints as [number, number];
    return `Appointment time must be between ${startHour}:00 and ${endHour}:00`;
  }
}

/**
 * Validates that a time is within business hours.
 * @param startHour - The start hour of the business hours.
 * @param endHour - The end hour of the business hours.
 * @param validationOptions - Validation options.
 * @returns A function that validates the time.
 * @example
 * ```typescript
 * class CreateAppointmentInput {
 *   @IsBusinessHours(9, 17, { message: 'Appointment time must be between 9:00 and 17:00' })
 *   time: string;
 * }
 * ```
 */
export function IsBusinessHours(
  startHour?: number,
  endHour?: number,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [startHour, endHour],
      validator: IsBusinessHoursConstraint,
    });
  };
}
