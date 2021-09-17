const Sequelize = require("sequelize");
const sequelize = require("./index");

const Product = sequelize.define("product", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  imageId: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  productPrice: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    required: true,
  },
  vendor: {
    type: Sequelize.STRING,
    allowNull: true,
    required: false,
  },
  //bread, cakes, cookies, pies
  segment: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    required: false,
  },
});

module.exports = Product;
