const obatLabels = {
	1: 'Paracetamol',
	2: 'Bodrex Migra',
	3: 'Panadol Extra',
	4: 'Natrium Diklofenak',
	5: 'Farsifen Plus',
	6: 'Proris Kaplet',
	7: 'Sanmol Forte',
	8: 'Ibuprofen',
	9: 'Asam Mefenamat',
	10: 'Tremenza',
	11: 'Amoxicillin Tablet',
	12: 'Iliadin Nasal Spray',
	13: 'Methylprednisolone',
	14: 'Cetirizine',
	15: 'Cefadroxil Monohydrate',
	16: 'Levofloxacin',
	17: 'Breathy Nasal Drops',
	18: 'Breathy Nasal Spray',
	19: 'Nasonex Nasal Spray',
	20: 'Amoxsan',
	21: 'Rhinos SR',
	22: 'Betahistine',
	23: 'Mertigo SR',
	24: 'Betaserc',
	25: 'Dimenhydrinate',
	26: 'Histigo',
	27: 'Vastigo',
	28: 'Merislon',
	29: 'Frego',
	30: 'Flunarizine',
	31: '-',
	32: 'Tegretol',
	33: 'Lameson',
	34: 'Bamgetol',
	35: 'Gabapentin',
	36: 'Lioresal',
	37: 'Amitriptyline',
	38: 'Rogaine',
	39: 'Regrou Forte',
	40: 'Regrou Hair Regrowth',
	41: 'Eminox',
	42: 'Sanbe Hair',
	43: 'Finasteride',
	44: 'Baricitinib',
	45: 'Erlamycetin Tetes Telinga',
	46: 'Reco Tetes Telinga',
	47: 'Akilen Tetes Telinga',
	48: 'Ofloxacin Ear Drop',
	49: 'Otopain Ear Drop',
	50: 'Otilon Ear Drop',
	51: 'Erlamycetin Tetes Mata',
	52: 'Cendo Natacen',
	53: 'Cendo Floxa',
	54: 'Cendo Fenicol',
	55: 'Cendo Xitrol',
	56: 'Cendo Gentamicin Tetes',
	57: 'Cendo Gentamicin Salep',
	58: 'Reco Tetes Mata',
	59: 'Alegysal',
	60: 'Cendo LFX',
	61: 'Cendo Lytrees',
	62: 'Polidemisine Eye Drop',
	63: 'Cendo Tobroson',
	64: 'Rifampicin',
	65: 'Rifastar',
	66: 'Pro-TB',
	67: 'Ethambutol',
	68: 'Rifamtibi',
	69: 'Isoniazid',
	70: 'Pyrazinamide',
	71: 'Ventolin Inhaler',
	72: 'Velutine Inhalation',
	73: 'Seretide Inhaler',
	74: 'Symbicort Turbuhaler',
	75: 'Ventolin Nebules',
	76: 'Combivent UDV',
	77: 'Farbivent Inhalation',
	78: 'Bricasma Turbuhaler',
	79: 'Ambroxol',
	80: 'Mucos',
	81: 'Panadol Cold & Flu',
	82: 'Mixagrip Flu',
	83: 'Alco Plus DMP',
	84: 'Bodrex Flu',
	85: 'Azithromycin',
	86: 'Zithromax',
	87: 'Avelox Moxifloxacin',
	88: 'Zinnat',
	89: 'Cefdinir',
	90: 'Fluimucil Dry Sirup',
	91: 'Cefila Dry Sirup',
	92: 'Sanmol Sirup',
	93: 'Azithromycin Dry Sirup',
	94: 'FG Troches',
	95: 'Nytex Sirup',
	96: 'Prome Sirup',
	97: 'Cefixime Trihydrate',
	98: 'Erythromycin',
	99: 'Degirol',
	100: 'Longatin',
	101: 'Promedex Sirup',
	102: 'Tantum Lozenges',
	103: 'Helixim Dry Sirup',
	104: 'Bicrolid Kaplet',
	105: 'Attapulgite',
	106: 'Neo Diaform',
	107: 'Rillus',
	108: 'Zinc',
	109: 'Imodium',
	110: 'Oralit',
	111: 'Entrostop',
	112: 'Diapet',
	113: 'Lodia',
	114: 'New Diatabs',
	115: 'Smecta',
	116: 'Omeprazole',
	117: 'Antasida Doen',
	118: 'Polysilane Suspensi',
	119: 'Promag Suspensi',
	120: 'Promag Double Action',
	121: 'Sanmag Suspensi',
	122: 'Farmacrol Forte Suspensi',
	123: 'Sucralfate Suspensi',
	124: 'Lansoprazole',
	125: 'Ranitidine',
	126: 'Lanpracid Kapsul',
	127: 'Mylanta',
	128: 'Polycrol Forte Sirup',
	129: 'Bisacodyl',
	130: 'Dulcolax',
	131: 'Dulcolactol',
	132: 'Fleet enema',
	133: 'Laxatab',
	134: 'Microlax',
	135: 'Laxadine',
	136: 'Lactulax',
	137: 'Acitral Suspensi',
	138: 'Grafazol',
	139: 'Strocain P',
	140: 'Episan',
	141: 'Hufamycetin',
	142: 'Baquinor Forte',
	143: 'Pyxime',
	144: 'Floxigra',
	145: 'Ciprofloxacin',
	146: 'Cotrimoxazole',
	147: 'Flagyl Forte',
	148: 'New Syarbin',
	149: 'Metronidazole',
};
const aturanPakaiObat = {
	Paracetamol: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Bodrex Migra': 'Dapat dikonsumsi sesudah makan',
	'Panadol Extra': 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Natrium Diklofenak': 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Farsifen Plus': 'Dapat dikonsumsi setalah makan untuk menghindari terjadinya iritasi pada lambung',
	'Proris Kaplet': 'Dapat dikonsumsi sesudah makan',
	'Sanmol Forte': 'Dapat dikonsumsi sebelum atau sesudah makan',
	Ibuprofen: 'Dapat dionsumsi sebelum atau sesudah makan',
	'Asam Mefenamat': 'Dapat dikonsumsi sesudah makan',
	Tremenza: 'Dapat dikonsumsi seudah makan',
	'Amoxicillin Tablet':
		'Dapat dikonsumsi sebelum atau sesudah makan. Namun, konsumsi obat bersama makanan dapat meningkatkan penyerapan obat dan mengurangi efek samping pada lambung.',
	'Iliadin Nasal Spray':
		'Sebelum menyemprotkan obat ini ke dalam lubang hidung, sebaiknya pasien membersihkan terlebih dahulu lubang hidung yang akan disemprotkan. Selanjutnya barulah pasien dapat menyemprotkan obat ini ke dalam lubang hidung yang telah dibersihkan. Obat ini dapat digunakan pada pagi atau malam hari',
	Methylprednisolone: 'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan',
	Cetirizine: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Cefadroxil Monohydrate': 'Dapat dikonsumsi sesudah makan',
	Levofloxacin: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Breathy Nasal Drops': 'Dapat diteteskan ke dalam masing-masing lubang hidung',
	'Breathy Nasal Spray': 'Disemprotkan pada masing-masing hidung sesuai dengan dosis yang tertera',
	'Nasonex Nasal Spray': 'Disemprotkan pada lubang hidung sesuai dengan dosis yang tertera',
	Amoxsan: 'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan',
	'Rhinos SR': 'Dapat dikonsumsi sebelum atau sesudah makan',
	Betahistine: 'Dapat dikonsumsi sesudah makan',
	'Mertigo SR': 'Dapat dikonsumsi bersamaan dengan makanan atau sesudah makan',
	Betaserc: 'Dapat dikonsumsi sesudah makan',
	Dimenhydrinate: 'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan',
	Histigo: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Vastigo: 'Dapat dikonsumsi bersamaan dengan makan',
	Merislon: 'Dapat dikonsumsi sesudah makan',
	Frego: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Flunarizine: 'Dapat diberikan bersamaan atau tanpa makan',
	Tegretol: 'Dapat dikonsumsi bersamaan dengan makan untuk mencegah sakit perut, mual, atau muntah',
	Lameson: 'Dapat dikonsumsi sesudah makan',
	Bamgetol:
		'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan. Namun, disarankan untuk dikonsumsi bersamaan dengan makanan untuk mencegah terjadinya sakit perut, mual, atau muntah',
	Gabapentin: 'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan',
	Lioresal: 'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan',
	Amitriptyline: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Rogaine:
		'Bentuk Cair:\n- Pastikan kulit kepala dan rambut bersih dan kering sebelum menggunakan minoxidil.\n- Oleskan obat pada kulit kepala yang botak mulai dari bagian tengah.\n- Jangan mengeringkan area kulit kepala yang diolesi minoxidil dengan pengering rambut. Biarkan obat mengering dengan sendirinya. Penggunaan pengering rambut dapat mengurangi efektivitas minoxidil.\n- Jangan menutup kulit kepala yang sudah diolesi minoxidil dengan shower cap atau handuk. Biarkan kepala dalam kondisi terbuka.\n- Disarankan untuk tidak keramas setidaknya sampai 4 jam setelah menggunakan minoxidil.\n- Jangan lupa untuk selalu mencuci tangan setelah menggunakan minoxidil.\n\nBentuk Foam:\n- Belah rambut menjadi satu baris atau lebih untuk memaparkan obat ke area rambut yang mulai menipis di kulit kepala.\r\n- Pegang kaleng terbalik dan tekan nosel untuk meletakkan busa di jari\r\n- Gunakan jari untuk menyebarkan busa ke area rambut rontok dan pijat dengan lembut ke kulit kepala\r\n- Jangan lupa untuk selalu mencuci tangan setelah menggunakan minoxidil.',
	'Regrou Forte':
		'- Bersihkan area kepala yang akan diolesi\n- Keringkan area kepala yang ingin diolesi dengan regrou forte\n- Oleskan 1 ml regrou forte pada area kepala yang ingin diolesi\n- Lindungi bagian kepala yang sudah dioleskan dengan roegan',
	'Regrou Hair Regrowth': 'Oleskan atau semprotkan regrou hair regrowth pada bagian yang mengalami kebotakan',
	Eminox: 'Oleskan atau semprotkan eminox pada bagian yang mengalami kebotakan',
	'Sanbe Hair':
		'- Ambil cairan ke dalam dropper (alat tetes) sampai tanda garis 1ml\n- Tuang isi dropper ke area tengah kulit kepala yang mengalami kebotakan dan sebarkan merata dengan ujung jari\n- Penggunaan 2 kali sehari selama 4 bulan atau lebih mungkin diperlukan agar hasil dapat terlihat \n\nTotal dosis harian tidak boleh melebihi 2 ml\n',
	Finasteride: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Baricitinib:
		'Dapat dikonsumsi sebelum atau sesudah makan. Telan tablet baricitinib secara utuh dengan bantuan segelas air putih. Jika sulit menelannya dalam kondisi utuh, larutkan tablet dengan air sebanyak 2 sendok teh, kemudian aduk rata lalu dan segera diminum.',
	'Erlamycetin Tetes Telinga':
		'Teteskan erlamycetin pada telinga yang mengalami masalah sesuai dengan dosis yang ditentukan. Setelah obat diteteskan pada bagian telinga yang sakit, diamkan selama 5 - 10 menit',
	'Reco Tetes Telinga': 'Teteskan Reco pada telinga yang mengalami sakit',
	'Akilen Tetes Telinga':
		'Tetskan akilen pada telinga yang mengalami permasalahan sesuai dengan dosis yang telah ditetapkan',
	'Ofloxacin Ear Drop': 'Teteskan ofloxacin pada telinga yang sakit',
	'Otopain Ear Drop':
		'Teteskan otapin ear drop pada telinga yang bermasalah sesuai dengan dosis yang telah ditentukan',
	'Otilon Ear Drop':
		'Teteskan otapin ear drop pada telinga yang bermasalah sesuai dengan dosis yang telah ditentukan',
	'Erlamycetin Tetes Mata':
		'- Bersihkan tangan sebelum menggunakan obat\n- Posisikan kepala anda menghadap ke atas\n- Berikan 1 tetes pada mata yang mengalami infeksi dan tutup mata secara perlahan selama beberapa menit\n- Jangan membuka atau mengucek mata saat obat baru diteteskan\n- Ulangi proses tersebut jika anda mengalami infeksi pada kedua mata\n- Bersihkan kembali tangan dengan menggunakan sabun',
	'Cendo Natacen':
		'- Bersihkan tangan sebelum menggunakan obat\n- Bersihkan area mata dari kotoran, seperti kotoran mata menggunakan air hangat\n- Teteskan pada bagian mata yang mengalami infeksi',
	'Cendo Floxa':
		'- Cuci tangan yang ingin digunakan untuk memberikan obat\n- Posisikan kepala anda menghadap ke atas\n- Tarik kelopak mata bawah hingga membentuk kantung\n- Teteskan 1 tetes obat mata ke bagian mata yang sakit\n- Tutup mata secara perlahan dan diamkan selama beberapa menit',
	'Cendo Fenicol': 'Teteskan pada bagian mata yang sakit',
	'Cendo Xitrol':
		'- Bersihkan tangan sebelum menggunakan obat\n- Bersihkan area mata dari kotoran, seperti kotoran mata menggunakan air hangat\n- Teteskan pada bagian mata yang mengalami infeksi',
	'Cendo Gentamicin Tetes': 'Teteskan pada mata yang sakit',
	'Cendo Gentamicin Salep':
		'- Bersihkan tangan sebelum menggunakan obat\n- Bersihkan area mata dari kotoran\n- Oleskan pada area mata sesuai dengan dosis yang telah ditentukan',
	'Reco Tetes Mata':
		'- Cuci tangan sebelum dan sesudah menggunakan Reco Tetes Mata. Pastikan mata dalam kondisi bersih. Jangan memakai lensa kontak selama menggunakan obat tetes mata ini.\n- Dongakkan kepala ke belakang, tarik kelopak mata bagian bawah hingga membentuk kantung dengan satu tangan, lalu teteskan atau oleskan obat dengan tangan yang satunya.\n- Tutup mata selama 1–2 menit sambil memutar-mutar bola mata dengan tangan agar obat dalam meresap ke area infeksi.\n- Usap bercak cairan atau salep yang tersisa di sekitar mata. Anda boleh meneteskan kembali obat bila tetes pertama tidak masuk sepenuhnya ke mata.',
	Alegysal: 'Teteskan pada bagian mata yang sakit',
	'Cendo LFX': 'Teteskan pada bagian mata yang sakit',
	'Cendo Lytrees': 'Teteskan pada bagian mata yang sakit',
	'Polidemisine Eye Drop':
		'- Bersihkan tangan anda terlebih dahulu sebelum menggunakan obat tetes ini\n- Posisikan kepala anda hingga menghadap ke atas\n- Tarik secara perlahan kelopak mata bagian bawah dengan jari yang bersih\n- Teteskan obat pada bagian mata yang ingin diobati sesuai dengan dosis\n- Tutup mata secara perlahan dan diamkan selama beberapa menit\n- Jangan berkedip atau mengusap mata setelah obat diteteskan',
	'Cendo Tobroson':
		'- Bersihkan tangan sebelum menggunakan obat\n- Bersihkan area mata dari kotoran, seperti kotoran mata menggunakan air hangat\n- Teteskan pada bagian mata yang mengalami infeksi\n- Tutup mata secara perlahan selama 1 - 2 menit',
	Rifampicin: 'Dapat dikonsumsi 1 jam sebelum makan atau 2 jam sesudah makan',
	Rifastar: 'Dapat dikonsumsi 30 menit sebelum makan',
	'Pro-TB': 'Dapat dikonsumsi 30 menit sebelum makan',
	Ethambutol: 'Dapat dikonsumsi sesudah makan',
	Rifamtibi: 'Dapat dikonsumsi 1 jam sebelum makan atau 2 jam sesudah makan',
	Isoniazid: 'Dapat dikonsumsi 1 jam sebelum makan atau 2 jam sesudah makan',
	Pyrazinamide:
		'Dapat dikonsumsi bersamaan dengan makan atau segera sesudah makan. Namun, obat ini sangat disarankan untuk dikonsumsi bersamaan dengan makan',
	'Ventolin Inhaler': 'Diberikan pada saat serangan asma kambuh',
	'Velutine Inhalation': 'Diberikan pada saat serangan asma kambuh',
	'Seretide Inhaler':
		'- Bersihkan tangan dengan sabun dan air mengalir sebelum dan sesudah menggunakan Seretide diskus.\n- Lepaskan tutup inhaler dosis terukur, lalu pegang perangkat ini dalam posisi tegak.\n- Selanjutnya berdirilah atau duduk tegak dan kocok inhaler.\n- Untuk penggunaan pertama sebelum digunakan, semprotkan inhaler ke telapak tangan untuk memeriksa apakah inhaler berfungsi.\n- Miringkan kepalamu sedikit ke belakang dan hembuskan napas terlebih dahulu.\n- Masukkan inhaler melalui mulut (diantara gigi atas dan bawah), kemudian tutup mulut dengan merapatkan bibir (jangan digigit).\n- Tekan inhaler secara cepat untuk melepaskan obat, sembari menarik napas.\n- Tarik napas perlahan selama 3 hingga 5 detik.\n- Tahan napas selama 10 detik untuk memungkinkan obat masuk jauh ke dalam paru-paru kamu.\n- Buang napas perlahan. Jika membutuhkan semprotan berikutnya, tunggu sampai 30 detik, dan kocok kembali inhaler.\n- Gunakan sesuai dosis yang telah diberikan\n- Bersihkan mouthpiece inhaler menggunakan tisu atau kain kering.\n- Tutup kembali mulut inhaler dan simpan di tempat yang kering.\n- Berkumur dengan air, buang air tersebut dan jangan ditelan.',
	'Symbicort Turbuhaler':
		'- Buka kunci pengaman kemasan inhaler ke kanan selanjutnya ke kiri dengan cepat hingga terdengar suara “klik”.\n- Buang napas terlebih dahulu sebelum menghirup dari inhaler\n- Letakkan moncong inhaler di dalam mulut\n- Tutup bibir rapat-rapat, lalu tarik napas dalam-dalam\n- Setelah menghirup udara dari inhaler, tahan napas selama 10 detik dan ulangi langkah sebelumnya jika disarankan oleh dokter\n- Jangan lupa tutup kembali inhaler dengan kunci pengaman, lalu kumur mulut dengan air bersih. ',
	'Ventolin Nebules': 'Masukkan ke dalam nebulizer untuk dibuat menjadi partikel gas dan dihirup',
	'Combivent UDV': 'Diuapkan menggunakan alat nebulizer, kemudian dihirup',
	'Farbivent Inhalation': '-',
	'Bricasma Turbuhaler':
		'- Buka penutup turbuhaler dengan cara memutar penutup dan melepaskannya.\n- Pegang turbuhaler secara tegak lurus. Untuk penggunaan pertama turbuhaler baru, buka segel obat dengan cara memutar grip ke kiri sampai bunyi klik. Untuk penggunaan selanjutnya putar grip ke kanan, selanjutnya putar kembali grip ke kiri sampai bunyi klik.\n- Hembuskan napas melalui mulut, lalu letakan mouthpiece turbuhaler di mulut antara gigi dan bibir.\n- Tarik napas mendalam melalui mulut, lalu lepaskan mouthpiece turbuhaler dari mulut dan tahan napas selama 5-10 detik, setelah itu hembuskan napas perlahan.\n- Jika membutuhkan dosis berikutnya, tunggu sampai 1 menit, dan sebelum menggunakan kembali.\n- Gunakan sesuai dosis yang telah diberikan.\n- Bersihkan mouthpiece turbuhaler menggunakan tisu atau kain kering, kemudian tutup kembali turbuhaler',
	Ambroxol: 'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan',
	Mucos:
		'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan. Namun, disarankan untuk mengonsumsinya pada saat makan untuk mencegah sakit maag',
	'Panadol Cold & Flu': 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Mixagrip Flu': 'Dapat dikonsumsi sesudah makan',
	'Alco Plus DMP': 'Dapat dikonsumsi sesudah makan',
	'Bodrex Flu': 'Dapat dikonsumsi sesudah makan',
	Azithromycin:
		'Dapat dikonsumsi dengan atau tanpa makanan. Untuk mengantisipasi rasa tidak nyaman pada perut, konsumsilah obat ini bersama atau sesudah makan.',
	Zithromax: 'Dapat dikonsumsi sesudah makan',
	'Avelox Moxifloxacin': 'Dapat dikonsumsi sebelum atau sesudah makan',
	Zinnat: 'Dapat dikonsumsi sesudah makan',
	Cefdinir: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Fluimucil Dry Sirup': 'Dapat dikonsumsi sesudah makan',
	'Cefila Dry Sirup': 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Sanmol Sirup': 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Azithromycin Dry Sirup':
		'Dapat dikonsumsi dengan atau tanpa makanan. Untuk mengantisipasi rasa tidak nyaman pada perut, konsumsilah obat ini bersama atau sesudah makan.',
	'FG Troches': 'Dapat dikonsumsi sesudah makan',
	'Nytex Sirup': 'Dapat dikonsumsi sesudah makan',
	'Prome Sirup': 'Dapat dikonsumsi bersamaan dengan makan',
	'Cefixime Trihydrate':
		'Dapat dikonsumsi sebelum atau sesudah makan. Namun, disarankan untuk mengonsumsi obat ini sesudah makan untuk menghindari terjadinya sakit perut',
	Erythromycin: 'Dapat dikonsumsi 30 menit sebelum makan atau 1 jam sesudah makan',
	Degirol: 'Hisap 1 tablet hingga habis',
	Longatin: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Promedex Sirup': 'Dapat dikonsumsi bersamaan dengan makan',
	'Tantum Lozenges': 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Helixim Dry Sirup': 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Bicrolid Kaplet': 'Dapat dikonsumsi bersamaan dengan makan',
	Attapulgite: 'Dapat dikonsumsi setelah BAB',
	'Neo Diaform': 'Dapat dikonsumsi sebelum atau sesudah makan',
	Rillus: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Zinc: 'Dapat dikonsumsi 1 - 2 jam sesudah makan',
	Imodium: 'Dapat dikonsumsi setelah BAB mencair',
	Oralit:
		'Dapat dikonsumsi setelah BAB dengan cara melarutkan 1 bungkus dengan air hangat dan dikonsumsi sedikit demi sedikit menggunakan sendok',
	Entrostop: 'Dapat dikonsumsi setelah buang air besar, baik sebelum atau sesudah makan',
	Diapet: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Lodia: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'New Diatabs': 'Dapat dikonsumsi sebelum atau sesudah makan',
	Smecta: 'Dapat dikonsumsi sesudah makan',
	Omeprazole: 'Dapat dikonsumsi sebelum sarapan pagi',
	'Antasida Doen': 'Dikonsumsi 20 – 60 menit sesudah makan dan sebelum tidur malam',
	'Polysilane Suspensi': 'Dikonsumsi sebelum makan atau 1-2 jam sesudah makan dan menjelang tidur',
	'Promag Suspensi':
		'Perlu dikocok sebelum digunakan. Promag Suspensi biasanya dikonsumsi saat timbul gejala, 1 – 2 jam sebelum atau sesudah makan atau sebelum tidur',
	'Promag Double Action': 'Dapat dikonsumsi 1 - 2 jam sesudah makan dan menjelang tidur malam',
	'Sanmag Suspensi': 'Diberikan saat perut kosong 1 - 2 jam sesudah makan dan sebelum tidur',
	'Farmacrol Forte Suspensi': 'Dapat dikonsumsi saat perut kosong atau sebelum makan',
	'Sucralfate Suspensi': 'Diberikan saat perut kosong 1 jam sebelum makan atau 2 jam sesudah makan',
	Lansoprazole: 'Dapat dikonsumsi 30 menit sebelum makan',
	Ranitidine: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Lanpracid Kapsul': 'Dapat dikonsumsi 30 menit sebelum sarapan',
	Mylanta: 'Dikonsumsi 1 jam sebelum makan atau 2 jam sesudah makan dan menjelang tidur',
	'Polycrol Forte Sirup': 'Dapat dikonsumsi sebelum makan',
	Bisacodyl: 'DIkonsumsi saat perut kosong',
	Dulcolax: 'Dapat dikonsumsi sebelum tidur',
	Dulcolactol:
		'Dapat dikonsumsi sebelum, sesudah, atau bersamaan dengan makan untuk mengurangi rasa tidak nyaman pada saluran pencernaan. Dianjurkan untuk dikonsumsi pada waktu sarapan',
	'Fleet enema':
		'- Tekan tube sedikit agar sebagian isi obat keluar\n- Oleskan pada bagian luar dari pipa/cannula\n- Masukkan pipa kedalam anus (dubur)\n- Tekan tube tersebut hingga seluruh isinya habis keluar\n- Cabut kembali pipa tersebut tanpa melepaskan tekanan pada tube',
	Laxatab: 'Dapat dikonsumsi sebelum tidur',
	Microlax:
		'- Tekan tube sedikit agar sebagian isi obat keluar\n- Oleskan pada bagian luar dari pipa/cannula\n- Masukkan pipa kedalam anus (dubur)\n- Tekan tube tersebut hingga seluruh isinya habis keluar\n- Cabut kembali pipa tersebut tanpa melepaskan tekanan pada tube',
	Laxadine: 'Dapat dikonsumsi sebelum atau sesudah makan. DIkonsumsi pada saat malam hari menjelang tidur',
	Lactulax:
		'Dapat dikonsumsi sebelum atau sesudah makan. Namun, disarankan untuk mengonsumsinya bersamaan dengan makanan untuk mengurangi ketidak-nyamanan pencernaan.',
	'Acitral Suspensi': 'Diminum 1 jam sebelum makan atau 2 jam sesudah makan dan menjelang tidur',
	Grafazol: 'Dapat dikonsumsi sesudah makan',
	'Strocain P': 'Dikonsumsi 30 - 60 menit sebelum makan atau sebelum tidur',
	Episan: 'Dapat dikonsumsi 1 jam sebelum atau 2 jam sesudah makan',
	Hufamycetin: 'Dapat dikonsumsi 1 jam sebelum makan atau 2 jam sesudah makan',
	'Baquinor Forte': 'Dapat digunakan sebelum atau sesudah makan',
	Pyxime: 'Dapat dikonsumsi bersamaan atau tanpa makan',
	Floxigra: 'Sebaiknya dikonsumsi pada saat makan untuk mencegah timbulnya sakit maag',
	Ciprofloxacin: 'Sebaiknya dikonsumsi pada saat makan untuk mencegah timbulnya sakit maag',
	Cotrimoxazole: 'Dapat dikonsumsi sesudah makan',
	'Flagyl Forte': 'Dapat dikonsumsi sesudah makan',
	'New Syarbin': '-',
	Metronidazole: 'Dapat dikonsumsi sesudah makan',
};

