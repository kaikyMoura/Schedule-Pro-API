import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Role, StaffService } from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { Specification } from 'src/common/specs/specification.interface';
import { ServiceItemService } from 'src/serviceItem/service-item.service';
import { UserService } from 'src/user/user.service';
import { WithServiceItemIdSpec } from './specs/with-service-item-id.spec';
import { WithStaffIdSpec } from './specs/with-staff-id.spec';
import { StaffServiceRepository } from './staff-service.repository';
import { StaffServiceType } from './types/staff-service.entity';

@Injectable()
export class StaffServiceService {
  constructor(
    private readonly staffServiceRepository: StaffServiceRepository,
    private readonly userService: UserService,
    private readonly serviceItemService: ServiceItemService,
  ) {}

  /**
   * Converts a StaffService entity to a StaffServiceType object.
   *
   * @param {StaffService} staffService - The StaffService entity to convert.
   * @returns {StaffServiceType} - The converted StaffServiceType object.
   */
  toStaffServiceType(staffService: StaffService): StaffServiceType {
    return {
      ...staffService,
      customPrice: staffService.customPrice?.toNumber() ?? 0,
    };
  }

  /**
   * Retrieves all StaffService objects from the database.
   *
   * @returns {Promise<StaffService[]>} - A promise that resolves to an array of
   * StaffService objects.
   *
   * @example
   * const staffServices = await staffServiceService.findMany();
   */
  async findMany(
    spec?: Specification<StaffService>,
    options?: {
      where?: Prisma.StaffServiceWhereInput;
      skip?: number;
      take?: number;
      include?: Prisma.StaffServiceInclude;
      orderBy?: Prisma.StaffServiceOrderByWithRelationInput;
    },
  ): Promise<StaffService[]> {
    return await this.staffServiceRepository.findMany({
      where: options?.where || spec?.toPrismaWhere(),
      skip: options?.skip,
      take: options?.take,
      include: options?.include,
      orderBy: options?.orderBy,
    });
  }

