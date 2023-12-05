// app.js
const express = require("express");
const dotenvConfig = require("./config/dotenv");
const routes = require("./routes");
const multerMiddleware = require("./middleware/multerMiddleware");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multerMiddleware);
app.use(routes);

module.exports = app;
