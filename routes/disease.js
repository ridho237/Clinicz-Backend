const express = require('express');
const disease = express.Router();
const { getDisease, getDiseaseByName } = require('../controllers/diseaseHandler');

disease.get('/disease', getDisease);
disease.get('/disease/:nama', getDiseaseByName);

module.exports = disease;
