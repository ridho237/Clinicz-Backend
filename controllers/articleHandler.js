const mongoose = require('mongoose');
const Article = require('../model/mongodb_schema/articleSchema');

const getArticle = async (req, res) => {
	try {
		const data = await Article.find();
		const articles = data.map((article) => ({
			id: article._id,
			title: article.title,
			date: article.date,
			img: article.img,
			tag: article.tag,
		}));

		res.json(articles);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal Mendapatkan data article' });
	}
};

const getArticleById = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ error: 'ID tidak valid' });
	}

	try {
		const article = await Article.findById(id);
		if (!article) {
			return res.status(404).json({ error: 'Artikel tidak ditemukan' });
		}

		let htmlContent = Array.isArray(article.content) ? article.content.map((p) => `<p>${p}</p>`).join('') : article.content;
		let doctor = article.doctor;
		if (doctor?.sources) {
			let plainText = article.doctor.sources;

			plainText = plainText
				.replace(/\\u003c/g, '<')
				.replace(/\\u003e/g, '>')
				.replace(/\\u0026/g, '&');

			if (plainText.startsWith('"') && plainText.endsWith('"')) {
				plainText = plainText.slice(1, -1);
			}

			plainText = plainText.replace(/\\n/g, ' ').replace(/\n/g, ' ').replace(/\s+/g, ' ');
			doctor.sources = plainText;
		}

		res.json({
			id: article._id,
			title: article.title,
			date: article.date,
			content: htmlContent,
			img: article.img,
			tag: article.tag,
			doctor: doctor,
			source: article.source,
			url: article.url,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Gagal mengambil artikel' });
	}
};

module.exports = { getArticle, getArticleById };
