const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

// === ROUTES ===
const user = require('./routes/user');
const predict = require('./routes/predict');
const { loadModelA, loadModelB } = require('./services/loadmodel');

// === ENV CONFIG ===
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

const startServer = async () => {
	const port = 8000;

	// === MIDDLEWARE ===
	app.use(express.json());
	app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());
	app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

	try {
		// === LOAD MODEL ===
		const modelA = await loadModelA();
		app.modelA = modelA;
		const modelB = await loadModelB();
		app.modelB = modelB;

		// === MONGODB CONNECTION ===
		await mongoose.connect(MONGODB_URI);
		console.log('✅ Connected to MongoDB');

		// === ROUTES ===
		app.get('/', (req, res) => {
			res.send('Hai ini API Server 1 Untuk Clinicz-App!');
		});

		app.use('/', predict);
		app.use('/user', user);

		// === START SERVER ===
		app.listen(port, () => {
			console.log(`🚀 Server running at http://localhost:${port}`);
		});
	} catch (error) {
		console.error('❌ Error during server startup:', error.message);
		console.error('Stack trace:', error.stack);
	}
};

// === RUN SERVER ===
startServer().catch((err) => {
	console.error('❌ Unexpected error starting server:', err.message);
	console.error('Stack trace:', err.stack);
});
