import { Injectable } from '@nestjs/common';
import { Prisma, StaffService } from 'prisma/app/generated/prisma/client';
import { BaseRepository } from 'src/common/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StaffServiceRepository implements BaseRepository<StaffService> {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new staff-service.
   * @param {Prisma.StaffServiceCreateInput} data - Contains the staffId, serviceId, customPrice, and active status.
   * @returns {Promise<StaffService>} - The created staff-service.
   */
  async create(data: Prisma.StaffServiceCreateInput): Promise<StaffService> {
    return await this.prisma.staffService.create({
      data: {
        ...data,
        staff: {
          connect: { id: data.staff.connect!.id! },
        },
        service: {
          connect: { id: data.service.connect!.id! },
        },
        customPrice: data.customPrice ?? null,
        isActive: data.isActive ?? true,
      },
    });
  }

  /**
   * Find a staff-service object by its id.
   * @param {Prisma.StaffServiceFindUniqueArgs} args - The arguments to find a StaffService by.
   * @returns {Promise<StaffService | null>} - A promise that resolves to the StaffService object if found, or null if not found.
   */
  async findUnique(
    args: Prisma.StaffServiceFindUniqueArgs,
  ): Promise<StaffService | null> {
    return await this.prisma.staffService.findUnique(args);
  }

  /**
   * Retrieves all staff-service objects from the database.
   *
   * @returns {Promise<StaffService[]>} - A promise that resolves to an array of StaffService objects,
   * each containing details of a staff member's service. If no staff-service objects exist, an empty array is returned.
   */
  async findMany(
    args: Prisma.StaffServiceFindManyArgs,
  ): Promise<StaffService[]> {
    return await this.prisma.staffService.findMany(args);
  }

  /**
   * Updates a staff-service object in the database.
   *
   * @param {string} id - The unique identifier of the staff-service object to update.
   * @param {Prisma.StaffServiceUpdateInput} updateStaffServiceDto - The data to update the staff-service object with.
   *
   * @returns {Promise<void>} - A promise that resolves when the staff-service object has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async update(
    id: string,
    updateStaffServiceDto: Prisma.StaffServiceUpdateInput,
  ): Promise<void> {
    await this.prisma.staffService.update({
      where: { id: id },
      data: updateStaffServiceDto,
    });
  }

  /**
   * Deletes a staff-service object from the database.
   *
   * @param {string} id - The unique identifier of the staff-service object to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the staff-service object has been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    await this.prisma.staffService.delete({
      where: { id: id },
    });
  }

  /**
   * Finds the first staff-service object that matches the given arguments.
   * @param {Prisma.StaffServiceFindFirstArgs} args - The arguments to find a StaffService by.
   * @returns {Promise<StaffService | null>} - A promise that resolves to the first StaffService object if found, or null if not found.
   */
  async findFirst(
    args: Prisma.StaffServiceFindFirstArgs,
  ): Promise<StaffService | null> {
    return await this.prisma.staffService.findFirst(args);
  }

  /**
   * Deactivates a staff-service object in the database.
   * @param {string} id - The unique identifier of the staff-service object to deactivate.
   * @returns {Promise<void>} - A promise that resolves when the staff-service object has been deactivated.
   */
  async deactivate(id: string): Promise<void> {
    await this.prisma.staffService.update({
      where: { id: id },
      data: { isActive: false },
    });
  }

  /**
   * Checks if a staff-service object exists in the database.
   * @param {string} id - The unique identifier of the staff-service object to check.
   * @returns {Promise<boolean>} - A promise that resolves to true if the staff-service object exists, or false if not.
   */
  async exists(id: string): Promise<boolean> {
    return (
      (await this.prisma.staffService.findUnique({
        where: { id: id },
      })) !== null
    );
  }

  /**
   * Counts the number of staff-service objects that match the given arguments.
   * @param {Prisma.StaffServiceWhereInput} where - The arguments to count StaffService by.
   * @returns {Promise<number>} - A promise that resolves to the number of StaffService objects that match the given arguments.
   */
  async count(where: Prisma.StaffServiceWhereInput): Promise<number> {
    return await this.prisma.staffService.count({ where });
  }

  /**
   * Restores a staff-service object in the database.
   * @param {string} id - The unique identifier of the staff-service object to restore.
   * @returns {Promise<StaffService>} - A promise that resolves to the restored StaffService object.
   */
  async restore(id: string): Promise<StaffService> {
    return await this.prisma.staffService.update({
      where: { id: id },
      data: { deletedAt: null },
    });
  }
}
