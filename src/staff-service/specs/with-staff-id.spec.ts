import { StaffService } from 'prisma/app/generated/prisma/client';
import { FieldIdSpec } from 'src/common/specs/field-id.spec';

/**
 * A specification for checking if a staff service's staff id is in a list of staff ids.
 * @param staffId - The staff id to check against.
 * @returns A new specification that is satisfied if the staff service's staff id is in the list of staff ids.
 */
export class WithStaffIdSpec extends FieldIdSpec<StaffService> {
  constructor(staffId: string) {
    super('staffId', staffId);
  }
}
