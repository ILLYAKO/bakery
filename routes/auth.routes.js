const { Router } = require("express");
const router = Router();

router.post("/register", (req, res) => {
  console.log("Log: Hello register!");
  res.send("Hello register!");
});

router.post("/login", (req, res) => {
  console.log("Log: Hello login!");
  res.send("Hello login!");
});

module.exports = router;