  /**
   * Retrieves a specific StaffService object based on the provided staffId.
   *
   * @param {string} staffId - The unique identifier of the staff member whose
   * StaffService object is to be retrieved.
   *
   * @returns {Promise<StaffService[]>} - A promise that resolves to an array of
   * StaffService objects containing details of the staff member's service.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the staffId is not provided.
   * @throws {NotFoundException} - Thrown if no services are found related to the
   * specified staff member.
   */
  async findManyByStaffId(staffId: string): Promise<StaffService[]> {
    if (!staffId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedStaffService = await this.findMany(
      new WithStaffIdSpec(staffId),
      {
        include: {
          staff: true,
          service: true,
        },
      },
    );

    if (!retrievedStaffService) {
      throw new NotFoundException('No services related for this staff');
    }

    return retrievedStaffService;
  }

  /**
   * Retrieves all StaffService objects related to a specific service.
   *
   * @param {string} serviceId - The unique identifier of the service whose
   * StaffService objects are to be retrieved.
   *
   * @returns {Promise<BaseStaffServiceDto[]>} - A promise that resolves to an array of
   * BaseStaffServiceDto objects containing details of the staff members related to the
   * specified service.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the serviceId is not provided.
   * @throws {NotFoundException} - Thrown if no services are found related to the
   * specified service.
   */
  async findManyByServiceId(serviceId: string): Promise<StaffService[]> {
    if (!serviceId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedStaffService = await this.findMany(
      new WithServiceItemIdSpec(serviceId),
      {
        include: {
          staff: true,
          service: true,
        },
      },
    );

    if (!retrievedStaffService) {
      throw new NotFoundException('No services related for this staff');
    }

    return retrievedStaffService;
  }

  async findById(id: string): Promise<StaffService | null> {
    return await this.staffServiceRepository.findUnique({
      where: { id: id },
    });
  }

  /**
   * Creates a new StaffService in the database.
   *
   * @param {CreateStaffServiceDto} staffService - The data to create a new
   * StaffService.
   *
   * @returns {Promise<ResponseModel<Omit<BaseStaffServiceDto, 'id' | 'createdAt'>, Error>>} - A promise that resolves to a
   * ResponseModel object containing a success message and the created StaffService's details,
   * or an error if the operation fails.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the staffId and serviceId are not provided.
   * @throws {UserNotFoundException} - Thrown if the user with the given staffId does not exist.
   * @throws {BadRequestException} - Thrown if the user is not a staff member.
   * @throws {NotFoundException} - Thrown if the service with the given serviceId does not exist.
   *
   * @example
   * const response = await staffServiceService.create({
   *   staffId: '123456789',
   *   serviceId: '987654321',
   *   customPrice: 50,
   *   active: true,
   * });
   */
  async create(
    staffService: Prisma.StaffServiceCreateInput,
  ): Promise<StaffService> {
    if (
      !staffService.staff.connect!.id! ||
      !staffService.service.connect!.id!
    ) {
      throw new MissingRequiredPropertiesException();
    }

    const staff = await this.userService.findById(
      staffService.staff.connect!.id,
    );

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    if (staff.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    const service = await this.serviceItemService.findById(
      staffService.service.connect!.id,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    const createdStaffService = await this.staffServiceRepository.create({
      staff: {
        connect: { id: staffService.staff.connect!.id },
      },
      service: {
        connect: { id: staffService.service.connect!.id },
      },
      customPrice: staffService.customPrice ?? null,
      isActive: staffService.isActive ?? true,
    });

    return createdStaffService;
  }

  /**
   * Deletes a staff-service object from the database.
   *
   * @param {string} id - The unique identifier of the staff-service object to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the staff-service object has been deleted.
   *
   * @throws {NotFoundException} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    if (!(await this.findById(id))) {
      throw new NotFoundException('Relation not found');
    }

    await this.staffServiceRepository.delete(id);
  }

  /**
   * Updates a staff-service object in the database.
   *
   * @param {string} id - The unique identifier of the staff-service object to update.
   * @param {UpdateStaffServiceDto} updateStaffServiceDto - The data to update the staff-service object with.
   *
   * @returns {Promise<void>} - A promise that resolves when the staff-service object has been updated.
   *
   * @throws {UserNotFoundException} - Thrown if the user with the given staffId does not exist.
   * @throws {BadRequestException} - Thrown if the user is not a staff member.
   * @throws {NotFoundException} - Thrown if the service with the given serviceId does not exist.
   * @throws {NotFoundException} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async update(
    id: string,
    updateStaffServiceDto: Prisma.StaffServiceUpdateInput,
  ): Promise<void> {
    if (!updateStaffServiceDto.staff?.connect?.id) {
      throw new MissingRequiredPropertiesException();
    }

    const staff = await this.userService.findById(
      updateStaffServiceDto.staff.connect.id,
    );

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    if (staff.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    if (!updateStaffServiceDto.service?.connect?.id) {
      throw new MissingRequiredPropertiesException();
    }

    const service = await this.serviceItemService.findById(
      updateStaffServiceDto.service.connect.id,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    if (!(await this.findById(id))) {
      throw new NotFoundException('Relation not found');
    }

    await this.staffServiceRepository.update(id, updateStaffServiceDto);
  }

  /**
   * Updates the active status of a staff-service object in the database.
   *
   * @param {string} id - The unique identifier of the staff-service object to update.
   * @param {boolean} active - The active status to set the staff-service object to.
   *
   * @returns {Promise<string>} - A promise that resolves to a success message.
   *
   * @throws {NotFoundException} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async patchActive(id: string, active: boolean): Promise<string> {
    await this.staffServiceRepository.update(id, {
      isActive: active,
    });

    return `Successfully updated active status to ${active}`;
  }

  /**
   * Updates the custom price of a staff-service object in the database.
   *
   * @param {string} id - The unique identifier of the staff-service object to update.
   * @param {number} customPrice - The custom price to set the staff-service object to.
   *
   * @returns {Promise<string>} - A promise that resolves to a success message.
   *
   * @throws {NotFoundException} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async patchACustomPrice(id: string, customPrice: number): Promise<string> {
    await this.staffServiceRepository.update(id, {
      customPrice: customPrice,
    });

    return `Custom price updated successfully to ${customPrice}`;
  }
}
