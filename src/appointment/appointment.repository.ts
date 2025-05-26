import { Injectable } from '@nestjs/common';
import { Appointment, Status } from 'prisma/app/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new Appointment in the database.
   * @param data The Appointment data to be inserted.
   * @returns The newly created Appointment.
   * @throws If the Appointment already exists.
   */
  async create(data: CreateAppointmentDto): Promise<Appointment> {
    const response = await this.prisma.appointment.create({
      data: {
        notes: data.notes,
        date: data.date,
        time: data.time,
        status: 'PENDING',
        price: data.price,
        customerId: data.customerId,
        staffId: data.staffId,
        serviceId: data.serviceId,
      },
    });
    return response;
  }

  /**
   * Retrieves a single Appointment object by its unique id.
   *
   * @param {string} id - The id of the Appointment to retrieve.
   *
   * @returns {Promise<Appointment>} - A promise that resolves to the Appointment object with the given id.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async findUnique(id: string): Promise<Appointment> {
    const data = await this.prisma.appointment.findUnique({
      where: { id: id },
    });
    return data!;
  }

  /**
   * Retrieves all Appointment objects associated with a given Customer.
   *
   * @param {string} customerId - The unique identifier of the Customer whose appointments are to be fetched.
   *
   * @returns {Promise<Appointment[]>} - A promise that resolves to an array of Appointment objects related to the specified Customer.
   *
   * @throws {Prisma.NotFoundError} - Thrown if no Appointments are found for the given Customer id.
   */
  async findAllCustomerAppointments(
    customerId: string,
  ): Promise<Appointment[]> {
    const data = await this.prisma.appointment.findMany({
      where: { customerId: customerId },
    });
    return data;
  }

  /**
   * Retrieves all Appointment objects that belong to the given staff id.
   *
   * @param {string} staffId - The id of the staff member to retrieve the appointments for.
   *
   * @returns {Promise<Appointment[]>} - A promise that resolves to an array of Appointment objects that belong to the given staff id.
   */
  async findAllStaffAppointments(staffId: string): Promise<Appointment[]> {
    const data = await this.prisma.appointment.findMany({
      where: { staffId: staffId },
    });
    return data;
  }

  /**
   * Retrieves all Appointment objects in the database.
   *
   * @returns {Promise<Appointment[]>} - A promise that resolves to an array of Appointment objects.
   */
  async findAll(): Promise<Appointment[]> {
    return await this.prisma.appointment.findMany();
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
    staffId: string,
    date: Date,
    time: string,
  ): Promise<Appointment | null> {
    const data = await this.prisma.appointment.findFirst({
      where: { staffId: staffId, date: date, time: time },
    });
    return data;
  }
}
