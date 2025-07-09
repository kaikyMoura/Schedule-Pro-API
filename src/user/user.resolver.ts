import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { UnauthorizedException, UseInterceptors } from '@nestjs/common';
import {
  Args,
  Context,
  Float,
  ID,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Role, User } from 'prisma/app/generated/prisma/client';
import { AppointmentType } from 'src/appointment/types/appointment.entity';
import { CustomRequest } from 'src/common/types/custom-request';
import { PaginationInput } from 'src/common/types/pagination.input';
import { GqlContext } from 'src/graphql/gql-context.interface';
import { ReviewType } from 'src/reviews/types/review.entity';
import { CurrentUser } from './decorators/current-user.decorator';
import { Roles } from './decorators/role.decorator';
import { UpdateUserInput } from './input/update-user.input';
import { UserFilterInput } from './input/user-filter.input';
import { UserOrderInput } from './input/user-order.input';
import { PaginatedUsers } from './type/paginatedUsers.type';
import { UserResponse } from './type/user-response.type';
import { UserService } from './user.service';

@Resolver(() => UserResponse)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => PaginatedUsers, {
    name: 'users',
    description:
      'Get all users. Or get paginated users by role. Or get paginated users by filter.',
  })
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(300)
  async users(
    @CurrentUser() currentUser: CustomRequest,
    @Args('filter', { nullable: true }) filter?: UserFilterInput,
    @Args('pagination', { nullable: true })
    pagination?: PaginationInput,
    @Args('orderBy', { nullable: true }) orderBy?: UserOrderInput,
  ): Promise<PaginatedUsers> {
    if (currentUser.user.role === Role.CUSTOMER) {
      filter!.role = Role.STAFF;
    }

    const users = await this.userService.findMany(undefined, {
      where: filter,
      skip: pagination?.offset,
      take: pagination?.limit,
      orderBy: orderBy,
    });

    return {
      nodes: users.map((user) => this.userService.toUserType(user)),
      totalCount: users.length,
      hasNextPage:
        (pagination?.offset ?? 0) + (pagination?.limit ?? 0) < users.length,
      hasPreviousPage: (pagination?.offset ?? 0) > 0,
    };
  }

  @Query(() => UserResponse, {
    name: 'me',
    description: 'Get the current user',
  })
  @Roles(Role.ADMIN, Role.MANAGER, Role.STAFF, Role.CUSTOMER)
  async me(@CurrentUser() currentUser: CustomRequest): Promise<UserResponse> {
    const user = await this.userService.findById(currentUser.user.sub);
    const userType = this.userService.toUserType(user);

    return {
      success: true,
      message: 'User found successfully',
      data: userType,
    };
  }

  @Query(() => UserResponse, {
    name: 'user',
    description: 'Get a user by their ID',
  })
  @Roles(Role.ADMIN, Role.MANAGER)
  async user(@Args('id') id: string): Promise<UserResponse> {
    const user = await this.userService.findById(id);

    return {
      success: true,
      message: ``,
      data: this.userService.toUserType(user),
    };
  }

  @Mutation(() => UserResponse, {
    name: 'updateUser',
    description:
      'Update a user by their ID. Users can only update themselves unless they are admin or manager.',
  })
  @Roles(Role.ADMIN, Role.MANAGER, Role.CUSTOMER, Role.STAFF)
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateUserInput,
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<UserResponse> {
    // Users can only update themselves unless they're admin
    if (
      currentUser.user.sub !== id &&
      currentUser.user.role !== Role.ADMIN &&
      currentUser.user.role !== Role.MANAGER
    ) {
      throw new UnauthorizedException('Unauthorized to update this user');
    }
    await this.userService.update(id, input);

    return {
      success: true,
      message: `User updated successfully`,
    };
  }

  @Mutation(() => UserResponse, {
    name: 'deactivateUser',
    description:
      'Deactivate a user by their ID. Users can only deactivate themselves unless they are admin or manager.',
  })
  @Roles(Role.ADMIN, Role.MANAGER, Role.CUSTOMER, Role.STAFF)
  async deactivateUser(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<UserResponse> {
    // Users can only delete themselves unless they're admin or manager
    const isOwner = currentUser.user.sub === id;
    const isPrivileged =
      currentUser.user.role === Role.ADMIN ||
      currentUser.user.role === Role.MANAGER;

    if (!isOwner && !isPrivileged) {
      throw new UnauthorizedException('Unauthorized to delete this user');
    }

    await this.userService.deactivate(id);

    return {
      success: true,
      message: `User deactivated successfully`,
    };
  }

  @Mutation(() => UserResponse, {
    name: 'activateUser',
    description: 'Activate a user by their ID.',
  })
  @Roles(Role.ADMIN)
  async activateUser(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<UserResponse> {
    await this.userService.activate(id);

    return {
      success: true,
      message: `User activated successfully`,
    };
  }

  @Mutation(() => UserResponse, {
    name: 'deleteUser',
    description:
      'Delete a user by their ID. Only admins and managers can delete users.',
  })
  @Roles(Role.ADMIN, Role.MANAGER)
  async deleteUser(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<UserResponse> {
    await this.userService.delete(id);

    return {
      success: true,
      message: `User deleted successfully`,
    };
  }

  @ResolveField(() => [AppointmentType], { name: 'customerAppointments' })
  async customerAppointments(
    @Parent() user: User,
    @Context() context: GqlContext,
  ): Promise<AppointmentType[]> {
    const loader = context.userDataLoader.createUserAppointmentsLoader();
    return await loader.load(user.id);
  }

  @ResolveField(() => [AppointmentType], { name: 'staffAppointments' })
  async staffAppointments(
    @Parent() user: User,
    @Context() context: GqlContext,
  ): Promise<AppointmentType[]> {
    // Fetch appointments for the staff
    const loader = context.userDataLoader.createStaffAppointmentsLoader();
    return await loader.load(user.id);
  }

  @ResolveField(() => [ReviewType], { name: 'userReviews' })
  async reviews(
    @Parent() user: User,
    @Context() context: GqlContext,
  ): Promise<ReviewType[]> {
    const loader = context.userDataLoader.createUserReviewsLoader();
    return await loader.load(user.id);
  }

  @ResolveField(() => [ReviewType], { name: 'staffReceivedReviews' })
  async receivedReviews(
    @Parent() user: User,
    @Context() context: GqlContext,
  ): Promise<ReviewType[]> {
    const loader = context.userDataLoader.createStaffReceivedReviewsLoader();
    return await loader.load(user.id);
  }

  @ResolveField(() => Int, { name: 'appointmentCount' })
  async appointmentCount(
    @Parent() user: User,
    @Context() context: GqlContext,
  ): Promise<number> {
    const loader = context.userDataLoader.createUserAppointmentsCountLoader();
    return await loader.load(user.id);
  }

  @ResolveField(() => Float, { name: 'averageRating' })
  async averageRating(
    @Parent() user: User,
    @Context() context: GqlContext,
  ): Promise<string> {
    const loader = context.userDataLoader.createUserReviewsLoader();
    const reviews = await loader.load(user.id);
    if (reviews.length === 0) {
      return '0.0';
    }
    return (
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    ).toFixed(1);
  }

  @ResolveField(() => Int, { name: 'totalReviews' })
  async totalReviews(
    @Parent() user: User,
    @Context() context: GqlContext,
  ): Promise<number> {
    const loader = context.userDataLoader.createUserReviewsLoader();
    const reviews = await loader.load(user.id);
    return reviews.length;
  }
}
