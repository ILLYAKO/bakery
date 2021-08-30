const Router = require("express");
const router = new Router();
const UserController = require("../controllers/userController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  UserController.registration
);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/users", authMiddleware, UserController.getUsers);

// router.use("/", (req, res) => {
//   res.status(200).json({ message: "The USER is working!" });
// });

module.exports = router;
