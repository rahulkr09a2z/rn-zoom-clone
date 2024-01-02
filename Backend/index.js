const express = require("express");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(PORT, () => {
  console.log(`Zoom Clone API started on ${PORT}`);
});
