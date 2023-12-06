// controlador del usuario
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Session = require("../models/sesion");
const { sendResetEmail } = require("../utils/sendEmail");

module.exports = {
  // iniciar sesion
  loginUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // busca el usuario en la base de datos por el correo
      const admin = await User.findOne({ email });

      // verifica que el usuario existe y compara las contraseñas
      if (admin && (await bcrypt.compare(password, admin.password))) {
        const token = jwt.sign(
          { userId: admin._id, email: admin.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        // fecha de expiracion
        const expirationTime = new Date();
        expirationTime.setHours(expirationTime.getHours() + 24);

        // creo la sesion en la BD
        const sesionActive = await Session.create({
          userId: admin._id,
          expiresAt: expirationTime,
        });

        sesionActive.save();
        // las contraseñas coinciden el admin puede iniciar sesion
        res.status(200).json({ token, name: admin.name });
      } else {
        // las contraseñas no coinciden el inicio falla
        res.status(401).json({ error: "credenciales invalidas" });
      }
    } catch (error) {
      next(error);
    }
  },

  // obtener usuario
  getUser: async (req, res, next) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      // Maneja errores
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  // renovar tokens para mantener la sesion activa
  renewToken: async (req, res) => {
    try {
      // Verifica si el usuario está autenticado (puedes ajustar esto según tu implementación)
      const tokenAuthCurrent = req.headers.authorization.replace("Bearer ", "");
      const user = jwt.verify(tokenAuthCurrent, process.env.JWT_SECRET);

      if (user) {
        const sessionActiva = await Session.findOne({
          userId: user.userId,
          expiresAt: { $gt: new Date() }, // La sesión aún no ha expirado
        });

        if (sessionActiva) {
          // Emite un nuevo token con un tiempo de expiración renovado
          const nuevoToken = jwt.sign(
            { userId: user.userId, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );

          // Envía el nuevo token al cliente
          res.status(200).json({ token: nuevoToken });
        } else {
          // Sesión no activa, responde con un error
          res.status(401).json({ error: "Sesión expirada" });
        }
      } else {
        // Usuario no autenticado, responde con un error
        res
          .status(401)
          .json({ error: "Usuario no autenticado. token vencido o erroneo" });
      }
    } catch (error) {
      // Maneja errores
      console.error("Error al renovar el token:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
  // modificar constraseña
  modifyPassword: async (req, res) => {
    try {
      const tokenAuthCurrent = req.headers.authorization.replace("Bearer ", "");
      const user = jwt.verify(tokenAuthCurrent, process.env.JWT_SECRET);

      if (user) {
        const { newPassword } = req.body;

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const admin = await User.updateOne(
          { name: "Julio Rivas" },
          { password: hashedPassword }
        );

        res.status(200).json({ message: "Constraseña modificada" });
      } else {
        res.status(401).json({ error: "usuario no autenticado" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
  // recuperacion de contraseña
  recoveryPassword: async (req, res) => {
    try {
      const { email, newPassword } = req.body;
      const admin = await User.findOne({ email: email });

      const resetToken = jwt.sign(
        { userId: admin._id },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );

      sendResetEmail(email, resetToken);
      res
        .status(200)
        .json({ message: "Solicitud de restablecimiento enviada con éxito" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
  // restablecimiento de contraseña
  resetPassword: async (req, res) => {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;

      // 1. Validar el token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // 2. Actualizar la contraseña en la base de datos
      const admin = User.findById(decodedToken.userId);

      if (!admin) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      admin.updateOne(
        { _id: decodedToken.userId },
        { password: hashedPassword }
      );

      // 4. Responder con un mensaje de éxito
      res.status(200).json({ message: "Contraseña restablecida con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};
