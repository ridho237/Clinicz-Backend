const mongoose = require('mongoose');
const PredictionHistory = require('../model/mongodb_schema/predictionHistorySchema');
const ChatHistory = require('../model/mongodb_schema/chatHistory');
const { classifyPenyakit, getDetailPenyakit } = require('../services/classification_penyakit');
const { recommendObat, getDetailObat } = require('../services/collaboration_recommender');
const { gabungkanGejala, isGejalaTerlaluUmum } = require('../utils/normalization');

const predictPenyakit = async (req, res) => {
	try {
		let { bagianTubuh, gejala } = req.body;
		const { model } = req.app;

		if (!gejala) {
			return res.status(400).json({
				status: 'fail',
				message: 'Gejala harus diisi',
			});
		}

		let textGabungan;

		// Jika bagian tubuh tidak diisi, pakai gejala langsung
		if (!bagianTubuh || bagianTubuh.length === 0) {
			textGabungan = gejala.toLowerCase();
		} else {
			// Ubah ke array jika masih string
			const bagianTubuhList = Array.isArray(bagianTubuh)
				? bagianTubuh.flatMap((b) => b.split(',').map((item) => item.trim()))
				: bagianTubuh
						.split(',')
						.map((b) => b.trim())
						.filter(Boolean);

			textGabungan = gabungkanGejala(bagianTubuhList, gejala);

			// Validasi jika hasil gabungan kosong
			if (!textGabungan || textGabungan.split(',').length < 2) {
				return res.status(400).json({
					status: 'fail',
					message: 'Gejala yang dimasukkan tidak cocok dengan bagian tubuh yang dipilih',
				});
			}
		}

		// Validasi jumlah gejala
		const gejalaList = textGabungan
			.split(',')
			.map((item) => item.trim())
			.filter(Boolean);
		if (gejalaList.length < 5) {
			return res.status(400).json({
				status: 'fail',
				message: `Gejala yang Anda masukkan setelah diproses hanya sebanyak ${gejalaList.length}. Minimal 5 gejala diperlukan agar hasil prediksi akurat.`,
			});
		}

		// Validasi gejala terlalu umum
		if (isGejalaTerlaluUmum(textGabungan)) {
			return res.status(400).json({
				status: 'fail',
				message:
					!bagianTubuh || bagianTubuh.length === 0
						? 'Gejala terlalu umum. Silakan tambahkan bagian tubuh yang sakit untuk memperjelas konteks gejala.'
						: 'Gejala yang Anda masukkan kurang spesifik atau tidak dapat dikenali dengan baik. Silakan lengkapi dengan gejala yang lebih jelas.',
			});
		}

		console.log('================== DEBUG INPUT ==================');
		console.log('Bagian tubuh:', bagianTubuh);
		console.log('Gejala:', gejala);
		console.log('Gabungan akhir (textGabungan):', textGabungan);
		console.log('List Gejala (setelah split):', gejalaList);
		console.log('==================================================');

		const result = await classifyPenyakit(model, textGabungan);

		await PredictionHistory.create({
			userId: req.user.id,
			type: 'penyakit',
			input: { bagianTubuh, gejala, gabungan: textGabungan },
			output: result,
		});

		const outputPenyakit = result
			.filter((item) => item?.nama)
			.map((item) => ({
				penyakit: item.nama,
				deskripsi: item.deskripsi ?? 'Tidak tersedia',
			}));

		res.status(200).json({
			status: 'success',
			message: 'Model berhasil memprediksi penyakit',
			data: outputPenyakit,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam melakukan prediksi: ${error.message}`,
		});
	}
};

const predictPenyakitDetail = async (req, res) => {
	try {
		const { penyakit } = req.params;
		if (!penyakit) {
			return res.status(400).json({
				status: 'fail',
				message: 'Field "penyakit" harus ada di body',
			});
		}

		const detail = getDetailPenyakit(penyakit);

		res.status(200).json({
			status: 'success',
			message: 'Detail penyakit berhasil diambil',
			data: detail,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Gagal mengambil detail penyakit: ${error.message}`,
		});
	}
};

