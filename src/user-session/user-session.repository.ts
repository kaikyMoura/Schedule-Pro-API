import { Injectable } from '@nestjs/common';
import { UserSession } from 'prisma/app/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserSessionDto } from './dtos/create-user-session.dto';

@Injectable()
export class UserSessionRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new UserSession object in the database.
   *
   * @param {CreateUserSessionDto} data The data to use for creating the new UserSession.
   *
   * @returns {Promise<UserSession>} The newly created UserSession object.
   *
   */
  async create(data: CreateUserSessionDto): Promise<UserSession> {
    const session = await this.prisma.userSession.create({
      data: {
        userId: data.userId,
        refreshToken: data.refreshToken,
        userAgent: data.userAgent ?? null,
        ipAddress: data.ipAddress ?? null,
        expiresAt: data.expiresAt!,
      },
    });

    return session;
  }

  /**
   * Retrieves a single UserSession object by its unique id.
   *
   * @param {string} id - The id of the UserSession to retrieve.
   *
   * @returns {Promise<UserSession>} - A promise that resolves to the UserSession object with the given id.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the UserSession with the given id does not exist in the database.
   */
  async findUnique(id: string): Promise<UserSession> {
    const data = await this.prisma.userSession.findUnique({
      where: { id: id },
    });
    return data!;
  }

  /**
   * Retrieves a UserSession object by its unique refreshToken.
   *
   * @param {string} refreshToken - The refreshToken of the UserSession to retrieve.
   *
   * @returns {Promise<UserSession | null>} - A promise that resolves to the UserSession object with the given refreshToken, or null if no such UserSession exists in the database.
   */
  async findByRefreshToken(refreshToken: string): Promise<UserSession | null> {
    const data = await this.prisma.userSession.findFirst({
      where: { refreshToken: refreshToken },
    });
    return data;
  }

  /**
   * Retrieves an array of UserSession objects that belong to a specific User.
   *
   * @param {string} userId - The id of the User whose UserSessions are to be retrieved.
   *
   * @returns {Promise<UserSession[]>} - A promise that resolves to an array of UserSession objects.
   */
  async findByUserId(userId: string): Promise<UserSession[]> {
    const data = await this.prisma.userSession.findMany({
      where: { userId: userId },
    });
    return data;
  }

  /**
   * Updates the refreshToken of a UserSession in the database.
   *
   * @param {string} id - The unique identifier of the UserSession to update.
   * @param {string} newToken - The new refreshToken value.
   * @param {Date} expiresAt - The new expiresAt value.
   *
   * @returns {Promise<void>} - A promise that resolves when the UserSession's refreshToken has been updated.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the UserSession with the given id does not exist in the database.
   */
  async updateRefreshToken(
    id: string,
    newToken: string,
    expiresAt: Date,
  ): Promise<void> {
    await this.prisma.userSession.update({
      where: { id: id },
      data: {
        refreshToken: newToken,
        expiresAt,
        createdAt: new Date(),
      },
    });
  }

  /**
   * Deletes a UserSession from the database using its refreshToken.
   *
   * @param {string} refreshToken - The refreshToken of the UserSession to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the UserSession has been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the UserSession with the given refreshToken does not exist in the database.
   */
  async deleteByRefreshToken(refreshToken: string): Promise<void> {
    const session = await this.findByRefreshToken(refreshToken);

    await this.prisma.userSession.delete({
      where: { id: session?.id },
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
}
