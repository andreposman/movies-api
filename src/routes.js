const express = require('express');
const ValidateCreation = require('./Middleware/validateCreation');
const MovieController = require('./Movie/Controller/movieController');
const HealthcheckController = require('./Healthcheck/Controller/healthcheckController');

const routes = express.Router();

routes.get('/movie', MovieController.FindAll)
routes.post('/movie', ValidateCreation.rules , MovieController.Create)
routes.delete('/movie/:id', MovieController.Delete)
routes.get('/search', MovieController.Search)

routes.get('/healthcheck', HealthcheckController.health)


module.exports = routes