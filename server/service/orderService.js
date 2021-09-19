const OrderModel = require("../db/models/orderModel");
const { cloudinary } = require("./cloudinaryService");

class OrderService {
  // title, imageId, productPrice, vendor, segment
  async create(order, cart) {
    order = JSON.stringify(order);
    cart = JSON.stringify(cart);
    console.log("-->order ", order);
    console.log("-->cart ", cart);

    const result = await OrderModel.create({
      order,
      cart,
    });
    return result;
  }
}
module.exports = new OrderService();
