'use server'

import type nodemailer from "nodemailer"
import transporter from '@/lib/nodemailer'


interface CustomMailOptions extends nodemailer.SendMailOptions {
  template?: string
  context?: { [key: string]: any }
}

interface Form {
  name: string
  email: string
  telephone: string
  company: string
  message: string
}

async function sendEmailAsync(mailOptions: CustomMailOptions) {
  try {
    const emailSent = await transporter.sendMail(mailOptions)
    
    if (emailSent.accepted) {
      console.log({
        to: mailOptions.to,
        message: `Email sent successfully! Template: ${mailOptions.template}`,
        date: new Date().toLocaleString(),
      })
    } else {
      console.log({
        to: mailOptions.to,
        message: `Email error! Template: ${mailOptions.template}`,
        date: new Date().toLocaleString(),
      })
    }
  } catch (error) {
    console.error("Erro ao enviar email:", error)
  }
}

export async function sendContactForm(data: Form) {
  const { name, email, telephone, company, message } = data

  const mailOptions: CustomMailOptions = {
    from: `Website Admin <gvfwebdesign@gmail.com>`,
    to: process.env.TO_EMAIL,
    subject: "Formulário de contato - Website Grupo We Hub",
    template: "contact",
    context: {
      name,
      email,
      telephone,
      company,
      message
    }
  }

  const sending = sendEmailAsync(mailOptions)

  if(!sending) {
    return { status: false }
  }

  return { status: true }
}