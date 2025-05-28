const path = require('path');
const tf = require('@tensorflow/tfjs-node');

async function loadModelA() {
	const modelPath = path.resolve(__dirname, '../model/model_penyakit/model.json');
	return tf.loadLayersModel(`file://${modelPath}`);
}

async function loadModelB() {
	const modelPath = path.resolve(__dirname, '../model/model_obat/model.json');
	return tf.loadLayersModel(`file://${modelPath}`);
}

module.exports = { loadModelA, loadModelB };
