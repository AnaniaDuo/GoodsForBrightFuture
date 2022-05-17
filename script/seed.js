const {
  db,
  models: { Product, Location },
} = require("../server/db");

async function seed() {
  await db.sync({ force: true }); //clear db and matches models to tables
  console.log("db synced!");

  const products = [
    {
      name: "Lucky Bamboo Tree",
      quantity: 1000,
      description:
        "Green lucky bamboo tree that brings positive energy and prosperity",
      price: 2500,
    },
    {
      name: "Crystal Stone",
      quantity: 2000,
      description:
        "A set of 4 mysterious crystal stones that increase your frequency and vibration",
      price: 10000,
    },
    {
      name: "Homo Sapiens Book",
      quantity: 5000,
      description: "A book about the history of humankind",
      price: 1000,
    },
  ];

  const locations = [
    {
      name: "Maine Warehouse",
      address: "Portland, ME, US",
    },
    {
      name: "New Hampshire Warehouse",
      address: "Portsmouth, NH, US",
    },
    {
      name: "New York Warehouse",
      address: "New York, NY, US",
    },
  ];

  const [product1, product2, product3] = await Promise.all(
    products.map((prod) => {
      return Product.create(prod);
    })
  );

  const [location1, location2, location3] = await Promise.all(
    locations.map((loca) => {
      return Location.create(loca);
    })
  );

  await location1.addProduct([product1, product2]);
  await location2.addProduct(product1);

  console.log("seeded successfully!");
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
