const express = require('express');
const router = express.Router();
const { getObat, getObatByName } = require('../controllers/shopHandler');

router.get('/obat', getObat);
router.get('/obat/:nama', getObatByName);

module.exports = router;
