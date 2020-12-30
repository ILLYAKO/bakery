const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/product", require("./routes/product.routes"));
app.use("/api/cart", require("./routes/cart.routes"));


const PORT = config.get("port") || 5000;

async function start(params) {
  try {
    await mongoose
      .connect(config.get("mongoUri"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("Connected to the database!");
      })
      .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
      });
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log("Server Error.", e.message);
    process.exit(1);
  }
}

start();

//app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
