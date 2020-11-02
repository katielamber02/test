const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  cart: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("Cart", CartSchema);