const deskripsiObat = {
	Paracetamol:
		'Paracetamol atau dapat dikenal sebagai asetaminofen merupakan obat yang dapat digunakan untuk meringankan berbagai penyakit, seperti sakit kepala, migrain, sakit gigi, sakit nyeri pada punggung, radang sendi, dan menurunkan demam. paracetamol bekerja pada pusat pengatur suhu pada bagian hipotalamus untuk menurunkan suhu tubuh (antipiretik) pada pasien dan menghambat sintesis prostaglandin sehingga dapat mengurangi nyeri ringan hingga sedang.',
	'Bodrex Migra':
		'Bodrex migra merupakan obat kaplet yang mengandung paracetamol, propyphenazone, dan kafein yang dapat digunakan untuk meringankan sakit kepala. Kandungan dari obat ini juga dapat digunakan untuk meredakan sakit ringan hingga sedang hingga menurunkan demam. Obat ini akan bekerja pada pusat pengontrol suhu tubuh di bagian otak dan mengurangi produksi prostaglandin, sehingga dapat menurunkan suhu tubuh saat demam dan meredakan nyeri. Obat ini dapat dibeli pada apotek-apotek terdekat. Namun, obat ini masih belum diproduksi secara terbatas',
	'Panadol Extra':
		'Panadol extra merupakan varian lain dari panadol yang dapat digunakan untuk meringankan penyakit kepala, sakit gigi, nyeri otot, serta menurunkan demam. Obat ini mengandung paracetamol yang dapat menghambat pembentukan zat yang memicu nyeri dan demam pada bagian hipotalamus untuk meningkatkan pelepasan panas agar suhu tubuh kembali menjadi normal. Selain itu, obat ini juga mengandung kafein yang berfungsi untuk mencegah terjadinya rasa kantuk dan mengurangi rasa nyeri. Obat ini berbentuk kaplet dan dapat ditemukan dan dibeli di apotek-apotek terdekat',
	'Natrium Diklofenak':
		'Natrium Diklofenak merupakan obat generik dari golongan Nonsteroidal Anti-Inflammatory Drug (NSAID) yang digunakan untuk meredakan nyeri ringan hingga sedang, seperti nyeri akibat radang sendi, nyeri pasca operasi, nyeri akibat cedera, serta dismenore. Obat ini bekerja dengan cara menghambat enzim siklooksigenase (COX-1 dan COX-2) secara reversibel, sehingga menurunkan produksi prostaglandin zat yang memicu peradangan, rasa sakit, dan demam. Dengan menekan prostaglandin, Natrium Diklofenak membantu mengurangi nyeri, pembengkakan, kekakuan sendi, serta meningkatkan mobilitas',
	'Farsifen Plus':
		'Farsifen plus merupakan salah satu jenis varian farsifen yang memiliki 3 kandungan berbeda, yakni paracetamol, ibuprofen dan kafein yang dapat meningkatkan efektivitas dari paracetamol dan ibuprofen yang dapat meredakan nyeri pada tubuh. Obat ini biasanya menjadi opsi pilihan yang dapat dikonsumsi untuk mengatasi nyeri yang tidak dapat teratasi oleh 2 varian lainnya, yakni farsifen kaplet dan forte. Obat ini berbentuk kaplet dan dijual sebagai obat bebas terbatas. Sebelum mengonsumsi Farsifen Plus, konsultasikan ke dokter jika Anda menderita penyakit jantung atau sakit maag, terutama tukak lambung.',
	'Proris Kaplet':
		'Proris merupakan obat minum yang dapat digunakan untuk meredakan berbagai nyeri ringan hingga sedang, seperti nyeri pada penyakit gigi, nyeri setelah cabut gigi, nyeri setelah operasi atau beda, sakit kepala, rematik, nyeri akibat keseleo, hingga dapat menurunkan demam pada anak. Obat ini dapat ditemukan secara bebas di apotek-apotek terdekat dan sangat tidak dianjurkan untuk diminum oleh anak-anak yang masih berusia < 1 tahun. Obat ini juga dapat digunakan untuk mengatasi penyakit maag',
	'Sanmol Forte':
		'Sanmol forte merupakan salah satu jenis obat sanmol yang paling mudah untuk ditemukan di apotek terdekat. Sanmol juga mengandung bahan aktif 500 mg paracetamol, sehingga bisa digunakan sebagai obat sakit kepala migrain. Kandungan paracetamol di dalam Sanmol bekerja cara mengurangi pembentukan zat kimia di tubuh yang menyebabkan peradangan dan memicu munculnya rasa nyeri. Jenis sanmol ini umumnya digunakan oleh anak-anak berusia 6 - 12 tahun dan orang dewasa',
	Ibuprofen:
		'Ibuprofen merupakan obat pereda nyeri non steroid (NSAID) yang umum digunakan untuk mengurangi berbagai rasa sakit, seperti peradangan, demam, migrain, sakit kepala, sakit gigi, sakit punggung, radang sendi, meringankan gejala flu, pilek, hingga nyeri karena terkilir. Obat ini bekerja dengan cara menghambat enzim cyclooxygenase (COX) yang terlibat dalam sintesis prostaglandin yang merupakan senyawa yang dapat memicu peradangan dan rasa sakit.',
	'Asam Mefenamat':
		'Asam mefenamat (mefenamic acid) adalah obat golongan antiinflamasi nonsteroid (OAINS/NSAID) yang digunakan untuk meredakan nyeri ringan hingga sedang, seperti sakit kepala, sakit gigi, nyeri otot, nyeri haid (dismenore), nyeri pasca operasi atau melahirkan, serta nyeri akibat trauma atau peradangan seperti pada osteoarthritis dan rheumatoid arthritis. Obat ini bekerja dengan cara menghambat enzim siklooksigenase (COX-1 dan COX-2), sehingga menurunkan produksi prostaglandin zat yang menyebabkan nyeri, peradangan, dan demam yang pada akhirnya membantu meredakan gejala-gejala tersebut.',
	Tremenza:
		'Tremenza adalah obat yang digunakan untuk meredakan gejala flu, batuk pilek, dan rhinitis alergi, seperti hidung tersumbat, bersin-bersin, pilek, mata berair, dan tenggorokan gatal. Obat ini mengandung kombinasi Pseudoephedrine HCl (60 mg per tablet atau 30 mg per 5 ml sirop) dan Triprolidine HCl (2,5 mg per tablet atau 1,25 mg per 5 ml sirop). Pseudoephedrine bertindak sebagai dekongestan dengan mengecilkan pembuluh darah yang membengkak di rongga hidung, sementara Triprolidine, yang merupakan antihistamin generasi pertama, mengurangi produksi lendir, air mata, serta menghambat reaksi alergi seperti bersin dan gatal.',
	'Amoxicillin Tablet':
		'Amoxicillin merupakan sebuah obat antibiotik golongan penisilin yangg dapat mengatasi berbagai penyakit yang disebabkan oleh infeksi bakteri, seperti pneumonia, bronkitis, tonsolltis, infeksi pada telinga, infeksi pada hidung, infeksi pada tenggorokan, infeksi pada saluran kemih, dan infeksi pada kulit. Obat ini bekerja dengan cara menghentikan pertumbuhan bakteri berbahaya yang ada di dalam tubuh. Meskipun obat ini mampu mengatasi berbagai jenis penyakit infeksi, nyatanya obat ini tidak mampu menangani beberapa penyakit yang disebabkan oleh infeksi virus, seperti flu atau mononukleosis. Obat ini dapat digunakan oleh anak-anak dan orang dewasa sesuai dengan anjuran yang diberikan oleh dokter.',
	'Iliadin Nasal Spray':
		'Iliadin merupakan obat yang mengandung oxymetazoline yang dapat meringankan gejala hidung tersumbat yang dapat disebabkan oleh flu, alergi pada saluran pernapasan bagian atas, batuk pilek, atau sinusitis. Kandungan oxymetazoline dalam obat ini akan bekerja dengan cara mengecilkan pembuluh darah yang membengkak pada rongga hidung, sehingga rongga hidung menjadi lebih lega. Obat ini dapat ditemukan secara bebas di apotek-apotek tanpa perlu menggunakan resep dari dokter. Obat ini tersedia dalam 2 bentuk, yakni bentuk tetes 10 ml yang mengandung 0,25 mg oxymetazole untuk setiap 1ml dan bentuk spray 10 ml yang mengandung 0,5 oxymetazole untuk setiap 1 ml',
	Methylprednisolone:
		'Methylprednisolone 8 mg adalah obat glukokortikoid sintetik turunan prednisolon yang memiliki efek antiinflamasi dan imunosupresif kuat. Obat ini bekerja dengan menekan respons sistem imun melalui modulasi ekspresi gen, sehingga mengurangi produksi mediator inflamasi. Secara klinis, Methylprednisolone digunakan untuk mengatasi berbagai kondisi peradangan dan alergi, termasuk penyakit autoimun seperti lupus dan rematik, gangguan pernapasan, serta mencegah reaksi penolakan setelah transplantasi organ',
	Cetirizine:
		'Cetirizine adalah obat dari golongan antihistamin generasi kedua yang digunakan untuk meredakan berbagai gejala alergi, seperti mata berair, bersin-bersin, hidung meler, gatal pada hidung, tenggorokan, kulit, biduran (urtikaria), rinitis alergi, konjungtivitis alergi, hingga angioedema dan reaksi anafilaksis ringan. Obat ini bekerja dengan memblokir reseptor histamin H1, yaitu senyawa alami yang dilepaskan tubuh saat terpapar alergen (zat pemicu alergi), sehingga dapat mengurangi reaksi peradangan dan rasa gatal. Cetirizine tersedia dalam bentuk tablet, kaplet, kapsul, sirop, dan tetes oral, dan umumnya tidak menyebabkan kantuk, sehingga aman digunakan saat beraktivitas. Meski efektif meredakan gejala, cetirizine tidak menyembuhkan alergi, dan cara terbaik mencegah alergi tetaplah dengan menghindari alergen',
	'Cefadroxil Monohydrate':
		'Cefadroxil Monohydrate adalah antibiotik golongan sefalosporin generasi pertama yang digunakan untuk mengobati berbagai infeksi bakteri, seperti infeksi tenggorokan, amandel, kulit, saluran kemih, hingga pencegahan infeksi jantung sebelum prosedur medis. Obat ini bekerja dengan menghambat pembentukan dinding sel bakteri, sehingga menyebabkan kematian bakteri. Cefadroxil hanya efektif melawan infeksi bakteri, bukan virus seperti influenza. Penggunaan obat ini harus sesuai petunjuk dokter',
	Levofloxacin:
		'Levofloxacin adalah antibiotik generasi ketiga dari golongan fluoroquinolone yang digunakan untuk mengobati berbagai infeksi akibat bakteri, seperti pneumonia, bronkitis, sinusitis, infeksi saluran kemih (termasuk pielonefritis), prostatitis, infeksi kulit, serta infeksi sistemik lainnya. Obat ini bekerja dengan menghambat enzim DNA girase, enzim penting dalam proses replikasi dan perbaikan DNA bakteri, sehingga menghambat pertumbuhan dan penyebaran bakteri. Levofloxacin efektif terhadap berbagai bakteri gram positif dan gram negatif, memiliki penyerapan yang cepat serta distribusi luas di jaringan tubuh. Obat ini tersedia dalam bentuk tablet, cairan infus, dan tetes mata (untuk konjungtivitis bakteri), dan umumnya digunakan untuk dewasa dan anak-anak di atas usia tertentu. Selain itu, levofloxacin juga digunakan untuk mencegah atau mengobati penyakit anthrax dan pes, namun tidak efektif untuk infeksi virus seperti flu atau batuk pilek biasa. Obat ini termasuk dalam kategori C dan penggunaannya harus sesuai anjuran dokter',
	'Breathy Nasal Drops':
		'Breathy Tetes Hidung merupakan obat tetes yang mengandung natrium klorida yang bermanfaat untuk meringankan peradangan pada lapisan dalam hidung akibat sinusitis. Obat ini bekerja dengan cara melembapkan membran dan saluran hidung yang mengalami peradangan yang dapat disebabkan oleh pilek, iritasi, dan alergi. Obat ini dapat digunakan oleh anak-anak yang berusia di atas 1 bulan hingga orang dewasa dengan cara pemakaiannya yang mudah, yakni cukup dengan meneteskan 1 - 2 tetes Breathy Tetes Hidung ke masing-masing lubang hidung. Setelah menggunakan obat ini, disarankan untuk tidak diberikan kepada pasien lain untuk mencegah terjadinya penyebaran infeksi',
	'Breathy Nasal Spray':
		'Breathy Nasal Spray adalah semprotan hidung yang mengandung natrium klorida (sodium chloride) dengan konsentrasi mirip cairan alami tubuh. Obat ini digunakan untuk melembabkan membran hidung yang kering atau teriritasi akibat pilek, alergi, udara kering, perdarahan ringan, atau iritasi minor lainnya. Dengan membantu melunakkan lendir yang tebal atau berkerak, Breathy Nasal Spray meredakan hidung tersumbat dan mempermudah pernapasan.',
	'Nasonex Nasal Spray':
		'Nasonex Aqueous Nasal Spray merupakan obat semprot hidung yang mengandung Mometasone furoate, yaitu kortikosteroid yang bekerja dengan mengurangi peradangan melalui penghambatan sintesis mediator inflamasi. Obat ini digunakan untuk mengobati berbagai kondisi seperti rinitis alergi (baik musiman maupun tahunan), polip hidung, serta rinosinusitis akut, dan juga dapat digunakan sebagai terapi tambahan pada kasus sinusitis akut. Nasonex efektif dalam meredakan gejala seperti hidung tersumbat, pilek, bersin, dan rasa gatal pada hidung',
	Amoxsan:
		'Amoxsan merupakan salah satu obat antibiotik yang dapat digunakan mengatasi berbagai penyakit yang disebabkan oleh infeksi bakteri, seperti bronkitis, otitis media, demam tifoid, saluran pernapasan atas, infeksi saluran kemih, saluran cerna, kulit dan jaringan lunak, hingga demam tifoid yang terjadi pada anak. Amoxsan mengandung amoxicillin yang dapat mencegah pertumbuhan bakteri yang ada pada tubuh pasien. Obat ini tersedia dalam berbagai varian, seperti kapsul, tablet, sirup, drops, dan suntik. Obat ini hanya bisa didapatkan dan dikonsumsi melalui resep dokter.',
	'Rhinos SR':
		'Rhinos SR adalah obat berbentuk kapsul lepas lambat yang mengandung kombinasi loratadine 5 mg dan pseudoephedrine HCl 60 mg, digunakan untuk meredakan gejala rhinitis alergi seperti bersin-bersin, pilek, hidung tersumbat, mata gatal dan berair, serta ruam kulit dan pruritus. Loratadine adalah antihistamin yang bekerja dengan menghambat efek histamin, sehingga mengurangi reaksi alergi, sementara pseudoephedrine merupakan dekongestan yang membantu melegakan hidung tersumbat dengan cara mengecilkan pembuluh darah di rongga hidung. Rhinos SR juga dapat digunakan untuk meredakan gejala flu atau common cold, namun penggunaannya harus sesuai dengan petunjuk dokter.',
	Betahistine:
		'Betahistine atau betahistine mesylate merupakan jenis obat yang biasanya digunakan untuk meredakan atau mengatasi vertigo, gangguan pendengaran, dan tinnitus (telinga berdenging) yang disebabakan oleh penyakit Meniere. Obat ini bekerja dengan cara mengurangi dan meningkatkan tekanan aliran darah pada telinga. Sehingga berbagai gejala peningkatan tekanan pada area telinga yang disebabkan oleh penyakit Meniere dapat mereda',
	'Mertigo SR':
		'Mertigo SR merupakan sebuah obat yang memiliki kandungan zat aktif Betahistin mestilat yang dapat digunakan untuk menghilangkan rasa pusing akibat gangguan terhadap keseimbangan atau vertigo, telinga berdengung tanpa rangsangan dari luar atau dalam, dan pendengaran yang menurun. Kandungan dalam obat ini bekerja sebagai agonis reseptor histamin H1 yang akan bekerja pada bagian dalam dari telinga agar terjadi efek vasodilatasi dan meningkatkan permeabilitas pembuluh darah dan berakibat pada berkurangnya gejala vertigo dan gangguan keseimbangan. Obat ini memiliki beberapa efek samping, antara lain mual, muntah, terjadi ruam pada kulit, sakit kepala, pruriuts (gatal pada kulit), gangguan pencernaan, perut terasa sakit, dan kembung.',
	Betaserc:
		'Betaserc merupakan obat tablet yang mengandung betahistine yang dapat dikonsumsi untuk meredakan beberapa penyakit pada area kepala, seperti vertigo, tinitus, dan gangguan pendengaran yang timbul akibat penyakit meniere. Obat ini mengandung betahistine yang dapat bekerja dengan cara mengurangi tekanan yang berlebihan dan cairan yang menumpuk pada telinga bagian dalam. Sehingga dapat mengurangi penyakit vertigo. Obat ini tersedia dalam 2 jenis varian berbeda yang dapat dikonsumsi oleh pasien, yakni varian 8 mg dan 24 mg',
	Dimenhydrinate:
		'Dimenhydrinate adalah obat dari golongan antihistamin generasi pertama yang digunakan untuk mencegah dan mengatasi mual, muntah, serta pusing, terutama akibat mabuk perjalanan atau gangguan keseimbangan tubuh seperti vertigo dan penyakit Meniere. Obat ini bekerja dengan cara menghambat rangsangan berlebihan pada sistem vestibular di telinga bagian dalam, yang mengatur keseimbangan tubuh, serta menekan aktivitas otak, sehingga dapat menyebabkan kantuk dan membantu tubuh teralihkan dari stimulus yang memicu mual. Dimenhydrinate tersedia dalam bentuk tablet dan sirup, dan dapat diperoleh tanpa resep dokter, meskipun penggunaannya tetap perlu memperhatikan dosis dan anjuran pemakaian. Obat ini aman digunakan oleh anak-anak di atas 2 tahun, dewasa, dan ibu hamil (kategori B), namun tetap disarankan berkonsultasi dengan dokter, terutama bagi ibu menyusui atau penderita gangguan telinga',
	Histigo:
		'Histigo adalah obat yang mengandung Betahistine Mesylate, digunakan untuk mengatasi gejala penyakit Meniere, seperti vertigo (pusing berputar), tinnitus (telinga berdenging), gangguan pendengaran, dan masalah keseimbangan. Obat ini bekerja dengan meningkatkan aliran darah ke telinga bagian dalam dan otak, serta menormalkan tekanan cairan di dalam telinga, sehingga meredakan gejala yang disebabkan oleh gangguan sirkulasi, seperti pada vertigo perifer',
	Vastigo:
		'Vastigo adalah obat yang mengandung Betahistine Mesylate 6 mg, digunakan untuk meredakan gejala penyakit Meniere, seperti vertigo (pusing berputar), tinnitus (telinga berdenging), mual, dan gangguan pendengaran. Obat ini bekerja dengan meningkatkan aliran darah dan memperbaiki mikrosirkulasi di telinga bagian dalam, serta mengurangi tekanan cairan (endolimfatik) yang menyebabkan keluhan tersebut. Vastigo termasuk analog histamin dan tersedia dalam bentuk tablet yang harus digunakan sesuai petunjuk dokter. Obat ini umumnya diminum 1–3 kali sehari setelah makan, dan penggunaannya harus mengikuti dosis dan durasi yang dianjurkan, meskipun gejala sudah membaik',
	Merislon:
		'Merislon adalah obat yang mengandung Betahistine Mesylate, digunakan untuk mengobati vertigo, pusing berputar, tinitus, gangguan pendengaran, serta gangguan keseimbangan akibat penyakit Meniere atau gangguan sirkulasi darah di telinga bagian dalam. Obat ini bekerja dengan meningkatkan aliran darah ke otak dan telinga bagian dalam, mengurangi tekanan dan penumpukan cairan di telinga melalui relaksasi otot polos, serta menormalkan tekanan endolimfatik. Sebagai antagonis reseptor histamin H3 dan antialergi dalam jaringan neuron, Betahistine membantu meredakan gejala seperti mual, gangguan koordinasi, dan sensasi berputar. Merislon merupakan obat keras yang hanya dapat digunakan sesuai dengan petunjuk dan resep dokter, serta tersedia dalam bentuk tablet',
	Frego:
		'Frego merupakan obat yang mengandung zat aktif flunarizine yang dapat menghambat masuknya kalsium ke dalam sel pembuluh darah dan menghambat aktivitas histamin, sehingga dapat menstabilkan vasomotrik dan mengurangi rasa sakit. Obat ini dapat digunakan untuk mengatasi beberapa penyakit, seperti migrain, vertigo, pusing, sulit berkonsentrasi, telinga berdengung, kaki dan tangan terasa dingin, kram, dan lainnya. Obat ini tersedia dalam bentuk table 5 mg dan table 10 mg. Obat ini dapat meminimalkan tingkat keparahan migrain seseorang. Namun, obat ini tidak akan efektif untuk menangani serangan migrain akut. Obat ini memiliki beberapa efek samping, seperti mual, muntah, kelelahan, mengantuk, susah tidur, gelisah, nyeri ulu hati, pusing, mulut kering, nyeri otot, ruam kulit',
	Flunarizine:
		'Flunarizine adalah obat golongan calcium channel blocker dengan efek tambahan sebagai antagonis reseptor histamin H1. Obat ini digunakan untuk mencegah serangan migrain, mengatasi vertigo, gangguan vestibular, dan sebagai terapi tambahan untuk epilepsi yang sulit ditangani. Flunarizine bekerja dengan menghambat masuknya ion kalsium ke dalam sel serta mengurangi aktivitas histamin, sehingga membantu menstabilkan sel dan mencegah gejala neurologis. Efek samping yang mungkin muncul antara lain mengantuk, pusing, kenaikan berat badan, dan depresi. Penggunaan obat ini harus sesuai petunjuk dokter dan memerlukan edukasi medis terkait penggunaannya.',
	Tegretol:
		'Tegretol merupakan obat antikonvulsan yang dapat digunakan untuk mengobati berbagai penyakit, seperti kejang pada epilepsi, gangguan bipolar, neuropati (kerusakan saraf) yang disebabkan oleh penyakit diabetes melitus, dan nyeri saraf. Obat ini mengandung carbamazepine yang bekerja dengan cara mengurangi aktivitas listrik (impuls saraf) yang berlebihan di bagian otak yang dapat menjadi pemicu kejang dan nyeri. Dalam menangani penyakit trigeminal neuralgia dan glossopharyngeal neuralgia, obat ini bekerja dengan cara menghambat sinyal rasa nyeri di jalur yang menuju ke otak. Sehingga nyeri pada wajah, tenggorokan, lidah atau telinga dapat mereda. Obat ini tersedia dalam 2 varian berbeda, yakni Tegretol 200 mg dan Tegretol CR yang bisa didapatkan hanya melalui resep yang diberikan oleh dokter',
	Lameson:
		'Lameson adalah obat resep yang mengandung methylprednisolone, suatu kortikosteroid sintetis yang bekerja sebagai antiinflamasi dan imunosupresan. Obat ini digunakan untuk menangani berbagai kondisi peradangan dan reaksi alergi, termasuk penyakit autoimun seperti lupus, rheumatoid arthritis, psoriasis, dan gangguan pernapasan atau kulit. Methylprednisolone bekerja dengan cara menekan produksi mediator inflamasi dan respon sistem kekebalan tubuh yang berlebihan, sehingga mengurangi gejala seperti nyeri, bengkak, gatal, dan kemerahan. Lameson tersedia dalam bentuk tablet, suspensi, dan injeksi, dan hanya boleh digunakan sesuai petunjuk dokter karena penggunaannya memerlukan pemantauan untuk menghindari efek samping serius',
	Bamgetol:
		'Bamgetol merupakan obat antikonvulsan dan antimania yang dapat mengatasi dan mencegah kambuhnya kejang ada penderita epilepsi dan dapat juga digunakan untuk mengurangi nyeri pada bagian wajah yang timbul akibat gangguan saraf trigeminal (trigeminal neuralgia). Obat ini mengandung 200 mg carbamazepine yang dapat menstabilkan aktivitas listrik pada otak dan sistem saraf. Obat ini tersedia dalam bentuk tablet yang hanya bisa didapatkan melalui konsultasi dengan dokter atau tenaga medis',
	Gabapentin:
		'Gabapentin adalah obat golongan antikonvulsan yang awalnya dikembangkan sebagai pelemas otot dan antispasmodik, namun kini banyak digunakan untuk mengobati epilepsi dan nyeri saraf (neuropatik), termasuk neuralgia postherpetik dan kondisi seperti restless leg syndrome (RLS). Obat ini bekerja dengan memengaruhi aktivitas saraf dan neurotransmitter di otak untuk mengurangi kejang dan nyeri, meskipun mekanisme kerjanya belum sepenuhnya dipahami. Secara struktur mirip dengan GABA, gabapentin tidak berinteraksi langsung dengan reseptor GABA, melainkan menghambat pelepasan neurotransmitter eksitatorik. Gabapentin bersifat sebagai obat keras yang harus digunakan sesuai anjuran dokter, dan meski efektif sebagai pereda nyeri dan antikejang, penggunaannya juga dikaitkan dengan risiko gangguan kognitif ringan terutama pada orang dewasa yang belum berusia lanjut, meskipun hal ini masih memerlukan penelitian lebih lanjut',
	Lioresal:
		'Lioresal merupakan obat minum berbentuk tablet yang dapat digunakan untuk meredakan keluhan nyeri, kram, dan kaku pada otot yang terjadi akibat beberapa kondisi, seperti multiple sclerosis, cedera, penyakit tulang belakang, dan cerebal paisy. Obat ini mengandung baclofen 10 mg yang bekerja langsung pada sistem saraf pusat untuk mengatur gerakan otot. Dengan begitu, nyeri kram pada otot akan berkurang dan otot menjadi lebih rileks. Obat ini juga dapat mempermudah pasien dalam menjalani fisioterapi. Obat ini tergolong ke dalam obat keras yang hanya bisa didapatkan melalui proses konsultasi dengan dokter.',
	Amitriptyline:
		'Amitriptyline merupakan antidepresan trisiklik yang dapat digunakan untuk mengobati penyakit saraf, seperti neuropati perifer, postherpetic neuaralgia, trigeminal Neuralgia, gangguan makan, masalah kejiawaan, kecemasan, dan gangguan panik. Selain itu, obat ini juga dapat digunakan untuk mengatasi gejala depresi dan migrain yang terjadi pada pasien. Obat ini lebih cocok untuk dikonsumsi bagi para penderita depresi, karena kandungan dalam obat ini dapat meningkatkan kadar zat kimia alami pada otak yang dapat menstabilkan suasana hati bagi para penderita depresi. Obat ini hanya tersedia dalam bentuk tablet yang hanya bisa didapatkan melalui resep dokter.',
	Rogaine:
		'Rogaine merupakan produk perawatan rambut yang dapat digunakan untuk menangani kebotakan pada pria dan wanita. Obat ini memiliki kandungan minoxidil yang dapat melebarkan pembuluh darah pada bagian kulit kepala, sehingga meningkatkan fungsi dan pertumbuhan folikel rambut secara keseluruhan. Obat ini hanya membuat dapat mencegah terjadinya kebotakan bukan sebagai opsi untuk menumbuhkan rambut secara permanen. Produk ini memiliki 2 jenis varian yang dapat diguanakn, yakni rogaine larutan dan rogaine larutan busa',
	'Regrou Forte':
		'Regrou forte merupakan obat berbentuk cairan yang dapat merangsang pertumbuhan rambut dan mencegah terjadinya kebotakan. Obat ini mengandung minoxidil yang bekerja degan cara melebarkan pembuluh darah pada bagian kulit kepala, sehingga aliran darah yang menuju ke kepala menjadi lebih lancar. Obat ini hanya tersedia dalam kemasan 30 ml yang setiap ml dari larutan tersebut mengandung 50 mg minoxidil. Obat ini dapat ditemukan di apotek dengan resep dokter',
	'Regrou Hair Regrowth':
		'Regrou Hair Restorer adalah obat dalam bentuk cairan topikal yang mengandung Minoxidil, digunakan untuk mengatasi alopecia androgenetika (kerontokan rambut berpola), khususnya pada bagian atas dan depan kulit kepala. Obat ini bekerja sebagai vasodilator yang meningkatkan aliran darah ke kulit kepala dan merangsang folikel rambut untuk mendorong pertumbuhan rambut baru. Penggunaan Regrou harus sesuai petunjuk dokter, tidak boleh digunakan pada kulit kepala yang terluka atau terkelupas, dan pembeliannya memerlukan edukasi mengenai penggunaan yang tepat dan aman.',
	Eminox:
		'Eminox adalah obat oles yang mengandung Minoxidil 2%, digunakan untuk mengatasi kebotakan pada pria maupun wanita, termasuk yang disebabkan oleh faktor genetik atau penyakit autoimun. Minoxidil bekerja sebagai vasodilator, yaitu melebarkan pembuluh darah dan meningkatkan aliran darah ke folikel rambut, sehingga dapat merangsang pertumbuhan rambut baru dan mencegah kerontokan. Obat ini digunakan secara topikal di kulit kepala dan harus dipakai sesuai petunjuk dokter, karena termasuk obat keras yang memerlukan edukasi penggunaan',
	'Sanbe Hair':
		'Sanbe Hair obat yang berbentuk cairan topikal yang terbukti efektif dalam menstimulasi pertumbuhan rambut, khususnya pada individu yang mengalami androgenetic alopecia atau pola kebotakan pria. Produk ini bekerja melalui beberapa mekanisme, di antaranya dengan melebarkan pembuluh darah (vasodilatasi) pada mikrosirkulasi di sekitar folikel rambut, sehingga meningkatkan aliran darah dan merangsang pertumbuhan rambut. Selain itu, Sanbe Hair juga menstimulasi folikel rambut secara langsung untuk memasuki fase proliferatif, yaitu fase aktif dalam siklus pertumbuhan rambut. Tak hanya itu, produk ini turut memengaruhi folikel rambut yang secara genetik sensitif terhadap androgen, sehingga mengurangi dampak negatif hormon tersebut terhadap pertumbuhan rambut',
	Finasteride:
		'Finansteride merupakan obat minum yang dapat mengatasi penyakit kebotakan yang disebabkan oleh androgenetic alopecia dan mengatasi pembesaran prostat jinak (Benign Prostate Hyperplasia / BPH) pada pria dewasa. Bagi penderita BPH obat ini akan bekerja dengan cara mengecilkan ukuran kelenjar prostat yang membesar, sehingga penderita dapat buang air kecil dengan mudah. Sementara itu, untuk penderita kebotakan, obat ini dapat meningkatkan pertumbuhan rambut pada bagian kepala yang mengalami kebotakan. ',
	Baricitinib:
		'Baricitinib merupakan golongan obat antirematik jenis Janus kinase inhibitor yang dapat mengurangi rasa sakit, kaku, dan bengkak pada orang dewasa yang mengidap penyakit rheumatoid arthritis sedang hingga berat. Obat ini bekerja dengan cara menekan aktivitas enzim janus kinase pada sistem imun yang dapat memicu peradangan dalam tubuh. Selain itu, obat ini juga dapat memperlambat perkembangan kerusakan pada tulang dan sendi. Obat ini dapat juga digunakan untuk menangani penyakit alopecia areata (rambut rontok) dengan mendorong pertumbuhan rambut baru pada penderitanya. Obat ini hanya bisa didapatkan melalui resep yang diberikan oleh dokter dan hanya dapat dikonsumsi pada pasien yang berumur > 18 tahun.',
	'Erlamycetin Tetes Telinga':
		'Erlamycetin tetes telinga merupakan obat tetes telinga yang dapat mengatasi infeksi yang terjadi pada saluran telinga luar yang disebabkan oleh bakteri, seperti gatal, nyeri pada saluran telinga, dan telinga berair. Obat ini mengandung chloramphenicol yang dapat menghambat hingga menghalangi pembentukan protein yang dibutuhkan oleh bakteri untuk bertahan hidup pada dinding sel. Obat ini juga dapat digunakan bagi penderita kolesteatoma untuk mengatasi infeksi yang berlanjut',
	'Reco Tetes Telinga':
		'Reco Tetes Telinga adalah obat tetes telinga yang mengandung antibiotik chloramphenicol, digunakan untuk mengobati infeksi bakteri pada telinga bagian luar (otitis eksterna), seperti gatal, nyeri, telinga berair, atau terasa penuh. Obat ini bekerja dengan menghambat pembentukan protein yang dibutuhkan bakteri untuk membentuk dinding sel, sehingga pertumbuhan bakteri terhenti. Reco hanya bekerja secara lokal di area telinga dan tidak digunakan untuk membersihkan kotoran telinga',
	'Akilen Tetes Telinga':
		'Akilen tetes telinga merupakan obat tetes telinga yang mengandung antibiotik ofloxacin yang dapat menangani infeksi bakteri yang terjadi pada bagian telinga, seperti otitis media, otitis media akut hingga otitis eksterna. Kandungan ofloxacin dalam obat ini akan menghambat pembentukan DNA girase yang berperan dalam pertumbuhan bakteri. Untuk mendapatkan obat ini, pasien harus melakukan konsultasi terlebih dahulu kepada dokter, karena tidak semua penyakit pada bagian telinga dapat diatasi dengan menggunakan obat ini',
	'Ofloxacin Ear Drop':
		'Ofloxacin adalah antibiotik golongan fluoroquinolone yang bekerja dengan menghambat enzim DNA gyrase, sehingga mengganggu sintesis DNA bakteri dan menyebabkan bakteriolisis. Obat ini efektif untuk mengatasi infeksi bakteri pada telinga, seperti otitis media supuratif kronik dan otitis eksterna. Penggunaan Ofloxacin harus sesuai dengan petunjuk dokter dan memerlukan edukasi agar aman dan tepat dalam penggunaannya',
	'Otopain Ear Drop':
		'Otopain ear drop merupakan obat tetes telinga yang mengandung kombinasi Polimiksin B sulfate, Neomycin sulfate, Fludrokortison acetate, dan Lidokain HCl. Obat ini digunakan untuk mengatasi infeksi pada telinga, disertai gejala seperti nyeri, bengkak, gatal, dan telinga berair. Kandungan antibiotik Polimiksin B dan Neomycin bekerja sebagai antibiotik spektrum luas untuk mengatasi infeksi bakteri. Fludrokortison acetate berfungsi sebagai antiinflamasi yang juga memiliki efek anti alergi dan antipruritus (anti gatal). Sementara itu, Lidokain HCl merupakan zat anestesi lokal yang membantu mengurangi rasa sakit. OTOPAIN EAR DROP termasuk obat keras yang hanya boleh digunakan sesuai petunjuk dokter, dan pembeliannya memerlukan edukasi mengenai penggunaan yang tepat dan aman',
	'Otilon Ear Drop':
		'Otilon Ear Drop adalah obat tetes telinga yang digunakan untuk mengobati infeksi bakteri pada saluran telinga luar (otitis eksterna), baik akut maupun kronis. Obat ini mengandung kombinasi Polymyxin B sulfate dan Neomycin sulfate (antibiotik spektrum luas), Fludrocortisone acetate (antiinflamasi, antialergi, antipruritus), serta Lidocaine HCl (anestesi lokal untuk meredakan nyeri)',
	'Erlamycetin Tetes Mata':
		'Erlamycetin tetes mata merupakan obat tetes mata yang mengandung chloramphenicol yang dapat mengobati infeksi yang terjadi pada mata, seperti konjungtivitas bakterial. Kandungan dari obat ini akan menghambat pembentukan protein yang dibutuhkan oleh bakteri untuk berkembang biak dan bertahan hidup. Obat ini tersedia dalam 2 jenis varian, yakni varian 5 ml dan varian 10 ml. Penggunaannya memerlukan resep dan petunjuk dari dokter',
	'Cendo Natacen':
		'Cendo natacen merupakan obat tetes mata yang mengandung natamycin yang dapat digunakan untuk mengobati infeksi mata, seperti konjungtivitis, biefaritis, dan keratitis yang disebabkan oleh jamur. Kandungan dalam obat ini bekerja dengan cara menghentikan laju pertumbuhan jamur pada bagian mata. Obat ini tersedia dalam 2 varian berbeda, yakni cendo natecan tetes mata minidose 0,6 ml dan cendo natecan tetes mata 15 ml. Obat ini tidak dapat digunakan untuk mengobati penyakit mata yang bukan disebabkan oleh infeksi jamur.',
	'Cendo Floxa':
		'Cendo floxa tetes mata merupakan obat antibiotik quinole yang dapat digunakan untuk mengobati infeksi yang terjadi pada bagian mata, seperti konjungtivitis dan ulkus kornea. Obat ini mengandung ofloxacin yang bekerca dengan cara menghambat pembentukan dan pertumbuhan bakteri DNA. Obat ini tersedia dalam 2 varian berbeda, yakni cendo floxa tetes mata 5 ml dan cendo floxa minidose 0,6 ml',
	'Cendo Fenicol':
		'Cendo Fenicol adalah obat tetes atau salep mata yang mengandung antibiotik chloramphenicol, bekerja dengan cara menghambat pertumbuhan bakteri penyebab infeksi. Obat ini termasuk golongan obat keras dan hanya efektif untuk mengobati infeksi mata yang disebabkan oleh bakteri, seperti konjungtivitis, keratitis, iritis, dan dakriosistitis. Chloramphenicol bersifat bakteriostatik dan aktif terhadap berbagai bakteri gram positif maupun gram negatif, namun tidak efektif terhadap Pseudomonas aeruginosa. Penggunaannya memerlukan resep dan petunjuk dari dokter',
	'Cendo Xitrol':
		'Cendo xitrol eye drop merupakan obat tetes mata yang dapat digunakan untuk mengobati infeksi pada mata yang disertai dengan peradangan. Obat memiliki kandungan Polymyxin B sulfate, neomycin sulfate, dexamethasone yang bekerja dengan cara membunuh serta menghambat pertumbuhan bakteri dan meredakan peradangan. Obat ini hanya bisa didapatkan melalui proses konsultasi dengan dokter',
	'Cendo Gentamicin Tetes':
		'Cendo Gentamycin atau Cendo Genta 0,3% adalah obat tetes mata yang mengandung gentamicin, antibiotik golongan aminoglikosida, yang digunakan untuk mengatasi infeksi mata luar akibat bakteri, seperti bintitan dan blefaritis. Obat ini bekerja dengan membunuh dan mencegah pertumbuhan bakteri penyebab infeksi. Karena termasuk antibiotik, penggunaannya harus sesuai dengan petunjuk dokter.',
	'Cendo Gentamicin Salep':
		'Cendo Gentamicin 0,3% Salep Mata adalah obat salep mata yang mengandung antibiotik gentamicin golongan aminoglikosida, digunakan untuk mengatasi infeksi mata yang disebabkan oleh bakteri tertentu, seperti Pseudomonas, Proteus, Serratia, dan Staphylococcus. Obat ini bekerja dengan cara membunuh dan mencegah pertumbuhan bakteri penyebab infeksi, sehingga efektif untuk meredakan radang mata yang disertai infeksi bakteri. Obat ini termasuk ke dalam jenis obat keras dan hanya dapat digunakan sesuai petunjuk yang diberikan oleh dokter',
	'Reco Tetes Mata':
		'Reco Tetes Mata adalah obat keras berbentuk tetes mata yang mengandung antibiotik chloramphenicol 0,5%, digunakan untuk mengatasi infeksi mata akibat bakteri, seperti konjungtivitis bakterial. Obat ini bekerja dengan cara menghentikan pertumbuhan bakteri penyebab infeksi sehingga membantu meredakan gejala dan mempercepat penyembuhan. Penggunaannya memerlukan resep dan petunjuk dari dokter',
	Alegysal:
		'Alegysal adalah obat tetes mata yang mengandung kalium pemirolast, suatu antihistamin dan penstabil sel mast yang bekerja dengan menghambat pelepasan zat penyebab reaksi alergi. Obat ini digunakan untuk mengobati dan mencegah gatal, mata merah, serta peradangan akibat konjungtivitis alergi dan konjungtivitis vernal. Alegysal hanya boleh digunakan sesuai anjuran dokter karena termasuk dalam golongan obat keras',
	'Cendo LFX':
		'Cendo LFX adalah obat tetes mata produksi Cendo yang mengandung antibiotik Levofloxacin 5 mg/ml, termasuk dalam golongan antibiotik Quinolon. Obat ini digunakan untuk mengatasi infeksi mata eksternal seperti konjungtivitis yang disebabkan oleh bakteri yang sensitif terhadap Levofloxacin, seperti Staphylococcus sp, Streptococcus pneumoniae, Pseudomonas aeruginosa, dan lainnya, baik Gram-positif maupun Gram-negatif. Levofloxacin bekerja dengan cara menghambat enzim DNA gyrase dan topoisomerase IV pada bakteri, yang penting untuk proses replikasi DNA, sehingga menghentikan pertumbuhan bakteri. Cendo LFX tergolong obat keras yang penggunaannya harus dengan resep dokter, dan tidak disarankan digunakan bersamaan dengan lensa kontak. Setelah dibuka, obat ini hanya dapat digunakan maksimal selama 6 bulan',
	'Cendo Lytrees':
		'Cendo Lyteers adalah obat tetes mata bebas yang mengandung sodium chloride dan potassium chloride, berfungsi sebagai pelumas (lubrikan) untuk mengatasi mata kering dan iritasi ringan. Obat ini bekerja dengan membentuk lapisan air mata buatan yang menjaga permukaan mata tetap lembap, sehingga meredakan keluhan seperti mata merah, lelah, pandangan kabur, rasa perih, gatal, atau mengganjal. Kondisi mata kering umumnya disebabkan oleh paparan sinar matahari, angin, AC, penggunaan lensa kontak, terlalu lama menatap layar, atau efek samping obat tertentu. Kedua kandungan aktifnya, sodium chloride dan potassium chloride, berperan penting dalam menjaga keseimbangan cairan dan fungsi normal mata, seperti menjaga detak jantung serta impuls saraf',
	'Polidemisine Eye Drop':
		'Polidemisin merupakan antibiotik yang dapat digunakan untuk meredakan beberapa penyakit mata, seperti mata merah, perih, berair, dan mata bengkak akibat infeksi yang disebabkan oleh bakteri. Obat ini mengandung polymyxin B sulfate, neomycin, dan dexamethasone yang dapat menghentikan pertumbuhan dan membunuh bakteri yang menjadi penyebab infeksi mata. Obat ini tergolong ke dalam obat resep yang hanya didapatkan melalui konsultasi dengan dokter',
	'Cendo Tobroson':
		'Cendo Tobroson adalah obat tetes mata yang mengandung kombinasi tobramycin dan dexamethasone, digunakan untuk mengatasi infeksi dan peradangan pada mata. Tobramycin merupakan antibiotik golongan aminoglikosida yang bekerja dengan membunuh serta menekan pertumbuhan bakteri penyebab infeksi. Sementara itu, dexamethasone adalah kortikosteroid yang berfungsi menghambat respon inflamasi dan mengurangi pelepasan zat kimia dalam tubuh yang memicu peradangan. Obat ini tersedia dalam kemasan minidose 0,6 mL (5 ampul) dan penggunaannya harus sesuai dengan petunjuk dokter. Pembelian obat ini juga memerlukan edukasi terkait cara penggunaan yang tepat dan aman',
	Rifampicin:
		'Rifampicin merupakan obat antibiotik yang digunakan untuk mengobati dan mencegah beberapa penyakit yang disebabkan oleh infeksi bakteri, seperti tuberculosis, kusta, meningitis, legionnaires, brucellosis, dan infeksi stafilokokus aureus yang berat. Obat ini mengandung rifampicin yang dapat membunuh bakteri-bakteri yang menjadi penyebab infeksi. Obat ini juga dapat digunakan sebagai obat terapi untuk lepra dan tuberculosis (TBC), seperti TB paru, TB osteomielitis, maupun TB spondilitis',
	Rifastar:
		'Rifastar merupakan obat anti tuberkulosis yang dapat mengobati penyakit tiberculosis (TBC) yang disebabkan oleh infeksi dari bakteri Mycobacterium tubercolosis. Obat ini juga dapat digunakan untuk mengobati infeksi bakteri mycobacterium yang lain, speerti Mycobacterium kansasii dan Mycobacterium xenopi. Obat ini hanya tersedia dalam bentuk tablet yang hanya bisa didapatkan melalui proses konsultasi dengan dokter',
	'Pro-TB':
		'PRO TB 4 adalah obat kombinasi yang mengandung Rifampicin, Isoniazid, Pyrazinamide, dan Ethambutol. Obat ini digunakan untuk mengobati tuberkulosis (TBC) dengan cara membunuh dan menghambat pertumbuhan bakteri Mycobacterium tuberculosis. Penggunaan obat ini harus sesuai petunjuk dokter, dan ketersediaannya terbatas sehingga perlu dikonfirmasi terlebih dahulu dengan Health Consultant',
	Ethambutol:
		'Ethambutol merupakan antibiotik antituberkulosis yang digunakan untuk mengobati infeksi bakteri Mycobacterium tuberculosis, terutama pada kasus TBC paru dan bila terjadi resistensi. Obat ini biasanya dikombinasikan dengan obat TBC lain seperti isoniazid, rifampicin, dan pyrazinamide. Penggunaannya termasuk obat keras, sehingga harus sesuai resep dan petunjuk dokter. Pembelian obat ini memerlukan edukasi terkait penggunaannya',
	Rifamtibi:
		'Rifamtibi merupakan obat yang mengandung rifampicin, antibiotik golongan inhibitor sintesis RNA yang bekerja dengan menghambat pembentukan protein bakteri. Obat ini digunakan untuk mengobati tuberkulosis (TBC), lepra (kusta), dan infeksi bakteri lain seperti penyakit Legionnaire. Rifamtibi hanya boleh digunakan sesuai resep dokter karena memiliki interaksi dengan obat lain seperti antikoagulan, antidiabetes, dan kontrasepsi oral, serta kontraindikasi pada pasien dengan ikterus. Dosis penggunaan umumnya satu kali sehari, namun dapat disesuaikan dengan kondisi pasien. Edukasi penggunaan diperlukan sebelum pembelian.',
	Isoniazid:
		'Isoniazid merupakan golongan obat antibiotik yang dapat digunakan untuk mengobati penyakit tuberculosis (TBC). Obat ini bekerja dengan cara menghambat enzim yang berperan dalam proses pembentukan dinding sel bakteri mycobacterium tuberculosis. Obat ini juga dapat digunakan sebagai obat terapi bagi TB paru, TB osteomyelitis, dan TB spondylitis. Pengobatan dengan menggunakan isoniazid, sangat diperuntukkan untuk penderita TB laten dengan usia di bawah 5 tahun atau pasien dengan penyakit infeksi HIV',
	Pyrazinamide:
		'Pyrazinamide merupakan golongan obat antituberculosis yang mampu untuk mengobati penyakit tuberculosis (TBC). Obat ini bekerja dengan cara membunuh dan menghentikan perkembangan bakteri mycobacterium tuberculosis yang menjadi penyebab dari penyakit TBC. Dalam proses pengobatan TBC, obat ini biasanya dikombinasikan dengan beberapa obat, seperti isoniazid, rifampicin, ethambutol, dan streptomycin. Obat ini tergolong ke dalam obat resep yang hanya bisa didapatkan melalui konsultasi dengan dokter dan konsumsi dari obat ini harus berada di bawah pantauan dari dokter. Obat ini tersedia dalam 2 bentuk, yakni tablet dan kaplet',
	'Ventolin Inhaler':
		'Ventolin inhaler merupakan salah satu jenis dari obat ventolin yang dapat digunakan untuk meredakan gejalan asma, sesak napas yang disebabkan oleh bronkospasme (penyempitan bronkus), dan gangguan pernapasan lainnya. Obat ini tergolong ke dalam obat bronkolidator yang memiliki kandungan salbutamol yang dapat melemaskan otot-otot yang ada pada saluran pernapasa, sehingga saluran udara yang tadinya menyempit dapat menjadi lebih lebar dan membuat aliran udara yang menuju ke paru-paru meningkat. Obat ini harus diminum sesuai dengan petunjuk yang telah diberikan oleh dokter',
	'Velutine Inhalation':
		'Velutine inhalation adalah obat inhalasi yang mengandung Salbutamol sulfate, digunakan untuk penatalaksanaan dan pencegahan serangan asma, serta bronkospasme pada penyakit paru obstruktif kronik (PPOK). Obat ini bekerja dengan menstimulasi reseptor beta-2 adrenergik secara selektif di otot bronkus, menyebabkan relaksasi otot polos saluran napas (bronkodilatasi), sehingga memperbaiki aliran udara dan meredakan sesak napas',
	'Seretide Inhaler':
		'Seredite inhaler merupakan salah satu jenis obat dari seredite yang dapat digunakan untuk mengendalikan ritme pernapasan yang terganggu, seperti penyakit asma dan penyakit paru obstruktif kronis (PPOK). Obat ini mengandung salmeterol dan flutikason propionat yang dapat membantu mengurangi pembengkakan dan iritasi pada bagian paru-paru. Obat ini tersedia dalam 2 dosis, yakni seretide 50 dose yang mengandung 25 mcg salmeterol dan 50 mcg fluticasone propionate dan seretide 125 dose yang mengandung 25 mcg salmeterol dan 125 mcg fluticasone propionate',
	'Symbicort Turbuhaler':
		'Symbicort turbuhaler merupakan obat yang digunakan untuk meredakan gejala asma dan penyakit paru obstruktif kronis (PPOK). Obat ini mengandung budesonide dan formoterol furmarate yang dapat mengurangi peradangan pada saluran pernapasan dan merelaksasikan otot-otot yang ada pada sluran pernapasan, sehingga membuka saluran pernapasan yang menyempit menjadi melebar agar aliran udara yang masuk ke dalam paru-paru menjadi lancar',
	'Ventolin Nebules':
		'Ventolin Nebules adalah obat yang mengandung zat aktif Salbutamol, termasuk golongan agonis beta-2 adrenergik kerja pendek, yang digunakan untuk mengatasi gangguan pernapasan seperti asma, Penyakit Paru Obstruktif Kronik (PPOK), serta bronkospasme kronis yang tidak responsif terhadap terapi konvensional. Obat ini bekerja dengan melemaskan otot-otot saluran napas (bronkodilatasi) sehingga melancarkan aliran udara ke paru-paru dan meredakan gejala sesak napas. Ventolin tersedia dalam bentuk nebules (ampul cair) dan penggunaannya harus sesuai petunjuk dokter, karena memerlukan edukasi terkait cara penggunaan yang tepat dan aman',
	'Combivent UDV':
		'Combivent adalah obat inhalasi yang mengandung kombinasi Ipratropium Bromida dan Salbutamol Sulfat (atau Fenoterol HBr pada beberapa sediaan) yang berfungsi sebagai bronkodilator untuk melemaskan otot saluran napas dan melebarkan bronkus, sehingga membantu meredakan dan mencegah sesak napas atau mengi (wheezing) akibat asma, PPOK (Penyakit Paru Obstruktif Kronik), atau kondisi penyempitan saluran napas lainnya. Obat ini tersedia dalam bentuk cairan untuk nebulizer dan digunakan pada dewasa, lansia, serta anak usia ≥12 tahun. Penggunaan Combivent harus sesuai anjuran dokter, karena memerlukan edukasi terkait cara pemakaian yang tepat dan aman',
	'Farbivent Inhalation':
		'Farbivent adalah obat cairan inhalasi yang mengandung kombinasi salbutamol dan ipratropium bromide, termasuk golongan bronkodilator yang bekerja dengan melebarkan otot saluran napas dan meningkatkan aliran udara ke paru-paru. Obat ini digunakan untuk mengatasi asma, bronkospasme, serta penyakit paru obstruktif kronik (PPOK) seperti asma refrakter, bronkitis kronis, dan emfisema. Farbivent tersedia dalam bentuk inhalasi dan injeksi, dan termasuk dalam golongan obat keras yang penggunaannya harus sesuai anjuran dokter',
	'Bricasma Turbuhaler':
		'Bricasma adalah obat yang mengandung zat aktif terbutaline sulfate, termasuk dalam golongan bronkodilator yang digunakan untuk mengatasi bronkospasme, yaitu penyempitan saluran napas akibat penegangan otot bronkus yang dapat menyebabkan sesak, batuk, nyeri dada, hingga mengi. Bronkospasme ini sering ditemukan pada kondisi seperti asma bronkial, bronkitis kronis, emfisema, dan penyakit paru lainnya. Bricasma bekerja dengan mengaktifkan cAMP intraseluler untuk merelaksasi otot saluran napas. Jika tidak ada perbaikan atau muncul efek samping, segera konsultasikan ke dokter',
	Ambroxol:
		'Ambroxol adalah obat mukolitik yang digunakan untuk membantu mengatasi kondisi pernapasan, baik akut maupun kronis, yang ditandai dengan sekresi dahak berlebihan atau kental, seperti pada bronkitis, emfisema paru, mukovisidosis, bronkiektasis, pneumonia, dan asma bronkial. Obat ini bekerja dengan mengencerkan dahak, meningkatkan produksi cairan di saluran napas, serta merangsang produksi surfaktan yang membantu menjaga kantung udara di paru-paru tetap terbuka. Ambroxol juga meningkatkan aktivitas silia di saluran napas, mempermudah pengeluaran dahak, dan membuat pernapasan lebih lega. Obat ini hanya boleh digunakan sesuai petunjuk dokter, dan tersedia dalam bentuk tablet yang dapat dikonsumsi oleh dewasa maupun anak-anak.',
	Mucos:
		'Mucos merupakan obat minum yang dpat digunakan untuk mengatasi masalah pernapasan yang disebabkan oleh dahak atau lendir yang berlebihan. Obat ini akan mengencerkan dahak yang kental dan menumpuk pada area saluran pernapasan sehingga dahak dapat dikeluarkan dengan mudah dan jalur pernapasan menjadi terbuka. Selain dapat mengatasi masalah pernapasan, obat ini juga dapat digunakan untuk mengatasi beberapa penyakit yang terjadi pada paru-paru, seperti bronkitis, asma, pneumonia, dan bronkiektasis. Obat ini tersedia dalam beberapa bentuk, seperti tablet, sirup, dan drops (tetes) yang bisa didapatkan melalui resep dokter',
	'Panadol Cold & Flu':
		'Panadol cold & flu merupakan salah satu varian yang disediakan oleh panadol yang dapat menangani beberapa penyakit, seperti hidung tersumbat, batuk tidak berdahak, dan demam yang disebabkan oleh flu. Obat ini memiliki kandungan paracetamol yang dapat meredakan rasa nyeri, seperti sakit kepala, sakit gigi, sakit pada otot tubuh, flu, hingga dapat menurunkan demam yang dapat ditemui di apotek-apotek terdekat. Kandungan paracetamol dari obat ini akan bekerja pada pusat pengautur suhu tubuh di hipotalamus untuk menurunkan suhu tubuh dan menghambat sintesis prostaglandin dalam tubuh sehingga dapat mengurangi rasa nyeri yang ringan hingga sedang (analgesik). Selain memiliki kandungan paracetamol, obat ini juga mengandung pseudoephedrine HCL dan dextromethorphan HBr. Obat ini dapat dikonsumsi dengan cara membaca informasi yang tertera pada kemasan kaplet atau dapat melakukan konsultasi terlebih dahulu kepada dokter.',
	'Mixagrip Flu':
		'Mixagrip adalah obat yang digunakan untuk meringankan gejala flu seperti demam, sakit kepala, hidung tersumbat, bersin-bersin, hidung berair, dan nyeri otot. Obat ini mengandung Paracetamol (analgetik-antipiretik), Phenylephrine HCl atau Fenilpropanolamin (dekongestan), dan Chlorphenamine Maleate (CTM) (antihistamin) yang bekerja secara sinergis untuk meredakan berbagai gejala flu',
	'Alco Plus DMP':
		'Alco plus DMP merupakan obat minum yang dapat digunakan untuk mengatasi gejala flu yang disertai dengan batuk kering, alergi, hidung tersumbat, dan bersin-bersin. Obat ini mengandung pseudoefedrin yang bekerja dengan menyempitkan pembuluh darah dan pembengkakan yang terjadi pada daerah hidung, sehingga membuat jalur pernapasan menjadi lebih lega, brompheniramine yang berfungsi sebagai antihistamin dan dextrometrophan yang dapat menekan dorongan untuk batuk. Obat ini dapat digunakan sebagai opsi pilihan obat untuk meredakan gejala influenza. Namun, obat ini tidak dapat menyembuhkan influenza secara menyeluruh',
	'Bodrex Flu':
		'Bodrex flu merupakan salah satu varian dari obat bodrex yang dapat meredakan gejala flue, seperti demam, hidung tersumbat, bersin-bersin, dan sakit kepala. Obat ini mengandung paracetamol yang dapat meredakan rasa sakit dengan gejala eingan hingga sedang dan menurunkan demam. Sedangkan kandungan phenylephrine dapat meredakan gejala hidung tersumbat dan batuk pilek dengan cara mengurangi pembengkakan pada pembuluh darah yang berada pada saluran hidung, sehingga dapat membuat jalur pernapasan pada bagian hidung menjadi lebih lega. Obat ini bisa didapatkan di apotek-apotek terdekat secara bebas',
	Azithromycin:
		'Amzithromycin merupakan antibiotik yang dapat digunakan untuk mengobati penyakit yang disebabkan oleh bakteri, seperti pneumonia, sinusitis, infeksi kulit, amandel, tenggorokan, saluran pernapasan, paru-paru, mata dan beberapa penyakit infeksi menular seksual. Obat ini bekeraja dengan cara membunuh dan menghentikan pertumbuhan dari bakteri penyebab infeksi. Obat ini termasuk ke dalam golongan obat keras yang sangat memerlukan resep dari dokter untuk mendapatkan obat tersebut. Obat ini tersedia dalam beberapa kemasan, seperti tablet, sirup, dan injeksi',
	Zithromax:
		'Zithromax merupakan antibiotik yang digunakan untuk mengobati infeksi bakteri di beberapa organ dan bagian tubuh, seperti infeksi saluran pernapasa, mata, kulit, alat kelamin, uretritis (pembengkakan yang terjadi pada uretra), dan servisitis (peradangan yang terjadi pada serviks atau leher rahim). Obat ini mengandung azithromycin dihydrate yang dapat membunuh bakteri atau mencegah pertumbuhan bakteri pada tubuh. Obat ini tersedia dalam berbagai bentuk, seperti tablet, sirup kering, dan injeksi',
	'Avelox Moxifloxacin':
		'Avelox merupakan obat antibiotik yang dapat digunakan untuk mengatasi infeksi bakteri, seperti bronkitis, pneumonia, infeksi kulit, radang panggul dan infeksi di rongga bagian perut. Obat ini mengandung moxifloxaci yang bekerja dengan cara menghambat enzim DNA gyrase pada bakteri agar tidak dapat hidup dan berkembang biak pada tubuh. Obat ini hanya bisa didapatkan melalui resep dokter dan hanya tersedia dalam 2 varian, yakni bentuk tablet dan infus',
	Zinnat:
		'Zinnat merupakan obat yang tergolong ke dalam antibiotik sefalosporin yang dapat digunakan untuk mengatasi beberapa infeksi, seperti saluran pernapasan tanpa komplikasi, bronkitis (radang cabang pada bagian tenggorokan), pneumonia, pielonefritis, dan gonore tidak berkomplikasi. Obat ini mengandung cefuroxime yang dapat membunuh bakteri penyebab infeksi pada saluran pernapasan',
	Cefdinir:
		'Cefdinir merupakan obat antibiotik golongan sefalosporin yang dapat mengobati berbagai jenis infeksi yang disebabkan oleh bakteri. Obat ini dapat mengobati beberapa jenis infeksi, seperti infeksi telinga, infeksi kulit, tonsillitis, sinusitis, faringitis, bronkitis, hingga pneumonia. Kandungan cefdinir dalam obat ini bekerja dengan cara membunuh dan mencegah pertumbuhan bakteri dengan cara menghambat oembentukan dinding sel yang dibutuhkan oleh bakteri untuk bertahan hidup. Meskipun dapat mengobati infeksi yang disebabkan oleh bakteri. Namun, obat ini tidak dapat mengobati penyakit infeksi yang disebabkan oleh virus, seperti flu, pilek, demam, ataupun influenza. Oba ini berbentuk kapsul yang hanya bisa didapatkan dan dikonsumsi berdasarkan dosis yang telah diresepkan oleh dokter.',
	'Fluimucil Dry Sirup':
		'Fluimucil Dry Syrup 75 ml adalah obat batuk berbentuk sirup kering yang mengandung N-acetylcysteine (NAC), berfungsi sebagai pengencer dahak (mukolitik) untuk membantu mengatasi infeksi saluran napas dengan sekresi mukus yang kental, berlebih, atau sulit dikeluarkan. NAC bekerja dengan cara memutus ikatan disulfida antar protein dalam lendir, sehingga dahak menjadi lebih encer dan mudah dikeluarkan melalui batuk. Obat ini digunakan untuk berbagai kondisi pernapasan akut maupun kronis seperti bronkitis (akut dan kronis), emfisema paru, bronkiektasis, pneumonia, PPOK, serta cystic fibrosis, dan juga bermanfaat dalam kondisi khusus seperti pembersihan saluran napas sebelum bronkoskopi atau pada pasien pasca operasi dan trakeostomi.',
	'Cefila Dry Sirup':
		'Cefila Dry Sirup merupakan obat antibiotik berbentuk sirup kering yang mengandung Cefixime 100 mg dalam setiap 5 ml. Obat ini digunakan untuk mengobati berbagai infeksi bakteri seperti infeksi saluran pernapasan, telinga tengah, tenggorokan, saluran kemih, demam tifoid, dan gonore tanpa komplikasi. Cefixime bekerja dengan menghambat pembentukan dinding sel bakteri, sehingga bakteri tidak dapat bertahan hidup. Obat ini harus dilarutkan sesuai petunjuk dan dikocok sebelum digunakan, dengan dosis yang disesuaikan berdasarkan berat badan dan anjuran dokter. Efek samping yang mungkin muncul antara lain mual, diare ringan, dan ruam kulit, serta dapat menimbulkan reaksi alergi berat. Cefila hanya digunakan untuk infeksi bakteri, bukan virus, dan harus dikonsumsi sesuai resep serta anjuran dokter hingga habis untuk mencegah resistensi',
	'Sanmol Sirup':
		'Sanmol Sirup adalah obat bebas yang mengandung Paracetamol (Acetaminophen) dan digunakan untuk menurunkan demam serta meredakan nyeri ringan hingga sedang, seperti sakit kepala dan sakit gigi, baik pada anak-anak maupun dewasa. Obat ini bekerja dengan menghambat pembentukan prostaglandin, yaitu zat yang memicu peradangan, nyeri, dan demam, serta memengaruhi pusat pengatur suhu di hipotalamus untuk menurunkan suhu tubuh.',
	'Azithromycin Dry Sirup':
		'Amzithromycin dry sirup merupakan antibiotik yang dapat digunakan untuk mengobati penyakit yang disebabkan oleh bakteri, seperti pneumonia, sinusitis, infeksi kulit, amandel, tenggorokan, saluran pernapasan, paru-paru, mata dan beberapa penyakit infeksi menular seksual. Obat ini bekeraja dengan cara membunuh dan menghentikan pertumbuhan dari bakteri penyebab infeksi. Obat ini termasuk ke dalam golongan obat keras yang sangat memerlukan resep dari dokter untuk mendapatkan obat tersebut. Obat ini tersedia dalam beberapa kemasan, seperti tablet, sirup, dan injeksi',
	'FG Troches':
		'FG Troches merupakan tablet hisap antibiotik yang mengandung fradiomycin sulfate (neomycin sulfate) 2,5 mg dan gramicidin 1 mg, efektif untuk mengatasi infeksi bakteri pada rongga mulut dan tenggorokan, seperti radang tenggorokan, sariawan, dan infeksi setelah prosedur operasi mulut. Obat ini bekerja menghentikan pertumbuhan bakteri penyebab infeksi, seperti Streptococcus dan Bacteroides. FG Troches juga digunakan untuk mengobati berbagai kondisi seperti gingivitis, stomatitis, faringitis, bronkitis, tonsilitis, angina vincent, difteri faringeal, dan periodontitis.',
	'Nytex Sirup':
		'Nytex Dry Syrup adalah obat batuk berdahak yang mengandung N-acetylcysteine (NAC), yaitu agen mukolitik yang berfungsi untuk mengencerkan dahak kental di saluran pernapasan dengan memutus ikatan disulfida antar protein dalam dahak. Obat ini digunakan untuk mengatasi gangguan pernapasan yang ditandai dengan hipersekresi mukus, seperti bronkitis akut dan kronis, emfisema paru, bronkiektasis, mukovisidosis (cystic fibrosis), asma, pneumonia, serta kondisi lain seperti pasca operasi dada, trakeostomi, atau persiapan bronkoskopi. Dengan mengencerkan dahak, Nytex membantu mempermudah pengeluarannya dan melegakan saluran napas',
	'Prome Sirup':
		'Prome Sirup adalah obat batuk berbentuk sirup yang mengandung Promethazine HCl, ekstrak ipeka, Guaiacolsulfonate, Natrium sitrat, dan Menthol, yang digunakan untuk meredakan batuk akibat alergi, bronkitis, dan batuk rejan. Prome bekerja sebagai antihistamin sekaligus ekspektoran untuk membantu meredakan gejala batuk dan melegakan saluran pernapasan. Selama mengonsumsi obat ini, pengguna tidak disarankan mengendarai kendaraan atau mengoperasikan mesin, karena obat ini dapat menyebabkan kantuk',
	'Cefixime Trihydrate':
		'Cefixime merupakan antibiotik golongan sefalosporin yang dapat mengobati berbagai jenis infeksi bakteri, seperti radang THT, gonore, pneumonia, infeksi saluran pernapasan, infeksi tenggorokan, infeksi telinga, infeksi saluran kemih, infeksi menular seksual, amandel, kulit, darah, sumsum tulang, hingga infeksi pasca melahirkan. Obat ini bekerja dengan cara menghambat pembentukan dinding sel bakteri yang sangat dibutuhkan oleh bakteri untuk bertahan hidup. Obat ini hanya bekerja pada penyakit yang timbul akibat bakteri, sehingga obat ini tidak dapat digunakan untuk mengatasi penyakit yang disebabkan oleh virus, seperti flu dan pilek. Obat ini hanya bisa didapatkan melalui resep dokter saja dan obat ini tersedia dalam beberapa varian, seperti kapsul, tablet, kaplet, dan sirup',
	Erythromycin:
		'Erythromycin merupakan antibiotik jenis makrolid yang dapat digunakan untuk mengatasi berbagai infeksi pada tubuh yang disebabkan oleh bakteri, seperti infeksi kulit, infeksi saluran pernapasan, difteri, penyakit legionnaire, dan penyakit menular seksual. Obat ini tersedia dalam berbagi bentuk, seperti tablet, kapsul, sirup, kering, cairan obat luar, cream, dan gel. Obat ini tidak diperjual belikan secar bebas tanpa adanya resep dari dokter',
	Degirol:
		'Degirol adalah obat tablet hisap (lozenges) yang mengandung dequalinium chloride, suatu antiseptik yang efektif membunuh bakteri dan jamur penyebab infeksi ringan pada mulut dan tenggorokan. Obat ini digunakan untuk meredakan sakit tenggorokan, radang gusi, sariawan, radang amandel, stomatitis, serta peradangan lain seperti gingivitis, periodontitis, dan laringitis. Selain membasmi mikroorganisme penyebab infeksi, Degirol juga membantu melumasi dan menenangkan area yang nyeri, sehingga mengurangi rasa sakit dan ketidaknyamanan di rongga mulut dan tenggorokan. Cocok digunakan oleh dewasa dan anak usia di atas 10 tahun, maksimal 8 tablet per hari.',
	Longatin:
		'Longatin merupakan obat batuk yang mengandung Noscapine, termasuk dalam golongan obat resep dan dikategorikan sebagai antitusif atau obat batuk kering. Obat ini bekerja dengan cara menekan refleks batuk secara sentral dan menghambat respons serta penumpukan bradikinin yang merangsang batuk, sehingga efektif meredakan batuk tidak berdahak (batuk kering), termasuk yang disebabkan oleh kondisi seperti bronkitis akut dan kronis, laringitis, trakeitis, flu, dan pilek. Longatin dapat digunakan oleh dewasa dan anak-anak, namun penggunaannya harus sesuai petunjuk dokter, dan memerlukan edukasi terkait konsumsi obat yang aman',
	'Promedex Sirup':
		'Promedex adalah obat batuk yang tersedia dalam bentuk tablet dan sirup, digunakan untuk meredakan batuk akibat alergi, serta mengatasi gejala batuk terkait pilek, flu, bronkitis, radang saluran pernapasan, dan asma. Obat ini mengandung kombinasi bahan aktif seperti Promethazine HCl, dextromethorphan, guaifenesin, ipecac extract, K guaiacolsulfonate, Na citrate, dan menthol. Dextromethorphan bekerja dengan menekan refleks batuk kering di otak, sedangkan guaifenesin dan komponen lain membantu mengencerkan dahak, sehingga memudahkan pengeluarannya. Promedex dijual bebas dan dapat digunakan untuk batuk kering maupun berdahak akibat berbagai penyebab, termasuk alergi dan infeksi saluran pernapasan.',
	'Tantum Lozenges':
		'Tantum Lozenges adalah tablet hisap yang mengandung Benzydamine Hydrochloride, berfungsi sebagai antiseptik dan antiinflamasi untuk meredakan nyeri serta peradangan pada rongga mulut dan tenggorokan, seperti radang tenggorokan, faringitis, tonsilitis, sariawan, gingivitis, periodontitis, dan stomatitis. Obat ini juga bermanfaat setelah tindakan medis seperti pencabutan gigi, scaling, atau operasi mulut, serta membantu mengatasi bau mulut dengan cara membasmi bakteri di rongga mulut',
	'Helixim Dry Sirup':
		'Helixim Dry Sirup 30 ml adalah antibiotik berbentuk sirup kering yang mengandung Cefixime 100 mg/5 ml, termasuk dalam golongan sefalosporin generasi ketiga. Obat ini digunakan untuk mengatasi berbagai infeksi bakteri, seperti infeksi saluran pernapasan, telinga (otitis media), tenggorokan (faringitis, tonsilitis), saluran kemih, demam tifoid, dan gonore, terutama pada anak-anak. Cefixime bekerja dengan menghambat pembentukan dinding sel bakteri, sehingga menghentikan pertumbuhannya. Obat ini harus dilarutkan dan dikocok sebelum digunakan, lalu diberikan sesuai dosis yang ditentukan berdasarkan berat badan anak dan anjuran dokter. Penggunaan harus dihabiskan meskipun gejala membaik, untuk mencegah resistensi bakteri',
	'Bicrolid Kaplet':
		'Bicrolid adalah antibiotik golongan makrolida yang mengandung zat aktif clarithromycin. Obat ini digunakan untuk mengobati berbagai infeksi bakteri, seperti infeksi saluran pernapasan atas dan bawah, faringitis, sinusitis, otitis media, infeksi kulit, serta untuk membasmi Helicobacter pylori. Clarithromycin bekerja dengan menghentikan pertumbuhan dan membunuh bakteri penyebab infeksi. Bicrolid termasuk obat keras yang harus digunakan sesuai petunjuk dan resep dokter, serta memerlukan edukasi penggunaan yang tepat dan aman.',
	Attapulgite:
		'Attapulgite adalah obat bebas yang digunakan untuk meredakan gejala diare, baik pada anak-anak maupun orang dewasa. Obat ini bekerja secara lokal di saluran pencernaan dengan cara menyerap cairan, bakteri, dan racun penyebab diare, sehingga membantu memadatkan feses dan mengurangi frekuensi buang air besar. Attapulgite merupakan campuran mineral alami berbentuk seperti tanah liat yang mengandung aluminium silikat dan magnesium, dan kadang dikombinasikan dengan pektin untuk efek pemadatan tinja yang lebih optimal. Meskipun dapat membantu mencegah kehilangan cairan dan meredakan kram perut, attapulgite tidak membunuh virus, bakteri, atau parasit penyebab diare dan kurang efektif untuk diare akibat infeksi seperti rotavirus, disentri, atau amebiasis. Obat ini hanya meredakan gejala dan tidak menyembuhkan penyebab utama diare, serta tidak disarankan untuk penggunaan jangka panjang karena dapat menyebabkan konstipasi. Meskipun termasuk obat bebas, penggunaannya sebaiknya tetap mengikuti petunjuk dosis yang tepat atau arahan dokter',
	'Neo Diaform':
		'Neo Diaform adalah obat dalam bentuk tablet yang mengandung zat aktif Kaolin 550 mg dan Pectin 20 mg, digunakan untuk mengatasi diare nonspesifik, yaitu diare yang tidak disebabkan oleh gangguan spesifik pada saluran pencernaan, serta dapat digunakan untuk diare akibat perjalanan (traveller’s diarrhea). Obat ini bekerja secara simptomatik untuk meredakan gejala diare',
	Rillus:
		'Rillus adalah suplemen sinbiotik berbentuk tablet yang diproduksi oleh PT Kalbe Farma, mengandung kombinasi probiotik seperti Bifidobacterium Bifidum CBT Bf3, Lactobacillus Plantarum CBT Lp3, dan Streptococcus Thermophilus CBT St3, serta prebiotik Fructooligosakarida (FOS). Suplemen ini membantu memelihara kesehatan pencernaan dengan menyeimbangkan mikroflora usus dan mendukung fungsi pencernaan yang sehat.',
	Zinc: 'Zinc tablet merupakan suplemen mineral yang mengandung Zinc Sulfate Monohydrate, setara dengan 20 mg zinc elemental, dan digunakan sebagai terapi pelengkap untuk mengatasi diare akut pada anak. Suplemen ini membantu menggantikan zinc yang hilang selama diare, memperbaiki sel-sel usus yang rusak, serta mempercepat pemulihan dan mencegah kekambuhan diare hingga 2–3 bulan setelah sembuh. Zinc juga berperan penting dalam memperkuat sistem kekebalan tubuh, membantu penyembuhan luka, dan mendukung pertumbuhan anak. Pemberian zinc harus disertai dengan terapi rehidrasi oral (oralit) untuk mencegah dehidrasi. WHO merekomendasikan penggunaan zinc untuk diare karena terbukti dapat mengurangi prevalensi diare hingga 34% dan mempersingkat durasinya sebesar 20%',
	Imodium:
		'Imodium adalah obat untuk mengatasi diare, baik yang tiba-tiba (akut) maupun yang hilang timbul dalam jangka panjang (kronis), akibat penyakit radang usus.\nObat ini hanya dapat diperoleh dengan resep dari dokter.',
	Oralit:
		'Oralit adalah obat dalam bentuk larutan yang digunakan untuk menggantikan cairan dan elektrolit tubuh yang hilang akibat dehidrasi, yang disebabkan oleh diare, muntah berkepanjangan, demam, aktivitas berat, atau kondisi lainnya. Obat ini aman dikonsumsi oleh semua usia, termasuk bayi, anak-anak, dan orang dewasa. Oralit mengandung senyawa elektrolit seperti natrium klorida, kalium klorida, trisodium sitrat dihidrat, dan glukosa anhidrat yang membantu mengembalikan keseimbangan cairan dan mineral dalam tubuh. Glukosa dalam oralit berperan penting dalam meningkatkan penyerapan natrium di usus, sehingga mempercepat proses rehidrasi. Meskipun tidak menyembuhkan diare secara langsung, oralit sangat efektif untuk mencegah dan mengatasi dehidrasi serta mengurangi frekuensi buang air besar. Oralit biasanya dikonsumsi dengan cara melarutkan satu saset ke dalam 200 ml air matang sebelum diminum',
	Entrostop:
		'Entrostop merupakan obat yang ampuh untuk menangani penyakit diare dengan cepat dan efektif. Obat ini dapat ditemukan pada apotek-apotek terdekat dengan 2 jenis produk yang dijual, yakni entrostop tablet yang mengandung attapulgite dan pectin dan entrostp herbal anak yang mengandung beberapa bahan alami, seperti ekstrak daun jambu biji, daun teh hijau camelia, jahe, dan ekstrak kunyit. Entrostop tablet sangat efektif untuk digunakan pada penyakit diare yang penyebabnya tidak diketahui dengan jelas. Sedangkan entrostop herbal anak dapat digunakan untuk mengurangi frekuensi buang air besar dan membantu dalam hal memadatkan kotoran',
	Diapet:
		'Diapet adalah obat herbal yang bermanfaat untuk mengatasi diare. Obat ini dapat mengurangi frekuensi buang air besar, memadatkan tinja yang cair, dan meredakan mulas akibat diare. Obat ini dapat dibeli tanpa resep dokter.',
	Lodia:
		'Lodia mengandung Loperamide Hydrochloride 2 mg, yaitu obat yang digunakan untuk meredakan diare akut non-spesifik maupun diare kronik. Obat ini bekerja dengan memperlambat pergerakan (motilitas) usus, sehingga tubuh memiliki lebih banyak waktu untuk menyerap air dan elektrolit. Efeknya adalah mengurangi frekuensi buang air besar dan mengentalkan feses, sehingga membantu mengontrol gejala diare. Obat ini bersifat simtomatik (mengatasi gejala), bukan menyembuhkan penyebab utama diare, dan penggunaan harus sesuai dengan petunjuk dokter, terutama bila digunakan lebih dari dua hari atau pada diare kronis',
	'New Diatabs':
		'New Diatabs adalah obat antidiare golongan obat bebas yang mengandung Attapulgite 600 mg, senyawa magnesium aluminium phyllosilicate alamiah yang telah diaktifkan. Obat ini digunakan untuk mengatasi diare non-spesifik, termasuk yang disebabkan oleh keracunan makanan, bakteri, atau virus. New Diatabs bekerja dengan cara mengadsorpsi racun dan bakteri penyebab diare, memperbaiki konsistensi feses, serta mengurangi frekuensi buang air besar dan kram perut, dengan cara memperlambat kerja usus dan memadatkan tinja yang encer',
	Smecta:
		'Smecta adalah obat yang digunakan untuk mengatasi diare berat. Obat ini juga dipercaya dapat meredakan gangguan lambung, radang usus, dan keracunan makanan.Smecta merupakan sejenis tanah liat yang diolah menjadi obat. Obat ini meredakan diare dengan cara melapisi bagian dalam lambung dan usus sehingga dapat menghambat penyerapan dan melindungi saluran pencernaan dari zat-zat yang beracun.Obat ini dapat dibeli tanpa resep dokter.',
	Omeprazole:
		'Omeprazole adalah obat untuk mengatasi asam lambung berlebih dan keluhan yang menyertainya. Omeprazole umumnya digunakan untuk mengobati gastroesophageal reflux disease (GERD), sakit maag (gastritis), atau tukak lambung. Obat ini hanya dapat dibeli dengan resep dokter.',
	'Antasida Doen':
		'Antasida Doen adalah obat yang bermanfaat untuk meredakan gejala asam lambung berlebih, seperti nyeri ulu hati, mual, atau rasa panas di dada (heartburn).\nObat ini dapat dibeli tanpa resep dokter.',
	'Polysilane Suspensi':
		'Polysilane adalah obat untuk meredakan gejala sakit maag dan perut kembung akibat kelebihan asam lambung. Dokter juga dapat menggunakan polysilane dalam penanganan tukak lambung, ulkus duodenum, atau asam lambung naik (GERD). Obat ini dapat dibeli tanpa resep dokter.',
	'Promag Suspensi':
		'Promag suspensi merupakan varian obat promag yang tergolong ke dlaam antasida dan antiflatulen yang dapat dikonsumsi untuk mengatasi penyakit maag, GERD, asam lambung, atau perut kembung, Promag suspensi memiliki beberapa kandungan aktif hydrotalcite dan magnesium hidroksida yang bekerja cepat dalam mengatasi dan meredakan penyakit maag dan menurunkan asam lambung. Obat ini juga mengandung simethicone yang dapat mengurangi gas berlebihan pada saluran pencernaan. Obat ini dapat dibeli secara bebas pada apotek-apotek terdekat tanpa memerlukan resep dari dokter',
	'Promag Double Action':
		'Promag Double Action adalah obat yang mengandung kombinasi antasida (kalsium karbonat dan magnesium hidroksida) serta famotidin sebagai antagonis reseptor H2. Obat ini bekerja melalui dua mekanisme untuk meredakan gejala akibat kelebihan asam lambung. Antasida menetralkan asam lambung secara cepat, sedangkan famotidin menghambat produksi asam lambung hingga 12 jam. Promag Double Action digunakan untuk mengatasi berbagai gangguan saluran cerna seperti sakit maag, asam lambung berlebih, gastritis, tukak lambung, dan tukak usus dua belas jari',
	'Sanmag Suspensi':
		'Sanmag Suspensi adalah obat dalam bentuk sirup yang digunakan untuk meredakan gejala akibat kelebihan asam lambung, seperti sakit maag, nyeri ulu hati, mual, perut kembung, dan tukak lambung atau usus dua belas jari. Obat ini mengandung kombinasi magnesium trisilikat dan aluminium hidroksida yang bekerja sebagai antasida untuk menetralisir asam lambung dan melapisi mukosa lambung guna mengurangi iritasi. Selain itu, kandungan simetikon di dalamnya berfungsi untuk mengurangi gas berlebih di saluran cerna, sehingga meredakan perut kembung dan rasa tidak nyaman. Kombinasi ketiga zat aktif ini menjadikan Sanmag efektif untuk mengatasi gangguan pencernaan yang disebabkan oleh asam lambung berlebih dan penumpukan gas',
	'Farmacrol Forte Suspensi':
		'Farmacrol Forte Suspensi adalah obat yang digunakan untuk mengatasi gangguan saluran pencernaan seperti maag (dispepsia), gastritis, tukak lambung, tukak usus dua belas jari, hiatus hernia, esofagitis, serta perut kembung akibat kelebihan gas. Obat ini mengandung kombinasi magnesium hidroksida, aluminium hidroksida, dan simetikon (metilpolisiloksan). Magnesium dan aluminium hidroksida bekerja sebagai antasida yang menetralisir asam lambung berlebih dan menginaktifkan enzim pepsin penyebab iritasi, sehingga meredakan nyeri ulu hati. Sementara itu, simetikon berfungsi sebagai antibuih untuk mengurangi gejala kembung akibat penumpukan gas dalam saluran pencernaan. Kombinasi tersebut membuat Farmacrol Forte efektif dalam menenangkan lambung dan meringankan gejala gangguan pencernaan',
	'Sucralfate Suspensi':
		'Sucralfate adalah obat golongan antiulseran yang digunakan untuk mengatasi tukak lambung, tukak usus dua belas jari (ulkus duodenum), gastritis kronis, GERD, dispepsia, serta sebagai profilaksis perdarahan saluran cerna. Obat ini bekerja dengan membentuk lapisan pelindung pada dinding lambung atau usus yang terluka, melindungi dari asam lambung, enzim pencernaan, dan garam empedu, sehingga mempercepat proses penyembuhan luka. Sucralfate tergolong sebagai “mucosal protectant” yang bekerja secara lokal di saluran cerna tanpa diserap secara sistemik, sehingga relatif aman dan minim efek samping. Obat ini tersedia dalam bentuk tablet, kaplet, dan suspensi, namun tidak tersedia dalam bentuk sirup karena sifat kimianya yang tidak larut dalam air maupun minyak',
	Lansoprazole:
		'Lansoprazole adalah obat golongan penghambat pompa proton (PPI) yang digunakan untuk mengatasi kondisi akibat peningkatan asam lambung, seperti GERD, tukak lambung, tukak duodenum, dispepsia, dan sindrom Zollinger-Ellison. Obat ini bekerja dengan cara menghambat enzim H⁺/K⁺ ATPase di sel parietal lambung, sehingga menurunkan produksi asam lambung secara signifikan dan membantu meredakan gejala seperti heartburn, mulut asam, mual, serta mempercepat penyembuhan luka pada lambung dan esofagus. Selain itu, obat ini juga digunakan dalam terapi infeksi Helicobacter pylori bila dikombinasikan dengan amoksisilin dan klaritromisin (triple therapy)',
	Ranitidine:
		'Ranitidine HCl adalah obat untuk mengobati gejala akibat produksi asam lambung berlebih. Beberapa kondisi yang dapat ditangani dengan ranitidin adalah tukak lambung, penyakit maag, penyakit asam lambung (GERD).\nObat ini hanya dapat dibeli dengan resep dokter.',
	'Lanpracid Kapsul':
		'Lanpracid merupakan obat yang tergolong ke dalam obat penghambat pompa proton yang dapat menurunkan produksi asam lambung yang berlebihan dalam tubuh. Obat ini dapat digunakan untuk mengobati beberapa penyakit yang terjadi pada saluran pencernaan, seperti tukak lambung, GERD, tukak duodenum (luka yang terbuka pada lapisan usus 12 jari), esofangitis erosif (peradangan pada kerongkongan). Obat ini memiliki kandungan lansoprazole yang dapat menghambat enzim tertentu yang berperan dalam produksi asam lambung, sehingga produksi asam lambung pada tubuh dapat berkurang. Obat ini tergolong ke dalam jenis obat kerasa dimana untuk mendapatkan obat ini, pasien harus melakukan konsultasi terlebih dahulu kepada dokter untuk mendapatkan resep yang sesuai.',
	Mylanta:
		'Mylanta merupakan obat dalam bentuk cair yang digunakan untuk meredakan gejala gangguan lambung seperti sakit maag, gastritis, tukak lambung, dan tukak usus dua belas jari, dengan keluhan seperti mual, nyeri perut, atau nyeri ulu hati. Obat ini mengandung kombinasi aluminium hidroksida dan magnesium hidroksida sebagai antasida yang bekerja dengan menetralkan asam lambung dan menginaktifkan pepsin, sehingga membantu mengurangi iritasi pada lambung. Selain itu, simetikon ditambahkan untuk meredakan perut kembung akibat gas berlebih, dan efek laksatif dari magnesium hidroksida membantu menyeimbangkan efek konstipasi yang mungkin ditimbulkan oleh aluminium hidroksida',
	'Polycrol Forte Sirup':
		'Polycrol Forte Sirup adalah obat yang digunakan untuk meredakan gangguan saluran pencernaan seperti hiperasiditas, gastritis, maag (dispepsia), hiatus hernia, tukak lambung, tukak usus dua belas jari, serta kembung dan nyeri ulu hati. Obat ini mengandung aluminium hidroksida dan magnesium hidroksida yang berfungsi sebagai antasida untuk menetralisir asam lambung, serta methylpolysiloxane yang membantu mengurangi gas berlebih di saluran cerna. Kombinasi zat aktif ini membuat Polycrol efektif dalam mengatasi gejala akibat kelebihan asam lambung dan gangguan pencernaan lainnya',
	Bisacodyl:
		'Bisacodyl adalah obat laksatif yang digunakan untuk mengatasi sembelit atau konstipasi dengan cara merangsang pergerakan usus dan membantu pengeluaran feses. Obat ini juga berguna untuk membersihkan usus sebelum prosedur medis atau operasi, seperti kolonoskopi. Bisacodyl bekerja sebagai stimulan motilitas usus dengan meningkatkan kontraksi kolon, dan tersedia dalam bentuk tablet 5 mg, suppositoria 5 mg atau 10 mg, serta cairan. Obat ini dapat diperoleh tanpa resep dokter, meskipun tetap perlu digunakan dengan hati-hati',
	Dulcolax:
		'Dulcolax adalah obat pencahar untuk mengatasi sembelit atau susah buang air besar (BAB). Dulcolax mengandung bisacodyl yang dapat melancarkan BAB, serta meredakan kembung dan sakit perut akibat sembelit. Obat ini dapat dibeli tanpa resep dokter.',
	Dulcolactol:
		'Dulcolactol merupakan obat konstipasi (sulit buang air besar) yang mengandung laktulosa yang bekerja menaikkan tekanan osmosa dan suasana asam sehingga feses menjadi lunak. Obat ini dalam penggunaannya dapat dicampur dengan sari buah, air, dan susu.',
	'Fleet enema':
		'Fleet adalah obat pencahar (laksatif) yang tersedia dalam dua varian, yaitu Fleet Enema dan Fleet Phospho-soda, keduanya mengandung sodium bifosfat dan disodium fosfat. Fleet Enema digunakan untuk meredakan konstipasi yang datang sewaktu-waktu serta sebagai persiapan sebelum prosedur medis seperti proktoskopi, sigmoidoskopi, dan pemeriksaan X-ray, dengan formulasi bebas lateks. Sementara itu, Fleet Phospho-soda digunakan secara khusus untuk membantu membersihkan usus besar sebelum tindakan seperti kolonoskopi, X-ray, dan operasi. Obat ini bekerja sebagai pencahar purgatif yang efektif dalam melancarkan buang air besar serta mempersiapkan kondisi usus untuk pemeriksaan medis',
	Laxatab:
		'Laxatab Tablet bermanfaat untuk mengatasi susah buang air besar (konstipasi).\nLaxatab Tablet mengandung docusate sodium. Docusate bekerja dengan cara menghambat penyerapan air dan lemak kembali dari feses, sehingga feses yang tadinya keras menjadi lebih lembut dan lebih mudah dikeluarkan. Obat ini dapat dibeli tanpa resep dokter.',
	Microlax:
		'Microlax Gel adalah obat pencahar yang digunakan untuk mengatasi sembelit (susah buang air besar) serta membantu mengosongkan usus sebelum prosedur medis seperti kolonoskopi. Obat ini tersedia dalam bentuk gel dalam tabung kecil (5 ml) yang digunakan dengan cara dimasukkan ke dalam rektum (anus). Microlax mengandung sorbitol, PEG 400, natrium sitrat, dan natrium lauril sulfoasetat yang bekerja secara sinergis dengan menarik air ke dalam usus besar, melunakkan feses, dan melumasi bagian bawah rektum, sehingga memudahkan proses buang air besar. Obat ini bekerja cepat dan lokal, tidak lengket, serta aman digunakan untuk membantu melancarkan pergerakan usus',
	Laxadine:
		'Laxadine adalah obat pencahar yang digunakan untuk mengatasi konstipasi (sembelit) dengan cara melunakkan feses dan merangsang gerakan peristaltik usus, sehingga mempermudah proses buang air besar (BAB). Obat ini mengandung kombinasi Phenolphtalein, Paraffin Liquidum, dan Glycerin, yang bekerja dengan menghambat penyerapan kembali air dari feses, serta melicinkan saluran cerna agar feses lebih mudah dikeluarkan. Laxadine termasuk golongan laksatif stimulant dan pelunak feses, dan sering direkomendasikan untuk pasien yang mengalami sembelit akibat pola makan rendah serat, kurang cairan, atau efek samping obat tertentu',
	Lactulax:
		'Lactulax Syrup 60 mL bermanfaat untuk mengatasi sembelit atau sulit buang air besar. Lactulax Syrup 60 mL bekerja dengan cara membantu mengalirkan cairan ke usus sehingga membuat tinja lebih lunak dan mudah dikeluarkan. Obat ini dapat dibeli tanpa resep dokter.',
	'Acitral Suspensi':
		'Acitral adalah obat dalam bentuk sirup (suspensi) yang digunakan untuk menetralkan atau mengikat asam lambung berlebih. Obat ini mengandung Magnesium Hidroksida (Mg(OH)₂), Aluminium Hidroksida (Al(OH)₃), dan Simethicone, yang bekerja secara sinergis untuk mengurangi gejala akibat kelebihan asam lambung, seperti mual, nyeri lambung, nyeri ulu hati, dan muntah. Acitral efektif untuk membantu mengatasi kondisi seperti gastritis, tukak lambung, tukak usus dua belas jari, dan tukak pada esofagus',
	Grafazol:
		'Grafazol merupakan obat yang digunakan untuk mengobati beberapa jenis penyakit infeksi yang disebabkan oleh bakteri anerob dan protozoa. Obat ini dapat mengobati infeksi trichomonal vagintis dan bakterial vagionis, pseudomembran kolitis hingga disentri akut. Kandungan metronidazole pada obat ini akan bekerja dengan menghambat pembentukan protein yang diperlukan untuk pertumbuhan bakteri dan parasit. Obat ini tersedia dalam 2 varian yang dapat digunakan, yakni grafazol dalam bentuk kaplet  dan grafazol suspensi',
	'Strocain P':
		'Strocain P obat yang mengandung Polymigel 400 mg (kombinasi aluminium hidroksida, magnesium karbonat, dan kalsium karbonat) yang bekerja dengan cara menetralkan asam lambung untuk melindungi dinding lambung dari iritasi. Obat ini digunakan untuk mengatasi gejala kelebihan asam lambung, seperti mual, heartburn, nyeri ulu hati, kembung, bersendawa, muntah, serta gangguan lambung seperti gastritis akut dan kronis, ulkus lambung, dan tukak usus dua belas jari. Penggunaan Strocain P sebaiknya tidak dilakukan terus-menerus lebih dari 2 minggu tanpa petunjuk dokter',
	Episan:
		'Episan adalah obat untuk mengatasi ulkus duodenum, tukak lambung, atau gastritis kronis.\nObat yang tersedia dalam bentuk tablet dan sirop ini hanya bisa didapatkan dengan resep dokter.',
	Hufamycetin:
		'Hufamycetin adalah antibiotik spektrum luas yang mengandung chloramphenicol dan digunakan untuk mengatasi berbagai infeksi bakteri, seperti demam tifus, paratifus, infeksi Salmonella, Haemophilus influenzae (terutama yang meningeal), serta infeksi lain seperti infeksi saluran kemih, otitis media, dan faringitis. Obat ini bekerja dengan menghambat sintesis protein yang dibutuhkan bakteri untuk membentuk dinding sel, sehingga menghambat pertumbuhan dan membunuh bakteri. Penggunaan Hufamycetin harus berdasarkan resep dokter karena termasuk golongan antibiotik yang membutuhkan pengawasan ketat',
	'Baquinor Forte':
		'Baquinor Forte 500 mg adalah antibiotik yang mengandung Ciprofloxacin, termasuk golongan fluorokuinolon generasi kedua. Obat ini memiliki spektrum luas dan bekerja secara bakterisidal dengan menghambat enzim topoisomerase II yang penting dalam sintesis DNA bakteri. Digunakan untuk mengobati berbagai infeksi bakteri, seperti infeksi saluran pernapasan, saluran kemih, saluran cerna, kulit, dan jaringan lunak. Penggunaan obat ini harus dengan resep dokter',
	Pyxime:
		'Pyxime adalah obat antibiotik yang mengandung Cefixime 100 mg, termasuk dalam golongan sefalosporin generasi ketiga, yang bekerja dengan cara menghambat sintesis dinding sel bakteri sehingga menyebabkan kematian bakteri. Obat ini digunakan untuk mengatasi berbagai infeksi, seperti infeksi saluran kemih tanpa komplikasi, otitis media, faringitis, tonsilitis, bronkitis akut dan eksaserbasi akut bronkitis kronis, infeksi saluran pernapasan, infeksi kulit dan jaringan lunak, serta infeksi kelamin termasuk gonore tanpa komplikasi akibat Neisseria gonorrhoeae. Pyxime juga dapat digunakan sebagai terapi alternatif untuk demam tifoid pada anak, terutama jika bakteri penyebab resisten terhadap terapi standar. Penggunaan Pyxime harus sesuai dosis dan petunjuk dokter, karena penyalahgunaan dapat menyebabkan resistensi bakteri dan menurunkan efektivitas obat',
	Floxigra:
		'Floxigra adalah obat tipes yang mengandung antibiotik ciprofloxacin. Obat ini bekerja dengan menghambat pertumbuhan bakteri penyebab infeksi. Obat ini bisa didapatkan melalui resep yang diberikan oleh dokter',
	Ciprofloxacin:
		'Ciprofloxacin adalah obat golongan antibiotik yang bisa membantu mengatasi berbagai penyakit akibat infeksi bakteri, termasuk penyakit usus buntu. Untuk meningkatkan efektivitasnya sebagai obat usus buntu, Ciprofloxacin perlu digabungkan dengan obat yang mengandung metronidazole.\nObat ini dapat dibeli dengan resep dokter.',
	Cotrimoxazole:
		'Cotrimoxazole 480 mg adalah antibiotik kombinasi yang mengandung sulfamethoxazole 400 mg dan trimethoprim 80 mg dalam perbandingan 5:1, bekerja secara sinergis dengan menghambat dua tahap penting dalam biosintesis asam nukleat dan protein bakteri, sehingga bersifat bakterisid. Obat ini digunakan untuk mengobati berbagai infeksi bakteri seperti infeksi saluran kemih dan kelamin, saluran pernapasan, saluran gastrointestinal, kulit, serta telinga, hidung, dan tenggorokan. Cotrimoxazole juga efektif dalam menangani dan mencegah Pneumocystis Carinii Pneumonia (PCP), terutama pada pasien dengan daya tahan tubuh rendah seperti penderita HIV/AIDS. Penggunaan obat ini harus sesuai resep dan petunjuk dokter, serta dikonsumsi setelah makan secara teratur pada waktu yang sama setiap hari. Perhatian khusus perlu diberikan pada pasien dengan riwayat alergi terhadap cotrimoxazole, gangguan ginjal, gangguan hati, serta defisiensi G6PD karena berisiko mengalami hemolisis.',
	'Flagyl Forte':
		'Flagyl forte merupakan obat yang digunakan untuk mengobati beberapa jenis infeksi yang disebabkan oleh bakteri anaerob dan parasit protozoa, seperti uretritis dan vaginitis karena trichomonas vaginalis, amoebiasis di usus dan hati. Obat ini juga dapat digunakan untuk mencegah infeksi anaerob pasca operasi atau giardiasis karena giardia lambliasis. Obat ini mengandung metronidazole yang dapat mematikan pertumbuhan bakteri dan parasit pada tubuh',
	'New Syarbin':
		'New Sybarin adalah obat yang mengandung Bismuth subsalicylate, digunakan untuk meredakan gejala pada diare yang tidak diketahui penyebabnya atau diare ringan. New Sybarin bekerja dengan mempengaruhi penyerapan elektrolit di usus, dan membunuh organisme penyebab diare. New Sybarin diproduksi oleh Kaliroto dalam bentuk sediaan tablet',
	Metronidazole:
		'Obat ini bekerja dengan membunuh parasit penyebab diare. Dengan begitu, diare dan kram perut akibat disentri bisa mereda. Obat ini hanya bisa dibeli dengan resep dokter.',
};

