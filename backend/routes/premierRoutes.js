// routes/movieRoutes.js
const express = require("express");
const premiersController = require("../controllers/premierController");
const router = express.Router();

router.get("/premiers", premiersController.getPremiers);

module.exports = router;
