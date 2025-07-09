import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { compare } from 'bcrypt';
import { Prisma, Role, User } from 'prisma/app/generated/prisma/client';
import { InvalidCredentialsException } from 'src/common/exceptions/invalid-credentials.exception';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { HashingService } from 'src/hashing/hashing.service';
import { ChangePasswordInput } from './input/change-password.input';
import { CreateUserInput } from './input/create-user.input';
import { LoginUserInput } from './input/login-user.input';
import { UpdateUserInput } from './input/update-user.input';
import { UserConnection } from './type/user-connection.type';
import { UserType } from './type/user.type';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashingService: HashingService,
  ) {}

  /**
   * Converts a User to a UserType.
   *
   * @param {User} user - The User to convert.
   *
   * @returns {UserType} - The converted UserType.
   */
  toUserType(user: User): UserType {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      avatar: user.avatar!,
      dateOfBirth: user.dateOfBirth!,
      gender: user.gender ?? undefined,
      address: user.address ?? undefined,
      city: user.city ?? undefined,
      state: user.state ?? undefined,
      zipCode: user.zipCode ?? undefined,
      country: user.country ?? undefined,
    };
  }

  /**
   * Finds a User by their id and validates it.
   *
   * @param {string} id - The id of the User to find.
   *
   * @returns {Promise<User>} - A promise that resolves to the User.
   */
  private async findAndValidateUser(id: string): Promise<User> {
    const user = await this.userRepository.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  /**
   * Retrieves all Users by their role.
   *
   * @param {UserFilterInput} filter - The filter of the Users to retrieve.
   * @param {PaginationOptions<{
   *   firstName?: 'asc' | 'desc';
   *   lastName?: 'asc' | 'desc';
   *   email?: 'asc' | 'desc';
   *   phone?: 'asc' | 'desc';
   *   role?: 'asc' | 'desc';
   * }>} pagination - The pagination of the Users to retrieve.
   *
   * @returns {Promise<User[]>} - A promise that resolves to the User data.
   */
  async findMany(args: Prisma.UserFindManyArgs): Promise<UserConnection> {
    const users = await this.userRepository.findMany(args);

    return {
      nodes: users.map((user) => this.toUserType(user)),
      totalCount: users.length,
      hasNextPage: false,
      hasPreviousPage: false,
    };
  }

  /**
   * Retrieves all Users by their role.
   *
   * @param {Role} role - The role of the Users to retrieve.
   *
   * @returns {Promise<User[]>} - A promise that resolves to the User data.
   */
  async findManyByRole(role: Role): Promise<User[]> {
    const users = await this.userRepository.findMany({ where: { role } });
    return users;
  }

  /**
   * Retrieves a User by their id.
   *
   * @param {string} userId - The id of the User to retrieve.
   *
   * @returns {Promise<User>} - A promise that resolves to the User data.
   */
  async findById(userId: string): Promise<User> {
    return await this.findAndValidateUser(userId);
  }

  /**
   * Retrieves a User by their email.
   *
   * @param {string} email - The email of the User to retrieve.
   *
   * @returns {Promise<User | null>} - A promise that resolves to the User with the given email, or null if no User is found.
   */
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findUnique({ where: { email } });
    return user;
  }

  /**
   * Retrieves a User by their phone.
   *
   * @param {string} phone - The phone of the User to retrieve.
   *
   * @returns {Promise<User | null>} - A promise that resolves to the User with the given phone, or null if no User is found.
   */
  async findByPhone(phone: string): Promise<User | null> {
    return await this.userRepository.findUnique({ where: { phone } });
  }

  /**
   * Creates a new User in the database.
   *
   * @param {CreateUserInput} user - The User data to create.
   *
   * @returns {Promise<UserType>} - A promise that resolves to the created User data.
   */
  async create(user: CreateUserInput): Promise<User> {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.password ||
      !user.phone ||
      !user.email
    ) {
      throw new BadRequestException(
        `Fields firstName, lastName, password, phone and email are required.`,
      );
    }

    if (await this.findByEmail(user.email)) {
      throw new ConflictException('Email already registered! Try logging in.');
    }

    if (await this.findByPhone(user.phone)) {
      throw new ConflictException('Phone already registered! Try logging in.');
    }

    const newUser = await this.userRepository.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: await this.hashingService.hash(user.password),
      phone: user.phone,
      avatar: user.avatar,
    });

    return newUser;
  }

  /**
   * Deletes a User from the database.
   *
   * @param {string} id - The id of the User to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been deleted.
   *
   * @throws {NotFoundException} - Thrown if the User with the given id does not exist in the database.
   */
  async deactivate(id: string): Promise<void> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.deactivate(id);
  }

  /**
   * Activates a User in the database.
   *
   * @param {string} id - The id of the User to activate.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been activated.
   */
  async activate(id: string): Promise<void> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.activate(id);
  }

  /**
   * Hard deletes a User from the database.
   *
   * @param {string} id - The id of the User to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been deleted.
   */
  async delete(id: string): Promise<void> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
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
  async update(id: string, user: UpdateUserInput): Promise<void> {
    if (!(await this.findById(id))) {
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
    { currentPassword, newPassword }: ChangePasswordInput,
  ): Promise<void> {
    if (!userId) {
      throw new MissingRequiredPropertiesException('User ID is required');
    }

    const user = await this.findById(userId);

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

    const hashedPassword = await this.hashingService.hash(newPassword);

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
  async resetPassword(
    userId: string,
    { newPassword, confirmPassword }: ChangePasswordInput,
  ): Promise<string> {
    if (!userId || !newPassword || !confirmPassword) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedUser = await this.findById(userId);

    if (!retrievedUser) {
      throw new UserNotFoundException('User not found');
    }

    const hashedNewPassword = await this.hashingService.hash(newPassword);

    await this.userRepository.updatePassword(
      retrievedUser.id,
      hashedNewPassword,
    );

    return 'Password reset successfully';
  }

  /**
   * Validates the given User credentials.
   *
   * @param {LoginUserInput} user - The User data to validate.
   *
   * @returns {Promise<UserType>} - A promise that resolves to the User data without the password if the credentials are valid, or throws an error if they are not.
   */
  async _validateCredentials(user: LoginUserInput): Promise<UserType> {
    const { email, password } = user;

    const retrivedUser = await this.findByEmail(email);

    if (!retrivedUser) {
      throw new UserNotFoundException('User not found');
    }

    if (!(await this.hashingService.compare(password, retrivedUser.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      firstName: retrivedUser.firstName,
      lastName: retrivedUser.lastName,
      email: retrivedUser.email,
      phone: retrivedUser.phone,
      avatar: retrivedUser.avatar!,
    };
  }

  /**
   * Sets the password reset token for a User in the database.
   *
   * @param {string} id - The id of the User whose password reset token is to be set.
   * @param {string} tokenHash - The hash of the password reset token.
   * @param {Date} expiresAt - The expiration date of the password reset token.
   */
  async setPasswordResetToken(
    id: string,
    tokenHash: string,
    expiresAt: Date,
  ): Promise<void> {
    await this.userRepository.updatePasswordResetToken(
      id,
      tokenHash,
      expiresAt,
    );
  }

  /**
   * Finds a User by their password reset token.
   *
   * @param {string} tokenHash - The hash of the password reset token.
   * @returns {Promise<User | null>} - A promise that resolves to the User with the given password reset token, or null if no User is found.
   */
  async findByPasswordResetToken(tokenHash: string): Promise<User | null> {
    return await this.userRepository.findFirst({
      where: { passwordResetToken: tokenHash },
    });
  }

  /**
   * Finds a User by their verification token.
   *
   * @param {string} tokenHash - The hash of the verification token.
   *
   * @returns {Promise<User | null>} - A promise that resolves to the User with the given verification token, or null if no User is found.
   */
  async findByVerificationToken(tokenHash: string): Promise<User | null> {
    return await this.userRepository.findFirst({
      where: { verificationToken: tokenHash },
    });
  }
}
