const express = require('express');
const validateCreation = require('./middleware/validateCreation');
const movieController = require('./movie/controller/movieController');
const healthcheckController = require('./healthcheck/controller/healthcheckController');

const routes = express.Router();

routes.get('/movie', movieController.findAll)
routes.post('/movie', validateCreation.rules , movieController.create)
routes.delete('/movie/:id', movieController.delete)
routes.get('/search', movieController.search)

routes.get('/healthcheck', healthcheckController.health)


module.exports = routes