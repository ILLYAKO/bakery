const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

//
app.use(express.static(path.join(__dirname, "build")));//
//

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(cookieParser());
app.use("/api", router);
//
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));//
});
//
app.use(errorMiddleware);

module.exports = app;
