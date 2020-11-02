const { ApolloError } = require("apollo-server-core");

module.exports = {
  newProduct: async (
    parent,
    { data: { color, img, header, meta, price } },
    { Product }
  ) => {
    return await new Product({
      color,
      img,
      header,
      meta,
      price
    }).save();
  },
  deleteProduct: async (parent, { data: { id } }, { Product }) => {
    return await Product.findByIdAndDelete(id);
  },
  updateProduct: async (
    parent,
    { data: { id, color, img, header, meta, price } },
    { Product }
  ) => {
    const product = await Product.findById(id);

    if (!product) {
      throw new ApolloError("product does not exists.");
    }

    const updatedProductFields = {
      color: color ? color : product.color,
      img: img ? img : product.img,
      header: header ? header : product.header,
      meta: meta ? meta : product.meta,
      price: price ? price : product.price
    };

    return await Product.findByIdAndUpdate(id, updatedProductFields);
  }
};
