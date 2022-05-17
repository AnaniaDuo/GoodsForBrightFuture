const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 8000;
const { db } = require("./db");
const seed = require("../script/seed");

//logging middleware
app.use(morgan("dev"));

//body parsing middleware
app.use(express.json());

//api routes
app.use("/api", require("./api"));

//error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Server Error");
});

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

init();
