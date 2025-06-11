const fs = require('fs');
const path = require('path');
const { transposeDrugData, parseTokoLink } = require('../utils/transpose');

// Load cosine similarity matrix dan data obat
const cosineMatrix = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/cosine_similarity_matrix.json'))
);
const rawDrugData = JSON.parse(fs.readFileSync(path.join(__dirname, '../model/obat_recomender/drug_reference_data.json')));

const drugsData = transposeDrugData(rawDrugData);

function recommendObat(obatUtama, penyakit) {
	// Penanganan khusus untuk penyakit seperti Hepatitis
	if (penyakit === 'Hepatitis') {
		return [
			{
				obat: null,
				pesan: 'Harap konsultasikan ke dokter terlebih dahulu.',
			},
		];
	}

	// Filter kandidat berdasarkan penyakit yang sama
	const kandidatObat = drugsData.filter((item) => item['Disease (Penyakit)'] === penyakit);

	if (kandidatObat.length === 0) return [];

	// Hitung similarity dan bangun list rekomendasi
	const rekomendasi = kandidatObat
		.map((item) => {
			const similarity = cosineMatrix[obatUtama]?.[item.Obat] ?? 0;
			return {
				obat: item.Obat,
				deskripsi: item.Deskripsi || '-',
				kandungan: item.Kandungan || '-',
				dosis: item.Dosis || '-',
				aturanPakai: item['Aturan Pakai'] || '-',
				efekSamping: item['Efek Samping'] || '-',
				tokoOnline1: parseTokoLink(item['Toko Online 1']),
				tokoOnline2: parseTokoLink(item['Toko Online 2']),
				similarity: parseFloat(similarity.toFixed(3)),
			};
		})
		.sort((a, b) => b.similarity - a.similarity);

	return rekomendasi;
}

module.exports = { recommendObat };