const rekomendasiObat = async (req, res) => {
	try {
		const { penyakit } = req.body;
		if (!penyakit) {
			return res.status(400).json({ status: 'fail', message: 'Input penyakit harus disediakan.' });
		}

		const result = recommendObat(penyakit);
		await PredictionHistory.create({
			userId: req.user.id,
			type: 'obat',
			input: { penyakit },
			output: result,
		});

		const outputObat = result
			.filter((item) => item?.obat)
			.map((item) => ({
				obat: item.obat,
				deskripsi: item.deskripsi ?? 'Tidak tersedia',
			}));
		res.status(200).json({
			status: 'success',
			message: 'Rekomendasi obat berhasil',
			data: outputObat,
		});
	} catch (error) {
		res.status(500).json({ status: 'fail', message: `Error saat merekomendasikan obat: ${error.message}` });
	}
};

const getDetailObatRekomendasi = async (req, res) => {
	try {
		const { namaObat } = req.params;
		if (!namaObat) {
			return res.status(400).json({
				status: 'fail',
				message: 'Parameter namaObat harus disediakan.',
			});
		}

		const detail = getDetailObat(namaObat);
		if (!detail) {
			return res.status(404).json({
				status: 'fail',
				message: `Detail obat '${namaObat}' tidak ditemukan.`,
			});
		}

		return res.status(200).json({
			status: 'success',
			data: detail,
		});
	} catch (error) {
		return res.status(500).json({
			status: 'fail',
			message: `Gagal mengambil detail obat: ${error.message}`,
		});
	}
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

const getMessage = async (req, res) => {
	const user = req.user;

	try {
		const chatHistory = await ChatHistory.find({ userId: user.id }).sort({ createdAt: -1 });

		res.json({ history: chatHistory });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mengambil riwayat chat' });
	}
};

const getRiwayatPenyakit = async (req, res) => {
	try {
		const histories = await PredictionHistory.find({
			userId: req.user.id,
			type: 'penyakit',
		}).sort({ createdAt: -1 });

		const result = histories.map((history) => {
			let detail = [];

			if (Array.isArray(history.output)) {
				detail = history.output.map((item) => ({
					penyakit: item?.nama ?? null,
				}));
			}

			return {
				id: history._id,
				type: 'penyakit',
				gejala: history.input?.text ?? '-',
				detail,
				createdAt: history.createdAt,
			};
		});

		res.status(200).json({ status: 'success', data: result });
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: `Gagal mengambil riwayat penyakit: ${error.message}`,
		});
	}
};

const getRiwayatObat = async (req, res) => {
	try {
		const histories = await PredictionHistory.find({
			userId: req.user.id,
			type: 'obat',
		}).sort({ createdAt: -1 });

		const result = histories.map((history) => ({
			id: history._id,
			type: 'obat',
			penyakit: history.input?.penyakit ?? '-',
			detail: Array.isArray(history.output)
				? history.output.map((item) => ({
						obat: item?.obat ?? null,
				  }))
				: [],
			createdAt: history.createdAt,
		}));

		res.status(200).json({ status: 'success', data: result });
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: `Gagal mengambil riwayat obat: ${error.message}`,
		});
	}
};

const getRiwayatByNama = async (req, res) => {
	try {
		const { nama } = req.params;
		if (!nama) {
			return res.status(400).json({
				status: 'fail',
				message: 'Parameter "nama" harus disediakan di URL',
			});
		}

		const keyword = decodeURIComponent(nama).trim().toLowerCase();

		const histories = await PredictionHistory.find({ userId: req.user.id }).sort({ createdAt: -1 });

		for (const history of histories) {
			// 🔍 Untuk jenis penyakit
			if (history.type === 'penyakit' && Array.isArray(history.output)) {
				const match = history.output.find((p) => p?.nama?.trim().toLowerCase() === keyword);
				if (match) {
					return res.status(200).json({
						status: 'success',
						data: [match],
					});
				}
			}

			// 💊 Untuk jenis obat
			if (history.type === 'obat' && Array.isArray(history.output)) {
				const match = history.output.find((o) => o?.obat?.trim().toLowerCase() === keyword);
				if (match) {
					return res.status(200).json({
						status: 'success',
						data: [match],
					});
				}
			}
		}

		return res.status(404).json({
			status: 'fail',
			message: `Data dengan nama "${nama}" tidak ditemukan dalam riwayat Anda`,
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: `Gagal mengambil detail riwayat: ${error.message}`,
		});
	}
};

module.exports = {
	chatbot,
	getMessage,
	predictPenyakit,
	predictPenyakitDetail,
	rekomendasiObat,
	getDetailObatRekomendasi,
	getRiwayatPenyakit,
	getRiwayatObat,
	getRiwayatByNama,
};
