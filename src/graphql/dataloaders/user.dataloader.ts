import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';
import { PrismaService } from '../../prisma/prisma.service';
import { Appointment, Review, User } from 'prisma/app/generated/prisma/client';

@Injectable()
export class UserDataLoader {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a DataLoader for loading users by their IDs
   * @param userIds - An array of user IDs to load
   * @returns A DataLoader that loads users by their IDs
   * @description This method creates a DataLoader for loading users by their IDs.
   * It uses the Prisma service to find users by their IDs and returns a map of user IDs to users.
   * The DataLoader is used to batch load users by their IDs.
   * @example
   * const userLoader = new UserDataLoader(prisma);
   * const user = await userLoader.createUserLoader().load('123');
   */
  createUserLoader(): DataLoader<string, User | null> {
    return new DataLoader<string, User | null>(async (userIds: string[]) => {
      const users = await this.prisma.user.findMany({
        where: {
          id: { in: userIds },
          deletedAt: null,
        },
      });
      const userMap = new Map(users.map((user) => [user.id, user]));
      return userIds.map((id) => userMap.get(id) || null);
    });
  }

  /**
   * Create a DataLoader for loading appointments by user IDs
   * @param userIds - An array of user IDs to load
   * @returns A DataLoader that loads appointments by user IDs
   * @description This method creates a DataLoader for loading appointments by user IDs.
   * It uses the Prisma service to find appointments by user IDs and returns a map of user IDs to appointments.
   * The DataLoader is used to batch load appointments by user IDs.
   * @example
   * const appointmentLoader = new UserDataLoader(prisma);
   * const appointments = await appointmentLoader.createUserAppointmentsLoader().load('123');
   */
  createUserAppointmentsLoader(): DataLoader<string, Appointment[]> {
    return new DataLoader<string, Appointment[]>(async (userIds: string[]) => {
      const appointments = await this.prisma.appointment.findMany({
        where: {
          customerId: { in: userIds },
          deletedAt: null,
        },
        include: {
          service: true,
          staff: true,
        },
        orderBy: { startTime: 'desc' },
      });
      const appointmentMap = new Map<string, Appointment[]>();
      userIds.forEach((id) => appointmentMap.set(id, []));

      appointments.forEach((appointment) => {
        const existing = appointmentMap.get(appointment.customerId) || [];
        existing.push(appointment);
        appointmentMap.set(appointment.customerId, existing);
      });
      return userIds.map((id) => appointmentMap.get(id) || []);
    });
  }

  /**
   * Create a DataLoader for loading appointments by staff IDs
   * @param staffIds - An array of staff IDs to load
   * @returns A DataLoader that loads appointments by staff IDs
   * @description This method creates a DataLoader for loading appointments by staff IDs.
   * It uses the Prisma service to find appointments by staff IDs and returns a map of staff IDs to appointments.
   * The DataLoader is used to batch load appointments by staff IDs.
   * @example
   * const appointmentLoader = new UserDataLoader(prisma);
   * const appointments = await appointmentLoader.createStaffAppointmentsLoader().load('123');
   */
  createStaffAppointmentsLoader(): DataLoader<string, Appointment[]> {
    return new DataLoader<string, Appointment[]>(async (staffIds: string[]) => {
      const appointments = await this.prisma.appointment.findMany({
        where: {
          staffId: { in: staffIds },
          deletedAt: null,
        },
        include: {
          service: true,
          customer: true,
        },
        orderBy: { startTime: 'desc' },
      });
      const appointmentMap = new Map<string, Appointment[]>();
      staffIds.forEach((id) => appointmentMap.set(id, []));

      appointments.forEach((appointment) => {
        if (appointment.staffId) {
          const existing = appointmentMap.get(appointment.staffId) || [];
          existing.push(appointment);
          appointmentMap.set(appointment.staffId, existing);
        }
      });
      return staffIds.map((id) => appointmentMap.get(id) || []);
    });
  }

  /**
   * Create a DataLoader for loading reviews by user IDs
   * @param userIds - An array of user IDs to load
   * @returns A DataLoader that loads reviews by user IDs
   * @description This method creates a DataLoader for loading reviews by user IDs.
   * It uses the Prisma service to find reviews by user IDs and returns a map of user IDs to reviews.
   * The DataLoader is used to batch load reviews by user IDs.
   * @example
   * const reviewLoader = new UserDataLoader(prisma);
   * const reviews = await reviewLoader.createUserReviewsLoader().load('123');
   */
  createUserReviewsLoader(): DataLoader<string, Review[]> {
    return new DataLoader<string, Review[]>(async (userIds: string[]) => {
      const reviews = await this.prisma.review.findMany({
        where: {
          customerId: { in: userIds },
        },
        include: {
          service: true,
          staff: true,
        },
        orderBy: { createdAt: 'desc' },
      });
      const reviewMap = new Map<string, Review[]>();
      userIds.forEach((id) => reviewMap.set(id, []));

      reviews.forEach((review) => {
        const existing = reviewMap.get(review.customerId) || [];
        existing.push(review);
        reviewMap.set(review.customerId, existing);
      });
      return userIds.map((id) => reviewMap.get(id) || []);
    });
  }

  /**
   * Create a DataLoader for loading reviews by staff IDs
   * @param staffIds - An array of staff IDs to load
   * @returns A DataLoader that loads reviews by staff IDs
   * @description This method creates a DataLoader for loading reviews by staff IDs.
   * It uses the Prisma service to find reviews by staff IDs and returns a map of staff IDs to reviews.
   * The DataLoader is used to batch load reviews by staff IDs.
   * @example
   * const reviewLoader = new UserDataLoader(prisma);
   * const reviews = await reviewLoader.createStaffReceivedReviewsLoader().load('123');
   */
  createStaffReceivedReviewsLoader(): DataLoader<string, Review[]> {
    return new DataLoader<string, Review[]>(async (staffIds: string[]) => {
      const reviews = await this.prisma.review.findMany({
        where: {
          staffId: { in: staffIds },
          isApproved: true,
          isPublic: true,
        },
        include: {
          customer: true,
          service: true,
        },
        orderBy: { createdAt: 'desc' },
      });
      const reviewMap = new Map<string, Review[]>();
      staffIds.forEach((id) => reviewMap.set(id, []));

      reviews.forEach((review) => {
        if (review.staffId) {
          const existing = reviewMap.get(review.staffId) || [];
          existing.push(review);
          reviewMap.set(review.staffId, existing);
        }
      });
      return staffIds.map((id) => reviewMap.get(id) || []);
    });
  }
}
