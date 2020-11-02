const User = {
  cart: async (parent, args, { Cart }) => {
    return await Cart.findOne({ user_id: parent.id });
  }
};

module.exports = User;
