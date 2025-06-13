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
} = require('../data/obat/data_obat');
const { parseTokoLink } = require('../utils/dataFormatter');

const getObat = async (req, res) => {
	try {
		const labelsArray = Array.isArray(obatLabels) ? obatLabels : Object.values(obatLabels);
		const data = labelsArray.map((namaObat) => ({
			nama: namaObat,
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

		const deskripsi = deskripsiObat[nama] ?? 'Maaf Data deskripsi obat tersebut belum tersedia.';
		const kandungan = kandunganObat[nama] ?? 'Maaf Data kandungan obat tersebut belum tersedia.';
		const dosis = dosisObat[nama] ?? 'Maaf Data dosis obat tersebut belum tersedia.';
		const aturanPakai = aturanPakaiObat[nama] ?? 'Maaf Data aturan pakai obat tersebut belum tersedia.';
		const efekSamping = efekSampingObat[nama] ?? 'Maaf Data efek samping obat tersebut belum tersedia.';
		const sumber = sumberObat[nama] ?? 'Maaf Data sumber Obat tersebut belum tersedia.';
		const gambar = imagesObat[nama] ?? 'Maaf Data gambar Obat tersebut belum tersedia.';
		const rawLinkStoreSatu = linkObatSatu[nama] ?? null;
		const rawLinkStoreDua = linkObatDua[nama] ?? null;

		const linkStoreSatu = rawLinkStoreSatu
			? parseTokoLink(rawLinkStoreSatu)
			: 'Maaf Data link Obat tersebut belum tersedia.';
		const linkStoreDua = rawLinkStoreDua
			? parseTokoLink(rawLinkStoreDua)
			: 'Maaf Data link Obat tersebut belum tersedia.';

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

module.exports = { getObat, getObatByName };
