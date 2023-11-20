const getusers = require("../../database/getusers");
const { updateprofile } = require("../../database/updateprofileadmin");
const { verificarJWT } = require("../../helpers/jwt");

const UsersControllers = async (req, res) => {
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
      if (data.rol > 0) {
        const users = await getusers();
        res.status(200).json({
          success: true,
          message: "Usuarios obtenidos",
          users,
        });
      } else {
        res.status(401).json({
          message: "No tienes permisos para ver esta informacion",
          users: [],
        });
      }
    } else {
      res.status(401).json({ message: "Error al actualizar" });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Error en el servidor" });
  }
};

const UpdateUsersControllers = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const tokenParts = token.split(" ");
    const tokenValue = tokenParts[1];
    const { data } = await verificarJWT({
      data: {
        token: tokenValue,
      },
    });
    console.log(req.params);
    if (data) {
      if (data.rol > 0) {
        const updatedUser = await updateprofile({
          data: {
            email: req.params.email,
          },
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
        res.status(401).json({
          message: "No tienes permisos para editar esta informacion",
          users: [],
        });
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
  UsersControllers,
  UpdateUsersControllers,
};
