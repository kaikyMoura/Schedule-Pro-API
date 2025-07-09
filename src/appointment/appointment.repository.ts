import { Injectable } from '@nestjs/common';
import {
  Appointment,
  Prisma,
  Status,
} from 'prisma/app/generated/prisma/client';
import { BaseRepository } from 'src/common/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAppointmentDto } from './input/update-appointment.input';

@Injectable()
export class AppointmentRepository implements BaseRepository<Appointment> {
  constructor(private readonly prisma: PrismaService) {}
  /**
   * Creates a new Appointment in the database.
   *
   * @param {Prisma.AppointmentCreateInput} data - The Appointment data to create.
   *
   * @returns {Promise<Appointment>} - A promise that resolves to the newly created Appointment.
   */
  async create(data: Prisma.AppointmentCreateInput): Promise<Appointment> {
    const response = await this.prisma.appointment.create({
      data,
    });
    return response;
  }

  async findUnique(
    args: Prisma.AppointmentFindUniqueArgs,
  ): Promise<Appointment | null> {
    return await this.prisma.appointment.findUnique(args);
  }

  /**
   * Retrieves all Appointment objects in the database.
   *
   * @param {Prisma.AppointmentFindManyArgs} args - The arguments to filter the appointments.
   *
   * @returns {Promise<Appointment[]>} - A promise that resolves to an array of Appointment objects.
   */
  async findMany(
    args?: Prisma.AppointmentFindManyArgs,
  ): Promise<Appointment[]> {
    return await this.prisma.appointment.findMany(args);
  }

  /**
   * Updates a Appointment in the database.
   *
   * @param {string} id - The id of the Appointment to update.
   * @param {UpdateAppointmentDto} appointment - The Appointment data to update. If `undefined`, the Appointment won't be updated.
   *
   * @returns {Promise<void>} - A promise that resolves when the Appointment has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async update(
    id: string,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<void> {
    await this.prisma.appointment.update({
      where: { id: id },
      data: updateAppointmentDto && {
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Deletes a Appointment from the database.
   *
   * @param {string} id - The unique identifier of the Appointment to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the Appointment has been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    await this.prisma.appointment.delete({
      where: { id: id },
    });
  }

  /**
   * ⚠️ Should only be used in case of customer deletion
   *
   * Deletes all Appointments from the database associated with a given Customer.
   *
   * @param {string} customerId - The unique identifier of the Customer to delete Appointments from.
   *
   * @returns {Promise<void>} - A promise that resolves when all Appointments have been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the Customer with the given id does not exist in the database.
   */
  async deleteAll(customerId: string): Promise<void> {
    await this.prisma.appointment.deleteMany({
      where: { customerId: customerId },
    });
  }

  /**
   * Updates the status of an Appointment in the database.
   *
   * @param {string} id - The id of the Appointment to update.
   * @param {Status} status - The new status of the Appointment.
   *
   * @returns {Promise<void>} - A promise that resolves when the Appointment status has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async changeStatus(id: string, status: Status): Promise<void> {
    await this.prisma.appointment.update({
      where: { id: id },
      data: { status: status },
    });
  }

  /**
   * Finds the first Appointment that matches the given staffId, date and time.
   *
   * @param {string} staffId - The id of the staff member.
   *
   * @param {Date} date - The date of the appointment.
   *
   * @param {string} time - The time of the appointment.
   *
   * @returns {Promise<Appointment | null>} - A promise that resolves to the first Appointment if found, or `null` if no Appointment matches the given criteria.
   */
  async findFirst(
    args: Prisma.AppointmentFindFirstArgs,
  ): Promise<Appointment | null> {
    return await this.prisma.appointment.findFirst(args);
  }

  async deactivate(id: string): Promise<void> {
    await this.prisma.appointment.update({
      where: { id: id },
      data: { deletedAt: new Date() },
    });
  }

  async exists(id: string): Promise<boolean> {
    const data = await this.prisma.appointment.findUnique({
      where: { id: id },
    });
    return !!data;
  }

  async count(where: Prisma.AppointmentWhereInput = {}): Promise<number> {
    return await this.prisma.appointment.count({ where });
  }

  async restore(id: string): Promise<Appointment> {
    return await this.prisma.appointment.update({
      where: { id: id },
      data: { deletedAt: null },
    });
  }
}
