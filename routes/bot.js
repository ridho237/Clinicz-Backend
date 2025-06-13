const express = require('express');
const model = express.Router();
const { predictPenyakit, predictObat, rekomendasiObat, chatbot } = require('../controllers/botHandler');

// model route
model.post('/predict/penyakit', predictPenyakit);
model.post('/predict/obat', predictObat);
model.post('/rekomendasi-obat', rekomendasiObat);
model.post('/chat', chatbot);

// riwayat route
model.get('/history/all', authMiddleware, getAllRiwayat);
model.get('/history/:id', authMiddleware, getRiwayatById);

module.exports = model;
