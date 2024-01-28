const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect('mongodb+srv://expenseTracker:A9h1FvaRUOdsM9gi@cluster0.xsxcnld.mongodb.net/');

const connectionDb = mongoose.connection;

connectionDb.on("connected", () => {
  console.log("Connected to database successfully.");
});

connectionDb.on("error", (e) => {
  console.log(e);
});

module.exports = connectionDb;
