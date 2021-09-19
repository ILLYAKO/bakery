const Router = require("express");
const ProductController = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = new Router();

/* /product  */
router.post("/", authMiddleware, ProductController.create);
router.get("/", ProductController.findAll);
router.get("/:id", ProductController.findOne);



module.exports = router;
