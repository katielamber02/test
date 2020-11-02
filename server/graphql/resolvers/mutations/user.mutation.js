const bcrypt = require("bcrypt");
const token = require("../../../helpers/token");
const { ApolloError } = require("apollo-server-core");

module.exports = {
  register: async (
    parent,
    { data: { name, surname, username, email, password, admin } },
    { User, Cart }
  ) => {
    const authBoth = await User.findOne({ username, email });
    const authEmail = await User.findOne({ email });
    const authUsername = await User.findOne({ username });

    if (authBoth) {
      throw new ApolloError("User already exists.");
    } else if (authEmail) {
      throw new ApolloError("Email already taken.");
    } else if (authUsername) {
      throw new ApolloError("Username already taken.");
    } else {
      const newUser = await new User({
        name,
        surname,
        username,
        email,
        password,
        admin
      }).save();

      const user = await User.findOne({ username });

      const userCart = await new Cart({
        user_id: user.id
      });

      userCart.save();

      return { token: token.generate(newUser, "12h") };
    }
  },
  login: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (!user) {
      throw new ApolloError("User does not exists.");
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (validPassword === false) {
      throw new ApolloError("Password is not correct.");
    }

    return { token: token.generate(user, "12h") };
  },
  update: async (
    parent,
    { data: { id, name, surname, username, email, password } },
    { User }
  ) => {
    const user = await User.findById(id);

    if (!user) {
      throw new ApolloError("User does not exists.");
    }

    let newHashedPassword;

    if (password) {
      newHashedPassword = bcrypt.hashSync(password, 10);
    }

    const updatedUserFields = {
      name: name ? name : user.name,
      surname: surname ? surname : user.surname,
      username: username ? username : user.username,
      email: email ? email : user.email,
      password: newHashedPassword ? newHashedPassword : user.password
    };

    return await User.findByIdAndUpdate(id, updatedUserFields);
  }
};
