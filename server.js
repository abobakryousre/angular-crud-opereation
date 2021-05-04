const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + "/dist/final-task"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/final-task/index.html"));
});

app.listen(process.env.PORT || 8080, (err) => {
  if (!err) return console.log("server runging on port 8080");
  console.log(err);
});

let arr = [];
app.get("/users", (req, res) => {
  res.json(arr);
});

app.get("/users/search/:name", (req, res) => {
  const name = req.params.name;
  const regx = new RegExp(name);
  const users = arr.filter((user) => user.name.toLowerCase().match(regx));
  if (users.length > 0) return res.json(users);
  res.json(arr);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = arr.find((user) => user.id == id);
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const newUser = arr.filter((user) => user.id != id);
  arr = newUser;
  res.status(200).json(arr);
});

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = getUserId();
  arr.push(user);
  res.status(200).json(arr);
});

app.patch("/users", (req, res) => {
  const updatedUser = req.body;
  const userRefernce = arr.find((usr) => usr.id == updatedUser.id);
  const index = arr.indexOf(userRefernce);
  arr[index] = updatedUser;
  res.status(200).json(arr);
});

const getUserId = () => {
  const lastUser = arr[arr.length - 1];
  if (!lastUser) return 1;
  return lastUser.id + 1;
};
