module.exports = {
  addComment: async (
    parent,
    { data: { user_id, product_id, comment } },
    { Comment, Product, User }
  ) => {
    const product = Product.findById(product_id);
    const user = User.findById(user_id);

    if (!product || !user) {
      throw new ApolloError("error!!");
    }

    return await new Comment({
      user_id,
      product_id,
      comment
    }).save();
  },
  updateComment: async (
    parent,
    { data: { comment_id, newComment } },
    { Comment }
  ) => {
    const comment = await Comment.findById(comment_id);

    if (!comment) {
      throw new ApolloError("comment does not exists.");
    }

    return await Comment.findOneAndUpdate(comment_id, {
      comment: newComment
    });
  },
  deleteComment: async (parent, { data: { comment_id } }, { Comment }) => {
    return await Comment.findByIdAndDelete(comment_id);
  }
};
