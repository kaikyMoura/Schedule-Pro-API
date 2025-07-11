import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Review } from 'prisma/app/generated/prisma/client';
import { AppointmentService } from 'src/appointments/appointment.service';
import { CustomerIdsInAppointmentSpec } from 'src/appointments/specs/customer-id-in.spec';
import { WithStaffIdInSpec as WithStaffIdInSpecAppointment } from 'src/appointments/specs/with-staff-id-in.spec';
import { AppointmentType } from 'src/appointments/types/appointment.entity';
import { AndSpecification } from 'src/common/specs/and.spec';
import { ReviewService } from 'src/reviews/review.service';
import { IsApprovedReviewSpec } from 'src/reviews/specs/is-approved.spec';
import { IsPublicReviewSpec } from 'src/reviews/specs/is-public.spec';
import { WithCustomerSpec } from 'src/reviews/specs/with-customer.spec';
import { WithStaffsSpec } from 'src/reviews/specs/with-staffs.spec';
import { ReviewType } from 'src/reviews/types/review.type';
import { WithStaffIdInSpec as WithStaffIdInSpecStaffAvailability } from 'src/staff-availabilitys/specs/with-staff-id-in.spec';
import { StaffAvailabilityService } from 'src/staff-availabilitys/staff-availability.service';
import { StaffAvailabilityType } from 'src/staff-availabilitys/types/staff-availability.type';
import { WithUsersIdsSpec } from 'src/users/specs/withs-users-ids.spec';
import { UserType } from 'src/users/types/user.type';
import { UserService } from 'src/users/user.service';

