const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "editor", "user"],
    default: "user",
  },
  username: {
    type: String,
    default: "anonym",
  },
  favorites: {
    artists: [
      {
        type: Schema.Types.ObjectId,
        ref: "Artists",
      },
    ],
    albums: [
      {
        type: Schema.Types.ObjectId,
        ref: "Albums",
      },
    ],
    styles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Styles",
      },
    ],
    labels: [
      {
        type: Schema.Types.ObjectId,
        ref: "Labels",
      },
    ],
  },
  avatar: {
    type: String,
    default: "https://cdn.onlinewebfonts.com/svg/img_258083.png",
  },
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
