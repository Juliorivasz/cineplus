const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const createDefaultUser = async (req, res, next) => {
  try {
    // busco si existe el correo del usuario
    const existingUser = await User.findOne({ email: process.env.EMAIL_ADMIN });

    // si no existe crea el usuario principal
    if (!existingUser) {
      //hashea el password
      const hashedPassword = await bcrypt.hash(
        process.env.PASSWORD_DEFAULT,
        10
      );

      // crea el usuario
      const defaultUser = new User({
        name: "Julio Rivas",
        email: process.env.EMAIL_ADMIN,
        password: hashedPassword,
      });

      // guarda el usuario creado
      await defaultUser.save();
      console.log("Usuario principal creado exitosamente.");
    } else {
      console.log("El usuario principal ya existe.");
    }
  } catch (error) {
    console.error("Error al crear el usuario principal:", error);
  }
};

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  createDefaultUser();
  console.log("Conectado a la base de datos");
});

mongoose.connection.on("error", (err) => {
  console.error("Error de conexión a la base de datos:", err);
});

module.exports = mongoose;
