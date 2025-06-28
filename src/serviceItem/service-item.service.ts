import { Injectable, NotFoundException } from '@nestjs/common';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserService } from 'src/user/user.service';
import { BaseServiceItemDto } from './dtos/base-service-item.dto';
import { CreateServiceItemDto } from './dtos/create-service-item.dto';
import { UpdateServiceItemDto } from './dtos/update-service-item.dto';
import { ServiceItemRepository } from './service-item.repository';
import { ApiResponse } from 'src/common/types/api-resonse';

@Injectable()
export class ServiceItemService {
  constructor(
    private readonly serviceItemRepository: ServiceItemRepository,
    private readonly userService: UserService,
  ) {}

  /**
   * Retrieves all ServiceItem objects from the database.
   *
   * @returns {Promise<BaseServiceItemDto[]>} - A promise that resolves to an array of BaseServiceItemDto objects.
   *
   * @example
   * const serviceItems = await serviceItemService.retrieveAll();
   */
  async retrieveAll(): Promise<BaseServiceItemDto[]> {
    const retrivedServiceItems = await this.serviceItemRepository.findMany();

    return retrivedServiceItems.map((serviceItem) => ({
      id: serviceItem.id,
      type: serviceItem.type,
      price: serviceItem.price,
      duration: serviceItem.duration,
    }));
  }

  /**
   * Retrieves a single ServiceItem object by its unique id.
   *
   * @param {string} serviceId - The id of the ServiceItem to retrieve.
   *
   * @returns {Promise<BaseServiceItemDto>} - A promise that resolves to the ServiceItem object with the given id.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the serviceId is not provided.
   * @throws {NotFoundException} - Thrown if the ServiceItem with the given id does not exist in the database.
   *
   * @example
   * const serviceItem = await serviceItemService.retrieveById('123456789');
   */
  async retrieveById(serviceId: string): Promise<BaseServiceItemDto> {
    if (!serviceId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedServiceItem =
      await this.serviceItemRepository.findUnique(serviceId);

    if (!serviceId) {
      throw new NotFoundException('Service not found');
    }

    return {
      id: retrivedServiceItem.id,
      type: retrivedServiceItem.type,
      price: retrivedServiceItem.price,
      duration: retrivedServiceItem.duration,
    };
  }

  /**
   * Creates a new ServiceItem in the database.
   *
   * @param {CreateServiceItemDto} serviceItem - The ServiceItem data to be inserted.
   *
   * @returns {Promise<ResponseModel<ServiceItemResponseDto, Error>>} - A promise that resolves to a ResponseModel
   * with the newly created ServiceItem object, or an error if the operation fails.
   *
   * @example
   * const newServiceItem = await serviceItemService.create({
   *   type: 'HAIRCUT',
   *   price: 20000,
   *   duration: 60,
   *   availability: [
   *     { day: 'MONDAY', startTime: '09:00', endTime: '17:00' },
   *   ],
   *   staffId: '123456789',
   * })
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the serviceItem is missing or undefined.
   * @throws {NotFoundException} - Thrown if the staff with the given id does not exist in the database.
   * @throws {HttpException} - Thrown if the user with the given id is not a staff.
   */
  async create(
    serviceItem: CreateServiceItemDto,
  ): Promise<ApiResponse<BaseServiceItemDto>> {
    if (!serviceItem.type || !serviceItem.price || !serviceItem.duration) {
      throw new MissingRequiredPropertiesException();
    }

    const newServiceItem = await this.serviceItemRepository.create(serviceItem);

    return {
      message: 'Service created successfully',
      data: {
        type: newServiceItem.type,
        price: newServiceItem.price,
        duration: newServiceItem.duration,
      },
    };
  }

  /**
   * Deletes a ServiceItem from the database.
   *
   * @param {string} id - The id of the ServiceItem to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the ServiceItem has been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the ServiceItem with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    if (!(await this.serviceItemRepository.findUnique(id))) {
      throw new NotFoundException('Service not found');
    }

    await this.serviceItemRepository.delete(id);
  }

  /**
   * Updates a ServiceItem in the database.
   *
   * @param {string} id - The id of the ServiceItem to update.
   * @param {UpdateServiceItemDto} serviceItem - The ServiceItem data to update. If `undefined`, the ServiceItem won't be updated.
   *
   * @returns {Promise<void>} - A promise that resolves when the ServiceItem has been updated.
   *
   * @throws {NotFoundException} - Thrown if the ServiceItem with the given id does not exist in the database.
   */
  async update(id: string, serviceItem: UpdateServiceItemDto): Promise<void> {
    if (!(await this.serviceItemRepository.findUnique(id))) {
      throw new NotFoundException('Service not found');
    }

    await this.serviceItemRepository.update(id, serviceItem);
  }
}
