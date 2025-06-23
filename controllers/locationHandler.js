const { validateCoordinates } = require('../utils/geoValid');
const { getClinicsFromOverpass } = require('../services/locationService');

const getNearbyClinics = async (req, res) => {
	const { lat, lng } = req.body;

	const error = validateCoordinates(lat, lng);
	if (error) {
		return res.status(400).json({ error });
	}

	try {
		const clinics = await getClinicsFromOverpass(lat, lng);

		res.json({ clinics });
	} catch (err) {
		res.status(500).json({ error: 'Gagal fetching data' }, err.message);
	}
};

module.exports = { getNearbyClinics };
