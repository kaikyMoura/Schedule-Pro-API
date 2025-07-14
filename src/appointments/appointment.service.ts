import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  Appointment,
  Prisma,
  Role,
  Status,
  User,
} from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { Specification } from 'src/common/specs/specification.interface';
import { NotificationService } from 'src/notifications/notification.service';
import { ServiceItemService } from 'src/service-items/service-item.service';
import { RoleSpecification } from 'src/users/specs/role.spec';
import { UserService } from 'src/users/user.service';
import { AppointmentRepository } from './appointment.repository';
import { CreateAppointmentInput } from './dtos/create-appointment.input';
import { UpdateAppointmentInput } from './dtos/update-appointment.input';
import { AppointmentType } from './types/appointment.entity';

@Injectable()
export class AppointmentService {
  constructor(
    private readonly appointmentRepository: AppointmentRepository,
    private readonly userService: UserService,
    private readonly notificationService: NotificationService,
    private readonly serviceItemService: ServiceItemService,
  ) {}

  /**
   * Converts an Appointment object to an AppointmentType object.
   *
   * @param {Appointment} appointment - The Appointment object to convert.
   *
   * @returns {AppointmentType} - The converted AppointmentType object.
   */
  toAppointmentType(appointment: Appointment): AppointmentType {
    return {
      ...appointment,
      price: Number(appointment.price),
      discount: Number(appointment.discount),
      finalPrice: Number(appointment.finalPrice),
    };
  }

  /**
   * Retrieves all Appointment objects from the database.
   *
   * @returns {Promise<Appointment[]>} - A promise that resolves to an array of Appointment objects.
   *
   * @example
   * const allAppointments = await appointmentService.findMany();
   */
  async findMany(
    spec?: Specification<Appointment>,
    options?: {
      where?: Prisma.AppointmentWhereInput;
      skip?: number;
      take?: number;
      include?: Prisma.AppointmentInclude;
      orderBy?: Prisma.AppointmentOrderByWithRelationInput;
    },
  ): Promise<Appointment[]> {
    return await this.appointmentRepository.findMany({
      where: options?.where || spec?.toPrismaWhere(),
      skip: options?.skip,
      take: options?.take,
      include: options?.include,
      orderBy: options?.orderBy,
    });
  }

  /**
   * Counts the number of Appointments that match the given criteria.
   *
   * @param {Specification<Appointment>} spec - The specification to filter the appointments.
   * @param {Prisma.AppointmentCountArgs} options - The options to filter the appointments.
   *
   * @returns {Promise<number>} - A promise that resolves to the number of Appointments that match the given criteria.
   */
  async count(
    spec?: Specification<Appointment>,
    options?: {
      where?: Prisma.AppointmentWhereInput;
      skip?: number;
      take?: number;
      orderBy?: Prisma.AppointmentOrderByWithRelationInput;
    },
  ): Promise<number> {
    return await this.appointmentRepository.count({
      where: options?.where || spec?.toPrismaWhere(),
    });
  }

  /**
   * Retrieves a single Appointment object by its unique id.
   *
   * @param {string} appointmentId - The id of the Appointment to retrieve.
   *
   * @returns {Promise<Appointment>} - A promise that resolves to the Appointment object with the given id.
   *
   * @example
   * const appointment = await appointmentService.findById('1')
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the appointmentId is missing or undefined.
   * @throws {NotFoundException} - Thrown if the Appointment with the given id does not exist in the database.
   */
  async findById(appointmentId: string): Promise<Appointment> {
    if (!appointmentId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedAppointment = await this.appointmentRepository.findUnique({
      where: { id: appointmentId },
    });

    if (!retrivedAppointment) {
      throw new NotFoundException('Appointment not found');
    }

    return retrivedAppointment;
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
  async create(appointment: CreateAppointmentInput): Promise<Appointment> {
    if (
      !appointment.customerId ||
      !appointment.serviceId ||
      !appointment.staffId ||
      !appointment.scheduledDate ||
      !appointment.scheduledTime
    ) {
      throw new MissingRequiredPropertiesException();
    }

    let staffName = '';
    let selectedStaffId = appointment.staffId;

    if (selectedStaffId && selectedStaffId !== 'any') {
      const staffResponse = await this.userService.findById(selectedStaffId);

      if (!staffResponse) {
        throw new NotFoundException('Staff not found');
      }

      const staff = staffResponse;

      if (staff.role !== 'STAFF') {
        throw new BadRequestException('User is not a staff member');
      }

      staffName = `${staff.firstName} ${staff.lastName}`;
    } else {
      const availableStaff = await this.findAvailableStaff({
        scheduledDate: appointment.scheduledDate,
        scheduledTime: appointment.scheduledTime,
      });

      if (!availableStaff) {
        throw new BadRequestException('No staff available at this time.');
      }

      selectedStaffId = availableStaff.id!;
      staffName = `${availableStaff?.firstName} ${availableStaff?.lastName}`;
    }

    const { customerId, serviceId, staffId, ...rest } = appointment;

    const newAppointment = await this.appointmentRepository.create({
      ...rest,
      customer: {
        connect: {
          id: customerId,
        },
      },
      service: {
        connect: {
          id: serviceId,
        },
      },
      staff: {
        connect: {
          id: staffId,
        },
      },
    });

    const service = await this.serviceItemService.findById(
      newAppointment.serviceId,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    const customer = await this.userService.findById(newAppointment.customerId);

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    await this.notificationService.sendMail({
      to: customer?.email,
      from: 'Schedule Pro',
      subject: 'New Appointment',
      html: `<h1>New Appointment</h1>
      <p>You have a new appointment with ${staffName}</p>
      <p>Service: ${service.name}</p>
      <p>Date: ${newAppointment.scheduledDate.toISOString()}</p><p>Time: ${newAppointment.scheduledTime}</p>`,
    });

    return newAppointment;
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
    if (!(await this.findById(id))) {
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
    updateAppointment: UpdateAppointmentInput,
  ): Promise<void> {
    if (!(await this.findById(id))) {
      throw new NotFoundException('Appointment not found');
    }

    await this.appointmentRepository.update(id, updateAppointment);
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
   * Finds a staff member who is available at the given time.
   *
   * @param {Prisma.AppointmentWhereInput} where - The where clause to filter the appointments.
   *
   * @returns {Promise<User | null>} - A promise that resolves to the User object if a staff member is available, or null if no staff member is available.
   */
  private async findAvailableStaff(
    where: Prisma.AppointmentWhereInput,
  ): Promise<User | null> {
    const availableStaff = await this.userService.findMany(
      new RoleSpecification(Role.STAFF),
    );

    if (!availableStaff) {
      return null;
    }

    for (const staff of availableStaff) {
      const isBooked = await this.appointmentRepository.findFirst({
        where: {
          staffId: staff.id,
          scheduledDate: where.scheduledDate,
          scheduledTime: where.scheduledTime,
        },
      });
      if (!isBooked) {
        return staff;
      }
    }

    return null;
  }

  async deactivate(id: string): Promise<void> {
    const appointment = await this.findById(id);
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    const customer = await this.userService.findById(appointment.customerId);
    const staff = await this.userService.findById(appointment.staffId!);

    if (!customer || !staff) {
      throw new NotFoundException('Customer or staff not found');
    }

    await this.update(id, {
      status: Status.CANCELLED,
      notes: 'Customer cancelled the appointment',
      deletedAt: new Date(),
    });
  }
}
