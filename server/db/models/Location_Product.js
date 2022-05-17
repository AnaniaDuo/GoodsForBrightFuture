const Sequelize = require("sequelize");
const db = require("../db");

const Location_Product = db.define("location_product", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = Location_Product;
