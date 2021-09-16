const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");


router.use("/users", userRouter)
router.use("/products", productRouter);



module.exports = router;
