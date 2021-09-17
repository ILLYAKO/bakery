const ProductModel = require("../db/models/productModel");
const { cloudinary } = require("../service/cloudinaryService");

class ProductService {
  // title, imageId, productPrice, vendor, segment
  async create(title, imageId, productPrice, vendor, segment, description) {

    const product = await ProductModel.create({
      title,
      imageId,
      productPrice,
      vendor,
      segment,
      description,
    });
    return product;
  }

  async findAll() {
    const products = await ProductModel.findAll();
    let newProducts = {};
    if (products) {
      newProducts = products.map((product) => {
        return {
          ...product,
          imageUrl: cloudinary.url(
            `bakery/products/${product.segment}/${product.imageId}.jpg`,
            { height: 288, width: 412, crop: "fill" }
          ),
        };

        // return {
        //   ...product,
        //   imageTag: cloudinary.image(
        //     `bakery/products/${product.segment}/${product.imageId}.jpg`,
        //     { height: 288, width: 412, crop: "fill" }
        //   ),
        // };
      });
    }
    return newProducts;
  }
}
module.exports = new ProductService();
