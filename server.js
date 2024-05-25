const express = require("express");
// console.log(express);

const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());
// console.log(app);

const posts = [
  {
    name: "bichu",
    age: 23,
  },
  {
    name: "alvin",
    age: 24,
  },
];
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  //Authenticate user
});

app.listen(5000);
