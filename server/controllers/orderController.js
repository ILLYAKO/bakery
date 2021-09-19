const uuid = require("uuid");
const { validationResult } = require("express-validator");
const { cloudinary } = require("../service/cloudinaryService");
const multer = require("multer");
const orderService = require("../service/orderService");

class OrderController {
  async create(req, res, next) {
        try {
          // const errors = validationResult(req);
          // if (!errors.isEmpty()) {
          //   return next(ApiError.BadRequest("Validation error", errors));
          // }
          const { order, cart } = req.body;
          const orderData = await orderService.create(order, cart);
  
          return res.json(orderData);
        } catch (e) {
          next(e);
        }



  }
}
module.exports = new OrderController();
