const express = require('express');
const model = express.Router();
const authMiddleware = require('../middleware/middleware');
const {
	predictPenyakit,
	predictPenyakitDetail,
	rekomendasiObat,
	getDetailObatRekomendasi,
	chatbot,
	getRiwayatPenyakit,
	getRiwayatObat,
	getRiwayatByNama,
	getMessage,
} = require('../controllers/botHandler');

model.post('/chat', authMiddleware, chatbot);
model.get('/chat-histories', authMiddleware, getMessage);
model.post('/predict-penyakit', authMiddleware, predictPenyakit);
model.get('/predict-penyakit-detail/:penyakit', authMiddleware, predictPenyakitDetail);
model.post('/rekomendasi-obat', authMiddleware, rekomendasiObat);
model.get('/rekomendasi-obat/:namaObat', getDetailObatRekomendasi);
model.get('/riwayat-penyakit', authMiddleware, getRiwayatPenyakit);
model.get('/riwayat-obat', authMiddleware, getRiwayatObat);
model.get('/riwayat/:nama', authMiddleware, getRiwayatByNama);

module.exports = model;
