const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	dateOfBirth: { type: Date, required: true },
	gender: { type: String, enum: ['male', 'female', 'other'], required: true },
	profileImage: { type: String, default: '' },
});

module.exports = mongoose.model('User', userSchema);
