// app.js
const express = require("express");
const dotenvConfig = require("./config/dotenv");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // Reemplaza con el dominio de tu aplicación frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Habilita el envío de cookies de autenticación (si las usas)
  })
);
app.use(routes);

module.exports = app;
