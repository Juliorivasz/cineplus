// models/premiers
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requerid: false,
  },
  email: {
    type: String,
    requerid: true,
  },
  password: {
    type: String,
    requerid: true,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
