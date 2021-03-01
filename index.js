const express = require("express");
const server = express();
const portfolioRoutes = require("./routes/portfolios");
const config = require("./config/dev");
const mongoose = require("mongoose");
mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connected to DB!");
    }
  }
);

server.use("/api/v1/portfolios", portfolioRoutes);

const PORT = process.env.PORT || 3001;
server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Sever ready on port ", PORT);
});
