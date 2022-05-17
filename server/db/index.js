const db = require("./db");

const Product = require("./models/Product");
const Location = require("./models/Location");
const Location_Product = require("./models/Location_Product");

//assocations
Product.belongsToMany(Location, { through: Location_Product });
Location.belongsToMany(Product, { through: Location_Product });

module.exports = {
  db,
  models: {
    Product,
    Location,
    Location_Product,
  },
};
