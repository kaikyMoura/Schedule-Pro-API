import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Role, Status } from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { ResponseModel } from 'src/common/models/response.model';
import { MailService } from 'src/mail/mail.service';
import { ServiceItemService } from 'src/serviceItem/service-item.service';
import { BaseUserDto } from 'src/user/dtos/base-user.dto';
import { UserService } from 'src/user/user.service';
import { AppointmentRepository } from './appointment.repository';
import { AppointmentResponseDto } from './dtos/appointment-response.dto';
import { BaseAppointmentDto } from './dtos/base-appointment.dto';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { UpdateAppointmentDto } from './dtos/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    private readonly appointmentRepository: AppointmentRepository,
    private readonly userService: UserService,
    private readonly mailService: MailService,
    private readonly serviceItemService: ServiceItemService,
  ) {}

  /**
   * Retrieves all Appointment objects from the database.
   *
   * @returns {Promise<ResponseModel<BaseAppointmentDto[], Error>>} - A promise that resolves to a ResponseModel
   * containing an array of BaseAppointmentDto objects with appointment details, or an error if the operation fails.
   *
   * @example
   * const allAppointments = await appointmentService.retrieveAll();
   */
  async retrieveAll(): Promise<BaseAppointmentDto[]> {
    const appointments = await this.appointmentRepository.findAll();

    return appointments.map((appointment) => ({
      id: appointment.id,
      date: appointment.date,
      time: appointment.time,
      status: appointment.status,
      price: appointment.price,
      notes: appointment.notes!,
      customerId: appointment.customerId,
      staffId: appointment.staffId!,
      serviceId: appointment.serviceId,
    }));
  }

  /**
   * Retrieves all Appointment objects associated with a specific customer.
   *
   * @param {string} customerId - The unique identifier of the customer whose appointments are to be retrieved.
   *
   * @returns {Promise<BaseAppointmentDto[]>} - A promise that resolves to an array of BaseAppointmentDto objects
   * containing details of the appointments associated with the specified customer.
   *
   * @example
   * const customerAppointments = await appointmentService.retrieveAllByCustomerId('123456789');
   *
   * @throws {BadRequestException} - Thrown if the user is not a customer.
   */

  async retrieveAllByCustomerId(
    customerId: string,
  ): Promise<BaseAppointmentDto[]> {
    const user = await this.userService.retrieveById(customerId);

    if (user.role !== Role.CUSTOMER) {
      throw new BadRequestException('User is not a customer');
    }

    const appointments =
      await this.appointmentRepository.findAllCustomerAppointments(customerId);

    return appointments.map((appointment) => ({
      date: appointment.date,
      time: appointment.time,
      status: appointment.status,
      price: appointment.price,
      notes: appointment.notes!,
      customerId: appointment.customerId,
      staffId: appointment.staffId!,
      serviceId: appointment.serviceId,
    }));
  }

  /**
   * Retrieves all Appointment objects associated with a specific staff member.
   *
   * @param {string} staffId - The unique identifier of the staff member whose appointments are to be retrieved.
   *
   * @returns {Promise<BaseAppointmentDto[]>} - A promise that resolves to an array of BaseAppointmentDto objects
   * containing details of the appointments associated with the specified staff member.
   *
   * @example
   * const staffAppointments = await appointmentService.retrieveAllByStaffId('123456789');
   *
   * @throws {BadRequestException} - Thrown if the user is not a staff member.
   */
  async retrieveAllByStaffId(staffId: string): Promise<BaseAppointmentDto[]> {
    const user = await this.userService.retrieveById(staffId);

    if (user.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    const appointments =
      await this.appointmentRepository.findAllStaffAppointments(staffId);

    return appointments.map((appointment) => ({
      date: appointment.date,
      time: appointment.time,
      status: appointment.status,
      price: appointment.price,
      notes: appointment.notes!,
      customerId: appointment.customerId,
      staffId: appointment.staffId!,
      serviceId: appointment.serviceId,
    }));
  }

  /**
   * Retrieves a single Appointment object by its unique id.
   *
   * @param {string} appointmentId - The id of the Appointment to retrieve.
   *
   * @returns {Promise<ResponseModel<Appointment, Error>>} - A promise that resolves to a ResponseModel
   * with the Appointment object with the given id, or an error if the operation fails.
   *
   * @example
   * const appointment = await appointmentService.retrieveById('1')
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the appointmentId is missing or undefined.
   * @throws {NotFoundException} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async retrieveById(
    appointmentId: string,
  ): Promise<ResponseModel<BaseAppointmentDto, Error>> {
    if (!appointmentId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedAppointment =
      await this.appointmentRepository.findUnique(appointmentId);

    if (!retrivedAppointment) {
      throw new NotFoundException('Appointment not found');
    }

    return {
      data: {
        id: retrivedAppointment.id,
        date: retrivedAppointment.date,
        time: retrivedAppointment.time,
        status: retrivedAppointment.status,
        price: retrivedAppointment.price,
        notes: retrivedAppointment.notes!,
        customerId: retrivedAppointment.customerId,
        serviceId: retrivedAppointment.serviceId,
        staffId: retrivedAppointment.staffId!,
      },
    };
  }

  /**
   * Creates a new Appointment in the database.
   *
   * @param {CreateAppointmentDto} appointment - The Appointment data to be inserted.
   *
   * @returns {Promise<ResponseModel<AppointmentResponseDto, Error>>} - A promise that resolves to a ResponseModel
   * with the newly created Appointment object, or an error if the operation fails.
   *
   * @example
   * const newAppointment = await appointmentService.create({
   *   customerId: '123456789',
   *   serviceId: '123456789',
   *   staffId: '123456789',
   *   date: '2023-01-01',
   *   time: '09:00',
   *   notes: 'This is a sample appointment',
   * })
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the appointment is missing or undefined.
   * @throws {NotFoundException} - Thrown if the staff with the given id does not exist in the database.
   * @throws {HttpException} - Thrown if the user with the given id is not a staff.
   * @throws {BadRequestException} - Thrown if no staff is available at the given time.
   */
  async create(
    appointment: CreateAppointmentDto,
  ): Promise<ResponseModel<AppointmentResponseDto, Error>> {
    if (
      !appointment.customerId ||
      !appointment.serviceId ||
      !appointment.staffId ||
      !appointment.date ||
      !appointment.time
    ) {
      throw new MissingRequiredPropertiesException();
    }

    let staffName = '';
    let selectedStaffId = appointment.staffId;

    if (selectedStaffId && selectedStaffId !== 'any') {
      const staffResponse =
        await this.userService.retrieveById(selectedStaffId);

      if (!staffResponse) {
        throw new NotFoundException('Staff not found');
      }

      const staff = staffResponse;

      if (staff.role !== 'STAFF') {
        throw new BadRequestException('User is not a staff member');
      }

      staffName = staff.name;
    } else {
      const availableStaff = await this.findAvailableStaff(
        appointment.date,
        appointment.time,
      );

      if (!availableStaff) {
        throw new BadRequestException('No staff available at this time.');
      }

      selectedStaffId = availableStaff.id!;
      staffName = availableStaff.name;
    }

    const newAppointment = await this.appointmentRepository.create({
      ...appointment,
      staffId: selectedStaffId,
    });

    const service = await this.serviceItemService.retrieveById(
      newAppointment.serviceId,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    await this.mailService.sendMail({
      to: appointment.customerId,
      from: 'Schedule Pro',
      subject: 'New Appointment',
      html: `<h1>New Appointment</h1>
      <p>You have a new appointment with ${staffName}</p>
      <p>Service: ${service.type}</p>
      <p>Date: ${newAppointment.date.toISOString()}</p><p>Time: ${newAppointment.time}</p>`,
    });

    return {
      message: 'Appointment created successfully',
      data: {
        notes: newAppointment.notes!,
        date: newAppointment.date,
        time: newAppointment.time,
        status: newAppointment.status,
        price: newAppointment.price,
        staffName,
        serviceName: newAppointment.serviceId,
      },
    };
  }

  /**
   * Deletes a Appointment from the database.
   *
   * @param {string} id - The unique identifier of the Appointment to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the Appointment has been deleted.
   *
   * @throws {NotFoundException} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    if (!(await this.appointmentRepository.findUnique(id))) {
      throw new NotFoundException('Appointment not found');
    }

    await this.appointmentRepository.delete(id);
  }

  /**
   * Updates a Appointment in the database.
   *
   * @param {string} id - The id of the Appointment to update.
   * @param {UpdateAppointmentDto} updateAppointmentDto - The Appointment data to update. If `undefined`, the Appointment won't be updated.
   *
   * @returns {Promise<void>} - A promise that resolves when the Appointment has been updated.
   *
   * @throws {NotFoundException} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async update(
    id: string,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<void> {
    if (!(await this.appointmentRepository.findUnique(id))) {
      throw new NotFoundException('Appointment not found');
    }

    await this.appointmentRepository.update(id, updateAppointmentDto);
  }

  /**
   * Generic method to update the status of an Appointment in the database.
   *
   * @param {string} id - The id of the Appointment to update.
   * @param {Status} status - The new status of the Appointment.
   *
   * @example
   * await appointmentService.changeStatus('1', 'CONFIRMED');
   *
   * @returns {Promise<void>} - A promise that resolves when the Appointment status has been updated.
   *
   * @throws {NotFoundException} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async changeStatus(id: string, status: Status): Promise<void> {
    await this.appointmentRepository.changeStatus(id, status);
  }

  /**
   * Finds the first available staff member for the given date and time.
   *
   * @param {string} date - The date of the appointment.
   * @param {string} time - The time of the appointment.
   *
   * @returns {Promise<Omit<BaseUserDto, 'password'> | null>} - A promise that resolves to the first available staff member, or `null` if no staff member is available.
   */
  private async findAvailableStaff(
    date: Date,
    time: string,
  ): Promise<Omit<BaseUserDto, 'password'> | null> {
    const allStaff = await this.userService.retrieveAll();

    if (!allStaff) {
      return null;
    }

    for (const staff of allStaff) {
      const isBooked = await this.appointmentRepository.findFirst(
        staff.id!,
        date,
        time,
      );
      if (!isBooked) return staff;
    }

    return null;
  }
}
