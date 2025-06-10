import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { SendMailDto } from './dtos/send-mail.dto';

@Injectable()
export class MailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_KEY!);
  }

  static async send(msg: sgMail.MailDataRequired) {
    await sgMail.send(msg);
  }

  /**
   * Send an email using SendGrid.
   *
   * @param data - The data to send in the email.
   * @returns A promise that resolves when the email has been sent.
   */
  async sendMail(data: SendMailDto): Promise<void> {
    const msg: sgMail.MailDataRequired = {
      to: data.to,
      from: process.env.SENDGRID_SENDER_EMAIL!,
      subject: data.subject ?? '',
      content: [
        {
          type: 'text/html',
          value: data.html!,
        },
      ],
      ...(data.text && { text: data.text }),
    };

    await sgMail.send(msg);
  }
}
