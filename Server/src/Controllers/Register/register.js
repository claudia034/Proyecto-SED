require("dotenv").config();
const { register } = require("../../database/register");

const RegisterControllers = async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      email,
      password,
      address,
      age,
      gender,
      emergencyContact,
      guardianNumber,
    } = req.body;

    // Validar que todos los campos estén presentes
    if (
      !fullName ||
      !phoneNumber ||
      !email ||
      !password ||
      !address ||
      !age ||
      !gender ||
      !emergencyContact ||
      !guardianNumber
    ) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const user = await register({
      username: fullName,
      phoneNumber,
      email,
      password,
      address,
      age,
      gender,
      emergencyContact,
      guardianNumber,
    });

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    } else {
      if (user.error) {
        return res.status(401).json({ error: user.error });
      }
    }

    res.json({
      success: user.msg,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
module.exports = { RegisterControllers };
