const { Router } = require("express");
const {
  getPlansControllers,
  postPlansControllers,
} = require("../Controllers/General/plans");

const router = Router();

router.get("/plans", getPlansControllers);
router.post("/plans", postPlansControllers);

module.exports = router;
