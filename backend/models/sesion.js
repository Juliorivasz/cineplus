const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencia al modelo User
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
