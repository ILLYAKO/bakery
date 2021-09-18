import $api from "../http";

export default class ProductService {
  static async uploadProduct(data) {
    return $api
      .post("/product", data)
      .then((res) => console.log("uploadProduct-res:", res))
      .catch((err) => console.log("uploadProduct-err:", err));
  }

  static async getAllProducts() {
    return $api
      .get("/product")
      .then((res) => {
        return res;
      })
      .catch((err) => console.log("getAllProducts-err:", err));
  }

  static async findOne(id) {
    return $api
      .get(`/product/${id}`)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log("getAllProducts-err:", err));
  }
}
