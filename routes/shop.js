const express = require('express');
const shop = express.Router();
const { getObat, getObatByName, getObatByKategori } = require('../controllers/shopHandler');

shop.get('/obat', getObat);
shop.get('/obat/:nama', getObatByName);
shop.get('/obat/kategori/:kategori', getObatByKategori);

module.exports = shop;
