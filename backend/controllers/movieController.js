// controllers/movieController.js
const Movie = require("../models/Movie");

module.exports = {
  getAllMovies: async (req, res, next) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  addMovie: async (req, res, next) => {
    try {
      const { title, year } = req.body;

      // Verifica si se proporcionaron los campos necesarios
      if (!title || !year) {
        return res
          .status(400)
          .json({ error: "Se requieren título y año de lanzamiento" });
      }

      // Crea una nueva película en la base de datos
      const newMovie = await Movie.create({
        title,
        year,
      });

      res.json(newMovie);
    } catch (error) {
      next(error);
    }
  },
};
