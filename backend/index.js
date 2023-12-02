// app.js
const express = require("express");
const dotenvConfig = require("./config/dotenv");

const app = express();

// Configuración de middleware
app.use(express.json());

module.exports = app;
