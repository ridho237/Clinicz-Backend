const { obatLabels } = require('../data/obat/classes_obat');
const { deskripsiObat } = require('../data/obat/desc_obat');
const { kandunganObat } = require('../data/obat/kandungan_obat');
const { dosisObat } = require('../data/obat/dosis_obat');
const { aturanPakaiObat } = require('../data/obat/aturanPakai_obat');
const { efekSampingObat } = require('../data/obat/efekSamping_obat');
const { linkObatSatu, linkObatDua } = require('../data/obat/link_obat');
const { sumberObat } = require('../data/obat/sumber_obat');
const { imagesObat } = require('../data/obat/images_obat');

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
		const linkStoreSatu = linkObatSatu[nama] ?? 'Maaf Data link Obat tersebut belum tersedia.';
		const linkStoreDua = linkObatDua[nama] ?? 'Maaf Data link Obat tersebut belum tersedia.';
		const sumber = sumberObat[nama] ?? 'Maaf Data sumber Obat tersebut belum tersedia.';
		const gambar = imagesObat[nama] ?? 'Maaf Data gambar Obat tersebut belum tersedia.';

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
