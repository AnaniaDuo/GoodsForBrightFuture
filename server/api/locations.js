const router = require("express").Router();
const Location = require("../db/models/Location");
const Product = require("../db/models/Product");
const Location_Product = require("../db/models/Location_Product");

//create a new location
router.post("/", async (req, res, next) => {
  try {
    const newLocation = await Location.create(req.body);
    res.send(newLocation);
  } catch (err) {
    next(err);
  }
});

//assign inventory to specific location (ex: assign 5000 books to New York Warehouse)
router.post("/:locationId/:productId", async (req, res, next) => {
  const locationId = req.params.locationId;
  const productId = req.params.productId;
  const quantity = req.body.quantity || 1;

  try {
    const productInInventory = await Product.findByPk(productId);
    if (productInInventory.quantity < quantity) res.send("Invalid quantity");
    else {
      const result = await Location_Product.create({
        locationId: locationId,
        productId: productId,
        quantity,
      });

      //update inventory after assign a product type to a location
      //ex: Originally, a shop owner has 10,000 books in total. After assign 5,000
      //books to New York warehouse, they have 5,000 books in unassigned inventory.

      await productInInventory.update({
        quantity: productInInventory.quantity - quantity,
      });
      res.send(result);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
