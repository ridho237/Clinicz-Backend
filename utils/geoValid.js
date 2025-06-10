const validateCoordinates = (lat, lng) => {
	if (lat === undefined || lng === undefined || isNaN(lat) || isNaN(lng)) {
		return 'Latitude dan longitude Harus berupa angka.';
	}
	return null;
};
module.exports = {
	validateCoordinates,
};
