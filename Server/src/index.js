var express = require("express");
require("dotenv").config();
//const { login } = require("./database/login");
const cors = require("cors")({ origin: true });

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors);

app.options("*", (req, res) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://xcb8vcqb-5173.use2.devtunnels.ms"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization"
  );
  res.status(200).send();
});

let auth = require("./Routes/auth");

app.use("/auth", auth);

app.listen(process.env.SERVER_PORT, function () {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}!`);
});
