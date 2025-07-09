import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'prisma/app/generated/prisma/client';
import { BaseRepository } from 'src/common/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserInput } from './input/update-user.input';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  /**
   * Creates a new user.
   *
   * @param {Prisma.UserCreateInput} data - The user data to create.
   *
   * @returns {Promise<User>} - A promise that resolves to the newly
   * created user's data.
   */
  async create(data: Prisma.UserCreateInput): Promise<User> {
    const response = await this.prisma.user.create({
      data: data,
    });

    return response;
  }

  /**
   * Retrieves a single User object based on unique criteria.
   *
   * @param {UserFindUniqueArgs} args - The unique criteria for finding the User.
   * @returns {Promise<User | null>} - A promise that resolves to the User object if found, or null otherwise.
   */
  async findUnique(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return await this.prisma.user.findUnique(args);
  }

  async findMany(args: Prisma.UserFindManyArgs): Promise<User[]> {
    return await this.prisma.user.findMany(args);
  }

  async findFirst(args: Prisma.UserFindFirstArgs): Promise<User | null> {
    return await this.prisma.user.findFirst(args);
  }

  /**
   * Checks if a User exists in the database.
   *
   * @param {string} id - The unique identifier of the User to check.
   *
   * @returns {Promise<boolean>} - A promise that resolves to `true` if the User exists, or `false` if not.
   */
  async exists(id: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });
    return !!user;
  }

  /**
   * Counts the number of Users that match the given criteria.
   *
   * @param {Prisma.UserWhereInput} where - The where clause to filter the users.
   *
   * @returns {Promise<number>} - A promise that resolves to the number of Users that match the given criteria.
   */
  async count(where: Prisma.UserWhereInput = {}): Promise<number> {
    return await this.prisma.user.count({
      where: {
        ...where,
        deletedAt: null,
      },
    });
  }

  /**
   * Restores a deleted User in the database.
   *
   * @param {string} id - The unique identifier of the User to restore.
   *
   * @returns {Promise<User>} - A promise that resolves to the restored User object.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the User with the given id does not exist in the database.
   */
  async restore(id: string): Promise<User> {
    const data = await this.prisma.user.update({
      where: { id: id },
      data: { deletedAt: null },
    });
    return data;
  }

  /**
   * Updates a User in the database.
   *
   * @param {string} id - The id of the User to update.
   * @param {UpdateUserDto} user - The User data to update. If `undefined`, the User won't be updated.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the User with the given id does not exist in the database.
   */
  async update(id: string, user: UpdateUserInput): Promise<void> {
    await this.prisma.user.update({
      where: { id: id },
      data: user && {
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Updates the password of an existing User in the database.
   *
   * @param {string} id - The unique identifier of the User to update.
   * @param {string} password - The new password for the User.
   *
   * @returns {Promise<void>} - A promise that resolves when the User's password has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the User with the given id does not exist in the database.
   */
  async updatePassword(id: string, password: string): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: { password: password },
    });
  }

  /**
   * Verifies a User in the database.
   *
   * @param {string} id - The unique identifier of the User to verify.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been verified.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the User with the given id does not exist in the database.
   */
  async verifyUser(id: string): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { verifiedAt: new Date() },
    });
    return user;
  }

  /**
   * Hard deletes a User from the database.
   *
   * @param {string} id - The unique identifier of the User to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the User with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id: id },
    });
  }

  /**
   * Soft deletes a User from the database.
   *
   * @param {string} id - The unique identifier of the User to soft delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been soft deleted.
   */
  async deactivate(id: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: id },
      data: { isActive: false, deletedAt: new Date(), updatedAt: new Date() },
    });
  }

  /**
   * Activates a User in the database.
   *
   * @param {string} id - The unique identifier of the User to activate.
   *
   * @returns {Promise<void>} - A promise that resolves when the User has been activated.
   */
  async activate(id: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: id },
      data: { isActive: true, deletedAt: null, updatedAt: new Date() },
    });
  }

  /**
   * Updates the password reset token of an existing User in the database.
   *
   * @param {string} id - The unique identifier of the User to update.
   * @param {string} tokenHash - The hash of the password reset token.
   * @param {Date} expiresAt - The date and time when the password reset token expires.
   *
   * @returns {Promise<void>} - A promise that resolves when the User's password reset token has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the User with the given id does not exist in the database.
   */
  async updatePasswordResetToken(
    id: string,
    tokenHash: string,
    expiresAt: Date,
  ): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: {
        passwordResetToken: tokenHash,
        passwordResetTokenExpiresAt: expiresAt,
      },
    });
  }
}
