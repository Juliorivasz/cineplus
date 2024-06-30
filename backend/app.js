// app.js
const express = require("express");
const dotenvConfig = require("./config/dotenv");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
const upload = require("./middleware/multerMiddleware");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(
  cors({
    origin: "http://localhost:5173", // Reemplaza con el dominio de tu aplicación frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Habilita el envío de cookies de autenticación
  })
);
app.use(routes);

// Ruta para subir imágenes
// app.post('/', upload.single('image'), (req, res) => {
//   const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
//   res.json({ imageUrl: fileUrl });
// });

module.exports = app;
