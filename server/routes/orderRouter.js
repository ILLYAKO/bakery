const Router = require("express");
const orderController = require("../controllers/orderController");
const router = new Router();

/* /order  */
router.post("/",  orderController.create);

module.exports = router;
