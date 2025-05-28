const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Please enter username'],
			unique: true,
			trim: true,
			minlength: 3,
		},
		password: {
			type: String,
			required: [true, 'Please enter password'],
		},
		email: {
			type: String,
			required: [true, 'Please enter email'],
			unique: true,
			lowercase: true,
			match: [/\S+@\S+\.\S+/, 'Invalid email'],
		},
		profileImage: {
			type: String,
			default: '',
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
