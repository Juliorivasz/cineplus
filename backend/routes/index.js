// routes/movieRoutes.js
const express = require("express");
const movieRoutes = require("./movieRoutes");
const premiereRoutes = require("./premiereRoutes");
const serieRoutes = require("./serieRoutes");
const animeRoutes = require("./animeRoutes");
const userRoutes = require("./userRoutes");
const visitRoutes = require("./visitRoutes");
const router = express.Router();

// ruta padre
router.use("/", visitRoutes);
router.use("/admin", userRoutes);
router.use("/movie", movieRoutes);
router.use("/premiere", premiereRoutes);
router.use("/serie", serieRoutes);
router.use("/anime", animeRoutes);

module.exports = router;
