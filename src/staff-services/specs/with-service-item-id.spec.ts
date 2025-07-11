import { StaffService } from 'prisma/app/generated/prisma/client';
import { FieldIdSpec } from 'src/common/specs/field-id.spec';

/**
 * A specification for checking if a staff service's service id is in a list of service ids.
 * @param serviceItemId - The service id to check against.
 * @returns A new specification that is satisfied if the staff service's service id is in the list of service ids.
 */
export class WithServiceItemIdSpec extends FieldIdSpec<StaffService> {
  constructor(serviceItemId: string) {
    super('serviceId', serviceItemId);
  }
}
