const tf = require('@tensorflow/tfjs-node');
const { allWordsObat } = require('../data/obat/all_word');
const { obatLabels } = require('../data/obat/classes_obat');
const { deskripsiObat } = require('../data/obat/desc_obat');

async function classifyObat(modelB, gejalaText, penyakitText) {
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
	const deskripsi = deskripsiObat[namaObat] ?? 'Maaf Deskripsi belum tersedia.';

	return [{ obat: namaObat, deskripsi: deskripsi }];
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