const dosisObat = {
	Paracetamol:
		'Dewasa: 500 - 1000 mg, dikonsumsi setiap 4 - 6 jam\n\nAnak-anak ≥ 16 tahun: 500–1.000 mg, dikonsumsi sebanyak 1x sehari',
	'Bodrex Migra': 'Dewasa: 1 kaplet, 3x sehari',
	'Panadol Extra':
		'Dewasa dan Anak-anak > 12 tahun: 1 kaplet diminum sebanyak 3 - 4 kali sehari. Dosis tidak boleh melebihi 8 kaplet per hari',
	'Natrium Diklofenak': 'Dewasa: 50 mg, dikonsumsi sebanyak 2 - 3x sehari',
	'Farsifen Plus': 'Dewasa dan anak-anak berusia > 12: 1 kaplet, 3 - 4  kali sehari',
	'Proris Kaplet':
		'Dewasa dan anak usia > 7 tahun: 1 kaplet, 3 – 4x sehari.\nAnak usia 3 – 7 tahun: ½ kaplet, 3 – 4x sehari. \nAnak usia 1 – 2 tahun: ¼ kaplet, 3 – 4x sehari. ',
	'Sanmol Forte':
		'Anak usia 6 – 12 tahun: ½ – 1 tablet, 3 – 4 kali sehari.\nDewasa: 1 tablet, 3 – 4 kali sehari.',
	Ibuprofen:
		'Dewasa: 200 - 400 mg, 3x sehari\n\nAnak-anak: Dosis ibuprofen pada anak dapat berbeda-beda berdasarkan berat badannya. Untuk mendapatkan dosis yang pasti, dapat melakukan konsultasi lebih lanjut kepada dokter',
	'Asam Mefenamat': 'Dewasa dan anak-anak berusia > 14 tahun: 1 kaplet, dikonsumsi sebanyak 3x sehari',
	Tremenza:
		'Dewasa dan anak usia >12 tahun: 1 tablet dikonsumsi sebanyak 3 – 4x sehari\n\nAnak-anak berusia 6 – 12 tahun: ½ tablet dikonsumsi sebanyak 3 – 4x sehari',
	'Amoxicillin Tablet':
		'Dewasa: 500 – 2.000 mg, dikonsumsi setiap 8 jam\n\nAnak dengan berat badan < 40 kg: 100 mg/kgBB per hari, dibagi menjadi 3 dosis',
	'Iliadin Nasal Spray': 'Dewasa dan anak-anak > 6 tahun: 2 kali sehari, sebanyak 2 - 3 semprot',
	Methylprednisolone:
		'Dewasa: 4 – 48 mg per hari. Pada kondisi parah yang akut, dapat diberikan dosis yang lebih tinggi hingga 100 mg per hari\n\nAnak - anak: 0,5 – 1,7 mg/kgBB per hari. Dikonsumsi sebanyak 2x sehari',
	Cetirizine:
		'Dewasa dan anak-anak berusia > 6 tahun: 5 – 10 mg, per hari\n\nAnak-anak berusia 2 – 6 tahun: 2,5 mg, 1 – 2 kali sehari atau 5 mg 1 kali sehari. Dosis maksimal adalah 5 mg per hari',
	'Cefadroxil Monohydrate':
		'Dewasa atau anak dengan berat badan (BB) > 40 kg: 1.000 mg, 1 kali sehari atau 500 mg, 2 kali sehari, selama minimal 10 hari.\n\nAnak dengan BB <40 kg: 30 mg/kgBB per hari yang dibagi dalam 1–2 jadwal konsumsi, selama minimal 10 hari',
	Levofloxacin: 'Dewasa: 500 mg, dikonsumsi sebanyak 1x sehari. Penggunaan obat diberikan selama 7 – 10 hari',
	'Breathy Nasal Drops':
		'Dewasa dan anak-anak berusia > 1 bulan: 1 - 2 tetes pada masing-masing lubang hidung',
	'Breathy Nasal Spray':
		'Dewasa: 2 - 6x semprot sehari pada setiap lubang hidung.\n\nAnak dan bayi > 1 bulan: 1x semprot sehari pada setiap lubang hidung',
	'Nasonex Nasal Spray': '2x semprotan dalam lubang hidung',
	Amoxsan: 'Dewasa dan anak-anak dengan berat badan ≥ 20 kg: 500- 2000 mg dikonsumsi sebanyak 3x sehari',
	'Rhinos SR': 'Dewasa dan anak-anak berusia > 12 tahun: 1 kapsul dikonsumsi sebanyak 2x sehari',
	Betahistine: 'Dewasa: 6 - 12 mg 3x sehari',
	'Mertigo SR':
		'Mertigo tablet\nDewasa (usia > 18 tahun): 1 – 2 tablet, 3x sehari.\n\nMertigo SR tablet lepas lambat\nDewasa (usia > 18 tahun): 1 tablet, 2x sehari.',
	Betaserc: 'Dewasa: 1 tablet dikonsumsi sebanyak 2x sehari',
	Dimenhydrinate:
		'Dewasa dan anak usia ≥ 12 tahun: 50 – 100 mg, dikonsumsi setiap 4 – 6 jam sekali. Dosis maksimal 300 – 400 mg per hari.\n\nAnak usia 6 – 11 tahun: 25 – 50 mg, dikonsumsi setiap 6 – 8 jam sekali. Dosis maksimal 150 mg per hari\n\nAnak usia 2 – 5 tahun: 12,5 – 25 mg, dikonsumsi setiap 6 – 8 jam sekali. Dosis maksimal 75 mg per hari',
	Histigo: 'Dewasa: 1 - 2 tablet, dikonsumsi sebanyak 3x sehari',
	Vastigo: 'Dewasa: 1 - 2 tablet, dikonsumsi sebanyak 3x sehari',
	Merislon: 'Dewasa: 6 - 12 mg 3x sehari',
	Frego: 'Dewasa: 1x sehari 1 tablet',
	Flunarizine: 'Dewasa: 1x sehari 1 tablet',
	Tegretol:
		'Dewasa:\nDosis awal: 100 – 200 mg dikonsumsi sebanyak 2x sehari. Dosis obat ini dapat ditingkatkan secara bertahap sesuai dengan kondisi.\n\nDosis perawatan: 400 – 800 mg per hari yang dibagi dalam beberapa jadwal konsumsi. Dosis maksimal obat ini adalah 1.200 mg per hari.',
	Lameson:
		'Dewasa: 4 - 80 mg per hari. Dosis tersebut dapat ditingkatkan menjadi 16 mg per hari\n\nAnak-anak: 0,8 - 1,1 mg per kilogram berat badan',
	Bamgetol:
		'Dewasa:\nDosis awal: 100 – 200 mg dikonsumsi sebanyak 2x sehari. Dosis dari obat ini dapat ditingkatkan secara bertahap sesuai dengan kondisi.\n\nDosis perawatan: 200 – 800 mg per hari yang dibagi dalam beberapa jadwal konsumsi. Dosis maksimal dari obat ini adalah 1.200 mg per hari.',
	Gabapentin:
		'Dewasa: 300 mg dikonsumsi 1x sehari pada hari pertama. 300 mg dikonsumsi sebanyak 2x sehari pada hari kedua. 300 mg dikonsumsi sebanyak 3x sehari pada hari ketiga. Dosis tersebut dapat ditingkatkan menjadi 300 mg yang dikonsumsi selama 2 - 3 hari. Dosis maksimal dari penggunaanobat ini adalah 3600 mg per hari',
	Lioresal:
		'Dosis awal:\nDewasa dan anak-anak berusia ≥ 12 tahun: 5 mg dikonsumsi sebanyak 3x sehari. Dosis tersebut dapat ditingkatkan secara bertahap sesuai dengan kondisi dari pasien\nAnak-anak: 0.3 mg/kg dikonsumsi sebanyak 3x sehari\n\nDosis pemeliharaan:\nAnak-anak berusia ≥ 8 tahun: 60 mg per hari\nAnak-anak berusia 6 - 8 tahun: 30 - 40 mg',
	Amitriptyline:
		'Dewasa:\nDosis awal: 10 – 25 mg per hari dikonsumsi pada malam hari. Dosis obat ini dapat ditingkatkan tiap 3 – 7 hari sesuai dengan respons pasien. Dosis yang dianjurkan sekitar 25 – 75 mg per hari.\n\nLansia:\nDosis awal: 10 – 25 mg per hari dikonsumsi pada malam hari. Dosis dapat ditingkatkan secara bertahap. Namun, tetap berhati-hati saat menggunakan dosis di atas 75 mg.',
	Rogaine:
		'Bentuk Cair:\nDewasa: Oleskan 1 mL ke kulit kepala dilakukan sebanyak 2x sehari.\nAnak-anak > 18 tahun: Dosis dan penggunaan minoxidil harus dikonsultasikan kembali dengan dokter\n\nBentuk Foam:\nDewasa: Oleskan setengah tutup botol ke kulit kepala dilakukan sebanya 2x sehari.\nAnak-anak > 18 tahun: Dosis dan penggunaan minoxidil harus dikonsultasikan kembali dengan dokter\n',
	'Regrou Forte': 'Dosis: 2x sehari sebanyak 1 mL',
	'Regrou Hair Regrowth': 'Dosis: 2x sehari sebanyak 1 mL',
	Eminox: 'Dosis: 2x sehari sebanyak 1 mL',
	'Sanbe Hair': 'Dosis: 2x sehari sebanyak 1 mL',
	Finasteride: 'Dewasa: 1 mg dikonsumsi sebanyak 1x sehari. Obat ini diberikan selama minimal 3 bulan',
	Baricitinib:
		'Kondisi: Alopecia areata yang parah (tidak botak total)\nDewasa: Dosis 2 mg dikonsumsi sebanyak 1x sehari. Dosis dapat ditambah menjadi 4 mg 1 kali sehari jika alopecia areata belum membaik.\nDosis dapat dihentikan jika pasien mengalami infeksi serius atau jika kondisi pasien tidak membaik setelah 36 minggu menggunakan baricitinib.\n\nLansia ≥ 75 tahun: Dosisnya 2 mg dikonsumsi sebanyak 1 kali\n\nKondisi: Kebotakan total akibat alopecia areata\nDewasa: 4 mg dikonsumsi sebanyak 1x sehari. Dosis dapat dikurangi secara bertahap menjadi 2 mg per hari jika kondisi pasien membaik.',
	'Erlamycetin Tetes Telinga':
		'Dewasa dan anak-anak: 2 - 3 tetes diberikan sebanyak 3x sehari. Obat ini diberikan pada telinga yang bermasalah selama 1 minggu',
	'Reco Tetes Telinga':
		'Dewasa dan anak-anak berusia > 2 tahun: 3 - 4 tetes yang diberikan sebanyak 2 - 3x sehair. Pemberian obat dilakukan selama 7 hari atau sesuai anjuran dokter',
	'Akilen Tetes Telinga':
		'Dewasa: 6 - 10 tetes diberikan sebanyak 2x sehari pada telinga yang bermasalah. Durasi pemberian obat dilakukan selama 14 hari',
	'Ofloxacin Ear Drop': 'Dewasa: 6 - 10 tetes diberikan sebanyak 2x sehari pada telinga yang bermasalah',
	'Otopain Ear Drop': '2-4 x sehari 4-5 tetes',
	'Otilon Ear Drop': '2-4 x sehari 4-5 tetes',
	'Erlamycetin Tetes Mata':
		'Dosis 5 ml:\nDewasa dan anak-anak berusia ≥ 2 tahun: 1 - 4x sehari dengan dosis 1 tetes pada mata yang mengalami infeksi. Untuk infeksi konjungtivitis akut, berikan obat tetes setiap 1 jam atau dapat mengikuti petunjuk dokter\n\nDosis 10 ml:\nDewasa dan anak-anak berusia ≥ 2 tahun: 6x sehari dengan dosis 1 - 2 tetes pada mata yang mengalami infeksi',
	'Cendo Natacen':
		'Dewasa: Dosis 1 tetes, tiap 4–6 jam. Selanjutnya, frekuensi penggunaan bisa dikurangi menjadi setiap 4 jam jika gejala konjungtivitis sudah membaik.',
	'Cendo Floxa':
		'Dewasa dan anak-anak berusia ≥ 1 tahun: Teteskan 1 - 2 tetes pada mata yang sakit dan dilakukan setiap 2 - 4 jam selama 2 hari. Pada hari ke-3 dan seterusnya, dosis bertambah menjadi 1 - 2 tetes yang diberikan sebanyak 4x sehari.',
	'Cendo Fenicol': 'Dewasa dan anak-anak: 1 - 2 tetes dilakukan sebanyak 3x sehari',
	'Cendo Xitrol':
		'Dewasa dan anak-anak: 1 - 2 tetes setiap 1 - 2 jam. Obat tetes diberikan pada siang dan malam hari. Dosis tersebut dapat dikurangi menjadi 1 - 2 tetes setiap 4 - 6 jam jika keluhan sudah membaik',
	'Cendo Gentamicin Tetes': '3 - 4 tetes diberikan sebanyak 3 - 4x sehari',
	'Cendo Gentamicin Salep':
		'2 - 3x sehari atau sesuai petunjuk dokter. Oleskan pada kelopak mata yang mengalami',
	'Reco Tetes Mata': 'Dosis: 3 - 4x diberikan sebanyak 2 tetes',
	Alegysal: 'Dosis: 2x sehari diberikan sebanyak 1 tetes pada pagi dan sore hari',
	'Cendo LFX': 'Dosis: 1 - 2 tetes pada mata yang sakit setiap 2 jam (hingga 8 kali sehari)',
	'Cendo Lytrees': 'Dosis: 1 – 2 tetes, 3 – 4 kali sehari',
	'Polidemisine Eye Drop': 'Dewasa & anak usia ≥ 2 tahun: 1–2 tetes, 4–6 kali sehari.',
	'Cendo Tobroson':
		'1 – 2 tetes diberikan setiap 4 – 6 jam. Dosis dapat ditingkatkan 1 – 2 tetes tiap 2 jam selama 24 – 48 jam pertama',
	Rifampicin: 'Dosis: 450 - 600 mg setiap 12 jam sekali',
	Rifastar:
		'Berat badan > 71 kg: 5 tablet dikonsumsi sebanyak 1x sehari\n\nBerat badan 55 - 70 kg: 4 tablet dikonsumsi sebanyak 1x sehari\n\nBerat badan 38 - 54 kg: 3 tablet dikonsumsi sebanyak 1x sehari\n\nBerat badan 30 - 37 kg: 2 tablet dikonsumsi sebanyak 1x sehari',
	'Pro-TB':
		'Dewasa dengan BB > 71 kg: 5 kaplet 1 kali sehari\nDewasa dengan BB 55 - 70 kg: 4 kaplet 1 kali sehari\nDewasa dengan berat badan (BB) 38 - 54 kg: 3 kaplet 1 kali sehari\n\nAnak dengan BB 38 - 54 kg: 3 kaplet, 1 kali sehari\nAnak dengan BB 30 - 37 kg: 2 kaplet, 1 kali sehari',
	Ethambutol:
		'Dosis lazim: 15 -25 mg per kg berat badan per hari dosis tunggal. \n\nPasien yang belum pernah diobati dengan obat anti Tuberkolusis: 15 mg per kg berat badan per hari dosis tunggal',
	Rifamtibi:
		'Dewasa dengan BB < 50 kg: 450 mg/hari. \nDewasa dengan BB >50 kg: 600 mg/hari.\n\nDiberikan dosis tunggal selama 4 minggu pertama. 5 bulan berikutnya, 600 mg 2x seminggu\n',
	Isoniazid:
		'Kondisi TBC aktif dan tuberculosis yang menyebar ke organ lain\nDewasa: 5 mg/kg BB. Dengan dosis maksimum 300 mg per hari \nAnak-anak: 10 - 15 mg/kg BB per hari. Dengan dosis maksimum 300 mg per hari\n\nKondisi Tuberculosis Laten\nDewasa: 300 mg per hari. Dosis ini diberikan selama 6 bulan\nAnak-anak: 10 mg/kg BB per hari. Dosis ini diberikan selama 6 bulan dengan dosis maksimum 300 mg per hari',
	Pyrazinamide:
		'Dewasa dengan berat badan < 33 kg: 750 mg per hari\n\nDewasa dengan berat badan 33 - 50 kg: 500 mg per hari \n\nDewasa dengan berat badan ≥ 50 kg: 2.000 mg per hari\n\nAnak-anak: 35 mg/kg BB per hari. Dosis tersebut dapat berubah menjadi 50 mg/kg BB dikonsumsi sebanyak 3x seminggu\n\nDosis obat tersebut diberikan selama 2 bulan',
	'Ventolin Inhaler': 'Dosis: 1 - 2x hisap pada saat serangan asma terjadi',
	'Velutine Inhalation': 'Dewasa dan anak-anak: 2,5 mg, dapat diulangi hingga 4x perhari dengan nebulizer',
	'Seretide Inhaler': 'Dewasa dan anak-anak berusia > 2 tahun: 2x hirup diberikan sebanyak 2x sehari',
	'Symbicort Turbuhaler':
		'Dewasa dan anak-anak berusia > 12 tahun: 1 - 2x hirup diberikan sebanyak 2x sehari pada pagi dan sore. Dosis maksimal dari obat ini sebesar 4x hirup\n\nAnak-anak berusia > 6 tahun: 1x hirup diberikan sebanyak 1x sehari dengan dosis maksimal dalam sehari adalah 4x hirup',
	'Ventolin Nebules':
		'Dewasa dan anak-anak: Awal 2,5 mg, diberikan sebanyak 4x sehari. Dosis tersebut dapat ditingkatkan menjadi 5 mg',
	'Combivent UDV':
		'Dosis: 1 ampul sehari. Dosis tersebut dapat ditingkatkan menjadi 2 unit vial dosis pada kondisi yang berat/parah',
	'Farbivent Inhalation': 'Dosis: 1 ampul diberikan sebanyak 3 - 4x sehari',
	'Bricasma Turbuhaler':
		'Dewasa dan anak-anak berusia > 6 tahun: 1 - 2x hirup dengan selang waktu pemberian adalah 5 menit. Dosis maksimal: 6x hirupan dalam 24 jam',
	Ambroxol: 'Dewasa dan anak-anak berusia > 12 tahun: 2 - 3x sehari',
	Mucos:
		'Dewasa dan anak anak berusia > 12 tahun: 10 ml (2 sendok takar) diminum sebanyak 2 - 3x sehari\n\nAnak-anak berusia 6 - 11 tahun: 5 ml (1 sendok takar) diminum sebanyak 2 - 3x sehari\n\nAnak-anak berusia 2 - 5 tahun: 2.5 ml (1/2 sendok takar) diminum sebanyak 2 - 3x sehari',
	'Panadol Cold & Flu':
		'Dewasa: 1 kaplet diminum sebanyak 3x sehari (tiap 4 - 6 jam). Dosis maksimal yang boleh dikonsumsi dari obat ini adalah 8 kaplet per hari',
	'Mixagrip Flu':
		'Dewasa dan anak-anak berusia > 12 tahun: 1 kaplet dikonsumsi sebanyak 3 - 4x sehari\n\nAnak-anak berusia 6 - 12 tahun: 1/2 kaplet dikonsumsi sebanyak 3 - 4x sehari',
	'Alco Plus DMP':
		'Dewasa: 1 sendok teh (5 ml) dikonsumsi sebanyak 3x sehari\n\nAnak-anak berusia 6 - 12 tahun: 1/2 sendok teh (2.5 ml) diminum sebanyak 3x sehari\n\nAnak-anak berusia 2 - 5 tahun: 1/4 sendok teh (2.5 ml) diminum sebanyak 3x sehari',
	'Bodrex Flu': 'Dewasa: 1 kaplet dikonsumsi sebanyak 3x sehari',
	Azithromycin:
		'Dewasa: 500 mg pada hari pertama, diikuti dengan 250 mg sekali sehari pada hari ke-2 hingga ke-5',
	Zithromax:
		'Dewasa: 500 mg dikonsumsi sebanyak 1x sehari diberikan pada hari pertama. Dosis tersebut dapat diturunkan menjadi 250 mg dikonsumsi 1x sehari pada hari berikutnya sampai hari ke-5',
	'Avelox Moxifloxacin': '1 tablet per hari. Obat ini diberikan selama 10 hari.',
	Zinnat:
		'Dewasa: 250 - 500 mg dikonsumsi sebanyak 2x sehari\n\nAnak-anak berusia ≥ 3 tahun: 15 mg/kg BB dikonsumsi sebanyak 2x sehari\n\nAnak-anak berusia 3 - 2 tahun: 10 mg/kg BB yang dikonsumsi sebanyak 2x sehari',
	Cefdinir:
		'Dewasa: 300 – 600 mg dikonsumsi sebanyak 1 – 2x setiap hari. Obat ini dikonsumsi selama 5 – 10 hari\n\nAnak usia 6 bulan – 12 tahun: 7 – 14 mg/kg BB dikonsumsi sebanyak 1 – 2x setiap hari. Obat ini dikonsumsi selama 5 – 10 hari. Dosis maksimal 600 mg per hari.',
	'Fluimucil Dry Sirup':
		'Dewasa: 10 ml (2 sendok takar) diminum sebanyak 2 - 3x sehari\n\nAnak-anak: 5 ml (1 sendok takat) diminum sebanyak 2 - 4x sehari\n\nAnak-anak berusia > 4 tahun: 300 mg / hari\n\nAnak-anak berusia 2 - 4 tahun: 200 mg / hari\n\nAnak-anak berusia < 2 tahun: 100 mg / hari',
	'Cefila Dry Sirup':
		'Dewasa dan anak dengan berat badan (BB) > 30 kg: 50 - 100 mg dikonsumsi sebanyak 2x sehari. Untuk mengatasi infeksi bakteri berat, dosisnya hingga 200 mg, 2 kali sehari.\n\nAnak dengan BB < 30 kg: 1,5 - 3 mg/kgBB dikonsumsi sebanyak 2x sehari',
	'Sanmol Sirup':
		'Anak-anak berusia 9 - 12 tahun: 15 - 20 ml dikonsumsi sebanyak 3 - 4x sehari\r\n\nAnak-anak berusia 6 - 9 tahun: 10 - 15 ml dikonsumsi sebanyak 3 - 4x sehari\r\n\nAnak-anak berusia 2 - 6 tahun: 5 - 10 ml dikonsumsi sebanyak 3 - 4x sehari\r\n\nAnak-anak berusia: 1 - 2 tahun: 5 ml dikonsumsi sebanyak 3 - 4x sehari',
	'Azithromycin Dry Sirup':
		'Anak usia > 2 tahun:\nBentuk: Suspensi lepas cepat\n12 mg/kg BB per hari. Obat ini dikonsumsi selama 5 hari.',
	'FG Troches':
		'Dewasa: 1 – 2 tablet isap dikonsumsi sebanyak 4 – 5x sehari\n\nAnak-anak: 1 tablet isap dikonsumsi sebanyak 4 – 5x sehari',
	'Nytex Sirup':
		'Dewasa dan anak-anak berusia > 14 tahun: 2 sendok takar dikonsumsi sebanyak 2 - 3x sehari\n\nAnak-anak berusia 6 - 14 tahun: 2 sendok takar dikonsumsi sebanyak 2x sehari',
	'Prome Sirup':
		'Dewasa: 5 - 10 ml dikonsumsi sebanyak 3 - 4x sehari\n\nAnak-anak berusia > 4 tahun: 5 ml dikonsumsi sebanyak 1 - 4x sehari\n\nAnak-anak berusia < 4 tahun: 2,5 ml\n',
	'Cefixime Trihydrate':
		'Dewasa: 400 mg dikonsumsi sebanyak 1x sehari atau 200 mg tiap 12 jam sekali. Pemberian obat ini diberikan selama 1 - 2 minggu',
	Erythromycin:
		'Dewasa: \nInfeksi Ringan - Sedang: 500 mg dikonsumsi setiap 12 jam \nInfeksi Berat: 1000 mg dikonsumsi setiap 6 jam. Dosis maksimal yang dapat dikonsumsi adalah 4 gram per hari\n\nAnak-anak: 30 – 50 mg/kg BB per hari, dibagi ke dalam 4 dosis. Dosis maksimal 4 gram per hari.',
	Degirol:
		'Dewasa dan anak-anak berusia > 10 tahun: 1 tablet dihisap, dikonsumsi tiap 3 - 4 jam. Maksimal 8 tablet per hari',
	Longatin: 'Dewasa: 1 kapsul dikonsumsi sebanyak 4x sehari',
	'Promedex Sirup':
		'Dewasa dan anak-anak berusia > 12 tahun: 2 – 3 sendok takar (10–15 ml) dikonsumsi sebanyak 3x sehari\n\nAnak-anak berusia 6 – 12 tahun: 1 sendok takar (5 ml) dikonsumsi sebanyak 3x sehari\n\nAnak-anak berusia 2 – 6 tahun: ½ sendok takar (2,5 ml) dikonsumsi sebanyak 3x sehari',
	'Tantum Lozenges':
		'kasus berat: 1 tablet dihisap secara perlahan setiap 2 jam\n\nkasus ringan: 1 tablet dihisap secara perlahan setiap 3 jam',
	'Helixim Dry Sirup':
		'Dewasa dan anak-anak dengan BB > dari 30 kg: 50-100 mg, diberikan per oral dua kali sehari. Dosis dapat ditingkatkan menjadi 200 mg, diberikan sebanyak 2x sehari',
	'Bicrolid Kaplet':
		'250 mg dikonsumsi sebanyak 2x sehari setiap 12 jam sekali. Pemberian obat dilakukan selama 10 hari',
	Attapulgite:
		'Dewasa dan anak-anak berusia > 12 tahun: 2 tablet setiap selesai buang air besar. Dosis maksimal adalah 12 tablet dalam sehari\n\nAnak-anak berusia 6 – 12 tahun: 1 tablet setiap selesai buang air besar. Dosis maksimal adalah 6 tablet dalam sehari',
	'Neo Diaform':
		'Dewasa dan anak-anak berusia > 12 tahun: 2,5 tablet/diare. Dosis maksimal adalah 15 tablet dalam 1 hari\n\nAnak-anak berusia 6 - 12 tahun: 1,5 tablet/diare. Dosis maksimal adalah 7,5 tablet dalam 1 hari',
	Rillus: 'Dosis: 1 tablet per hari',
	Zinc: 'Dewasa: 10 – 20 mg, dikonsumsi 1x sehari. Pengobatan dilakukan selama 10 – 14 hari, bahkan ketika diare sudah sembuh\n\nAnak-anak berusia < 6 bulan: 10 mg, dikonsumsi 1x sehari. Pengobatan dilakukan selama 10 – 14 hari, bahkan ketika diare sudah sembuh\n\nAnak-anak berusia 6 – 20 bulan: 20 mg, 1x sehari. Pengobatan dilakukan selama 10 – 14 hari, bahkan ketika diare sudah sembuh',
	Imodium:
		'Kondisi: Diare akut\nDewasa (usia ≥ 18 tahun): Dosis awal 2 tablet. Selanjutnya, 1 tablet setelah BAB cair. Dosis maksimal 16 mg atau 8 tablet per hari.\n\nKondisi: Diare kronis\nDewasa (usia ≥ 18 tahun): Dosis awal 2 tablet. Berikutnya, 1 tablet setelah BAB cair. Dosis harian umumnya adalah 1 – 6 tablet. Dosis maksimal adalah 16 mg atau 8 tablet per hari.',
	Oralit:
		'Dewasa dan anak-anak berusia > 12 tahun: 12 gelas pada 3 jam pertama, kemudian 2 gelas tiap kali diare\n\nAnak-anak berusia 5 – 12 tahun: 6 gelas pada 3 jam pertama, kemudian 1½ gelas tiap kali diare\n\nAnak-anak berusia 1 – 5 tahun: 3 gelas pada 3 jam pertama, kemudian 1 gelas tiap kali diare\n\nAnak-anak berusia < 1 tahun: 1 – ½ gelas pada 3 jam pertama, kemudian ½ gelas tiap kali diare',
	Entrostop:
		'Dewasa dan anak-anak berusia > 12 tahun: 2 tablet dikonsumsi setiap kali buang air besar. Dosis maksimal dari obat ini adalah 12 tablet per hari\n\nAnak-anak berusia 6 - 12 tahun: 1 tablet dikonsumsi setiap kalo buang air besar. Dosis maksimal dari obat ini adalah 6 tablet per hari',
	Diapet:
		'Dewasa: 2 kapsul, 2 kali sehari. Untuk diare akut, dosisnya 2 kapsul, 2 kali sehari dengan selang waktu 1 jam.',
	Lodia: 'Dewasa dan anak-anak usia ≥ 2 tahun',
	'New Diatabs':
		'Dewasa dan anak-anak berusia ≥ 12 tahun: 2 tablet setiap setelah buang air besar, maksimum penggunaan 12 tablet dalam waktu 24 jam.\n\nAnak-anak berusia 6 - 12 tahun: 1 tablet setiap setelah buang air besar, maksimum penggunaan 6 tablet dalam waktu 24 jam. Jika gejala-gejala masih berlangsung terus, harap berkonsultasi dengan dokter',
	Smecta:
		'Dewasa: 9 gram per hari, selama 7 hari.\n\nAnak usia 2 tahun: 3–6 gram per hari. Pengobatan dilakukan maksimal selama 7 hari.\n\nAnak usia di atas 2 tahun: 6–9 gram per hari. Pengobatan dilakukan maksimal selama 7 hari.',
	Omeprazole:
		'Dewasa: 20 mg atau 40 mg, 1 kali sehari, selama 4 minggu untuk ulkus duodenum dan 8 minggu untuk tukak lambung. Dosis pemeliharaan 10–20 mg, 1 kali sehari, dapat ditingkatkan hingga 40 mg bila perlu.',
	'Antasida Doen':
		'Bentuk: Suspensi\nDewasa dan anak usia ≥ 12 tahun: 10–20 ml, 4 kali sehari, setiap 20–60 menit setelah makan dan sebelum tidur.\n\nBentuk: Tablet\nDewasa dan anak usia ≥ 12 tahun: 2–4 tablet, 4 kali sehari. Dosis maksimal 16 tablet sehari. ',
	'Polysilane Suspensi':
		'Dewasa dan anak usia > 12 tahun: 1–2 sendok takar (5–10 ml), 3–4 kali sehari.\n\nAnak usia 6 – 12 tahun: ½–1 sendok takar (2.5–5 ml), 3 – 4 kali sehari.',
	'Promag Suspensi':
		'Dewasa: 1 - 2 sendok takar (5 - 10 ml), diminum sebanyak 3 - 4x sehari.\n\nAnak usia 6 - 12 tahun: 1 sendok takar (5 ml), diminum sebanyak 3 - 4x sehari.',
	'Promag Double Action':
		'Dewasa dan anak usia ≥12 tahun: 1 tablet kunyah, 2 kali sehari.\n\nAnak usia di bawah 12 tahun: sesuai anjuran dokter dan hanya dikonsumsi jika ada gejala',
	'Sanmag Suspensi': '1 - 2 sendok takar (5 - 10 ml), sebanyak 3 - 4x sehari.\n',
	'Farmacrol Forte Suspensi':
		'Dewasa: 1 sendok takar (5 ml), diminum 3 - 4x sehari. \n\nAnak-anak: 1/2 sendok takar (2,5 ml), diminum 3-4 kali sehari.\n',
	'Sucralfate Suspensi': 'Dewasa: 4x sehari (2 sendok takar)',
	Lansoprazole:
		'Kondisi: Tukak Lambung\nDewasa: 30 mg, dikonsumsi 1x sehari selama 2 – 4 minggu pada kondisi ulkus duodenum, atau selama 4 – 8 minggu pada kondisi tukak lambung\n\nKondisi: Tukak Lambung yang disebabkan infeksi oleh Helicobacter pylori\nDewasa: 30 mg, dikonsumsi 2 – 3x sehari, selama 1 –2 minggu\n\nKondisi: Tukak Lambung akibat penggunaan obat antiinflamasi nonsteroid (OAINS)\nDewasa: 15 – 30 mg, dikonsumsi 1x sehari, selama 4 – 8 minggu\n',
	Ranitidine:
		'Dewasa: 300 mg 1 kali sehari dikonsumsi sebelum tidur atau 150 mg 2 kali sehari, setidaknya selama 4 minggu. Dosis pemeliharaan 150 mg sekali sehari sebelum tidur.\n\nAnak usia 3 – 11 tahun: 2 – 4 mg/kg BB, per hari dibagi menjadi 2 dosis. Dosis maksimal 300 mg per hari. Pengobatan dilakukan selama 4 – 8 minggu.',
	'Lanpracid Kapsul': '1 kapsul perhari. Durasi pengobatan dilakukan selama 8 minggu',
	Mylanta:
		'Dewasa: 1 - 2 sendok takar (5 - 10 ml) 3 - 4x sehari\n\nAnak-anak (6 - 12 tahun): 1/2 - 1 sendok takar (2,5 - 5 ml), dikonsumsi sebanyak 3 - 4x sehari',
	'Polycrol Forte Sirup': '1 - 2 sendok takar, dikonsumsi sebanyak 3 - 4x perhari',
	Bisacodyl:
		'Dewasa dan anak-anak berusia > 10 tahun: 1 - 2 tablet dikonsumsi sebanyak 1x sehari\n\nAnak-anak berusia > 4 - 10 tahun: 1 tablet dikonsumsi sebanyak 1x sehari\n',
	Dulcolax:
		'Dewasa dan anak usia > 10 tahun: 1–2 tablet per hari.\n\nAnak usia 6 – 10 tahun: 1 tablet per hari.',
	Dulcolactol:
		'Dewasa Keadaan Parah\nDosis awal: 2 x 15 ml per hari\nDosis penunjang: 15 - 25 ml\n\nDewasa keadaan sedang\nDosis awal: 15 - 30 ml\nDosis penunjang: 10 - 15 ml\n\nDewasa keadaan ringan\nDosis awal: 15 ml\nDosis penunjang: 10 ml\n\n\nAnak- anak berusia 5 - 10 tahun: 2 x 10 ml perhari\nAnak- anak berusia 1 - 5 tahun: 2 x 5 ml perhari\nAnak- anak berusia < 1 tahun: 2 x 2,5 ml perhari',
	'Fleet enema': 'Dewasa dan anak-anak berusia > 12 tahun: 1 tube / hari',
	Laxatab:
		'Dewasa dan anak usia > 12 tahun: 2 tablet, 1 kali sehari.\n\nAnak-anak usia 6 - 12 tahun: 1 tablet, 1 kali sehari.',
	Microlax: 'Dewasa dan anak usia > 3 tahun: 1 tabung (5 ml)',
	Laxadine:
		'Dewasa berusia > 12 tahun: 1x sehari, dikonsumsi sebanyak 1 - 2 sendok makan\nAnak-anak berusia 6 - 12 tahun: 1x sehari, dikonsumsi sebanyak 0,5 - 1 sendok makan',
	Lactulax:
		'Dewasa: 15 - 45 mL per hari.\n\nAnak-anak berusia 6 - 14 tahun: 15 mL per hari.\n\nAnak-anak berusia 1 - 5 tahun: 5 - 10 mL per hari.\n\nAnak-anak berusia < 1 tahun: 5 mL per hari.',
	'Acitral Suspensi':
		'Dewasa: 1-2 sendok takar (5-10 ml), dikonsumsi sebanyak 3 - 4x sehari\nAnak-anak berusia 6 - 12 tahun: 1/2 - 1 sendok takar (2,5-5 ml), dikonsumsi sebanyak 3x sehari',
	Grafazol:
		'Dewasa dan anak usia > 10 tahun: Dosis 400–800 mg, 3 kali sehari selama 5–10 hari.\r\n\nAnak usia 1–3 tahun: 100–200 mg, 3 kali sehari.\r\n\nAnak usia 3–7 tahun: 100–200 mg, 4 kali sehari.\r\n\nAnak usia 7–10 tahun: 200–400 mg, 3 kali sehari.',
	'Strocain P': 'Dosis: 1 - 2 tablet dikonsumsi sebanyak 3 - 4x sehari',
	Episan:
		'Bentuk obat: Tablet\n1 tablet, 4 kali sehari.\n\nBentuk obat: Suspensi\n10 ml (2 sendok takar), 4 kali sehari.',
	Hufamycetin:
		'Dewasa: 1-2 kapsul, 4x sehari\n\nBayi usia di atas 2 minggu: 50 mg per kgBB per hari dalam dosis terbagi, 3 - 4x sehari\n\nBayi usia di bawah 2 minggu: 25 mg per kgBB per hari dalam dosis terbagi, 4 - 6x sehari',
	'Baquinor Forte':
		'Infeksi Saluran Kemih (ISK) ringan hingga sedang: 250 mg dikonsumsi selama 2x sehari\n\nInfeksi Saluran Kemih (ISK) berat, prostatis kronik, infeksi GI: 500 mg, 2 x sehari\n\nInfeksi saluran napas, tulang dan sendi, kulit dan jaringan lunak ringan sampai dengan sedang: 250 - 500 mg dikonsumsi selama 2 x sehari\n\nInfeksi saluran napas, tulang dan sendi, kulit dan jaringan lunak berat: 500 - 750 mg dikonsumsi sebanyak 2x sehari\n',
	Pyxime:
		'Dewasa dan anak-anak dengan berat badan > 30 kg: 50 – 100 mg diberikan 2 kali sehari. Dosis harus disesuaikan dengan usia, berat badan dan kondisi pasien\n\nAnak-anak dengan gejala demam tifoid: dosis 10 – 15 mg/kg berat badan/hari dikonsumsi selama 2 minggu',
	Floxigra: '2 kali sehari atau sesuai petunjuk dokter.',
	Ciprofloxacin: 'Dewasa: 500 mg diminum sebanyak 2 kali sehari. Pemberian obat ini dilakukan selama 7 hari.',
	Cotrimoxazole:
		'Dewasa dan anak-anak berusia > 12 tahun: 1 tablet dikonsumsi sebanyak 2x sehari. Obat ini dikonsumsi selama 10 - 14 hari',
	'Flagyl Forte':
		'Dewasa: 500 - 750 mg dikonsumsi sebanyak 3x sehari. Obat ini dikonsumsi selama 5 - 10 hari\n\nAnak-anak: 35 - 50 mg/kg BB dikonsumsi sebanyak 3x sehari. Obat ini dikonsumsi selama 10 hari',
	'New Syarbin':
		'Dewasa: 0,525 mg diberikan setiap 30 menit atau 1 jam hingga gejala mereda. Pemberian obat tidak boleh diberikan lebih dari 4 kali dalam sehari',
	Metronidazole: 'Dosis: 3 kali sehari, selama 5–10 hari.',
};

