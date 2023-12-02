// middleware/authMiddleware.js
module.exports = (req, res, next) => {
  // Aquí puedes implementar la lógica de autenticación, por ejemplo, verificar un token
  // y establecer req.user si el usuario está autenticado
  next();
};
