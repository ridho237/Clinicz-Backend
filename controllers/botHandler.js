const PredictionHistory = require('../model/mongodb_schema/predictionHistorySchema');
const ChatHistory = require('../model/mongodb_schema/chatHistory');
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

		const simpleOutput = obatPredictions.map(({ obat, deskripsi }) => ({ obat, deskripsi }));

		res.status(200).json({
			status: 'success',
			message: 'Prediksi obat berhasil',
			data: simpleOutput,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Gagal memprediksi obat: ${error.message}`,
		});
	}
};

const getDetailPredictObat = (req, res) => {
	const { namaObat } = req.params;

	if (!namaObat) {
		return res.status(404).json({ status: 'fail', message: 'Detail obat tidak ditemukan.' });
	}

	const detail = {
		obat: namaObat,
		deskripsi: deskripsiObat[namaObat],
		kandungan: kandunganObat[namaObat] ?? 'Belum tersedia',
		dosis: dosisObat[namaObat] ?? 'Belum tersedia',
		aturanPakai: aturanPakaiObat[namaObat] ?? 'Belum tersedia',
		efekSamping: efekSampingObat[namaObat] ?? 'Belum tersedia',
		sumber: sumberObat[namaObat] ?? 'Belum tersedia',
		gambar: imagesObat[namaObat] ?? 'Belum tersedia',
	};

	return res.status(200).json({ status: 'success', data: detail });
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

const getDetailObatRekomendasi = (req, res) => {
	const { namaObat } = req.params;

	if (!namaObat) {
		return res.status(404).json({ status: 'fail', message: 'Detail obat rekomendasi tidak ditemukan.' });
	}

	const detail = {
		obat: namaObat,
		deskripsi: deskripsiObat[namaObat] ?? 'Belum tersedia',
		kandungan: kandunganObat[namaObat] ?? 'Belum tersedia',
		dosis: dosisObat[namaObat] ?? 'Belum tersedia',
		aturanPakai: aturanPakaiObat[namaObat] ?? 'Belum tersedia',
		efekSamping: efekSampingObat[namaObat] ?? 'Belum tersedia',
		'link Store 1': linkObatSatu[namaObat] ?? 'Belum tersedia',
		'link Store 2': linkObatDua[namaObat] ?? 'Belum tersedia',
		sumber: sumberObat[namaObat] ?? 'Belum tersedia',
		gambar: imagesObat[namaObat] ?? 'Belum tersedia',
	};

	return res.status(200).json({ status: 'success', data: detail });
};

const chatbot = async (req, res) => {
	const userMessage = req.body.message;
	const user = req.user;

	if (!userMessage) {
		return res.status(400).json({ error: 'Field "message" harus ada di body' });
	}

	try {
		const response = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					contents: [
						{
							parts: [{ text: userMessage }],
						},
					],
				}),
			}
		);

		const data = await response.json();
		const geminiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Gemini tidak membalas.';

		const chat = new ChatHistory({
			userId: user.id,
			userMessage,
			geminiReply,
		});

		await chat.save();

		res.json({ reply: geminiReply });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mendapatkan respons dari Gemini' });
	}
};

const getRiwayatPenyakit = async (req, res) => {
	try {
		const histories = await PredictionHistory.find({ userId: req.user.id, type: 'penyakit' }).sort({
			createdAt: -1,
		});

		const result = histories.map((history) => ({
			id: history._id,
			type: history.type,
			nama: history.input.text,
			createdAt: history.createdAt,
		}));

		res.status(200).json({ status: 'success', data: result });
	} catch (error) {
		res.status(500).json({ status: 'fail', message: `Gagal mengambil riwayat penyakit: ${error.message}` });
	}
};

const getRiwayatObat = async (req, res) => {
	try {
		const histories = await PredictionHistory.find({ userId: req.user.id, type: 'obat' }).sort({
			createdAt: -1,
		});

		const result = histories.map((history) => ({
			id: history._id,
			type: history.type,
			nama: history.input.penyakit,
			createdAt: history.createdAt,
		}));

		res.status(200).json({ status: 'success', data: result });
	} catch (error) {
		res.status(500).json({ status: 'fail', message: `Gagal mengambil riwayat obat: ${error.message}` });
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

module.exports = {
	chatbot,
	predictPenyakit,
	predictObat,
	getDetailPredictObat,
	rekomendasiObat,
	getDetailObatRekomendasi,
	getRiwayatPenyakit,
	getRiwayatObat,
	getRiwayatById,
};
