const express = require('express');
const article = express.Router();
const { getHalodocArticles, getArticlesByLabel } = require('../controllers/articleHandler');

article.get('/', getHalodocArticles);
article.get('/label/:label', getArticlesByLabel);

module.exports = article;
