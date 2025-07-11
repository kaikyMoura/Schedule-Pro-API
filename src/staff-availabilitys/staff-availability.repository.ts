import { Injectable } from '@nestjs/common';
import { Prisma, StaffAvailability } from 'prisma/app/generated/prisma/client';
import { BaseRepository } from 'src/common/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StaffAvailabilityRepository
  implements BaseRepository<StaffAvailability>
{
  constructor(private readonly prisma: PrismaService) {}
  /**
   * Create a new StaffAvailability
   *
   * @param {Prisma.StaffAvailabilityCreateInput} data The data to create a new StaffAvailability
   *
   * @returns {Promise<StaffAvailability>} The created StaffAvailability
   */
  async create(
    data: Prisma.StaffAvailabilityCreateInput,
  ): Promise<StaffAvailability> {
    return await this.prisma.staffAvailability.create({
      data: {
        staffId: data.staff.connect!.id!,
        dayOfWeek: data.dayOfWeek,
        startTime: data.startTime,
        endTime: data.endTime,
      },
    });
  }

  /**
   * Find a StaffAvailability by id
   *
   * @param {string} id The id of the StaffAvailability to find
   *
   * @returns {Promise<StaffAvailability>} The found StaffAvailability
   */
  async findUnique(
    args: Prisma.StaffAvailabilityFindUniqueArgs,
  ): Promise<StaffAvailability | null> {
    return await this.prisma.staffAvailability.findUnique(args);
  }

  /**
   * Find all StaffAvailabilities
   *
   * @returns {Promise<StaffAvailability[]>} The found StaffAvailabilities
   */
  async findMany(
    args: Prisma.StaffAvailabilityFindManyArgs,
  ): Promise<StaffAvailability[]> {
    return await this.prisma.staffAvailability.findMany(args);
  }

  /**
   * Updates a StaffAvailability in the database.
   *
   * @param {string} id - The id of the StaffAvailability to update.
   * @param {Prisma.StaffAvailabilityUpdateInput} staffAvailability - The data to update the StaffAvailability with.
   *
   * @returns {Promise<void>} - A promise that resolves when the StaffAvailability has been updated.
   */
  async update(
    id: string,
    staffAvailability: Prisma.StaffAvailabilityUpdateInput,
  ): Promise<void> {
    await this.prisma.staffAvailability.update({
      where: { id: id },
      data: staffAvailability,
    });
  }

  /**
   * Deletes a StaffAvailability from the database.
   *
   * @param {string} id - The id of the StaffAvailability to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the StaffAvailability has been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the StaffAvailability with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    await this.prisma.staffAvailability.delete({
      where: { id: id },
    });
  }

  async findFirst(
    args: Prisma.StaffAvailabilityFindFirstArgs,
  ): Promise<StaffAvailability | null> {
    return await this.prisma.staffAvailability.findFirst(args);
  }

  async deactivate(id: string): Promise<void> {
    await this.prisma.staffAvailability.update({
      where: { id: id },
      data: { deletedAt: new Date() },
    });
  }

  async exists(id: string): Promise<boolean> {
    const staffAvailability = await this.prisma.staffAvailability.findUnique({
      where: { id: id },
    });
    return !!staffAvailability;
  }

  async count(where: Prisma.StaffAvailabilityWhereInput): Promise<number> {
    return await this.prisma.staffAvailability.count({ where });
  }

  async restore(id: string): Promise<StaffAvailability> {
    return await this.prisma.staffAvailability.update({
      where: { id: id },
      data: { deletedAt: undefined },
    });
  }
}
