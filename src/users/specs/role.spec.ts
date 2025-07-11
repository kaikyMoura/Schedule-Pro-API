import { Prisma, Role, User } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';

export class RoleSpecification implements Specification<User> {
  constructor(private readonly role: Role) {}

  isSatisfiedBy(entity: User): boolean {
    return entity.role === this.role;
  }

  toPrismaWhere(): Prisma.UserWhereInput {
    return { role: this.role };
  }
}
