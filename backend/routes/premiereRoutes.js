// routes/premierRoutes.js
const express = require("express");
const premiereController = require("../controllers/premiereController");
const router = express.Router();

router.get("/", premiereController.getPremieres);
router.post("/add", premiereController.addPremiere);
router.delete("/remove", premiereController.removePremiere);
router.patch("/update", premiereController.updatePremiere);
module.exports = router;
