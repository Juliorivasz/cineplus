// models/premiers
const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
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
    type: String,
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

const Anime = mongoose.model("animes", animeSchema);

module.exports = Anime;