const efekSampingObat = {
	Paracetamol:
		'Obat ini jarang menimbulkan efek samping kepada para pasien. Namun, jika dikonsumsi dengan dosis yang tidak sesuai dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, hingga tubuh terasa lemas',
	'Bodrex Migra':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, ruam, badan terasa lelah, hingga kesulitan untuk tidur. Jika obat dikonsumsi dalam jangka waktu yang panjang dengan dosis yang besar, maka fungsi dari ginjal akan menjadi terganggu dan dapat menyebabkan terjadinya hipersensitivitas / reaksi sistem imun tubuh yang berlebihan terhadap suatu zat.',
	'Panadol Extra':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, gelisah, cemas, tubuh terasa lemas, hingga kesulitan untuk tidur.',
	'Natrium Diklofenak':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, diare, mual, konstipasi, kelainan fungsi hati, ruam tinnitus, nyeri kram perut',
	'Farsifen Plus':
		'Obat tersebut memiliki beberapa efek samping yang dapat dirasakan oleh para pasien setelah meminum obat tersebut, antara lain sakit kepala, pusing, mengantuk, lemas, kesulitan tidur, mual, muntah, hingga diare.',
	'Proris Kaplet':
		'Obat ini memilikii beberapa efek samping yang akan timbul, seperti mual dan muntah, perut kembung, diare atau konstipasi, sakit maag, demam, sakit kepala, perubahan mood ',
	'Sanmol Forte':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti demam, ruam pada kulit, sakit tenggorokan, sariawan, nyeri pada punggung, mual, muntah, diare, hingga tubuh terasa lemas\n',
	Ibuprofen:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, atara lain sakit kepala, pusing, diare, mual, muntah, perut kembung, kesulitan untuk buang air besar, hingga nyeri pada bagian lambung',
	'Asam Mefenamat':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, sakit kepala, diare, pusing, pendarahan lambung, anemia, hiperkalemia, gagal jantung, tinniuts, sakit perut, perut kembung, sembelit, gastritis, hepatitis, stroke, serangan jantung, gangguan pada ginjal, dan gangguan pernapasan',
	Tremenza:
		'Konsumsi oabt yang berlebihan dapat menimbulkan beberapa efek samping, seperti mulut kering, hidung kering, tenggorokan kering, mengantuk, pusing, gangguan koordinasi, insomnia, halusinasi, tinitus',
	'Amoxicillin Tablet':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, mual, muntah, perubahan rasa pada lidah, diare, sakit perut, tubuh terasa gatal, hingga muncul ruam pada beberapa bagian tubuh',
	'Iliadin Nasal Spray':
		'Obat ini memiliki beberapa efek samping yang dapat dirasakan oleh pasien setelah menggunakan obat ini antara lain bersin-bersin, hidung menjadi kering, perih pada bagian rongga hidung, hidung menjadi meler, jantung berdebar dengan cepat. Jika pasien menggunakan obat ini tidak sesuai dengan dosis yang telah ditetapkan, maka akan timbul beberapa efek samping lain yang lebih parah, seperti sakit kepala yang parah, nyeri pada bagian dada, cemas, gelisah, lemas, keringat berlebih, hingga linglung',
	Methylprednisolone:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, sakit kepala, mual, muntah, perut kembung, nyeri otot, sulit tidur, gangguan suasana hati, depresi, insomia, perubahan suasana hati, perubahan kepribadian',
	Cetirizine:
		'Obat ini memiliki beberapa efek samping yang akan dirasakan, seperti mual, muntah, diare, sakit perut, mulut kering, pusing, sakit kepala, kejang, agitasi, insomnia, faringitis, rintis, ruam pada kulit',
	'Cefadroxil Monohydrate':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, diare, ruam kulit, biduran, angioedema, reaksi hipersensitif, gatal',
	Levofloxacin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, sakit kepala, insomnia, diare, sembelit, kejang, pusing, tremor, gangguan glukosa darah, bronkospasme, batuk, nyeri dada, perut, punggung secara mendadak, halusinasi, nyeri saat bergerak',
	'Breathy Nasal Drops':
		'Breathy Nasal Drops harus digunakan sesuai dengan dosis yang dianjutkan, jika tidak pasien akan mengalami efek samping yang tidak diinginkan, seperti bersin-bersin, batuk, hidung menjadi kering, hidung meler, hidung terasa perih, ruam, gatal, atau bengkak pada bagian wajah atau tenggorokan, hingga kesulitan untuk bernapas',
	'Breathy Nasal Spray':
		'Breathy Nasal Spray harus digunakan sesuai dengan dosis yang dianjutkan, jika tidak pasien akan mengalami efek samping yang tidak diinginkan, seperti iritasi, gatal, hidung menjadi berair, dan alergi',
	'Nasonex Nasal Spray':
		'Obat ini memiliki beberapa efek samping, sakit kepala, faringitis, rasa terbakar pada hidung, iritasi pada hidung, pengelihatan kabur',
	Amoxsan:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, diare, muntah, perubahan pada warna gigi (coklat, kuning, abu-abu), perubahan rasa pada lidah, ruam pada kulit, leukopenia (jumlah sel darah putih berada di bawah rata-rata normal), mudah memar atau mengalami pendarahan secara tiba-tiba bahkan dapat mengalami kejang',
	'Rhinos SR':
		'Obat ini memiliki beberapa efek samping, seperti mulut kering hidung kering, tenggorokan kering, mengantuk, pusing, gangguan GI, kesulitan untuk tidur, tidak selera makan',
	Betahistine:
		'Obat ini memiliki beberapa efek samping yang biasanya dirasakan oleh para pasien, antara lain sakit kepala, pusing, mengantuk, mual, muntah, perut terasa kembung, susah untuk mencerna makanan, penurunan tekanan darah secara drastis, kesulitan untuk bernapas hingga yang paling parah dapat menyebabkan kehilangan kesadaran diri jika pasien mengonsumsinya dengan dosis yang melebihi dari yang seharusnya',
	'Mertigo SR':
		'Obat ini memiliki beberapa efek samping, seperti mual, muntah, sakit kepala, perut kembung, diare, terjadi ruam pada kulit, gatal-gatal, hingga memicu penyakit maag. Jika pasien mengalami bengkak yang terjadi pada bagian bibir, lidah, kelopak mata, ruam yang timbul semakin melebar, atau sesak napas setelah meminum obat ini, diharapkan untuk langsung segera dibawa ke rumah sakit untuk penanganan lebih lanjut',
	Betaserc:
		'Obat ini memiliki beberapa efek samping, seperti mual, sakit kepala, maag, diare, pusing, muntah, perut kembung. Obat ini juga dapat memberikan efek samping lainnya, seperti terjadi ruam pada kulit, gatal, terjadi pembengkakan pada bagian wajah terutama pada bagian mata, bibir, atau lidah, hingga sesak napas yang harus ditangani dengan segera setelah efek tersebut timbul',
	Dimenhydrinate:
		'Obat ini memiliki beberapa efek samping, seperti mengantuk, pengelihatan buram, mulut kering, hidung kering, tenggorokan kering, konstipasi, ruam kulit, gatal-gatal, kesulitan buang air kecil, tremor, gelisah, kejang, detak jantung menjadi tidak teratur',
	Histigo:
		'Obat ini memiliki beberapa efek samping, seperti mual, muntah, gatal-gatal, perut kembung, sakit perut, ruam pada kulit, sakit kepala, diare, mulut kering, gangguan pencernaan',
	Vastigo: 'Obat ini memiliki beberapa efek samping, seperti',
	Merislon:
		'Obat ini memiliki beberapa efek samping, seperti mengantuk, mual, muntah, ruam pada kulit, sakit kepala',
	Frego:
		'Obat ini memiliki beberapa efek samping, seperti mengantuk, mual, gelisah, mulut kering, heartburn. Selain itu, obat ini juga dapat menimbulkan efek samping yang lebih serius, seperti nyeri otot, kesulitan untuk bergerak, tremor, hingga depresi. Jika gejala sudah masuk ke dalam tahap tersebut, segeralah konsultasikan ke dokter',
	Flunarizine:
		'Obat ini memiliki beberapa efek samping, seperti mengantuk, lesu (sementara), peningkatan berat badan, peningkatan nafsu makan, gelisah, mulut kering',
	Tegretol:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, mengantuk, mual, muntah, tremor, mulut menjadi kering, gangguan keseimbangan, agitas (gelisah atau mudah tersinggung), wajah memerah, sesak napas, mimisan, gangguan fungsi hati, hiponatermia',
	Lameson:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti insomnia, peningkatan berat badan, sakit kepala, gangguan pencernaan, mual, muntah',
	Bamgetol:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, sakit kepala, mengantuk, mulut menjadi kering, mual, muntah, penurunan kesadaran, gangguan pernapasan, gangguan pada irama jantung (jantung dapat berdetak lebih cepat atau lebih lambat dari biasanya), pengelihatan menjadi buram, mempengaruhi koordinasi gerakan otot, hilangnya nafsu untuk makan',
	Gabapentin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, kelelahan, pusing, mual, muntah, tremor, diare, mulut kering, pandangan kabur',
	Lioresal:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, sakit kepala, badan terasa lemas atau lelah, mual, frekuensi untuk buang air kecil meningkat, kesulitan untuk tidur, nyeri pada bagian dada, halusinasi, gangguan pada irama jantung, perubahan suasana hati, gangguan bicara, sesak napas, hingga pingsan',
	Amitriptyline:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti kantuk, pusing, mulut kering, pandangan kabur, sulit buang air kecil, berat badan naik, sakit perut, mual, muntah\n',
	Rogaine:
		'Penggunaan rogaine yang berlebihan dapat menimbulkan beberapa efek samping, seperti kulit kepala menjadi gatal, kering, kemerahan, mengelupas, iritasi, pertumbuhan rambut yang tidak merata, kerontokan rambut sementara',
	'Regrou Forte':
		'Regrou forte memiliki beberapa efek samping yang dapat ditimbulkan dari penggunaan yang berlebihan, seperti iritasi pada area yang telah diolesi, pusing, sakit kepala, gatal pada area kepala, kulit menjadi kering',
	'Regrou Hair Regrowth':
		'Regrou hair regrowth memiliki beberapa efek samping yang dapat ditimbulkan dari penggunaan yang berlebihan, seperti iritasi di area sekitar, kulit mengalami kekeringan, eritema, gatal, rasa panas pada kulit, iritasi mata, otitis eksterna, reaksi alergi',
	Eminox:
		'Eminox memiliki beberapa efek samping yang dapat ditimbulkan dari penggunaan yang berlebihan, seperti kekeringan kulit, eritema, gatal, hipertrikosis, rasa panas pada kulit, pusing, iritasi mata, infeksi telinga, gangguan pengelihatan',
	'Sanbe Hair':
		'Penggunaan sanbe hair yang berlebihan akan menimbulkan beberapa efek samping, seperti kulit mengalami kekeringan, eritema, gatal, hipertrikosis, rasa panas pada kulit, pusing, iritasi mata, infeksi telinga, gangguan pengelihatan.\n',
	Finasteride:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping yang harus diperhatikan, seperti timbulnya ruam pada bagian tubuh, gatal-gatal, bengkak pada bagian wajah, lidah atau tenggorokan, pusing, sakit kepala, kesulitan dalam bernapas atau menelan, penurunan terhadap gairah seks, gangguan terhadap ejakulasi, depresi, nyeri pada bagian testis, terdapat benjolan pada payudara',
	Baricitinib:
		'Obat ini memiliki beberapa efek samping, seperti mual, bersin-bersin, hidung tersumbat, dan sakit tenggorokan. Obat ini juga dapat memberikan gejala yang lebih serius, seperti gejala penyakit liver, anemia, herpes zoster, nyeri dada, sesak napas, bengkak, nyeri, hingga kemerahan dibagian tungkai',
	'Erlamycetin Tetes Telinga':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti telinga terasa perih, gatal, panas seperti terbakar, memar, hingga mengalami pendarahan yang tidak biasa',
	'Reco Tetes Telinga':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti iritasi pada telinga, gatal pada telinga, ototoksisitas, sensasi terbakar, perih, radang pada kulit telinga',
	'Akilen Tetes Telinga':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, pusing, sakit kepala, telinga terasa seperti terbaka, pendarahan pada telinga, tinnitus (telinga berdenging), gangguan tidur, terjadi gangguan pada pendengaran sehingga membuat pasien sedikit mengalami kesulitan ketika mendengar, dermatits',
	'Ofloxacin Ear Drop':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti nyeri, gatal pada telinga, pusing, rasa berputar, sakit kepala',
	'Otopain Ear Drop': 'Rasa terbakar, gatal, iritasi, kering dan jerawat',
	'Otilon Ear Drop':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sensitasi pada kulit, ototoksisitas, nefrotoksisitas, hiperpigmentasi, dermatitis oral, dermatitis kontak alergi, maserasi dan atrofi kulit, infeksi sekunder, striae, dan miliaria.',
	'Erlamycetin Tetes Mata':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti mata terasa panas atau perih untuk sementara, pengelihatan menjadi buram untuk sementara, mata gatal, kering, berair, mata menjadi lebih sensitif terhadap cahaya, bengkak pada kelopak atau area sekitar mata',
	'Cendo Natacen':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti mata menjadi lebih berair, pengelihatan menjadi buram untuk sementara waktu, mata lebih sensitif terhadap cahaya, mata merah dan bengkak, nyeri pada mata, mata terasa sangat panas, hingga sesak napas',
	'Cendo Floxa':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti mata terasa panas atau perih untuk sementara, pengelihatan menjadi buram untuk sementara, mata gatal, kering, berair, mata menjadi lebih sensitif terhadap cahaya, bengkak pada kelopak atau area sekitar mata',
	'Cendo Fenicol':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti iritasi pada mata, gatal-gatal, rasa terbakar, dermatitis, pengelihatan kabur',
	'Cendo Xitrol':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti mata menjadi perih, gatal, mata menjadi kering, mata kemerahan, pengelihatan menjadi kabur, mata mengalami bengkak, hingga terasa nyeri pada bagian belakang mata',
	'Cendo Gentamicin Tetes':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti iritasi ringan',
	'Cendo Gentamicin Salep':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa effek samping, seperti iritasi, nyeri, halusinasi',
	'Reco Tetes Mata':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti mata merah, pengelihatan kabur, reaksi alergik, superinfeksi, hipoplasia sumsum tulang, gatal pada mata, mata terasa perih atau panas, mata menjadi sensitif terhadap cahaya',
	Alegysal:
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti rasa terbakar, mata kering, sensasi seperti terkena benda asing, rasa tidak nyaman pada mata',
	'Cendo LFX':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti mata terasa perih, panas, mudah silau, mata terasa mengganjal, pengelihatan buram, mata bengkak, mata belekan, wajah dan bibir membengkak',
	'Cendo Lytrees':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti pengelihatan buram, rasa terbakar pada mata, kemerahan, gatal, mata bengkak, nyeri',
	'Polidemisine Eye Drop':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti pandangan menjadi kabut, mata gatal dan berair, mata menjadi lebih sensitif terhadap cahaya, terasa hangat atau panas sesaat setelah menggunakan obat ini',
	'Cendo Tobroson':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti pengelihatan kabur, mata iritasi, bengkak, gatal, mata merah, mata mengganjal, sakit kepala, pusing berputar',
	Rifampicin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, mual, muntah, diare, nyeri pada bagian lengan atau kaki, gangguan keseimbangan, heartburn, kram pada perut',
	Rifastar:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, diantaranya mual, muntah, leukopenia, anemia, kejang, dan beberapa gangguan pada organ tubuh, seperti pengelihatan, saluran pencernaan, fungsi hati, hingga gangguan terhadap sistem saraf',
	'Pro-TB':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, diantaranya urine kemerahan, gangguan gastrointestinal, gangguan fungsi hati, leukopenia, sindrom flu, manifestasi pada kulit, demam, dispnea, trombositopenia, purpura, gagal ginjal akut, hemolitik,  gangguan fungsi hati, neuropati peri',
	Ethambutol:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, diantaranya pusing, mual, muntah, sakit kepala, sakit peru, kesulitan mencerna, gatal, ruam, dada sesak, kesulitan bernafas, berkurangnya nafsu makan',
	Rifamtibi:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti gangguan gastrointestinal, fungsi hati abnormal, reaksi demam seperti gejala flu. Perubahan fungsi hati dan ginjal (karena hipersensitif). Reaksi kulit, eosinofilia, leukpenia,\n',
	Isoniazid:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, menurunnya jumlah trombosit darah, demam, vertigo, neuropati perifer, pandangan menjadi buram, nyeri pada mata, mati rasa pada beberapa bagian tubuh, dada terasa sesak, pendarahan atau memar yang tidak biasa, gangguan fungsi hati',
	Pyrazinamide:
		'Beberapa efek samping yang dapat terjadi setelah mengonsumsi pyrazinamide adalah, Nyeri sendi atau otot, Mual atau muntah, Hilang nafsu makan, Lelah\r\n',
	'Ventolin Inhaler':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mengantuk, mulut terasa kering, mual, muntah, denyut jantung meningkat, kram otot, kesulitan untuk tidur, nyeri pada bagian dada, hingga dapat menyebabkan sesak',
	'Velutine Inhalation':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti tremor, sakit kepala, takikardi',
	'Seretide Inhaler':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, nyeri atau radang pada tenggorokan, tremor, nyeri pada otot dan sendi, jantung berdebar lebih cepat, suara menjadi serak',
	'Symbicort Turbuhaler':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti gatal pada tenggorokan, suara menjadi serak, sakit kepala, jantung berdebar, batuk, tremor, infeksi candida pada mulut atau tenggorokan',
	'Ventolin Nebules':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti tremoer, takikardia, palpitasi, sakit kepala, gangguan gastrointesnial, gangguan tidur',
	'Combivent UDV':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, iritasi tenggorokan, batuk, mulut kering, mual, muntah, diare',
	'Farbivent Inhalation':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, gelisah, takikardi, tremor, palipitasi, batuk, iritasi lokal, mual, muntah, berkeringat, otot lemah, mialgia, kram otot, mulut kering',
	'Bricasma Turbuhaler':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti tremor, sakit kepala, takikardi, palpitasi, mual, dan kram',
	Ambroxol:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, sakit kepala, pusing, sakit perut, diare, insomnia, ruam pada kulit, bibir kering',
	Mucos:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual,\nmuntah, diare, dispepsia, mulut atau tenggorokan kering, sakit perut, mulas, hipoestesia oral\natau faring, dysgeusia. Berpotensi Fatal: Jarang, reaksi anafilaksis (misalnya syok anafilaksis,\nangioedema, ruam, urtikaria, pruritus).',
	'Panadol Cold & Flu':
		'Obat ini memiliki beberapa efek samping, seperti pusing, gelisah, cemas, tubuh terasa lemas, hingga kesulitan untuk tidur.',
	'Mixagrip Flu':
		'Obat ini memiliki beberapa efek samping yang akan dirasakan, seperti kantuk, bibir kering, pengelihatan kabur, mual, muntah, takikardi, aritmia, palpitasi, tremor, kerusakan hati, gelisah, insomnia, kemerahan pada kulit',
	'Alco Plus DMP':
		'Obat ini memiliki beberapa efek samping yang akan dirasakan seperti, insomnia, sakit kepala, palpitasi, eksitasi, tremor, aritmia, takikardia, kesukaraan berkemih',
	'Bodrex Flu':
		'Obat ini memiliki beberapa efek samping yang akan dirasakan seperti, Gangguan pencernaan, insomnia, gelisah, eksitasi, tremor, takikardia, aritmia, mulut kering,\npalpitasi, dan retensi urin Penggunaan dosis besar dan jangka panjang dapat menyebabkan\nkerusakan fungsi hati',
	Azithromycin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, kelelahan, gangguan pengelihatan, kesulitan dalam mencerna makanan, terjadi ruam pada kulit, diare, gangguan irama jantung, gangguan pada pendengaran, peradangan pada pankreas',
	Zithromax:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, pusing, perut terasa kembung, diare, gangguan pendengaran, gangguan terhadap fungsi hati',
	'Avelox Moxifloxacin':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, nyeri pada bagian perut, diare, sakit perut, gangguan pada indra perasa lidah',
	Zinnat:
		'Efek Samping yang timbul selama penggunaan Zinnat yaitu, Pusing, Sakit kepala, Mual, Diare, Perut kembung.',
	Cefdinir:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti Muntah, Mual, Diare, Sakit kepala, Sakit perut, Gatal di vagina atau keputihan.',
	'Fluimucil Dry Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti gangguan lambung, stomatis, rinore, sakit kepala, tinitus, demam, mual, muntah, sakit perut, ruam kulit',
	'Cefila Dry Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti syok, hipersensitivitas, hematologi, hati, ginjal, saluran cerna, pernafasan, perubahan flora bakteri, defisiensi vitamin, gangguan fungsi ginjal, stomatitis, kandidiasis',
	'Sanmol Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti hematologi, reaksi kulit, reaksi alergi, kerusakan hati',
	'Azithromycin Dry Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, kelelahan, gangguan pengelihatan, kesulitan dalam mencerna makanan, terjadi ruam pada kulit, diare, gangguan irama jantung, gangguan pada pendengaran, peradangan pada pankreas',
	'FG Troches':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, kehilangan selera makan, sakit perut, diare',
	'Nytex Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, diare, stomatitis, pusing, tinitus, gatal, biduran, erupsi kulit, bronkospasme, takikardi, penurunan tekanan darah, angioedema, ruam kemerahan, penglihatan kabur, gangguan fungsi hati, asidosis, kejang, dan kadang demam',
	'Prome Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti peningkatan nafsu makan, mengantuk, pengelihatan kabur, sulit kencing, mulut kering, dada sesak, hipotensi, lemah otot, tinitus, sakit kepala, serangan epilepsi, fotosensitivitas',
	'Cefixime Trihydrate':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, diare, sakit kepala, pusing, mual, muntah, perut terasa kembung, demam, gangguan pada fungsi hati atau ginjal',
	Erythromycin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, kehilangan nafsu makan, gangguan terhadap lambung, seperti nyeri, kram atau kembung, gangguan pendengaran, gangguan pada irama jantung',
	Degirol: '-',
	Longatin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti halusinasi, pupil mata membesar, mual, rasa tidak nyaman di perut, kejang otot, sakit dada, peningkatan ritme jantung, sakit dada, gemetar, kehilangan nafsu makan',
	'Promedex Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, pengelihatan kabur, mulut kering, dada terasa sakit, tinitus, sakit kepala, epilepsi, sakit perut, telinga berdengung, mual, muntah',
	'Tantum Lozenges':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti iritasi lokal dan rasa terbakar, mulut kering, sakit kepala, mengantuk',
	'Helixim Dry Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti syok, hipersensitivitas, hematologi, hati, ginjal, saluran cerna, penafasan, perubahan flora bakteri, defisiensi vitamin, gangguan fungis ginjal, stomatis',
	'Bicrolid Kaplet': 'Diare, mual, gangguan rasa, nyeri abdomen, sakit kepala',
	Attapulgite:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti dada terasa sesak, sembelit, muncul ruam pada kulit, kesulitan bernapas, pembengkakan pada wajah, mulut, bibir, atau lidah, mual, perut kembung',
	'Neo Diaform':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti konstipasi dan fecal impaction',
	Rillus: '-',
	Zinc: 'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti muntah, diare, rasa pahit, sakit perut, demam, batuk',
	Imodium:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, mual, pusing, tubuh merasa lelah, muncul ruam pada beberapa bagian, sakit perut, kram pada bagian perut, hingga dapat menyebabkan sembelit',
	Oralit:
		'Konsumsi oabt yang berlebihan dapat menimbulkan beberapa efek samping, seperti perut kembung, hiperkalemia, gagal jantung, hipernatremia',
	Entrostop:
		'Konsumsi obat yang diberikan dapat menimbulkan beberapa efek samping, seperti sembelit atau konstipasi ringan dan bersifat sementara',
	Diapet:
		'Konsumsi obat yang diberikan dapat menimbulkan beberapa efek samping, seperti mual, pusing, sakit perut, perut terasa kembung, nyeri pada bagian perut, sembelit',
	Lodia:
		'Konsumsi obat yang diberikan dapat menimbulkan beberapa efek samping, seperti nyeri abdomen, pusing, lelah, ruam kulit, megakolon toksik, sembelit, kelelahan, mual, sakit perut',
	'New Diatabs':
		'Efek samping yang dapat ditimbulkan akibat penggunaan berlebihan dari obat ini adalah mual, perut kembung, sakit perut, konstipasi',
	Smecta:
		'Efek samping yang mungkin terjadi selama pengunaan Smecta, antara lain. Jarang sembelit yang bersifat sementara.',
	Omeprazole:
		'Penggunaan obat yang tidak sesuai dengan dosis yang telah ditentukan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mengantuk, vertigo, mual, muntah, diare, sembelit, sakit perut, kesulitan untuk tidur',
	'Antasida Doen':
		'Penggunaan obat yang tidak sesuai dengan dosis yang telah ditentukan dapat menimbulkan beberapa efek samping, seperti sembelit, diare, kram perut, sendawa, mual atau muntah',
	'Polysilane Suspensi':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, sakit kepala, pusing, diare, sembelit',
	'Promag Suspensi':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sembelit / konstipasi, mual, muntah, sakit kepala, pusing, diare',
	'Promag Double Action':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti kontipasi, diare, mual, muntah, sakit kepala, pusing, gangguan irama jantung, dan ruam pada kulit',
	'Sanmag Suspensi':
		'Penggunaan sanmag yang berlebihan dapat mengakibatkan diare, konstipasi, kelelahan, mengantuk, lemah otot',
	'Farmacrol Forte Suspensi':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti diare, konstipasi, deplesi fosfat, hipermagnesia, obstruksi intestinal (dosis tinggi), sembelit, mual, muntah',
	'Sucralfate Suspensi':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mulut kering, diare, mual, muntah, rasa tidak nyaman pada lambung, kembung, ruam kulit, mengantuk, vertigo, nyeri punggung, sakit kepala',
	Lansoprazole:
		'Penggunaan obat yang berlebihan dapat menimbulkan beberaa efek samping, seperti nyeri perut, konstipasi, nyeri kepala, diare, mual, muntah, kembung',
	Ranitidine:
		'Penggunaan obat yang tidak sesuai dengan dosis yang telah ditentukan dapat menimbulkan beberapa efek samping, seperti sakit\nkepala, konstipasi, diare, mual, rasa tidak nyaman atau nyeri perut, pusing',
	'Lanpracid Kapsul':
		'Penggunaan obat yang tidak sesuai dengan dosis yang telah ditentukan dapat menimbulkan beberapa efek samping, seperti badan menjadi lemas, sakit kepala, diare, defisiensi (kekurangan) vitamin B12, fungsi hati menjadi terganggu, osteoporosis',
	Mylanta:
		'Penggunaan obat yang tidak sesuai dengan dosis yang telah ditentukan dapat menimbulkan beberapa efek samping, seperti diare, mual, muntah, sensasi terbakar dibagian mulut, kehilangan nafsu makan, gangguan pada indra perasa',
	'Polycrol Forte Sirup':
		'Efek samping yang dapat terjadi dari penggunaan yang berlebihan adalah mual, muntah, hipermagnesemia',
	Bisacodyl:
		'Penggunaan obat yang berlebihan dapat menyebabkan beberapa efek samping, seperti kram, nyeri perut, reaksi alergi, angioedema dan reaksi anafilaktoid',
	Dulcolax:
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, mual, muntah, lemas, nyeri atau kram pada perut, diare, angioedema (pembengkakan yang timbul di bawah jaringan kulit), anafilaktoid',
	Dulcolactol:
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti kembung, kram perut, diare, kehilangan cairan, hipokalemia, hiponatremia, mual, muntah, mulut kering, rasa tidak nyaman pada perut',
	'Fleet enema': 'Penggunaan oabt yang berlebihan dapat menimbulkan efek alergi',
	Laxatab:
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti muncul ruam pada beberapa bagian di kulit, otot menjadi lemah, kehilangan cairan dan elektrolit tubuh',
	Microlax:
		'Penggunaan obat yang berlebihan dapat mengakibatkan terjadinya beberapa efek samping, seperti diare, sakit perut, mual, muntah, pusing, kram perut, perut kembung, iritasi pada area anus',
	Laxadine:
		'Penggunaan obat yang berlebihan dapat mengakibatkan efek samping, seperti diare, perut kembung, mual ringan, muntah, dehidrasi berat, ketidakseimbangan elektrolit, perasan terbakar',
	Lactulax:
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti perut terasa kembung, flatulensi (buang angin), mual, muntah, timbul kram pada lambung, diare',
	'Acitral Suspensi':
		'Penggunaan obat yang tidak sesuai dengan dosis yang telah ditentukan dapat menimbulkan beberapa efek samping, seperti gangguan pencernaan',
	Grafazol:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, mual, muntah, pusing, leukopenia (jumlah sel darah putih dalam tubuh lebih rendah dari biasanya), pengelihatan menjadi buram, hilang keseimbangan, kehilangan nafsu makan, ataksia, nyeri pada saat buang air kecil, diare, sembelit',
	'Strocain P':
		'Penggunaan obat yang tidak sesuai dengan dosis yang telah ditentukan dapat menimbulkan beberapa efek samping, seperti diare, konstipasi, mual, muntah',
	Episan:
		'Penggunaan obat yang tidak sesuai dengan dosis yang telah ditentukan dapat menimbulkan beberapa efek samping, seperti sembelit, diare, perut kembung, mulut kering, sakit kepala, pusing, sulit tidur, sakit punggung',
	Hufamycetin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, diare, sakit kepala, ruam, sariawan, demam, linglung, anemia aplastik, gangguan pencernaan, enteroklitis',
	'Baquinor Forte':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, diare, dispesia, nyeri abdominal, flatulence, anoreksia, pusing, sakit kepala, kelelahan, insomnia, tremor, gatal',
	Pyxime:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti diare, mual, muntah, sakit kepala, pusing, ruam kulit, gangguan ginjal dan pernapasan, defisiensi vit K',
	Floxigra:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, sakit kepala, pusing, mual, muntah, kesulitan untuk tidur, nyeri pada bagian perut, muncul ruam pada bagian kulit, agitasi, wajah menjadi merah dan panas',
	Ciprofloxacin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, nyeri pada perut, sakit kepala, pusing, terjadinya ruam pada area kulit, keputihan, tremor, gejala gangguan pada ginjal, kram perut, diare yang terjadi secara terus menerus',
	Cotrimoxazole:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, ruam pada kulit, anemia, menggigil, sakit perut, diare, sakit kepala, gangguan hermatologi',
	'Flagyl Forte':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, sakit kepala, pusing, mual, muntah, gangguan pernapasan, timbul ruam pada beberapa bagian tubuh, nyeri pada bagian dada, diare, sembelit, hingga dapat menyebabkan kejang-kejang',
	'New Syarbin':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, sembelit, reaksi alergi',
	Metronidazole:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, nyeri pada bagian dada, diare, sembelit, kehilangan nafsu makan, gangguan pada koordinasi gerakan tubuh, halusinasi, leukopenia, vertigo, hinga yang paling parah dapat membuat pasien menjadi kejang-kejang',
};

