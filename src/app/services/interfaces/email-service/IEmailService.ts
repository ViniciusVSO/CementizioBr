export interface IEmailService {
    sendEmail(html: string, toEmail: string, subject: string): Promise<void>
}