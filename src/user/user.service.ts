import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { User } from 'prisma/app/generated/prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { ChangePasswordDto } from 'src/common/dtos/change-password-user.schema';
import { InvalidCredentialsException } from 'src/common/exceptions/invalid-credentials.exception';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserAlreadyRegisteredException } from 'src/common/exceptions/user-already-registered.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { ResponseModel } from 'src/common/models/response.model';
import { EmailService } from 'src/common/services/email.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
    private readonly emailService: EmailService,
  ) {}
  private saltRounds = 10;

  /**
   * Retrieves a list of all User objects in the database.
   *
   * @returns {Promise<ResponseModel<Omit<User, 'password' | 'createdAt' | 'updatedAt'>[], Error>>} - A promise that resolves to a ResponseModel
   * with the list of User objects, or an error if the operation fails.
   *
   * @example
   * const users = await userService.retrieveAll()
   */
  async retrieveAll(): Promise<
    ResponseModel<Omit<User, 'password' | 'createdAt' | 'updatedAt'>[], Error>
  > {
    const retrivedUsers = await this.userRepository.findMany();

    return {
      data: retrivedUsers.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        photo: user.photo,
        role: user.role,
      })),
    };
  }

  /**
   * Retrieves a single User object by its unique email.
   *
   * @param {string} email - The email of the User to retrieve.
   *
   * @returns {Promise<ResponseModel<Omit<User, 'password' | 'createdAt' | 'updatedAt'>, Error>>} - A promise that resolves to a ResponseModel
   * with the User object with the given email, or an error if the operation fails.
   *
   * @example
   * const user = await userService.retrieveByEmail('john.doe@example.com')
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given email does not exist in the database.
   */
  async retrieveByEmail(
    email: string,
  ): Promise<
    ResponseModel<Omit<User, 'password' | 'createdAt' | 'updatedAt'>, Error>
  > {
    if (!email) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedUser = await this.userRepository.findUniqueByEmail(email);

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    return {
      data: {
        id: retrivedUser.id,
        name: retrivedUser.name,
        email: retrivedUser.email,
        phone: retrivedUser.phone,
        photo: retrivedUser.photo,
        role: retrivedUser.role,
      },
    };
  }

  /**
   * Retrieves a single User object by its unique id.
   *
   * @param {string} userId - The id of the User to retrieve.
   *
   * @returns {Promise<ResponseModel<Omit<User, 'password' | 'createdAt' | 'updatedAt'>, Error>>} - A promise that resolves to a ResponseModel
   * with the User object with the given id, or an error if the operation fails.
   *
   * @example
   * const user = await userService.retrieveById('1')
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the userId is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given id does not exist in the database.
   */
  async retrieveById(
    userId: string,
  ): Promise<
    ResponseModel<Omit<User, 'password' | 'createdAt' | 'updatedAt'>, Error>
  > {
    if (!userId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedUser = await this.userRepository.findUnique(userId);

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    return {
      data: {
        id: retrivedUser.id,
        name: retrivedUser.name,
        email: retrivedUser.email,
        phone: retrivedUser.phone,
        photo: retrivedUser.photo,
        role: retrivedUser.role,
      },
    };
  }

  /**
   * Generates a JWT token for the given User credentials.
   *
   * @param {LoginUserDto} user - The User credentials to generate a token for.
   *
   * @returns {Promise<ResponseModel<{token: string; expiresIn: string}, Error>>} - A promise that resolves to a ResponseModel
   * with the generated JWT token and its expiry time, or an error if the operation fails.
   *
   * @example
   * const { token, expiresIn } = await userService.generateTokenByCrendentials({
   *   email: 'jane.doe@example.com',
   *   password: 'securePassword123',
   * })
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the User credentials are missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given email does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the User credentials are invalid.
   */
  async generateTokenByCrendentials(
    user: LoginUserDto,
  ): Promise<ResponseModel<{ token: string; expiresIn: string }, Error>> {
    if (!user || !user.email || !user.password) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedUser = await this.userRepository.findUniqueByEmail(
      user.email,
    );

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) ||
      retrivedUser.email != user.email ||
      !(await compare(user.password, retrivedUser.password))
    ) {
      throw new InvalidCredentialsException();
    }

    const data = this.authService.generateToken(retrivedUser);

    return {
      data: {
        token: data.token,
        expiresIn: data.expiresIn,
      },
    };
  }

  /**
   * Creates a new User in the database.
   *
   * @param {CreateUserDto} user - The User data to create.
   *
   * @returns {Promise<ResponseModel<Omit<User, 'id' | 'password' | 'createdAt' | 'updatedAt'>, Error>>} - A promise that resolves to a ResponseModel
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
   * @throws {UserAlreadyRegisteredException} - Thrown if the User with the given email already exists in the database.
   */
  async create(
    user: CreateUserDto,
  ): Promise<
    ResponseModel<
      Omit<User, 'id' | 'password' | 'createdAt' | 'updatedAt'>,
      Error
    >
  > {
    if (!user.name || !user.email) {
      throw new MissingRequiredPropertiesException();
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      throw new InvalidCredentialsException();
    }

    if (await this.userRepository.findUniqueByEmail(user.email)) {
      throw new UserAlreadyRegisteredException();
    }

    await this.userRepository.create({
      id: uuidv4(),
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
   * Resets the password of a User in the database using a valid token.
   *
   * @param {string} token - The token to verify the User.
   * @param {ChangePasswordDto} resetPasswordDto - The new password for the User.
   *
   * @returns {Promise<void>} - A promise that resolves when the User's password has been updated.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the token or the new password is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given token does not exist in the database.
   */
  async resetPassword(
    token: string,
    resetPasswordDto: ChangePasswordDto,
  ): Promise<void> {
    if (!token || !resetPasswordDto.newPassword) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer = await this.authService.verifyToken<User>(token);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('User not found');
    }

    const hashedNewPassword = await hash(resetPasswordDto.newPassword, 10);

    await this.userRepository.updatePassword(
      retrievedCustomer.id,
      hashedNewPassword,
    );
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

  /**
   * Sends a password reset email to the given email address if a User with that address exists.
   *
   * @param {string} email - The email address of the User to send the password reset email to.
   *
   * @returns {Promise<void>} - A promise that resolves when the password reset email has been sent.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email address is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the User with the given email address does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the given email address is invalid.
   */
  async forgotPassword(email: string): Promise<void> {
    if (!email) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer =
      await this.userRepository.findUniqueByEmail(email);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('User not found');
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      retrievedCustomer.email != email
    ) {
      throw new InvalidCredentialsException();
    }

    const { token } = this.authService.generateToken({
      id: retrievedCustomer.id,
      name: retrievedCustomer.name,
      email: retrievedCustomer.email,
    });

    await this.emailService.sendResetPasswordEmail(
      retrievedCustomer.email,
      retrievedCustomer.name,
      token,
    );
  }
}
