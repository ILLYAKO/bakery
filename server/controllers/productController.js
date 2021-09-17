const uuid = require("uuid");
const { validationResult } = require("express-validator");
const { cloudinary } = require("../service/cloudinaryService");
const multer = require("multer");
const productService = require("../service/productService");

class ProductController {
  async create(req, res, next) {
    const uploadMulter = multer().single("file");
    uploadMulter(req, res, async (err) => {
      if (err instanceof multer.MulterError) console.log("MulterError", err);
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return next(ApiError.BadRequest("Validation error", errors));
        }
        const punlic_id = uuid.v4();
        const {
          file,
          body: { name, segment, price, vendor, description },
        } = req;

        const uploadedResponse = cloudinary.uploader
          .upload_stream(
            {
              public_id: punlic_id,
              folder: `bakery/products/${segment}`,
              resource_type: "image",
            },
            (error, result) => {
              if (!error && result.url) {
                req.body.imageURL = result.url;
                next();
              } else {
                req.body.imageURL = "";
                next();
              }
            }
          )
          .end(file.buffer);

        const productAdded = await productService.create(
          name,
          punlic_id,
          price,
          vendor,
          segment,
          description
        );
        if (!productAdded) {
          res.status(500).send({
            message: "Some error occurred while retrieving products.",
          });
        }

        res.json({ productAdded });
      } catch (e) {
        next(e);
      }
    });
  }

  async findAll(req, res, next) {
    try {
      const products = await productService.findAll();
      if (!products) {
        res.status(500).send({
          message: "Some error occurred while retrieving products.",
        });
      }
      res.json(products);
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new ProductController();
