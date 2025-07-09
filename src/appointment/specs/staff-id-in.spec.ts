import { Specification } from 'src/common/specs/specification.interface';
import { Appointment } from 'prisma/app/generated/prisma/client';

/**
 * A specification for checking if an appointment's staffId is in a list of staffIds.
 * @param value - The list of staffIds to check against.
 * @returns A new specification that is satisfied if the appointment's staffId is in the list of staffIds.
 */
export class StaffIdsInAppointmentSpec implements Specification<Appointment> {
  constructor(private readonly value: string[]) {}

  isSatisfiedBy(entity: Appointment): boolean {
    return this.value.includes(entity.staffId ?? '');
  }

  toPrismaWhere() {
    return { staffId: { in: this.value } };
  }
}
