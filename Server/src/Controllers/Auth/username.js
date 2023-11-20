require("dotenv").config();

const { login } = require("../../database/login");
const { verificarJWT } = require("../../helpers/jwt");

const usernameControllers = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await verificarJWT({
      data: {
        token,
      },
    });
    if (user) {
      const { username } = await login({ email: user.email });
      res.status(200).json({ username });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid credentials" });
  }
};

module.exports = {
  usernameControllers,
};
