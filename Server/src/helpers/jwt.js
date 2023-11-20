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

  return jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) {
      console.log(err);
      return false;
    }
    return {
      data,
    };
  });
}

module.exports = {
  CreateJWT,
  verificarJWT,
};
