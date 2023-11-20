const { getplans, createplans } = require("../../database/plans");

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
    const { tipo, price, info } = req.body;
    const create = await createplans({
      tipo,
      price,
      info,
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

module.exports = {
  getPlansControllers,
  postPlansControllers,
};
