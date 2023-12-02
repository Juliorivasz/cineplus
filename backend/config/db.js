// config/db.js
const mongoose = require("mongoose");

const dbUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cineplus";

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Conectado a la base de datos");
});

mongoose.connection.on("error", (err) => {
  console.error("Error de conexión a la base de datos:", err);
});

module.exports = mongoose;
