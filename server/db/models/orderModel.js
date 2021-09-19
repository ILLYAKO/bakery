const Sequelize = require("sequelize");
const sequelize = require("./index");

const Order = sequelize.define("opder", {
  order: {
    type: Sequelize.TEXT,
    allowNull: false,
    required: true,
  },
  cart: {
    type: Sequelize.TEXT,
    allowNull: false,
    required: true,
  },
});

module.exports = Order;
