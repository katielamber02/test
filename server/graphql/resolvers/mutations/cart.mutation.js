const _ = require("lodash");

module.exports = {
  addProductToCart: async (
    parent,
    { data: { user_id, id, color, img, header, meta, price } },
    { Cart }
  ) => {
    const currentCart = await Cart.findOne({ user_id });

    const addedItem = { id, color, img, header, meta, price };

    const newCart = [...currentCart.cart, addedItem];

    await Cart.findOneAndUpdate(
      { user_id },
      {
        cart: newCart
      }
    );

    return await Cart.findOne({ user_id });
  },
  deleteProductToCart: async (parent, { data: { user_id, id } }, { Cart }) => {
    const currentCart = await Cart.findOne({ user_id });
    const deletedItem = currentCart.cart.find(item => item.id === id);

    const updatedCart = _.remove(currentCart.cart, e => e !== deletedItem);

    const newCart = [...updatedCart];

    await Cart.findOneAndUpdate(
      { user_id },
      {
        cart: newCart
      }
    );

    return await Cart.findOne({ user_id });
  }
};
