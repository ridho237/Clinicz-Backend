const tf = require('@tensorflow/tfjs-node');
const { allWordsObat } = require('../data/obat/all_word');
const { obatLabels } = require('../data/obat/classes_obat');
const { deskripsiObat } = require('../data/obat/desc_obat');
const { kandunganObat } = require('../data/obat/kandungan_obat');
const { dosisObat } = require('../data/obat/dosis_obat');
const { aturanPakaiObat } = requiree('../data/obat/aturanPakai_obat');
const { efekSampingObat } = require('../data/obat/efekSamping_obat');
const { linkStoreObat } = require('../data/obat/link_obat');
const { sumberObat } = require('../data/obat/sumber_obat');

async function classifyObat(modelB, gejalaText, penyakitText) {
	const [inputGejala, inputPenyakit] = preprocessDualInput(gejalaText, penyakitText);
	const tensorGejala = tf.tensor([inputGejala], [1, 50]);
	const tensorPenyakit = tf.tensor([inputPenyakit], [1, 50]);
	const predictions = modelB.predict([tensorGejala, tensorPenyakit]);
	const predictionArray = predictions.dataSync();

	let maxIndex = 0;
	for (let i = 1; i < predictionArray.length; i++) {
		if (predictionArray[i] > predictionArray[maxIndex]) {
			maxIndex = i;
		}
	}

	const namaObat = obatLabels[maxIndex];
	const deskripsi = deskripsiObat[deskripsiObat] ?? 'Maaf Data deskripsi obat tersebut belum tersedia.';
	const kandungan = kandunganObat[kandunganObat] ?? 'Maaf Data kandungan obat tersebut belum tersedia.';
	const dosis = dosisObat[dosisObat] ?? 'Maaf Data dosis obat tersebut belum tersedia.';
	const aturanPakai = aturanPakaiObat[aturanPakaiObat] ?? 'Maaf Data aturan pakai obat tersebut belum tersedia.';
	const efekSamping = efekSampingObat[efekSampingObat] ?? 'Maaf Data efek samping obat tersebut belum tersedia.';
	const linkStore = linkStoreObat[linkStoreObat] ?? 'Maaf Data link Obat tersebut belum tersedia.';
	const sumber = sumberObat[sumberObat] ?? 'Maaf Data sumber Obat tersebut belum tersedia.';

	return [
		{
			obat: namaObat,
			deskripsi: deskripsi,
			kandungan: kandungan,
			dosis: dosis,
			aturanPakai: aturanPakai,
			efekSamping: efekSamping,
			linkStore: linkStore,
			sumber: sumber,
		},
	];
}

function preprocessDualInput(gejalaText, penyakitText) {
	const preprocess = (text, wordMap) => {
		if (typeof text !== 'string') {
			text = String(text ?? '');
		}

		text = text.replace(/[,.]/g, '').toLowerCase();
		const tokens = text.split(' ');
		const result = tokens.map((t) => wordMap[t] ?? 1);

		if (result.length < 50) {
			result.push(...Array(50 - result.length).fill(0));
		}
		return result.slice(0, 50);
	};

	const gejala = preprocess(gejalaText, allWordsObat);
	const penyakit = preprocess(penyakitText, allWordsObat);
	return [gejala, penyakit];
}

module.exports = { preprocessDualInput, classifyObat };
