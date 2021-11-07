const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  message: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  category: {
    type: String,
    enum: ["artist", "album", "labels", "styles"]
  },
  date: Date,
  likes: {
    type: Number,
    default: 0
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artists",
    default: null
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: "Albums",
    default: null
  },
  label: {
    type: Schema.Types.ObjectId,
    ref: "Labels",
    default: null
  },
  style: {
    type: Schema.Types.ObjectId,
    ref: "Styles",
    default: null
  }
});

const commentModel = mongoose.model("Comments", commentSchema);

module.exports = commentModel;
