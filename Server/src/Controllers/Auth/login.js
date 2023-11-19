require("dotenv").config();
const { login } = require("../../database/login");

const LoginControllers = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const user = await login({ username, password });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid credentials" });
  }
};
module.exports = { LoginControllers };
