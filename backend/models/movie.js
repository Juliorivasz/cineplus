// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  cast: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: true,
  },
  playback: {
    type: Object,
    required: true,
  },
  trailer: {
    type: String,
    required: false,
  },
  typeContent: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
