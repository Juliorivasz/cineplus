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
    requerid: true,
  },
  duration: {
    type: Number,
    requerid: true,
  },
});

const Premier = mongoose.model("premiers", premiersSchema);

module.exports = Premier;
