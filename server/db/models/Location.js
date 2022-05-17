const Sequelize = require("sequelize");
const db = require("../db");

const Location = db.define("location", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  address: {
    type: Sequelize.STRING(2000),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },
});

module.exports = Location;
