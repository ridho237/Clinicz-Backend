// utils/normalization.js
const { mappingGejalaSinonim } = require('../data/penyakit/sinonim_penyakit');
const { mappingGejalaPerBagian } = require('../data/penyakit/bagian_tubuh');

// utility: escape regex special chars
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeGejala(text) {
	if (!text || typeof text !== 'string') return text;

	let t = text.trim().toLowerCase();

	// Build pairs [synonym, canonical]
	const pairs = [];
	for (const [canonical, sinonimList] of Object.entries(mappingGejalaSinonim || {})) {
		const canon = canonical.toLowerCase();
		(sinonimList || []).forEach((s) => {
			if (typeof s === 'string') pairs.push({ synonym: s.toLowerCase(), canonical: canon });
		});
		pairs.push({ synonym: canon, canonical: canon });
	}

	// Urutkan frasa panjang dulu
	pairs.sort((a, b) => b.synonym.length - a.synonym.length);

	for (const p of pairs) {
		const syn = p.synonym;
		const pattern = new RegExp('\\b' + escapeRegExp(syn) + '\\b', 'g');
		if (pattern.test(t)) {
			console.log(`[normalizeGejala] Replace "${syn}" -> "${p.canonical}" dalam "${t}"`);
			t = t.replace(pattern, p.canonical);
		}
	}

	return t;
}

function normalisasiSinonimList(gejalaList) {
	console.log(`[normalisasiSinonimList] INPUT:`, gejalaList);
	const result = gejalaList.map((g) => normalizeGejala(g));
	console.log(`[normalisasiSinonimList] OUTPUT:`, result);
	return result;
}

function gabungkanGejala(bagianTubuhList, gejalaString) {
	console.log(`\n========== DEBUG gabungkanGejala ==========`);

	let gejalaList = gejalaString
		.split(',')
		.map((g) => g.trim().toLowerCase())
		.filter(Boolean);

	console.log(`[gabungkanGejala] Gejala asli:`, gejalaList);

	// normalisasi sinonim
	gejalaList = normalisasiSinonimList(gejalaList);

	const normalizedSet = new Set();
	const matchedGejala = new Set();

	bagianTubuhList.forEach((bagian) => {
		const bagianLower = bagian.toLowerCase();
		const mappedGejala = mappingGejalaPerBagian[bagianLower] || [];

		mappedGejala.forEach((gMap) => {
			gejalaList.forEach((gUser) => {
				const pattern = new RegExp('\\b' + escapeRegExp(gMap) + '\\b');
				if (pattern.test(gUser)) {
					const mappedStr = `${bagianLower} ${gMap}`;
					if (!normalizedSet.has(mappedStr)) {
						console.log(`[gabungkanGejala] Cocok: "${gUser}" mengandung "${gMap}" => "${mappedStr}"`);
						normalizedSet.add(mappedStr);
					}

					// Tambahkan frasa utuh hanya kalau belum ada mapping yang "menutupi" kata kunci
					// Cek apakah frasa panjang sudah ada dalam normalizedSet yang mengandung kata kunci ini
					const isCovered = Array.from(normalizedSet).some((n) => n.includes(gUser) && n !== gUser);
					if (!isCovered && !normalizedSet.has(gUser)) {
						console.log(`[gabungkanGejala] Tambahkan juga frasa utuh: "${gUser}"`);
						normalizedSet.add(gUser);
					}

					matchedGejala.add(gUser);
				}
			});
		});
	});

	gejalaList.forEach((g) => {
		if (!matchedGejala.has(g)) {
			console.log(`[gabungkanGejala] Tambahkan tanpa mapping: "${g}"`);
			normalizedSet.add(g);
		}
	});

	const result = Array.from(normalizedSet);
	console.log(`[gabungkanGejala] HASIL:`, result);

	return result.join(', ');
}

function isGejalaTerlaluUmum(textGabungan, threshold = 0.5) {
	const kataTidakJelas = ['sakit', 'nyeri', 'merah', 'berdarah', 'demam', 'hangat', 'sesak', 'panas'];

	const kataInput = textGabungan
		.toLowerCase()
		.split(/[ ,.]+/)
		.filter(Boolean);

	if (kataInput.length === 0) return false;
	const jumlahTidakJelas = kataInput.filter((kata) => kataTidakJelas.includes(kata)).length;

	const proporsi = jumlahTidakJelas / kataInput.length;
	console.log(
		`[isGejalaTerlaluUmum] Jumlah kata: ${kataInput.length}, Tidak jelas: ${jumlahTidakJelas}, Proporsi: ${proporsi}`
	);
	return proporsi >= threshold;
}

module.exports = {
	mappingGejalaPerBagian,
	gabungkanGejala,
	isGejalaTerlaluUmum,
	normalizeGejala,
};
