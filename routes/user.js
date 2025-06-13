const express = require('express');
const User = express.Router();
const authMiddleware = require('../middleware/middleware');
const {
	signUp,
	login,
	getProfile,
	logout,
	updateProfile,
	deleteAccount,
	updatePassword,
} = require('../controllers/userHandler');

User.post('/signup', signUp);
User.post('/login', login);
User.get('/profile', authMiddleware, getProfile);
User.put('/profile-update', authMiddleware, updateProfile);
User.post('/logout', logout);
User.delete('/delete-account', authMiddleware, deleteAccount);
User.put('/update-password', authMiddleware, updatePassword);

module.exports = User;
