const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  const mongoConfig = { useNewUrlParser: true, useUnifiedTopology: true }
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
  const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

  mongoose.connect(DB_URI, mongoConfig);

  mongoose.set("useFindAndModify", false);

  mongoose.connection.on("connected", () => {
    console.log(`\n[✅]Mongo is up and running\n`);
  });

  mongoose.connection.on("error", (err) => {
    console.log(`\n[❌] Mongo encountered an error:`, err);
  });
};
