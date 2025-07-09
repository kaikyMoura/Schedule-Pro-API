import { User } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';

/**
 * A specification for checking if a user's id is in a list of user ids.
 * @param value - The list of user ids to check against.
 * @returns A new specification that is satisfied if the user's id is in the list of user ids.
 */
export class WithUsersIdsSpec implements Specification<User> {
  constructor(private readonly value: string[]) {}

  isSatisfiedBy(entity: User): boolean {
    return this.value.includes(entity.id);
  }

  toPrismaWhere() {
    return { id: { in: this.value } };
  }
}
