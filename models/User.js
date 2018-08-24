const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  facebookId: String
});

mongoose.model("User", UserSchema, "users");
