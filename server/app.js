const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// dotenv setup
const dotenv = require("dotenv");
dotenv.config();

// database connection
const db = require("./helpers/db");
db();

// database models
const User = require("./models/User");
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const Comment = require("./models/Comment");

// graphql resolvers
const resolvers = require("./graphql/resolvers/index");

// apollo server
const server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers,
  context: ({ req }) => ({
    User,
    Product,
    Cart,
    Comment,
    activeUser: req ? req.activeUser : null
  })
});

// express app
const app = express();

// cors for cross platforma
app.use(cors());

// authentication middleware
app.use((req, res, next) => {
  const token = req.headers["authorization"];

  if (token && token !== "null") {
    try {
      const activeUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.activeUser = activeUser;
    } catch (error) {
      console.error(error);
    }
  }

  next();
});

// applying express app to apollo server
server.applyMiddleware({ app });

// listening on port 4000
app.listen(process.env.PORT || 4001, () => {
  console.log(
    `Server started localhost:${process.env.PORT}${server.graphqlPath}`
  );
});
