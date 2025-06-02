const express = require('express');
const { predictPenyakit, predictObat, rekomendasiCollab, chatbot } = require('../controllers/predictHandler');

const router = express.Router();

router.post('/predict/penyakit', predictPenyakit);
router.post('/predict/obat', predictObat);
router.post('/predict/rekomendasi-obat', rekomendasiCollab);
router.post('/chat', chatbot);

module.exports = router;