const imagesObat = {
	Paracetamol: 'https://pimpharma.com/wp-content/uploads/2023/02/paracetamol-box-1.png',
	'Bodrex Migra': 'https://d2qjkwm11akmwu.cloudfront.net/products/696143_30-5-2022_13-20-28-1665779240.png',
	'Panadol Extra': 'https://d2qjkwm11akmwu.cloudfront.net/products/807265_19-11-2024_13-49-18.png',
	'Natrium Diklofenak':
		'https://doktersehat.com/wp-content/uploads/2016/05/natrium-diklofenak-doktersehat.png',
	'Farsifen Plus':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1747710064/attached_image/farsifen-plus.jpg',
	'Proris Kaplet': 'https://d2qjkwm11akmwu.cloudfront.net/products/289875_17-2-2023_13-39-55.webp',
	'Sanmol Forte': 'https://d2qjkwm11akmwu.cloudfront.net/products/782475_23-3-2020_14-28-1-1665778689.jpeg',
	Ibuprofen: 'https://www.novapharin.co.id/data/plist_pic/96.jpg',
	'Asam Mefenamat':
		'https://storage.googleapis.com/rxstorage/Product/Photos/Farmaku_Asam%20Mefenamat%20500%20mg%20Caplet%20Hexp%2001.JPG',
	Tremenza: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1696422091/attached_image/tremenza.jpg',
	'Amoxicillin Tablet':
		'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/05/13090017/amoxilin.jpg',
	'Iliadin Nasal Spray': 'https://d2qjkwm11akmwu.cloudfront.net/products/648286_13-2-2023_11-24-10.webp',
	Methylprednisolone: 'https://d3bbrrd0qs69m4.cloudfront.net/images/product/0106d0139.jpg',
	Cetirizine:
		'https://storage.googleapis.com/rxstorage/Product/Photos/Farmaku_Cetirizine%2010%20mg%20Tablet%20Hexp%2001.JPG',
	'Cefadroxil Monohydrate': 'https://primayahospital.b-cdn.net/wp-content/uploads/2024/03/B-26-1024x683.jpg',
	Levofloxacin:
		'https://bernofarm.com/wp-content/uploads/2021/10/LEVOFLOXACIN-HEMIHYDRATE-TSS-500-mg-samping.png',
	'Breathy Nasal Drops': 'https://d2qjkwm11akmwu.cloudfront.net/products/1848-1665761088.webp',
	'Breathy Nasal Spray':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20230131111700359225_BNS-30ML.png',
	'Nasonex Nasal Spray': 'https://d2qjkwm11akmwu.cloudfront.net/products/2116-1665761341.jpeg',
	Amoxsan: 'https://d2qjkwm11akmwu.cloudfront.net/products/706249_16-10-2023_13-22-46.webp',
	'Rhinos SR':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1691993264/attached_image/rhinos-sr-0-alodokter.jpg',
	Betahistine: 'https://d2qjkwm11akmwu.cloudfront.net/products/764246_8-9-2022_10-4-42-1665791755.webp',
	'Mertigo SR':
		'https://www.dexagroup.com/wp-content/uploads/2022/09/dexagroup-mertigo-sr-sustained-release-tablet-id-01.png',
	Betaserc: 'https://mimsshst.blob.core.windows.net/drug-resources/SG/packshot/Betaserc6001PPS0.JPG',
	Dimenhydrinate:
		'https://img-cdn.medkomtek.com/fReBZl9eZNwE2oUc9sXg6wWUiqU=/fit-in/0x0/smart/filters:quality(100):strip_icc():format(webp)/drugs/74j8X6RFeq7PjlRYPNFhA/original/xwdfp2fvu277nk3mmfidnw76bbth6wdt.png',
	Histigo: 'https://cdn.orderonline.id/uploads/images_4797081726804799552.jpg',
	Vastigo: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1724592810/attached_image/vastigo.jpg',
	Merislon:
		'https://storage.googleapis.com/rxstorage/Product/large/Apotek_Online_Farmaku_com_Merislon_12_Mg_Strip.jpg',
	Frego: 'https://d2qjkwm11akmwu.cloudfront.net/products/690-1.webp',
	Flunarizine:
		'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-24258221/no-brand_no-brand_full01.jpg',
	Tegretol: 'https://d2qjkwm11akmwu.cloudfront.net/products/882563_29-6-2020_14-46-12-1665791840.jpeg',
	Lameson: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1702212859/attached_image/lameson.jpg',
	Bamgetol:
		'https://img-cdn.medkomtek.com/G3atGP_8p15RcWWqoaGow5eCjd8=/0x0/smart/filters:quality(100):format(webp)/drugs/yIJTSi_OP0qJZy_k2TRmc/original/tty76suwws3vfzuhi3lzyjjjynktcu8x.png',
	Gabapentin:
		'https://storage.googleapis.com/rxstorage/Product/Photos/farmaku_gabapentin-300-mg-capsule-01.jpg',
	Lioresal: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1700907157/attached_image/lioresal.jpg',
	Amitriptyline:
		'https://www.verywellhealth.com/thmb/NRUcPFT71IqJKIjk19o_5DpwNsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-11814718541-1fcfb7a20d86404a97ea2342d1816408.jpg',
	Rogaine:
		'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/11/13/76dde77f-afcb-4315-af2f-8e45db3a6e62.jpg',
	'Regrou Forte': 'https://d2qjkwm11akmwu.cloudfront.net/products/3473-1665769299.jpeg',
	'Regrou Hair Regrowth':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1720077827/attached_image/regrou.jpg',
	Eminox: 'https://d2qjkwm11akmwu.cloudfront.net/products/127536_21-1-2022_10-39-18-1665840528.png',
	'Sanbe Hair':
		'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/08/13053135/Sanbe-Hair-60-ml.jpg',
	Finasteride:
		'https://www.bambangpharma.com/cdn/shop/files/438246266_356090210353218_8730131290687640927_n.jpg',
	Baricitinib:
		'https://everyone.org/media/catalog/product/cache/ed2b1632a8de8f32ba56bdb1c61c6802/o/l/olumiant.jpg',
	'Erlamycetin Tetes Telinga':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1704855007/attached_image/erlamycetin-tetes-telinga.jpg',
	'Reco Tetes Telinga':
		'https://d2qjkwm11akmwu.cloudfront.net/products/277626_1-11-2021_15-5-12-1665842476.png',
	'Akilen Tetes Telinga': 'https://d2qjkwm11akmwu.cloudfront.net/products/14089-1665786410.webp',
	'Ofloxacin Ear Drop':
		'https://d2qjkwm11akmwu.cloudfront.net/thumbnails/281104_18-11-2021_14-30-20-1665842478.webp',
	'Otopain Ear Drop':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201121104839359225_otopain-2.jpg',
	'Otilon Ear Drop': 'https://d2qjkwm11akmwu.cloudfront.net/products/14209-1665786669.webp',
	'Erlamycetin Tetes Mata':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1705285325/attached_image/erlamycetin-tetes-mata.jpg',
	'Cendo Natacen': 'https://d2qjkwm11akmwu.cloudfront.net/products/7916-1665777301.webp',
	'Cendo Floxa': 'https://d2qjkwm11akmwu.cloudfront.net/products/161443_9-4-2019_14-57-5-1665777280.webp',
	'Cendo Fenicol':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1722839741/attached_image/cendo-fenicol.jpg',
	'Cendo Xitrol':
		'https://images.tokopedia.net/img/cache/700/OJWluG/2023/4/11/e65f78e1-070b-44d0-b885-ec2fc516cb57.jpg',
	'Cendo Gentamicin Tetes':
		'https://storage.googleapis.com/rxstorage/Product/Photos/farmaku_cendo-gentamycin-1%-eye-drop-5-ml-02.jpg',
	'Cendo Gentamicin Salep':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201222090325359225_C-GENTAMICIN.jpg',
	'Reco Tetes Mata': 'https://d2qjkwm11akmwu.cloudfront.net/products/3334-1665769082.webp',
	Alegysal: 'https://d2qjkwm11akmwu.cloudfront.net/products/235620_13-9-2024_15-21-7.webp',
	'Cendo LFX':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1741681678/attached_image/cendo-lfx-0-alodokter.jpg',
	'Cendo Lytrees':
		'https://storage.googleapis.com/rxstorage/Product/Photos/farmaku_cendo-lyteers-strip-5-minidose-01.jpg',
	'Polidemisine Eye Drop': 'https://d2qjkwm11akmwu.cloudfront.net/products/17889-1665790835.webp',
	'Cendo Tobroson': 'https://d2qjkwm11akmwu.cloudfront.net/products/15679-1665788321.webp',
	Rifampicin: 'https://d2qjkwm11akmwu.cloudfront.net/products/18964-1665791829.webp',
	Rifastar: 'https://d2qjkwm11akmwu.cloudfront.net/products/8197-1665777735.webp',
	'Pro-TB': 'https://d2qjkwm11akmwu.cloudfront.net/products/274679_1-11-2023_10-44-0.webp',
	Ethambutol:
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20231127014329359225_ETHAMBUTOL.png',
	Rifamtibi: 'https://d2qjkwm11akmwu.cloudfront.net/products/4844-1665771360.webp',
	Isoniazid:
		'https://medicastore.com/images/produk/ISONIAZIDE-TABLET-300-MG-KIMIA-FARMA_0tesi_Medicastore.webp',
	Pyrazinamide:
		'https://res-2.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1698719629_pyrazinamide_holi-removebg-preview',
	'Ventolin Inhaler': 'https://d2qjkwm11akmwu.cloudfront.net/products/1896-1665761131.jpeg',
	'Velutine Inhalation': 'https://d2qjkwm11akmwu.cloudfront.net/products/744843_13-6-2023_14-59-48.png',
	'Seretide Inhaler': 'https://d2qjkwm11akmwu.cloudfront.net/products/2061-1665761275.webp',
	'Symbicort Turbuhaler':
		'https://d2qjkwm11akmwu.cloudfront.net/products/507083_20-6-2019_9-42-37-1665761269.jpeg',
	'Ventolin Nebules':
		'https://image1ws.indotrading.com/s3/productimages/webp/co274468/p1535440/w600-h600/4f03728f-1e56-403c-86da-540919dca346.jpg',
	'Combivent UDV': 'https://d2qjkwm11akmwu.cloudfront.net/products/15983-1665788710.jpeg',
	'Farbivent Inhalation':
		'https://img-cdn.medkomtek.com/LpptR_pmC9Pw0v2rdWRNLdIDFN8=/510x395/smart/filters:quality(100):format(webp)/drugs/TR3B9oBh4Iz_S2sCEI5Oi/original/3lgzgsj9uk614r5o0z826kfqk8pwv4tk.png',
	'Bricasma Turbuhaler': 'https://d2qjkwm11akmwu.cloudfront.net/products/6780-1665775579.jpeg',
	Ambroxol: 'https://primayahospital.b-cdn.net/wp-content/uploads/2024/03/B-17-1024x643.jpg',
	Mucos: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1729148670/attached_image/mucos.jpg',
	'Panadol Cold & Flu': 'https://d2qjkwm11akmwu.cloudfront.net/products/766812_19-11-2024_13-59-39.webp',
	'Mixagrip Flu': 'https://d2qjkwm11akmwu.cloudfront.net/products/257775_13-8-2024_11-6-29.webp',
	'Alco Plus DMP':
		'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/12/18/1d33a9c7-36c5-43ab-bd19-ecd64fa0f183.jpg',
	'Bodrex Flu': 'https://d2qjkwm11akmwu.cloudfront.net/products/9173-1665884751.webp',
	Azithromycin:
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20210114112744359225_24445-AZITHROMYCIN-NOVELL-500MG-TAB-30S-24465.jpg',
	Zithromax: 'https://d2qjkwm11akmwu.cloudfront.net/products/755069_9-7-2023_23-36-6.png',
	'Avelox Moxifloxacin': 'https://d2qjkwm11akmwu.cloudfront.net/products/5736-1665773380.webp',
	Zinnat: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuWneepnbKgI4FT8yrl0OR9NpykKchEnDmw&s',
	Cefdinir: 'https://mcareexports.com/wp-content/uploads/2021/06/cefdinir-300.jpg',
	'Fluimucil Dry Sirup': 'https://d2qjkwm11akmwu.cloudfront.net/products/444730_18-10-2024_14-11-1.png',
	'Cefila Dry Sirup':
		'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/104/MTA-122753858/lapi_lapi-cefila-sirup-obat-kesehatan--30-ml-_full02.jpg',
	'Sanmol Sirup':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201020025034359225_sanmol-60-ml.jpg',
	'Azithromycin Dry Sirup':
		'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/drugs/IsiVEWwTFpQvTmE7iq1ri/original/OBT0005492.jpg',
	'FG Troches': 'https://medicastore.com/images/produk/FG-TROCHES-TAB-HISAP-120-S_YDeQU_Medicastore-bML.webp',
	'Nytex Sirup': 'https://d2qjkwm11akmwu.cloudfront.net/products/222178_21-8-2024_10-22-35.png',
	'Prome Sirup': 'https://d2qjkwm11akmwu.cloudfront.net/products/2179-1665761436.webp',
	'Cefixime Trihydrate': 'https://primayahospital.b-cdn.net/wp-content/uploads/2024/03/C-26.jpg',
	Erythromycin:
		'https://images.tokopedia.net/img/cache/700/OJWluG/2022/8/11/954f386c-ed95-4ce9-aed4-c1cf1aaf8995.jpg',
	Degirol: 'https://doktersehat.com/wp-content/uploads/2018/09/obat-degirol-doktersehat.png',
	Longatin: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1714435018/attached_image/longatin.jpg',
	'Promedex Sirup': 'https://d2qjkwm11akmwu.cloudfront.net/products/8743_18-2-2019_10-56-29-1665761218.webp',
	'Tantum Lozenges': 'https://d2qjkwm11akmwu.cloudfront.net/products/18105-1665791113.webp',
	'Helixim Dry Sirup': 'https://d2qjkwm11akmwu.cloudfront.net/products/11172-1665781703.webp',
	'Bicrolid Kaplet':
		'https://storage.googleapis.com/rxstorage/Product/Photos/farmaku_bicrolid-500-mg-tablet-01.jpg',
	Attapulgite: 'https://filebroker-cdn.lazada.co.id/kf/Sca793b2e76ea492ea4d3df22fc77ba27t.jpg',
	'Neo Diaform': 'https://d2qjkwm11akmwu.cloudfront.net/products/856216_25-4-2024_13-32-18.webp',
	Rillus: 'https://kalbemed.com/storage/images/products/67dfa0b4f1d854c102bc0120ceec19cd.jpg',
	Zinc: 'https://storage.googleapis.com/rxstorage/Product/Photos/farmaku_zinc-20-mg-strip-10-tablet-kf-01.jpg',
	Imodium: 'https://storage.googleapis.com/rxstorage/Product/Photos/farmaku_imodium-2-mg-tablet-01.jpg',
	Oralit: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Obat_Oralit_Obat_Diare.jpg',
	Entrostop: 'https://d2qjkwm11akmwu.cloudfront.net/products/25186_11-1-2022_17-9-28-1665843978.png',
	Diapet: 'https://d2qjkwm11akmwu.cloudfront.net/products/638089_30-6-2019_22-35-32-1665801908.webp',
	Lodia: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1702343058/attached_image/lodia.jpg',
	'New Diatabs': 'https://d2qjkwm11akmwu.cloudfront.net/products/299-1.webp',
	Smecta: 'https://images-cdn.ubuy.co.id/63f77c0b9520164cb607b4d1-smecta-3-g-powder-for-oral-suspension.jpg',
	Omeprazole: 'https://kalbemed.com/storage/images/products/0acdc35fba8236d929dbf12cf8b020f7.jpg',
	'Antasida Doen':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1710426204/attached_image/antasida-doen.jpg',
	'Polysilane Suspensi': 'https://d2qjkwm11akmwu.cloudfront.net/products/125365_23-5-2022_13-26-54-1.jpeg',
	'Promag Suspensi':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201127030453359225_PROMAG-SUS.jpg',
	'Promag Double Action':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1727655264/attached_image/promag-double-action.jpg',
	'Sanmag Suspensi':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1694351455/attached_image/sanmag.jpg',
	'Farmacrol Forte Suspensi': 'https://d2qjkwm11akmwu.cloudfront.net/products/231-1.webp',
	'Sucralfate Suspensi':
		'https://apotek24jam.id/wp-content/uploads/2020/11/sucralfate-suspensi-100-ml-generik.jpg',
	Lansoprazole: 'https://kalbemed.com/storage/images/products/7f098bdefe6361891045704503414235.jpg',
	Ranitidine: 'https://primayahospital.b-cdn.net/wp-content/uploads/2024/03/C-19-1024x683.jpg',
	'Lanpracid Kapsul':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1704252073/attached_image/lanpracid-0-alodokter.jpg',
	Mylanta: 'https://d2qjkwm11akmwu.cloudfront.net/products/854811_29-5-2022_21-2-6-1665780051.webp',
	'Polycrol Forte Sirup': 'https://d2qjkwm11akmwu.cloudfront.net/products/869567_9-3-2022_15-57-53-1.png',
	Bisacodyl:
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20210511032924359225_BISACODYL-NOVEL-TAB-30S.jpg',
	Dulcolax: 'https://d2qjkwm11akmwu.cloudfront.net/products/125380_1-8-2023_14-33-42.png',
	Dulcolactol: 'https://d2qjkwm11akmwu.cloudfront.net/products/702543_13-2-2024_15-42-10.webp',
	'Fleet enema': 'https://d3bbrrd0qs69m4.cloudfront.net/images/product/0101e0014.jpg',
	Laxatab: 'https://d2qjkwm11akmwu.cloudfront.net/products/17521-1665790586.webp',
	Microlax: 'https://solvent-production.s3.amazonaws.com/media/images/products/2021/11/DSC_0928_E2OLDYM.JPG',
	Laxadine:
		'https://img-cdn.medkomtek.com/5h1fbofhNFcwLpgRqVV9lvF_yTA=/510x395/smart/filters:quality(100):format(webp)/drugs/Cuj8pCXWEXHr2jZLpnN9R/original/t6i42asu584pleynz298liaa8q7zgggu.png',
	Lactulax: 'https://d2qjkwm11akmwu.cloudfront.net/products/158297_17-5-2022_17-19-8-1665791278.webp',
	'Acitral Suspensi': 'https://d2qjkwm11akmwu.cloudfront.net/products/203271_22-11-2023_18-25-16.png',
	Grafazol: 'https://d2qjkwm11akmwu.cloudfront.net/products/616260_6-5-2019_9-11-44-1665790544.jpeg',
	'Strocain P':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_201804190157054677_strocain-P.jpg',
	Episan: 'https://d2qjkwm11akmwu.cloudfront.net/products/678561_29-5-2022_21-8-44-1665790345.webp',
	Hufamycetin:
		'https://plazamedis.co.id/wp-content/uploads/2023/10/HUFAMYCETIN-250-MG-KAPSUL-GRATIA-HUSADA-FARMA.jpg',
	'Baquinor Forte':
		'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-1862121/sanbe_baquinor-forte-kaplet-500-mg--10-tablet-strip-_full02.jpg',
	Pyxime: 'https://ethical.pyfa.co.id/wp-content/uploads/2025/04/pyxime-2-2.jpg',
	Floxigra: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1709961223/attached_image/floxigra.jpg',
	Ciprofloxacin: 'https://kalbemed.com/storage/images/products/0587c152cebb0095b55fa34a217d4fd4.jpg',
	Cotrimoxazole: 'https://lirp.cdn-website.com/0ead930f/dms3rep/multi/opt/COTRIMOXAZOLE-TABLET-640w.jpg',
	'Flagyl Forte': 'https://d3bbrrd0qs69m4.cloudfront.net/images/product/0108s0010.jpg',
	'New Syarbin': 'https://d2qjkwm11akmwu.cloudfront.net/products/70541_25-9-2019_10-49-25-1665805535.webp',
	Metronidazole:
		'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/drugs/1rJSHlTtsgMDhhQ7R2ObE/original/OBT0008789.jpg',
};

