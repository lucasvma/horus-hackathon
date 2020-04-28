const express = require('express');
const routes = express.Router();
const config = require('./config/mongoose');

const GeneratePeopleController = require('./controllers/GeneratePeople');
const RandomGeoCoordinatesController = require('./controllers/RandomGeoCoordinatesController');

routes.post('/generate-people', GeneratePeopleController.generatePeople);
routes.post('/random-geo-coordinates', RandomGeoCoordinatesController.generateRandomGeoCoordinates);

module.exports = routes;