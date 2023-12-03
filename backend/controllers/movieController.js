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
      const { title, releaseYear } = req.body;

      // Verifica si se proporcionaron los campos necesarios
      if (!title || !releaseYear) {
        return res
          .status(400)
          .json({ error: "Se requieren título y año de lanzamiento" });
      }

      // Crea una nueva película en la base de datos
      const newMovie = await Movie.create({
        title,
        releaseYear,
      });

      res.json(newMovie);
    } catch (error) {
      next(error);
    }
  },
};
