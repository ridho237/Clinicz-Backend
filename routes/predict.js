const express = require('express');
const { predictPenyakit, predictObat } = require('../controllers/predictHandler');

const router = express.Router();

router.post('/predict/penyakit', predictPenyakit);
router.post('/predict/obat', predictObat);

module.exports = router;
