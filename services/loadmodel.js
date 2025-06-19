const path = require('path');
const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
	const modelPath = path.resolve(__dirname, '../model/model_penyakit/model.json');
	return tf.loadLayersModel(`file://${modelPath}`);
}

module.exports = { loadModel };
