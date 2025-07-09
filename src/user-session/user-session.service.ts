import { Injectable } from '@nestjs/common';
import { Prisma, UserSession } from 'prisma/app/generated/prisma/client';
import { UserSessionRepository } from './user-session.repository';

@Injectable()
export class UserSessionService {
  constructor(private readonly userSessionRepository: UserSessionRepository) {}

  /**
   * Creates a new UserSession.
   *
   * @param {Prisma.UserSessionCreateInput} data - The data of the UserSession to create.
   * @returns {Promise<UserSession>} The created UserSession.
   */
  async create(data: Prisma.UserSessionCreateInput): Promise<UserSession> {
    return await this.userSessionRepository.create(data);
  }

  /**
   * Retrieves a UserSession by its id.
   *
   * @param {string} id - The id of the UserSession to retrieve.
   * @returns {Promise<UserSession>} The retrieved UserSession.
   */
  async findUnique(
    args: Prisma.UserSessionFindUniqueArgs,
  ): Promise<UserSession | null> {
    return await this.userSessionRepository.findUnique(args);
  }

  /**
   * Retrieves a UserSession by its refresh token.
   *
   * @param {string} refreshToken - The refresh token of the UserSession to retrieve.
   * @returns {Promise<UserSession | null>} The retrieved UserSession or null if not found.
   */
  async findByRefreshToken(refreshToken: string): Promise<UserSession | null> {
    return await this.userSessionRepository.findFirst({
      where: { refreshToken },
    });
  }

  /**
   * Retrieves all UserSessions for a specific User.
   *
   * @param {string} userId - The id of the User whose UserSessions are to be retrieved.
   * @returns {Promise<UserSession[]>} The retrieved UserSessions.
   */
  async findByUserId(userId: string): Promise<UserSession[]> {
    return await this.userSessionRepository.findMany({
      where: { userId },
    });
  }

  /**
   * Updates the refresh token for a UserSession.
   *
   * @param {string} id - The id of the UserSession to update.
   * @param {string} newToken - The new refresh token.
   * @param {Date} expiresAt - The expiration date of the new refresh token.
   * @returns {Promise<void>} - A promise that resolves when the refresh token has been updated.
   */
  async updateRefreshToken(
    id: string,
    newToken: string,
    expiresAt: Date,
  ): Promise<void> {
    await this.userSessionRepository.update(id, {
      refreshToken: newToken,
      expiresAt: expiresAt,
    });
  }

  /**
   * Updates a UserSession.
   *
   * @param {string} id - The id of the UserSession to update.
   * @param {Partial<UserSession>} data - The data to update the UserSession with.
   * @returns {Promise<void>} - A promise that resolves when the UserSession has been updated.
   */
  async update(id: string, data: Prisma.UserSessionUpdateInput): Promise<void> {
    await this.userSessionRepository.update(id, data);
  }

  /**
   * Deactivates a UserSession.
   *
   * @param {string} id - The id of the UserSession to deactivate.
   * @returns {Promise<void>} - A promise that resolves when the UserSession has been deactivated.
   */
  async deactivate(id: string): Promise<void> {
    await this.userSessionRepository.deactivate(id);
  }

  /**
   * Deactivates all UserSessions for a specific User.
   *
   * @param {string} userId - The id of the User whose UserSessions are to be deactivated.
   * @returns {Promise<void>} - A promise that resolves when the UserSessions have been deactivated.
   */
  async deactivateAllForUser(userId: string): Promise<void> {
    await this.userSessionRepository.deactivateAllForUser(userId);
  }

  /**
   * Deletes a UserSession by its refresh token.
   *
   * @param {string} refreshToken - The refresh token of the UserSession to delete.
   * @returns {Promise<void>} - A promise that resolves when the UserSession has been deleted.
   */
  async deleteByRefreshToken(refreshToken: string): Promise<void> {
    const session = await this.findByRefreshToken(refreshToken);

    if (session) {
      await this.userSessionRepository.delete(session.id);
    }
  }

  /**
   * Deletes all expired UserSessions.
   *
   * @returns {Promise<number>} - The number of expired UserSessions deleted.
   */
  async deleteExpiredSessions(): Promise<number> {
    return await this.userSessionRepository.deleteExpiredSessions();
  }
}
