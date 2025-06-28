import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiTags,
  OmitType,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { LoginUserDto } from 'src/user/dtos/login-user.dto';
import { ResetPasswordDto } from 'src/user/dtos/reset-password.dto';
import { AuthService } from './auth.service';
import { BaseOtpDto } from './dtos/base-otp.dto';
import { TwilioService } from './utils/twilio.service';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';

class RequestEmailDto extends OmitType(LoginUserDto, ['password'] as const) {}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly twilioService: TwilioService,
  ) {}

  @Post('login')
  @ApiBody({ type: LoginUserDto })
  @Public()
  @ApiOperation({ summary: 'Login' })
  async login(
    @Body() body: LoginUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const tokens = await this.authService.signIn(
      body,
      req.headers['user-agent'] || 'unknown',
      req.ip,
    );

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      accessToken: tokens.accessToken,
      expiresIn: tokens.expiresIn,
    });
  }

  @Post('signup')
  @ApiBody({ type: CreateUserDto })
  @Public()
  @ApiOperation({ summary: 'Create a new user' })
  async create(@Body() userDto: CreateUserDto) {
    const data = await this.authService.signup(userDto);
    const user = data.data;
    await this.authService.sendVerificationEmail(user.email);

    return data;
  }

  @Post('refresh')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Refresh access token' })
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies?.refreshToken as string | undefined;

    if (!refreshToken) {
      throw new UnauthorizedException('Missing refresh token');
    }

    const tokens = await this.authService.refreshSession(refreshToken);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      accessToken: tokens.accessToken,
      expiresIn: tokens.expiresIn,
    });
  }

  @Post('logout')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout' })
  async logout(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies?.refreshToken as string | undefined;

    if (refreshToken) {
      await this.authService.revokeSession(refreshToken);
    }

    res.clearCookie('refreshToken', { path: '/' });
    res.status(204).send();
  }

  @Post('forgot-password')
  @ApiBody({ type: RequestEmailDto })
  @Public()
  @ApiOperation({ summary: 'Forgot password' })
  async forgotPassword(@Body('email') email: string) {
    return await this.authService.sendPasswordResetEmail(email);
  }

  @Post('send-verify-email')
  @ApiBody({ type: RequestEmailDto })
  @Public()
  @ApiOperation({ summary: 'Verify email' })
  async verifyEmail(@Body('email') email: string) {
    return await this.authService.sendVerificationEmail(email);
  }

  @Post('verify-email')
  @ApiBody({ type: RequestEmailDto })
  @ApiOperation({ summary: 'Verify email' })
  async verifyEmailToken(@Body('email') email: string) {
    if (!email) {
      throw new MissingRequiredPropertiesException('Email is missing');
    }

    return await this.authService.verifyEmail(email);
  }

  @Post('reset-password')
  @Public()
  @ApiBody({ type: ResetPasswordDto })
  @ApiOperation({ summary: 'Reset password' })
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    const { token, newPassword } = resetPasswordDto;

    if (!token || !newPassword) {
      throw new MissingRequiredPropertiesException();
    }

    const result = await this.authService.resetPassword(token, newPassword);

    if (!result) {
      throw new BadRequestException('Password reset failed');
    }

    return { message: result };
  }

  @Public()
  @ApiBody({
    schema: { type: 'object', properties: { phone: { type: 'string' } } },
  })
  @Post('send-otp')
  async sendOtp(@Body('phone') phone: string) {
    return await this.twilioService.createVerification(phone);
  }

  @Public()
  @ApiBody({ type: BaseOtpDto })
  @Post('verify-otp')
  async verifyOtp(@Body('phone') phone: string, @Body('otp') otp: string) {
    return await this.twilioService.verificationCheck(phone, otp);
  }
}
