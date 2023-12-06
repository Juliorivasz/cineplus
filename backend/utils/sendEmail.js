// En emailUtils.js
const nodemailer = require("nodemailer");

function sendResetEmail(email, token) {
  // Configura el transporte de correo electrónico
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "julioandresrivas@gmail.com",
      pass: "prfd ijsi xpxt bwki",
    },
  });

  // Opciones del correo electrónico
  const mailOptions = {
    from: "julioandresrivas@gmail.com",
    to: email,
    subject: "Restablecimiento de Contraseña",
    html: `<p>Para restablecer tu contraseña, haz clic en el siguiente enlace: <a href="${process.env.CLIENT_URL}/admin/recoveryPassword/${token}">recuperar contraseña</a></p>`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo electrónico:", error);
    } else {
      console.log("Correo electrónico enviado:", info.response);
    }
  });
}
module.exports = { sendResetEmail };
