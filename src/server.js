const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const db = require("./database/db");
const routes = require('./routes');
const { SERVER_PORT } = process.env;
require("dotenv").config();


const app = express();

// db init
db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(`\n[:date]\nMethod: :method\nURL: :url\nStatus Code: :status\nResponse Time: :response-time ms\nUser Agent:" :user-agent\n`));
}

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

module.exports = app