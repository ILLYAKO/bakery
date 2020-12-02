const { Schema, model, Types } = require("mongoose");
const userSchema = new Schema({
  id:       { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status:   { type: String, required: true },
  cart:     [{ type: Types.ObjectId, ref: "Cart" }],
  });
module.exports = model("User", userSchema);
