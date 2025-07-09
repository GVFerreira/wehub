import nodemailer from 'nodemailer'
import handlebars from 'nodemailer-express-handlebars'
import path from 'path'

// Configurar o transporte de e-mail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gvfwebdesign@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
})

// Configuração do handlebars para templates
transporter.use(
  'compile',
  handlebars({
    viewEngine: {
      extname: '.hbs', // Extensão dos arquivos de template
      layoutsDir: path.resolve('./templates/'), // Pasta de layouts (se houver)
      defaultLayout: false, // Desativar layout padrão se não estiver usando
      partialsDir: path.resolve('./templates/'), // Pasta de partials
    },
    viewPath: path.resolve('./templates/'), // Caminho para os templates
    extName: '.hbs', // Extensão do arquivo de template
  })
)

export default transporter