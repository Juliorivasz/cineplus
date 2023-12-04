// routes/movieRoutes.js
const express = require("express");
const movieController = require("../controllers/movieController");
const router = express.Router();

router.get("/", movieController.getAllMovies);
router.post("/admin/addMovie", movieController.addMovie);
// Puedes agregar más rutas según sea necesario

module.exports = router;
