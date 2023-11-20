const { updateprofile } = require("../../database/updateprofile");
const { verificarJWT } = require("../../helpers/jwt");

const profileControllers = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const tokenParts = token.split(" ");
    const tokenValue = tokenParts[1];
    const { data } = await verificarJWT({
      data: {
        token: tokenValue,
      },
    });
    console.log(data);
    if (data) {
      const updatedUser = await updateprofile({
        data,
        body: req.body,
      });
      console.log(updatedUser);
      if (updatedUser.success) {
        res.status(200).json({
          success: true,
          message: "Perfil actualizado exitosamente",
        });
      } else {
        res.status(401).json({ message: updatedUser.error });
      }
    } else {
      res.status(401).json({ message: "Error al actualizar" });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Error en el servidor" });
  }
};

module.exports = {
  profileControllers,
};
