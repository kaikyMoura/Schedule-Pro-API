import { Specification } from 'src/common/specs/specification.interface';
import { Prisma, User } from 'prisma/app/generated/prisma/client';

export class VerificationTokenSpecification implements Specification<User> {
  constructor(private readonly token: string) {}

  isSatisfiedBy(entity: User): boolean {
    return entity.verificationToken === this.token;
  }

  toPrismaWhere(): Prisma.UserWhereInput {
    return { verificationToken: this.token };
  }
}
