require("dotenv").config();

const { login, UserName } = require("../../database/login");
const { verificarJWT } = require("../../helpers/jwt");

const usernameControllers = async (req, res) => {
  try {
    const { token } = req.params;
    const data = await verificarJWT({
      data: {
        token,
      },
    });
    console.log(data);
    if (data) {
      const user = await UserName({ email: data.data.email });
      res.status(200).json({
        address: user.address,
        age: user.age,
        email: user.email,
        emergencyContact: user.emergencyContact,
        gender: user.gender,
        guardianNumber: user.guardianNumber,
        phoneNumber: user.phoneNumber,
        rol: user.rol,
        username: user.username,
      });
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
