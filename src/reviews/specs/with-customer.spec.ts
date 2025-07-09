import { Review } from 'prisma/app/generated/prisma/client';
import { FieldInSpec } from 'src/common/specs/field-in.spec';

/**
 * A specification for checking if a review's customerId is in a list of customerIds.
 * @param value - The list of customerIds to check against.
 * @returns A new specification that is satisfied if the review's customerId is in the list of customerIds.
 */
export class WithCustomerSpec extends FieldInSpec<Review> {
  constructor(customerIds: string[]) {
    super('customerId', customerIds);
  }
}
