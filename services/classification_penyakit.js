const tf = require('@tensorflow/tfjs-node');
const { allWordsPenyakit } = require('../data/penyakit/all_word');
const {
	penyakitLabels,
	deskripsiPenyakit,
	pengobatanPenyakit,
	sumberPenyakit,
} = require('../data/penyakit/data_penyakit');
const { normalizeGejala } = require('../utils/normalization');

function getDetailPenyakit(namaPenyakit) {
	return {
		nama: namaPenyakit,
		deskripsi: deskripsiPenyakit[namaPenyakit] ?? null,
		pengobatan: pengobatanPenyakit[namaPenyakit] ?? null,
		sumber: sumberPenyakit[namaPenyakit] ?? null,
	};
}

async function classifyPenyakit(model, text) {
	const inputGejala = preprocessSingleInput(text);
	const tensorGejala = tf.tensor([inputGejala], [1, 50]);
	const predictions = model.predict([tensorGejala]);
	const predictionArray = predictions.dataSync();

	let maxIndex = 0;
	for (let i = 1; i < predictionArray.length; i++) {
		if (predictionArray[i] > predictionArray[maxIndex]) {
			maxIndex = i;
		}
	}

	const namaPenyakit = penyakitLabels[maxIndex];
	return [getDetailPenyakit(namaPenyakit)];
}

function preprocessSingleInput(text) {
	if (typeof text !== 'string') {
		console.error('Invalid input: text should be a string');
		return Array(50).fill(0);
	}

	let string = text.replace(/,/g, '').replace(/\./g, '');
	let strArr = string.split(' ');
	let strConverted = [];

	for (let w of strArr) {
		const normalized = normalizeGejala(w);
		if (allWordsPenyakit[normalized] === undefined) {
			strConverted.push(1);
		} else {
			strConverted.push(allWordsPenyakit[normalized]);
		}
	}

	if (strConverted.length < 50) {
		strConverted.push(...Array(50 - strConverted.length).fill(0));
	} else {
		strConverted = strConverted.slice(0, 50);
	}

	return strConverted;
}

module.exports = { classifyPenyakit, preprocessSingleInput, getDetailPenyakit };
