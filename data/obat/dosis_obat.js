const dosisObat = {
	'Bodrex Migra': 'Dewasa: 1 kaplet, 3x sehari',
	'Panadol Extra':
		'Dewasa dan Anak-anak > 12 tahun: 1 kaplet diminum sebanyak 3 - 4 kali sehari. Dosis tidak boleh melebihi 8 kaplet per hari',
	'Farsifen Plus': 'Dewasa dan anak-anak berusia > 12: 1 kaplet, 3 - 4  kali sehari',
	Paracetamol:
		'Bentuk: Tablet 500 mg\nDewasa dan anak-anak berusia > 12 tahun: 1 tablet dikonsumsi sebanyak 3 - 4x sehari\nAnak-anak berusia 6 - 12 tahun: 1/2 - 1 tablet dikonsumsi sebanyak 3 - 4x sehari\n\nBentuk: SIrup 125 mg\nAnak-anak berusia 0 – 1 tahun: 1/2 sendok takar (2.5 ml) diminum sebanyak 3 - 4x sehari\nAnak-anak berusia 1 – 2 tahun: 1 sendok takar (5 ml) diminum sebanyak 3 - 4x sehari\nAnak-anak berusia 2 – 6 tahun: 1 - 2 sendok takar (5 - 10 ml) diminum sebanyak 3 - 4x sehari\nAnak-anak berusia 6 – 9 tahun: 2 - 3 sendok takar (10 - 15 ml) diminum sebanyak 3 - 4x sehari\nAnak-anak berusia 9 – 12 tahun: 3 - 4 sendok takar (15 - 20 ml) diminum sebanyak 3 - 4x sehari',
	Ibuprofen:
		'Dosis Ibuprofen Dewasa:\nDosis: 200 - 400 mg setiap 4 - 6 jam sesuai kebutuhan\nDosis maksimum: 1.200 mg per hari untuk penggunaan OTC (over-the-counter). Untuk penggunaan yang diresepkan, dosis dapat mencapai 2.400 mg per hari di bawah pengawasan medis.',
	Amoxicillin:
		'Dewasa: Dosis amoxicillin untuk mengobati penyakit faringitis atau peradangan pada tenggorokan ditentukan berdasarkan bobot kandungan pada obat tersebut, terbagi ke dalam 2 dosis antara lain:\nDosis 500 mg, dikonsumsi sebanyak 3x sehari\nDosis 750 – 1.000 mg, dikonsumsi sebanyak 2x sehari. \n\nUntuk infeksi berat dosisnya adalah 750 – 1.000 mg, dikonsumsi sebanyak 3x sehari selama 10 hari\n\n\nAnak dengan berat badan < 40 kg: 40 – 90 mg/kg BB per hari yang bisa dibagi ke dalam beberapa kali pemberian.',
	'Iliadin Nasal Spray': 'Dewasa dan anak-anak > 6 tahun: 2 kali sehari, sebanyak 2 - 3 semprot',
	'Breathy Nasal Drops':
		'Dapat digunakan oleh anak-anak berusia > 1 bulan dan orang dewasa dengan dosis 1 - 2 tetes pada masing-masing lubang hidung',
	'Betahistine Mesylate': 'Dewasa: 6 - 12 mg 3x sehari',
	Betaserc:
		'Betaserc tablet 8 mg\nDosis 1 – 2 tablet dikonsumsi sebanyak 3x sehari\n\nBetaserc tablet 24 mg\nDosis 1 tablet dikonsumsi sebanyak 2x sehari',
	'Mertigo SR':
		'Mertigo tablet\nDewasa (usia > 18 tahun): 1 – 2 tablet, 3x sehari.\n\nMertigo SR tablet lepas lambat\nDewasa (usia > 18 tahun): 1 tablet, 2x sehari.',
	'Clopidogrel Bisulfate': 'Dewasa: 75 mg dikonsumsi sebanyak 1x sehari',
	Cholestor: 'Dosis pencegahan: 10 mg per hari. Dosis tersebut dapat ditingkatkan sesuai dengan kondisi pasien',
	Pradaxa:
		'Dewasa: 1 kapsul (150 mg) dikonsumsi sebanyak 2x sehari\n\nDewasa > 80 tahun: 1 kapsul (110 mg) dikonsumsi sebanyak 2x sehari',
	'Ciprofloxacin Tablet': 'Dosis: 2x sehari atau sesuai petunjuk dokter.',
	Dexamethasone:
		'Dewasa: Dosis awal 0,5 – 9 mg dikonsumsi sebanyak 2 – 4x sehari. Dosis akan disesuaikan dengan tingkat keparahan penyakit dan respons pasien terhadap pengobatan.\n\nAnak-anak: Dosis awal 0,02 – 0,3 mg/kg BB dikonsumsi sebanyak 3 – 4x sehari. Dosis akan disesuaikan dengan tingkat keparahan penyakit dan respons pasien terhadap pengobatan.',
	'Zovirax Tablet':
		'Dewasa dan anak-anak berusia > 2 tahun: 1 tablet dikonsumsi sebanyak 5x sehari yang diberikan setiap 4 jam. Dosis ini diberikan selama 5 - 10 hari\n\nAnak-anak berusia < 2 tahun: Setengah dari dosis orang dewasa',
	Tegretol:
		'Dewasa:\nDosis awal: 100 – 200 mg dikonsumsi sebanyak 2x sehari. Dosis obat ini dapat ditingkatkan secara bertahap sesuai dengan kondisi.\n\nDosis perawatan: 400 – 800 mg per hari yang dibagi dalam beberapa jadwal konsumsi. Dosis maksimal obat ini adalah 1.200 mg per hari.',
	Bamgetol:
		'Dewasa:\nDosis awal: 100 – 200 mg dikonsumsi sebanyak 2x sehari. Dosis dari obat ini dapat ditingkatkan secara bertahap sesuai dengan kondisi.\n\nDosis perawatan: 200 – 800 mg per hari yang dibagi dalam beberapa jadwal konsumsi. Dosis maksimal dari obat ini adalah 1.200 mg per hari.',
	Lioresal:
		'Dosis awal:\nDewasa dan anak-anak berusia ≥ 12 tahun: 5 mg dikonsumsi sebanyak 3x sehari. Dosis tersebut dapat ditingkatkan secara bertahap sesuai dengan kondisi dari pasien\nAnak-anak: 0.3 mg/kg dikonsumsi sebanyak 3x sehari\n\nDosis pemeliharaan:\nAnak-anak berusia ≥ 8 tahun: 60 mg per hari\nAnak-anak berusia 6 - 8 tahun: 30 - 40 mg',
	Rogaine:
		'Bentuk Cair:\nDewasa: Oleskan 1 mL ke kulit kepala dilakukan sebanyak 2x sehari.\nAnak-anak > 18 tahun: Dosis dan penggunaan minoxidil harus dikonsultasikan kembali dengan dokter\n\nBentuk Foam:\nDewasa: Oleskan setengah tutup botol ke kulit kepala dilakukan sebanya 2x sehari.\nAnak-anak > 18 tahun: Dosis dan penggunaan minoxidil harus dikonsultasikan kembali dengan dokter\n',
	'Regrou Forte':
		'Oleskan 1 ml regrou forte pada bagian kulit kepala yang mengalami kebotakan yang dilakukan sebanyak 2x sehari pada pagi dan malam hari',
	Finasteride: 'Dewasa: 1 mg dikonsumsi sebanyak 1x sehari. Obat ini diberikan selama minimal 3 bulan',
	'Amoxsan Tablet': 'Dewasa: 250 -  500 mg dikonsumsi 3x sehari',
	'Cefixime Trihydrate':
		'Dewasa: 400 mg dikonsumsi sebanyak 1x sehari atau 200 mg tiap 12 jam sekali\n\nAnak 6 bulan – 12 tahun: 8 mg/kg BB per hari atau 4 mg/kg / BB per 12 jam\n\nAnak dengan BB > 45 kg: 400 mg dikonsumsi sebanyak 1x sehari atau 200 mg tiap 12 jam',
	'Akilen Tetes Telinga':
		'Dewasa: 6 - 10 tetes diberikan sebanyak 2x sehari pada telinga yang bermasalah. Durasi pemberian obat dilakukan selama 14 hari\n\nAnak-anak berusia 1 - 12 tahun: 5 tetes diberikan sebanyak 2x sehari pada telinga yang bermasalah. Durasi pemberian obat dilakukan selama 10 hari',
	'Forotic Tetes Telinga':
		'Dosis: 6 - 10 tetes pada telinga yang mengalami masalah diberikan sebanyak 2x sehari. Obat tetes ini diberikan selama 14 hari',
	'Erlamycetin Tetes Telinga':
		'Dewasa dan anak-anak: 2 - 3 tetes diberikan sebanyak 3x sehari. Obat ini diberikan pada telinga yang bermasalah selama 1 minggu',
	'Alat Bantu Pendengaran': '-',
	Stapedektomi: '-',
	'Cochlear Implant': '-',
	'Cendo Floxa':
		'Dewasa dan anak-anak berusia ≥ 1 tahun: Teteskan 1 - 2 tetes pada mata yang sakit dan dilakukan setiap 2 - 4 jam selama 2 hari. Pada hari ke-3 dan seterusnya, dosis bertambah menjadi 1 - 2 tetes yang diberikan sebanyak 4x sehari.',
	'Erlamycetin Tetes Mata':
		'Dosis 5 ml:\nDewasa dan anak-anak berusia ≥ 2 tahun: 1 - 4x sehari dengan dosis 1 tetes pada mata yang mengalami infeksi. Untuk infeksi konjungtivitis akut, berikan obat tetes setiap 1 jam atau dapat mengikuti petunjuk dokter\n\nDosis 10 ml:\nDewasa dan anak-anak berusia ≥ 2 tahun: 6x sehari dengan dosis 1 - 2 tetes pada mata yang mengalami infeksi',
	'Polidemisine Eye Drop': 'Dewasa & anak usia ≥ 2 tahun: 1–2 tetes, 4–6 kali sehari.',
	'Zovirax Cream':
		'Dewasa dan anak-anak: Oleskan zovirax secara merata sebanyak 5x sehari. Obat ini diberikan selama 5 - 10 hari',
	'Acyclovir Tablet':
		'Dewasa Anak usia ≥ 2 tahun: 200 mg dikonsumsi sebanyak 5x per hari. Obat ini dikonsumsi selama 10 hari. Untuk mencegah penyakit kambuh, dosis dari obat dapat ditingkatkan menjadi 200 – 400 mg yang dikonsumsi sebanyak 5x per hari atau 400 mg dengan konsumsi sebanyak 2x sehari.\n\nAnak usia < 2 tahun: Setengah dari dosis orang dewasa.',
	'Valacyclovir HCL':
		'Dewasa dan anak-anak berusia ≥ 12 tahun: 500 mg dikonsumsi sebanyak 2x sehari. Untuk pengobatan awal, obat ini diberikan selama 10 hari. Sedangkan, bagi pasien yang mengalami kambuh pengobatan dapat dilakukan selama 3 - hari',
	'Vfend Voriconazole':
		'Dewasa dengan berat badan ≥ 40 kg: Dosis awal diberikan sebanyak 400 mg setiap 12 jam. Pada hari ke-2 dan seterusnya, dosis diturunkan menjadi 200 mg setiap 12 jam\n\nDewasa dengan berat badan < 40 kg: Dosis awal diberikan sebanyak 200 mg setiap 12 jam. Pada hari ke-2 dan seterusnya, dosis diturunkan menjadi 100 mg setiap 12 jam\n\nAnak-anak berusia 2 - 14 tahun dengan berat badan < 50 kg: 9 mg/kg BB yang diberikan tiap 12 jam. Dosis maksimal yang dapat diberikan adalah 350 mg',
	'Cendo Natacen':
		'Dewasa: 1 tetes setiap 1 - 2 jam. Dosis tersebut dapat dikurangi menjadi 1 tetes setiap 3 - 4 jam, jika gejala keratitis sudah mulai membaik setelah penggunaan obat selama 3 - 4 hari. Obat ini diberikan selama 2 - 3 minggu',
	'Cendo Xitrol':
		'Dewasa dan anak-anak: 1 - 2 tetes setiap 1 - 2 jam. Obat tetes diberikan pada siang dan malam hari. Dosis tersebut dapat dikurangi menjadi 1 - 2 tetes setiap 4 - 6 jam jika keluhan sudah membaik',
	'Erlamycetin Salep Mata':
		'Dewasa dan anak-anak berusia ≥ 2 tahun: Oleskan erlamysetin salep mata pada yang mengalami infeksi sebanyak 3 - 4x sehari. Obat ini diberikan selama 5 hari dan pemberiannya dilanjutkan selama 2 hari setelah infeksi mata sembuh total',
	'Cardio Aspirin':
		'Dosis: 75 - 150 mg per hari. Dosis tersebut bukanlah dosis umum yang dapat dikonsumsi oleh semua pasien. Kondisi dan respons pasien terhadap pengobatan merupakan aspek penting dalam penentuan dosis obat',
	Farnormin:
		'Dewasa: \nDosis awal: 50 mg dikonsumsi sebanyak 1x sehari. Dosis dapat disesuaikan dengan kondisi dan respon tubuh yang diberikan oleh pasien terhadap pengobatan dengan dosis tersebut\nDosis perawatan: 50 - 100 mg dikonsumsi sebanyak 1x sehari\n\n\nLansia: 25 mg/hari. Dosis tersebut dapat ditingkatkan menjadi 100 mg/hari dengan interval waktu 1 minggu dari dosis awal',
	Triatec: 'Dewasa: 1.25 mg dikonsumsi sebanyak 1x dalam sehari. Dosis tersebut dapat ditingkatkan menjadi 10 mg per hari',
	Concor:
		'Dewasa: 1.25 mg dikonsumsi sebanyak 1x sehari. Obat ini diberikan selama 1 minggu. Dosis dari obat ini dapat ditambahkan jika tubu pasien menunjukkan respon yabg baik terhadap pengobatan. Peningkatan tersebut dilakukan secara bertahap setiap 1 - 4 minggu dengan dosis maksimal adalah 10 mg / hari',
	Spironolactone: 'Dewasa: 25 mg dikonsumsi 1x sehari. Dosis tersebut dapat ditingkatkan menjadi 50 mg / hari',
	Rifampicin:
		'Dewasa dengan berat badan ≥ 50 kg: 600 mg / hari\n\nDewasa dengan berat badan < 50 kg: 450 mg / hari\n\nAnak-anak berusia > 3 bulan: 10 - 20 mg / kg BB dengan dosis maksimum adalah 600 mg',
	'Nitrokaf Retard': 'Dewasa: 2.5 - 5 mg dikonsumsi sebanyak 3 - 4x sehari',
	'Amlodipine Besylate':
		'Dewasa: 5 mg dikonsumsi 1x sehari. Dosis tersebut dapat ditingkatkan menjadi 10 mg yang dikonsumsi 1x sehai, jika kondisi dan respons pasien terhadap obat pengobatan baik setelah 1 - 2 minggu pengobatan awal\n\nAnak-anak berusia 6 - 17 tahun: 2,5 mg dikonsumsi sebanyak 1x sehari. Dosis tersebut dapat ditingkatkan menjadi 5 mg yang dikonsumsi sebanyak 1x sehari setelah berselang 4 minggu dari dosis awal. Peningkatan dosis ini ditentukan berdasarkan kondisi dan respons dari pasien terhadap pengobatan dengan dosis awal\n\nLansia: 2.5 mg dikonsumsi 1x sehari',
	'Simarc 2':
		'Dosis awal: 5 - 10 mg per hari. Dosis tersebut diberikan selama 1 - 2 hari\n\nDosis perawatan: 2 - 10 mg per hari. Dosis ini dapat berubah tergantung dengan hasil tes darah yang dilakukan',
	Lasix:
		'Dewasa: 20 - 80 mg dikonsumsi sebanyak 1x sehari. Dosis obat dapat ditingkatkan menjadi 20 - 40 mg yang diberikan 6 - 8 jam setelah dosis awal diberikan jika kondisi pasien sudah mulai membaik\n\nAnak-anak: 2 mg/kg BB diberikan sebanyak 1x sehari. Dosis pemberian obat dapat ditingkatkan menjadi 3 - 4 mg/kg BB yang diberikan sekitar 6 - 8 jam setelah dosis awal diberikan jika kondisi pasien sudah mulai membaik',
	Rifastar:
		'Berat badan > 71 kg: 5 tablet dikonsumsi sebanyak 1x sehari\n\nBerat badan 55 - 70 kg: 4 tablet dikonsumsi sebanyak 1x sehari\n\nBerat badan 38 - 54 kg: 3 tablet dikonsumsi sebanyak 1x sehari\n\nBerat badan 30 - 37 kg: 2 tablet dikonsumsi sebanyak 1x sehari',
	Isoniazid:
		'Kondisi TBC aktif dan tuberculosis yang menyebar ke organ lain\nDewasa: 5 mg/kg BB. Dengan dosis maksimum 300 mg per hari \nAnak-anak: 10 - 15 mg/kg BB per hari. Dengan dosis maksimum 300 mg per hari\n\nKondisi Tuberculosis Laten\nDewasa: 300 mg per hari. Dosis ini diberikan selama 6 bulan\nAnak-anak: 10 mg/kg BB per hari. Dosis ini diberikan selama 6 bulan dengan dosis maksimum 300 mg per hari',
	'Ventolin Inhaler': 'Dosis: 1 - 2x hisap pada saat serangan asma terjadi',
	'Seretide Inhaler': 'Dewasa dan anak-anak berusia > 2 tahun: 2x hirup diberikan sebanyak 2x sehari',
	'Symbicort Turbuhaler':
		'Dewasa dan anak-anak berusia > 12 tahun: 1 - 2x hirup diberikan sebanyak 2x sehari pada pagi dan sore. Dosis maksimal dari obat ini sebesar 4x hirup\n\nAnak-anak berusia > 6 tahun: 1x hirup diberikan sebanyak 1x sehari dengan dosis maksimal dalam sehari adalah 4x hirup',
	Tamiflu:
		'Dewasa:\nKondisi: Pencegahan\nDosis 75 mg (1 tablet) diberikan sebanyak 1x sehari. Obat ini diberikan dalam rentang waktu 10 hari - 6 minggu\n\nKondisi: Pengobatan\nDosis 75 mg (1 tablet) diberikan sebanyak 2x sehari. Obat ini diberikan selama 5 hari\n\nAnak-anak berusia > 1 Tahun dengan berat badan > 60 kg: 75 mg\n\nAnak-anak berusia > 1 Tahun dengan berat badan 23 - 40 kg: 60 mg\n\nAnak-anak berusia > 1 Tahun dengan berat badan 15 - 23 kg: 45 mg\n\nAnak-anak berusia > 1 Tahun dengan berat badan < 15 kg: 30 mg\n\nBayi berusia 3 - 12 bulan: 3 mg/kg BB\n\nBayi berusia 1 - 3 bulan: 2.5 mg/kg BB\n\nBayi berusia 0 - 1 bulan: 2 mg/kg BB',
	'Panadol Cold & Flu':
		'Dewasa: 1 kaplet diminum sebanyak 3x sehari (tiap 4 - 6 jam). Dosis maksimal yang boleh dikonsumsi dari obat ini adalah 8 kaplet per hari',
	'Mixagrip Flu & Batuk':
		'Dewasa dan anak-anak berusia > 12 tahun: 1 kaplet dikonsumsi sebanyak 3x sehari\n\nAnak-anak berusia 6 - 12 tahun: 1/2 kaplet dikonsumsi sebanyak 3x sehari',
	Zithromax:
		'Dewasa: 500 mg hingga 1 g sekali sehari selama 7 hari atau 1 g pada hari pertama, kemudian 500 mg sekali sehari hingga hari ketujuh.\n\nAnak: 10 hingga 20 mg/kg (maks. 1 g) sekali sehari selama 7 hari.\n',
	'Avelox Moxifloxacin': '1 tablet per hari. Obat ini diberikan selama 10 hari.',
	Azithromycin:
		'Anak usia > 2 tahun:\nBentuk: Suspensi lepas cepat\n12 mg/kg BB per hari. Obat ini dikonsumsi selama 5 hari.',
	Seretide: 'Dewasa: 1 hirup diberikan sebanyak 2x sehari',
	'Trelegy Ellipta': 'Dosis: 1 hirup diberikan sebanyak 1x sehari. Obat ini tidak boleh digunakan lebih dari 1 hirup',
	'Spriva Respimat': 'Dosis: 1 - 2 hirup diberikan sebanyak 1x sehari',
	'Erythromycin ':
		'Dewasa: \nInfeksi Ringan - Sedang: 500 mg dikonsumsi setiap 12 jam \nInfeksi Berat: 1000 mg dikonsumsi setiap 6 jam. Dosis maksimal yang dapat dikonsumsi adalah 4 gram per hari\n\nAnak-anak: 30 – 50 mg/kg BB per hari, dibagi ke dalam 4 dosis. Dosis maksimal 4 gram per hari.',
	'Proris Sirup':
		'Bentuk: Proris Suspensi\nDewasa dan anak usia ≥ 8 tahun: 2 sendok takar (10 ml) diminum sebanyak 3 – 4x sehari.\n\nAnak usia 3 – 7 tahun: 1 sendok takar (5 ml) diminum sebanyak 3 – 4x sehari.\n\nAnak usia 1 – 2 tahun: ½ sendok takar (2,5 ml) diminum sebanyak 3 – 4x sehari.',
	'Promedex Sirup':
		'Dewasa dan anak usia > 12 tahun: 2 – 3 sendok takar (10 - 15 ml) diminum sebanyak 3x sehari.\n\nAnak usia 6 – 12 tahun: 1 sendok takar (5 ml) diminum sebanyak 3x sehari\n\nAnak usia 2 – 6 tahun: ½ sendok takar (2.5 ml) diminum sebanyak 3x sehari',
	Entrostop:
		'Dewasa dan anak-anak berusia > 12 tahun: 2 tablet dikonsumsi setiap kali buang air besar. Dosis maksimal dari obat ini adalah 12 tablet per hari\n\nAnak-anak berusia 6 - 12 tahun: 1 tablet dikonsumsi setiap kalo buang air besar. Dosis maksimal dari obat ini adalah 6 tablet per hari',
	Diapet: 'Dewasa: 2 kapsul, 2 kali sehari. Untuk diare akut, dosisnya 2 kapsul, 2 kali sehari dengan selang waktu 1 jam.',
	Imodium:
		'Kondisi: Diare akut\nDewasa (usia ≥ 18 tahun): Dosis awal 2 tablet. Selanjutnya, 1 tablet setelah BAB cair. Dosis maksimal 16 mg atau 8 tablet per hari.\n\nKondisi: Diare kronis\nDewasa (usia ≥ 18 tahun): Dosis awal 2 tablet. Berikutnya, 1 tablet setelah BAB cair. Dosis harian umumnya adalah 1 – 6 tablet. Dosis maksimal adalah 16 mg atau 8 tablet per hari.',
	'Polysilane Suspensi':
		'Dewasa dan anak usia > 12 tahun: 1–2 sendok takar (5–10 ml), 3–4 kali sehari.\n\nAnak usia 6 – 12 tahun: ½–1 sendok takar (2.5–5 ml), 3 – 4 kali sehari.',
	'Promag Suspensi':
		'Dewasa: 1 - 2 sendok takar (5 - 10 ml), diminum sebanyak 3 - 4x sehari.\n\nAnak usia 6 - 12 tahun: 1 sendok takar (5 ml), diminum sebanyak 3 - 4x sehari.',
	Omeprazole:
		'Dewasa: 20 mg atau 40 mg, 1 kali sehari, selama 4 minggu untuk ulkus duodenum dan 8 minggu untuk tukak lambung. Dosis pemeliharaan 10–20 mg, 1 kali sehari, dapat ditingkatkan hingga 40 mg bila perlu.',
	'Promag suspensi':
		'Dewasa: 1 - 2 sendok takar (5 - 10 ml), diminum sebanyak 3 - 4x sehari.\n\nAnak usia 6 - 12 tahun: 1 sendok takar (5 ml), diminum sebanyak 3 - 4x sehari.',
	Ranitidine: 'Dewasa: 150 mg 2 kali sehari, selama 6 minggu.',
	Dulcolax: 'Dewasa dan anak usia > 10 tahun: 1–2 tablet per hari.\n\nAnak usia 6 – 10 tahun: 1 tablet per hari.',
	Laxatab:
		'Dewasa dan anak usia > 12 tahun: 2 tablet, 1 kali sehari.\n\nAnak-anak usia 6 - 12 tahun: 1 tablet, 1 kali sehari.',
	Lactulax:
		'Dewasa: 15 - 45 mL per hari.\n\nAnak-anak berusia 6 - 14 tahun: 15 mL per hari.\n\nAnak-anak berusia 1 - 5 tahun: 5 - 10 mL per hari.\n\nAnak-anak berusia < 1 tahun: 5 mL per hari.',
	Ambeven: '2 kapsul, 3 kali sehari.',
	'Ardium 500':
		'Wasir akut: 6 tablet per hari selama 4 hari pertama, kemudian 4 tablet per hari selama 3 hari.\n\nWasir kronis atau gangguan peredaran darah di kaki: 2 tablet per hari.',
	'Nutrafor Wazzir': '2 kali sehari 2 kapsul',
	'Lanpracid Kapsul': '1 kapsul perhari. Durasi pengobatan dilakukan selama 8 minggu',
	'Grafazol Kaplet':
		'Dewasa: 400 mg dikonsumsi sebanyak 2x sehari. Obat ini biasanya dikombinasikan dengan omeprazole, amoxicillin, obat proton pump inhibitor atau obat antibotik lainnya\r\n\nAnak-anak: Dosis untuk obat ini pada anak-anak akan ditentukan berdasarkan berat badan masing-masing anak yang ditentukan oleh dokter',
	Floxigra: '2 kali sehari atau sesuai petunjuk dokter.',
	'Flagyl Forte':
		'Dewasa: 500 - 750 mg dikonsumsi sebanyak 3x sehari. Obat ini dikonsumsi selama 5 - 10 hari\n\nAnak-anak: 35 - 50 mg/kg BB dikonsumsi sebanyak 3x sehari. Obat ini dikonsumsi selama 10 hari',
	Metronidazole: 'Dosis: 3 kali sehari, selama 5–10 hari.',
	Duspatalin: 'Dosis: 1 tablet dikonsumsi sebanyak 3x sehari',
};

module.exports = { dosisObat };
