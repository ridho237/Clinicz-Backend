const tf = require('@tensorflow/tfjs-node');
const { allWordsObat } = require('../data/obat/all_word');
const {
	obatLabels,
	deskripsiObat,
	kandunganObat,
	dosisObat,
	aturanPakaiObat,
	efekSampingObat,
	sumberObat,
	imagesObat,
} = require('../data/obat/data_obat');

async function classifyObat(modelB, gejalaText, penyakitText) {
	if (gejalaText?.toLowerCase().includes('Hepatitis') && penyakitText?.toLowerCase().includes('hepatitis')) {
		return [
			{
				obat: null,
				pesan: 'Maaf untuk penyakit hepatitis disegerakan untuk periksa ke klinik terdekat.',
			},
		];
	}

	const [inputGejala, inputPenyakit] = preprocessDualInput(gejalaText, penyakitText);
	const tensorGejala = tf.tensor([inputGejala], [1, 50]);
	const tensorPenyakit = tf.tensor([inputPenyakit], [1, 50]);
	const predictions = modelB.predict([tensorGejala, tensorPenyakit]);
	const predictionArray = predictions.dataSync();

	let maxIndex = 0;
	for (let i = 1; i < predictionArray.length; i++) {
		if (predictionArray[i] > predictionArray[maxIndex]) {
			maxIndex = i;
		}
	}

	const namaObat = obatLabels[maxIndex];
	const deskripsi = deskripsiObat[namaObat] ?? 'Maaf Data deskripsi obat tersebut belum tersedia.';
	const kandungan = kandunganObat[namaObat] ?? 'Maaf Data kandungan obat tersebut belum tersedia.';
	const dosis = dosisObat[namaObat] ?? 'Maaf Data dosis obat tersebut belum tersedia.';
	const aturanPakai = aturanPakaiObat[namaObat] ?? 'Maaf Data aturan pakai obat tersebut belum tersedia.';
	const efekSamping = efekSampingObat[namaObat] ?? 'Maaf Data efek samping obat tersebut belum tersedia.';
	const sumber = sumberObat[namaObat] ?? 'Maaf Data sumber Obat tersebut belum tersedia.';
	const gambar = imagesObat[namaObat] ?? 'Maaf Data sumber Obat tersebut belum tersedia.';

	return [
		{
			obat: namaObat,
			deskripsi: deskripsi,
			kandungan: kandungan,
			dosis: dosis,
			aturanPakai: aturanPakai,
			efekSamping: efekSamping,
			sumber: sumber,
			gambar: gambar,
		},
	];
}

function preprocessDualInput(gejalaText, penyakitText) {
	const preprocess = (text, wordMap) => {
		if (typeof text !== 'string') {
			text = String(text ?? '');
		}

		text = text.replace(/[,.]/g, '').toLowerCase();
		const tokens = text.split(' ');
		const result = tokens.map((t) => wordMap[t] ?? 1);

		if (result.length < 50) {
			result.push(...Array(50 - result.length).fill(0));
		}
		return result.slice(0, 50);
	};

	const gejala = preprocess(gejalaText, allWordsObat);
	const penyakit = preprocess(penyakitText, allWordsObat);
	return [gejala, penyakit];
}

module.exports = { preprocessDualInput, classifyObat };
