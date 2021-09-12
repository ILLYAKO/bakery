const Sequelize = require("sequelize");
const sequelize = require("./index");
const User = require("./userModel");

const Token = sequelize.define("token", {
  refreshToken: {
    type: Sequelize.STRING,
    required: true,
  }
});
Token.belongsTo(User);
module.exports = Token;
