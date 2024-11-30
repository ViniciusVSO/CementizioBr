import { IEmailService } from "../interfaces/email-service/IEmailService";
import { MAIL_CONSTRANTS } from "../utils/constrants";
import * as fs from "fs"; 
import * as path from "path"; 

export const emailServiceFactory = (): IEmailService => new EmailService();

export class EmailService implements IEmailService {
  public async sendEmail(html: string, toEmail: string): Promise<void> {
    try {
      const nodemailer = require("nodemailer");

      const transporter = nodemailer.createTransport({
        service: MAIL_CONSTRANTS.service_email,
        host: MAIL_CONSTRANTS.host_mail,
        port: 465,
        auth: {
          user: MAIL_CONSTRANTS.mail,
          pass: MAIL_CONSTRANTS.mail_pass,
        },
      });

      const pdfPath = path.resolve(__dirname, "../assets/pdf/Catálogo CEMENTIZIO.pdf");
      const pdfBuffer = fs.readFileSync(pdfPath);

      await transporter.sendMail({
        from: "Cementizio <comercial@cementizio.com.br>",
        to: toEmail,
        subject: "Aqui está o catálogo completo da Cementizio", 
        html: html,
        attachments: [
          {
            filename: "catalogo-completo.pdf",
            content: pdfBuffer,
            contentType: "application/pdf",
          },
        ],
      });

      return;
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      throw error;
    }
  }
}