const kandunganObat = {
	'Bodrex Migra': 'Paracetamol 350 mg, Propyphenazone 150 mg, dan Kafein 50 mg',
	'Panadol Extra': 'Paracetamol 500 mg dan Kafein 65 mg',
	'Farsifen Plus': 'Paracetamol, Ibuprofen, dan Kafein',
	Paracetamol: 'Paracetamol',
	Ibuprofen: 'Ibuprofen',
	Amoxicillin: 'Amoxicillin',
	'Iliadin Nasal Spray': 'Oxymetazoline 0.5 mg dalam setiap 1 ml',
	'Breathy Nasal Drops': 'Natrium Klorida',
	'Betahistine Mesylate': 'Betahistine',
	Betaserc: 'Betahistine',
	'Mertigo SR': 'Betahistine mesylate',
	'Clopidogrel Bisulfate': 'Clopidogrel',
	Cholestor: 'Atorvastatin Calcium',
	Pradaxa: 'Dabigatran Etexilate',
	'Ciprofloxacin Tablet': 'Ciprofloxacin',
	Dexamethasone: 'Dexamethasone',
	'Zovirax Tablet': 'Acyclovir 200 mg',
	Tegretol: 'Carbamazepine 200 mg',
	Bamgetol: 'Carbamazepine 200 mg',
	Lioresal: 'Baclofen 10 mg',
	Rogaine: 'Minoxidil',
	'Regrou Forte': 'Minoxidil 50 mg',
	Finasteride: 'Finasteride',
	'Amoxsan Tablet': 'Amoxicillin 500 mg',
	'Cefixime Trihydrate': 'Cefixime',
	'Akilen Tetes Telinga': 'Ofloxacin 3 mg dalam setiap 1 ml',
	'Forotic Tetes Telinga': 'Ofloxacin 3 mg dalam setiap 1 ml',
	'Erlamycetin Tetes Telinga': 'Chloramphenicol',
	'Cendo Floxa': 'Ofloxacin',
	'Erlamycetin Tetes Mata': 'Chloramphenicol ',
	'Polidemisine Eye Drop': 'Polymyxin B sulfate 6000 IU, Neomycin sulfate 3,5 mg, dan Dexamethasone 1 mg',
	'Zovirax Cream': 'Acyclovir',
	'Acyclovir Tablet': 'Acyclovir',
	'Valacyclovir HCL': 'Valacyclovir',
	'Vfend Voriconazole': 'Voriconazole',
	'Cendo Natacen': 'Natamycin 50 mg',
	'Cendo Xitrol': 'Polymyxin B Sulfate 10.000 SI, Neomycin Sulfate 3,5 mg, dan Dexamethasone 1 mg',
	'Erlamycetin Salep Mata': 'Chloramphenicol 10 mg',
	'Cardio Aspirin': 'Aspirin',
	Farnormin: 'Atenolol 50 mg',
	Triatec: 'Ramipril ',
	Concor: 'Bisoprolol Fumarate',
	Spironolactone: 'Spironolactone',
	Rifampicin: 'Rifampicin',
	'Nitrokaf Retard': 'Nitrogliserin',
	'Amlodipine Besylate': 'Amlodipine ',
	'Simarc 2': 'Warfarin Sodium 2 mg',
	Lasix: 'Furosemide',
	Rifastar: 'Rifampicin 150 mg, Isoniazid 75 mg, Pyrazinamide 400 mg, dan Ethambutol HCl 275 mg',
	Isoniazid: 'Isoniazid',
	'Ventolin Inhaler': 'Salbutamol Sulfate',
	'Seretide Inhaler': 'Salmeterol dan Fluticasone Propionate',
	'Symbicort Turbuhaler': 'Budesonide 160 mcg dan Formoterol Fumarate 4,5 mcg',
	Tamiflu: 'Oseltamivir Phosphate 75 mg',
	'Panadol Cold & Flu': 'Paracetamol',
	'Mixagrip Flu & Batuk': 'Paracetamol 500 mg, Dextromethorphan HBr 10 mg, dan Pseudoephedrine 30 mg',
	Zithromax: 'Azithromycin Dihydrate',
	'Avelox Moxifloxacin': 'Moxifloxacin',
	Azithromycin: 'Azithromycin 500 mg dalam setiap 5 ml',
	Seretide: 'Salmeterol 50 Mcg dan Fluticasone Propionate 250 Mcg',
	'Trelegy Ellipta': 'Fluticasone 100 Mcg, Umeclidinium 62.5 Mcg, dan Vilanterol 25 Mcg',
	'Spriva Respimat': 'Tiotropium Bromida',
	Erythromycin: 'Erythromycin 500 mg',
	'Proris Sirup': 'Ibuprofen',
	'Promedex Sirup':
		'Promethazine HCl 5 mg, Dextromethorphan HBr 5 mg, Guaifenesin 50 mg, dan Na Citrate 197 mg dalam setiap 5 ml',
	Entrostop: 'Attapulgite Koloid dan Pectin',
	Diapet:
		'Tiap kapsul Diapet mengandung 240 mg daun jambu biji, 204 mg rimpang kunyit, 84 mg buah mojokeling, dan 72 mg kulit buah delima',
	Imodium: 'Loperamide',
	'Polysilane Suspensi': 'Aluminium Hidroksida 200 mg, Magnesium Hidroksida 200 mg, dan Simethicone 80 mg',
	'Promag Suspensi':
		'Hydrotalcite 200 mg, Magnesium Hidroksida 150 mg, dan Simethicone 50 mg dalam setiap 5 ml',
	Omeprazole: 'Omeprazole 20 mg',
	'Promag suspensi':
		'Hydrotalcite 200 mg, Magnesium Hidroksida 150 mg, dan Simethicone 50 mg dalam setiap 5 ml',
	Ranitidine: 'Ranitidine 150 mg',
	Dulcolax: 'Bisacodyl',
	Laxatab: 'Docusate Sodium 50 mg',
	Lactulax: 'Laktulosa 3,335 gr/5 mL',
	Ambeven:
		'Graptophyllum Pictum Folium 90 mg, Sophorae Japonica Flos 85 mg, Rubia Cordifoliae Radix 10 mg, Curcumae Domesticae Rhizoma 10 mg, Sanguisorba Officinale Radix 20 mg, Kaempferiae Angustifolia Rhizoma 10 mg, dan Curcuma Heyneanae Rhizoma 25 mg',
	'Ardium 500':
		'Micronized Purified Flavonoid Fraction (MPFF) yang setara dengan 90% diosmin dan 10% hesperidin',
	'Nutrafor Wazzir':
		'Graptophyllum Pictum Folium 135 mg, Centella Asiatica Herba 50 mg, Coleus Blumei Folium 30 mg, dan Ekstrak Citrus Sinensis 250 mg',
	'Lanpracid Kapsul': 'Lansoprazole 30 mg',
	'Grafazol Kaplet': 'Metronidazole 500 mg',
	Floxigra: 'Ciprofloxacin',
	'Flagyl Forte': 'Metronidazole 500 mg',
	Metronidazole: 'Metronidazole',
	Duspatalin: 'Mebeverine Hydrochloride 135 mg',
};

