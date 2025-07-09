import { Prisma, User } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';

export class PhoneSpecification implements Specification<User> {
  constructor(private readonly phone: string) {}

  isSatisfiedBy(entity: User): boolean {
    return entity.phone === this.phone;
  }

  toPrismaWhere(): Prisma.UserWhereUniqueInput {
    return { phone: this.phone };
  }
}
