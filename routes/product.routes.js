const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const Product = require("../models/Product");
const router = Router();

router.post(
  "/add",
  [check("title").exists(), check("password").exists()],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong product data",
        });
      }

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
      if (tempProduct) {
        res.status(400).json({ message: "Product exist." });
      }

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
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong product data",
        });
      }
      const { products } = req.body;
      const productData = await Product.find();

      if (!productData) {
        return res.status(400).json({ message: "Products is not exist" });
      }

      res.status(201).json(productData);
    } catch (e) {
      return res.status(500).json({ message: "Something wrong, try again!" });
    }
  }
);

module.exports = router;
