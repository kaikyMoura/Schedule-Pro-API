import { Appointment } from 'prisma/app/generated/prisma/client';
import { FieldInSpec } from 'src/common/specs/field-in.spec';

/**
 * A specification for checking if an appointment's service item id is in a list of service item ids.
 * @param serviceItemIds - The list of service item ids to check against.
 * @returns A new specification that is satisfied if the appointment's service item id is in the list of service item ids.
 */
export class WithServiceItemsSpec extends FieldInSpec<Appointment> {
  constructor(serviceItemIds: string[]) {
    super('serviceId', serviceItemIds);
  }
}
