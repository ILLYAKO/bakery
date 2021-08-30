const Sequelize = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    required: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  isActivated: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  activationLink: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
