// controlador del usuario
const bcrypt = require("bcrypt");
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
        // las contraseñas coinciden el admin puede iniciar sesion
        res.json({ message: "Inicio de sesion Exitoso" });
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
      next(error);
    }
  },
};
