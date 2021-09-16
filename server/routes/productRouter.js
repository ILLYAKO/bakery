const Router = require("express");
const multer = require("multer");
const router = new Router();
const uuid = require("uuid");
// const { body } = require("express-validator");
// const UserController = require("../controllers/userController");
// const authMiddleware = require("../middlewares/authMiddleware");
const { cloudinary } = require("../service/cloudinaryService");

const uploadMulter = multer();

/* /products  */
router.post("/upload", uploadMulter.single("file"), async (req, res, next) => {
  try {
    const punlic_id = uuid.v4();
    const {
      file,
      body: { name },
    } = req;
    const uploadedResponse = cloudinary.uploader
      .upload_stream(
        {
          public_id: punlic_id,
          folder: "bakery/baking/",
          resource_type: "image",
        },
        function (error, result) {
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

    res.send("File uploaded");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
