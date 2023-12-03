// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
