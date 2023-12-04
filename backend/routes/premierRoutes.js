// routes/premierRoutes.js
const express = require("express");
const premiersController = require("../controllers/premierController");
const premierController = require("../controllers/premierController");
const router = express.Router();

router.get("/", premiersController.getPremiers);
router.post("/add", premierController.addPremier);
router.delete("/remove", premierController.removePremier);
module.exports = router;
