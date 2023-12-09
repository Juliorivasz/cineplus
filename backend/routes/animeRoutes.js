// routes/animeRoutes.js
const express = require("express");
const animeController = require("../controllers/animeController");
const router = express.Router();

router.get("/", animeController.getAllAnimes);
router.post("/add", animeController.addAnime);
router.delete("/remove", animeController.removeAnime);
router.patch("/update", animeController.updateAnime);
module.exports = router;
