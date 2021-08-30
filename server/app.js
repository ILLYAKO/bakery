const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");

// const sequelize = require("./db/models")
// sequelize.sync();
// const errorHandler = require("./middleware/ErrorHandlerMiddleware");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// const db = require("./models");
// // //production
// // db.sequelize.sync();
// // dev
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use("/api", router);

// //?????????????????
// //include routes in server.js
// require("./routes/tutorial.routes")(app);

app.use("/", (req, res) => {
  res.status(200).json({ message: "The app is working!" });
});

// // Expected Error handler
// app.use(errorHandler);

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use(errorMiddleware);
// app.use((err, req, res, next) => {
//   console.log(`err:`, err);
//   res.redirect("back");
// });

module.exports = app;
