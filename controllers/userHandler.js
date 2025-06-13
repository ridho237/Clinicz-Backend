const User = require('../model/mongodb_schema/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const uploadDir = path.join(__dirname, '../uploads');
require('dotenv').config();

const COOKIE_OPTIONS = {
	httpOnly: true,
	secure: process.env.NODE_ENV === 'production',
	sameSite: 'none',
};

if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
}

const signUp = async (req, res) => {
	const form = new formidable.IncomingForm({ multiples: false });

	form.parse(req, async (err, fields, files) => {
		if (err) {
			return res.status(500).json({ message: 'File upload error' });
		}

		try {
			const username = fields.username?.[0];
			const email = fields.email?.[0];
			const password = fields.password?.[0];

			if (!username || !email || !password) {
				return res.status(400).json({ message: 'Username, email, and password are required' });
			}

			let profileImageUrl = '';

			if (files.profileImage ?? files.profileImage[0]) {
				const file = files.profileImage[0];

				if (!file.filepath) {
					return res.status(400).json({ message: 'Filepath is undefined' });
				}

				const fileName = `${Date.now()}-${file.originalFilename}`;
				const newPath = path.join(uploadDir, fileName);

				fs.copyFileSync(file.filepath, newPath);

				profileImageUrl = `/uploads/${fileName}`;
			}

			const existingUser = await User.findOne({ $or: [{ username }, { email }] });
			if (existingUser) {
				return res.status(400).json({ message: 'Username or email already exists' });
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			const user = await User.create({
				username,
				password: hashedPassword,
				email,
				profileImage: profileImageUrl,
			});

			res.status(201).json({ message: 'User registered successfully', user });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	});
};

const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ message: 'Invalid password' });
		}

		const token = jwt.sign({ id: user._id, username: user.username }, process.env.SECRET_KEY, {
			expiresIn: '1d',
		});

		res.cookie('auth_token', token, COOKIE_OPTIONS);
		res.status(200).json({ message: 'Login successful' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const logout = (req, res) => {
	res.clearCookie('auth_token', COOKIE_OPTIONS);
	res.status(200).json({ message: 'Logged out successfully' });
};

const getProfile = async (req, res) => {
	try {
		const userId = req.user.id;
		const user = await User.findById(userId).select('username profileImage email');

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateProfile = async (req, res) => {
	const form = new formidable.IncomingForm({ multiples: false });

	form.parse(req, async (err, fields, files) => {
		if (err) {
			return res.status(500).json({ message: 'File upload error' });
		}

		try {
			const userId = req.user.id;
			const user = await User.findById(userId);

			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			if (fields.username?.[0]) user.username = fields.username[0];
			if (fields.email?.[0]) user.email = fields.email[0];

			if (files.profileImage ?? files.profileImage[0]) {
				const file = files.profileImage[0];

				if (!file.filepath) {
					return res.status(400).json({ message: 'Invalid file' });
				}

				const fileName = `${Date.now()}-${file.originalFilename}`;
				const newPath = path.join(uploadDir, fileName);

				fs.copyFileSync(file.filepath, newPath);

				user.profileImage = `/uploads/${fileName}`;
			}

			await user.save();
			res.status(200).json({ message: 'Profile updated successfully', user });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	});
};

const deleteAccount = async (req, res) => {
	try {
		const userId = req.user.id;

		await User.findByIdAndDelete(userId);

		res.clearCookie('auth_token', COOKIE_OPTIONS);
		res.status(200).json({ message: 'Account deleted successfully' });
	} catch (error) {
		console.error('Error deleting user:', error);
		res.status(500).json({ message: 'Failed to delete account' });
	}
};

module.exports = { signUp, login, logout, getProfile, updateProfile, deleteAccount };
