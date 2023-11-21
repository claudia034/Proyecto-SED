const { getplans, createplans, editPlans } = require("../../database/plans");

const getPlansControllers = async (req, res) => {
  try {
    const plans = await getplans();
    if (plans) {
      res.status(200).json({ message: "Planes encontrados", plans: plans });
    } else {
      res.status(401).json({ message: "No se encontraron planes", plans: [] });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Error en el servidor" });
  }
};

const postPlansControllers = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const create = await createplans({
      nombre,
      descripcion,
      precio,
    });
    if (create) {
      res.status(200).json({
        message: "Plan agregado",
      });
    } else {
      res.status(401).json({
        message: "Plan no agregado",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Error en el servidor" });
  }
};

const EditPlansControllers = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    //hacer update
    const create = await editPlans({
      nombre,
      descripcion,
      precio,
      _id: req.params.id,
    });
    console.log(create);
    if (create) {
      res.status(200).json({
        message: "Plan agregado",
      });
    } else {
      res.status(401).json({
        message: "Plan no agregado",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Error en el servidor" });
  }
};

module.exports = {
  getPlansControllers,
  postPlansControllers,
  EditPlansControllers,
};
