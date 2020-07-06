const express = require('express');
const Validator = require('./Middleware/validationMiddleware');
const MovieController = require('./Movie/Controller/movieController');
const HealthcheckController = require('./Healthcheck/Controller/healthcheckController');

const routes = express.Router();

routes.get('/movie', MovieController.FindAll)
routes.get('/search', MovieController.Search)
routes.post('/movie', Validator.rules , MovieController.Create)


routes.get('/healthcheck', HealthcheckController.health)


module.exports = routes