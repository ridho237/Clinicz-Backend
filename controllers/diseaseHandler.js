const {
	penyakitLabels,
	deskripsiPenyakit,
	penyebabPenyakit,
	pencegahanPenyakit,
	sumberPenyakit,
} = require('../data/penyakit/data_penyakit');

const getDisease = async (req, res) => {
	try {
		const labelsArray = Array.isArray(penyakitLabels) ? penyakitLabels : Object.values(penyakitLabels);
		const data = labelsArray.map((namaPenyakit) => ({
			nama: namaPenyakit ?? null,
			deskripsi: deskripsiPenyakit[namaPenyakit] ?? null,
		}));

		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mengambil data obat' });
	}
};

const getDiseaseByName = async (req, res) => {
	const { nama } = req.params;

	try {
		const labelsArray = Array.isArray(penyakitLabels) ? penyakitLabels : Object.values(penyakitLabels);
		if (!labelsArray.includes(nama)) {
			return res.status(404).json({ error: 'Penyakit tidak ditemukan' });
		}

		const deskripsi = deskripsiPenyakit[nama] ?? null;
		const penyebab = penyebabPenyakit[nama] ?? null;
		const pencegahan = pencegahanPenyakit[nama] ?? null;
		const sumber = sumberPenyakit[nama] ?? null;

		res.json({
			nama,
			deskripsi,
			penyebab,
			pencegahan,
			sumber,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mengambil detail penyakit' });
	}
};

module.exports = { getDisease, getDiseaseByName };
