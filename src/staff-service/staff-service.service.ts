import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Role } from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { ResponseModel } from 'src/common/models/response.model';
import { ServiceItemService } from 'src/serviceItem/service-item.service';
import { UserService } from 'src/user/user.service';
import { BaseStaffServiceDto } from './dtos/base-staff-service.dto';
import { CreateStaffServiceDto } from './dtos/create-staff-service.dto';
import { UpdateStaffServiceDto } from './dtos/update-staff-service.dto';
import { StaffServiceRepository } from './staff-service.repository';

@Injectable()
export class StaffServiceService {
  constructor(
    private readonly staffServiceRepository: StaffServiceRepository,
    private readonly userService: UserService,
    private readonly serviceItemService: ServiceItemService,
  ) {}

  /**
   * Retrieves all StaffService objects from the database.
   *
   * @returns {Promise<Omit<BaseStaffServiceDto, 'createdAt'>[]>} - A promise that resolves to an array of
   * StaffService objects excluding the 'createdAt' field.
   *
   * @example
   * const staffServices = await staffServiceService.retrieveAll();
   */
  async retrieveAll(): Promise<Omit<BaseStaffServiceDto, 'createdAt'>[]> {
    const staffServices = await this.staffServiceRepository.findMany();

    return staffServices.map((staffService) => ({
      id: staffService.id,
      staffId: staffService.staffId,
      serviceId: staffService.serviceId,
      customPrice: staffService.customPrice,
      active: staffService.active,
    }));
  }

  /**
   * Retrieves a specific StaffService object based on the provided staffId.
   *
   * @param {string} staffId - The unique identifier of the staff member whose
   * StaffService object is to be retrieved.
   *
   * @returns {Promise<BaseStaffServiceDto>} - A promise that resolves to a
   * BaseStaffServiceDto object containing details of the staff member's service.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the staffId is not provided.
   * @throws {NotFoundException} - Thrown if no services are found related to the
   * specified staff member.
   */
  async retrieveByStaffId(staffId: string): Promise<BaseStaffServiceDto> {
    if (!staffId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedStaffService =
      await this.staffServiceRepository.findUniqueByStaffId(staffId);

    if (!retrievedStaffService) {
      throw new NotFoundException('No services related for this staff');
    }

    return {
      id: retrievedStaffService.id,
      staffId: retrievedStaffService.staffId,
      serviceId: retrievedStaffService.serviceId,
      customPrice: retrievedStaffService.customPrice,
      active: retrievedStaffService.active,
    };
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
  async retrieveByServiceId(serviceId: string): Promise<BaseStaffServiceDto[]> {
    if (!serviceId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedStaffService =
      await this.staffServiceRepository.findManyByServiceId(serviceId);

    if (!retrievedStaffService) {
      throw new NotFoundException('No services related for this staff');
    }

    return retrievedStaffService.map((staffService) => ({
      id: staffService.id,
      staffId: staffService.staffId,
      serviceId: staffService.serviceId,
      customPrice: staffService.customPrice,
      active: staffService.active,
    }));
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
    staffService: CreateStaffServiceDto,
  ): Promise<
    ResponseModel<Omit<BaseStaffServiceDto, 'id' | 'createdAt'>, Error>
  > {
    if (!staffService.staffId || !staffService.serviceId) {
      throw new MissingRequiredPropertiesException();
    }

    const staff = await this.userService.retrieveById(staffService.staffId);

    if (!staff) {
      throw new UserNotFoundException();
    }

    if (staff.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    const service = await this.serviceItemService.retrieveById(
      staffService.serviceId,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    await this.staffServiceRepository.create({
      staffId: staffService.staffId,
      serviceId: staffService.serviceId,
      customPrice: staffService.customPrice,
      active: staffService.active,
    });

    return {
      message: 'Relation created successfully',
      data: {
        staffId: staffService.staffId,
        serviceId: staffService.serviceId,
        customPrice: staffService.customPrice,
        active: staffService.active,
      },
    };
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
    if (!(await this.staffServiceRepository.findUnique(id))) {
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
    updateStaffServiceDto: UpdateStaffServiceDto,
  ): Promise<void> {
    const staff = await this.userService.retrieveById(
      updateStaffServiceDto.staffId,
    );

    if (!staff) {
      throw new UserNotFoundException();
    }

    if (staff.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    const service = await this.serviceItemService.retrieveById(
      updateStaffServiceDto.serviceId,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    if (!(await this.staffServiceRepository.findUnique(id))) {
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
    const updatedActite = await this.staffServiceRepository.updateActive(
      id,
      active,
    );

    return `Successfully updated active status to ${updatedActite}`;
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
    await this.staffServiceRepository.updateCustomPrice(id, customPrice);

    return 'Custom price updated successfully';
  }
}
