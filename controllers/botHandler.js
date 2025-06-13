const PredictionHistory = require('../models/PredictionHistory');
const { classifyPenyakit } = require('../services/classification_penyakit');
const { classifyObat } = require('../services/classification_obat');
const { recommendObat } = require('../services/collaboration_recommender');

const predictPenyakit = async (req, res) => {
	try {
		const { text } = req.body;
		const { modelA } = req.app;
		const penyakitPredictions = await classifyPenyakit(modelA, text);

		await PredictionHistory.create({
			userId: req.user.id,
			type: 'penyakit',
			input: { text },
			output: penyakitPredictions,
		});

		res.status(200).json({
			status: 'success',
			message: 'Model berhasil diprediksi',
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

		await PredictionHistory.create({
			userId: req.user.id,
			type: 'obat',
			input: { gejala, penyakit },
			output: obatPredictions,
		});

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

const rekomendasiObat = async (req, res) => {
	try {
		const { obat, penyakit } = req.body;
		if (!obat || !penyakit) {
			return res.status(400).json({ status: 'fail', message: 'Input obat dan penyakit harus disediakan.' });
		}

		const result = recommendObat(obat, penyakit);

		await PredictionHistory.create({
			userId: req.user.id,
			type: 'rekomendasi',
			input: { obat, penyakit },
			output: result,
		});

		res.status(200).json({
			status: 'success',
			message: 'Rekomendasi obat berhasil',
			data: result,
		});
	} catch (error) {
		res.status(500).json({ status: 'fail', message: `Error saat merekomendasikan obat: ${error.message}` });
	}
};

const getAllRiwayat = async (req, res) => {
	try {
		const histories = await PredictionHistory.find({ userId: req.user.id }).sort({ createdAt: -1 });

		const simpleHistory = histories.map((history) => {
			let nama = '';
			if (history.type === 'penyakit') {
				nama = history.input.text;
			} else if (history.type === 'obat') {
				nama = history.input.penyakit;
			} else if (history.type === 'rekomendasi') {
				nama = history.input.penyakit;
			}

			return {
				id: history._id,
				type: history.type,
				nama,
				createdAt: history.createdAt,
			};
		});

		res.status(200).json({ status: 'success', data: simpleHistory });
	} catch (error) {
		res.status(500).json({ status: 'fail', message: `Gagal mengambil riwayat: ${error.message}` });
	}
};

const getRiwayatById = async (req, res) => {
	try {
		const { id } = req.params;

		// validasi id
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ status: 'fail', message: 'ID tidak valid' });
		}

		const history = await PredictionHistory.findOne({ _id: id, userId: req.user.id });

		if (!history) {
			return res.status(404).json({ status: 'fail', message: 'Riwayat tidak ditemukan' });
		}

		res.status(200).json({ status: 'success', data: history });
	} catch (error) {
		res.status(500).json({ status: 'fail', message: `Gagal mengambil detail riwayat: ${error.message}` });
	}
};

module.exports = { predictPenyakit, predictObat, rekomendasiObat, getAllRiwayat, getRiwayatById };
