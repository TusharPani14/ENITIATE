


const mongoose = require("mongoose");
require('dotenv').config();

const DB = process.env.DATA_BASE_URL;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.error("Database connection failed:", err);
});
