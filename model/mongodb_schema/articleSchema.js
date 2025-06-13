const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		date: { type: String },
		content: { type: [String], required: true },
		img: { type: String },
		tag: { type: [String] },
		doctor: {
			name: { type: String },
			sources: { type: String },
		},
		source: { type: String },
		url: { type: String, unique: true },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Article', ArticleSchema);
