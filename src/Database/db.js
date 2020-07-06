const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

  const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
  console.log(DB_URI);
  mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.set("useFindAndModify", false);

  mongoose.connection.on("connected", () => {
    console.log(`\n[✅]Mongo is up and running`);
  });

  mongoose.connection.on("error", (err) => {
    console.log(`\n[❌] Mongo encountered an error:`, err);
  });
};
