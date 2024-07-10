// routes/movieRoutes.js
const express = require("express");
const movieController = require("../controllers/movieController");
const router = express.Router();

router.get("/", movieController.getAllMovies);
router.post("/add", movieController.addMovie);
router.delete("/remove", movieController.removeMovie);
router.patch("/update", movieController.updateMovie);

module.exports = router;
