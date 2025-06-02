const { classifyPenyakit } = require('../services/classification_penyakit');
const { classifyObat } = require('../services/classification_obat');
const { recommendObat } = require('../services/collab_recommender');

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

const rekomendasiCollab = async (req, res) => {
	try {
		const { obat, penyakit } = req.body;

		if (!obat || !penyakit) {
			return res.status(400).json({ status: 'fail', message: 'Input obat dan penyakit harus disediakan.' });
		}

		const result = recommendObat(obat, penyakit);

		if (result.length === 0) {
			return res
				.status(200)
				.json({ status: 'success', message: 'Tidak ada rekomendasi lain untuk penyakit tersebut.', data: [] });
		}

		res.status(200).json({
			status: 'success',
			message: 'Rekomendasi obat berdasarkan kemiripan berhasil ditemukan.',
			data: result,
		});
	} catch (error) {
		res.status(500).json({ status: 'fail', message: `Error saat merekomendasikan obat: ${error.message}` });
	}
};

const chatbot = async (req, res) => {
	const userMessage = req.body.message;

	if (!userMessage) {
		return res.status(400).json({ error: 'Field "message" harus ada di body' });
	}

	try {
		const response = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					contents: [
						{
							parts: [{ text: userMessage }],
							role: 'user',
						},
					],
				}),
			}
		);

		const data = await response.json();
		const geminiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Gemini tidak membalas.';

		res.json({ reply: geminiReply });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mendapatkan respons dari Gemini' });
	}
};

module.exports = { predictPenyakit, predictObat, rekomendasiCollab, chatbot };
