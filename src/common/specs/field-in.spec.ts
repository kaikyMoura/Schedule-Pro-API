import { Specification } from './specification.interface';

/**
 * A specification for checking if a field is in a list of values.
 * @param field - The field to check.
 * @param values - The list of values to check against.
 * @returns A new specification that is satisfied if the field is in the list of values.
 */
export class FieldInSpec<T> implements Specification<T> {
  constructor(
    private readonly field: keyof T,
    private readonly values: T[keyof T][],
  ) {}

  isSatisfiedBy(entity: T): boolean {
    return this.values.includes(entity[this.field]);
  }

  toPrismaWhere() {
    return { [this.field]: { in: this.values } };
  }
}
