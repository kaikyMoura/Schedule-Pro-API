import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffAvailabilityDto } from './dtos/create-staff-availability.dto';
import { BaseStaffAvailabilityDto } from './dtos/base-staff-availability.dto';
import { UpdateStaffAvailabilityDto } from './dtos/update-staff-availability.dto';

@Injectable()
export class StaffAvailabilityRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new StaffAvailability
   *
   * @param {CreateStaffAvailabilityDto} data The data to create a new StaffAvailability
   *
   * @returns {Promise<BaseStaffAvailabilityDto>} The created StaffAvailability
   */
  async create(
    data: CreateStaffAvailabilityDto,
  ): Promise<BaseStaffAvailabilityDto> {
    const response = await this.prisma.staffAvailability.create({ data });
    return {
      id: response.id,
      staffId: response.staffId,
      dayOfWeek: response.dayOfWeek,
      startTime: response.startTime,
      endTime: response.endTime,
    };
  }

  /**
   * Find a StaffAvailability by id
   *
   * @param {string} id The id of the StaffAvailability to find
   *
   * @returns {Promise<BaseStaffAvailabilityDto>} The found StaffAvailability
   */
  async findUnique(id: string): Promise<BaseStaffAvailabilityDto> {
    const data = await this.prisma.staffAvailability.findUnique({
      where: { id: id },
    });
    return data!;
  }

  /**
   * Find all StaffAvailabilities associated with a given staffId
   *
   * @param {string} staffId The id of the staff member
   *
   * @returns {Promise<BaseStaffAvailabilityDto[]>} The found StaffAvailabilities
   */
  async findByStaffId(staffId: string): Promise<BaseStaffAvailabilityDto[]> {
    return await this.prisma.staffAvailability.findMany({
      where: { staffId: staffId },
    });
  }

  /**
   * Find all StaffAvailabilities
   *
   * @returns {Promise<BaseStaffAvailabilityDto[]>} The found StaffAvailabilities
   */
  async findMany(): Promise<BaseStaffAvailabilityDto[]> {
    return await this.prisma.staffAvailability.findMany();
  }

  /**
   * Checks if a staff member is available on a given day and time
   *
   * @param {string} staffId The id of the staff member
   * @param {number} dayOfWeek The day of the week (0 = Sunday, 6 = Saturday)
   * @param {string} startTime The start time of the availability check
   * @param {string} endTime The end time of the availability check
   *
   * @returns {Promise<boolean>} True if the staff member is available, false otherwise
   */
  async isStaffAvailable(
    staffId: string,
    dayOfWeek: number,
    startTime: string,
    endTime: string,
  ): Promise<boolean> {
    const availabilityStaff = await this.prisma.staffAvailability.findFirst({
      where: {
        staffId: staffId,
        dayOfWeek: dayOfWeek,
        startTime: {
          lte: startTime,
        },
        endTime: {
          gte: endTime,
        },
      },
    });

    return !!availabilityStaff;
  }

  /**
   * Updates a StaffAvailability in the database.
   *
   * @param {string} id - The id of the StaffAvailability to update.
   * @param {UpdateStaffAvailabilityDto} staffAvailability - The data to update the StaffAvailability with.
   *
   * @returns {Promise<void>} - A promise that resolves when the StaffAvailability has been updated.
   */
  async update(
    id: string,
    staffAvailability: UpdateStaffAvailabilityDto,
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
}
