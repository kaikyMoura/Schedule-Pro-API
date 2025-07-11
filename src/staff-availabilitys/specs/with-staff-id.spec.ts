import { StaffAvailability } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';

/**
 * A specification for checking if a staff availability's staffId is in a list of staffIds.
 * @param value - The list of staffIds to check against.
 * @returns A new specification that is satisfied if the staff availability's staffId is in the list of staffIds.
 */
export class WithStaffIdSpec implements Specification<StaffAvailability> {
  constructor(private readonly value: string) {}

  isSatisfiedBy(entity: StaffAvailability): boolean {
    return entity.staffId === this.value;
  }

  toPrismaWhere() {
    return { staffId: this.value };
  }
}
