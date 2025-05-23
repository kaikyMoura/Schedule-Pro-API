import { Injectable } from '@nestjs/common';
import { ServiceItem } from 'prisma/app/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceItemDto } from './dtos/create-service-item.dto';
import { UpdateServiceItemDto } from './dtos/update-service-item.dto';

@Injectable()
export class ServiceItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new ServiceItem in the database.
   * @param data The ServiceItem data to be inserted.
   * @returns The newly created ServiceItem.
   * @throws If the ServiceItem already exists.
   */
  async create(data: CreateServiceItemDto): Promise<ServiceItem> {
    const response = await this.prisma.serviceItem.create({
      data: {
        ...data,
      },
    });
    return response;
  }

  /**
   * Retrieves a single ServiceItem object by its unique id.
   *
   * @param {string} id - The id of the ServiceItem to retrieve.
   *
   * @returns {Promise<ServiceItem>} - A promise that resolves to the ServiceItem object with the given id.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the ServiceItem with the given id does not exist in the database.
   */
  async findUnique(id: string): Promise<ServiceItem> {
    const data = await this.prisma.serviceItem.findUnique({
      where: { id: id },
    });
    return data!;
  }

  /**
   * Retrieves all ServiceItem objects associated with the given staffId.
   *
   * @param {string} staffId - The id of the staff member to retrieve ServiceItems for.
   *
   * @returns {Promise<ServiceItem[]>} - A promise that resolves to an array of ServiceItem objects associated with the given staff member.
   */
  async findAllStaffServiceItems(staffId: string): Promise<ServiceItem[]> {
    return await this.prisma.serviceItem.findMany({
      where: { staffId: staffId },
    });
  }

  /**
   * Retrieves all ServiceItem objects in the database.
   *
   * @returns {Promise<ServiceItem[]>} - A promise that resolves to an array of ServiceItem objects.
   */
  async findMany(): Promise<ServiceItem[]> {
    return await this.prisma.serviceItem.findMany();
  }

  /**
   * Updates a ServiceItem in the database.
   *
   * @param {string} id - The id of the ServiceItem to update.
   * @param {UpdateServiceItemDto} serviceItem - The ServiceItem data to update. If `undefined`, the ServiceItem won't be updated.
   *
   * @returns {Promise<void>} - A promise that resolves when the ServiceItem has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the ServiceItem with the given id does not exist in the database.
   */
  async update(id: string, serviceItem: UpdateServiceItemDto): Promise<void> {
    await this.prisma.serviceItem.update({
      where: { id: id },
      data: serviceItem && {
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
}
