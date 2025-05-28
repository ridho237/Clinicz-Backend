const express = require('express');
const { predictPenyakit, predictObat, rekomendasiCollab } = require('../controllers/predictHandler');

const router = express.Router();

router.post('/predict/penyakit', predictPenyakit);
router.post('/predict/obat', predictObat);
router.post('/predict/rekomendasi-obat', rekomendasiCollab);

module.exports = router;
