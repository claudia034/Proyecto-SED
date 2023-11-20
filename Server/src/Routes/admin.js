const { Router } = require("express");
const { UsersControllers, UpdateUsersControllers } = require("../Controllers/admin/users");
const router = Router();

router.get("/users", UsersControllers);
router.post("/user/:email", UpdateUsersControllers)

module.exports = router;
