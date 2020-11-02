const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb://katielamber02:begginYou6342@ds117739.mlab.com:17739/ecommerce",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
      console.log(`DB Connection Error: ${err.message}`);
    });
};
