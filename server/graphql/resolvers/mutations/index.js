const user = require("./user.mutation");
const product = require("./product.mutation");
const cart = require("./cart.mutation");
const comment = require("./comment.mutation");

module.exports = {
  ...user,
  ...product,
  ...cart,
  ...comment
};
