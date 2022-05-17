const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

//create a new product
router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (err) {
    next(err);
  }
});

//view a list of products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//update a product
router.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

//delete a product
router.delete("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (err) {
    next(err);
  }
});
