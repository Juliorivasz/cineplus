// routes/movieRoutes.js
const express = require("express");
const movieController = require("../controllers/movieController");

const router = express.Router();

router.get("/", movieController.getAllMovies);
// Puedes agregar más rutas según sea necesario

module.exports = router;
