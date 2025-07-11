import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStaffServiceInput } from './dtos/create-staff-service.input';
import { StaffServiceFilterInput } from './dtos/staff-service-filter.input';
import { StaffServiceOrderInput } from './dtos/staff-service-order.input';
import { StaffServicePaginationInput } from './dtos/staff-service-pagination.input';
import { UpdateStaffServiceInput } from './dtos/update-staff-service.input';
import { StaffServiceService } from './staff-service.service';
import { PaginatedStaffService } from './types/paginated-staff-service.type';
import { StaffServiceResponse } from './types/staff-service-response.type';
import { StaffServiceType } from './types/staff-service.type';

@Resolver(StaffServiceType)
export class StaffServiceResolver {
  constructor(private readonly staffService: StaffServiceService) {}

  @Query(() => PaginatedStaffService, { name: 'staffServices' })
  async findMany(
    @Args('filter', { nullable: true }) filter?: StaffServiceFilterInput,
    @Args('pagination', { nullable: true })
    pagination?: StaffServicePaginationInput,
    @Args('orderBy', { nullable: true }) orderBy?: StaffServiceOrderInput,
  ): Promise<PaginatedStaffService> {
    return this.staffService.findMany(undefined, {
      where: filter,
      skip: pagination?.offset,
      take: pagination?.limit,
      orderBy: orderBy,
    });
  }

  @Query(() => StaffServiceResponse, { name: 'staffServiceById' })
  async findById(@Args('id') id: string): Promise<StaffServiceResponse> {
    const staffService = await this.staffService.findById(id);
    return {
      data: staffService,
      message: '',
      success: true,
    };
  }

  @Mutation(() => StaffServiceResponse, { name: 'createStaffService' })
  async create(
    @Args('input') input: CreateStaffServiceInput,
  ): Promise<StaffServiceResponse> {
    const staffService = await this.staffService.create(input);
    return {
      data: staffService,
      message: 'Staff service created successfully',
      success: true,
    };
  }

  @Mutation(() => StaffServiceResponse, { name: 'updateStaffService' })
  async update(
    @Args('id') id: string,
    @Args('input') input: UpdateStaffServiceInput,
  ): Promise<StaffServiceResponse> {
    await this.staffService.update(id, input);
    return {
      message: 'Staff service updated successfully',
      success: true,
    };
  }

  @Mutation(() => StaffServiceResponse, { name: 'deleteStaffService' })
  async delete(@Args('id') id: string): Promise<StaffServiceResponse> {
    await this.staffService.delete(id);
    return {
      message: 'Staff service deleted successfully',
      success: true,
    };
  }
}
