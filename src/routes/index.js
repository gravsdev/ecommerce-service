const { Router } = require("express");
const user = require("./user.router");

const router = Router();

router.use("api/e/user", user);

module.exports = router;
