const express = require('express');
const model = express.Router();
const authMiddleware = require('../middleware/middleware');
const {
	predictPenyakit,
	rekomendasiObat,
	getDetailObatRekomendasi,
	chatbot,
	getRiwayatPenyakit,
	getRiwayatObat,
	getRiwayatById,
} = require('../controllers/botHandler');

model.post('/chat', chatbot);
model.post('/predict-penyakit', authMiddleware, predictPenyakit);
model.post('/rekomendasi-obat', authMiddleware, rekomendasiObat);
model.get('/rekomendasi-obat/:namaObat', getDetailObatRekomendasi);
model.get('/riwayat-penyakit', authMiddleware, getRiwayatPenyakit);
model.get('/riwayat-obat', authMiddleware, getRiwayatObat);
model.get('/riwayat/:id', authMiddleware, getRiwayatById);

module.exports = model;
