const mappingGejalaPerBagian = {
	tenggorokan: ['sakit', 'kering', 'serak', 'gatal', 'nyeri', 'radang'],
	hidung: ['pilek', 'tersumbat', 'berair', 'gatal', 'mimisan'],
	dada: ['sesak', 'nyeri', 'berdebar', 'panas'],
	kepala: ['pusing', 'nyeri', 'berat', 'sakit', 'pegal', 'berdenyut', 'berat'],
	perut: ['mual', 'kembung', 'nyeri', 'diare', 'sakit'],
	leher: ['kaku', 'berat'],
	wajah: ['nyeri', 'tersentak', 'tertusuk', 'tidak nyaman', 'tajam'],
	punggung: ['tidak nyaman', 'kaku bagian atas'],
};

function gabungkanGejala(bagianTubuhList, gejalaString) {
	const gejalaList = gejalaString
		.split(',')
		.map((g) => g.trim().toLowerCase())
		.filter(Boolean);

	const normalizedGejala = [];
	const usedGejala = new Set();

	bagianTubuhList.forEach((bagian) => {
		const bagianLower = bagian.toLowerCase();
		const mappedGejala = mappingGejalaPerBagian[bagianLower] || [];

		mappedGejala.forEach((gMap) => {
			gejalaList.forEach((gUser) => {
				if (gUser.includes(gMap) && !normalizedGejala.includes(`${bagianLower} ${gMap}`)) {
					normalizedGejala.push(`${bagianLower} ${gMap}`);
				}
			});
		});
	});

	gejalaList.forEach((g) => {
		if (!usedGejala.has(g)) {
			normalizedGejala.push(g);
		}
	});

	return normalizedGejala.join(', ');
}

function isGejalaTerlaluUmum(textGabungan, threshold = 0.5) {
	const kataTidakJelas = ['sakit', 'nyeri', 'merah', 'berdarah', 'demam', 'hangat', 'sesak', 'panas'];

	const kataInput = textGabungan
		.toLowerCase()
		.split(/[ ,.]+/)
		.filter(Boolean);

	const jumlahTidakJelas = kataInput.filter((kata) => kataTidakJelas.includes(kata)).length;

	const proporsi = jumlahTidakJelas / kataInput.length;
	return proporsi >= threshold;
}

module.exports = {
	mappingGejalaPerBagian,
	gabungkanGejala,
	isGejalaTerlaluUmum,
};
