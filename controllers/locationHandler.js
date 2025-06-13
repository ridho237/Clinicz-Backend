const { validateCoordinates } = require('../utils/geoValid');
const { getClinicsFromOverpass } = require('../services/locationService');

const getNearbyClinics = async (req, res) => {
	const { lat, lng } = req.body;
	const user = req.user;

	const error = validateCoordinates(lat, lng);
	if (error) {
		return res.status(400).json({ error });
	}

	try {
		const clinics = await getClinicsFromOverpass(lat, lng);
		console.log(`User ${user.id} (${user.email}) mencari klinik di koordinat (${lat}, ${lng})`);

		res.json({ user: user.email, clinics });
	} catch (err) {
		console.error('Error saat fetching lokasi terdekat:', err.message);
		res.status(500).json({ error: 'Gagal fetching data' });
	}
};

module.exports = { getNearbyClinics };
