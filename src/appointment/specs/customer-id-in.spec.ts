import { Specification } from 'src/common/specs/specification.interface';
import { Appointment } from 'prisma/app/generated/prisma/client';

/**
 * A specification for checking if an appointment's customerId is in a list of customerIds.
 * @param value - The list of customerIds to check against.
 * @returns A new specification that is satisfied if the appointment's customerId is in the list of customerIds.
 */
export class CustomerIdsInAppointmentSpec
  implements Specification<Appointment>
{
  constructor(private readonly value: string[]) {}

  isSatisfiedBy(entity: Appointment): boolean {
    return this.value.includes(entity.customerId ?? '');
  }

  toPrismaWhere() {
    return { customerId: { in: this.value } };
  }
}
