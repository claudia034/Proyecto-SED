const { Router } = require("express");
const { LoginControllers } = require("../Controllers/Auth/login");
const { RegisterControllers } = require("../Controllers/Register/register");
const { usernameControllers } = require("../Controllers/Auth/username");
const { profileControllers } = require("../Controllers/Auth/editedprofile");
const { RolControllers } = require("../Controllers/Auth/rol");

const router = Router();

router.post("/login", LoginControllers);
router.get("/logged/:token", usernameControllers);
router.post("/register", RegisterControllers);
router.post("/editedprofile", profileControllers);
router.get("/getrole", RolControllers);


module.exports = router;
