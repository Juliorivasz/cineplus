// models/premiers
const mongoose = require("mongoose");

const premiersSchema = new mongoose.Schema({
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
    required: true,
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
    required: true,
  },
  typeContent: {
    type: String,
    required: true,
  },
});

const Premier = mongoose.model("premiers", premiersSchema);

module.exports = Premier;
