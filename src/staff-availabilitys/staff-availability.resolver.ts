import { Args, Query, Resolver } from '@nestjs/graphql';
import { AvailabilityOrderInput } from './dtos/availability-order.input';
import { StaffAvailabilityService } from './staff-availability.service';
import { PaginatedStaffAvailability } from './types/paginated-availability.type';
import { StaffAvailabilityType } from './types/staff-availability.type';
import { AvailabilityFilterInput } from './dtos/availability-filter.input';
import { AvailabilityPaginationInput } from './dtos/availability-pagination.input';
import { StaffAvailabilityResponse } from './types/availability-response.type';

@Resolver(StaffAvailabilityType)
export class StaffAvailabilityResolver {
  constructor(
    private readonly staffAvailabilityService: StaffAvailabilityService,
  ) {}

  @Query(() => PaginatedStaffAvailability, { name: 'staffAvailabilitys' })
  async findAll(
    @Args('filter', { nullable: true }) filter?: AvailabilityFilterInput,
    @Args('orderBy', { nullable: true }) orderBy?: AvailabilityOrderInput,
    @Args('pagination', { nullable: true })
    pagination?: AvailabilityPaginationInput,
  ): Promise<PaginatedStaffAvailability> {
    return this.staffAvailabilityService.findMany(undefined, {
      where: filter,
      skip: pagination?.offset,
      take: pagination?.limit,
      orderBy: orderBy,
    });
  }

  @Query(() => StaffAvailabilityResponse, { name: 'staffAvailability' })
  async findById(@Args('id') id: string): Promise<StaffAvailabilityResponse> {
    const staffAvailability = await this.staffAvailabilityService.findById(id);

    return {
      success: true,
      data: this.staffAvailabilityService.toStaffAvailabilityType(
        staffAvailability,
      ),
    };
  }
}
