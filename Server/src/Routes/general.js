const { Router } = require("express");
const {
  getPlansControllers,
  postPlansControllers,
  EditPlansControllers,
} = require("../Controllers/General/plans");
const { editPlans } = require("../database/plans");

const router = Router();

router.get("/plans", getPlansControllers);
router.post("/plans", postPlansControllers);
router.post("/plans/:id", EditPlansControllers);

module.exports = router;
