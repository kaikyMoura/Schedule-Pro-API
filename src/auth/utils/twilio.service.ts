import { BadRequestException, Logger } from '@nestjs/common';
import { Twilio } from 'twilio';

export class TwilioService {
  private readonly twilioClient: Twilio;
  private readonly verifySid: string;
  private readonly logger = new Logger(TwilioService.name);

  constructor() {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      throw new BadRequestException(
        'Twilio Account SID and Auth Token are not configured',
      );
    }

    if (!process.env.TWILIO_VERIFY_SERVICE_SID) {
      throw new BadRequestException(
        'Twilio Verify Service SID is not configured',
      );
    }

    this.twilioClient = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );

    this.verifySid = process.env.TWILIO_VERIFY_SERVICE_SID!;
  }
  /**
   * Creates a verification for a given phone number using the Twilio Verify service.
   *
   * @param {string} to - The phone number to send the verification to.
   *
   * @returns {Promise<{status: string, message: string}>} - A promise that resolves to an object containing the status of the verification and a message.
   *
   * @throws {BadRequestException} - Thrown if the phone number is not provided.
   */
  async createVerification(
    to: string,
  ): Promise<{ status: string; message: string }> {
    console.log('Enviando OTP para:', to, 'SID:', this.verifySid);
    if (!to) {
      throw new BadRequestException('Phone number is required');
    }

    const verification = await this.twilioClient.verify.v2
      .services(this.verifySid)
      .verifications.create({ to, channel: 'sms' });

    return {
      status: verification?.status,
      message: `The OTP has been sent to ${to}`,
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
  async verificationCheck(
    to: string,
    code: string,
  ): Promise<{ success: boolean; message: string }> {
    this.logger.log(
      'Verifyng OTP for:',
      to,
      'SID:',
      this.verifySid,
      'code:',
      code,
    );
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
}
