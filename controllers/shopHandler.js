const {
	obatLabels,
	deskripsiObat,
	kandunganObat,
	dosisObat,
	aturanPakaiObat,
	efekSampingObat,
	linkObatSatu,
	linkObatDua,
	sumberObat,
	imagesObat,
	kategoriObat,
} = require('../data/obat/data_obat');
const { parseTokoLink } = require('../utils/dataFormatter');

const getObat = async (req, res) => {
	try {
		const labelsArray = Array.isArray(obatLabels) ? obatLabels : Object.values(obatLabels);
		const data = labelsArray.map((namaObat) => ({
			nama: namaObat ?? null,
			gambar: imagesObat[namaObat] ?? null,
			deskripsi: deskripsiObat[namaObat] ?? null,
		}));

		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mengambil data obat' });
	}
};

const getObatByName = async (req, res) => {
	const { nama } = req.params;

	try {
		const labelsArray = Array.isArray(obatLabels) ? obatLabels : Object.values(obatLabels);
		if (!labelsArray.includes(nama)) {
			return res.status(404).json({ error: 'Obat tidak ditemukan' });
		}

		const deskripsi = deskripsiObat[nama] ?? null;
		const kandungan = kandunganObat[nama] ?? null;
		const dosis = dosisObat[nama] ?? null;
		const aturanPakai = aturanPakaiObat[nama] ?? null;
		const efekSamping = efekSampingObat[nama] ?? null;
		const sumber = sumberObat[nama] ?? null;
		const gambar = imagesObat[nama] ?? null;
		const rawLinkStoreSatu = linkObatSatu[nama] ?? null;
		const rawLinkStoreDua = linkObatDua[nama] ?? null;
		const linkStoreSatu = rawLinkStoreSatu ? parseTokoLink(rawLinkStoreSatu) : null;
		const linkStoreDua = rawLinkStoreDua ? parseTokoLink(rawLinkStoreDua) : null;

		res.json({
			nama,
			deskripsi,
			kandungan,
			dosis,
			aturanPakai,
			efekSamping,
			linkStoreSatu,
			linkStoreDua,
			sumber,
			gambar,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mengambil detail obat' });
	}
};

const getObatByKategori = async (req, res) => {
	const { kategori } = req.params;

	try {
		const labelsArray = Array.isArray(obatLabels) ? obatLabels : Object.values(obatLabels);
		const hasilFilter = labelsArray.filter((namaObat) => {
			const kategoriObatList = kategoriObat[namaObat];
			return kategoriObatList?.some((k) => k.trim().toLowerCase() === kategori.trim().toLowerCase());
		});

		const data = hasilFilter.map((namaObat) => ({
			nama: namaObat,
			gambar: imagesObat[namaObat] ?? null,
			deskripsi: deskripsiObat[namaObat] ?? null,
		}));

		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mengambil data berdasarkan kategori' });
	}
};

module.exports = { getObat, getObatByName, getObatByKategori };
