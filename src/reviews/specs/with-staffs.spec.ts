import { Review } from 'prisma/app/generated/prisma/client';
import { FieldInSpec } from 'src/common/specs/field-in.spec';

/**
 * A specification for checking if a review's staffId is in a list of staffIds.
 * @param value - The list of staffIds to check against.
 * @returns A new specification that is satisfied if the review's staffId is in the list of staffIds.
 */
export class WithStaffsSpec extends FieldInSpec<Review> {
  constructor(staffIds: string[]) {
    super('staffId', staffIds);
  }
}
