const { Router } = require("express");
const { LoginControllers } = require("../Controllers/Auth/login");

const router = Router();

router.post("/login", LoginControllers);

module.exports = router;
