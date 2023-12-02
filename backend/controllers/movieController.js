// controllers/movieController.js
const Movie = require("../models/Movie");

module.exports = {
  getAllMovies: async (req, res, next) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      next(error);
    }
  },
  // Puedes agregar más funciones según sea necesario
};
