const { Router } = require("express");
const userController = require("../controller/user");
const {
  checkToken,
  checkAccountOwnership,
  checkIfIsOwner,
} = require("../middleware/auth");

const router = Router();

// administrador
router.get("/", checkToken, checkIfIsOwner, userController.getAll);

// privadas
router.put("/:id", checkToken, checkAccountOwnership, userController.update);
router.get("/:id", checkToken, checkAccountOwnership, userController.getByID);

// publicas
router.post("/sign/up", userController.create);
router.post("/sign/in", userController.login);

module.exports = router;
