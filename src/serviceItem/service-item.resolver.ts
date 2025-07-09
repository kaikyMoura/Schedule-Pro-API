import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ServiceItem } from 'prisma/app/generated/prisma/client';
import { AppointmentType } from 'src/appointment/types/appointment.entity';
import { PaginationInput } from 'src/common/types/pagination.input';
import { ServiceItemDataLoader } from 'src/graphql/loaders/service-item.dataloader';
import { ReviewType } from 'src/reviews/types/review.entity';
import { StaffServiceType } from 'src/staff-service/type/staff-service.type';
import { UserType } from 'src/user/type/user.entity';
import { CreateServiceItemInput } from './dtos/create-service-item.input';
import { ServiceItemOrderInput } from './dtos/service-item-order.input';
import { UpdateServiceItemInput } from './dtos/update-service-item.dto';
import { ServiceItemService } from './service-item.service';
import { PaginatedServiceItems } from './type/paginated-services-items.type';
import { ServiceItemFilterInput } from './type/service-item-filter.input';
import { ServiceItemResponse } from './type/service-item-response.type';
import { ServiceItemType } from './type/service-item.type';

@Resolver()
export class ServiceItemResolver {
  constructor(
    private readonly serviceItemService: ServiceItemService,
    private readonly serviceItemDataLoader: ServiceItemDataLoader,
  ) {}

  @Query(() => PaginatedServiceItems, { name: 'serviceItems' })
  async getServiceItems(
    @Args('filter', { nullable: true }) filter?: ServiceItemFilterInput,
    @Args('pagination', { nullable: true })
    pagination?: PaginationInput,
    @Args('orderBy', { nullable: true }) orderBy?: ServiceItemOrderInput,
  ): Promise<PaginatedServiceItems> {
    const serviceItems = await this.serviceItemService.findMany(undefined, {
      where: filter,
      skip: pagination?.offset,
      take: pagination?.limit,
      include: {
        staffServices: true,
      },
      orderBy: orderBy,
    });

    return {
      nodes: serviceItems.map((serviceItem) => {
        return this.serviceItemService.toServiceItemType(serviceItem);
      }),
      totalCount: await this.serviceItemService.count({
        where: {
          name: {
            contains: filter?.search,
            mode: 'insensitive',
          },
        },
      }),
      hasNextPage:
        (pagination?.offset ?? 0) + (pagination?.limit ?? 0) <
        (await this.serviceItemService.count({
          where: filter,
        })),
      hasPreviousPage: (pagination?.offset ?? 0) > 0,
    };
  }

  @Query(() => ServiceItemType, { name: 'serviceItem' })
  async getServiceItem(@Args('id') id: string): Promise<ServiceItemType> {
    const serviceItem = await this.serviceItemService.findById(id);
    return this.serviceItemService.toServiceItemType(serviceItem!);
  }

  @Mutation(() => ServiceItemResponse, { name: 'createServiceItem' })
  async createServiceItem(
    @Args('input') input: CreateServiceItemInput,
  ): Promise<ServiceItemResponse> {
    await this.serviceItemService.create(input);

    return {
      success: true,
      message: 'Service item created successfully',
    };
  }

  @Mutation(() => ServiceItemResponse, { name: 'updateServiceItem' })
  async updateServiceItem(
    @Args('id') id: string,
    @Args('input') input: UpdateServiceItemInput,
  ): Promise<ServiceItemResponse> {
    await this.serviceItemService.update(id, input);

    return {
      success: true,
      message: 'Service item updated successfully',
    };
  }

  @Mutation(() => ServiceItemResponse, { name: 'deleteServiceItem' })
  async deleteServiceItem(
    @Args('id') id: string,
  ): Promise<ServiceItemResponse> {
    await this.serviceItemService.delete(id);

    return {
      success: true,
      message: 'Service item deleted successfully',
    };
  }

  @ResolveField(() => [AppointmentType], { name: 'appointments' })
  async getAppointments(
    @Parent() serviceItem: ServiceItem,
  ): Promise<AppointmentType[]> {
    return this.serviceItemDataLoader
      .createServiceItemAppointmentsLoader()
      .load(serviceItem.id);
  }

  @ResolveField(() => [ReviewType], { name: 'reviews' })
  async getReviews(@Parent() serviceItem: ServiceItem): Promise<ReviewType[]> {
    return this.serviceItemDataLoader
      .createServiceItemReviewsLoader()
      .load(serviceItem.id);
  }

  @ResolveField(() => [StaffServiceType], { name: 'staffServices' })
  async getStaffServices(
    @Parent() serviceItem: ServiceItem,
  ): Promise<StaffServiceType[]> {
    return await this.serviceItemDataLoader
      .createServiceItemStaffServicesLoader()
      .load(serviceItem.id);
  }

  @ResolveField(() => [UserType], { name: 'staff' })
  async getStaff(@Parent() serviceItem: ServiceItem): Promise<UserType[]> {
    return this.serviceItemDataLoader
      .createServiceItemStaffLoader()
      .load(serviceItem.id);
  }

  @ResolveField(() => [UserType], { name: 'customers' })
  async getCustomers(@Parent() serviceItem: ServiceItem): Promise<UserType[]> {
    return await this.serviceItemDataLoader
      .createServiceItemCustomersLoader()
      .load(serviceItem.id);
  }
}
