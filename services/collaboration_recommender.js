const fs = require('fs');
const path = require('path');

// Load cosine similarity matrix
const cosineMatrix = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/cosine_similarity_matrix.json'))
);

// Load full drug model (lengkap: Penyakit, Obat, Kategori, dll.)
const rawDrugData = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/all_drugs_data_model.json'))
);

// Mapping data obat dari JSON utama
const drugsData = Object.keys(rawDrugData.Obat).map((key) => ({
	Penyakit: rawDrugData.Penyakit[key],
	Obat: rawDrugData.Obat[key],
	Kategori: rawDrugData.Kategori[key],
	Deskripsi: rawDrugData.Deskripsi?.[key],
	Kandungan: rawDrugData.Kandungan?.[key],
	Dosis: rawDrugData.Dosis?.[key],
	AturanPakai: rawDrugData.AturanPakai?.[key],
	EfekSamping: rawDrugData.EfekSamping?.[key],
	TokoOnline1: rawDrugData.LinkObatSatu?.[key],
	TokoOnline2: rawDrugData.LinkObatDua?.[key],
	Sumber: rawDrugData.Sumber?.[key],
	Gambar: rawDrugData.Images?.[key],
}));

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

	// Cek penyakit khusus
	if (penyakitKhusus.includes(penyakitNormal)) {
		return [
			{
				obat: null,
				pesan: 'Harap konsultasikan ke dokter terlebih dahulu terkait penyakit tersebut.',
			},
		];
	}

	// Cari penyakit di dataset
	const dataPenyakit = drugsData.find(
		(item) => item.Penyakit?.toLowerCase() === penyakitNormal.toLowerCase()
	);

	if (!dataPenyakit) {
		console.warn(`Data pengobatan untuk penyakit '${penyakitNormal}' belum tersedia.`);
		return [];
	}

	const kategori = dataPenyakit.Kategori;
	const obatUtama = dataPenyakit.Obat;

	// Ambil semua obat dalam kategori yang sama (tanpa duplikat)
	const obatDalamKategori = Array.from(
		new Map(
			drugsData
				.filter((item) => item.Kategori?.toLowerCase() === kategori.toLowerCase())
				.map((item) => [item.Obat, item])
		).values()
	);

	// Hitung similarity untuk setiap obat
	const hasil = obatDalamKategori.map((item) => {
		const similarity = cosineMatrix[obatUtama]?.[item.Obat];
		return {
			obat: item.Obat,
			deskripsi: item.Deskripsi ?? '-',
			kandungan: item.Kandungan ?? '-',
			dosis: item.Dosis ?? '-',
			aturanPakai: item.AturanPakai ?? '-',
			efekSamping: item.EfekSamping ?? '-',
			tokoOnline1: item.TokoOnline1 ?? null,
			tokoOnline2: item.TokoOnline2 ?? null,
			sumber: item.Sumber ?? null,
			gambar: item.Gambar ?? null,
			similarity: similarity !== undefined ? parseFloat(similarity.toFixed(3)) : null,
			penyakitAsal: penyakitNormal,
		};
	});

	// Urutkan berdasarkan similarity
	const hasilTerurut = [...hasil].sort((a, b) => {
		if (a.similarity === null) return 1;
		if (b.similarity === null) return -1;
		return b.similarity - a.similarity;
	});

	return hasilTerurut.slice(0, 5);
}

// ✅ Tambahan fungsi getDetailObat
function getDetailObat(namaObat) {
	const detail = drugsData.find((item) => item.Obat?.toLowerCase() === namaObat.toLowerCase());
	return detail ?? null;
}

module.exports = { recommendObat, getDetailObat };
