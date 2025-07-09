import { Review } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';

export class IsPublicReviewSpec implements Specification<Review> {
  constructor(private readonly value: boolean) {}

  isSatisfiedBy(entity: Review): boolean {
    return entity.isPublic === this.value;
  }

  toPrismaWhere() {
    return { isPublic: this.value };
  }
}
