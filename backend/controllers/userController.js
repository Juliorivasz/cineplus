// controlador del usuario
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

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

  // renovar tokens
  renewToken: async (req, res) => {
    try {
      // Verifica si el usuario está autenticado (puedes ajustar esto según tu implementación)
      if (req.user) {
        // Usuario autenticado, verifica la sesión activa (puedes ajustar esto según tu implementación)
        const sessionActiva = true; // Deberías verificar la sesión en la base de datos o mediante algún otro mecanismo

        if (sessionActiva) {
          // Emite un nuevo token con un tiempo de expiración renovado
          const nuevoToken = jwt.sign(
            { userId: req.user._id, email: req.user.email },
            process.env.JWT_SECRET,
            { expiresIn: tiempoExpiracionInicial }
          );

          // Envía el nuevo token al cliente
          res.status(200).json({ token: nuevoToken });
        } else {
          // Sesión no activa, responde con un error
          res.status(401).json({ error: "Sesión no activa" });
        }
      } else {
        // Usuario no autenticado, responde con un error
        res.status(401).json({ error: "Usuario no autenticado" });
      }
    } catch (error) {
      // Maneja errores
      console.error("Error al renovar el token:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};
