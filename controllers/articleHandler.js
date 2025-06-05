const { scrapeHalodocArticles, scrapeArticleContent } = require('../utils/articleScraper');

let cachedArticles = [];

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const getHalodocArticles = async (req, res) => {
	try {
		const list = await scrapeHalodocArticles();
		const articles = [];

		for (const item of list) {
			if (!item.url) continue;

			const detail = await scrapeArticleContent(item.url);

			articles.push({
				...item,
				content: detail.content,
			});

			await sleep(1000); // Delay 1 detik
		}

		cachedArticles = articles;
		res.json({ source: 'halodoc', count: articles.length, articles });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Gagal scraping artikel' });
	}
};

const getArticlesByLabel = async (req, res) => {
	const { label } = req.params;
	if (!cachedArticles.length) {
		return res.status(400).json({ error: 'Data belum tersedia. Panggil /halodoc dulu.' });
	}

	const filtered = cachedArticles.filter((a) => a.label.toLowerCase() === label.toLowerCase());

	res.json({ label, count: filtered.length, articles: filtered });
};

module.exports = {
	getHalodocArticles,
	getArticlesByLabel,
};
