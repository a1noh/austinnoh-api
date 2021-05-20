const config = require("../config");
const mongoose = require("mongoose");

require("./models/portfolio");
require("./models/blog");

exports.connect = async () => {
  let db = null;
  try {
    db = await mongoose.connect(config.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("db connect");
    return db;
  } catch (err) {
    console.log("could not connect ", err);
  }
};
