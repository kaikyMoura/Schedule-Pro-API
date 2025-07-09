import { Review } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';

export class IsApprovedReviewSpec implements Specification<Review> {
  constructor(private readonly value: boolean) {}

  isSatisfiedBy(entity: Review): boolean {
    return entity.isApproved === this.value;
  }

  toPrismaWhere() {
    return { isApproved: this.value };
  }
}
