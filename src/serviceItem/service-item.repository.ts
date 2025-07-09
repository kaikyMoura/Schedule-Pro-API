import { Injectable } from '@nestjs/common';
import { Prisma, ServiceItem } from 'prisma/app/generated/prisma/client';
import { BaseRepository } from 'src/common/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceItemRepository implements BaseRepository<ServiceItem> {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new ServiceItem in the database.
   *
   * @param {Prisma.ServiceItemCreateArgs} data - The data to create the ServiceItem with.
   *
   * @returns {Promise<ServiceItem>} - A promise that resolves to the created ServiceItem.
   */
  async create(data: Prisma.ServiceItemCreateArgs): Promise<ServiceItem> {
    return await this.prisma.serviceItem.create(data);
  }

  /**
   * Retrieves a single ServiceItem object by its unique id.
   *
   * @param {string} id - The id of the ServiceItem to retrieve.
   *
   * @returns {Promise<ServiceItem | null>} - A promise that resolves to the ServiceItem object with the given id, or null if no ServiceItem is found.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the ServiceItem with the given id does not exist in the database.
   */
  async findUnique(
    args: Prisma.ServiceItemFindUniqueArgs,
  ): Promise<ServiceItem | null> {
    return await this.prisma.serviceItem.findUnique(args);
  }

  /**
   * Retrieves multiple ServiceItem objects from the database.
   *
   * @param {Prisma.ServiceItemFindManyArgs} options - The options for the query.
   *
   * @returns {Promise<ServiceItem[]>} - A promise that resolves to an array of ServiceItem objects.
   */
  async findMany(args: Prisma.ServiceItemFindManyArgs): Promise<ServiceItem[]> {
    return await this.prisma.serviceItem.findMany(args);
  }

  /**
   * Updates a ServiceItem in the database.
   *
   * @param {string} id - The id of the ServiceItem to update.
   * @param {Prisma.ServiceItemUpdateInput} serviceItem - The ServiceItem data to update. If `undefined`, the ServiceItem won't be updated.
   *
   * @returns {Promise<void>} - A promise that resolves when the ServiceItem has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the ServiceItem with the given id does not exist in the database.
   */
  async update(
    id: string,
    serviceItem: Prisma.ServiceItemUpdateInput,
  ): Promise<void> {
    await this.prisma.serviceItem.update({
      where: { id: id },
      data: {
        ...serviceItem,
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Deletes a ServiceItem from the database.
   *
   * @param {string} id - The unique identifier of the ServiceItem to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the ServiceItem has been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the ServiceItem with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    await this.prisma.serviceItem.delete({
      where: { id: id },
    });
  }

  async findFirst(
    args: Prisma.ServiceItemFindFirstArgs,
  ): Promise<ServiceItem | null> {
    return await this.prisma.serviceItem.findFirst(args);
  }

  async deactivate(id: string): Promise<void> {
    await this.prisma.serviceItem.update({
      where: { id: id },
      data: { isActive: false },
    });
  }

  async exists(id: string): Promise<boolean> {
    return (
      (await this.prisma.serviceItem.findUnique({ where: { id: id } })) !==
      undefined
    );
  }

  async count(args: Prisma.ServiceItemCountArgs): Promise<number> {
    return await this.prisma.serviceItem.count(args);
  }

  async restore(id: string): Promise<ServiceItem> {
    return await this.prisma.serviceItem.update({
      where: { id: id },
      data: { isActive: true },
    });
  }
}
