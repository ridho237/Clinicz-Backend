const express = require('express');
const { predictPenyakit, predictObat, predictRekomendasiCollab } = require('../controllers/predictHandler');

const router = express.Router();

router.post('/predict/penyakit', predictPenyakit);
router.post('/predict/obat', predictObat);
router.post('/predict/rekomendasi-obat', predictRekomendasiCollab);

module.exports = router;
