export interface Specification<T> {
  isSatisfiedBy(entity: T): boolean;
  toPrismaWhere(): object;
}
