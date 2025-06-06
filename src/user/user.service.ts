import { ConflictException, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { Role } from 'prisma/app/generated/prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { ChangePasswordDto } from 'src/common/dtos/change-password-user.schema';
import { InvalidCredentialsException } from 'src/common/exceptions/invalid-credentials.exception';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserAlreadyRegisteredException } from 'src/common/exceptions/user-already-registered.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { ResponseModel } from 'src/common/models/response.model';
import { BaseUserDto } from './dtos/base-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {}
  private saltRounds = 10;

  /**
   * Retrieves all User objects from the database.
   *
   * @returns {Promise<Omit<BaseUserDto, 'password'>[]>} - A promise that resolves to an array of User objects
   * excluding the password field.
   *
   * @example
   * const users = await userService.retrieveAll();
   */
  async retrieveAll(): Promise<
    Omit<BaseUserDto, 'password' | 'availability'>[]
  > {
    const retrivedUsers = await this.userRepository.findMany();

    return retrivedUsers.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      photo: user.photo!,
      role: user.role,
    }));
  }

  /**
   * Retrieves all User objects from the database with a specific role.
   *
   * @param {Role} role - The role of the Users to retrieve.
   *
   * @returns {Promise<Omit<BaseUserDto, 'password'>[]>} - A promise that resolves to an array of User objects
   * excluding the password field and filtered by the given role.
   *
   * @example
   * const staffUsers = await userService.retrieveAllByRole(Role.STAFF);
   */
  async retrieveAllByRole(
    role: Role,
  ): Promise<Omit<BaseUserDto, 'password'>[]> {
    const retrivedUsers = await this.userRepository.findManyByRole(role);

    return retrivedUsers.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      photo: user.photo!,
      role: user.role,
      availability: user.availability,
    }));
  }

  /**
   * Retrieves the first User object by its unique id and appointment date and time.
   *
   * @param {string} id - The id of the User to retrieve.
   * @param {string} date - The date of the appointment.
   * @param {string} time - The time of the appointment.
   *
   * @returns {Promise<Omit<BaseUserDto, 'password'>>} - A promise that resolves to the User object
   * with the given id, date, and time, or throws an error if the User is not found.
   *
   * @throws {UserNotFoundException} - Thrown if no User with the given criteria is found in the database.
   */
  async retrieveFirstByIdAndDateAndTime(
    id: string,
    date: string,
    time: string,
  ): Promise<Omit<BaseUserDto, 'password'>> {
    const retrievedUser = await this.userRepository.findFirst(id, date, time);

    if (!retrievedUser) {
      throw new UserNotFoundException('User not found');
    }

    return {
      id: retrievedUser.id,
      name: retrievedUser.name,
      email: retrievedUser.email,
      phone: retrievedUser.phone,
      photo: retrievedUser.photo!,
      role: retrievedUser.role,
    };
  }

  /**
   * Retrieves a single User object by its unique email.
   *
   * @param {string} email - The email of the User to retrieve.
   *
   * @returns {Promise<Omit<BaseUserDto, 'password'>>} - A promise that resolves to the User object with the given email.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email is missing.
   * @throws {UserNotFoundException} - Thrown if no User with the given email is found in the database.
   *
   * @example
   * const user = await userService.retrieveByEmail('dYH2M@example.com');
   *
   */
  async retrieveByEmail(email: string): Promise<BaseUserDto> {
    if (!email) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedUser = await this.userRepository.findUniqueByEmail(email);

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    return {
      id: retrivedUser.id,
      name: retrivedUser.name,
      email: retrivedUser.email,
      password: retrivedUser.password,
      phone: retrivedUser.phone,
      photo: retrivedUser.photo!,
      role: retrivedUser.role,
    };
  }

  /**
   * Retrieves a single User object by its unique id.
   *
   * @param {string} userId - The id of the User to retrieve.
   *
   * @returns {Promise<Omit<BaseUserDto, 'password'>>} - A promise that resolves to the User object with the given email.
   *
   * @example
   * const user = await userService.retrieveById('1')
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the userId is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given id does not exist in the database.
   */
  async retrieveById(userId: string): Promise<Omit<BaseUserDto, 'password'>> {
    if (!userId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedUser = await this.userRepository.findUnique(userId);

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    return {
      id: retrivedUser.id,
      name: retrivedUser.name,
      email: retrivedUser.email,
      phone: retrivedUser.phone,
      photo: retrivedUser.photo!,
      role: retrivedUser.role,
    };
  }

  /**
   * Creates a new User in the database.
   *
   * @param {CreateUserDto} user - The User data to create.
   *
   * @returns {Promise<ResponseModel<Omit<BaseUserDto, 'id' | 'password'>, Error>>} - A promise that resolves to a ResponseModel
   * with the User data without the password, or an error if the operation fails.
   *
   * @example
   * const user = await userService.create({
   *   name: 'John Doe',
   *   email: 'john.doe@example.com',
   *   password: 'securePassword123',
   *   phone: '1234567890',
   *   photo: 'profile-picture.jpg',
   * })
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the User data is missing or undefined.
   * @throws {InvalidCredentialsException} - Thrown if the User email is invalid.
   * @throws {UserAlreadyRegisteredException} - Thrown if the User with the given email or phone already exists in the database.
   */
  async create(
    user: CreateUserDto,
  ): Promise<ResponseModel<Omit<BaseUserDto, 'id' | 'password'>, Error>> {
    if (!user.name || !user.email) {
      throw new MissingRequiredPropertiesException();
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      throw new InvalidCredentialsException();
    }

    if (await this.userRepository.findUniqueByEmail(user.email)) {
      throw new UserAlreadyRegisteredException();
    }

    if (await this.userRepository.findUniqueByPhone(user.phone)) {
      throw new ConflictException('Phone already registered! Try logging in.');
    }

    await this.userRepository.create({
      name: user.name,
      email: user.email,
      password: await hash(user.password, this.saltRounds),
      phone: user.phone,
      photo: user.photo,
      role: user.role,
    });

    return {
      message: 'User created successfully',
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        photo: user.photo ? user.photo : '',
        role: user.role,
      },
    };
  }

  /**
   * Deletes a User from the database.
   *
   * @param {string} id - The id of the User to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been deleted.
   *
   * @throws {UserNotFoundException} - Thrown if the User with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    if (!(await this.userRepository.findUnique(id))) {
      throw new UserNotFoundException('User not found');
    }

    await this.userRepository.delete(id);
  }

  /**
   * Updates a User in the database.
   *
   * @param {string} id - The id of the User to update.
   * @param {UpdateUserDto} user - The User data to update.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been updated.
   *
   * @throws {UserNotFoundException} - Thrown if the User with the given id does not exist in the database.
   */
  async update(id: string, user: UpdateUserDto): Promise<void> {
    if (!(await this.userRepository.findUnique(id))) {
      throw new UserNotFoundException('User not found');
    }

    await this.userRepository.update(id, user);
  }

  /**
   * Changes the password of a User in the database.
   *
   * @param {string} id - The unique identifier of the User whose password is to be changed.
   * @param {ChangePasswordDto} changePasswordDto - Data transfer object containing the current and new passwords of the User.
   *
   * @returns {Promise<void>} - A promise that resolves when the User's password has been successfully updated.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the id is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given id does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the provided current password does not match the stored password.
   */
  async changePassword(
    id: string,
    changePasswordDto: ChangePasswordDto,
  ): Promise<void> {
    if (!id) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer = await this.userRepository.findUnique(id);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('User not found');
    }

    if (
      !(await compare(
        changePasswordDto.currentPassword,
        retrievedCustomer.password,
      ))
    ) {
      throw new InvalidCredentialsException();
    }

    const hashedNewPassword = await hash(changePasswordDto.newPassword, 10);

    await this.userRepository.updatePassword(id, hashedNewPassword);
  }
}
