const axios = require('axios');
const haversineDistance = require('../utils/geoUtils');

const RADIUS = 5000;
const MAPS_API_URL = process.env.MAPS;

const buildQuery = (lat, lng) => `
    [out:json];
    (
        node["amenity"="clinic"](around:${RADIUS},${lat},${lng});
        node["healthcare"="clinic"](around:${RADIUS},${lat},${lng});
        node["amenity"="doctors"](around:${RADIUS},${lat},${lng});
        node["healthcare"="doctor"](around:${RADIUS},${lat},${lng});
        node["amenity"="hospital"](around:${RADIUS},${lat},${lng});
        node["healthcare"="hospital"](around:${RADIUS},${lat},${lng});
        node["healthcare"="dentist"](around:${RADIUS},${lat},${lng});
        node["amenity"="pharmacy"](around:${RADIUS},${lat},${lng});
        way["amenity"="clinic"](around:${RADIUS},${lat},${lng});
        way["healthcare"="clinic"](around:${RADIUS},${lat},${lng});
        way["amenity"="doctors"](around:${RADIUS},${lat},${lng});
        way["healthcare"="doctor"](around:${RADIUS},${lat},${lng});
        way["amenity"="hospital"](around:${RADIUS},${lat},${lng});
        way["healthcare"="hospital"](around:${RADIUS},${lat},${lng});
        way["healthcare"="dentist"](around:${RADIUS},${lat},${lng});
        way["amenity"="pharmacy"](around:${RADIUS},${lat},${lng});
        );
    out center;
    `;

const fetchOverpassData = async (query) => {
	const response = await axios.post(MAPS_API_URL, query, {
		headers: { 'Content-Type': 'text/plain' },
	});
	return response.data.elements;
};

const formatClinics = (elements, userLat, userLng) => {
	return elements
		.map((el) => {
			const lat2 = el.lat || el.center?.lat;
			const lng2 = el.lon || el.center?.lon;

			return {
				name: el.tags?.name || 'Unnamed Clinic',
				address: el.tags?.['addr:full'] || el.tags?.['addr:street'] || 'No address info',
				lat: lat2,
				lng: lng2,
				distance: haversineDistance(parseFloat(userLat), parseFloat(userLng), lat2, lng2),
				tags: el.tags,
				mapLink: `https://www.google.com/maps?q=${lat2},${lng2}`,
			};
		})
		.sort((a, b) => a.distance - b.distance)
		.slice(0, 5);
};

const getClinicsFromOverpass = async (lat, lng) => {
	const query = buildQuery(lat, lng);
	const elements = await fetchOverpassData(query);
	return formatClinics(elements, lat, lng);
};

module.exports = { getClinicsFromOverpass };
