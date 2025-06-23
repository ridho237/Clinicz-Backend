function transposeDrugData(columnData) {
	const length = Object.values(columnData['Obat']).length;
	const result = [];

	for (let i = 0; i < length; i++) {
		const entry = {};
		for (const key in columnData) {
			entry[key] = columnData[key][i.toString()] ?? '-';
		}
		result.push(entry);
	}
	return result;
}

function parseTokoLink(text) {
	if (!text || typeof text !== 'string') return [];

	const [label, link] = text.split(/\r?\n/);
	if (!label || !link) return [];

	const toko = label.trim().replace(/:$/, '');
	const url = link.trim();

	return [{ Toko: toko, Link: url }];
}

module.exports = { transposeDrugData, parseTokoLink };
