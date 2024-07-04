const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. No se proporcionó un token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guarda la información del usuario en la solicitud
    next(); // Pasa al siguiente middleware o controlador
  } catch (error) {
    return res.status(401).json({ message: "Token no válido o expirado." });
  }
};

module.exports = authMiddleware;
