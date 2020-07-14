const nodemailer = require('nodemailer');
const { emailConfig } = require('../config');
// email sender function
exports.sendEmail = function(req, res) {
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'example@gmail.com',
      pass: 'password'
    }
  });
  // Definimos el email
  var mailOptions = {
    from: 'Remitente',
    to: 'destinatario@gmail.com',
    subject: 'Asunto',
    text: 'Contenido del email'
  };
  // Enviamos el email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send(500, err.message);
    } else {
      console.log('Email sent');
      res.status(200).jsonp(req.body);
    }
  });
};

class Mailer {
  transporter;
  emailSender;
  constructor(config) {
    let error = new Error();

    try {
      console.log(config);
      if (config.email != '' && config.password != '' && config.service != '') {
        this.emailSender = config.email;
        this.transporter = nodemailer.createTransport({
          service: config.service,
          auth: {
            user: config.email,
            pass: config.password
          }
        });
      } else {
        error.message = 'Datos de configuración no proporcionados email, password, service,';
        throw error;
      }
    } catch (error) {
      error.message = 'Datos de configuración no proporcionados email, password, service,';
      throw error;
    }
  }

  async sendMail(receptor, mensaje, subject, body) {
    //const customError = new Error();
    try {
      const mailOptions = {
        from: this.emailSender,
        to: receptor,
        subject,
        text: mensaje
      };
      const mail = await this.transporter.sendMail(mailOptions);
      console.log(mail);
      if (!mail) {
        return false;
      } else {
        return mail;
      }
    } catch (error) {
      throw error;
    }
  }
}

const mailer = new Mailer(emailConfig);

async function main() {
  await mailer.sendMail('esucre@outlook.es', 'Emilio es cueco', 'emilio maricón');
}

main();
/* module.exports.mailer = new Mailer(emailConfig);
module.exports.Mailer = Mailer;
 */
