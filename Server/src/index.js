var express = require("express");
require("dotenv").config();
//const { login } = require("./database/login");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let auth = require("./Routes/auth");

app.use("/auth", auth);

app.listen(process.env.SERVER_PORT, function () {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}!`);
});
