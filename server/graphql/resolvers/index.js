// query resolvers
const Query = require("./queries/Query");
const User = require("./queries/User");
const Product = require("./queries/Product");
const Comment = require("./queries/Comment");

// mutation resolvers
const Mutation = require("./mutations/index");

module.exports = {
  Query,
  User,
  Product,
  Comment,
  Mutation
};