@Injectable({ scope: Scope.REQUEST })
export class UserDataLoader {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly appointmentService: AppointmentService,
    private readonly userService: UserService,
    private readonly staffAvailabilityService: StaffAvailabilityService,
  ) {}

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
  createUserLoader(): DataLoader<string, UserType | Error> {
    return new DataLoader<string, UserType | Error>(
      async (userIds: string[]) => {
        const users = await this.userService.findMany(
          new WithUsersIdsSpec(userIds),
          {
            include: {
              customerAppointments: true,
              staffAppointments: true,
              reviews: true,
            },
            orderBy: { createdAt: 'desc' },
          },
        );
        // Convert each user to UserType using toUserType
        const userMap = new Map(
          users.map((user) => [user.id, this.userService.toUserType(user)]),
        );
        // For each requested userId, return the user or an Error if not found
        return userIds.map((id) =>
          userMap.has(id)
            ? userMap.get(id)!
            : new Error(`User with id ${id} not found`),
        );
      },
    );
  }

  /**
   * Create a DataLoader for loading appointments by user IDs
   * @param userIds - An array of user IDs to load
   * @returns A DataLoader that loads appointments by user IDs
   * @description This method creates a DataLoader for loading appointments by user IDs.
   * It uses the Prisma service to find appointments by user IDs and returns a map of user IDs to appointments.
   * The DataLoader is used to batch load appointments by user IDs.
   */
  createUserAppointmentsLoader(): DataLoader<string, AppointmentType[]> {
    return new DataLoader<string, AppointmentType[]>(
      async (userIds: string[]) => {
        const appointments = await this.appointmentService.findMany(
          new CustomerIdsInAppointmentSpec(userIds),
          {
            include: {
              service: true,
              customer: true,
            },
            orderBy: { startTime: 'desc' },
          },
        );
        const appointmentMap = new Map<string, AppointmentType[]>();
        userIds.forEach((id) => appointmentMap.set(id, []));

        appointments.forEach((appointment) => {
          const existing = appointmentMap.get(appointment.customerId) || [];
          existing.push(this.appointmentService.toAppointmentType(appointment));
          appointmentMap.set(appointment.customerId, existing);
        });
        return userIds.map((id) => appointmentMap.get(id) || []);
      },
    );
  }

  /**
   * Create a DataLoader for loading the number of appointments by user IDs
   * @param userIds - An array of user IDs to load
   * @returns A DataLoader that loads the number of appointments by user IDs
   * @description This method creates a DataLoader for loading the number of appointments by user IDs.
   * It uses the Prisma service to find the number of appointments by user IDs and returns a map of user IDs to the number of appointments.
   * The DataLoader is used to batch load the number of appointments by user IDs.
   */
  createUserAppointmentsCountLoader(): DataLoader<string, number> {
    return new DataLoader<string, number>(async (userIds: string[]) => {
      // Get the count of appointments for each userId
      const counts = await this.appointmentService.count(
        new CustomerIdsInAppointmentSpec(userIds),
      );
      return userIds.map(() => counts);
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
  createStaffAppointmentsLoader(): DataLoader<string, AppointmentType[]> {
    return new DataLoader<string, AppointmentType[]>(
      async (staffIds: string[]) => {
        const appointments = await this.appointmentService.findMany(
          new WithStaffIdInSpecAppointment(staffIds),
          {
            include: {
              service: true,
              customer: true,
            },
            orderBy: { startTime: 'desc' },
          },
        );
        const appointmentMap = new Map<string, AppointmentType[]>();
        staffIds.forEach((id) => appointmentMap.set(id, []));

        appointments.forEach((appointment) => {
          if (appointment.staffId) {
            const existing = appointmentMap.get(appointment.staffId) || [];
            existing.push(
              this.appointmentService.toAppointmentType(appointment),
            );
            appointmentMap.set(appointment.staffId, existing);
          }
        });
        return staffIds.map((id) => appointmentMap.get(id) || []);
      },
    );
  }

  /**
   * Create a DataLoader for loading staff availabilities by staff IDs
   * @param staffIds - An array of staff IDs to load
   * @returns A DataLoader that loads staff availabilities by staff IDs
   * @description This method creates a DataLoader for loading staff availabilities by staff IDs.
   * It uses the Prisma service to find staff availabilities by staff IDs and returns a map of staff IDs to staff availabilities.
   * The DataLoader is used to batch load staff availabilities by staff IDs.
   */
  createStaffAvailabilityLoader(): DataLoader<string, StaffAvailabilityType[]> {
    return new DataLoader<string, StaffAvailabilityType[]>(
      async (staffIds: string[]) => {
        const staffAvailabilities =
          await this.staffAvailabilityService.findMany(
            new WithStaffIdInSpecStaffAvailability(staffIds),
          );
        const staffAvailabilityMap = new Map<string, StaffAvailabilityType[]>();
        staffIds.forEach((id) => staffAvailabilityMap.set(id, []));

        staffAvailabilities.forEach((staffAvailability) => {
          const existing =
            staffAvailabilityMap.get(staffAvailability.staffId) || [];
          existing.push(
            this.staffAvailabilityService.toStaffAvailabilityType(
              staffAvailability,
            ),
          );
          staffAvailabilityMap.set(staffAvailability.staffId, existing);
        });

        return staffIds.map((id) => staffAvailabilityMap.get(id) || []);
      },
    );
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
  createUserReviewsLoader(): DataLoader<string, ReviewType[]> {
    return new DataLoader<string, ReviewType[]>(async (userIds: string[]) => {
      // Fetch all reviews for the given userIds in a single query
      const spec = new AndSpecification<Review>([
        new WithCustomerSpec(userIds),
      ]);
      const reviews = await this.reviewService.findMany(spec, {
        include: {
          service: true,
          staff: true,
        },
        orderBy: { createdAt: 'desc' },
      });

      // Map userIds to their reviews
      const reviewMap = new Map<string, ReviewType[]>();
      userIds.forEach((id) => reviewMap.set(id, []));

      reviews.forEach((review) => {
        if (review.customerId) {
          const existing = reviewMap.get(review.customerId) || [];
          existing.push(this.reviewService.toReviewType(review));
          reviewMap.set(review.customerId, existing);
        }
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
  createStaffReceivedReviewsLoader(): DataLoader<string, ReviewType[]> {
    return new DataLoader<string, ReviewType[]>(async (staffIds: string[]) => {
      const spec = new AndSpecification<Review>([
        new WithStaffsSpec(staffIds),
        new IsApprovedReviewSpec(true),
        new IsPublicReviewSpec(true),
      ]);
      const reviews = await this.reviewService.findMany(spec, {
        include: {
          customer: true,
          service: true,
        },
        orderBy: { createdAt: 'desc' },
      });
      const reviewMap = new Map<string, ReviewType[]>();
      staffIds.forEach((id) => reviewMap.set(id, []));

      reviews.forEach((review) => {
        if (review.staffId) {
          const existing = reviewMap.get(review.staffId) || [];
          existing.push(this.reviewService.toReviewType(review));
          reviewMap.set(review.staffId, existing);
        }
      });
      return staffIds.map((id) => reviewMap.get(id) || []);
    });
  }
}
