require("dotenv").config();
const app = require('./app.js');

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`The server started on port ${PORT}.`);
    });
  } catch (err) {
    console.log("Server Error:", err);
  }
};

start();
