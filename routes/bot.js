const express = require('express');
const model = express.Router();
const authMiddleware = require('../middleware/middleware');
const {
	predictPenyakit,
	predictObat,
	rekomendasiObat,
	chatbot,
	getRiwayatPenyakit,
	getRiwayatObat,
	getRiwayatById,
} = require('../controllers/botHandler');

model.post('/chat', chatbot);
model.post('/predict-penyakit', authMiddleware, predictPenyakit);
model.post('/predict-obat', authMiddleware, predictObat);
model.post('/rekomendasi-obat', authMiddleware, rekomendasiObat);
model.get('/riwayat-penyakit', authMiddleware, getRiwayatPenyakit);
model.get('/riwayat-obat', authMiddleware, getRiwayatObat);
model.get('/riwayat/:id', authMiddleware, getRiwayatById);

module.exports = model;
