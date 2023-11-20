const { Router } = require("express");
const { UsersControllers, UpdateUsersControllers } = require("../Controllers/admin/users");
const router = Router();

router.get("/users", UsersControllers);
router.post("/user/edit", UpdateUsersControllers)

module.exports = router;
