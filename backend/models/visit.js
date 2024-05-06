// models/premiers
const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
});

const Visit = mongoose.model("visits", visitSchema);

module.exports = Visit;
