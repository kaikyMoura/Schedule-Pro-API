import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from 'src/common/decorators/public.decorator';
import { MutationResponse } from 'src/graphql/type/mutation-response.type';
import { CreateUserInput } from 'src/user/input/create-user.input';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { LoginUserInput } from 'src/user/input/login-user.input';
import { CustomRequest } from 'src/common/types/custom-request';
import { CurrentUser } from 'src/user/decorators/current-user.dto';
import { NotificationService } from 'src/notification/notification.service';

@Resolver()
@UseGuards(JwtAuthGuard, RolesGuard)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
  ) {}

  @Public()
  @Mutation(() => MutationResponse, { name: 'register' })
  async register(
    @Args('input') input: CreateUserInput,
  ): Promise<MutationResponse> {
    const user = await this.authService.register(input);
    return {
      success: true,
      message: 'User registered successfully',
      data: user,
    };
  }

  @Public()
  @Mutation(() => MutationResponse, { name: 'login' })
  async login(@Args('input') input: LoginUserInput): Promise<MutationResponse> {
    const data = await this.authService.login(input);

    return {
      success: true,
      message: 'User logged in successfully',
      data: data,
    };
  }

  @Mutation(() => MutationResponse, { name: 'logout' })
  async logout(
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<MutationResponse> {
    await this.authService.logout(currentUser.user.sub);
    return {
      success: true,
      message: 'User logged out successfully',
    };
  }

  @Mutation(() => MutationResponse, { name: 'refreshToken' })
  async refreshToken(
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<MutationResponse> {
    const refreshToken = currentUser.cookies?.refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException('No refresh token provided');
    }

    const data = await this.authService.refreshToken(refreshToken);
    return {
      success: true,
      message: 'Token refreshed successfully',
      data: data,
    };
  }

  @Mutation(() => MutationResponse, { name: 'forgotPassword' })
  async forgotPassword(
    @Args('email') email: string,
  ): Promise<MutationResponse> {
    await this.authService.forgotPassword(email);
    return {
      success: true,
      message: 'Password reset email sent',
    };
  }

  @Mutation(() => MutationResponse, { name: 'resetPassword' })
  async resetPassword(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<MutationResponse> {
    await this.authService.resetPassword(token, newPassword);
    return {
      success: true,
      message: 'Password reset successfully',
    };
  }

  @Public()
  @Mutation(() => MutationResponse, { name: 'sendVerificationEmail' })
  async sendVerificationEmail(
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<MutationResponse> {
    await this.authService.sendVerificationEmail(currentUser.user.email);
    return {
      success: true,
      message: 'Email verification email sent',
    };
  }

  @Public()
  @Mutation(() => MutationResponse, { name: 'verifyEmail' })
  async verifyEmail(@Args('token') token: string): Promise<MutationResponse> {
    await this.authService.verifyEmail(token);
    return {
      success: true,
      message: 'Email verified successfully',
    };
  }

  @Public()
  @Mutation(() => MutationResponse, { name: 'sendOtp' })
  async sendOtp(@Args('phone') phone: string): Promise<MutationResponse> {
    const data = await this.notificationService.sendVerificationCode(phone);
    return {
      success: true,
      message: data.message,
    };
  }

  @Public()
  @Mutation(() => MutationResponse, { name: 'verifyOtp' })
  async verifyOtp(
    @Args('phone') phone: string,
    @Args('code') code: string,
  ): Promise<MutationResponse> {
    const data = await this.notificationService.checkVerificationCode(
      phone,
      code,
    );

    return {
      success: data.success,
      message: data.message,
    };
  }
}
