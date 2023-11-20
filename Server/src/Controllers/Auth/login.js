require("dotenv").config();
const { login } = require("../../database/login");
const { CreateJWT } = require("../../helpers/jwt");

const LoginControllers = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await login({ email: username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Create token
    const token = CreateJWT({
      data: {
        id: user._id,
        username: user.username,
        email: user.email,
        rol: user.rol,
      },
    });
    // Set cookie and send response
    res.json({
      message: "OK",
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid credentials" });
  }
};
module.exports = { LoginControllers };
