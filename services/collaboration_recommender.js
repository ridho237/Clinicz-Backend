const fs = require('fs');
const path = require('path');
const { parseTokoLink } = require('../utils/dataFormatter');

// Load cosine similarity matrix
const cosineMatrix = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/cosine_similarity_matrix.json'))
);

// Load full drug model (Obat, Kategori, Atribut Obat)
const rawDrugData = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/all_drugs_data_model.json'))
);

// Load detail data dari data_obat.js
const {
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

// Transpose ke array of objek
const drugsData = Object.keys(rawDrugData.Obat).map((key) => ({
	Obat: rawDrugData.Obat[key],
	Kategori: rawDrugData.Kategori[key],
	Atribut: rawDrugData['Atribut Obat'][key],
}));

function recommendObat(penyakit) {
	const trimmedPenyakit = penyakit.trim();

	if (trimmedPenyakit === 'Demam Berdarah') {
		return [
			{
				obat: null,
				pesan: 'Harap konsultasikan ke dokter terlebih dahulu terkait penyakit tersebut.',
			},
		];
	}

	const kategori = cariKategoriDariPenyakit(trimmedPenyakit);
	if (!kategori) {
		console.warn(`Kategori tidak ditemukan untuk penyakit: ${trimmedPenyakit}`);
		return [];
	}

	const kandidatObat = drugsData.find((item) => item.Kategori.toLowerCase() === kategori.toLowerCase());

	if (!kandidatObat) {
		console.warn(`Tidak ada obat dalam kategori: ${kategori}`);
		return [];
	}

	const obatUtama = kandidatObat.Obat;

	const obatDalamKategori = drugsData.filter(
		(item) => item.Kategori.toLowerCase() === kategori.toLowerCase()
	);

	const hasil = obatDalamKategori.map((item) => {
		const nama = item.Obat;
		const similarity = cosineMatrix[obatUtama]?.[nama];

		return {
			obat: nama,
			deskripsi: deskripsiObat[nama] ?? '-',
			kandungan: kandunganObat[nama] ?? '-',
			dosis: dosisObat[nama] ?? '-',
			aturanPakai: aturanPakaiObat[nama] ?? '-',
			efekSamping: efekSampingObat[nama] ?? '-',
			tokoOnline1: parseTokoLink(linkObatSatu[nama]) ?? null,
			tokoOnline2: parseTokoLink(linkObatDua[nama]) ?? null,
			sumber: sumberObat[nama] ?? null,
			gambar: imagesObat[nama] ?? null,
			similarity: similarity !== undefined ? parseFloat(similarity.toFixed(3)) : null,
			penyakitAsal: kategori,
		};
	});

	const hasilTerurut = hasil.toSorted((a, b) => {
		if (a.similarity === null) return 1;
		if (b.similarity === null) return -1;
		return b.similarity - a.similarity;
	});

	return hasilTerurut.slice(0, 5);
}

function cariKategoriDariPenyakit(penyakit) {
	// Ambil semua kategori unik dari drugsData
	const semuaKategori = [...new Set(Object.values(rawDrugData.Kategori))];

	// Cari kecocokan berdasarkan kata kunci
	const cocok = semuaKategori.find(
		(k) =>
			k.toLowerCase().includes(penyakit.toLowerCase()) || penyakit.toLowerCase().includes(k.toLowerCase())
	);

	// Fallback: hardcode beberapa mapping jika perlu
	const fallback = {
		Barotrauma: 'Sakit Telinga',
		Glaukoma: 'Sakit Mata',
		Gastritis: 'Sakit Perut',
	};

	return cocok ?? fallback[penyakit] ?? null;
}

function getDetailObat(namaObat) {
	return {
		obat: namaObat,
		deskripsi: deskripsiObat[namaObat] ?? '-',
		kandungan: kandunganObat[namaObat] ?? '-',
		dosis: dosisObat[namaObat] ?? '-',
		aturanPakai: aturanPakaiObat[namaObat] ?? '-',
		efekSamping: efekSampingObat[namaObat] ?? '-',
		tokoOnline1: parseTokoLink(linkObatSatu[namaObat]) ?? null,
		tokoOnline2: parseTokoLink(linkObatDua[namaObat]) ?? null,
		sumber: sumberObat[namaObat] ?? null,
		gambar: imagesObat[namaObat] ?? null,
	};
}

module.exports = { recommendObat, getDetailObat };
