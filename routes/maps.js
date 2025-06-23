const express = require('express');
const maps = express.Router();
const { getNearbyClinics } = require('../controllers/locationHandler');

maps.post('/input', getNearbyClinics);

module.exports = maps;
