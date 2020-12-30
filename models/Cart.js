const { Schema, model, Types } = require("mongoose");
const cartSchema = new Schema(
  {
    cartOwnerID: { type: String, required: true, unique: true },
    dateCreation: { type: String, required: true },
    productsInCart: [{ type: Types.ObjectId, ref: "Product" }],
    inActive: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = model("Cart", cartSchema);
