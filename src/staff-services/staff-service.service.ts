import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Role, StaffService } from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { Specification } from 'src/common/specs/specification.interface';
import { ServiceItemService } from 'src/service-items/service-item.service';
import { UserService } from 'src/users/user.service';
import { CreateStaffServiceInput } from './dtos/create-staff-service.input';
import { UpdateStaffServiceInput } from './dtos/update-staff-service.input';
import { StaffServiceRepository } from './staff-service.repository';
import { StaffServiceType } from './types/staff-service.type';

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
   * Retrieves a specific StaffService object based on the provided id.
   *
   * @param {string} id - The unique identifier of the StaffService object to retrieve.
   *
   * @returns {Promise<StaffServiceType>} - A promise that resolves to a StaffServiceType object.
   *
   * @throws {NotFoundException} - Thrown if the StaffService object with the given id does not exist in the database.
   */
  async findById(id: string): Promise<StaffServiceType> {
    const staffService = await this.staffServiceRepository.findUnique({
      where: { id: id },
    });

    if (!staffService) {
      throw new NotFoundException('Staff service not found');
    }

    return this.toStaffServiceType(staffService);
  }

  /**
   * Creates a new StaffService in the database.
   *
   * @param {CreateStaffServiceInput} staffService - The data to create a new
   * StaffService.
   *
   * @returns {Promise<StaffService>} - A promise that resolves to a StaffService object.
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
  async create(staffService: CreateStaffServiceInput): Promise<StaffService> {
    if (!staffService.staffId || !staffService.serviceId) {
      throw new MissingRequiredPropertiesException();
    }

    const staff = await this.userService.findById(staffService.staffId);

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    if (staff.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    const service = await this.serviceItemService.findById(
      staffService.serviceId,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    const createdStaffService = await this.staffServiceRepository.create({
      ...staffService,
      staff: {
        connect: { id: staffService.staffId },
      },
      service: {
        connect: { id: staffService.serviceId },
      },
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
    updateStaffServiceDto: UpdateStaffServiceInput,
  ): Promise<void> {
    if (!updateStaffServiceDto.staffId) {
      throw new MissingRequiredPropertiesException();
    }

    const staff = await this.userService.findById(
      updateStaffServiceDto.staffId,
    );

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    if (staff.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    if (!updateStaffServiceDto.serviceId) {
      throw new MissingRequiredPropertiesException();
    }

    const service = await this.serviceItemService.findById(
      updateStaffServiceDto.serviceId,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    if (!(await this.findById(id))) {
      throw new NotFoundException('Relation not found');
    }

    await this.staffServiceRepository.update(id, {
      ...updateStaffServiceDto,
      skillLevel: updateStaffServiceDto.skillLevel ?? undefined,
    });
  }
}
