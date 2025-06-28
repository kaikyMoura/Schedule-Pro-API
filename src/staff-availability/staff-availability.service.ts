import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Role } from 'prisma/app/generated/prisma/client';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { UserService } from 'src/user/user.service';
import { BaseStaffAvailabilityDto } from './dtos/base-staff-availability.dto';
import { CreateStaffAvailabilityDto } from './dtos/create-staff-availability.dto';
import { UpdateStaffAvailabilityDto } from './dtos/update-staff-availability.dto';
import { StaffAvailabilityRepository } from './staff-availability.repository';
import { ApiResponse } from 'src/common/types/api-resonse';

@Injectable()
export class StaffAvailabilityService {
  constructor(
    private readonly staffAvailabilityRepository: StaffAvailabilityRepository,
    private readonly userService: UserService,
  ) {}
  private saltRounds = 10;

  /**
   * Retrieves all StaffAvailability objects.
   *
   * @returns {Promise<BaseStaffAvailabilityDto[]>} - A promise that resolves to an array of
   * StaffAvailability objects.
   */
  async retrieveAll(): Promise<BaseStaffAvailabilityDto[]> {
    const availabilities = await this.staffAvailabilityRepository.findMany();

    return availabilities.map((staffAvailability) => ({
      id: staffAvailability.id,
      staffId: staffAvailability.staffId,
      dayOfWeek: staffAvailability.dayOfWeek,
      startTime: staffAvailability.startTime,
      endTime: staffAvailability.endTime,
    }));
  }

  /**
   * Retrieves all StaffAvailability objects associated with a specific staff member.
   *
   * @param {string} staffId - The unique identifier of the staff member whose
   * StaffAvailability objects are to be retrieved.
   *
   * @returns {Promise<BaseStaffAvailabilityDto[]>} - A promise that resolves to an array of
   * BaseStaffAvailabilityDto objects containing details of the staff member's availability.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the staffId is not provided.
   * @throws {UserNotFoundException} - Thrown if the user with the given staffId does not exist.
   * @throws {BadRequestException} - Thrown if the user is not a staff member.
   */
  async retrieveByStaffId(
    staffId: string,
  ): Promise<BaseStaffAvailabilityDto[]> {
    if (!staffId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedUser = await this.userService.retrieveById(staffId);

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    if (retrivedUser.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff member');
    }

    const staffAvailabilites =
      await this.staffAvailabilityRepository.findByStaffId(staffId);

    return staffAvailabilites.map((staffAvailability) => ({
      id: staffAvailability.id,
      staffId: staffAvailability.staffId,
      dayOfWeek: staffAvailability.dayOfWeek,
      startTime: staffAvailability.startTime,
      endTime: staffAvailability.endTime,
    }));
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
  async create(staffAvailability: CreateStaffAvailabilityDto): Promise<
    ApiResponse<{
      dayOfWeek: number;
      startTime: string;
      endTime: string;
      staffAssociated: string;
    }>
  > {
    if (
      !staffAvailability.dayOfWeek ||
      !staffAvailability.startTime ||
      !staffAvailability.endTime ||
      !staffAvailability.staffId
    ) {
      throw new MissingRequiredPropertiesException();
    }

    const staff = await this.userService.retrieveById(
      staffAvailability.staffId,
    );

    if (!staff) {
      throw new UserNotFoundException('User not found');
    }

    if (staff.role !== Role.STAFF) {
      throw new BadRequestException('User is not a staff');
    }

    if (
      await this.staffAvailabilityRepository.isStaffAvailable(
        staffAvailability.staffId,
        staffAvailability.dayOfWeek,
        staffAvailability.startTime,
        staffAvailability.endTime,
      )
    ) {
      throw new ConflictException(
        'Staff member is already available on the given day and time',
      );
    }

    await this.staffAvailabilityRepository.create({
      staffId: staffAvailability.staffId,
      dayOfWeek: staffAvailability.dayOfWeek,
      startTime: staffAvailability.startTime,
      endTime: staffAvailability.endTime,
    });

    return {
      message: 'Availability created successfully',
      data: {
        dayOfWeek: staffAvailability.dayOfWeek,
        startTime: staffAvailability.startTime,
        endTime: staffAvailability.endTime,
        staffAssociated: staff.name,
      },
    };
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
    if (!(await this.staffAvailabilityRepository.findUnique(id))) {
      throw new NotFoundException('Availability not found');
    }

    await this.staffAvailabilityRepository.delete(id);
  }

  /**
   * Updates a StaffAvailability in the database.
   *
   * @param {string} id - The unique identifier of the StaffAvailability to update.
   * @param {UpdateStaffAvailabilityDto} staffAvailability - The data to update the StaffAvailability with.
   *
   * @returns {Promise<void>} - A promise that resolves when the StaffAvailability has been updated.
   *
   * @throws {NotFoundException} - Thrown if the StaffAvailability with the given id does not exist in the database.
   */
  async update(
    id: string,
    staffAvailability: UpdateStaffAvailabilityDto,
  ): Promise<void> {
    if (!(await this.staffAvailabilityRepository.findUnique(id))) {
      throw new NotFoundException('Availability not found');
    }

    await this.staffAvailabilityRepository.update(id, staffAvailability);
  }
}
