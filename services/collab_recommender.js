const fs = require('fs');
const path = require('path');

const cosineMatrix = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../model/obat_recomender/cosine_similarity_matrix.json'))
);
const drugsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../model/obat_recomender/drug_reference_data.json')));

function recommendObat(obatUtama, penyakit) {
	const filteredDrugs = drugsData.filter((item) => item['Disease (Penyakit)'] === penyakit && item['Obat'] !== obatUtama);

	if (filteredDrugs.length === 0) {
		return [];
	}

	return filteredDrugs
		.map((item) => {
			const similarity = cosineMatrix[obatUtama]?.[item.Obat] ?? 0;
			return {
				obat: item.Obat,
				kandungan: item.Kandungan,
				similarity: parseFloat(similarity.toFixed(3)),
			};
		})
		.sort((a, b) => b.similarity - a.similarity);
}

module.exports = { recommendObat };
