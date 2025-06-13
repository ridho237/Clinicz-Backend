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

	const [label, link] = text.split('\n');
	if (!label || !link) return [];

	const key = label.trim().replace(/:$/, '');
	return [{ [key]: link.trim() }];
}

module.exports = { transposeDrugData, parseTokoLink };
