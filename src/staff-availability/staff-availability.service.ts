import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  Prisma,
  Role,
  StaffAvailability,
} from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { UserService } from 'src/user/user.service';
import { StaffAvailabilityRepository } from './staff-availability.repository';

@Injectable()
export class StaffAvailabilityService {
  constructor(
    private readonly staffAvailabilityRepository: StaffAvailabilityRepository,
    private readonly userService: UserService,
  ) {}

  /**
   * Retrieves all StaffAvailability objects.
   *
   * @returns {Promise<StaffAvailability[]>} - A promise that resolves to an array of
   * StaffAvailability objects.
   */
  async findMany(
    args: Prisma.StaffAvailabilityFindManyArgs,
  ): Promise<StaffAvailability[]> {
    return await this.staffAvailabilityRepository.findMany(args);
  }

  /**
   * Retrieves a StaffAvailability object by its unique identifier.
   *
   * @param {Prisma.StaffAvailabilityFindUniqueArgs} args - The arguments to find a StaffAvailability by.
   *
   * @returns {Promise<StaffAvailability | null>} - A promise that resolves to the StaffAvailability object if found, or null if not found.
   */
  async findById(id: string): Promise<StaffAvailability | null> {
    return await this.staffAvailabilityRepository.findUnique({
      where: { id: id },
    });
  }

  /**
   * Retrieves all StaffAvailability objects associated with a specific staff member.
   *
   * @param {string} staffId - The unique identifier of the staff member whose
   * StaffAvailability objects are to be retrieved.
   *
   * @returns {Promise<StaffAvailability[]>} - A promise that resolves to an array of
   * StaffAvailability objects containing details of the staff member's availability.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the staffId is not provided.
   * @throws {UserNotFoundException} - Thrown if the user with the given staffId does not exist.
   * @throws {BadRequestException} - Thrown if the user is not a staff member.
   */
  async findByStaffId(staffId: string): Promise<StaffAvailability[]> {
    if (!staffId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedUser = await this.userService.findById(staffId);

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    if (retrivedUser.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    const staffAvailabilites = await this.findMany({
      where: { staffId: staffId },
    });

    return staffAvailabilites;
  }

  /**
   * Creates a new StaffAvailability.
   *
   * @param {CreateStaffAvailabilityDto} staffAvailability - The data to create a new
   * StaffAvailability.
   *
   * @returns {Promise<ResponseModel<{dayOfWeek: number, startTime: string, endTime: string, staffAssociated: string}, Error>>} - A promise that resolves to a
   * ResponseModel object containing a success message and the created StaffAvailability's details,
   * or an error message if the staff member is already available on the given day and time.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if any of the required properties are
   * not provided.
   * @throws {UserNotFoundException} - Thrown if the user with the given staffId does not exist.
   * @throws {BadRequestException} - Thrown if the user is not a staff member.
   * @throws {HttpException} - Thrown if the staff member is already available on the given day and
   * time.
   */
  async create(
    staffAvailability: Prisma.StaffAvailabilityCreateInput,
  ): Promise<StaffAvailability> {
    if (
      !staffAvailability.dayOfWeek ||
      !staffAvailability.startTime ||
      !staffAvailability.endTime ||
      !staffAvailability.staff
    ) {
      throw new MissingRequiredPropertiesException();
    }

    const staff = await this.userService.findById(
      staffAvailability.staff.connect!.id!,
    );

    if (!staff) {
      throw new UserNotFoundException('User not found');
    }

    if (staff.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff');
    }

    if (
      await this.staffAvailabilityRepository.findFirst({
        where: {
          staffId: staffAvailability.staff.connect!.id!,
          dayOfWeek: staffAvailability.dayOfWeek,
          startTime: staffAvailability.startTime,
          endTime: staffAvailability.endTime,
        },
      })
    ) {
      throw new ConflictException(
        'Staff member is already available on the given day and time',
      );
    }

    const createdStaffAvailability =
      await this.staffAvailabilityRepository.create(staffAvailability);

    return createdStaffAvailability;
  }

  /**
   * Deletes a StaffAvailability from the database.
   *
   * @param {string} id - The unique identifier of the StaffAvailability to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the StaffAvailability has been deleted.
   *
   * @throws {NotFoundException} - Thrown if the StaffAvailability with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    if (!(await this.findById(id))) {
      throw new NotFoundException('Availability not found');
    }

    await this.staffAvailabilityRepository.delete(id);
  }

  /**
   * Updates a StaffAvailability in the database.
   *
   * @param {string} id - The unique identifier of the StaffAvailability to update.
   * @param {Prisma.StaffAvailabilityUpdateInput} staffAvailability - The data to update the StaffAvailability with.
   *
   * @returns {Promise<void>} - A promise that resolves when the StaffAvailability has been updated.
   *
   * @throws {NotFoundException} - Thrown if the StaffAvailability with the given id does not exist in the database.
   */
  async update(
    id: string,
    staffAvailability: Prisma.StaffAvailabilityUpdateInput,
  ): Promise<void> {
    if (!(await this.findById(id))) {
      throw new NotFoundException('Availability not found');
    }

    await this.staffAvailabilityRepository.update(id, staffAvailability);
  }
}
