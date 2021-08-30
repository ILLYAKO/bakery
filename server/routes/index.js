const Router = require("express");
const router = new Router();

// const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");
// const brandRouter = require("./brandRouter");
// const typeRouter = require("./typeRouter");

router.use("/users", userRouter);

// router.use("/user", () => {
//   console.log("Router");
// });

router.use("/", (req, res) => {
  res.status(200).json({ message: "The router is working!" });
});
// router.use("/type", typeRouter);
// router.use("/brand", brandRouter);
// router.use("/device", deviceRouter);

module.exports = router;
