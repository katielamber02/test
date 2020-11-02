const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  product_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
