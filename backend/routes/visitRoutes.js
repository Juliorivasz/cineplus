// ruta para el controlador visitante
const express = require("express");
const visitRoutes = require("../controllers/visitController");
const router = express.Router();

router.post("/", visitRoutes.saveVisit);
router.get("/allvisit", visitRoutes.getVisit);
module.exports = router;
