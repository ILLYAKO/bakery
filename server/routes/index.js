const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");

router.use("/users", userRouter)


module.exports = router;
