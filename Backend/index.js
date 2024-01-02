const express = require("express");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const users = [];
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("hello world");
});

const addUser = (userName, roomId) => {
  users.push({
    userName: userName,
    roomId: roomId,
  });
};
const userLeave = (userName) => {
  users = users.filter((user) => user.userName != userName);
};
const getRoomUsers = (roomId) => {
  return users.filter((user) => user.roomId === roomId);
};

io.on("connection", (socket) => {
  console.log("Someone Connected");
  socket.on("join-room", ({ roomId, userName }) => {
    console.log("user Joined ", roomId, userName);
    socket.join(roomId);
    addUser(userName, roomId);
    socket.to(roomId).emit("user-connected", userName);

    io.to(roomId).emit("all-users", getRoomUsers(roomId));

    socket.on("disconnect", () => {
      console.log("disconnected");
      socket.leave(roomId);
      userLeave(userName);
      io.to(roomId).emit("all-users", getRoomUsers(roomId));
    });
  });
});

server.listen(PORT, () => {
  console.log(`Zoom Clone API started on ${PORT}`);
});
