import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ServiceItem } from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { Specification } from 'src/common/specs/specification.interface';
import { CreateServiceItemInput } from './dtos/create-service-item.input';
import { UpdateServiceItemInput } from './dtos/update-service-item.input';
import { ServiceItemRepository } from './service-item.repository';
import { ServiceItemType } from './types/service-item.entity';

@Injectable()
export class ServiceItemService {
  constructor(private readonly serviceItemRepository: ServiceItemRepository) {}

  /**
   * Maps a ServiceItem entity to a ServiceItemType object.
   * Populates required fields, including discount, finalPrice, staffServices, and reviews with default or placeholder values.
   *
   * @param {ServiceItem} serviceItem - The ServiceItem entity to map.
   * @returns {ServiceItemType} - The mapped ServiceItemType object.
   */
  toServiceItemType(serviceItem: ServiceItem): ServiceItemType {
    return {
      ...serviceItem,
      description: serviceItem.description ?? '',
      basePrice: serviceItem.basePrice?.toNumber?.() ?? 0,
      deletedAt: serviceItem.deletedAt ?? undefined,
      updatedAt: serviceItem.updatedAt ?? undefined,
      createdAt: serviceItem.createdAt ?? undefined,
    };
  }

  /**
   * Retrieves all ServiceItem objects from the database.
   *
   * @returns {Promise<ServiceItem[]>} - A promise that resolves to an array of ServiceItem objects.
   *
   * @example
   * const serviceItems = await serviceItemService.retrieveAll();
   */
  async findMany(
    spec?: Specification<ServiceItem>,
    options?: {
      where?: Prisma.ServiceItemWhereInput;
      skip?: number;
      take?: number;
      include?: Prisma.ServiceItemInclude;
      orderBy?: Prisma.ServiceItemOrderByWithRelationInput;
    },
  ): Promise<ServiceItem[]> {
    return await this.serviceItemRepository.findMany({
      where: options?.where || spec?.toPrismaWhere(),
      skip: options?.skip,
      take: options?.take,
      include: options?.include,
      orderBy: options?.orderBy,
    });
  }

  /**
   * Counts the number of ServiceItem objects in the database.
   *
   * @param {Prisma.ServiceItemCountArgs} args - The arguments to count the ServiceItem objects.
   *
   * @returns {Promise<number>} - A promise that resolves to the number of ServiceItem objects in the database.
   */
  async count(args: Prisma.ServiceItemCountArgs): Promise<number> {
    return await this.serviceItemRepository.count(args);
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

  async create(serviceItemInput: CreateServiceItemInput): Promise<ServiceItem> {
    if (!serviceItemInput.name || !serviceItemInput.basePrice) {
      throw new MissingRequiredPropertiesException(
        'Service item is missing required properties',
      );
    }

    return await this.serviceItemRepository.create({
      data: {
        ...serviceItemInput,
        tags: serviceItemInput.tags ?? [],
      },
    });
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
  async update(id: string, serviceItem: UpdateServiceItemInput): Promise<void> {
    if (!(await this.findById(id))) {
      throw new NotFoundException('Service not found');
    }

    await this.serviceItemRepository.update(id, {
      ...serviceItem,
      tags: serviceItem.tags ?? [],
    });
  }
}
