const mongoose = require('mongoose');

const predictionHistorySchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	type: { type: String, enum: ['penyakit', 'obat', 'rekomendasi'], required: true },
	input: { type: Object, required: true },
	output: { type: Object, required: true },
	createdAt: { type: Date, default: Date.now },
});

const PredictionHistory = mongoose.model('PredictionHistory', predictionHistorySchema);
module.exports = PredictionHistory;
