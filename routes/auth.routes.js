const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "bad email").isEmail(),
    check("password", "Password should be at list 6 symbols.").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
       console.log("Body:", req.body);

      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong registration data",
        });
      }

      const { email, password } = req.body;
      console.log("email:", email);
      const candidate = await User.findOne({ email });
      console.log("Candidate:", candidate);

      if (candidate) {
        res.status(400).json({ message: "User exist." });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: "User created!" });
    } catch (e) {
      return res.status(500).json({ message: "Something wrong, try again!" });
    }
  }
);


router.post("/login", (req, res) => {
  console.log("Log: Hello login!");
  res.send("Hello login!");
});

module.exports = router;
