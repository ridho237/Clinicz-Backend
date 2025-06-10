const express = require('express');
const article = express.Router();
const { getArticle, getArticleById } = require('../controllers/articleHandler');

article.get('/article', getArticle);
article.get('/article/:id', getArticleById);

module.exports = article;
