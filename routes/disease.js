const express = require('express');
const disease = express.Router();
const { getDisease, getDiseaseByName, getDiseaseByKategori } = require('../controllers/diseaseHandler');

disease.get('/disease', getDisease);
disease.get('/disease/:nama', getDiseaseByName);
disease.get('/disease/kategori/:kategori', getDiseaseByKategori);

module.exports = disease;
