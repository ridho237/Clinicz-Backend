const express = require('express');
const cors = require('cors');
const app = express();
const predict = require('./routes/predict');
const { loadModelA, loadModelB } = require('./services/loadmodel');

const startServer = async () => {
	const port = 8000;
	app.use(express.json());
	app.use(cors({ origin: 'http://localhost:3000' }));
	app.use(express.urlencoded({ extended: true }));

	try {
		const modelA = await loadModelA();
		app.modelA = modelA;
		const modelB = await loadModelB();
		app.modelB = modelB;

		app.get('/', (req, res) => {
			res.send('Hai ini API Server 1 Untuk Clinicz-App!');
		});

		app.use('/', predict);

		app.listen(port, () => {
			console.log(`http://localhost:${port}`);
		});
	} catch (error) {
		console.error('Stack trace:', error.stack);
	}
};

startServer().catch((err) => {
	console.error('Unexpected error starting server:', err.message);
	console.error('Stack trace:', err.stack);
});
