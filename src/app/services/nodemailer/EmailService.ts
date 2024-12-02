import nodemailer from "nodemailer";
import { MAIL_CONSTRANTS } from "../utils/constrants/index";  // Ajuste o caminho conforme necessário
import { IEmailService } from "../interfaces/email-service/IEmailService";
import path from 'path';

export const emailServiceFactory = (): IEmailService => new EmailService();

export class EmailService implements IEmailService {
  public async sendEmail(html: string, toEmail: string, subject: string): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        service: MAIL_CONSTRANTS.service_email,
        host: MAIL_CONSTRANTS.host_mail,
        port: 587,
        auth: {
          user: MAIL_CONSTRANTS.mail,
          pass: MAIL_CONSTRANTS.mail_pass,
        },
      });
      
      // Envia o e-mail
      await transporter.sendMail({
        from: "Cementizio <sac@cementizio.com>",
        to: toEmail,
        subject: subject,
        html: html,
        attachments: [
          {
            filename: "catalogo_cementizio.pdf",
            path: 'https://drive.google.com/file/d/13UyboX1WYXHD6PcJBdRU8gwA3dVm32mJ/view?usp=sharing'
          },
        ],
      });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      throw error;
    }
  }
}
