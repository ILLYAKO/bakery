import $api from "../http";

export default class ProductService {
  static async uploadProduct(data) {
    return $api
      .post("/products/upload", data)
      .then((res) => console.log("uploadProduct-res:", res))
      .catch((err) => console.log("uploadProduct-err:", err));
  }
}
