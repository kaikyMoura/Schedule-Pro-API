import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import sgMail from '@sendgrid/mail';
import { LoggerService } from 'src/common/loggers/logger.service';
import { Twilio } from 'twilio';
import { MailInput } from './dtos/mail.input';

@Injectable()
export class NotificationService {
  private readonly twilioClient: Twilio;
  private readonly verifySid: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
  ) {
    if (
      !configService.get('TWILIO_ACCOUNT_SID') ||
      !configService.get('TWILIO_AUTH_TOKEN')
    ) {
      throw new BadRequestException(
        'Twilio Account SID and Auth Token are not configured',
      );
    }

    if (!configService.get('TWILIO_VERIFY_SERVICE_SID')) {
      throw new BadRequestException(
        'Twilio Verify Service SID is not configured',
      );
    }

    this.twilioClient = new Twilio(
      configService.get('TWILIO_ACCOUNT_SID'),
      configService.get('TWILIO_AUTH_TOKEN'),
    );

    const sendgridKey = configService.get<string>('SENDGRID_API_KEY');

    if (sendgridKey) {
      sgMail.setApiKey(sendgridKey);
    }

    this.verifySid = configService.get('TWILIO_VERIFY_SERVICE_SID')!;
  }

  private async send(msg: sgMail.MailDataRequired) {
    await sgMail.send(msg);
  }

  /**
   * Sends a verification code to a given phone number using the Twilio Verify service.
   *
   * @param {string} to - The phone number to send the verification to.
   *
   * @returns {Promise<{status: string, message: string}>} - A promise that resolves to an object containing the status of the verification and a message.
   *
   * @throws {BadRequestException} - Thrown if the phone number is not provided.
   */
  async sendVerificationCode(
    to: string,
  ): Promise<{ status: string; message: string }> {
    if (!to) {
      throw new BadRequestException('Phone number is required');
    }

    const verification = await this.twilioClient.verify.v2
      .services(this.verifySid)
      .verifications.create({ to, channel: 'sms' });

    return {
      status: verification?.status,
      message: `OTP sent successfully to ${to}`,
    };
  }

  /**
   * Verifies a given phone number and OTP using the Twilio Verify service.
   *
   * @param {string} to - The phone number to verify.
   * @param {string} code - The OTP sent to the phone number.
   *
   * @returns {Promise<{success: boolean, message: string}>} - A promise that resolves to an object containing a boolean indicating whether the verification was successful and a message.
   *
   * @throws {BadRequestException} - Thrown if either the phone number or OTP is not provided.
   */
  async checkVerificationCode(
    to: string,
    code: string,
  ): Promise<{ success: boolean; message: string }> {
    this.logger.log(`Verifyng OTP for: ${to}`);
    if (!to || !code) {
      this.logger.warn('Missing required parameters');
      throw new BadRequestException('Missing required parameters');
    }

    if (!this.verifySid) {
      this.logger.warn('Twilio Verify Service SID is not configured');
      throw new BadRequestException(
        'Twilio Verify Service SID is not configured',
      );
    }

    const verificationCheck = await this.twilioClient.verify.v2
      .services(this.verifySid)
      .verificationChecks.create({ code, to });

    if (verificationCheck.status === 'approved') {
      return { success: true, message: 'The code is valid' };
    }

    return { success: false, message: 'Invalid or expired code' };
  }

  /**
   * Sends an email using SendGrid.
   *
   * @param data - The data to send in the email.
   * @returns A promise that resolves when the email has been sent.
   */
  async sendMail(data: MailInput): Promise<void> {
    const msg: sgMail.MailDataRequired = {
      to: data.to,
      from: data.from ?? this.configService.get('SENDGRID_SENDER_EMAIL')!,
      subject: data.subject ?? '',
      content: [
        {
          type: 'text/html',
          value: data.html!,
        },
      ],
      ...(data.text && { text: data.text }),
    };

    await this.send(msg);
  }
}
