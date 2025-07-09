import { Specification } from './specification.interface';

/**
 * Combines multiple specifications into a single specification.
 * @param specs - The specifications to combine.
 * @returns A new specification that is satisfied if all the input specifications are satisfied.
 */
export class AndSpecification<T> implements Specification<T> {
  constructor(private readonly specs: Specification<T>[]) {}

  isSatisfiedBy(entity: T): boolean {
    return this.specs.every((spec) => spec.isSatisfiedBy(entity));
  }

  toPrismaWhere() {
    return {
      AND: this.specs.map((spec) => spec.toPrismaWhere()),
    };
  }
}
