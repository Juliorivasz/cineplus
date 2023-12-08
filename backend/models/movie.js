// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    requerid: true,
  },
  image: {
    type: String,
    requerid: true,
  },
  year: {
    type: String,
    requerid: true,
  },
  gender: {
    type: String,
    requerid: true,
  },
  synopsis: {
    type: String,
    requerid: true,
  },
  cast: {
    type: String,
    requerid: false,
  },
  duration: {
    type: String,
    requerid: true,
  },
  playback: {
    type: Object,
    required: true,
  },
  trailer: {
    type: String,
    requerid: false,
  },
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
