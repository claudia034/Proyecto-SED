var express = require("express");
require("dotenv").config();
const cors = require("cors");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configura CORS para permitir solicitudes desde localhost y tu dominio específico
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization"
  );
  res.status(200).send();
});

let auth = require("./Routes/auth");

app.use("/auth", auth);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${process.env.SERVER_PORT}`);
});

