const axios = require('axios');
const haversineDistance = require('../utils/haversine');

const getNearbyClinics = async (req, res) => {
	const { lat, lng } = req.body;

	if (!lat || !lng) {
		return res.status(400).json({ error: 'Latitude and longitude are required' });
	}

	const radius = 5000;
	const overpassUrl = 'https://overpass-api.de/api/interpreter';

	const query = `
	[out:json];
	(
	node["amenity"="clinic"](around:${radius},${lat},${lng});
	node["healthcare"="clinic"](around:${radius},${lat},${lng});
	node["amenity"="doctors"](around:${radius},${lat},${lng});
	node["healthcare"="doctor"](around:${radius},${lat},${lng});
	node["amenity"="hospital"](around:${radius},${lat},${lng});
	node["healthcare"="hospital"](around:${radius},${lat},${lng});
	node["healthcare"="dentist"](around:${radius},${lat},${lng});
	node["amenity"="pharmacy"](around:${radius},${lat},${lng});
	way["amenity"="clinic"](around:${radius},${lat},${lng});
	way["healthcare"="clinic"](around:${radius},${lat},${lng});
	way["amenity"="doctors"](around:${radius},${lat},${lng});
	way["healthcare"="doctor"](around:${radius},${lat},${lng});
	way["amenity"="hospital"](around:${radius},${lat},${lng});
	way["healthcare"="hospital"](around:${radius},${lat},${lng});
	way["healthcare"="dentist"](around:${radius},${lat},${lng});
	way["amenity"="pharmacy"](around:${radius},${lat},${lng});
	);
	out center;
	`;

	try {
		const response = await axios.post(overpassUrl, query, {
			headers: { 'Content-Type': 'text/plain' },
		});

		const elements = response.data.elements;

		let clinics = elements.map((el) => {
			const lat2 = el.lat || el.center?.lat;
			const lng2 = el.lon || el.center?.lon;

			return {
				name: el.tags?.name || 'Unnamed Clinic',
				address: el.tags?.['addr:full'] || el.tags?.['addr:street'] || 'No address info',
				lat: lat2,
				lng: lng2,
				distance: haversineDistance(parseFloat(lat), parseFloat(lng), lat2, lng2),
				tags: el.tags,
			};
		});

		clinics.sort((a, b) => a.distance - b.distance);
		clinics = clinics.slice(0, 5);

		res.json({ clinics });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: 'Failed to fetch clinic data' });
	}
};

module.exports = { getNearbyClinics };
