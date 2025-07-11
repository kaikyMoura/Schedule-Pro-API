import { Injectable } from '@nestjs/common';
import { Prisma, UserSession } from 'prisma/app/generated/prisma/client';
import { BaseRepository } from 'src/common/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserSessionRepository implements BaseRepository<UserSession> {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new UserSession.
   *
   * @param {Prisma.UserSessionCreateInput} data - The data of the UserSession to create.
   * @returns {Promise<UserSession>} - A promise that resolves to the created UserSession.
   */
  async create(data: Prisma.UserSessionCreateInput): Promise<UserSession> {
    return await this.prisma.userSession.create({
      data: {
        ...data,
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(),
        lastUsedAt: null,
      },
    });
  }

  /**
   * Retrieves a UserSession object by its unique id.
   *
   * @param {Prisma.UserSessionFindUniqueArgs} args - The arguments to find a UserSession by.
   * @returns {Promise<UserSession | null>} - A promise that resolves to the UserSession object if found, or null if not found.
   */
  async findUnique(
    args: Prisma.UserSessionFindUniqueArgs,
  ): Promise<UserSession | null> {
    return await this.prisma.userSession.findUnique(args);
  }

  async update(id: string, data: Prisma.UserSessionUpdateInput): Promise<void> {
    await this.prisma.userSession.update({
      where: { id },
      data,
    });
  }

  /**
   * Deletes a UserSession from the database.
   *
   * @param {string} id - The id of the UserSession to delete.
   * @returns {Promise<void>} - A promise that resolves when the UserSession has been deleted.
   */
  async delete(id: string): Promise<void> {
    await this.prisma.userSession.delete({
      where: { id },
    });
  }

  /**
   * Deletes all expired UserSessions from the database.
   *
   * @returns {Promise<number>} - A promise that resolves to the number of UserSessions that were deleted.
   */
  async deleteExpiredSessions(): Promise<number> {
    const now = new Date();

    const result = await this.prisma.userSession.deleteMany({
      where: {
        expiresAt: {
          lt: now,
        },
      },
    });

    return result.count;
  }

  /**
   * Retrieves the first UserSession that matches the given arguments.
   *
   * @param {Prisma.UserSessionFindFirstArgs} args - The arguments to find a UserSession by.
   * @returns {Promise<UserSession | null>} - A promise that resolves to the first UserSession object if found, or null if not found.
   */
  async findFirst(
    args: Prisma.UserSessionFindFirstArgs,
  ): Promise<UserSession | null> {
    return await this.prisma.userSession.findFirst(args);
  }

  /**
   * Retrieves multiple UserSessions from the database.
   *
   * @param {Prisma.UserSessionFindManyArgs} args - The arguments to find UserSessions by.
   * @returns {Promise<UserSession[]>} - A promise that resolves to an array of UserSession objects.
   */
  async findMany(args: Prisma.UserSessionFindManyArgs): Promise<UserSession[]> {
    return await this.prisma.userSession.findMany(args);
  }

  /**
   * Counts the number of UserSessions that match the given arguments.
   *
   * @param {Prisma.UserSessionCountArgs} args - The arguments to count UserSessions by.
   * @returns {Promise<number>} - A promise that resolves to the number of UserSessions that match the given arguments.
   */
  async count(args: Prisma.UserSessionCountArgs): Promise<number> {
    return await this.prisma.userSession.count(args);
  }

  /**
   * Deactivates a UserSession in the database.
   *
   * @param {string} id - The id of the UserSession to deactivate.
   * @returns {Promise<void>} - A promise that resolves when the UserSession has been deactivated.
   */
  async deactivate(id: string): Promise<void> {
    await this.prisma.userSession.update({
      where: { id },
      data: { isActive: false },
    });
  }

  /**
   * Restores a UserSession in the database.
   *
   * @param {string} id - The id of the UserSession to restore.
   * @returns {Promise<UserSession>} - A promise that resolves to the restored UserSession.
   */
  async restore(id: string): Promise<UserSession> {
    return await this.prisma.userSession.update({
      where: { id },
      data: {
        isActive: true,
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Checks if a UserSession exists in the database.
   *
   * @param {string} id - The id of the UserSession to check.
   * @returns {Promise<boolean>} - A promise that resolves to true if the UserSession exists, or false if not.
   */
  async exists(id: string): Promise<boolean> {
    return (
      (await this.prisma.userSession.findUnique({ where: { id } })) !== null
    );
  }

  /**
   * Deactivates all active UserSessions for a specific User.
   *
   * @param {string} userId - The id of the User whose UserSessions are to be deactivated.
   *
   * @returns {Promise<void>} - A promise that resolves when the UserSessions have been deactivated.
   */
  async deactivateAllForUser(userId: string): Promise<void> {
    await this.prisma.userSession.updateMany({
      where: {
        userId,
        isActive: true,
      },
      data: {
        isActive: false,
        updatedAt: new Date(),
      },
    });
  }
}
