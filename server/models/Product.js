const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  color: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  },
  meta: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Product", ProductSchema);
