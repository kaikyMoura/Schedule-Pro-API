import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Review, Role, User } from 'prisma/app/generated/prisma/client';
import { AppointmentService } from 'src/appointment/appointment.service';
import { WithServiceItemsSpec as WithServiceItemsSpecAppointment } from 'src/appointment/specs/with-service-items.spec';
import { AppointmentType } from 'src/appointment/types/appointment.entity';
import { AndSpecification } from 'src/common/specs/and.spec';
import { ReviewService } from 'src/reviews/review.service';
import { IsApprovedReviewSpec } from 'src/reviews/specs/is-approved.spec';
import { IsPublicReviewSpec } from 'src/reviews/specs/is-public.spec';
import { WithServiceItemsSpec as WithServiceItemsSpecReview } from 'src/reviews/specs/with-service-items.spec';
import { ServiceItemService } from 'src/serviceItem/service-item.service';
import { WithServiceItemsSpec as WithServiceItemsSpecServiceItem } from 'src/serviceItem/specs/with-service-items.spec';
import { ServiceItemType } from 'src/serviceItem/type/service-item.entity';
import { WithServiceItemsSpec as WithServiceItemsSpecStaffService } from 'src/staff-service/specs/with-service-items.spec';
import { StaffServiceService } from 'src/staff-service/staff-service.service';
import { StaffServiceType } from 'src/staff-service/types/staff-service.entity';
import { RoleSpecification } from 'src/user/specs/role.spec';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ServiceItemDataLoader {
  constructor(
    private readonly serviceItemService: ServiceItemService,
    private readonly appointmentService: AppointmentService,
    private readonly staffServiceService: StaffServiceService,
    private readonly reviewService: ReviewService,
    private readonly userService: UserService,
  ) {}

  /**
   * Creates a DataLoader for loading ServiceItem objects by their IDs.
   *
   * @returns {DataLoader<string, ServiceItem | null>} - A DataLoader that loads ServiceItem objects by their IDs.
   */
  createServiceItemLoader(): DataLoader<string, ServiceItemType | null> {
    return new DataLoader<string, ServiceItemType | null>(
      async (serviceItemIds: string[]) => {
        const serviceItems = await this.serviceItemService.findMany(
          new WithServiceItemsSpecServiceItem(serviceItemIds),
          {
            include: {
              staffServices: true,
            },
          },
        );
        const serviceItemMap = new Map<string, ServiceItemType>();
        serviceItems.forEach((serviceItem) => {
          serviceItemMap.set(
            serviceItem.id,
            this.serviceItemService.toServiceItemType(serviceItem),
          );
        });
        return serviceItemIds.map((id) => serviceItemMap.get(id) || null);
      },
    );
  }

  /**
   * Creates a DataLoader for loading Appointment objects by their ServiceItem IDs.
   *
   * @returns {DataLoader<string, Appointment[]>} - A DataLoader that loads Appointment objects by their ServiceItem IDs.
   */
  createServiceItemAppointmentsLoader(): DataLoader<string, AppointmentType[]> {
    return new DataLoader<string, AppointmentType[]>(
      async (serviceItemIds: string[]) => {
        const appointments = await this.appointmentService.findMany(
          new WithServiceItemsSpecAppointment(serviceItemIds),
          {
            include: {
              service: {
                include: {
                  staffServices: true,
                },
              },
              staff: true,
              customer: true,
            },
            orderBy: { startTime: 'desc' },
          },
        );
        const appointmentMap = new Map<string, AppointmentType[]>();
        serviceItemIds.forEach((id) => appointmentMap.set(id, []));

        appointments.forEach((appointment) => {
          const existing = appointmentMap.get(appointment.customerId) || [];
          existing.push(this.appointmentService.toAppointmentType(appointment));
          appointmentMap.set(appointment.customerId, existing);
        });
        return serviceItemIds.map((id) => appointmentMap.get(id) || []);
      },
    );
  }

  /**
   * Creates a DataLoader for loading StaffService objects by their ServiceItem IDs.
   *
   * @returns {DataLoader<string, StaffService[]>} - A DataLoader that loads StaffService objects by their ServiceItem IDs.
   */
  createServiceItemStaffServicesLoader(): DataLoader<
    string,
    StaffServiceType[]
  > {
    return new DataLoader<string, StaffServiceType[]>(
      async (serviceItemIds: string[]) => {
        const staffServices = await this.staffServiceService.findMany(
          new WithServiceItemsSpecStaffService(serviceItemIds),
          {
            include: {
              staff: true,
              service: true,
            },
          },
        );
        const staffServiceMap = new Map<string, StaffServiceType[]>();
        serviceItemIds.forEach((id) => staffServiceMap.set(id, []));

        staffServices.forEach((staffService) => {
          const existing = staffServiceMap.get(staffService.serviceId) || [];
          existing.push(
            this.staffServiceService.toStaffServiceType(staffService),
          );
          staffServiceMap.set(staffService.serviceId, existing);
        });
        return serviceItemIds.map((id) => staffServiceMap.get(id) || []);
      },
    );
  }

  /**
   * Creates a DataLoader for loading Review objects by their ServiceItem IDs.
   *
   * @returns {DataLoader<string, Review[]>} - A DataLoader that loads Review objects by their ServiceItem IDs.
   */
  createServiceItemReviewsLoader(): DataLoader<string, Review[]> {
    return new DataLoader<string, Review[]>(
      async (serviceItemIds: string[]) => {
        const spec = new AndSpecification<Review>([
          new WithServiceItemsSpecReview(serviceItemIds),
          new IsApprovedReviewSpec(true),
          new IsPublicReviewSpec(true),
        ]);
        const reviews = await this.reviewService.findMany(spec);
        const reviewMap = new Map<string, Review[]>();
        serviceItemIds.forEach((id) => reviewMap.set(id, []));

        reviews.forEach((review) => {
          const existing = reviewMap.get(review.serviceId) || [];
          existing.push(review);
          reviewMap.set(review.serviceId, existing);
        });
        return serviceItemIds.map((id) => reviewMap.get(id) || []);
      },
    );
  }

  /**
   * Creates a DataLoader for loading Staff objects by their ServiceItem IDs.
   *
   * @returns {DataLoader<string, User[]>} - A DataLoader that loads Staff objects by their ServiceItem IDs.
   */
  createServiceItemStaffLoader(): DataLoader<string, User[]> {
    return new DataLoader<string, User[]>(async (serviceItemIds: string[]) => {
      const staff = await this.userService.findMany(
        new RoleSpecification(Role.STAFF),
        {
          include: {
            staffServices: {
              where: {
                serviceId: { in: serviceItemIds },
              },
            },
          },
        },
      );
      const staffMap = new Map<string, User[]>();
      serviceItemIds.forEach((id) => staffMap.set(id, []));

      staff.forEach((staff) => {
        const existing = staffMap.get(staff.id) || [];
        existing.push(staff);
        staffMap.set(staff.id, existing);
      });
      return serviceItemIds.map((id) => staffMap.get(id) || []);
    });
  }

  /**
   * Creates a DataLoader for loading Customer objects by their ServiceItem IDs.
   *
   * @returns {DataLoader<string, User[]>} - A DataLoader that loads Customer objects by their ServiceItem IDs.
   */
  createServiceItemCustomersLoader(): DataLoader<string, User[]> {
    return new DataLoader<string, User[]>(async (serviceItemIds: string[]) => {
      const customers = await this.userService.findMany(
        new RoleSpecification(Role.CUSTOMER),
        {
          include: {
            customerAppointments: {
              where: {
                serviceId: { in: serviceItemIds },
              },
            },
          },
        },
      );
      const customerMap = new Map<string, User[]>();
      serviceItemIds.forEach((id) => customerMap.set(id, []));

      customers.forEach((customer) => {
        const existing = customerMap.get(customer.id) || [];
        existing.push(customer);
        customerMap.set(customer.id, existing);
      });
      return serviceItemIds.map((id) => customerMap.get(id) || []);
    });
  }
}
