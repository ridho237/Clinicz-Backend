const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.halodoc.com';

const scrapeHalodocArticles = async () => {
	const { data } = await axios.get(`${BASE_URL}/artikel`, {
		headers: {
			'User-Agent': 'Mozilla/5.0',
		},
	});

	const $ = cheerio.load(data);
	const articles = [];

	$('.article-list__item').each((i, el) => {
		const title = $(el).find('.article-card--horizontal__desc__title').text().trim();
		const image = $(el).find('img.hd-base-image-mapper__img').attr('src');
		const label = $(el).find('.label-content').text().trim();
		const href = $(el).find('a').attr('href');
		const url = href ? BASE_URL + href : null;

		if (title && image && url) {
			articles.push({
				title,
				image,
				url,
				label: label || 'umum',
			});
		}
	});

	return articles.slice(0, 5); // Ambil 5 teratas
};

const scrapeArticleContent = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'User-Agent': 'Mozilla/5.0',
		},
	});

	const $ = cheerio.load(data);
	const title = $('h1').first().text().trim();
	const image = $('main img').first().attr('src');

	const paragraphs = [];
	$('main p').each((i, el) => {
		const text = $(el).text().trim();
		if (text) paragraphs.push(text);
	});

	return {
		title,
		url,
		image,
		content: paragraphs.join('\n\n'),
	};
};

module.exports = {
	scrapeHalodocArticles,
	scrapeArticleContent,
};
