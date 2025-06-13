const express = require('express');
const maps = express.Router();
const authMiddleware = require('../middleware/middleware');
const { getNearbyClinics } = require('../controllers/locationHandler');

maps.post('/location', authMiddleware, getNearbyClinics);

module.exports = maps;
