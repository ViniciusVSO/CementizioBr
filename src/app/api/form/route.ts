import { emailServiceFactory } from "@/app/services/nodemailer/EmailService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const html = `
      <h1>Catálogo Cementizio</h1>
      <p>Olá, ${body.nome}. Aqui está nosso catálogo completo e atualizado!</p>
    `;

    const emailService = emailServiceFactory();

    await emailService.sendEmail(
      html,
      body.email,
      "Confirmação de Dados Recebidos"
    );

    const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbxccKkWcfZe0uM6DMkHbsZSXUOxTk-DlFJmdjqExwtF2N0yJIP30CxyZAQ9hvuYHdMJ8w/exec";  // Substitua pela URL do seu Google Apps Script
    const response = await fetch(googleAppsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), 
    });

    if (!response.ok) {
        const text = await response.text(); 
        console.error("Erro na requisição:", text);
        throw new Error("Erro ao enviar dados para a planilha.");
      }
      

    return NextResponse.json({ message: "Bateu" }, {status: 200});

  } catch (error) {
    
    console.log(error);
    return NextResponse.json({message: "Erro"}, {status: 400})
  }

  

}