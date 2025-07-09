import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ServiceItem } from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserService } from 'src/user/user.service';
import { ServiceItemRepository } from './service-item.repository';

@Injectable()
export class ServiceItemService {
  constructor(
    private readonly serviceItemRepository: ServiceItemRepository,
    private readonly userService: UserService,
  ) {}

  /**
   * Retrieves all ServiceItem objects from the database.
   *
   * @returns {Promise<ServiceItem[]>} - A promise that resolves to an array of ServiceItem objects.
   *
   * @example
   * const serviceItems = await serviceItemService.retrieveAll();
   */
  async findMany(args: Prisma.ServiceItemFindManyArgs): Promise<ServiceItem[]> {
    const retrivedServiceItems =
      await this.serviceItemRepository.findMany(args);

    return retrivedServiceItems;
  }

  /**
   * Retrieves a single ServiceItem object by its unique id.
   *
   * @param {string} serviceId - The id of the ServiceItem to retrieve.
   *
   * @returns {Promise<ServiceItem | null>} - A promise that resolves to the ServiceItem object with the given id, or null if no ServiceItem is found.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the serviceId is not provided.
   * @throws {NotFoundException} - Thrown if the ServiceItem with the given id does not exist in the database.
   *
   * @example
   * const serviceItem = await serviceItemService.retrieveById('123456789');
   */
  async findById(id: string): Promise<ServiceItem | null> {
    if (!id) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedServiceItem = await this.serviceItemRepository.findUnique({
      where: { id },
    });

    if (!retrivedServiceItem) {
      throw new NotFoundException('Service not found');
    }

    return retrivedServiceItem;
  }

  async create(
    serviceItem: Prisma.ServiceItemCreateInput,
  ): Promise<ServiceItem> {
    if (
      !serviceItem.name ||
      !serviceItem.basePrice ||
      !serviceItem.durationMinutes
    ) {
      throw new MissingRequiredPropertiesException(
        'Service item is missing required properties',
      );
    }

    return await this.serviceItemRepository.create(serviceItem);
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
    if (!(await this.findById(id))) {
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
  async update(
    id: string,
    serviceItem: Prisma.ServiceItemUpdateInput,
  ): Promise<void> {
    if (!(await this.findById(id))) {
      throw new NotFoundException('Service not found');
    }

    await this.serviceItemRepository.update(id, serviceItem);
  }
}
