import { Appointment } from 'prisma/app/generated/prisma/client';
import { Specification } from 'src/common/specs/specification.interface';

/**
 * A specification for checking if an appointment's customerId is in a list of customerIds.
 * @param value - The list of customerIds to check against.
 * @returns A new specification that is satisfied if the appointment's customerId is in the list of customerIds.
 */
export class CustomerIdAppointmentSpec implements Specification<Appointment> {
  constructor(private readonly value: string) {}

  isSatisfiedBy(entity: Appointment): boolean {
    return entity.customerId === this.value;
  }

  toPrismaWhere() {
    return { customerId: this.value };
  }
}