const sumberObat = {
	Paracetamol: 'Alodokter, Primayahospital, Alomdedika',
	'Bodrex Migra': 'Alodokter, Halodoc, Hellosehat, Klikdokter',
	'Panadol Extra': 'Halodoc, Alodokter, Panadol, Hellosehat',
	'Natrium Diklofenak': 'Halodoc, Alodokter, K24klik',
	'Farsifen Plus': 'Alodokter, Halodoc, dan K24Klik',
	'Proris Kaplet': 'Halodoc, Alodokter, K24Klik',
	'Sanmol Forte': 'Alodokter, Hellosehat, Halodoc',
	Ibuprofen: 'Halodoc, Alomedika, Primayahospital',
	'Asam Mefenamat': 'Halodoc, K24Klik, Alodokter, Primayahospital',
	Tremenza: 'Halodoc, Alodokter, K24klik',
	'Amoxicillin Tablet': 'Alodokter, Halodoc, dan Primayahospital',
	'Iliadin Nasal Spray': 'Halodoc, Alodokter',
	Methylprednisolone: 'Halodoc, Alodokter',
	Cetirizine: 'Halodoc, Alodokter, Ciputrahospital',
	'Cefadroxil Monohydrate': 'Alodokter, Primayahospital, Halodoc, Alomedika',
	Levofloxacin: 'Halodoc, Alodokter, Hellosehat, OGBDexa',
	'Breathy Nasal Drops': 'Halodoc, Alodokter, Klikdokter',
	'Breathy Nasal Spray': 'Halodoc, K24Klik, Alodokter',
	'Nasonex Nasal Spray': 'Halodoc, Alodokter, Farmaku, Klikdokter',
	Amoxsan: 'K24Klik, Halodoc, Honestdocs',
	'Rhinos SR': 'Halodoc, K24Klik, Alodokter',
	Betahistine: 'Siloam Hospital, Halodoc, Hellosehat, Alodokter, DrugBank',
	'Mertigo SR': 'Halodoc, Alodokter, dan Medicastore',
	Betaserc: 'Halodoc, Alodokter, Klikdokter, Vivaapotek',
	Dimenhydrinate: 'Halodoc, Alodokter, K24Klik, Farmaku, AIDO Health, Hellosehat',
	Histigo: 'Halodoc, Alodokter, Vivaapotek, K24klik',
	Vastigo: 'Halodoc, Alodokter, Vivaapotek, K24klik',
	Merislon: 'Halodoc, Alodokter, K24Klik, Klikdokter',
	Frego: 'K24Klik, Alodokter, dan Klikdokter',
	Flunarizine: 'Halodoc, K24Klik, Alodokter',
	Tegretol: 'Alodokter, drugs.com, klikdokter',
	Lameson: 'Halodoc, K24Klik, Alodokter',
	Bamgetol: 'Alodokter, vivaapotek, medicastore',
	Gabapentin: 'Halodoc, Alomedika, Farmaku, Ciputrahospital',
	Lioresal: 'Alodokter, Halodoc, Klikdokter, Vivaapotek',
	Amitriptyline: 'Alodokter',
	Rogaine: 'Alodokter, Halodoc, Hellosehat',
	'Regrou Forte': 'Alodokter, detikhealth',
	'Regrou Hair Regrowth': 'Halodoc, Alodokter, K24Klik, Klikdokter',
	Eminox: 'Halodoc, Alodokter, K24Klik, Madjur',
	'Sanbe Hair': 'Halodoc, K24Klik, Alodokter',
	Finasteride: 'Alodokter, Halodoc, Hellosehat',
	Baricitinib: 'Alodokter, detikhealth',
	'Erlamycetin Tetes Telinga': 'Alodokter, Halodoc, Vivaapotek',
	'Reco Tetes Telinga': 'Alodokter, vivaapotek, Klikdokter',
	'Akilen Tetes Telinga': 'Klikdokter, Alodokter, Halodoc',
	'Ofloxacin Ear Drop': 'Halodoc, Alodokter, Siloamhospital, Kalbemed, Vivaapotek',
	'Otopain Ear Drop': 'Halodoc, K24Klik, Mandjur',
	'Otilon Ear Drop': 'Halodoc, K24Klik, Alodokter',
	'Erlamycetin Tetes Mata': 'Halodoc, Alodokter, Hellosehat, Klikdokter',
	'Cendo Natacen': 'Alodokter, Halodoc, Klikdokter',
	'Cendo Floxa': 'Alodokter, Halodoc, K24Klik',
	'Cendo Fenicol': 'Alodokter, Halodoc, K24Klik, Vivaapotek, Klikdokter',
	'Cendo Xitrol': 'Halodoc, Alodokter',
	'Cendo Gentamicin Tetes': 'Halodoc, Alodokter, K24Klik, Farmaku',
	'Cendo Gentamicin Salep': 'Halodoc, Alodokter, K24Klik, Klikdokter',
	'Reco Tetes Mata': 'Halodoc, Aldokter, Vivaapotek',
	Alegysal: 'Halodoc, K24Klik, Klikdokter, Honestdocs',
	'Cendo LFX': 'Alodokter, Halodoc, Klikdokter',
	'Cendo Lytrees': 'Alodokter, Klikdokter, Halodoc, Vivaapotek, Hellosehat',
	'Polidemisine Eye Drop': 'Halodoc, Alodokter, K24Klik, Klikdokter',
	'Cendo Tobroson': 'Halodoc, K24Klik, Alodokter',
	Rifampicin: 'Alodokter, Hellosehat, Alomedika, Halodoc',
	Rifastar: 'Klikdokter, Halodoc, Honestdoc, K24Klik, medicastore',
	'Pro-TB': 'Halodoc, Alodokter, Klikdokter, K24Klik',
	Ethambutol: 'Halodoc, K24Klik, Alomedika, Siloamhospital',
	Rifamtibi: 'Halodoc, K24Klik, Farmaku',
	Isoniazid: 'Alodokter, Hellosehat, Alomedika, Halodoc, Klikdokter, Siloamhospital',
	Pyrazinamide: 'Alodokter, Halodoc, Klikdokter, Alomedika',
	'Ventolin Inhaler': 'Halodoc, Alodokter, Honestdocs',
	'Velutine Inhalation': 'Halodoc, Alodokter, K24Klik',
	'Seretide Inhaler': 'Klikdokter, Halodoc, Alodokter',
	'Symbicort Turbuhaler': 'Klikdokter, Alodokter, Halodoc, ',
	'Ventolin Nebules': 'Halodoc, K24Klik, Alodokter',
	'Combivent UDV': 'Halodoc, K24Klik, Alodokter',
	'Farbivent Inhalation': 'Halodoc, Alodokter, Klikdokter, K24Klik',
	'Bricasma Turbuhaler': 'Halodoc, Klikdokter, K24Klik, Medicastore',
	Ambroxol: 'Halodoc, K24Klik, Alodokter',
	Mucos: 'Alodokter, Klikdokter, Honestdocs, Halodoc',
	'Panadol Cold & Flu': 'Halodoc, Alodokter, Hellosehat',
	'Mixagrip Flu': 'Halodoc, K24Klik, Alodokter',
	'Alco Plus DMP': 'Klikdokter, Alodokter, Vivaapotek',
	'Bodrex Flu': 'Bodrex, Alodokter, Hellosehat, k24klik',
	Azithromycin: 'Alodokter, Klikdokter, Halodoc, Alomedika',
	Zithromax: 'Klikdokter, Honestdocs, Halodoc, Alodokter',
	'Avelox Moxifloxacin': 'Halodoc, Alodokter, K24klik',
	Zinnat: 'Klikdokter, Medicastore, Farmaku',
	Cefdinir: 'Alodokter, Hellosehat, Healthwarehouse, Amazonpharmacy',
	'Fluimucil Dry Sirup': 'Alodokter, K24Klik, Halodoc',
	'Cefila Dry Sirup': 'Halodoc, Alodokter, K24Klik',
	'Sanmol Sirup': 'Halodoc, K24Klik, Alodokter',
	'Azithromycin Dry Sirup': 'Alodokter, Klikdokter, Halodoc, Alomedika',
	'FG Troches': 'Halodoc, Alodokter, K24Klik',
	'Nytex Sirup': 'Halodoc, Alodokter, Honestdocs, K24Klik',
	'Prome Sirup': 'Halodoc, K24Klik, Vivaapotek',
	'Cefixime Trihydrate': 'Primayahospital, Alodokter, Halodoc, Alomedika',
	Erythromycin: 'Alodokter, Halodoc',
	Degirol: 'Halodoc, Alodokter, K24Klik',
	Longatin: 'Halodoc, Alodokter, K24klik, Vivaapotek',
	'Promedex Sirup': 'Halodoc, Klikdokter, K24klik, Vivaapotek, Alodokter',
	'Tantum Lozenges': 'Halodoc, Alodokter, K24Klik, Klikdokter, Farmaku',
	'Helixim Dry Sirup': 'Halodoc, Alodokter, K24Klik',
	'Bicrolid Kaplet': 'Halodoc, K24Klik, Klikdokter, Farmaku',
	Attapulgite: 'Halodoc, Alodokter, K24Klik, Alomedika',
	'Neo Diaform': 'Halodoc, Alodokter, K24Klik, Medicasotre',
	Rillus: 'Halodoc, Alodokter, Vivaapotek',
	Zinc: 'Halodoc, Alodokter, Ciputrahospital, K24Klik',
	Imodium: 'Halodoc, Alodokter, K24klik',
	Oralit: 'Halodoc, Alodokter, K24Klik, Siloamhospital, Hellosehat',
	Entrostop: 'Alodokter, Halodoc, Hellosehat, Klikdokter, K24klik',
	Diapet: 'Alodokter, Halodoc, Hellosehat, SOHO Global Health, Vivaapotek',
	Lodia: 'Halodoc, Alodokter, K24Klik',
	'New Diatabs': 'Halodoc, Alodokter, K24Klik, Honestdocs, Vivaapotek',
	Smecta: 'Klikdokter, Alodokter, ',
	Omeprazole: 'Alodokter, Halodoc, Primayahospital',
	'Antasida Doen': 'Alodokter, Halodoc, Primayahospital',
	'Polysilane Suspensi': 'Alodokter, Halodoc, Vivaapotek, K24klik',
	'Promag Suspensi': 'Halodoc, Alodokter',
	'Promag Double Action': 'Halodoc, Alodokter, K24Klik',
	'Sanmag Suspensi': 'Halodoc, K24klik, Alodokter',
	'Farmacrol Forte Suspensi': 'Halodoc, K24Klik, Alodokter',
	'Sucralfate Suspensi': 'Halodoc, Primayahospital, Alodokter',
	Lansoprazole: 'Halodoc, Alodokter, Alomedika, Kalbemed, K24Klik',
	Ranitidine: 'Alodokter, Halodoc, Primayahospital',
	'Lanpracid Kapsul': 'Klikdokter, Alodokter, K24klik',
	Mylanta: 'Halodoc, Alodokter',
	'Polycrol Forte Sirup': 'Halodoc, K24Klik, Alodokter',
	Bisacodyl: 'Halodoc, Alodokter',
	Dulcolax: 'Halodoc, Alodokter, Dulcolax, K24klik',
	Dulcolactol: 'Halodoc, K24klik, Alodokter',
	'Fleet enema': 'Halodoc, Alodokter, K24Klik, Klikdokter',
	Laxatab: 'Halodoc, Alodokter, Klikdokter, K24klik',
	Microlax: 'Halodoc, K24klik, Alodokter',
	Laxadine: 'Halodoc, K24Klik, Vivaapotek, klikdokter, honestdocs',
	Lactulax: 'Halodoc, Alodokter, Klikdokter',
	'Acitral Suspensi': 'Halodoc, Alodokter, K24Klik, Klikdokter',
	Grafazol: 'Alodokter, Halodoc, K24klik',
	'Strocain P': 'Halodoc, Alodokter, K24Klik',
	Episan: 'Alodokter, Halodoc, Klikdokter, Vivaapotek',
	Hufamycetin: 'K24Klik, Alodokter',
	'Baquinor Forte': 'Halodoc, K24Klik, Alodokter,',
	Pyxime: 'K24Klik, Honestdocs, Klikdokter',
	Floxigra: 'Halodoc, Alodokter, Klikdokter, Vivaapotek',
	Ciprofloxacin: 'Halodoc, Alodokter',
	Cotrimoxazole: 'Halodoc, Alodokter, K24Klik',
	'Flagyl Forte': 'Alodokter, klikdokter, k24klik, Halodoc, Honestdocs ',
	'New Syarbin': 'Halodoc, Klikdokter, GoApotik, Okeklinik',
	Metronidazole: 'Alodokter, Halodoc, Primayahospital, K24klik',
};

const kategoriObat = {
	Paracetamol: 'Penyakit Perut',
	'Bodrex Migra': 'Penyakit Kepala',
	'Panadol Extra': 'Penyakit Kepala',
	'Natrium Diklofenak': 'Penyakit Kepala',
	'Farsifen Plus': 'Penyakit Kepala',
	'Proris Kaplet': 'Penyakit Kepala',
	'Sanmol Forte': 'Penyakit Pernafasan',
	Ibuprofen: 'Penyakit Pernafasan',
	'Asam Mefenamat': 'Penyakit Kepala',
	Tremenza: 'Penyakit Pernafasan',
	'Amoxicillin Tablet': 'Penyakit Perut',
	'Iliadin Nasal Spray': 'Penyakit Kepala',
	Methylprednisolone: 'Penyakit Kepala',
	Cetirizine: 'Penyakit Pernafasan',
	'Cefadroxil Monohydrate': 'Penyakit Pernafasan',
	Levofloxacin: 'Penyakit Pernafasan',
	'Breathy Nasal Drops': 'Penyakit Kepala',
	'Breathy Nasal Spray': 'Penyakit Kepala',
	'Nasonex Nasal Spray': 'Penyakit Kepala',
	Amoxsan: 'Penyakit Perut',
	'Rhinos SR': 'Penyakit Pernafasan',
	Betahistine: 'Penyakit Kepala',
	'Mertigo SR': 'Penyakit Kepala',
	Betaserc: 'Penyakit Kepala',
	Dimenhydrinate: 'Penyakit Kepala',
	Histigo: 'Penyakit Kepala',
	Vastigo: 'Penyakit Kepala',
	Merislon: 'Penyakit Kepala',
	Frego: 'Penyakit Kepala',
	Flunarizine: 'Penyakit Kepala',
	Tegretol: 'Penyakit Kepala',
	Lameson: 'Penyakit Pernafasan',
	Bamgetol: 'Penyakit Kepala',
	Gabapentin: 'Penyakit Kepala',
	Lioresal: 'Penyakit Kepala',
	Amitriptyline: 'Penyakit Kepala',
	Rogaine: 'Penyakit Kepala',
	'Regrou Forte': 'Penyakit Kepala',
	'Regrou Hair Regrowth': 'Penyakit Kepala',
	Eminox: 'Penyakit Kepala',
	'Sanbe Hair': 'Penyakit Kepala',
	Finasteride: 'Penyakit Kepala',
	Baricitinib: 'Penyakit Kepala',
	'Erlamycetin Tetes Telinga': 'Penyakit Telinga',
	'Reco Tetes Telinga': 'Penyakit Telinga',
	'Akilen Tetes Telinga': 'Penyakit Telinga',
	'Ofloxacin Ear Drop': 'Penyakit Telinga',
	'Otopain Ear Drop': 'Penyakit Telinga',
	'Otilon Ear Drop': 'Penyakit Telinga',
	'Erlamycetin Tetes Mata': 'Penyakit Mata',
	'Cendo Natacen': 'Penyakit Mata',
	'Cendo Floxa': 'Penyakit Mata',
	'Cendo Fenicol': 'Penyakit Mata',
	'Cendo Xitrol': 'Penyakit Mata',
	'Cendo Gentamicin Tetes': 'Penyakit Mata',
	'Cendo Gentamicin Salep': 'Penyakit Mata',
	'Reco Tetes Mata': 'Penyakit Mata',
	Alegysal: 'Penyakit Mata',
	'Cendo LFX': 'Penyakit Mata',
	'Cendo Lytrees': 'Penyakit Mata',
	'Polidemisine Eye Drop': 'Penyakit Mata',
	'Cendo Tobroson': 'Penyakit Mata',
	Rifampicin: 'Penyakit Pernafasan',
	Rifastar: 'Penyakit Pernafasan',
	'Pro-TB': 'Penyakit Pernafasan',
	Ethambutol: 'Penyakit Pernafasan',
	Rifamtibi: 'Penyakit Pernafasan',
	Isoniazid: 'Penyakit Pernafasan',
	Pyrazinamide: 'Penyakit Pernafasan',
	'Ventolin Inhaler': 'Penyakit Pernafasan',
	'Velutine Inhalation': 'Penyakit Pernafasan',
	'Seretide Inhaler': 'Penyakit Pernafasan',
	'Symbicort Turbuhaler': 'Penyakit Pernafasan',
	'Ventolin Nebules': 'Penyakit Pernafasan',
	'Combivent UDV': 'Penyakit Pernafasan',
	'Farbivent Inhalation': 'Penyakit Pernafasan',
	'Bricasma Turbuhaler': 'Penyakit Pernafasan',
	Ambroxol: 'Penyakit Pernafasan',
	Mucos: 'Penyakit Pernafasan',
	'Panadol Cold & Flu': 'Penyakit Pernafasan',
	'Mixagrip Flu': 'Penyakit Pernafasan',
	'Alco Plus DMP': 'Penyakit Pernafasan',
	'Bodrex Flu': 'Penyakit Pernafasan',
	Azithromycin: 'Penyakit Pernafasan',
	Zithromax: 'Penyakit Pernafasan',
	'Avelox Moxifloxacin': 'Penyakit Pernafasan',
	Zinnat: 'Penyakit Pernafasan',
	Cefdinir: 'Penyakit Pernafasan',
	'Fluimucil Dry Sirup': 'Penyakit Pernafasan',
	'Cefila Dry Sirup': 'Penyakit Pernafasan',
	'Sanmol Sirup': 'Penyakit Pernafasan',
	'Azithromycin Dry Sirup': 'Penyakit Pernafasan',
	'FG Troches': 'Penyakit Pernafasan',
	'Nytex Sirup': 'Penyakit Pernafasan',
	'Prome Sirup': 'Penyakit Pernafasan',
	'Cefixime Trihydrate': 'Penyakit Perut',
	Erythromycin: 'Penyakit Pernafasan',
	Degirol: 'Penyakit Pernafasan',
	Longatin: 'Penyakit Pernafasan',
	'Promedex Sirup': 'Penyakit Pernafasan',
	'Tantum Lozenges': 'Penyakit Pernafasan',
	'Helixim Dry Sirup': 'Penyakit Pernafasan',
	'Bicrolid Kaplet': 'Penyakit Pernafasan',
	Attapulgite: 'Penyakit Perut',
	'Neo Diaform': 'Penyakit Perut',
	Rillus: 'Penyakit Perut',
	Zinc: 'Penyakit Perut',
	Imodium: 'Penyakit Perut',
	Oralit: 'Penyakit Perut',
	Entrostop: 'Penyakit Perut',
	Diapet: 'Penyakit Perut',
	Lodia: 'Penyakit Perut',
	'New Diatabs': 'Penyakit Perut',
	Smecta: 'Penyakit Perut',
	Omeprazole: 'Penyakit Perut',
	'Antasida Doen': 'Penyakit Perut',
	'Polysilane Suspensi': 'Penyakit Perut',
	'Promag Suspensi': 'Penyakit Perut',
	'Promag Double Action': 'Penyakit Perut',
	'Sanmag Suspensi': 'Penyakit Perut',
	'Farmacrol Forte Suspensi': 'Penyakit Perut',
	'Sucralfate Suspensi': 'Penyakit Perut',
	Lansoprazole: 'Penyakit Perut',
	Ranitidine: 'Penyakit Perut',
	'Lanpracid Kapsul': 'Penyakit Perut',
	Mylanta: 'Penyakit Perut',
	'Polycrol Forte Sirup': 'Penyakit Perut',
	Bisacodyl: 'Penyakit Perut',
	Dulcolax: 'Penyakit Perut',
	Dulcolactol: 'Penyakit Perut',
	'Fleet enema': 'Penyakit Perut',
	Laxatab: 'Penyakit Perut',
	Microlax: 'Penyakit Perut',
	Laxadine: 'Penyakit Perut',
	Lactulax: 'Penyakit Perut',
	'Acitral Suspensi': 'Penyakit Perut',
	Grafazol: 'Penyakit Perut',
	'Strocain P': 'Penyakit Perut',
	Episan: 'Penyakit Perut',
	Hufamycetin: 'Penyakit Perut',
	'Baquinor Forte': 'Penyakit Perut',
	Pyxime: 'Penyakit Perut',
	Floxigra: 'Penyakit Perut',
	Ciprofloxacin: 'Penyakit Perut',
	Cotrimoxazole: 'Penyakit Perut',
	'Flagyl Forte': 'Penyakit Perut',
	'New Syarbin': 'Penyakit Perut',
	Metronidazole: 'Penyakit Perut',
};

