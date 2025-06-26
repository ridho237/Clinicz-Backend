const tf = require('@tensorflow/tfjs-node');
const { allWordsPenyakit } = require('../data/penyakit/all_word');
const {
	penyakitLabels,
	deskripsiPenyakit,
	penyebabPenyakit,
	pencegahanPenyakit,
	sumberPenyakit,
} = require('../data/penyakit/data_penyakit');

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
	const deskripsi = deskripsiPenyakit[namaPenyakit] ?? null;
	const penyebab = penyebabPenyakit[namaPenyakit] ?? null;
	const pencegahan = pencegahanPenyakit[namaPenyakit] ?? null;
	const sumber = sumberPenyakit[namaPenyakit] ?? null;

	return [
		{
			penyakit: namaPenyakit,
			deskripsi: deskripsi,
			penyebab: penyebab,
			pencegahan: pencegahan,
			sumber: sumber,
		},
	];
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
		if (allWordsPenyakit[w] === undefined) {
			strConverted.push(1);
		} else {
			strConverted.push(allWordsPenyakit[w]);
		}
	}

	if (strConverted.length < 50) {
		let numOfZero = 50 - strConverted.length;
		for (let i = 0; i < numOfZero; i++) {
			strConverted.push(0);
		}
	} else {
		strConverted = strConverted.slice(0, 50);
	}

	return strConverted;
}

module.exports = { classifyPenyakit, preprocessSingleInput };
