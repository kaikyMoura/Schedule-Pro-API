import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  Type,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  /**
   * Transform the given value using the given type.
   *
   * The given value is validated using the given type.
   * If the validation fails, a `BadRequestException` is thrown with the validation errors.
   * Otherwise, the object created from the given value is returned.
   *
   * The given type is not validated if it is a primitive type (String, Boolean, Number, Array, Object).
   * In this case, the given value is returned as is.
   *
   * @param value The value to transform.
   * @param metadata The metadata for the value.
   *
   * @returns The transformed value.
   *
   * @throws {BadRequestException} If the value does not validate against the given type.
   */
  async transform<T>(value: T, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value) as object;

    const errors = await validate(object, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      throw new BadRequestException({
        message: 'Validation failed',
        errors: errors.map((error) => ({
          property: error.property,
          message: Object.values(error.constraints!)[0],
        })),
      });
    }
    return object;
  }

  /**
   * Determine if the given type should be validated.
   *
   * Validation is skipped for primitive types, such as String, Boolean, Number, Array, and Object.
   *
   * @param metatype The type to check.
   *
   * @returns true if the type should be validated; false otherwise.
   */
  private toValidate(metatype: Type<any>): boolean {
    const types: Type<any>[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
