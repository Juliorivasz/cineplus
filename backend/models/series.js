// models/premiers
const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
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

const Series = mongoose.model("series", seriesSchema);

module.exports = Series;
