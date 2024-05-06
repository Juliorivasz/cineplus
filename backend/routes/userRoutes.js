// ruta para el controlador usuario
const express = require("express");
const userRoutes = require("../controllers/userController");
const router = express.Router();

router.post("/login", userRoutes.loginUser);
router.get("/login", userRoutes.authenticated);
router.get("/user", userRoutes.getUser);
router.post("/renew-token", userRoutes.renewToken);
router.post("/modifyPassword", userRoutes.modifyPassword);
router.post("/recoveryPassword", userRoutes.recoveryPassword);
router.post("/recoveryPassword/:token", userRoutes.resetPassword);

module.exports = router;
