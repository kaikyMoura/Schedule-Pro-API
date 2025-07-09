import { Prisma, User } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';

export class PasswordTokenSpecification implements Specification<User> {
  constructor(private readonly token: string) {}

  isSatisfiedBy(entity: User): boolean {
    return entity.passwordResetToken === this.token;
  }

  toPrismaWhere(): Prisma.UserWhereInput {
    return { passwordResetToken: this.token };
  }
}
