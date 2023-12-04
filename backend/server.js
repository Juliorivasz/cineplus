// server.js
const dotenvConfig = require("./config/dotenv");
const mongoose = require("./config/db");
const app = require("./app.js");

// Puedes agregar más configuraciones aquí

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});
