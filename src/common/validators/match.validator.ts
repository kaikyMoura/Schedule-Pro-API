import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

/**
 * Decorator to validate if a property matches the value of another property.
 *
 * @param property - The name of the property to compare with.
 * @param validationOptions - Optional class-validator config.
 *
 * @example
 * @Match('password', { message: 'Passwords do not match' })
 * confirmPassword: string;
 */
export function Match(property: string, validationOptions?: ValidationOptions) {
  return (target: object, propertyName: string) => {
    registerDecorator({
      name: 'Match',
      target: target.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: unknown, args: ValidationArguments): boolean {
          const [relatedPropertyName] = args.constraints as string[];
          const relatedValue = (args.object as Record<string, unknown>)[
            relatedPropertyName
          ];

          if (
            value === null ||
            value === undefined ||
            relatedValue === null ||
            relatedValue === undefined
          ) {
            return false;
          }

          return value === relatedValue;
        },

        defaultMessage(args: ValidationArguments): string {
          const [relatedPropertyName] = args.constraints as string[];
          return `"${formatPropertyName(args.property)}" must match "${relatedPropertyName}".`;
        },
      },
    });
  };
}

function formatPropertyName(property: string): string {
  return property.charAt(0).toUpperCase() + property.slice(1);
}
