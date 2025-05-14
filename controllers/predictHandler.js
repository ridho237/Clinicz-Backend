const { classifyPenyakit } = require('../services/classification_penyakit');
const { classifyObat } = require('../services/classification_obat');

const predictPenyakit = async (req, res) => {
	try {
		const { text } = req.body;
		const { modelA } = req.app;
		const penyakitPredictions = await classifyPenyakit(modelA, text);

		res.status(200).json({
			status: 'success',
			message: 'Model Berhasil diprediksi',
			data: penyakitPredictions,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam melakukan prediksi: ${error.message}`,
		});
	}
};

const predictObat = async (req, res) => {
	try {
		const { gejala, penyakit } = req.body;
		const { modelB } = req.app;
		const obatPredictions = await classifyObat(modelB, gejala, penyakit);

		res.status(200).json({
			status: 'success',
			message: 'Prediksi obat berhasil',
			data: obatPredictions,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Gagal memprediksi obat: ${error.message}`,
		});
	}
};

module.exports = { predictPenyakit, predictObat };
