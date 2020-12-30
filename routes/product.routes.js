const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");
const Product = require("../models/Product");
const router = Router();


//"/api/product
//             /add"

router.post(
  "/add",
    [
      check("title").exists(),
      check("password").exists()
    ],

  async (req, res) => {
    try {
      // console.log('product.route - 1')
        const errors = validationResult(req);

      if (!errors.isEmpty) {
          // console.log("product.route - 2");
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong product data",
        });
      }
// console.log("product.route - 3");
      const {
        id,
        title,
        imgUrl,
        price,
        company,
        info,
        inCart,
        count,
        total,
      } = req.body;

      const tempProduct = await Product.findOne({ id });
// console.log("product.route - 4");
      if (tempProduct) {
        res.status(400).json({ message: "Product exist." });
      }

    //  console.log("product.route - 5");
    //   const hashedPassword = await bcrypt.hash(password, 12);
      const product = new Product({
        id,
        title,
        imgUrl,
        price,
        company,
        info,
        inCart,
        count,
        total,
      });

      await product.save().then((result) => {
        console.log("Product was created!");
      });

      res.status(201).json({ message: "Product created!" });
    } catch (e) {
      return res.status(500).json({ message: "Something wrong, try again!" });
    }
  }
);



router.post(
  "/products",
  [check("products").exists()],

  async (req, res) => {
    try {
      // console.log("products.route - 1");
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        // console.log("products.route - 2");
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong product data",
        });
      }
      // console.log("products.route - 3");
      const { products } = req.body;
      // console.log("products.route - 3", products);
      const productData = await Product.find();
      // console.log("products.route - 4", productData);
      // if (tempProduct) {
      //   res.status(400).json({ message: "Product exist." });
      // }

      if (!productData) {
        return res.status(400).json({ message: "Products is not exist" });
      }

      // console.log("products.route - 5");
      //   const hashedPassword = await bcrypt.hash(password, 12);

      // res.status(201).json({ message: "Product exist!" });
      res.status(201).json(productData);
    } catch (e) {
      return res.status(500).json({ message: "Something wrong, try again!" });
    }
  }
);



module.exports = router;