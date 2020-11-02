const Query = {
  user: async (parent, { id }, { User, Cart }) => {
    return await User.findById(id);
  },
  users: async (parent, args, { User }) => {
    return await User.find({});
  },
  activeUser: async (parent, args, { User, activeUser }) => {
    if (!activeUser) return null;

    return await User.findOne({ username: activeUser.username });
  },

  product: async (parent, { id }, { Product }) => {
    return await Product.findById(id);
  },
  products: async (parent, args, { Product }) => {
    return await Product.find({});
  },

  comment: async (parent, { id }, { Comment }) => {
    return await Comment.findById(id);
  },
  comments: async (parent, args, { Comment }) => {
    return await Comment.find({});
  }
};

module.exports = Query;
