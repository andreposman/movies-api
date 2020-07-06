const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const db = require("./Database/db");
const routes = require('./routes');
const { SERVER_PORT } = process.env;
require("dotenv").config();

const app = express();

// db init call
db();

app.use(morgan(`\n[:date]\nMethod: :method\nURL: :url\nStatus Code: :status\nResponse Time: :response-time ms\nUser Agent:" :user-agent\n`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);


try {
  app.listen(SERVER_PORT, (err) => {
    if (err) return (err);
    else
      console.log(
        `\nServer is up and running at: http://0.0.0.0:${SERVER_PORT}\n`
      );
  });
} catch (err) {
  return err;
}