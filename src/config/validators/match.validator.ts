import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

/**
 * A custom validation decorator to ensure that the property value matches
 * the value of another property specified by `property`. This is useful
 * for scenarios like confirming passwords or matching related fields.
 *
 * @param property - The name of the property to match against.
 * @param validationOptions - Optional validation configuration options.
 *
 * Usage:
 *
 * @Match('password', { message: 'Passwords do not match' })
 * confirmPassword: string;
 */
export function Match(property: string, validationOptions?: ValidationOptions) {
  return (object: Record<string, any>, propertyName: string) => {
    registerDecorator({
      name: 'Match',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        /**
         * Validation function for the custom validator.
         *
         * @param value The value of the property to be validated.
         * @param args The validation arguments.
         * @returns Whether the value matches the value of the related property.
         */
        validate(value: any, args: ValidationArguments) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const [relatedPropertyName] = args.constraints;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const relatedValue = (args.object as any)[relatedPropertyName];
          return value === relatedValue;
        },
        /**
         * Default error message for this validator.
         *
         * @param args ValidationArguments - The validation arguments.
         * @returns A string with the default error message.
         */
        defaultMessage(args: ValidationArguments) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const [relatedPropertyName] = args.constraints;
          return `${formatPropertyName(args)} must match ${relatedPropertyName}`;
        },
      },
    });
  };
}

/**
 * Format the property name to display in the error message.
 *
 * @param args ValidationArguments - The validation arguments.
 * @returns The formatted property name.
 */
function formatPropertyName(args: ValidationArguments) {
  return args.property.charAt(0).toUpperCase() + args.property.slice(1);
}
