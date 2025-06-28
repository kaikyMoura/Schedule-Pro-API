import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import bcrypt, { compare, hash } from 'bcryptjs';
import { Role } from 'prisma/app/generated/prisma/client';
import { InvalidCredentialsException } from 'src/common/exceptions/invalid-credentials.exception';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { ChangePasswordDto } from 'src/user/dtos/change-password-user.schema';
import { BaseUserDto } from './dtos/base-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserRepository } from './user.repository';
import { ApiResponse } from 'src/common/types/api-resonse';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
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
  async retrieveByEmail(email: string): Promise<Omit<BaseUserDto, 'password'>> {
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
   * @param {CreateUserDto} user - The User data to create, which may include optional availability.
   *
   * @returns {Promise<ApiResponse<Omit<BaseUserDto, 'id' | 'password' | 'role'>>>>} - A promise that resolves to an ApiResponse object containing the newly created User's base data.
   *
   * @throws {BadRequestException} - Thrown if the User data is missing required fields.
   * @throws {ConflictException} - Thrown if the email or phone is already registered.
   *
   * @example
   * const user = await userService.create({
   *   name: 'John Doe',
   *   email: 'john@example.com',
   *   password: 'mySecretPassword',
   *   phone: '123-456-7890',
   *   photo: 'https://example.com/john.jpg',
   * });
   */
  async create(
    user: CreateUserDto,
  ): Promise<ApiResponse<Omit<BaseUserDto, 'id' | 'password' | 'role'>>> {
    if (!user.name || !user.email) {
      throw new BadRequestException('Name and email are required');
    }

    if (await this.userRepository.findUniqueByEmail(user.email)) {
      throw new ConflictException('Email already registered! Try logging in.');
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
    });

    return {
      message: 'User created successfully',
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        photo: user.photo ? user.photo : '',
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
   * @param {string} userId - The id of the User whose password is to be changed.
   * @param {ChangePasswordDto} changePasswordDto - Data transfer object containing the current and new passwords.
   *
   * @returns {Promise<void>} - A promise that resolves when the password has been successfully changed.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the userId is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given id does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the current password does not match the User's password in the database.
   */
  async changePassword(
    userId: string,
    { currentPassword, newPassword }: ChangePasswordDto,
  ): Promise<void> {
    if (!userId) {
      throw new MissingRequiredPropertiesException('User ID is required');
    }

    const user = await this.userRepository.findUnique(userId);

    if (!user) {
      throw new UserNotFoundException('User not found');
    }

    const isCurrentPasswordValid = await compare(
      currentPassword,
      user.password,
    );

    if (!isCurrentPasswordValid) {
      throw new InvalidCredentialsException();
    }

    const hashedPassword = await hash(newPassword, 10);

    await this.userRepository.updatePassword(userId, hashedPassword);
  }

  /**
   * Resets the password of a User in the database.
   *
   * @param {string} token - The token to verify the User.
   * @param {ChangePasswordDto} resetPasswordDto - Data transfer object containing the new password of the User.
   *
   * @returns {Promise<string>} - A promise that resolves to a string 'Password reset successfully' if the operation is successful.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the token or new password is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given token does not exist in the database.
   */
  async resetPassword(userId: string, newPassword: string): Promise<string> {
    if (!userId || !newPassword) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedUser = await this.userRepository.findUnique(userId);

    if (!retrievedUser) {
      throw new UserNotFoundException('User not found');
    }

    const hashedNewPassword = await hash(newPassword, 10);

    await this.userRepository.updatePassword(
      retrievedUser.id,
      hashedNewPassword,
    );

    return 'Password reset successfully';
  }

  /**
   * Verifies a User in the database.
   *
   * @param {string} email - The email of the User to verify.
   *
   * @returns {Promise<string>} - A promise that resolves to a string 'User verified successfully' if the operation is successful.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given email does not exist in the database.
   */
  async verifyUser(email: string): Promise<string> {
    const user = await this.retrieveByEmail(email);

    if (!user.id) {
      throw new UserNotFoundException('User not found');
    }

    if (user.verifiedAt) {
      throw new BadRequestException('User already verified');
    }

    const retrievedUser = await this.userRepository.verifyUser(user.id);

    if (!retrievedUser) {
      throw new UserNotFoundException('User not found');
    }

    if (!retrievedUser.verifiedAt || retrievedUser.verifiedAt === null) {
      throw new NotFoundException('Error verifying user');
    }

    return 'User verified successfully';
  }

  /**
   * Validates the given User credentials.
   *
   * @param {LoginUserDto} user - The User data to validate.
   *
   * @returns {Promise<Omit<BaseUserDto, 'password'>>} - A promise that resolves to the User data without the password if the
   * credentials are valid, or throws an error if they are not.
   *
   * @throws {UserNotFoundException} - Thrown if no User with the given email is found in the database.
   * @throws {InvalidCredentialsException} - Thrown if the email is invalid.
   * @throws {UnauthorizedException} - Thrown if the given password does not match the User's password in the database.
   */
  async _validateCredentials(
    user: LoginUserDto,
  ): Promise<Omit<BaseUserDto, 'password'>> {
    const { email, password } = user;

    const retrivedUser = await this.userRepository.findUniqueByEmail(email);

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    if (!(await bcrypt.compare(password, retrivedUser.password))) {
      throw new UnauthorizedException('Invalid credentials');
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
}
