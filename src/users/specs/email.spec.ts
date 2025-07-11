import { Specification } from 'src/common/specs/specification.interface';
import { Prisma, User } from 'prisma/app/generated/prisma/client';

export class EmailSpecification implements Specification<User> {
  constructor(private readonly email: string) {}

  isSatisfiedBy(entity: User): boolean {
    return entity.email === this.email;
  }

  toPrismaWhere(): Prisma.UserWhereUniqueInput {
    return { email: this.email };
  }
}
