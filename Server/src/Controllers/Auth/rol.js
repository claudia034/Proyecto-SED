require("dotenv").config();
const { rol } = require("../../database/rol");
const { verificarJWT } = require("../../helpers/jwt");

const RolControllers = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const tokenParts = token.split(" ");
    const tokenValue = tokenParts[1];
    const { data } = await verificarJWT({
      data: {
        token: tokenValue,
      },
    });
    const user = await rol({
      data: {
        email: data.email,
      },
    });
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid credentials", user: { rol: -1 } });
    }

    res.json({
      message: "OK",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid credentials", user: { rol: -1 } });
  }
};
module.exports = { RolControllers };
