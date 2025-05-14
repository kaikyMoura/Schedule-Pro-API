import MailService from '@sendgrid/mail';

MailService.setApiKey(process.env.SENDGRID_API_KEY as string);

export class EmailService {
  async sendResetPasswordEmail(
    email: string,
    name: string,
    token: string,
  ): Promise<void> {
    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    const msg = {
      to: email,
      from: '',
      subject: 'Reset Password',
      html: `
            <p>Hello ${name},</p>
            <p>You have requested to reset your password.</p>
            <br />
            <p>Please click the link below to reset your password:</p>
            <p><a href="${resetLink}">Reset Password</a></p>
            <br />
            <p>This link will expire in 1 hour.</p>
            <br />
            <p>If you did not request this, please ignore this email.</p>
        `,
    };

    await MailService.send(msg);
  }
}
