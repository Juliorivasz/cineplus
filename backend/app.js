// app.js
const express = require("express");
const dotenvConfig = require("./config/dotenv");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
