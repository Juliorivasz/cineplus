// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  // Puedes agregar más campos según sea necesario
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
