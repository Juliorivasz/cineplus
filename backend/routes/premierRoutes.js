// routes/premierRoutes.js
const express = require("express");
const premierController = require("../controllers/premierController");
const router = express.Router();

router.get("/", premierController.getPremiers);
router.post("/add", premierController.addPremier);
router.delete("/remove", premierController.removePremier);
router.patch("/update", premierController.updatePremier);
module.exports = router;
