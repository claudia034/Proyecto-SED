const jwt = require("jsonwebtoken");
require("dotenv").config();

function CreateJWT({ data }) {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "1h" });
}

function verificarJWT({ data }) {
  const { token } = data;

  if (!token) {
    return false;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, email) => {
    if (err) {
      return false;
    }

    return {
      email,
    };
  });
}

module.exports = {
  CreateJWT,
  verificarJWT,
};
