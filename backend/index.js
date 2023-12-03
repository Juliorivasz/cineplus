// app.js
const express = require("express");
const dotenvConfig = require("./config/dotenv");
const movieRoutes = require("./routes/movieRoutes");
const premierRoutes = require("./routes/premierRoutes");

const app = express();

// Configuración de middleware;
app.use("/", premierRoutes);
app.use("/movie", movieRoutes);
app.use("/premiers", premierRoutes);
app.use("/admin/addMovie", movieRoutes);

module.exports = app;
