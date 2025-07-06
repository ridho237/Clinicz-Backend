const fs = require('fs');
const path = require('path');
const { transposeDrugData, parseTokoLink } = require('../utils/dataFormatter');

const cosineMatrix = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/cosine_similarity_matrix.json'))
);
const rawDrugData = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/all_drugs_data_model.json'))
);

const drugsData = transposeDrugData(rawDrugData);

function recommendObat(penyakit) {
	if (penyakit === 'Hepatitis') {
		return [
			{
				obat: null,
				pesan: 'Harap konsultasikan ke dokter terlebih dahulu.',
			},
		];
	}

	// Ambil semua data penyakit yang cocok
	const kandidatObat = drugsData.filter((item) => item['Disease (Penyakit)'] === penyakit);
	if (kandidatObat.length === 0) return [];

	// Ambil kategori dari penyakit ini
	const kategori = kandidatObat[0]?.Kategori || null;
	const obatUtama = kandidatObat[0]?.Obat;

	// Ambil semua obat dalam kategori yang sama
	const obatDalamKategori = drugsData.filter((item) => item.Kategori === kategori);

	// Hitung similarity dan siapkan data obat
	const hasil = obatDalamKategori.map((item) => {
		const similarity = cosineMatrix[obatUtama]?.[item.Obat];
		return {
			obat: item.Obat,
			deskripsi: item.Deskripsi || '-',
			kandungan: item.Kandungan || '-',
			dosis: item.Dosis || '-',
			aturanPakai: item['Aturan Pakai'] || '-',
			efekSamping: item['Efek Samping'] || '-',
			tokoOnline1: parseTokoLink(item['Toko Online 1']),
			tokoOnline2: parseTokoLink(item['Toko Online 2']),
			similarity: similarity !== undefined ? parseFloat(similarity.toFixed(3)) : null,
			penyakitAsal: item['Disease (Penyakit)'],
		};
	});

	// Urutkan berdasarkan similarity (yang null taruh di akhir)
	const hasilTerurut = hasil.toSorted((a, b) => {
		if (a.similarity === null) return 1;
		if (b.similarity === null) return -1;
		return b.similarity - a.similarity;
	});

	return hasilTerurut.slice(0, 5);
}

module.exports = { recommendObat };
