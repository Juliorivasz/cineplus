// routes/serieRoutes.js
const express = require("express");
const serieController = require("../controllers/serieController");
const router = express.Router();

router.get("/", serieController.getAllSeries);
router.post("/add", serieController.addSeries);
router.delete("/remove", serieController.removeSeries);
router.patch("/update", serieController.updateSeries);
module.exports = router;
