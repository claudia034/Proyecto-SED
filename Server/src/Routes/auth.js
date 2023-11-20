const { Router } = require("express");
const { LoginControllers } = require("../Controllers/Auth/login");
const { RegisterControllers } = require("../Controllers/Register/register");
const { usernameControllers } = require("../Controllers/Auth/username");

const router = Router();

router.post("/login", LoginControllers);
router.get("/logged/:token", usernameControllers);
router.post("/register", RegisterControllers);

module.exports = router;
