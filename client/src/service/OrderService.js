import $api from "../http";

export default class OrderService {
  static async uploadOrder(order, cart) {
    return $api
      .post("/order", { order, cart })
      .then((res) => console.log("uploadOrder-res:", res))
      .catch((err) => console.log("uploadOrder-err:", err));
  }
}
