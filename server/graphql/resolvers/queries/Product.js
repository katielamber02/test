const Product = {
  comments: async (parent, args, { Comment }) => {
    return await Comment.find({ product_id: parent.id }).sort({
      createdAt: "desc"
    });
  }
};

module.exports = Product;
