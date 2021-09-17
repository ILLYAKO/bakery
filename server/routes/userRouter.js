const Router = require("express");
const { body } = require("express-validator");
const UserController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = new Router();

/* /user  */
router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  UserController.registration
);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/", authMiddleware, UserController.getUsers);

module.exports = router;
