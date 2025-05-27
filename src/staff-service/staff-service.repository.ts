import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseStaffServiceDto } from './dtos/base-staff-service.dto';
import { CreateStaffServiceDto } from './dtos/create-staff-service.dto';
import { UpdateStaffServiceDto } from './dtos/update-staff-service.dto';

@Injectable()
export class StaffServiceRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new staff-service.
   * @param {CreateStaffServiceDto} data - Contains the staffId, serviceId, customPrice, and active status.
   * @returns {Promise<BaseStaffServiceDto>} - The created staff-service.
   */
  async create(data: CreateStaffServiceDto): Promise<BaseStaffServiceDto> {
    const response = await this.prisma.staffService.create({
      data: {
        staff: {
          connect: { id: data.staffId },
        },
        service: {
          connect: { id: data.serviceId },
        },
        customPrice: data.customPrice ?? null,
        active: data.active ?? true,
      },
    });

    return {
      id: response.id,
      staffId: response.staffId,
      serviceId: response.serviceId,
      customPrice: response.customPrice,
      active: response.active ?? true,
      createdAt: response.createdAt,
    };
  }

  /**
   * Find a staff-service object by its id.
   * @param {string} id - The id of the staff-service object to find.
   * @returns {Promise<BaseStaffServiceDto | null>} - A promise that resolves to a BaseStaffServiceDto object containing
   * details of the staff-service object, or null if no staff-service object matches the given id.
   */
  async findUnique(id: string): Promise<BaseStaffServiceDto | null> {
    const data = await this.prisma.staffService.findUnique({
      where: { id: id },
    });
    if (!data) {
      return null;
    }
    return data;
  }

  /**
   * Retrieves a staff-service object associated with a specific staff member.
   *
   * @param {string} staffId - The unique identifier of the staff member whose
   * staff-service object is to be retrieved.
   *
   * @returns {Promise<BaseStaffServiceDto | null>} - A promise that resolves to a
   * BaseStaffServiceDto object containing details of the staff member's service, or
   * null if the staff member is not a service provider.
   */
  async findUniqueByStaffId(
    staffId: string,
  ): Promise<BaseStaffServiceDto | null> {
    const data = await this.prisma.staffService.findFirst({
      where: { staffId: staffId },
    });
    if (!data) {
      return null;
    }
    return data;
  }

  /**
   * Retrieves a staff-service object associated with a specific service.
   *
   * @param {string} serviceId - The unique identifier of the service whose
   * staff-service object is to be retrieved.
   *
   * @returns {Promise<BaseStaffServiceDto | null>} - A promise that resolves to a
   * BaseStaffServiceDto object containing details of the service's staff member, or
   * null if the service does not have an associated staff member.
   */
  async findManyByServiceId(
    serviceId: string,
  ): Promise<BaseStaffServiceDto[] | null> {
    const data = await this.prisma.staffService.findMany({
      where: { serviceId: serviceId },
    });
    if (!data) {
      return null;
    }
    return data;
  }

  /**
   * Retrieves all staff-service objects from the database.
   *
   * @returns {Promise<BaseStaffServiceDto[]>} - A promise that resolves to an array of BaseStaffServiceDto objects,
   * each containing details of a staff member's service. If no staff-service objects exist, an empty array is returned.
   */
  async findMany(): Promise<BaseStaffServiceDto[]> {
    return await this.prisma.staffService.findMany();
  }

  /**
   * Updates a staff-service object in the database.
   *
   * @param {string} id - The unique identifier of the staff-service object to update.
   * @param {UpdateStaffServiceDto} updateStaffServiceDto - The data to update the staff-service object with.
   *
   * @returns {Promise<void>} - A promise that resolves when the staff-service object has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async update(
    id: string,
    updateStaffServiceDto: UpdateStaffServiceDto,
  ): Promise<void> {
    await this.prisma.staffService.update({
      where: { id: id },
      data: updateStaffServiceDto,
    });
  }

  /**
   * Updates the active status of a staff-service object in the database.
   *
   * Should be only available to admins
   *
   * @param {string} id - The unique identifier of the staff-service object to update.
   * @param {boolean} active - The active status to set the staff-service object to.
   *
   * @returns {Promise<void>} - A promise that resolves when the staff-service object has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async updateActive(id: string, active: boolean): Promise<boolean> {
    const updated = await this.prisma.staffService.update({
      where: { id: id },
      data: { active: active },
    });

    return updated.active;
  }

  /**
   * Updates the custom price of a staff-service object in the database.
   *
   * Should be only available to admins
   *
   * @param {string} id - The unique identifier of the staff-service object to update.
   * @param {number} customPrice - The custom price to set the staff-service object to.
   *
   * @returns {Promise<void>} - A promise that resolves when the staff-service object has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the staff-service object with the given id does not exist in the database.
   */
  async updateCustomPrice(id: string, customPrice: number): Promise<void> {
    await this.prisma.staffService.update({
      where: { id: id },
      data: { customPrice: customPrice },
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
}
