// ruta para el controlador usuario
const express = require("express");
const userRoutes = require("../controllers/userController");
const router = express.Router();

router.get("/login", userRoutes.loginUser);
router.post("/renew-token", userRoutes.renewToken);

module.exports = router;
