// models/premiers
const mongoose = require("mongoose");

const premiersSchema = new mongoose.Schema({
  title: {
    type: String,
    requerid: true,
  },
  image: {
    type: String,
    requerid: true,
  },
  year: {
    type: Number,
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
    type: Number,
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

const Premier = mongoose.model("premiers", premiersSchema);

module.exports = Premier;
