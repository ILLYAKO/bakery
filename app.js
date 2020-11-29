const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));

// "/api/auth/register";
app.use("/api/auth", require("./routes/auth.routes"));

const PORT = config.get("port") || 5000;

app.listen(5000, console.log("Server has been started on port"));

