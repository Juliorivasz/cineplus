// routes/movieRoutes.js
const express = require("express");
const movieRoutes = require("./movieRoutes");
const premierRoutes = require("./premierRoutes");
const userRoutes = require("./userRoutes");
const router = express.Router();

// ruta padre
router.use("/admin", userRoutes);
router.use("/movie", movieRoutes);
router.use("/premier", premierRoutes);

module.exports = router;
