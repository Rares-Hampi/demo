const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: false },
  about: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
