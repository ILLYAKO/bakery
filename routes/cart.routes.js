const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

router.post("/add", [check("title").exists()], async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
      return res.status(400).json({
        errors: errors.array(),
        message: "wrong cart data",
      });
    }

    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      res.status(400).json({ message: "User exist." });
    }

    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      id: userId,
      email,
      password: hashedPassword,
      status: "customer",
      cart: [],
    });

    await user.save().then((result) => {
      console.log("User was created!");
    });

    res.status(201).json({ message: "User created!" });
  } catch (e) {
    return res.status(500).json({ message: "Something wrong, try again!" });
  }
});

router.post(
  "/login",
  [
    check("email", "Enter email").normalizeEmail().isEmail(),
    check("password", "Enter password").exists(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong login data",
        });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User is not exist" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Wrong password, try again!" });
      }

      const token = jwt.sign({ uderId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      return res.status(500).json({ message: "Something wrong, try again!" });
    }
  }
);

module.exports = router;
