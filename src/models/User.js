const mongoose = require("../config/db");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, require: true },
  password: { type: String, require: true, select: false },
  name: { type: String, require: true },
  lastname: { type: String, require: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
