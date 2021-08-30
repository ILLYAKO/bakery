const Sequelize = require("sequelize");
const sequelize = require("./index");
const User = require("./userModel");

const Token = sequelize.define("token", {
  //   user: { type: Sequelize.Types.ObjectId, ref: "User" },
  refreshToken: {
    type: Sequelize.STRING,
    required: true,
  },
  // userId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: User,
  //     key: "id",
  //   },
  // },
});
Token.belongsTo(User);
module.exports = Token;
