const { Schema, model, Types } = require("mongoose");
const userSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    imgUrl: { type: String },
    price: { type: Number },
    company: { type: String },
    info: { type: String },
    inCart: { type: Boolean },
    count: { type: Number },
    total: { type: Number },
  },
  { timestamps: true }
);
module.exports = model("Product", userSchema);
