const express = require("express");
const server = express();

server.get("/test", (req, res) => {
  return res.json({ message: "test is working" });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Sever ready on port ", PORT);
});