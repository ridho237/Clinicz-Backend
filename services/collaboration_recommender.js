const fs = require('fs');
const path = require('path');

// Import data tambahan dari data_obat.js
const { aturanPakaiObat, efekSampingObat, linkObatSatu, linkObatDua } = require('../data/obat/data_obat');

// Load cosine similarity matrix
const cosineMatrix = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/cosine_similarity_matrix.json'))
);

// Load full drug model (lengkap: Penyakit, Obat, Kategori, dll.)
const rawDrugData = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/all_drugs_data_model.json'))
);

// Mapping data obat dari JSON utama (gunakan key dari Obat supaya sinkron)
const drugsData = Object.entries(rawDrugData.Obat).map(([key, obat]) => {
	const penyakit = rawDrugData.Penyakit?.[key] ?? null;
	return {
		Penyakit: penyakit,
		Obat: obat,
		Kategori: rawDrugData.Kategori?.[key] ?? null,
		Deskripsi: rawDrugData.Deskripsi?.[key] ?? null,
		Kandungan: rawDrugData.Kandungan?.[key] ?? null,
		Dosis: rawDrugData.Dosis?.[key] ?? null,
		AturanPakai: rawDrugData.AturanPakai?.[key] ?? null,
		EfekSamping: rawDrugData.EfekSamping?.[key] ?? null,
		TokoOnline1: rawDrugData.LinkObatSatu?.[key] ?? null,
		TokoOnline2: rawDrugData.LinkObatDua?.[key] ?? null,
		Sumber: rawDrugData.Sumber?.[key] ?? null,
		Gambar: rawDrugData.Images?.[key] ?? null,
		ObatPenyakit: `${obat} - ${penyakit}`,
	};
});

// Sinonim penyakit (mirip Python get_sinonim_penyakit)
function getSinonimPenyakit(nama) {
	const mapping = {
		flu: 'Influenza',
		pilek: 'Influenza',
		'demam berdarah dengue': 'Demam Berdarah',
		dbd: 'Demam Berdarah',
		'heart attack': 'Serangan Jantung',
	};
	return mapping[nama.toLowerCase()] ?? nama;
}

// Daftar penyakit khusus
const penyakitKhusus = [
	'Stroke',
	'Gendang telinga pecah',
	'Kolesteatoma',
	'Otosklerosis',
	'Mastoiditis',
	'Barotrauma',
	'Keratitis Herpes Simpleks',
	'Keratitis Jamur',
	'Demam Berdarah',
	'Serangan Jantung',
	'Gagal Jantung',
	'Endokarditis',
	'Angina pektoris',
	'Penyakit Jantung Rematik',
	'Penyakit Katup Jantung',
	'Emfisema',
	'Irritable Bowel Syndrome (IBS)',
];

function recommendObat(penyakit) {
	const penyakitNormal = getSinonimPenyakit(penyakit.trim());

	// Cari penyakit di dataset
	const dataPenyakit = drugsData.find(
		(item) => item.Penyakit?.toLowerCase() === penyakitNormal.toLowerCase()
	);

	if (!dataPenyakit) {
		console.log(`Data pengobatan untuk penyakit '${penyakitNormal}' belum tersedia.`);
		return [];
	}

	const kategori = dataPenyakit.Kategori;
	const obatUtamaKey = dataPenyakit.ObatPenyakit;

	console.log(`Penyakit yang diderita\t: ${dataPenyakit.Penyakit}`);
	console.log(`Kategori penyakit\t: ${kategori}`);
	console.log('-'.repeat(100));

	if (penyakitKhusus.includes(dataPenyakit.Penyakit)) {
		console.log('Harap konsultasikan ke dokter terlebih dahulu');
		return [];
	}

	// ✅ Ambil obat hanya dari penyakit yang sama
	const kandidatObat = drugsData.filter(
		(item) => item.Penyakit?.toLowerCase() === penyakitNormal.toLowerCase()
	);

	// Hitung similarity
	const hasil = kandidatObat.map((item) => {
		const similarity = cosineMatrix[obatUtamaKey]?.[item.ObatPenyakit];
		return {
			obat: item.Obat,
			penyakit: item.Penyakit,
			similarity: similarity !== undefined ? parseFloat(similarity.toFixed(4)) : null,
			deskripsi: item.Deskripsi && item.Deskripsi.trim() !== '' ? item.Deskripsi : 'Tidak tersedia',
			kandungan: item.Kandungan ?? '-',
			dosis: item.Dosis ?? '-',
			aturanPakai: item.AturanPakai ?? '-',
			efekSamping: item.EfekSamping ?? '-',
			tokoOnline1: item.TokoOnline1 ?? '-',
			tokoOnline2: item.TokoOnline2 ?? '-',
		};
	});

	// Urutkan
	const hasilTerurut = hasil.sort((a, b) => (b.similarity ?? 0) - (a.similarity ?? 0));

	console.log('Rekomendasi Obat dalam Penyakit yang Sama:');
	hasilTerurut.slice(0, 3).forEach((item, idx) => {
		console.log(`${idx + 1}. ${item.obat} (${item.similarity}) \t (${item.penyakit})`);
	});

	return hasilTerurut.slice(0, 3);
}

// Tambahan fungsi getDetailObat
function getDetailObat(namaObat) {
	const detail = drugsData.find((item) => item.Obat?.toLowerCase() === namaObat.toLowerCase());

	if (!detail) return null;

	return {
		...detail,
		AturanPakai: detail.AturanPakai || aturanPakaiObat[namaObat] || 'Tidak tersedia',
		EfekSamping: detail.EfekSamping || efekSampingObat[namaObat] || 'Tidak tersedia',
		TokoOnline1: detail.TokoOnline1 || linkObatSatu[namaObat] || '-',
		TokoOnline2: detail.TokoOnline2 || linkObatDua[namaObat] || '-',
		Gambar: detail.Gambar || 'https://via.placeholder.com/150?text=No+Image',
	};
}

module.exports = { recommendObat, getDetailObat };
