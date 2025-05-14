import { Injectable } from '@nestjs/common';
import { User } from 'prisma/app/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseUserDto } from './dto/base-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new User in the database.
   * @param data The User data to be inserted.
   * @returns The newly created User.
   * @throws If the User already exists.
   */
  async create(data: BaseUserDto): Promise<User> {
    const response = await this.prisma.user.create({ data });
    return response;
  }

  /**
   * Retrieves a single User object by its unique id.
   *
   * @param {string} id - The id of the User to retrieve.
   *
   * @returns {Promise<User>} - A promise that resolves to the User object with the given id.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the User with the given id does not exist in the database.
   */
  async findUnique(id: string): Promise<User> {
    const data = await this.prisma.user.findUnique({
      where: { id: id },
    });
    return data!;
  }

  /**
   * Retrieves a single User object by its unique email.
   *
   * @param {string} email - The email of the User to retrieve.
   *
   * @returns {Promise<User>} - A promise that resolves to the User object with the given email.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the User with the given email does not exist in the database.
   */
  async findUniqueByEmail(email: string): Promise<User> {
    const data = await this.prisma.user.findUnique({
      where: { email: email },
    });
    return data!;
  }

  /**
   * Retrieves all User objects in the database.
   *
   * @returns {Promise<User[]>} - A promise that resolves to an array of User objects.
   */
  async findMany(): Promise<User[]> {
    return await this.prisma.user.findMany();
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
  async update(id: string, user: UpdateUserDto): Promise<void> {
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
   * Deletes a User from the database.
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
}