const linkObatSatu = {
	Paracetamol:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/paracetamol-500-mg-10-kaplet?srsltid=AfmBOorXp2gpaQSCH3OsnO9Rdz8Ia8xbtlrE-mQrlXbZKTrh626_1RyN',
	'Bodrex Migra': 'Halodoc:\r\nhttps://www.halodoc.com/obat-dan-vitamin/bodrex-migra-4-kaplet',
	'Panadol Extra':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/panadol-extra-10-kaplet?srsltid=AfmBOopQG4Ps5y_pI0LOcerqZl9hTBuSv9PiqNbisYolyGLqwPT6HTv8',
	'Natrium Diklofenak': 'K24Klik:\nhttps://www.k24klik.com/p/diclofenac-sodium-novell-50mg-tab-50s-474#',
	'Farsifen Plus':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/farsifen-plus-10-tablet?srsltid=AfmBOooncZ-zz7Wx5EkKxe7WATELh7HH55vPaYWlzjKllKYr3F8bLs3P',
	'Proris Kaplet':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/proris-200-mg-10-kaplet?srsltid=AfmBOorbxfoYldXfg378s6M6nfSvi_9JxNqEIftpkAj4EMIevwR3hIH-',
	'Sanmol Forte':
		'Halodoc:\nhttp://halodoc.com/obat-dan-vitamin/sanmol-500-mg-4-tablet?srsltid=AfmBOooSnIYJH0HWwG0XqAGEAdQoTtWou2XHhckQYDK8iI50YW5FlYL4',
	Ibuprofen: 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ibuprofen-200-mg-10-tablet',
	'Asam Mefenamat':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/asam-mefenamat-500-mg-10-kaplet?srsltid=AfmBOopTQVukvxVL5Gdd8_ACPayVRy4-B9gFEgNyd1Lgxd0cb1WrN6cS',
	Tremenza:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/tremenza-10-tablet?srsltid=AfmBOorIIVqfvbeZBoY9cCE68RdAB5HZEt_5tSOhAUFIfmk0F2w5kMjv',
	'Amoxicillin Tablet':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/amoxicillin-500-mg-10-tablet?srsltid=AfmBOoo7LQ1NO7wp1Itxwp711UFZwMNAfpOXuPLIGW4yNx2JbXaun-gr',
	'Iliadin Nasal Spray':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/iliadin-dewasa-0-05-nasal-spray-10-ml?srsltid=AfmBOoqtMZ1w1vdMgHCxv0eCNgdUerQWI0nHBl9PpuXqaiAQXy81nJDl',
	Methylprednisolone:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/methylprednisolone-8-mg-10-tablet?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=yjsp2jm7&af_adset=https:%2F%2Fwww.halodoc.com%2Fkesehatan%2Fmethylprednisolone&af_ad=Web_methylprednisolone-8-mg-10-tablet_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	Cetirizine:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cetirizine-10-mg-10-tablet?srsltid=AfmBOorQzmGweRza_mQZ5EmT6mtsQ7yZurBY1LVFS5TGGuw0TYuiWWXG',
	'Cefadroxil Monohydrate':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cefadroxil-500-mg-10-kapsul?srsltid=AfmBOopSsnFAkAVarRNbHgCppgpPgHK4vcvLOK_1BZProt7zw-Lk7Vbd',
	Levofloxacin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/levofloxacin-500-mg-10-tablet?srsltid=AfmBOoqw8YIavPgQLGUEbYNE98-69CNGQMgvir3Fi6vB-tBBn9thQmLg',
	'Breathy Nasal Drops':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/breathy-nasal-drops-30-ml?srsltid=AfmBOooXxUb3OrHBFIhcIDQ-WAzs4NJ4ldavHzaRqrvraGUiW8lYkWdO',
	'Breathy Nasal Spray':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/bns-breathy-nasal-spray-30-ml?srsltid=AfmBOoofNuFE6fyeUnsVf6V6B1ggNSS78ubb7lpXQK5uNK_7-XhcMt3j',
	'Nasonex Nasal Spray':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/nasonex-nasal-spray-140-dosis?srsltid=AfmBOopRlfqofAVMSJhoqyDJRdcvUfNCPvDi6pzL0L88J3EhRO_03ZrU',
	Amoxsan:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/amoxsan-250-mg-10-kapsul?srsltid=AfmBOoqjAl22t5pNOdGJsuUN6lIJGd1iGHjwhIt6lBhm6Y_Qn1fC04fu',
	'Rhinos SR':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/rhinos-sr-10-kapsul?srsltid=AfmBOopRuiQo1mdQdbLXNQsJP__D6uiN4f52AU99Qc6cu1QR8hX2B7BT',
	Betahistine:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/betahistine-6-mg-10-tablet?srsltid=AfmBOopM4vg20GNZTlAp-Dp9sO8MMXPuwu6UJ2cTKDG38C8IO1LU2OUA',
	'Mertigo SR':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/mertigo-sr-12-mg-10-tablet?srsltid=AfmBOornfvv-dv28QV9zYK-BeRTpAk27YFwHRe8ZomKLoXyOKkAwdNa_',
	Betaserc:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/betaserc-24-mg-20-tablet?srsltid=AfmBOoopkOdQWfalZXN-UsXTz9-AINwqC0mJqWcctO5iQ-9k5p-EuKKn',
	Dimenhydrinate: 'K24Klik:\nhttps://www.k24klik.com/p/dimenhydrinate-kf-50mg-tab-100s-3981#',
	Histigo:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/histigo-6-mg-10-kaplet?srsltid=AfmBOoqP-9-79gCMv3jkgObRnwtTr_zUNU2hyWS_mpj78_4P67YXbI11',
	Vastigo:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/vastigo-6-mg-10-tablet?srsltid=AfmBOor_lWs3hEGuatJ4gAm5IPwTTqAFWajmp7BXUyfAw58PJR9aobJ-',
	Merislon:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/merislon-12-mg-10-tablet?srsltid=AfmBOoraj6dqmbvUwNKB-q4-ZjIl-FpZhk5vm3oGVSz-K_3zNqaKgUq0',
	Frego:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/frego-5-mg-10-tablet?srsltid=AfmBOorQhv5_K3qd7zizh8IUmjNYYigggJN2C8uvr0bqxCt4yOYcHiEL',
	Flunarizine: 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/flunarizine-5-mg-10-tablet',
	Tegretol:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/tegretol-200-mg-10-tablet?srsltid=AfmBOorV3ReEiev-e4-bW5sx4qRfYbaIzrXyYm99mc6mOmPz4L3pPeYR',
	Lameson:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lameson-4-mg-10-tablet?srsltid=AfmBOoqNH0wqyiuwc10Tl1Bj3Hp3f842tpbThHfLjxZPB3IbRBYpXqq4',
	Bamgetol:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/bamgetol-200-mg-10-tablet/652c9fde8473bf5ad6a8ed72',
	Gabapentin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/gabapentin-300-mg-10-kapsul?srsltid=AfmBOop352cgp9_JPw-Ed7Nbm8WsidtkEuo-tXw0z9wNhFN_9n4bLHzD',
	Lioresal:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lioresal-10-mg-10-tablet?srsltid=AfmBOorD9J0kWdTY3mvgEc4o9UuUyLZVJMjR3OCCteESl5gte68-uP2_',
	Amitriptyline: '-',
	Rogaine:
		'Tokopedia:\nhttps://www.tokopedia.com/naturelo-x-good-store/rogaine-men-solution-liquid-5-minoxidil-perawatan-rambut-rontok-pria-1729840633501419362?extParam=ivf%3Dfalse%26keyword%3Drogaine+minoxidil%26search_id%3D2025061003521734ED066DF378EF138N8L%26src%3Dsearch',
	'Regrou Forte':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/regrou-hair-regrowth-30-ml?srsltid=AfmBOorhBiYKJqMV97nI2LnTjIIfEMFrLAbPh5dHaMZR3iS134i8lnlq',
	'Regrou Hair Regrowth':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/regrou-hair-regrowth-30-ml?srsltid=AfmBOoqt9fEFDqCQP4opN0V_Y3YX61hqTvZt0dJFpNicQ3-N1hgDpZeX',
	Eminox:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/eminox-2-30-ml?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=4re2ulz6&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2Fini-5-rekomendasi-obat-rambut-rontok-untuk-atasi-kebotakan&af_ad=Web_eminox-2-30-ml_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	'Sanbe Hair':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/sanbe-hair-60-ml?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=anv9ybh0&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2Fini-5-rekomendasi-obat-rambut-rontok-untuk-atasi-kebotakan&af_ad=Web_sanbe-hair-60-ml_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	Finasteride:
		'Shopee:\nhttps://shopee.co.id/Finasteride-Combiphar-5-Mg-Box-100-Tablet-i.829615599.23067321392',
	Baricitinib: '-',
	'Erlamycetin Tetes Telinga':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/erlamycetin-1-ear-drops-10-ml?srsltid=AfmBOopUXDLLM8uAsxJvE4R9Di_25V77Yycon6yurjkZxuHRDukEa2kU',
	'Reco Tetes Telinga': 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/reco-tetes-telinga-1-10-ml',
	'Akilen Tetes Telinga':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/akilen-ear-drop-5-ml?srsltid=AfmBOopnjiF40oTAd-cbbmmTZwjmL5stc0dLG5fH02Xwwe1WYv3GTea-',
	'Ofloxacin Ear Drop':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ofloxacin-tetes-telinga-3-mg-ml-5-ml?srsltid=AfmBOopwK2ILrnD9bZUkalSXp6HGOtA5InyVDUewe3aoE-zd3nNIoSKL',
	'Otopain Ear Drop': 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/otopain-ear-drop-8-ml',
	'Otilon Ear Drop':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/otilon-ear-drop-8-ml?srsltid=AfmBOop1L9HCNRQs9njk4tRTMFWgGd43ErLgj8hl3rl-kw4SZYfq8-Gd',
	'Erlamycetin Tetes Mata':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/erlamycetin-plus-eye-drops-5-ml?srsltid=AfmBOoo3-lFCyfgyV0FeIbwEqSR19r1toUaQ-DuiYI0avGC_bpfC7lad',
	'Cendo Natacen':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-natacen-minidose-0-6-ml?srsltid=AfmBOoq6VDsMG1ZpUJAFYbRgf-PEoJWNTtgdB6Z3LLEmj25aE9flithR',
	'Cendo Floxa':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-floxa-minidose-0-6-ml?srsltid=AfmBOoolOA8wqAevZThDEiEXZk1GxG5HvjGENqEqBHK0_DTkTqu-A4ks',
	'Cendo Fenicol':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-fenicol-0-25-eye-drops-5-ml?srsltid=AfmBOoqvVGlzBLE863bjZ_4BmgU0Gtoj4P3xhXoK2qC6iBHzxqtNhXTP',
	'Cendo Xitrol':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-xitrol-eye-drop-5-ml?srsltid=AfmBOorYej0YTa2vGnXBI1PBq9i0TvQyX2cFAc7G1rytNR7BvJodEg7d',
	'Cendo Gentamicin Tetes':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-genta-0-3-eye-drops-5-ml',
	'Cendo Gentamicin Salep':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-gentamicin-0-3-salep-mata-3-5-g?srsltid=AfmBOoovIjjMpeMxNiiZlTOUjQKZClQ2eKCkPrygBCjPUcBSbh1HRG_o',
	'Reco Tetes Mata':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/reco-0-5-eye-drops-10-ml?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=9lop8dy6&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2F5-langkah-awal-obati-konjungtivitis&af_ad=Web_reco-0-5-eye-drops-10-ml_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	Alegysal:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/alegysal-0-1-eye-drops-5-ml?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=069w8fh6&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2F5-langkah-awal-obati-konjungtivitis&af_ad=Web_alegysal-0-1-eye-drops-5-ml_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	'Cendo LFX':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-lfx-minidose-0-6-ml?srsltid=AfmBOooPC3afmBXWoiKG0_4rNJfvcDOx89k3DIjMA-_UF5srWU5iwU4s',
	'Cendo Lytrees':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-lyteers-eye-drops-15-ml-per-botol-cairan-obat-tetes-mata?srsltid=AfmBOooYlqKBrPolrCtTidGPMR7hoe1ZIKTX7Hz1Ql-COaLTW9ResJjE',
	'Polidemisine Eye Drop':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/polidemisin-eye-drops-5-ml?srsltid=AfmBOopom3KuQS9ek3itVcyJkUHVyuJr3L_8ZOdTA4hsOGtILzyDmE8p',
	'Cendo Tobroson': 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-tobroson-minidose-0-6-ml',
	Rifampicin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/rifampicin-450-mg-10-tablet?srsltid=AfmBOop8qUTDQfH2lKZNRyXtDzqVcHoyihZ7xU2SwEuyP2Gyj17vBGdS',
	Rifastar:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/rifastar-4fdc-10-kaplet?srsltid=AfmBOorJ3J07gq-iZziBQzU3TjkMDf9nqfVhVtYJH1-dGa33tTcd0DvX',
	'Pro-TB':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/pro-tb-4-28-tablet?srsltid=AfmBOoq_RoAVuXNCfAln0TwLq7ppBE9iuhvbYGdNAsKn6XBkY4aR04On',
	Ethambutol:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ethambutol-500-mg-10-tablet?srsltid=AfmBOoot01umAWpkmOFpMnYbdo91kyQvX4eh0HwPHULupG6xEkpCcmjv',
	Rifamtibi:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/rifamtibi-450-mg-10-kaplet?srsltid=AfmBOopp5W3ApznCZxJh0oVcU6BeAJhFZ6Mn3vd-3otNUKjADY963VK1',
	Isoniazid:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/isoniazid-300-mg-10-tablet?srsltid=AfmBOoq5YOpTyVJQlLGwGnzrZ2KfCK_3trUxJs4TYGT5sLMFk5-qdbE-',
	Pyrazinamide:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/pyrazinamide-500-mg-10-tablet?srsltid=AfmBOoqWD6dfaAoIx8cgX1ZNbU8fkC7xmVGnul92imjt_dd-cFw9szje',
	'Ventolin Inhaler':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ventolin-inhaler-100-mcg-200-doses?srsltid=AfmBOopCY3xQzOyPd7cWWDKLgBVm-v7NTEydS3tKIzDAmRghrjNb8u9L',
	'Velutine Inhalation':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/velutine-inhalation-solution-2-5-mg',
	'Seretide Inhaler':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/seretide-inhaler-25-125-mcg-120-dosis-1?srsltid=AfmBOooG2s81lxMkyBAGscwChdHF5AktCRdJ5py61wELtbcBQHDOAQbu',
	'Symbicort Turbuhaler':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/symbicort-160-mcg-4-5-mcg-turbuhaler-60-dosis?srsltid=AfmBOoqMzn5gAMxJ_5rH2hbThuGb5iZCgrxhDXfQ-BKoohp2t_ioBIH8',
	'Ventolin Nebules':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ventolin-nebules-2-5-mg-5-ampul?srsltid=AfmBOooKkpQJ8vTrFYgxxP73mzPq60lMS72jv6-IL78kZynFgcM-3xWf',
	'Combivent UDV':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/combivent-udv-10-vial?srsltid=AfmBOoryraZ5tE2eBwBUg1YnqL-CpYykfetUw5YpcIMcmG_l4AD8ChG_',
	'Farbivent Inhalation':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/farbivent-inhalation-2-5-ml?srsltid=AfmBOoqe7CUwGfobsnXzGurPfUvC9T0iB4d6YN9J3TDohjuApU3tp4F5',
	'Bricasma Turbuhaler':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/bricasma-turbuhaler-0-5-mg?srsltid=AfmBOop4gbbW-6vaLAW2XxkOF0_oQjfyvHCax0MxAIVSzxFCjtRY3imc',
	Ambroxol:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ambroxol-30-mg-10-tablet?srsltid=AfmBOoow98lVkTPl7x0hfBfYMeU-PILICfWCu_l8qAKZSphetzBp8zx3',
	Mucos:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/mucos-sirup-60-ml?srsltid=AfmBOooF19JOO7ZLg7rsFN3VQMjN1FoOnK1BdCLMpKklrp9S4JN-WEVf',
	'Panadol Cold & Flu':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/panadol-cold-dan-flu-10-kaplet?srsltid=AfmBOopmPP6c1vYGN89PGvm1vw2_Pp4vMuhG-52EJ_fX_dRTZzHj6jLf',
	'Mixagrip Flu': 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/mixagrip-flu-4-kaplet',
	'Alco Plus DMP':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/alco-flu-batuk-sirup-100-ml-alco-plus-dmp?srsltid=AfmBOoqSUU35VIAPJvWjw4tHXnjkSTvoHKLCixZKdJbTsZBtoRlUkank',
	'Bodrex Flu':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/bodrex-flu-4-kaplet?srsltid=AfmBOoqFiNOfGY4AHLii6A5tzdDypCfjAg2H-phe8r-qAE6KwzdZYrIO',
	Azithromycin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/azithromycin-500-mg-6-tablet-hemat-borongan?srsltid=AfmBOor34qRgOuDsmmMd3w_EBa9EfaNaf4ULkzaw5ES07LNNkVAcdCrf',
	Zithromax:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/zithromax-500-mg-3-kapsul?srsltid=AfmBOookek1ra5gCfFt4XFomOIPDaXOZkGGfVKrYLG0nsm1ESkWr3kbA',
	'Avelox Moxifloxacin':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/avelox-tablet-400-mg?srsltid=AfmBOooVspiiEByvdwgswhjNVVydTKiZE9VDdV8doAnNvDy2HU9Rf_xH',
	Zinnat: 'Medicastore:\nhttps://medicastore.com/produk/Obat/4043/zinnat-500-mg-tablet',
	Cefdinir:
		'Health Warehouse:\nhttps://www.healthwarehouse.com/cefdinir-300mg-capsules-generic-omnicef?srsltid=AfmBOorR0dfiAsdo8fF915S4LzlqUFdUwQ44ftbUlrxrlCPOR1AeQV6j',
	'Fluimucil Dry Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/fluimucil-dry-syrup-75-ml?srsltid=AfmBOopQT38AtMmBLMmtbzt6Qb9QLyAP6v1qfqiIWWrSj6eH24eyhc0Y',
	'Cefila Dry Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cefila-dry-sirup-30-ml?srsltid=AfmBOoqjkD3fxtkgURSx63QT-hb-mzOSuxEXI2Cc80l6xJpIR8MfMu2G',
	'Sanmol Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/sanmol-sirup-60-ml?srsltid=AfmBOoorAQL3eGFxvWgM7j_159tccRVZzo0NxUkO7xugMEY3uvxrWnz6',
	'Azithromycin Dry Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/azithromycin-200-mg-5-ml-dry-syrup-15-ml?srsltid=AfmBOopQvfDmi1ARXuItxzW0vteUsxgyCgvJUbT3SeNYbw-zCxME87Kj',
	'FG Troches':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/fg-troches-10-tablet?srsltid=AfmBOorMZjvio7HAxqTVWJDDNIcMTIpiOhuAL3-1F3tDCiOQjfrGVdGW',
	'Nytex Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/nytex-dry-syrup-100-mg-5-ml-75-ml?srsltid=AfmBOopLIsZrl0R_5lrbc5X_7-Sjb06w_JII6RcO8aII_IagNS6elYQU',
	'Prome Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/prome-sirup-100-ml-sirup-per-botol?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=471nxesd&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2Fini-5-pilihan-obat-batuk-akibat-bronkitis-yang-ampuh-di-apotek&af_ad=Web_prome-sirup-100-ml-sirup-per-botol_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	'Cefixime Trihydrate': 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cefixime-100-mg-10-kapsul',
	Erythromycin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/erythromycin-500-mg-10-kaplet?srsltid=AfmBOoopeuxZ6RYAnRPjl1F_quz2y9g9bADO6SC5f-qz51EDJPmcEdjz',
	Degirol:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/degirol-hisap-0-25-mg-10-tablet?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=rth27nym&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2Fini-11-obat-radang-tenggorokan-untuk-dewasa-tanpa-resep-dokter&af_ad=Web_degirol-hisap-0-25-mg-10-tablet_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	Longatin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/longatin-50-mg-10-kapsul?srsltid=AfmBOooDYbGNhIpgvUKaVvuSUcdNe_AYb-JiEzOO2X_gxTOCwBfvh8EN',
	'Promedex Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/promedex-sirup-60-ml?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=ebqbudt9&af_adset=https:%2F%2Fwww.halodoc.com%2Fkesehatan%2Flaringitis&af_ad=Web_promedex-sirup-60-ml_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	'Tantum Lozenges':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/tantum-lozenges-12-tablet?srsltid=AfmBOorZMOx32JsAj6AoqpBrGRrHyeKWgPuPDHUEk4ACbUT0HrPSEZ_6',
	'Helixim Dry Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/helixim-100-mg-10-kapsul?srsltid=AfmBOorJ-Yq8eRMR_cJ-QZgPp9P934usg0iYxQS1KM7dcpWAvpKRjuW2',
	'Bicrolid Kaplet':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/bicrolid-kaplet-500-mg?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=74q1uq4f&af_adset=https:%2F%2Fwww.halodoc.com%2Fkesehatan%2Fsinusitis&af_ad=Web_bicrolid-kaplet-500-mg_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	Attapulgite:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/attapulgite-600-mg-10-tablet-holi/64fb2959fc1c200023a8c093',
	'Neo Diaform':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/neo-diaform-10-tablet?srsltid=AfmBOor35MDgvZob5OUQbPBAuJLCkiaEI5woljL0JkJu6mHOMeuryrIA',
	Rillus:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/rillus-6-tablet?srsltid=AfmBOoop8D0XK0z4KcyGpMiUe3-9ZFW6TylBMryUQgevniXiiXIOgNb1',
	Zinc: 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/zinc-20-mg-10-tablet?srsltid=AfmBOoroNvrSczVK_S83yKMuMGxfPERozRVIMEGl64B8Qhg-RlzLqA0F',
	Imodium:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/imodium-2-mg-10-tablet?srsltid=AfmBOorpQjBLulp4t_6wc7CKfH0PFKDw31YobuSsg2fQqm7RvDfyhnk2',
	Oralit:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/oralit-200-4-1-g-1-sachet?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=pmvp8i3b&af_adset=https:%2F%2Fwww.halodoc.com%2Fkesehatan%2Foralit&af_ad=Web_oralit-200-4-1-g-1-sachet_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	Entrostop:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/entrostop-20-tablet?srsltid=AfmBOooXERN4Tb0rd4zoS-9Gbf9MR6DurVY9P9DxzFLmwV3IAJo1nS69',
	Diapet:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/diapet-10-kapsul?srsltid=AfmBOorrqrKaMVt81w4oNHRAYVRvf8gNH80JhpDEIvum1dXccAs6nkSq',
	Lodia: 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lodia-2-mg-10-tablet',
	'New Diatabs':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/new-diatabs-4-tablet?srsltid=AfmBOopRhUuw8Gjq-E2UZhwMRXNWzRJBThXQLydtUw0-6_ekAg7KSKf7',
	Smecta: 'Farmaku:\nhttps://www.farmaku.com/product/smecta-serbuk-30s',
	Omeprazole:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/omeprazole-20-mg-10-kapsul?srsltid=AfmBOopsCbWW7KQ1lGwk8Ry4-EgahILxbIIULDv2YGqgRPqUQvcs7R7d',
	'Antasida Doen':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/antasida-doen-10-tablet?srsltid=AfmBOopDMNbKYTxWTx_u1LFmMK2CIamPUYzppS_LTIvGrtTJg1jP2W7a',
	'Polysilane Suspensi':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/polysilane-suspensi-100-ml?srsltid=AfmBOopfB1toeTGg13XCffbdcZeMltHFIIAqzU_32sUbTOdeXPMYZsWX',
	'Promag Suspensi':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/promag-suspensi-60-ml?srsltid=AfmBOopC1Zmi-6PogelwDywimno1_u0uqLu3O_mfblEj3Lxd1fJMUBp8',
	'Promag Double Action':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/promag-double-action-6-tablet-kunyah?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=435gt793&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2Fini-obat-gerd-paling-ampuh-yang-kerap-diresepkan-dokter&af_ad=Web_promag-double-action-6-tablet-kunyah_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	'Sanmag Suspensi':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/sanmag-suspensi-120-ml?srsltid=AfmBOoqkZD6c9TVUjYqI_j0DNj_ODQPKll1HBekFy1nVAGNxtwK1Ipxa',
	'Farmacrol Forte Suspensi':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/farmacrol-forte-suspensi-100-ml?srsltid=AfmBOorwV3nNNpKt7quy4DwVQlvR6dYu8Z3fWTgICDhsP4lXmE7ASCqb',
	'Sucralfate Suspensi':
		'Halodoc:\nhttp://halodoc.com/obat-dan-vitamin/sucralfate-suspensi-500-mg-5-ml-100-ml?srsltid=AfmBOor0PuAK0Q4byiSWcvmceneIlSslDDQ9WauPbtqOsD_YB6Kdl1pY',
	Lansoprazole:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lansoprazole-30-mg-10-kapsul?srsltid=AfmBOoquZga4p3TzclUemYiiGcyoZ_cOUNZoxXRWHPjTzSh_mPrOFMwR',
	Ranitidine:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ranitidine-150-mg-10-tablet?srsltid=AfmBOoqWyQdqzXOXa8PSG145ztsg52s0SblYJ9nkuKb8VbBBIHjXy2kx',
	'Lanpracid Kapsul':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lanpracid-30-mg-10-kapsul?srsltid=AfmBOoqNRYShw6ePmkKlegwHM2LJh4JtqRj-4UpM9b-2eHLkQGltixt_',
	Mylanta:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/mylanta-sirup-50-ml?srsltid=AfmBOopVuNIMRYmpkj8yMErrg6aJJMzH5Y2QhW74ut5AM60urZoR26v8',
	'Polycrol Forte Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/polycrol-forte-sirup-100-ml?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=shuqmv0j&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2Fini-pilihan-obat-maag-yang-bagus-dan-ampuh-di-apotik&af_ad=Web_polycrol-forte-sirup-100-ml_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	Bisacodyl:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/bisacodyl-5-mg-10-tablet?srsltid=AfmBOoqsNxfAFFAyoO6AH2YfFvhFQBsWkss3wKDVM7aH9_k-J6i-c7Vt',
	Dulcolax:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/dulcolax-5-mg-4-tablet?srsltid=AfmBOoqKWR7kcaf_UVLzat5DulQiZbnh9MTPyMN2CtVj4GnL_LSvq-pd',
	Dulcolactol: 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/dulcolactol-sirup-60-ml',
	'Fleet enema':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/fleet-enema-133-ml?srsltid=AfmBOoooNqPvoJzRcLuUv3Ik54avVb2UQUWQY4FCodUCHptN8njNMN2L',
	Laxatab:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/laxatab-6-tablet?srsltid=AfmBOork0lIZKTI2WDRgzuTUvy07ic5WNXu6NskCP3HzdEVy2HH3fRn7',
	Microlax:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/microlax-gel-5-ml?srsltid=AfmBOorwGshUU4l3xGyoL4VY8ppAsM4Xp7bzkHc5dC-aDag98bLLYUiv',
	Laxadine:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/laxadine-emulsi-60-ml?srsltid=AfmBOorl7Jks2Sx7f_7vRTh_NZPdtltUPB_acfile_k1q0HcYRytgu4r',
	Lactulax:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lactulax-sirup-60-ml?srsltid=AfmBOopC_ZxW68iDoL7VLRWXPcvG6-we9PbV2DJYrDbEXxQqWz6394oS',
	'Acitral Suspensi':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/acitral-suspensi-120-ml?srsltid=AfmBOorV7sOw8DIfOYdmGW_9TyZs8Zo49B7_kTu8O2HR6kZXWSBUQlbt',
	Grafazol:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/grafazol-500-mg-10-kapsul?srsltid=AfmBOorAlHBVrgbcme0UdQKkHk7jMw04vvlj6jwLrBNiA47tQsde3yq6',
	'Strocain P':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/strocain-p-400-mg-10-tablet?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=onss8pnq&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2Fini-5-rekomendasi-obat-tukak-lambung-yang-bagus-di-apotek&af_ad=Web_strocain-p-400-mg-10-tablet_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	Episan:
		'Halodoc: \nhttps://www.halodoc.com/obat-dan-vitamin/episan-suspensi-100-ml?srsltid=AfmBOop2994hNpiiAOQI_BOQBx7eFP-sU7a8J8yJaUMZpDm-AvT0f7wr',
	Hufamycetin: 'K24Klik:\nhttps://www.k24klik.com/p/hufamycetin-250mg-cap-100s-23992#',
	'Baquinor Forte': 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/baquinor-forte-500-mg-10-kaplet',
	Pyxime: 'K24Klik:\nhttps://www.k24klik.com/p/pyxime-100mg-cap-30s-14728#',
	Floxigra:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/floxigra-500-mg-10-kaplet?srsltid=AfmBOorEAHbaZRvdnCuujk5y8rKVC_sLavb2SJd0eSrkRr9ABooWwrZ3',
	Ciprofloxacin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ciprofloxacin-500-mg-10-tablet?srsltid=AfmBOoqWPgAKXtPGV8qK9snceeT00lwbhimO6C_TQ0p91Y1sqqdk3nxS',
	Cotrimoxazole:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cotrimoxazole-480-mg-10-tablet?srsltid=AfmBOooXAYda5JBv8Ztz8Pwkk-93-k1fs0uFpIoWckoVfdqTRbUDXP8Z',
	'Flagyl Forte':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/flagyl-forte-500-mg-10-tablet?srsltid=AfmBOopzvZi9i34iBZBWo0ZoIQiQbjQ8AQ6RsTBWMFIOb-bvprMLVI7M',
	'New Syarbin':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/new-sybarin-10-tablet?srsltid=AfmBOoqa1xQ3aCn-gADO_TqUV-HMvxScayUQNaKGuudm_3aStEMJlwW9',
	Metronidazole:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/metronidazole-500-mg-10-tablet?srsltid=AfmBOor7N4R_aF2Xr0BZdaxzhDz-UTv8SBxm9AqsOXYnWtnGxIpTQwIY',
};

const linkObatDua = {
	Paracetamol: 'K24Klik:\nhttps://www.k24klik.com/p/paracetamol-if-500mg-tab-100s-417',
	'Bodrex Migra':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/bodrex-migra-4-kaplet/5fb374c341ab59059e867264',
	'Panadol Extra':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/panadol-extra-10-kaplet/5fb3755241ab59059e8673d9',
	'Natrium Diklofenak':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/natrium-diklofenak-25-mg-10-tablet-kimia-farma/5fb3802341ab59059e868de3',
	'Farsifen Plus': 'K24Klik:\nhttps://www.k24klik.com/p/farsifen-plus-capl-100s-13892\n',
	'Proris Kaplet':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/proris-200-mg-10-kaplet/5fb383e841ab59059e8696c7',
	'Sanmol Forte': 'K24Klik:\nhttps://www.k24klik.com/p/sanmol-500mg-tab-4s-strip-25s-1622',
	Ibuprofen:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ibuprofen-200-mg-10-tablet-novapharin/62a18e82f15ee840f565ea18',
	'Asam Mefenamat': 'K24Klik:\nhttps://www.k24klik.com/p/asam-mefenamat-if-500mg-tab-100s-12537#',
	Tremenza: 'K24Klik:\nhttps://www.k24klik.com/p/tremenza-tab-100s-325',
	'Amoxicillin Tablet': 'K24Klik:\nhttps://www.k24klik.com/p/amoxicillin-hexpharm-500mg-capl-100s-4542#',
	'Iliadin Nasal Spray':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/iliadin-obat-semprot-hidung-dewasa-10-ml/5fb38a4d41ab59059e86a6b4',
	Methylprednisolone:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/methylprednisolone-8-mg-10-tablet-novell/61dc1f70e139ec05b9c88419',
	Cetirizine: '-',
	'Cefadroxil Monohydrate':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cefadroxil-500-mg-10-kapsul-hexpharm/5fb37bd441ab59059e8683ab',
	Levofloxacin:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/levofloxacin-500-mg-10-tablet-bernofarm/65386d258473bf20fe5e7b60',
	'Breathy Nasal Drops': 'K24Klik:\nhttps://www.k24klik.com/p/breathy-tetes-hidung-30ml-1369',
	'Breathy Nasal Spray': 'K24Klik:\nhttps://www.k24klik.com/p/bns-breathy-nasal-spray-30ml-7679',
	'Nasonex Nasal Spray':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/nasonex-aqueous-nasal-spray-60-dosis/61b37f98b5a5e2062d979b8c',
	Amoxsan:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/amoxsan-250-mg-10-kapsul/5fb37a4641ab59059e868000',
	'Rhinos SR': 'K24Klik:\nhttps://www.k24klik.com/p/rhinos-sr-cap-50s-318',
	Betahistine:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/betahistine-6-mg-10-tablet-nulab/62a18f62f15ee840f565f189',
	'Mertigo SR': 'K24Klik:\nhttps://www.k24klik.com/p/mertigo-sr-12mg-tab-100s-18979#',
	Betaserc:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/betaserc-24-mg-20-tablet/5fb3894541ab59059e86a41a',
	Dimenhydrinate: '-',
	Histigo:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/histigo-6-mg-10-kaplet/5fb3770841ab59059e867815',
	Vastigo: 'K24Klik:\nhttps://www.k24klik.com/p/vastigo-6mg-tab-100s-2530#',
	Merislon:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/merislon-12-mg-10-tablet/61dd3f3ae139ec05b9c8b753',
	Frego:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/frego-5-mg-10-tablet/5fb382be41ab59059e869413',
	Flunarizine:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/flunarizine-5-mg-10-tablet-nulab/62a18eb0f15ee840f565eb7e',
	Tegretol:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/tegretol-200-mg-10-tablet/5fb3738641ab59059e866f4c',
	Lameson: 'K24Klik:\nhttps://www.k24klik.com/p/lameson-4mg-tab-100s-517#',
	Bamgetol: 'Medicastore:\nhttps://medicastore.com/produk/Obat/8527/bamgetol-tablet-200-mg',
	Gabapentin: 'Farmaku:\nhttps://www.farmaku.com/product/gabapentin-300-mg-cap',
	Lioresal:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/lioresal-10-mg-10-tablet/62a18f0af15ee840f565ee7d',
	Amitriptyline: '-',
	Rogaine:
		'Blibli:\nhttps://www.blibli.com/p/rogaine-5-minoxidil-penyubur-rambut-60-ml/ps--MEO-26940-00541?ds=MEO-26940-00541-00001&source=BRAND_PAGE&sid=04096d4fc5327dab&cnc=false&pickupPointCode=PP-3003102&pid1=MEO-26940-00541',
	'Regrou Forte':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/regrou-forte-hair-restorer-30-ml/5fb37e1541ab59059e868909',
	'Regrou Hair Regrowth': 'K24Klik:\nhttps://www.k24klik.com/p/regrou-2--liq-30ml-1794#',
	Eminox: 'K24Klik:\nhttps://www.k24klik.com/p/eminox-5--sol-30ml-16403#',
	'Sanbe Hair': 'K24Klik:\nhttps://www.k24klik.com/p/sanbe-hair-sol-60ml-25080',
	Finasteride:
		'Blibli:\nhttps://www.blibli.com/p/finasteride-combiphar-5-mg-box-100-tablet/ps--APA-70260-03288?ds=APA-70260-03288-00001&source=SEARCH&sid=b10eb89594fd93b0&cnc=false&pickupPointCode=PP-3461892&pid1=APA-70260-03288',
	Baricitinib: '-',
	'Erlamycetin Tetes Telinga': 'K24Klik:\nhttps://www.k24klik.com/p/erlamycetin-ear-drop-10ml-3922#',
	'Reco Tetes Telinga': 'Shopee:\nhttps://shopee.co.id/Reco-Tetes-Telinga-10-Ml-i.935938697.25182676710',
	'Akilen Tetes Telinga': 'K24Klik:\nhttps://www.k24klik.com/p/akilen-ear-drop-5ml-3273#',
	'Ofloxacin Ear Drop': '-',
	'Otopain Ear Drop': 'K24Klik:\nhttps://www.k24klik.com/p/otopain-ear-drop-8ml-939#',
	'Otilon Ear Drop':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/otilon-tetes-telinga-8-ml/5fb37f8d41ab59059e868c9e',
	'Erlamycetin Tetes Mata':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/erlamycetin-tetes-mata-10-ml/61b368e0b5a5e2062d9797e0',
	'Cendo Natacen': 'K24Klik:\nhttps://www.k24klik.com/p/c-natacen-md-0.6ml-2005#',
	'Cendo Floxa':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cendo-floxa-tetes-mata-minidose-0%2C6-ml-5-ampul/5fb3892a41ab59059e86a3d3',
	'Cendo Fenicol': 'K24Klik:\nhttps://www.k24klik.com/p/c-fenicol-0.25--eye-drop-5ml-2843#',
	'Cendo Xitrol':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cendo-xitrol-tetes-mata-5-ml/5fb3732741ab59059e866e51',
	'Cendo Gentamicin Tetes':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cendo-genta-0%2C3%25-tetes-mata-5-ml/5fb3881d41ab59059e86a12b',
	'Cendo Gentamicin Salep':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cendo-gentamicin-0%2C3%25-salep-mata-3%2C5-gr/5fb3881b41ab59059e86a126',
	'Reco Tetes Mata':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/reco-0%2C5%25-tetes-mata-10-ml/653724b78473bf20fe5d3942',
	Alegysal: 'K24kKlik:\nhttps://www.k24klik.com/p/alegysal-0.1--eye-drop-5ml-3651#',
	'Cendo LFX':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cendo-lfx-tetes-mata-minidose-0%2C6-ml-5-ampul/5fb3897a41ab59059e86a495',
	'Cendo Lytrees': 'K24Klik:\nhttps://www.k24klik.com/p/c-lyteers-eye-drop-15ml-933',
	'Polidemisine Eye Drop': 'K24Klik:\nhttps://www.k24klik.com/p/polidemisin-eye-drop-5ml-909#',
	'Cendo Tobroson': 'K24Klik:\nhttps://www.k24klik.com/p/c-tobroson-md-0.6ml-908#',
	Rifampicin:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/rifampicin-600-mg-10-tablet-kimia-farma/65386ad88473bf20fe5db15b',
	Rifastar: 'K24Klik:\nhttps://www.k24klik.com/p/rifastar-4-fdc-3647#',
	'Pro-TB': 'K24Klik:\nhttps://www.k24klik.com/p/pro-tb-4-tab-28s-4399#',
	Ethambutol: 'K24Klik:\nhttps://www.k24klik.com/p/ethambutol-kf-500mg-tab-100s-2310#',
	Rifamtibi: 'K24Klik:\nhttps://www.k24klik.com/p/rifamtibi-450mg-tab-100s-12807#',
	Isoniazid:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/isoniazid-300-mg-10-tablet-kf/659fbc19e8c94800244a09c6',
	Pyrazinamide: 'K24Klik:\nhttps://www.k24klik.com/p/pyrazinamide-promed-500mg-tab-100s-24862#',
	'Ventolin Inhaler':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ventolin-inhaler-100-mcg-200-dosis/5fb387ff41ab59059e86a0cd',
	'Velutine Inhalation': 'K24Klik:\nhttps://www.k24klik.com/p/velutine-inhalation-sol-2.5mg-10s-14754',
	'Seretide Inhaler':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/seretide-25-125-mcg-inhaler-120-dosis/5fb3888c41ab59059e86a23a',
	'Symbicort Turbuhaler':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/symbicort-turbuhaler-160-4%2C5-mcg-60-dosis/5fb388b541ab59059e86a2ac',
	'Ventolin Nebules': 'K24Klik:\nhttps://www.k24klik.com/p/ventolin-nebules-2.5mg-20s-264#',
	'Combivent UDV': 'K24Klik:\nhttps://www.k24klik.com/p/combivent-udv-2.5ml-vial-20s-266#',
	'Farbivent Inhalation': 'K24Klik:\nhttps://www.k24klik.com/p/farbivent-sol-for-inhalation-ampul-10s-3905#',
	'Bricasma Turbuhaler': 'K24Klik:\nhttps://www.k24klik.com/p/bricasma-turbu-0.50mg-dose-100-doses-2633#',
	Ambroxol:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ambroxol-30-mg-10-tablet-errita/649267bc94ec340025e58279',
	Mucos:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/mucos-15-mg-sirup-60-ml/5fb37c2341ab59059e868473',
	'Panadol Cold & Flu':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/panadol-cold-%26-flu-10-kaplet/5fb38a7e41ab59059e86a726',
	'Mixagrip Flu': 'K24Klik:\nhttps://www.k24klik.com/p/mixagrip-flu-capl-4s-strip-25s-1342',
	'Alco Plus DMP': 'K24Klik:\nhttps://www.k24klik.com/p/alco-flu-plus-batuk-syr-100ml-2536',
	'Bodrex Flu':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/bodrex-flu-4-tablet/66fa7b80b9ae82a94ef8524e',
	Azithromycin:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/azithromycin-500-mg-3-tablet-novell/64eff9257e86957b5a948991',
	Zithromax:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/zithromax-500-mg-3-tablet/5fb3882b41ab59059e86a147',
	'Avelox Moxifloxacin': 'K24Klik:\nhttps://www.k24klik.com/p/avelox-400mg-tab-5s-2879#',
	Zinnat: 'Farmaku:\nhttps://www.farmaku.com/product/zinnat-tab-500-mg-10s',
	Cefdinir: 'Amazon Pharmacy:\nhttps://pharmacy.amazon.com/Cefdinir-Oral-Capsule/dp/B084BQGPBF',
	'Fluimucil Dry Sirup': 'K24Klik:\nhttps://www.k24klik.com/p/fluimucil-100mg-5ml-d-syr-75ml-1365#',
	'Cefila Dry Sirup': 'K24Klik:\nhttps://www.k24klik.com/p/cefila-100mg-5ml-d-syr-30ml-4039#',
	'Sanmol Sirup': 'K24Klik:\nhttps://www.k24klik.com/p/sanmol-120mg-5ml-syr-60ml-425',
	'Azithromycin Dry Sirup':
		'K24Klik:\nhttps://www.k24klik.com/p/azithromycin-infion-200mg-5ml-d-syr-15ml-24838#',
	'FG Troches':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/fg-troches-10-tablet/5fb3893941ab59059e86a400',
	'Nytex Sirup': 'K24Klik:\nhttps://www.k24klik.com/p/nytex-100mg-5ml-d-syr-75ml-2049#',
	'Prome Sirup': 'K24Klik:\nhttps://www.k24klik.com/p/prome-syr-100ml-3636',
	'Cefixime Trihydrate':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cefixime-100-mg-10-kapsul-hexpharm/5fb3895841ab59059e86a44b',
	Erythromycin: 'K24Klik:\nhttps://www.k24klik.com/p/erythromycin-if-500mg-cap-100s-24834#',
	Degirol:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/degirol-0%2C25-mg-10-tablet/5fb371e541ab59059e866b02',
	Longatin: 'K24Klik:\nhttps://www.k24klik.com/p/longatin-50mg-cap-100s-4179',
	'Promedex Sirup': 'K24Klik:\nhttps://www.k24klik.com/p/promedex-syr-60ml-18727',
	'Tantum Lozenges':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/tantum-lozenges-6-tablet/5fb3884941ab59059e86a196',
	'Helixim Dry Sirup':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/helixim-100-mg-10-kapsul/61fb47475232ce060508751d',
	'Bicrolid Kaplet': 'K24Klik:\nhttps://www.k24klik.com/p/bicrolid-500mg-capl-30s-13736#',
	Attapulgite: 'K24Klik:\nhttps://www.k24klik.com/p/attapulgite-holi-600mg-tab-100s-33475',
	'Neo Diaform': 'K24Klik:\nhttps://www.k24klik.com/p/neo-diaform-tab-10s-strip-50s-13992',
	Rillus: 'Alodokter:\nhttps://www.alodokter.com/aloshop/products/rillus-6-tablet/62649a3e4fee05355c1c4dc8',
	Zinc: 'K24Klik:\nhttps://www.k24klik.com/p/zinc-sulfate-if-20mg-disp-tab-100s-9316',
	Imodium:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/imodium-2-mg-10-tablet/5fb3873041ab59059e869e6c',
	Oralit: 'K24Klik:\nhttps://www.k24klik.com/p/oralit-phapros-200-sach-100s-20005',
	Entrostop: 'K24Klik:\nhttps://www.k24klik.com/p/entrostop-tab-12s-strip-2s-37',
	Diapet: 'Alodokter:\nhttps://www.alodokter.com/aloshop/products/diapet-10-kapsul/5fb37ed941ab59059e868adf',
	Lodia: 'K24Klik:\nhttps://www.k24klik.com/p/lodia-2mg-tab-60s-2339#',
	'New Diatabs': 'K24Klik:\nhttps://www.k24klik.com/p/new-diatabs-tab-4s-strip-25s-38',
	Smecta:
		'Shopee:\nhttps://shopee.co.id/SMECTA-ANTI-DIARRHEAL-12-SUCHETS-i.408314883.21120629438?sp_atk=ae6509b7-8ab7-4fb1-b38e-3d43901205a8&xptdk=ae6509b7-8ab7-4fb1-b38e-3d43901205a8',
	Omeprazole: 'K24klik:\nhttps://www.k24klik.com/p/omeprazole-novell-20mg-cap-30s-12#',
	'Antasida Doen': 'k24Klik:\nhttps://www.k24klik.com/p/antasida-doen-molex-chew-tab-100s-29422',
	'Polysilane Suspensi':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/polysilane-suspensi-100-ml/5fb379de41ab59059e867f10',
	'Promag Suspensi':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/promag-suspensi-60-ml/61e782ebe139ec76d1985620',
	'Promag Double Action': 'K24Klik:\nhttps://www.k24klik.com/p/promag-double-action-tab-6s-strip-2805',
	'Sanmag Suspensi': 'K24Klik:\nhttps://www.k24klik.com/p/sanmag-susp-120ml-4078',
	'Farmacrol Forte Suspensi': 'K24Klik:\nhttps://www.k24klik.com/p/farmacrol-f-susp-100ml-3',
	'Sucralfate Suspensi': 'K24Klik:\nhttps://www.k24klik.com/p/sucralfate-dexa-500mg-5ml-susp-100ml-28837#',
	Lansoprazole: 'K24Klik:\nhttps://www.k24klik.com/p/lansoprazole-hexpharm-30mg-cap-50s-25088#',
	Ranitidine: 'K24klik:\nhttps://www.k24klik.com/p/ranitidine-hexpharm-150mg-tab-100s-8677',
	'Lanpracid Kapsul': 'K24klik:\nhttps://www.k24klik.com/p/lanpracid-30mg-cap-20s-10622#',
	Mylanta:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/mylanta-cair-50-ml/5fb38b4641ab59059e86a912',
	'Polycrol Forte Sirup': 'K24Klik:\nhttps://www.k24klik.com/p/polycrol-susp-100ml-4547',
	Bisacodyl:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/bisacodyl-5-mg-10-tablet-etercon/62a18ff1f15ee840f565f64b',
	Dulcolax: 'K24klik:\nhttps://www.k24klik.com/p/dulcolax-tab-10s-42',
	Dulcolactol: 'K24Klik:\nhttps://www.k24klik.com/p/dulcolactol-syr-60ml-3254',
	'Fleet enema': 'K24Klik:\nhttps://www.k24klik.com/p/fleet-enema-133ml-1819',
	Laxatab: 'K24klik:\nhttps://www.k24klik.com/p/laxatab-tab-6s-strip-20s-1628',
	Microlax: 'K24Klik:\nhttps://www.k24klik.com/p/microlax-enema-5ml-45',
	Laxadine: 'K24kKlik:\nhttps://www.k24klik.com/p/laxadine-emulsi-60ml-44',
	Lactulax:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/lactulax-sirup-60-ml/5fb379cc41ab59059e867ee7',
	'Acitral Suspensi': 'K24Klik:\nhttps://www.k24klik.com/p/acitral-susp-120ml-3440',
	Grafazol: 'K24klik:\nhttps://www.k24klik.com/p/grafazol-500mg-capl-100s-13792#',
	'Strocain P': 'K24Klik:\nhttps://www.k24klik.com/p/strocain-p-400mg-tab-10s-strip-10s-8685',
	Episan: 'K24Klik:\nhttps://www.k24klik.com/p/episan-500mg-5ml-susp-100ml-4208',
	Hufamycetin:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/hufamycetin-250-mg-10-tablet/6438c76e90e64fce9f2634ce',
	'Baquinor Forte': 'K24Klik:\nhttps://www.k24klik.com/p/baquinor-f-500mg-tab-20s-583#',
	Pyxime: 'Medicastore:\nhttps://medicastore.com/produk/Obat/899/pyxime-kapsul',
	Floxigra:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/floxigra-500-mg-10-kaplet/62a190baf15ee840f565fd9e',
	Ciprofloxacin:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ciprofloxacin-500-mg-10-kaplet-promed/5fb37adf41ab59059e868156',
	Cotrimoxazole: 'K24Klik:\nhttps://www.k24klik.com/p/cotrimoxazole-promed-480mg-tab-100s-24857#',
	'Flagyl Forte':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/flagyl-forte-500-mg-10-tablet/5fb3872241ab59059e869e43',
	'New Syarbin': '-',
	Metronidazole: 'K24klik:\nhttps://www.k24klik.com/p/metronidazole-bernofarm-500mg-tab-100s-2422#',
};

module.exports = {
	obatLabels,
	aturanPakaiObat,
	deskripsiObat,
	dosisObat,
	efekSampingObat,
	imagesObat,
	kandunganObat,
	sumberObat,
	kategoriObat,
	linkObatSatu,
	linkObatDua,
};
