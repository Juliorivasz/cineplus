// ruta para el controlador usuario
const express = require("express");
const userRoutes = require("../controllers/userController");
const router = express.Router();

router.get("/", userRoutes.loginUser);

module.exports = router;
