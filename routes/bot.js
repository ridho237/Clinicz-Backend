const express = require('express');
const model = express.Router();
const { predictPenyakit, predictObat, rekomendasiObat, chatbot } = require('../controllers/botHandler');

model.post('/predict/penyakit', predictPenyakit);
model.post('/predict/obat', predictObat);
model.post('/rekomendasi-obat', rekomendasiObat);
model.post('/chat', chatbot);

module.exports = model;
