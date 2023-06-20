const mongoose = require("mongoose");

const DB_NAME = 'version'
const MONGO_URL = `mongodb+srv://archanak24krishnan:Archana24@cluster0.jqwifq9.mongodb.net/${DB_NAME}`

const db = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to the database...");
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = db;
