const obatLabels = {
	1: 'Bodrex Migra',
	2: 'Panadol Extra',
	3: 'Farsifen Plus',
	4: 'Paracetamol',
	5: 'Ibuprofen',
	6: 'Amoxicillin',
	7: 'Iliadin Nasal Spray',
	8: 'Breathy Nasal Drops',
	9: 'Betahistine Mesylate',
	10: 'Betaserc',
	11: 'Mertigo SR',
	12: 'Clopidogrel Bisulfate',
	13: 'Cholestor',
	14: 'Pradaxa',
	15: 'Ciprofloxacin Tablet',
	16: 'Dexamethasone',
	17: 'Zovirax Tablet',
	18: 'Tegretol',
	19: 'Bamgetol',
	20: 'Lioresal',
	21: 'Rogaine',
	22: 'Regrou Forte',
	23: 'Finasteride',
	24: 'Amoxsan Tablet',
	25: 'Cefixime Trihydrate',
	26: 'Akilen Tetes Telinga',
	27: 'Forotic Tetes Telinga',
	28: 'Erlamycetin Tetes Telinga',
	29: 'Alat Bantu Pendengaran',
	30: 'Stapedektomi',
	31: 'Cochlear Implant',
	32: 'Cendo Floxa',
	33: 'Erlamycetin Tetes Mata',
	34: 'Polidemisine Eye Drop',
	35: 'Zovirax Cream',
	36: 'Acyclovir Tablet',
	37: 'Valacyclovir HCL',
	38: 'Vfend Voriconazole',
	39: 'Cendo Natacen',
	40: 'Cendo Xitrol',
	41: 'Erlamycetin Salep Mata',
	42: 'Cardio Aspirin',
	43: 'Farnormin',
	44: 'Triatec',
	45: 'Concor',
	46: 'Spironolactone',
	47: 'Rifampicin',
	48: 'Nitrokaf Retard',
	49: 'Amlodipine Besylate',
	50: 'Simarc 2',
	51: 'Lasix',
	52: 'Rifastar',
	53: 'Isoniazid',
	54: 'Ventolin Inhaler',
	55: 'Seretide Inhaler',
	56: 'Symbicort Turbuhaler',
	57: 'Tamiflu',
	58: 'Panadol Cold & Flu',
	59: 'Mixagrip Flu & Batuk',
	60: 'Zithromax',
	61: 'Avelox Moxifloxacin',
	62: 'Azithromycin',
	63: 'Seretide',
	64: 'Trelegy Ellipta',
	65: 'Spriva Respimat',
	66: 'Erythromycin',
	67: 'Proris Sirup',
	68: 'Promedex Sirup',
	69: 'Entrostop',
	70: 'Diapet',
	71: 'Imodium',
	72: 'Polysilane Suspensi',
	73: 'Promag Suspensi',
	74: 'Omeprazole',
	75: 'Ranitidine',
	76: 'Dulcolax',
	77: 'Laxatab',
	78: 'Lactulax',
	79: 'Ambeven',
	80: 'Ardium 500',
	81: 'Nutrafor Wazzir',
	82: 'Lanpracid Kapsul',
	83: 'Grafazol Kaplet',
	84: 'Floxigra',
	85: 'Flagyl Forte',
	86: 'Metronidazole',
	87: 'Duspatalin',
};

const aturanPakaiObat = {
	'Bodrex Migra': 'Dapat dikonsumsi sesudah makan',
	'Panadol Extra': 'Dapat dikonsumsi sebelum atau setelah makan',
	'Farsifen Plus': 'Dapat dikonsumsi setalah makan untuk menghindari terjadinya iritasi pada lambung',
	Paracetamol:
		'Obat ini jarang menimbulkan efek samping kepada para pasien. Namun, jika dikonsumsi dengan dosis yang tidak sesuai dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, hingga tubuh terasa lemas',
	Ibuprofen: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Amoxicillin:
		'Dapat dikonsumsi sebelum atau setelah makan. Namun, konsumsi obat bersama makanan dapat meningkatkan penyerapan obat dan mengurangi efek samping pada lambung.',
	'Iliadin Nasal Spray':
		'Sebelum menyemprotkan obat ini ke dalam lubang hidung, sebaiknya pasien membersihkan terlebih dahulu lubang hidung yang akan disemprotkan. Selanjutnya barulah pasien dapat menyemprotkan obat ini ke dalam lubang hidung yang telah dibersihkan. Obat ini dapat digunakan pada pagi atau malam hari',
	'Breathy Nasal Drops': 'Dapat diteteskan ke dalam masing-masing lubang hidung',
	'Betahistine Mesylate': 'Dapat dikonsumsi setelah makan',
	Betaserc: 'Dapat dikonsumsi setelah makan',
	'Mertigo SR': 'Dapat dikonsumsi bersamaan dengan makanan atau setelah makan',
	'Clopidogrel Bisulfate': 'Dapat dikonsumsi sebelum atau setelah makan',
	Cholestor: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Pradaxa: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Ciprofloxacin Tablet': 'Sebaiknya dikonsumsi pada saat makan untuk mencegah timbulnya sakit maag',
	Dexamethasone: 'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan untuk mencegah penyakit maag',
	'Zovirax Tablet': 'Dapat dikonsumsi sebelum atau sesudah makan',
	Tegretol: 'Dapat dikonsumsi bersamaan dengan makan untuk mencegah sakit perut, mual, atau muntah',
	Bamgetol:
		'Dapat dikonsumsi bersamaan dengan makan atau setelah makan. Namun, disarankan untuk dikonsumsi bersamaan dengan makanan untuk mencegah terjadinya sakit perut, mual, atau muntah',
	Lioresal: 'Dapat dikonsumsi bersamaan dengan makan atau setelah makan',
	Rogaine:
		'Bentuk Cair:\n- Pastikan kulit kepala dan rambut bersih dan kering sebelum menggunakan minoxidil.\n- Oleskan obat pada kulit kepala yang botak mulai dari bagian tengah.\n- Jangan mengeringkan area kulit kepala yang diolesi minoxidil dengan pengering rambut. Biarkan obat mengering dengan sendirinya. Penggunaan pengering rambut dapat mengurangi efektivitas minoxidil.\n- Jangan menutup kulit kepala yang sudah diolesi minoxidil dengan shower cap atau handuk. Biarkan kepala dalam kondisi terbuka.\n- Disarankan untuk tidak keramas setidaknya sampai 4 jam setelah menggunakan minoxidil.\n- Jangan lupa untuk selalu mencuci tangan setelah menggunakan minoxidil.\n\nBentuk Foam:\n- Belah rambut menjadi satu baris atau lebih untuk memaparkan obat ke area rambut yang mulai menipis di kulit kepala.\r\n- Pegang kaleng terbalik dan tekan nosel untuk meletakkan busa di jari\r\n- Gunakan jari untuk menyebarkan busa ke area rambut rontok dan pijat dengan lembut ke kulit kepala\r\n- Jangan lupa untuk selalu mencuci tangan setelah menggunakan minoxidil.',
	'Regrou Forte':
		'- Bersihkan area kepala yang akan diolesi\n- Keringkan area kepala yang ingin diolesi dengan regrou forte\n- Oleskan 1 ml regrou forte pada area kepala yang ingin diolesi\n- Lindungi bagian kepala yang sudah dioleskan dengan roegan',
	Finasteride: 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Amoxsan Tablet': 'Dapat dikonsumsi bersamaan dengan makan atau setelah makan',
	'Cefixime Trihydrate':
		'Dapat dikonsumsi sebelum atau setelah makan. Namun, disarankan untuk mengonsumsi obat ini setelah makan untuk menghindari terjadinya sakit perut',
	'Akilen Tetes Telinga':
		'Tetskan akilen pada telinga yang mengalami permasalahan sesuai dengan dosis yang telah ditetapkan',
	'Forotic Tetes Telinga':
		'Teteskan forotic pada telinga yang mengalami masalah sesuai dengan dosis yang ditentukan. Setelah obat diteteskan pada bagian telinga yang sakit, diamkan selama 5 - 10 menit',
	'Erlamycetin Tetes Telinga':
		'Teteskan erlamycetin pada telinga yang mengalami masalah sesuai dengan dosis yang ditentukan. Setelah obat diteteskan pada bagian telinga yang sakit, diamkan selama 5 - 10 menit',
	'Cendo Floxa':
		'- Cuci tangan yang ingin digunakan untuk memberikan obat\n- Posisikan kepala anda menghadap ke atas\n- Tarik kelopak mata bawah hingga membentuk kantung\n- Teteskan 1 tetes obat mata ke bagian mata yang sakit\n- Tutup mata secara perlahan dan diamkan selama beberapa menit',
	'Erlamycetin Tetes Mata':
		'- Bersihkan tangan sebelum menggunakan obat\n- Posisikan kepala anda menghadap ke atas\n- Berikan 1 tetes pada mata yang mengalami infeksi dan tutup mata secara perlahan selama beberapa menit\n- Jangan membuka atau mengucek mata saat obat baru diteteskan\n- Ulangi proses tersebut jika anda mengalami infeksi pada kedua mata\n- Bersihkan kembali tangan dengan menggunakan sabun',
	'Polidemisine Eye Drop':
		'- Bersihkan tangan anda terlebih dahulu sebelum menggunakan obat tetes ini\n- Posisikan kepala anda hingga menghadap ke atas\n- Tarik secara perlahan kelopak mata bagian bawah dengan jari yang bersih\n- Teteskan obat pada bagian mata yang ingin diobati sesuai dengan dosis\n- Tutup mata secara perlahan dan diamkan selama beberapa menit\n- Jangan berkedip atau mengusap mata setelah obat diteteskan',
	'Zovirax Cream':
		'- Bersihkan tangan dan area kulit yang akan diolesi krim zovirax\n- Keringkan tangan dan area kulit yang telah dibersihkan hingga benar-benar kering\n- Oleskan krim zovirax secara merata pada area kulit yang diobati. Gunakan sarung tangan atau kapas sekali pakai agar virus tidak menyebar ke bagian tubuh yang lain\n- Bersihkan kembali tangan yang telah digunakan untuk mengoleskan krim menggunakan sabun',
	'Acyclovir Tablet': 'Dapat dikonsumsi sebelum atau setelah makan',
	'Valacyclovir HCL': 'Dapat dikonsumsi sebelum atau setelah makan',
	'Vfend Voriconazole': 'Dapat dikonsumsi 1 jam sebelum makan atau 1 - 2 jam setelah makan',
	'Cendo Natacen':
		'- Bersihkan tangan sebelum menggunakan obat\n- Bersihkan area mata dari kotoran, seperti kotoran mata menggunakan air hangat\n- Teteskan pada bagian mata yang mengalami infeksi',
	'Cendo Xitrol':
		'- Bersihkan tangan sebelum menggunakan obat\n- Bersihkan area mata dari kotoran, seperti kotoran mata menggunakan air hangat\n- Teteskan pada bagian mata yang mengalami infeksi',
	'Erlamycetin Salep Mata':
		'- Bersihkan tangan anda terlebih dahulu sebelum menggunakan erlamycetin salep mata\n- Posisikan kepala anda menghadap ke atas\n- Tarik kelopak mata bagian bawah sehingga membentuk sebuah kantung\n- Tekan erlamycetin salep mata secara perlahan hingga keluar sekitar 1 cm\n- Oleskan pada obat pada kantung mata yang mengalami infeksi\n- Kedipkan mata secara perlahan dan tutup mata selama beberapa menit sambil memutar bola mata agar obat dapat meresap secara merata\n- Ulangi langkah tersebut pada bagian mata yang lain jika kedua mata mengalami infeksi\n- Bersihkan kembali tangan dengan menggunakan sabun',
	'Cardio Aspirin': 'Dapat dikonsumsi bersamaan dengan makan atau segera sesudah makan',
	Farnormin:
		'Dapat dikonsumsi sebelum atau setelah makan. Hindari meminum jus apel atau jeruk setelah 4 jam mengonsumsi obat, karena jus aple dan jeruk dapat mengganggu penyerapan obat oleh tubuh',
	Triatec: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Concor:
		'Dapat dikonsumsi sebelum atau sesudah makan. Namun, disarankan untuk meminum obat ini pada pagi hari',
	Spironolactone:
		'Dapat dikonsumsi bersamaan dengan makan atau setelah makan. Disarankan untuk mengonsumsi obat ini pada pagi hari dan sangat tidak disarankan untuk mengonsumsinya pada malam hari, karena obat ini dapat meningkatkan produksi urine',
	Rifampicin: 'Dapat dikonsumsi 1 jam sebelum makan atau 2 jam setelah makan',
	'Nitrokaf Retard':
		'Dapat dikonsumsi sebelum atau sesudah makan. Obat ini dianjutkan dikonsumsi pada pagi hari',
	'Amlodipine Besylate': 'Dapat dikonsumsi sebelum atau sesudah makan',
	'Simarc 2': 'Dapat dikonsumsi sebelum atau sesudah makan',
	Lasix:
		'Dapat diminum sebelum atau setekah makan. Namun, disarankan untuk dikonsumsi bersamaan dengan makan untuk mengurangi rasa tidak nyaman pada gastrointestinal',
	Rifastar: 'Dapat dikonsumsi 30 menit sebelum makan',
	Isoniazid: 'Dapat dikonsumsi 1 jam sebelum makan atau 2 jam setelah makan',
	'Ventolin Inhaler': 'Diberikan pada saat serangan asma kambuh',
	'Seretide Inhaler':
		'- Bersihkan tangan dengan sabun dan air mengalir sebelum dan sesudah menggunakan Seretide diskus.\n- Lepaskan tutup inhaler dosis terukur, lalu pegang perangkat ini dalam posisi tegak.\n- Selanjutnya berdirilah atau duduk tegak dan kocok inhaler.\n- Untuk penggunaan pertama sebelum digunakan, semprotkan inhaler ke telapak tangan untuk memeriksa apakah inhaler berfungsi.\n- Miringkan kepalamu sedikit ke belakang dan hembuskan napas terlebih dahulu.\n- Masukkan inhaler melalui mulut (diantara gigi atas dan bawah), kemudian tutup mulut dengan merapatkan bibir (jangan digigit).\n- Tekan inhaler secara cepat untuk melepaskan obat, sembari menarik napas.\n- Tarik napas perlahan selama 3 hingga 5 detik.\n- Tahan napas selama 10 detik untuk memungkinkan obat masuk jauh ke dalam paru-paru kamu.\n- Buang napas perlahan. Jika membutuhkan semprotan berikutnya, tunggu sampai 30 detik, dan kocok kembali inhaler.\n- Gunakan sesuai dosis yang telah diberikan\n- Bersihkan mouthpiece inhaler menggunakan tisu atau kain kering.\n- Tutup kembali mulut inhaler dan simpan di tempat yang kering.\n- Berkumur dengan air, buang air tersebut dan jangan ditelan.',
	'Symbicort Turbuhaler':
		'- Buka kunci pengaman kemasan inhaler ke kanan selanjutnya ke kiri dengan cepat hingga terdengar suara “klik”.\n- Buang napas terlebih dahulu sebelum menghirup dari inhaler\n- Letakkan moncong inhaler di dalam mulut\n- Tutup bibir rapat-rapat, lalu tarik napas dalam-dalam\n- Setelah menghirup udara dari inhaler, tahan napas selama 10 detik dan ulangi langkah sebelumnya jika disarankan oleh dokter\n- Jangan lupa tutup kembali inhaler dengan kunci pengaman, lalu kumur mulut dengan air bersih. ',
	Tamiflu: 'Dapat dikonsumsi bersamaan dengan makan atau sesudah makan',
	'Panadol Cold & Flu': 'Dapat dikonsumsi sebelum atau setelah makan',
	'Mixagrip Flu & Batuk': 'Dapat dikonsumsi setelah makan',
	Zithromax: 'Dapat dikonsumsi sesudah makan',
	'Avelox Moxifloxacin': 'Dapat dikonsumsi sebelum atau sesudah makan',
	Azithromycin:
		'Dapat dikonsumsi dengan atau tanpa makanan. Untuk mengantisipasi rasa tidak nyaman pada perut, konsumsilah obat ini bersama atau setelah makan.',
	Seretide:
		'- Lepaskan tutup inhaler dosis terukur, lalu pegang perangkat ini dalam posisi tegak.\n- Masukkan inhaler melalui mulut (diantara gigi atas dan bawah), kemudian tutup mulut dengan merapatkan bibir (jangan digigit).\n- Tekan inhaler secara cepat untuk melepaskan obat, sembari menarik napas.\n- Tarik napas perlahan selama 3 hingga 5 detik.\n- Tahan napas selama 10 detik untuk memungkinkan obat masuk jauh ke dalam paru-paru kamu.\n- Buang napas perlahan. Jika membutuhkan semprotan berikutnya, tunggu sampai 30 detik, dan kocok kembali inhaler.\n- Gunakan sesuai dosis yang telah diberikan\n- Bersihkan mouthpiece inhaler menggunakan tisu atau kain kering.\n- Tutup kembali mulut inhaler dan simpan di tempat yang kering.',
	'Trelegy Ellipta': 'Dapat dihirup pada saat pagi hari',
	'Spriva Respimat': 'Dapat dihirup pada saat gejala muncul',
	'Erythromycin ': 'Dapat dikonsumsi 30 menit sebelum makan atau 1 jam setelah makan',
	'Proris Sirup':
		'Proris suspensi\nKocok terlebih dahulu botol sebelum mengonsumsi obat ini dan gunakanlah gelas takar yang telah disediakan dalam kemasan. Obat ini harus dikonsumsi setelah makan',
	'Promedex Sirup':
		'Dapat dikonsumsi sebelum atau setelah makan. Kocok terlebih dahulu botol obat promedex sirup dan tuangkan ke sendok dengan takaran yang telah ditentukan',
	Entrostop: 'Obat ini biasanya dikonsumsi setelah buang air besar, baik sebelum atau sesudah makan',
	Diapet: 'Diapet biasanya dapat dikonsumsi sebelum atau sesudah makan',
	Imodium: 'Imodium digunakan setelah BAB cair',
	'Polysilane Suspensi': 'Dikonsumsi sebelum makan atau 1-2 jam setelah makan dan menjelang tidur',
	'Promag Suspensi':
		'Perlu dikocok sebelum digunakan. Promag Suspensi biasanya dikonsumsi saat timbul gejala, 1 – 2 jam sebelum atau setelah makan atau sebelum tidur',
	Omeprazole: 'Dapat dikonsumsi sebelum sarapan pagi',
	'Promag suspensi':
		'Perlu dikocok sebelum digunakan. Promag Suspensi biasanya dikonsumsi saat timbul gejala, 1 – 2 jam sebelum atau setelah makan atau sebelum tidur',
	Ranitidine: 'Dapat dikonsumsi sebelum atau sesudah makan',
	Dulcolax: 'Dapat dikonsumsi sebelum tidur',
	Laxatab: 'Dapat dikonsumsi sebelum tidur',
	Lactulax:
		'Dapat dikonsumsi sebelum atau sesudah makan. Namun, disarankan untuk mengonsumsinya bersamaan dengan makanan untuk mengurangi ketidak-nyamanan pencernaan.',
	Ambeven: 'Dapat dikonsumsi setelah makan',
	'Ardium 500': 'Dapat dikonsumsi bersamaan dengan makan',
	'Nutrafor Wazzir': 'Dikonsumsi pada saat pagi dan malam hari',
	'Lanpracid Kapsul': 'Dapat dikonsumsi 30 menit sebelum sarapan',
	'Grafazol Kaplet': 'Dapat dikonsumsi sesudah makan',
	Floxigra: 'Sebaiknya dikonsumsi pada saat makan untuk mencegah timbulnya sakit maag',
	'Flagyl Forte': 'Dapat dikonsumsi setelah makan',
	Metronidazole: 'Dapat dikonsumsi sesudah makan',
	Duspatalin: 'Dikonsumsi 20 menit sebelum makan',
};

const deskripsiObat = {
	'Bodrex Migra':
		'Bodrex migra merupakan obat kaplet yang mengandung paracetamol, propyphenazone, dan kafein yang dapat digunakan untuk meringankan sakit kepala. Kandungan dari obat ini juga dapat digunakan untuk meredakan sakit ringan hingga sedang hingga menurunkan demam. Obat ini akan bekerja pada pusat pengontrol suhu tubuh di bagian otak dan mengurangi produksi prostaglandin, sehingga dapat menurunkan suhu tubuh saat demam dan meredakan nyeri. Obat ini dapat dibeli pada apotek-apotek terdekat. Namun, obat ini masih belum diproduksi secara teerbatas',
	'Panadol Extra':
		'Panadol extra merupakan varian lain dari panadol yang dapat digunakan untuk meringankan penyakit kepala, sakit gigi, nyeri otot, serta menurunkan demam. Obat ini mengandung paracetamol yang dapat menghambat pembentukan zat yang memicu nyeri dan demam pada bagian hipotalamus untuk meningkatkan pelepasan panas agar suhu tubuh kembali menjadi normal. Selain itu, obat ini juga mengandung kafein yang berfungsi untuk mencegah terjadinya rasa kantuk dan mengurangi rasa nyeri. Obat ini berbentuk kaplet dan dapat ditemukan dan dibeli di apotek-apotek terdekat',
	'Farsifen Plus':
		'Farsifen plus merupakan salah satu jenis varian farsifen yang memiliki 3 kandungan berbeda, yakni paracetamol, ibuprofen dan kafein yang dapat meningkatkan efektivitas dari paracetamol dan ibuprofen yang dapat meredakan nyeri pada tubuh. Obat ini biasanya menjadi opsi pilihan yang dapat dikonsumsi untuk mengatasi nyeri yang tidak dapat teratasi oleh 2 varian lainnya, yakni farsifen kaplet dan forte. Obat ini berbentuk kaplet dan dijual sebagai obat bebas terbatas.',
	Paracetamol:
		'Paracetamol atau dapat dikenal sebagai asetaminofen merupakan obat yang dapat digunakan untuk meringankan berbagai penyakit, seperti sakit kepala, migrain, sakit gigi, sakit nyeri pada punggung, radang sendi, dan menurunkan demam. Paracetamol bekerja pada pusat pengatur suhu pada bagian hipotalamus untuk menurunkan suhu tubuh (antipiretik) pada pasien dan menghambat sintesis prostaglandin sehingga dapat mengurangi nyeri ringan hingga sedang. Dalam pengobatan barotraume, paracetamol digunakan sebagai obat sekunder yang hanya meredakan nyeri saja',
	Ibuprofen:
		'Ibuprofen merupakan obat pereda nyeri non steroid (NSAID) yang umum digunakan untuk mengurangi berbagai rasa sakit, seperti peradangan, demam, migrain, sakit kepala, sakit gigi, sakit punggung, radang sendi, meringankan gejala flu, pilek, hingga nyeri karena terkilir. Obat ini bekerja dengan cara menghambat enzim cyclooxygenase (COX) yang terlibat dalam sintesis prostaglandin yang merupakan senyawa yang dapat memicu peradangan dan rasa sakit.',
	Amoxicillin:
		'Amoxicillin merupakan sebuah obat antibiotik golongan penisilin yangg dapat mengatasi berbagai penyakit yang disebabkan oleh infeksi bakteri, seperti pneumonia, bronkitis, tonsolltis, infeksi pada telinga, infeksi pada hidung, infeksi pada tenggorokan, infeksi pada saluran kemih, dan infeksi pada kulit. Obat ini bekerja dengan cara menghentikan pertumbuhan bakteri berbahaya yang ada di dalam tubuh. Meskipun obat ini mampu mengatasi berbagai jenis penyakit infeksi, nyatanya obat ini tidak mampu menangani beberapa penyakit yang disebabkan oleh infeksi virus, seperti flu atau mononukleosis. Obat ini dapat digunakan oleh anak-anak dan orang dewasa sesuai dengan anjuran yang diberikan oleh dokter. Obat ini memiliki beberapa efek samping yang paling umum dialami, seperti mual, muntah, sakit kepala, diare, ruam, dan perubahan rasa pada lidah. Selain itu, jika penderita mengalami efek samping yang sudah tidak biasa, seperti mudah memar pada kulit, nyeri otot dan sendi, diare yang tidak membaik, mengalami kram perut, demam dan sakit tenggorokan yang tidak membaik, kulit atau bagian putih mata yang mulai menguning hingga urine bewarna gelap, maka harus segera melakukan konsultasi ke dokter untuk mendapatkan perawatan lebih lanjut',
	'Iliadin Nasal Spray':
		'Iliadin merupakan obat yang mengandung oxymetazoline yang dapat meringankan gejala hidung tersumbat yang dapat disebabkan oleh flu, alergi pada saluran pernapasan bagian atas, batuk pilek, atau sinusitis. Kandungan oxymetazoline dalam obat ini akan bekerja dengan cara mengecilkan pembuluh darah yang membengkak pada rongga hidung, sehingga rongga hidung menjadi lebih lega. Obat ini dapat ditemukan secara bebas di apotek-apotek tanpa perlu menggunakan resep dari dokter. Obat ini tersedia dalam 2 bentuk, yakni bentuk tetes 10 ml yang mengandung 0.25 mg oxymetazole untuk setiap 1ml dan bentuk spray 10 ml yang mengandung 0.5 oxymetazole untuk setiap 1 ml',
	'Breathy Nasal Drops':
		'Breathy Tetes Hidung merupakan obat tetes yang mengandung natrium klorida yang bermanfaat untuk meringankan peradangan pada lapisan dalam hidung akibat sinusitis. Obat ini bekerja dengan cara melembapkan membran dan saluran hidung yang mengalami peradangan yang dapat disebabkan oleh pilek, iritasi, dan alergi. Obat ini dapat digunakan oleh anak-anak yang berusia di atas 1 bulan hingga orang dewasa dengan cara pemakaiannya yang mudah, yakni cukup dengan meneteskan 1 - 2 tetes Breathy Tetes Hidung ke masing-masing lubang hidung. Setelah menggunakan obat ini, disarankan untuk tidak diberikan kepada pasien lain untuk mencegah terjadinya penyebaran infeksi',
	'Betahistine Mesylate':
		'Betahistine atau betahistine mesylate merupakan jenis obat yang biasanya digunakan untuk meredakan atau mengatasi vertigo, gangguan pendengaran, dan tinnitus (telinga berdenging) yang disebabakan oleh penyakit Meniere. Obat ini bekerja dengan cara mengurangi dan meningkatkan tekanan aliran darah pada telinga. Sehingga berbagai gejala peningkatan tekanan pada area telinga yang disebabkan oleh penyakit Meniere dapat mereda',
	Betaserc:
		'Betaserc merupakan obat tablet yang mengandung betahistine yang dapat dikonsumsi untuk meredakan beberapa penyakit pada area kepala, seperti vertigo, tinitus, dan gangguan pendengaran yang timbul akibat penyakit meniere. Obat ini mengandung betahistine yang dapat bekerja dengan cara mengurangi tekanan yang berlebihan dan cairan yang menumpuk pada telinga bagian dalam. Sehingga dapat mengurangi penyakit vertigo. Obat ini tersedia dalam 2 jenis varian berbeda yang dapat dikonsumsi oleh pasien, yakni varian 8 mg dan 24 mg',
	'Mertigo SR':
		'Mertigo SR merupakan sebuah obat yang memiliki kandungan zat aktif Betahistin mestilat yang dapat digunakan untuk menghilangkan rasa pusing akibat gangguan terhadap keseimbangan atau vertigo, telinga berdengung tanpa rangsangan dari luar atau dalam, dan pendengaran yang menurun. Kandungan dalam obat ini bekerja sebagai agonis reseptor histamin H1 yang akan bekerja pada bagian dalam dari telinga agar terjadi efek vasodilatasi dan meningkatkan permeabilitas pembuluh darah dan berakibat pada berkurangnya gejala vertigo dan gangguan keseimbangan. Obat ini memiliki beberapa efek samping, antara lain mual, muntah, terjadi ruam pada kulit, sakit kepala, pruriuts (gatal pada kulit), gangguan pencernaan, perut terasa sakit, dan kembung.',
	'Clopidogrel Bisulfate':
		'Clopideogrel Bisulfate merupakan obat golongan antiplatet yang dapat digunakan untuk menurunkan resiko terjadinya stroke atau serangan jantung. Obat ini mengandung clopideogrel yang dapat mencegah trombosit saling menempel satu sama lain sehingga tidak membentuk gumpalan darah yang dapat menyebabkan aliran darah menjadi terhambat. Obat ini dapat digunakan bagi orang yang sudah pernah terkena penyakit stroke atau serangan jantung  ataupun juga dapat digunakan pada pasien yang baru mengalaminya. Untuk mengonsumsi obat ini, pasien harus melakukan konsultasi terlebih dahulu kepada pasien agar pasien mendapatkan resep dokter yang berisikan dosis dan aturan pakai yang benar',
	Cholestor:
		'Cholestor merupakan obat dislipidemik yang dapat digunakan untuk mencegah terjadinya penyakit jantung dan stroke. Obat ini mengandung atorvastatin yang dapat menjaga keseimbangan antara kolestrol baik dan jahat yang ada di dalam darah dengan menurunkan kolestrol jahat dan meningkatkan kolestrol baik. Pengobatan ini harus diiringi dengan gaya hidup yang sehat, seperti berolahraga, mengatur pola makan, menjaga berat badan ideal, dan berhenti merokok',
	Pradaxa:
		'Pradaxa merupakan obat yang digunakan untuk mencegah beberapa penyakit, seperti stroke, mengatasi detak jantung tidak teratur (aritmia), penggumpalan darah di pembuluh darah bagian vena dalam, dan penyumbatan darah dalam paru-paru. Obat ini mengandung dabigatran eteksilat yang dapat menghambat enzim trombin yang berperan dalam proses pembentukan gumpalan darah yang dapat menyebabkan komplikasi serius. Obat ini hanya tersedia dalam bentuk kapsul yang hanya bisa didapatkan melalui resep dari dokter. Obat ini tersedia dalam 2 varian berbeda, yakni pradaxa 110 mg  dan pradaxa 150 mg',
	'Ciprofloxacin Tablet':
		'Ciprofloxacin adalah obat golongan antibiotik yang bisa membantu mengatasi berbagai penyakit akibat infeksi bakteri, termasuk penyakit usus buntu. Untuk meningkatkan efektivitasnya sebagai obat usus buntu, Ciprofloxacin perlu digabungkan dengan obat yang mengandung metronidazole. Obat ini dapat dibeli dengan resep dokter.',
	Dexamethasone:
		'Dexamethasone merupakan obat golongan kortikosteroid yang dapat digunakan untuk meredakan beberapa kondisi yang menyebabkan peradangan, seperti reaksi alergi, penyakit autoimun, radang sendi, dan pengobatan multiple myeloma. Obat ini bekerja dengan cara menghambat respons dari sistem kekebalan tubuh yang berlebih yang dapat memicu terjadinya peradangan. Obat ini tersedia dalam beberapa bentuk, seperti tablet, kaplet, sirup, dan suntikan. Obat ini hanya bisa didapatkan melalui konsultasi dan resep yang telah dibuat oleh dokter.',
	'Zovirax Tablet':
		'Zovirax tablet merupakan salah satu jenis varian yang disediakan oleh zovirax dalam bentuk tablet. Obat ini tergolong ke dlaam obat antivirus yang dapat menangani beberapa penyakit yang disebabkan oleh virus, seperti cacar air, infeksi virus herpes simplex, hingga cacar api. Selain digunakan untuk mengobati, obat ini juga dapat digunakan untuk mengurangi rasa sakit atau gatal yang disebabkan oleh infeksi virus serta dapat mengurangi resiko penyebaran virus pada tubuh.',
	Tegretol:
		'Tegretol merupakan obat antikonvulsan yang dapat digunakan untuk mengobati berbagai penyakit, seperti kejang pada epilepsi, gangguan bipolar, neuropati (kerusakan saraf) yang disebabkan oleh penyakit diabetes melitus, dan nyeri saraf. Obat ini mengandung carbamazepine yang bekerja dengan cara mengurangi aktivitas listrik (impuls saraf) yang berlebihan di bagian otak yang dapat menjadi pemicu kejang dan nyeri. Dalam menangani penyakit trigeminal neuralgia dan glossopharyngeal neuralgia, obat ini bekerja dengan cara menghambat sinyal rasa nyeri di jalur yang menuju ke otak. Sehingga nyeri pada wajah, tenggorokan, lidah atau telinga dapat mereda. Obat ini tersedia dalam 2 varian berbeda, yakni Tegretol 200 mg dan Tegretol CR yang bisa didapatkan hanya melalui resep yang diberikan oleh dokter',
	Bamgetol:
		'Bamgetol merupakan obat antikonvulsan dan antimania yang dapat mengatasi dan mencegah kambuhnya kejang ada penderita epilepsi dan dapat juga digunakan untuk mengurangi nyeri pada bagian wajah yang timbul akibat gangguan saraf trigeminal (trigeminal neuralgia). Obat ini mengandung 200 mg carbamazepine yang dapat menstabilkan aktivitas listrik pada otak dan sistem saraf. Obat ini tersedia dalam bentuk tablet yang hanya bisa didapatkan melalui konsultasi dengan dokter atau tenaga medis',
	Lioresal:
		'Lioresal merupakan obat minum berbentuk tablet yang dapat digunakan untuk meredakan keluhan nyeri, kram, dan kaku pada otot yang terjadi akibat beberapa kondisi, seperti multiple sclerosis, cedera, penyakit tulang belakang, dan cerebal paisy. Obat ini mengandung baclofen 10 mg yang bekerja langsung pada sistem saraf pusat untuk mengatur gerakan otot. Dengan begitu, nyeri kram pada otot akan berkurang dan otot menjadi lebih rileks. Obat ini juga dapat mempermudah pasien dalam menjalani fisioterapi. Obat ini tergolong ke dalam obat keras yang hanya bisa didapatkan melalui proses konsultasi dengan dokter.',
	Rogaine:
		'Rogaine merupakan produk perawatan rambut yang dapat digunakan untuk menangani kebotakan pada pria dan wanita. Obat ini memiliki kandungan minoxidil yang dapat melebarkan pembuluh darah pada bagian kulit kepala, sehingga meningkatkan fungsi dan pertumbuhan folikel rambut secara keseluruhan. Obat ini hanya membuat dapat mencegah terjadinya kebotakan bukan sebagai opsi untuk menumbuhkan rambut secara permanen. Produk ini memiliki 2 jenis varian yang dapat diguanakn, yakni rogaine larutan dan rogaine larutan busa',
	'Regrou Forte':
		'Regrou forte merupakan obat berbentuk cairan yang dapat merangsang pertumbuhan rambut dan mencegah terjadinya kebotakan. Obat ini mengandung minoxidil yang bekerja degan cara melebarkan pembuluh darah pada bagian kulit kepala, sehingga aliran darah yang menuju ke kepala menjadi lebih lancar. Obat ini hanya tersedia dalam kemasan 30 ml yang setiap ml dari larutan tersebut mengandung 50 mg minoxidil. Obat ini dapat ditemukan di apotek dengan resep dokter',
	Finasteride:
		'Finansteride merupakan obat minum yang dapat mengatasi penyakit kebotakan yang disebabkan oleh androgenetic alopecia dan mengatasi pembesaran prostat jinak (Benign Prostate Hyperplasia / BPH) pada pria dewasa. Bagi penderita BPH obat ini akan bekerja dengan cara mengecilkan ukuran kelenjar prostat yang membesar, sehingga penderita dapat buang air kecil dengan mudah. Sementara itu, untuk penderita kebotakan, obat ini dapat meningkatkan pertumbuhan rambut pada bagian kepala yang mengalami kebotakan. ',
	'Amoxsan Tablet':
		'Amoxsan merupakan jenis obat antibiotik yang dapat digunakan untuk mengatasi infeksi pada saluran pernafasan atas, infeksi saluran kemih, saluran pencernaan, kulit, jaringan lunak, dan demam tifoid yang terjadi pada anak. Obat ini mengandung amoxicillin yang tergolong dalam obat penisilin yang memiliki sifat bakteriolitik yang bekerja dengan cara menghambat sintesis dinding sel bakteri dengan memutus rantai polimer peptidoglikan agar tidak terbentuk. Obat ini hanya bisa didapatkan melalui resep yang diberikan oleh dokter',
	'Cefixime Trihydrate':
		'Cefixime merupakan antibiotik golongan sefalosporin yang dapat mengobati berbagai jenis infeksi bakteri, seperti radang THT, gonore, pneumonia, infeksi saluran pernapasan, infeksi tenggorokan, infeksi telinga, infeksi saluran kemih, infeksi menular seksual, amandel, kulit, darah, sumsum tulang, hingga infeksi pasca melahirkan. Obat ini bekerja dengan cara menghambat pembentukan dinding sel bakteri yang sangat dibutuhkan oleh bakteri untuk bertahan hidup. Obat ini hanya bekerja pada penyakit yang timbul akibat bakteri, sehingga obat ini tidak dapat digunakan untuk mengatasi penyakit yang disebabkan oleh virus, seperti flu dan pilek. Obat ini hanya bisa didapatkan melalui resep dokter saja dan obat ini tersedia dalam beberapa varian, seperti kapsul, tablet, kaplet, dan sirup',
	'Akilen Tetes Telinga':
		'Akilen tetes telinga merupakan obat tetes telinga yang mengandung antibiotik ofloxacin yang dapat menangani infeksi bakteri yang terjadi pada bagian telinga, seperti otitis media, otitis media akut hingga otitis eksterna. Kandungan ofloxacin dalam obat ini akan menghambat pembentukan DNA girase yang berperan dalam pertumbuhan bakteri. Untuk mendapatkan obat ini, pasien harus melakukan konsultasi terlebih dahulu kepada dokter, karena tidak semua penyakit pada bagian telinga dapat diatasi dengan menggunakan obat ini',
	'Forotic Tetes Telinga':
		'Forotic tetes telinga merupakan obat tetes yang dapat mengobati berbagai penyakit yang berkiatan dengan telinga, seperti otitis media, otitis eksterna, hingga gendang telinga yang pecah. Obat ini mengandung antibiotik ofloxacin yang dapat menghambat pertumbuhan enzim DNA girase dan topoisomerase pada inti sel bakteri. Penggunaan dari obat ini harus berada secara langsung di bawah pengawasan dokter',
	'Erlamycetin Tetes Telinga':
		'Erlamycetin tetes telinga merupakan obat tetes telinga yang dapat mengatasi infeksi yang terjadi pada saluran telinga luar yang disebabkan oleh bakteri, seperti gatal, nyeri pada saluran telinga, dan telinga berair. Obat ini mengandung chloramphenicol yang dapat menghambat hingga menghalangi pembentukan protein yang dibutuhkan oleh bakteri untuk bertahan hidup pada dinding sel. Obat ini juga dapat digunakan bagi penderita kolesteatoma untuk mengatasi infeksi yang berlanjut',
	'Alat Bantu Pendengaran':
		'Alat bantu pendengaran merupakan sebuah perangkat elektronik yang dirancang untuk membantu para pasien yang mengalami gangguan pendengaran. Alat bantu ini dapat mengembalikkan pendengaran para penderitanya seperti sedia kala dengan cara yang mudah, yakni dengan menempelkan alat ini pada bagian telinga dan mengatur kekuatan frekuensi penerimaan gelombang suara. Dalam alat ini, terdapat 3 komponen yang digunakan, antara lain microphone, aplifier dan speaker dimana masing-masing komponen memiliki tugas dan fungsinya. Microphone akan menerima gelombang suara dan mengubahnya menjadi sinya elektrik yang kemudian dikirimkan kepada amplifier. Setelah sinyal diterima oleh amplifier, amplifier akan meningkatkan kekuatan dari sinyal tersebut ke telinga melalui speaker yang ada pada perangkat. Untuk mendapatkan alat bantu pendengaran ini, pasien harus melakukan konsultasi terlebih dahulu kepada dokter agar mendapatkan alat bantu pendengaran yang sesuai dengan masalah yang dialami',
	Stapedektomi:
		'Stepadektomi merupakan prosedur operasi yang dilakukan bagi penderita gangguan pendengaran yang disebabkan oleh otosklerosis. Dalam operasi ini, dokter akan mengangkat tulang stapes (tulang sanggurdi) pasien dan menggantikannya dengan prostesis (tulang stapes tiruan) dengan tujuan agar gelombang suara dapat masuk kembali ke telinga bagian dalam yang ditransmisikan melalui gendang telinga',
	'Cochlear Implant':
		'Cochlear implant merupakan salah satu prosedur operasi yang akan memasangkan sebuah alat elektronik pada bagian telinga dan kepala agar para penderita gangguan pendengaran dapat kembali mendengar dengan normal. Cochlear impant dapat dijadikan sebagai opsi bagi penderita gangguan pendengaran yang sudah berada di level yang parah. Struktur dari alat ini sama seperti alat bantu pendengaran pada umumnya, dengan memiliki microphone untuk menangkap suara, processor yang berperan sebagai amplifier untuk mengatur volume suara yang ditangkap, dan transmitter yang berperan sebagai speaker untuk menerima dan memproses suara. Namun, dalam cochlear implant terdapat 2 komponen tambahan yang digunakan yakni electrodes dan receiver yang berfungsi untuk menerima sinyal yang diberikan oleh transmitter',
	'Cendo Floxa':
		'Cendo floxa tetes mata merupakan obat antibiotik quinole yang dapat digunakan untuk mengobati infeksi yang terjadi pada bagian mata, seperti konjungtivitis dan ulkus kornea. Obat ini mengandung ofloxacin yang bekerca dengan cara menghambat pembentukan dan pertumbuhan bakteri DNA. Obat ini tersedia dalam 2 varian berbeda, yakni cendo floxa tetes mata 5 ml dan cendo floxa minidose 0,6 ml',
	'Erlamycetin Tetes Mata':
		'Erlamycetin tetes mata merupakan obat tetes mata yang mengandung chloramphenicol yang dapat mengobati infeksi yang terjadi pada mata, seperti konjungtivitas bakterial. Kandungan dari obat ini akan menghambat pembentukan protein yang dibutuhkan oleh bakteri untuk berkembang biak dan bertahan hidup. Obat ini tersedia dalam 2 jenis varian, yakni varian 5 ml dan varian 10 ml. Obat ini hanya bisa didapatkan melalui resep yang diberikan oleh dokter',
	'Polidemisine Eye Drop':
		'Polidemisin merupakan antibiotik yang dapat digunakan untuk meredakan beberapa penyakit mata, seperti mata merah, perih, berair, dan mata bengkak akibat infeksi yang disebabkan oleh bakteri. Obat ini mengandung polymyxin B sulfate, neomycin, dan dexamethasone yang dapat menghentikan pertumbuhan dan membunuh bakteri yang menjadi penyebab infeksi mata. Obat ini tergolong ke dalam obat resep yang hanya didapatkan melalui konsultasi dengan dokter',
	'Zovirax Cream':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti kulit terasa seperti terbakar atau tersengat, kelit menjadi kering dan mengelupas, muncul sisik pada kulit yang terasa gatal, kulit menjadi kemerahan',
	'Acyclovir Tablet':
		'Acyclovir merupakan antivirus yang dapat digunakan untuk mengobati berberapa penyakit yang disebabkan oleh virus herpes simpleks, herpes zoster, herpes genital, cacar air, hingga cacar air. Obat ini mengandung acyclovir yang dapat menghambat pembentukan materi genetik virus sehingga mengganggu pembentukan materi genetik virus. Obat ini tidak mampu mematikan virus penyebab penyakit secara menyeluruh. Namun, onat ini dapat digunakan untuk mengurangi resiko penyebaran virus serta menjaga tubuh agar tidak mudah terinfeksi dengan virus. Obat ini dapat dikonsumsi oleh anak-anak maupun orang dewasa. Namun, tetap harus berada di bawah pengawasan dokter',
	'Valacyclovir HCL':
		'Valacyclovir merupakan obat antivirus yang dapat mengobati penyakit infeksi yang disebabkan oleh virus herpes, seperti herpes simplex / herpes labialis (herpes yang terjadi di sekitar area bibir), herpes genital, dan herpes zoster. Selain itu obat ini dapat digunakan sebagai pencegah infeksi cytomegalovirus. Kandungan dalam obat ini bekerja dengan cara menghambat pertumbuhan virus penyabab infeksi. Obat ini memiliki beberapa kelebihan, seperti meredakan gejala yang muncul, mempercepat penyembuhan, mencegah kambuhnya infeksi virus dan menurunkan resiko penularan virus ke orang lain. Namun, obat ini tidak dapat menghilangkan seluruh virus yang ada dalam tubuh bahkan obat ini juga tidak dapat mencegah penularan virus tersebut',
	'Vfend Voriconazole':
		'Vfend merupakan obat antijamur yang dapat digunakan untuk mengobati beberapa infeksi yang disebabkan oleh jamur, seperti aspergilosis invasif, keraritis jamur, candidemia pada pasien non neutropenia, candida invasif, candida esofagus, dan infeksi jamur yang disebabkan oleh scedosporium apiospermum dan fusarium spp (termasuk fusarium solani). Kandungan voriconazole dalam obat ini dapat menghambat pembentukan dan pertumbuhan dari membran sel jamur. Obat ini hanya bisa didapatkan melalui resep yang diberikan oleh dokter dengan cara berkonsultasi',
	'Cendo Natacen':
		'Cendo natacen merupakan obat tetes mata yang mengandung natamycin yang dapat digunakan untuk mengobati infeksi mata, seperti konjungtivitis, biefaritis, dan keratitis yang disebabkan oleh jamur. Kandungan dalam obat ini bekerja dengan cara menghentikan laju pertumbuhan jamur pada bagian mata. Obat ini tersedia dalam 2 varian berbeda, yakni cendo natecan tetes mata minidose 0,6 ml dan cendo natecan tetes mata 15 ml. Obat ini tidak dapat digunakan untuk mengobati penyakit mata yang bukan disebabkan oleh infeksi jamur.',
	'Cendo Xitrol':
		'Cendo xitrol eye drop merupakan obat tetes mata yang dapat digunakan untuk mengobati infeksi pada mata yang disertai dengan peradangan. Obat memiliki kandungan Polymyxin B sulfate, neomycin sulfate, dexamethasone yang bekerja dengan cara membunuh serta menghambat pertumbuhan bakteri dan meredakan peradangan. Obat ini hanya bisa didapatkan melalui proses konsultasi dengan dokter',
	'Erlamycetin Salep Mata':
		'Erlamycetin salep mata merupakan varian lain dari obat erlamycetin yang dapat digunakan sebagai antibiotik untuk menangani infeksi bakteri yang terjadi pada bagian mata (konjungtivitis bakterial) dan keluhan lainnya, seperti mata merah, gatal, belekan, hingga sensitif terhadap cahaya. Kandungan chloramphenicol pada obat ini akan mengganggu pembentukan protein yang dibutuhkan oleh bakteri untuk berkembang biak dan bertahan hidup. Obat ini merupakan obat yang ampuh digunakan untuk kondisi mata yang mengalami infeksi lebih berat dari biasanya dan obat ini hanya bisa didapatkan setelah pasien melakukan konsultasi dengan dokter',
	'Cardio Aspirin':
		'Aspirin merupakan salah satu jenis obat yang dapat digunakan untuk meredakan nyeri, demam, dan peradangan. Dalam kondisi penyakit migrain, aspirin digunakan untuk mengurangi gejala yang dirasakan oleh pasien baik migrain ringan maupun migrain yang cukup parah. Selain membantuk pasien dalam mengobati beberapa penyakit tersebut, aspirin juga dapat digunakan untuk menurunkan risiko terjadinya serangan jantung atau stroke pada pasien yang terkena penyakit kardiovaskular. Obat ini dapat dijumpai dan dibeli di apotek terdekat. Namun, dokter tidak menganjurkan kepada para pasien yang berada di bawah 18 tahun untuk mengkonsumsi obat tersebut. Selain itu, obat ini juga tidak dianjurkan bagi para pasien yang memiliki beberapa riwayat kesehatan, seperti memiliki gangguan darah, tekanan darah tinggi, asma, dan gangguan ginjal.',
	Farnormin:
		'Farnormin merupakan salah satu obat yang termasuk ke dalam beta bloker yang dapat digunakan untuk menangani nyeri pada bagian dada, menurunkan tekanan darah pada penderita hipertensi (tekanan darah tinggi), mencegah stroke, serangan jantung, hingga gangguan pada ginjal. Obat ini bekerja dengan cara menghambat hormon epinefrin yang dapat meningkatkan tekanan darah, sehingga pembuluh darah menjadi lebih rileks dan membuat darah dapat mengalir lebih mudah.',
	Triatec:
		'Triatec merupakan obat minum yang digunakan untuk mengobati beberapa penyakit, seperti tekanan darah tinggi (hipertensi), mencegah stroke, serangan jantung, gagal jantung, hingga masalah pada ginjal yang diakibatkan oleh tekanan darah yang tinggi. Obat ini memiliki kandungan ramipril yang dapat merelaksasikan pembuluh darah pada bagian otak, jantung dan ginjal yang dapat membuat aliran darah lebih mudah untuk mengalir. Dengan relaksasinya pembuluh darah tersebut, resiko stroke, serangan jantung, serta gagal ginjal dapat berkurang. Obat ini tersedia dalam 2 varian berbeda, yakni triatec 2,5 mg yang mengandung 2,5 mg ramipril dan triatec 5 mg yang mengandung 5 mg ramipril. Obat ini tidak diperjual belikan secara bebas tanpa adanya resep dari dokter',
	Concor:
		'Connor merupakan salah satu obat antihipertensi yang dapat menurunkan tekanan darah tinggi (hipertensi) pada pasien. Selain itu, obat ini juga dapat digunakan sebagai opsi pilihan obat untuk mengatasi penyakit agina pektoris dan gagal jantung. Kandungan bisoprolol dalam obat ini bekerja dengan cara mempengaruhi impuls saraf pada bagian tertentu, dimana salah satunya adalah bagian jantung sehingga jantung akan berdetak lebih lambat dan tekanan darah menurun. Obat ini tersedia dalam beberapa varian, antara lain 1,25 mg, 2,5 mg, dan 10 mg tablet yang bisa didapatkan melalui resep dari dokter',
	Spironolactone:
		'Spironolactone merupakan obat kategori diuretik hemat kalium yang digunakan untuk mengatasi beberapa penyakit, seperti gagal jantung, hipertensi dan edema yang diakibatkan oleh sirosis. Namun, jika pasien sedang mengalami penyakit ginjal, maka obat ini harus dikonsumsi secara hati-hati, karena obat ini dapat meningkatkan produksi urine yang dapat membuat pasien akan lebih sering ke kamar mandi. Kandungan spironolactone dalam obat ini bekerja dengan cara menghambat penyerapan garam (natrium) dan air yang berlebihan dalam tubuh, serta menjaga agar kadar kalium dalam darah tidak terlalu rendah. Obat ini tergolong dalam obat resep yang hanya bisa didapatkan melalui konsultasi dengan dokter',
	Rifampicin:
		'Rifampicin merupakan obat antibiotik yang digunakan untuk mengobati dan mencegah beberapa penyakit yang disebabkan oleh infeksi bakteri, seperti tuberculosis, kusta, meningitis, legionnaires, brucellosis, dan infeksi stafilokokus aureus yang berat. Obat ini mengandung rifampicin yang dapat membunuh bakteri-bakteri yang menjadi penyebab infeksi. Obat ini juga dapat digunakan sebagai obat terapi untuk lepra dan tuberculosis (TBC), seperti TB paru, TB osteomielitis, maupun TB spondilitis',
	'Nitrokaf Retard':
		'Nitrokaf refard merupakan obat vasodilator golongan nitrat yang dapat mencegah dan mengurangi terjadinya serangan angina pectoris atau nyeri dada pada penderita penyakit jantung koroner. Obat ini hanya dapat mencegah serangan angina pectoris, tetapi tidak dapat digunakan untuk meredakan serangan angina pectoris yang sedang terjadi. Obat ini mengandung nitogliserin yang dapat melebarkan pembuluh darah dan meningkatkan aliran darah ke jantung. Dengan cara kerja ini, otot jantung akan menerima suplai oksigen dan meringankan kerja jantung dalam memompa darah',
	'Amlodipine Besylate':
		'Amlodipine besylate merupakan obat minum golongan calcium channel blocker (penghambat saluran kalsium) yang digunakan untuk menurunkan tekanan darah pada penderita hipertensi dan membantu untuk melebarkan pembuluh darah. Obat ini juga efektif untuk digunakan dalam mencegah dan mengurangi nyeri dada (angina) yang disebabkan oleh penyakit jantung. Kandungan amlodipine dalam obat ini akan melemaskan otot pembuluh darah, sehingga pembuluh darah akan melebar dan darah dapat mengalir dengan lebih lancar dan tekanan darah dapat menurun. Obat ini tergolong dalam obat keras yang bisa didapatkan melalui resep dokter',
	'Simarc 2':
		'Simarc 2 merupakan golongan obat antikoagulan yang dapat mengencerkan darah yang beku, dimana pembekuan darah merupakan hal yang sangat berbahaya dan dapat mengancam nyawa seseorang. Obat ini mengandung warfarin yang dapat membantu mengurangi efek dari viramin K yang menjadi penyebab terjadinya pembentukan darah beku pada pembuluh darah atau arteri. Obat ini umumnya dapat digunakan untuk mengurangi resiko terjadinya penyakit stroke, serangan jantung, hingga kondisi serius lainnya. Obat ini hanya bisa didapatkan melalui resep yang diberikan oleh dokter melalui proses konsultasi',
	Lasix:
		'Lansix merupakan obat diuretik yang dapat diguanakn untuk mengatasi penumpukan cairan di dalam jaringan tubuh (edema) yang disebabkan oleh hopertensi, penyakit jantung, liver, atau ginjal. Obat ini juga dapat menangani penyakit lain, seperti penumpukan pada jaringan parut di bagian hati (sirosis), gagal jantung, dan hipertensi. Lansix memiliki kandungan furosemide yang dapat meningkatkan produksi dan aliran urine. Dengan meningkatnya produksi urine tersebut, penumpukan cairan yang terjadi di dalam tubuh akan ikut keluar dan menurunkan tekanan darah. Lansix tersedia dalam 2 varian berbeda, yakni lansix tablet yang mengandung 40 mg furosemide dan lansix suntik yang mengandung 10 mg furosemide, Obat ini hanya bisa didapatkan melalui resep yang diberikan oleh dokter melalui proses konsultasi',
	Rifastar:
		'Rifastar merupakan obat anti tuberkulosis yang dapat mengobati penyakit tiberculosis (TBC) yang disebabkan oleh infeksi dari bakteri Mycobacterium tubercolosis. Obat ini juga dapat digunakan untuk mengobati infeksi bakteri mycobacterium yang lain, speerti Mycobacterium kansasii dan Mycobacterium xenopi. Obat ini hanya tersedia dalam bentuk tablet yang hanya bisa didapatkan melalui proses konsultasi dengan dokter',
	Isoniazid:
		'Isoniazid merupakan golongan obat antibiotik yang dapat digunakan untuk mengobati penyakit tuberculosis (TBC). Obat ini bekerja dengan cara menghambat enzim yang berperan dalam proses pembentukan dinding sel bakteri mycobacterium tuberculosis. Obat ini juga dapat digunakan sebagai obat terapi bagi TB paru, TB osteomyelitis, dan TB spondylitis. Pengobatan dengan menggunakan isoniazid, sangat diperuntukkan untuk penderita TB laten dengan usia di bawah 5 tahun atau pasien dengan penyakit infeksi HIV',
	'Ventolin Inhaler':
		'Ventolin inhaler merupakan salah satu jenis dari obat ventolin yang dapat digunakan untuk meredakan gejalan asma, sesak napas yang disebabkan oleh bronkospasme (penyempitan bronkus), dan gangguan pernapasan lainnya. Obat ini tergolong ke dalam obat bronkolidator yang memiliki kandungan salbutamol yang dapat melemaskan otot-otot yang ada pada saluran pernapasa, sehingga saluran udara yang tadinya menyempit dapat menjadi lebih lebar dan membuat aliran udara yang menuju ke paru-paru meningkat. Obat ini harus diminum sesuai dengan petunjuk yang telah diberikan oleh dokter',
	'Seretide Inhaler':
		'Seredite inhaler merupakan salah satu jenis obat dari seredite yang dapat digunakan untuk mengendalikan ritme pernapasan yang terganggu, seperti penyakit asma dan penyakit paru obstruktif kronis (PPOK). Obat ini mengandung salmeterol dan flutikason propionat yang dapat membantu mengurangi pembengkakan dan iritasi pada bagian paru-paru. Obat ini tersedia dalam 2 dosis, yakni seretide 50 dose yang mengandung 25 mcg salmeterol dan 50 mcg fluticasone propionate dan seretide 125 dose yang mengandung 25 mcg salmeterol dan 125 mcg fluticasone propionate',
	'Symbicort Turbuhaler':
		'Symbicort turbuhaler merupakan obat yang digunakan untuk meredakan gejala asma dan penyakit paru obstruktif kronis (PPOK). Obat ini mengandung budesonide dan formoterol furmarate yang dapat mengurangi peradangan pada saluran pernapasan dan merelaksasikan otot-otot yang ada pada sluran pernapasan, sehingga membuka saluran pernapasan yang menyempit menjadi melebar agar aliran udara yang masuk ke dalam paru-paru menjadi lancar',
	Tamiflu:
		'Tamiflu merupakan obat antivirus yang termasuk dalam golongan obat ARV (anti-retroviral) yang dapat mengatasi dan mencegah infeksi yang disebabkan oleh virus influenza tipa A atau tipe B dalam tubuh. Obat ini mengandung oseltamivir yang bekerja dengan cara menghambat pertumbuhan dan menghentikan penyebaran virus di dalam tubuh. Obat ini dapat digunakan untuk mengobati gejala flu, bukan untuk mengobati gejala demam biasa. Selain itu, obat ini hanyalah obat pendamping untuk meredakan influenza yang tidak dapat menggantikan vaksin yang diberikan setiap tahun. Obat ini hanya tersedia dalam bentuk kapsul yang didapatkan dengan resep yang diberikan oleh dokter',
	'Panadol Cold & Flu':
		'Panadol cold & flu merupakan salah satu varian yang disediakan oleh panadol yang dapat menangani beberapa penyakit, seperti hidung tersumbat, batuk tidak berdahak, dan demam yang disebabkan oleh flu. Obat ini memiliki kandungan paracetamol yang dapat meredakan rasa nyeri, seperti sakit kepala, sakit gigi, sakit pada otot tubuh, flu, hingga dapat menurunkan demam yang dapat ditemui di apotek-apotek terdekat. Kandungan paracetamol dari obat ini akan bekerja pada pusat pengautur suhu tubuh di hipotalamus untuk menurunkan suhu tubuh dan menghambat sintesis prostaglandin dalam tubuh sehingga dapat mengurangi rasa nyeri yang ringan hingga sedang (analgesik). Selain memiliki kandungan paracetamol, obat ini juga mengandung pseudoephedrine HCL dan dextromethorphan HBr. Obat ini dapat dikonsumsi dengan cara membaca informasi yang tertera pada kemasan kaplet atau dapat melakukan konsultasi terlebih dahulu kepada dokter.',
	'Mixagrip Flu & Batuk':
		'Mixagrip flu dan batuk merupakan salah satu varian dari obat mixagrip yang dapat meredakan gejala flu yang disertai dengan batuk. Obat ini mengandung paracetamol, dextromethorphan HBr, dan pseudoephedrine yang dapat menekan sinyal batuk dari otak sehingga batuk dapat berkurang. Obat ini dapat dibeli di apotek-apotek terdekat dan dikonsumsi sesuai dengan dosis yang telah ditentukan tanpa memerlukan proses konsultasi dengan dokter',
	Zithromax:
		'Zithromax merupakan antibiotik yang digunakan untuk mengobati infeksi bakteri di beberapa organ dan bagian tubuh, seperti infeksi saluran pernapasa, mata, kulit, alat kelamin, uretritis (pembengkakan yang terjadi pada uretra), dan servisitis (peradangan yang terjadi pada serviks atau leher rahim). Obat ini mengandung azithromycin dihydrate yang dapat membunuh bakteri atau mencegah pertumbuhan bakteri pada tubuh. Obat ini tersedia dalam berbagai bentuk, seperti tablet, sirup kering, dan injeksi',
	'Avelox Moxifloxacin':
		'Avelox merupakan obat antibiotik yang dapat digunakan untuk mengatasi infeksi bakteri, seperti bronkitis, pneumonia, infeksi kulit, radang panggul dan infeksi di rongga bagian perut. Obat ini mengandung moxifloxaci yang bekerja dengan cara menghambat enzim DNA gyrase pada bakteri agar tidak dapat hidup dan berkembang biak pada tubuh. Obat ini hanya bisa didapatkan melalui resep dokter dan hanya tersedia dalam 2 varian, yakni bentuk tablet dan infus',
	Azithromycin:
		'Amzithromycin merupakan antibiotik yang dapat digunakan untuk mengobati penyakit yang disebabkan oleh bakteri, seperti pneumonia, sinusitis, infeksi kulit, amandel, tenggorokan, saluran pernapasan, paru-paru, mata dan beberapa penyakit infeksi menular seksual. Obat ini bekeraja dengan cara membunuh dan menghentikan pertumbuhan dari bakteri penyebab infeksi. Obat ini termasuk ke dalam golongan obat keras yang sangat memerlukan resep dari dokter untuk mendapatkan obat tersebut. Obat ini tersedia dalam beberapa kemasan, seperti tablet, sirup, dan injeksi',
	Seretide:
		'Seretide merupakan obat hirup yang dapat digunakan untuk mengendalikan beberapa gangguan pernapasan, seperti asma dan penyakit paru obstruktif kronik (PPOK). Obat ini mengandung salmeterol dan fluticasone yang dapaat mengendalikan gangguan pernapasan dan membantu mengurangi pembengkakan dan iritasi pada paru-paru. Obat ini hanya tersedia dalam 2 bentuk varian, yakni seretide diskus dan seretide inhaler',
	'Trelegy Ellipta':
		'Trelegy Ellipta merupakan obat hirup yang mengandung umeclidinium yang dapat digunakan untuk meredakan dan mengurangi gejala pada penyakit paru obstruktif kronik, seperti bronkitis kronis dan emfisema. Obat ini dapat meredakan beberapa penyakit, seperti gejala mengi, batuk, atau dada sesak. Obat ini mengandung umeclidinium yang dapat melonggarkan otot-otot di sekitar saluran pernapasan dan membuka saluran udara yang menuju ke paru-paru, sehingga dapat membuat pasien bernapas lebh lega',
	'Spriva Respimat':
		'Spiriva merupakan obat hisap yang dapat digunakan untuk mencegah dan mengontrol terjadinya gejala sesak napas atau mengi (bengek) yang disebabkan oleh bronchitis, emfisema paru, dan penyakit patu obstruktif kronis (PPOK) lainnya. Obat ini mengandung tiotro bromida yang menimbulkan efek antikolinergik dengan mencegah terjadinya interaksi antara asetikolin dengan resiptor muskarinik, sehingga menyebabkan pelebaran pada saluran bronkus. Obat ini digunakan di bawah pengawasan langsung dari dokter',
	'Erythromycin ':
		'Erythromycin merupakan antibiotik jenis makrolid yang dapat digunakan untuk mengatasi berbagai infeksi pada tubuh yang disebabkan oleh bakteri, seperti infeksi kulit, infeksi saluran pernapasan, difteri, penyakit legionnaire, dan penyakit menular seksual. Obat ini tersedia dalam berbagi bentuk, seperti tablet, kapsul, sirup, kering, cairan obat luar, cream, dan gel. Obat ini tidak diperjual belikan secar bebas tanpa adanya resep dari dokter',
	'Proris Sirup':
		'Proris suspensi / sirup merupakan slah satu jenis obat proris yang dapat meredakan demam dan nyeri pada anak yang sedang mengalami pertumbuhan gigi, nyeri yang disebabkan setelah melakukan vaksinasi. Selain itu, obat ini juga dapat digunakan untuk meredakan infeksi, seperti radang tenggorokan maupun batuk pilek. Obat ini mengandung ibuprofen yang bekerja dengan cara menghambat pembentukan prostaglandin (zat hormon) yang dapat memicu gejala radang, termasuk nyeri dan demam. Obat ini dapat digunakan oleh anak-anak hingga orang dewasa dan dapat dibeli di apotek terdekat',
	'Promedex Sirup':
		'Promedex sirup merupakan salah satu varian obat promedex yang dapat digunakan untuk meredakan beberapa jenis penyakit, seperti batuk karena alergi, asma, radang saluran pernapasan, bronkitis, faringitis, dan laringitis. Obat ini memiliki bahan aktif utama berupa dextromethorphan yang dapat mengurangi intensitas batuk kering dengan cara menekan refleks batuk di otak, guaifenesin yang dapat mengatasi batuk berdahak dengan cara mengencerkan lendir kental yang ada di saluran pernapasan sehingga mudah untuk dikeluarkan dan promethazine yang bekerja dengan cara menekan efek histamin pemicu gejala alergi, seperti bersin-bersin, hidung tersumbat, atau pilek. Obat ini tergolong ke dalam obat bebas yang dapat ditemukan dan dibeli di apotek tanpa memerlukan resep dari dokter. Obat ini dapat dikonsumsi mulai dari anak-anak berumur 2 tahun hingga orang dewasa',
	Entrostop:
		'Entrostop merupakan obat yang ampuh untuk menangani penyakit diare dengan cepat dan efektif. Obat ini dapat ditemukan pada apotek-apotek terdekat dengan 2 jenis produk yang dijual, yakni entrostop tablet yang mengandung attapulgite dan pectin dan entrostp herbal anak yang mengandung beberapa bahan alami, seperti ekstrak daun jambu biji, daun teh hijau camelia, jahe, dan ekstrak kunyit. Entrostop tablet sangat efektif untuk digunakan pada penyakit diare yang penyebabnya tidak diketahui dengan jelas. Sedangkan entrostop herbal anak dapat digunakan untuk mengurangi frekuensi buang air besar dan membantu dalam hal memadatkan kotoran',
	Diapet:
		'Diapet adalah obat herbal yang bermanfaat untuk mengatasi diare. Obat ini dapat mengurangi frekuensi buang air besar, memadatkan tinja yang cair, dan meredakan mulas akibat diare. Obat ini dapat dibeli tanpa resep dokter.',
	Imodium:
		'Imodium adalah obat untuk mengatasi diare, baik yang tiba-tiba (akut) maupun yang hilang timbul dalam jangka panjang (kronis), akibat penyakit radang usus.\nObat ini hanya dapat diperoleh dengan resep dari dokter.',
	'Polysilane Suspensi':
		'Polysilane adalah obat untuk meredakan gejala sakit maag dan perut kembung akibat kelebihan asam lambung. Dokter juga dapat menggunakan polysilane dalam penanganan tukak lambung, ulkus duodenum, atau asam lambung naik (GERD). Obat ini dapat dibeli tanpa resep dokter.',
	'Promag Suspensi':
		'Promag suspensi merupakan varian obat promag yang tergolong ke dlaam antasida dan antiflatulen yang dapat dikonsumsi untuk mengatasi penyakit maag, GERD, asam lambung, atau perut kembung, Promag suspensi memiliki beberapa kandungan aktif hydrotalcite dan magnesium hidroksida yang bekerja cepat dalam mengatasi dan meredakan penyakit maag dan menurunkan asam lambung. Obat ini juga mengandung simethicone yang dapat mengurangi gas berlebihan pada saluran pencernaan. Obat ini dapat dibeli secara bebas pada apotek-apotek terdekat tanpa memerlukan resep dari dokter',
	Omeprazole:
		'Omeprazole adalah obat untuk mengatasi asam lambung berlebih dan keluhan yang menyertainya. Omeprazole umumnya digunakan untuk mengobati gastroesophageal reflux disease (GERD), sakit maag (gastritis), atau tukak lambung. Obat ini hanya dapat dibeli dengan resep dokter',
	'Promag suspensi':
		'Promag suspensi merupakan varian obat promag yang tergolong ke dlaam antasida dan antiflatulen yang dapat dikonsumsi untuk mengatasi penyakit maag, GERD, asam lambung, atau perut kembung, Promag suspensi memiliki beberapa kandungan aktif hydrotalcite dan magnesium hidroksida yang bekerja cepat dalam mengatasi dan meredakan penyakit maag dan menurunkan asam lambung. Obat ini juga mengandung simethicone yang dapat mengurangi gas berlebihan pada saluran pencernaan. Obat ini dapat dibeli secara bebas pada apotek-apotek terdekat tanpa memerlukan resep dari dokter',
	Ranitidine:
		'Ranitidine adalah obat untuk mengobati gejala akibat produksi asam lambung berlebih. Beberapa kondisi yang dapat ditangani dengan ranitidin adalah tukak lambung, penyakit maag, penyakit asam lambung (GERD). Obat ini hanya dapat dibeli dengan resep dokter.',
	Dulcolax:
		'Dulcolax adalah obat pencahar untuk mengatasi sembelit atau susah buang air besar (BAB). Dulcolax mengandung bisacodyl yang dapat melancarkan BAB, serta meredakan kembung dan sakit perut akibat sembelit. Obat ini dapat dibeli tanpa resep dokter.',
	Laxatab:
		'Laxatab Tablet bermanfaat untuk mengatasi susah buang air besar (konstipasi).\nLaxatab Tablet mengandung docusate sodium. Docusate bekerja dengan cara menghambat penyerapan air dan lemak kembali dari feses, sehingga feses yang tadinya keras menjadi lebih lembut dan lebih mudah dikeluarkan. Obat ini dapat dibeli tanpa resep dokter.',
	Lactulax:
		'Lactulax Syrup 60 mL bermanfaat untuk mengatasi sembelit atau sulit buang air besar. Lactulax Syrup 60 mL bekerja dengan cara membantu mengalirkan cairan ke usus sehingga membuat tinja lebih lunak dan mudah dikeluarkan. Obat ini dapat dibeli tanpa resep dokter.',
	Ambeven:
		'Ambeven Kapsul bermanfaat untuk meredakan gejala-gejala ambeien atau wasir. Ambeven Kapsul terbuat dari campuran berbagai bahan alami. Salah satu kandungan utama obat ini adalah daun wungu yang dipercaya memiliki kemampuan antiinflamasi, sehingga dapat mengurangi pembengkakan dan mengecilkan ukuran hemoroid. Obat ini dapat dibeli tanpa resep dokter.',
	'Ardium 500':
		'Ardium adalah produk herbal untuk meringankan gejala wasir. Ardium tersedia dalam bentuk tablet yang bisa dibeli tanpa resep dokter.',
	'Nutrafor Wazzir':
		'Nutrafor Wazzir dapat mengurangi gejala wasir sepert gatal, rasa panas, bengkak, nyeri, pendarahan, dan melunakkan tinja. Obat ini dapat dibeli tanpa resep dokter',
	'Lanpracid Kapsul':
		'Lanpracid merupakan obat yang tergolong ke dalam obat penghambat pompa proton yang dapat menurunkan produksi asam lambung yang berlebihan dalam tubuh. Obat ini dapat digunakan untuk mengobati beberapa penyakit yang terjadi pada saluran pencernaan, seperti tukak lambung, GERD, tukak duodenum (luka yang terbuka pada lapisan usus 12 jari), esofangitis erosif (peradangan pada kerongkongan). Obat ini memiliki kandungan lansoprazole yang dapat menghambat enzim tertentu yang berperan dalam produksi asam lambung, sehingga produksi asam lambung pada tubuh dapat berkurang. Obat ini tergolong ke dalam jenis obat kerasa dimana untuk mendapatkan obat ini, pasien harus melakukan konsultasi terlebih dahulu kepada dokter untuk mendapatkan resep yang sesuai.',
	'Grafazol Kaplet':
		'Grafazol merupakan obat yang digunakan untuk mengobati beberapa jenis penyakit infeksi yang disebabkan oleh bakteri anerob dan protozoa. Obat ini dapat mengobati infeksi trichomonal vagintis dan bakterial vagionis, pseudomembran kolitis hingga disentri akut. Kandungan metronidazole pada obat ini akan bekerja dengan menghambat pembentukan protein yang diperlukan untuk pertumbuhan bakteri dan parasit. Obat ini tersedia dalam 2 varian yang dapat digunakan, yakni grafazol dalam bentuk kaplet  dan grafazol suspensi',
	Floxigra:
		'Floxigra adalah obat tipes yang mengandung antibiotik ciprofloxacin. Obat ini bekerja dengan menghambat pertumbuhan bakteri penyebab infeksi. Obat ini bisa didapatkan melalui resep yang diberikan oleh dokter',
	'Flagyl Forte':
		'Flagyl forte merupakan obat yang digunakan untuk mengobati beberapa jenis infeksi yang disebabkan oleh bakteri anaerob dan parasit protozoa, seperti uretritis dan vaginitis karena trichomonas vaginalis, amoebiasis di usus dan hati. Obat ini juga dapat digunakan untuk mencegah infeksi anaerob pasca operasi atau giardiasis karena giardia lambliasis. Obat ini mengandung metronidazole yang dapat mematikan pertumbuhan bakteri dan parasit pada tubuh',
	Metronidazole:
		'Obat ini bekerja dengan membunuh parasit penyebab diare. Dengan begitu, diare dan kram perut akibat disentri bisa mereda.  Obat ini hanya bisa dibeli dengan resep dokter.',
	Duspatalin:
		'Duspatalin merupakan obat yang digunakan untuk mengatasi penyakit antispasmodik (kejang perut). Obat ini dapat membantu pada pasien dalam mengatasi berbagai penyakit yang berkaitan dengan area pencernaan, seperti gangguan pada saluran pencernaan, nyeri pada bagian tukak lambung, kejang perut, dan penyakit yang terjadi pada kantung kemih dan saluran empedu Obat ini mengandung mebeverine HCL yang memberikan efek langsung pada otot polos yang terdapat pada saluran pencernaan tanpa mempengaruhi kemampuan bergerak dari usus normal',
};

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
	Cholestor:
		'Dosis pencegahan: 10 mg per hari. Dosis tersebut dapat ditingkatkan sesuai dengan kondisi pasien',
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
	Triatec:
		'Dewasa: 1.25 mg dikonsumsi sebanyak 1x dalam sehari. Dosis tersebut dapat ditingkatkan menjadi 10 mg per hari',
	Concor:
		'Dewasa: 1.25 mg dikonsumsi sebanyak 1x sehari. Obat ini diberikan selama 1 minggu. Dosis dari obat ini dapat ditambahkan jika tubu pasien menunjukkan respon yabg baik terhadap pengobatan. Peningkatan tersebut dilakukan secara bertahap setiap 1 - 4 minggu dengan dosis maksimal adalah 10 mg / hari',
	Spironolactone:
		'Dewasa: 25 mg dikonsumsi 1x sehari. Dosis tersebut dapat ditingkatkan menjadi 50 mg / hari',
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
	'Trelegy Ellipta':
		'Dosis: 1 hirup diberikan sebanyak 1x sehari. Obat ini tidak boleh digunakan lebih dari 1 hirup',
	'Spriva Respimat': 'Dosis: 1 - 2 hirup diberikan sebanyak 1x sehari',
	'Erythromycin ':
		'Dewasa: \nInfeksi Ringan - Sedang: 500 mg dikonsumsi setiap 12 jam \nInfeksi Berat: 1000 mg dikonsumsi setiap 6 jam. Dosis maksimal yang dapat dikonsumsi adalah 4 gram per hari\n\nAnak-anak: 30 – 50 mg/kg BB per hari, dibagi ke dalam 4 dosis. Dosis maksimal 4 gram per hari.',
	'Proris Sirup':
		'Bentuk: Proris Suspensi\nDewasa dan anak usia ≥ 8 tahun: 2 sendok takar (10 ml) diminum sebanyak 3 – 4x sehari.\n\nAnak usia 3 – 7 tahun: 1 sendok takar (5 ml) diminum sebanyak 3 – 4x sehari.\n\nAnak usia 1 – 2 tahun: ½ sendok takar (2,5 ml) diminum sebanyak 3 – 4x sehari.',
	'Promedex Sirup':
		'Dewasa dan anak usia > 12 tahun: 2 – 3 sendok takar (10 - 15 ml) diminum sebanyak 3x sehari.\n\nAnak usia 6 – 12 tahun: 1 sendok takar (5 ml) diminum sebanyak 3x sehari\n\nAnak usia 2 – 6 tahun: ½ sendok takar (2.5 ml) diminum sebanyak 3x sehari',
	Entrostop:
		'Dewasa dan anak-anak berusia > 12 tahun: 2 tablet dikonsumsi setiap kali buang air besar. Dosis maksimal dari obat ini adalah 12 tablet per hari\n\nAnak-anak berusia 6 - 12 tahun: 1 tablet dikonsumsi setiap kalo buang air besar. Dosis maksimal dari obat ini adalah 6 tablet per hari',
	Diapet:
		'Dewasa: 2 kapsul, 2 kali sehari. Untuk diare akut, dosisnya 2 kapsul, 2 kali sehari dengan selang waktu 1 jam.',
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
	Dulcolax:
		'Dewasa dan anak usia > 10 tahun: 1–2 tablet per hari.\n\nAnak usia 6 – 10 tahun: 1 tablet per hari.',
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

const efekSampingObat = {
	'Bodrex Migra':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, ruam, badan terasa lelah, hingga kesulitan untuk tidur. Jika obat dikonsumsi dalam jangka waktu yang panjang dengan dosis yang besar, maka fungsi dari ginjal akan menjadi terganggu dan dapat menyebabkan terjadinya hipersensitivitas / reaksi sistem imun tubuh yang berlebihan terhadap suatu zat.',
	'Panadol Extra':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, gelisah, cemas, tubuh terasa lemas, hingga kesulitan untuk tidur.',
	'Farsifen Plus':
		'Obat tersebut memiliki beberapa efek samping yang dapat dirasakan oleh para pasien setelah meminum obat tersebut, antara lain sakit kepala, pusing, mengantuk, lemas, kesulitan tidur, mual, muntah, hingga diare.',
	Paracetamol:
		'Obat ini jarang menimbulkan efek samping kepada para pasien. Namun, jika dikonsumsi dengan dosis yang tidak sesuai dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, hingga tubuh terasa lemas',
	Ibuprofen:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, atara lain sakit kepala, pusing, diare, mual, muntah, perut kembung, kesulitan untuk buang air besar, hingga nyeri pada bagian lambung',
	Amoxicillin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, mual, muntah, perubahan rasa pada lidah, diare, sakit perut, tubuh terasa gatal, hingga muncul ruam pada beberapa bagian tubuh',
	'Iliadin Nasal Spray':
		'Obat ini memiliki beberapa efek samping yang dapat dirasakan oleh pasien setelah menggunakan obat ini antara lain bersin-bersin, hidung menjadi kering, perih pada bagian rongga hidung, hidung menjadi meler, jantung berdebar dengan cepat. Jika pasien menggunakan obat ini tidak sesuai dengan dosis yang telah ditetapkan, maka akan timbul beberapa efek samping lain yang lebih parah, seperti sakit kepala yang parah, nyeri pada bagian dada, cemas, gelisah, lemas, keringat berlebih, hingga linglung',
	'Breathy Nasal Drops':
		'Breathy Nasal Drops harus digunakan sesuai dengan dosis yang dianjutkan, jika tidak pasien akan mengalami efek samping yang tidak diinginkan, seperti bersin-bersin, batuk, hidung menjadi kering, hidung meler, hidung terasa perih, ruam, gatal, atau bengkak pada bagian wajah atau tenggorokan, hingga kesulitan untuk bernapas',
	'Betahistine Mesylate':
		'Obat ini memiliki beberapa efek samping yang biasanya dirasakan oleh para pasien, antara lain sakit kepala, pusing, mengantuk, mual, muntah, perut terasa kembung, susah untuk mencerna makanan, penurunan tekanan darah secara drastis, kesulitan untuk bernapas hingga yang paling parah dapat menyebabkan kehilangan kesadaran diri jika pasien mengonsumsinya dengan dosis yang melebihi dari yang seharusnya',
	Betaserc:
		'Obat ini memiliki beberapa efek samping, seperti mual, sakit kepala, maag, diare, pusing, muntah, perut kembung. Obat ini juga dapat memberikan efek samping lainnya, seperti terjadi ruam pada kulit, gatal, terjadi pembengkakan pada bagian wajah terutama pada bagian mata, bibir, atau lidah, hingga sesak napas yang harus ditangani dengan segera setelah efek tersebut timbul',
	'Mertigo SR':
		'Obat ini memiliki beberapa efek samping, seperti mual, muntah, sakit kepala, perut kembung, diare, terjadi ruam pada kulit, gatal-gatal, hingga memicu penyakit maag. Jika pasien mengalami bengkak yang terjadi pada bagian bibir, lidah, kelopak mata, ruam yang timbul semakin melebar, atau sesak napas setelah meminum obat ini, diharapkan untuk langsung segera dibawa ke rumah sakit untuk penanganan lebih lanjut',
	'Clopidogrel Bisulfate':
		'Obat ini memiliki beberapa efek samping, mulai dari yang umum hingga yang serius yang harus ditangani oleh dokter. Efek samping yang umum dirasakan oleh pasien setelah mengonsumsi obat ini adalah diare, pendarahan, nyeri pada bagian perut, hingga masalah pencernaan. Obat juga dapat memberikan efek yang sangat serius, seperti batuk berdahak, kencing berdarah, muntah berdarah, kulit dan mata menguning, hingga demam tinggi jika pasien mengonsumsi obat secara berlebihan.',
	Cholestor:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, kesulitan untuk tidur, hidung tersumbat, mual, diare, sakit perut, terjadi ruam pada kulit, nyeri sendi, mimisan',
	Pradaxa:
		'Obat ini memiliki beberapa efek samping, seperti rambut rontok, sering bersendawa, perut terasa penuh, diare, gangguan saluran pencernaan. Obat ini juga dapat memberikan efek yang sangat serius kepada pasien jika diminum tidak sesuai dengan dosis yang telah ditentukan, efek samping tersebut, antara lain terjadinya anemia, trombositopenia, mimisan, darah menggumpal di bagian luar pembuluh darah, hingga dapat membuat fungsi ginjal tidak berjalan dengan baik',
	'Ciprofloxacin Tablet':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, nyeri pada perut, sakit kepala, pusing, terjadinya ruam pada area kulit, keputihan, tremor, gejala gangguan pada ginjal, kram perut, diare yang terjadi secara terus menerus',
	Dexamethasone:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, demam, sakit perut, kesulitan untuk tidur, nyeri pada tulang, meningkatkan nafsu makan, miopati, hiperglikemia, osteoporosis, otot menjadi lemah, terjadi perobekan pada dinding organ hingga tukak lambung',
	'Zovirax Tablet':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, sakit kepala, demam, mual, muntah, kelelahan, gatal-gatal, gemetar, mudah memar, denyut jantung tidak teratur, hingga kejang',
	Tegretol:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, mengantuk, mual, muntah, tremor, mulut menjadi kering, gangguan keseimbangan, agitas (gelisah atau mudah tersinggung), wajah memerah, sesak napas, mimisan, gangguan fungsi hati, hiponatermia',
	Bamgetol:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, antara lain pusing, sakit kepala, mengantuk, mulut menjadi kering, mual, muntah, penurunan kesadaran, gangguan pernapasan, gangguan pada irama jantung (jantung dapat berdetak lebih cepat atau lebih lambat dari biasanya), pengelihatan menjadi buram, mempengaruhi koordinasi gerakan otot, hilangnya nafsu untuk makan',
	Lioresal:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping diantaranya adalah mengantuk, pusing, sakit kepala, badan terasa lemas atau lelah, mual, frekuensi untuk buang air kecil meningkat, kesulitan untuk tidur, nyeri pada bagian dada, halusinasi, gangguan pada irama jantung, perubahan suasana hati, gangguan bicara, sesak napas, hingga pingsan',
	Rogaine:
		'Penggunaan rogaine yang berlebihan dapat menimbulkan beberapa efek samping, seperti kulit kepala menjadi gatal, kering, kemerahan, mengelupas, iritasi, pertumbuhan rambut yang tidak merata, kerontokan rambut sementara',
	'Regrou Forte':
		'Regrou forte memiliki beberapa efek samping yang dapat ditimbulkan dari penggunaan yang berlebihan, seperti iritasi pada area yang telah diolesi, pusing, sakit kepala, gatal pada area kepala, kulit menjadi kering',
	Finasteride:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping yang harus diperhatikan, seperti timbulnya ruam pada bagian tubuh, gatal-gatal, bengkak pada bagian wajah, lidah atau tenggorokan, pusing, sakit kepala, kesulitan dalam bernapas atau menelan, penurunan terhadap gairah seks, gangguan terhadap ejakulasi, depresi, nyeri pada bagian testis, terdapat benjolan pada payudara',
	'Amoxsan Tablet':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, diare, muntah, perubahan pada warna gigi (coklat, kuning, abu-abu), perubahan rasa pada lidah, ruam pada kulit, leukopenia (jumlah sel darah putih berada di bawah rata-rata normal), mudah memar atau mengalami pendarahan secara tiba-tiba bahkan dapat mengalami kejang',
	'Cefixime Trihydrate':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, diare, sakit kepala, pusing, mual, muntah, perut terasa kembung, demam, gangguan pada fungsi hati atau ginjal',
	'Akilen Tetes Telinga':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, pusing, sakit kepala, telinga terasa seperti terbaka, pendarahan pada telinga, tinnitus (telinga berdenging), gangguan tidur, terjadi gangguan pada pendengaran sehingga membuat pasien sedikit mengalami kesulitan ketika mendengar, dermatits',
	'Forotic Tetes Telinga':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti nyeri atau gatal pada telinga, pusing, sakit kepala, muncul ruam pada kulit, hingga dapat membuat pendengaran sedikit terganggu',
	'Erlamycetin Tetes Telinga':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti telinga terasa perih, gatal, panas seperti terbakar, memar, hingga mengalami pendarahan yang tidak biasa',
	'Cendo Floxa':
		'Cendo floxa memiliki beberapa efek sampingnya, antara lain mata terasa panas atau perih untuk sementara, pengelihatan menjadi buram untuk sementara, mata gatal, kering, berair, mata menjadi lebih sensitif terhadap cahaya, bengkak pada kelopak atau area sekitar mata',
	'Erlamycetin Tetes Mata':
		'Erlamycetin tetes mata memiliki beberapa efek sampingnya, antara lain mata terasa panas atau perih untuk sementara, pengelihatan menjadi buram untuk sementara, mata gatal, kering, berair, mata menjadi lebih sensitif terhadap cahaya, bengkak pada kelopak atau area sekitar mata',
	'Polidemisine Eye Drop':
		'Penggunaan obat yang berlebihan akan menimbulkan efek samping, seperti pandangan menjadi kabut, mata gatal dan berair, mata menjadi lebih sensitif terhadap cahaya, terasa hangat atau panas sesaat setelah menggunakan obat ini',
	'Zovirax Cream':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, sakit kepala, demam, mual, muntah, kelelahan, gatal-gatal, gemetar, mudah memar, denyut jantung tidak teratur, hingga kejang',
	'Acyclovir Tablet':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, demam, mual, muntah, tubuh terasa kelelahan, nyeri pada bagian perut, gatal-gatal pada kulit',
	'Valacyclovir HCL':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, diare, detak jantung yang tidak teratur, sakit perut, gatal-gatal pada kulit, mata atau kulit menguning, pengelihatan mata yang berubah secara tiba-tiba, kehilangan kesadaran bahkan hingga masuk ke dalam fase kejang',
	'Vfend Voriconazole':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, pengelihatan menjadi terganggu, terjadi gangguan pada saluran pencernaan, anemia, nyeri pada bagian dada, jantung berdetak dengan cepat',
	'Cendo Natacen':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, antara lain mata menjadi lebih berair, pengelihatan menjadi buram untuk sementara waktu, mata lebih sensitif terhadap cahaya, mata merah dan bengkak, nyeri pada mata, mata terasa sangat panas, hingga sesak napas',
	'Cendo Xitrol':
		'Cendo xitrol memiliki beberapa efek samping yang terjadi pada mata setelah pasien meneteskan obat ini, antara lain mata menjadi perih, gatal, mata menjadi kering, mata kemerahan, pengelihatan menjadi kabur, mata mengalami bengkak, hingga terasa nyeri pada bagian belakang mata',
	'Erlamycetin Salep Mata':
		'Erlamycetin salep mata memiliki beberapa efek sampingnya, antara lain mata terasa panas atau perih untuk sementara, pengelihatan menjadi buram untuk sementara, mata gatal, kering, berair, mata menjadi lebih sensitif terhadap cahaya, bengkak pada kelopak atau area sekitar mata',
	'Cardio Aspirin':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, heartburn, tubuh menjadi lebih mudah menimbulkan memar atau pendarahan',
	Farnormin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti tubuh menjadi lelah, mual, tangan dan kaki terasa dingin yang disebabkan oleh berkurangnya aliran darah yang menuju 2 tempat tersebut',
	Triatec:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, diare, gangguan pencernaan, badan menjadi lemas, gangguan ginjal dan hati, hingga dapat menyebabkan terjadinya vertigo',
	Concor:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, sakit kepala, mual, muntah, kelelahan, diare, tekanan darah menjadi rendah, kesulitan untuk tidur, nyeri pada sendi, sesak napas, detak jantung yang tidak teratur, bengkak pada bagian pergelangan kaki',
	Spironolactone:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, sakit kepala, mual, muntah, diare, otot atau kaki mengalami kram, tubuh merasa lelah, terjadi ruam pada bagian kulit, gatal-gatal, terjadi nyeri dan pembesaran pada bagian payudara yang terjadi pada pria dan wanita',
	Rifampicin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, mual, muntah, diare, nyeri pada bagian lengan atau kaki, gangguan keseimbangan, heartburn, kram pada perut',
	'Nitrokaf Retard':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, antara lain mengantuk, sakit kepala, pusing, mual, muntah, badan menjadi lemas, pengelihatan menjadi buram, detak jantung menjadi tidak teratur, nyeri pada bagian dada',
	'Amlodipine Besylate':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, sakit kepala, mual, tubuh merasa lelah, terjadi kelelahan pada pergelangan kaki, tekanan darah menjadi rendah, otot mengalami kram, jantung berdetak dengan cepat, gangguan pencernaan, diare, sesak napas',
	'Simarc 2':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, muncul ruam pada tubuh, rambut rontok, kehilangan nafsu makan, mudah terjadi pendarahan pada bagian tubuh, mimisan yang berlangsung dalam waktu yang lama',
	Lasix:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, sakit kepala, pusing, pengelihatan menjadi buram, gangguan pendengaran, telingan berdenging, nafsu makan menurun, diare, dehidrasi, hingga dapat membuat denyut jantung menjadi sangat cepat',
	Rifastar:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, diantaranya mual, muntah, leukopenia, anemia, kejang, dan beberapa gangguan pada organ tubuh, seperti pengelihatan, saluran pencernaan, fungsi hati, hingga gangguan terhadap sistem saraf',
	Isoniazid:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, menurunnya jumlah trombosit darah, demam, vertigo, neuropati perifer, pandangan menjadi buram, nyeri pada mata, mati rasa pada beberapa bagian tubuh, dada terasa sesak, pendarahan atau memar yang tidak biasa, gangguan fungsi hati',
	'Ventolin Inhaler':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, antara lain sakit kepala, pusing, mengantuk, mulut terasa kering, mual, muntah, denyut jantung meningkat, kram otot, kesulitan untuk tidur, nyeri pada bagian dada, hingga dapat menyebabkan sesak',
	'Seretide Inhaler':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, nyeri atau radang pada tenggorokan, tremor, nyeri pada otot dan sendi, jantung berdebar lebih cepat, suara menjadi serak',
	'Symbicort Turbuhaler':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti gatal pada tenggorokan, suara menjadi serak, sakit kepala, jantung berdebar, batuk, tremor, infeksi candida pada mulut atau tenggorokan',
	Tamiflu:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, antara lain sakit kepala, mual, muntah, sakit perut, diare, kesulitan untuk tidur',
	'Panadol Cold & Flu':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, gelisah, cemas, tubuh terasa lemas, hingga kesulitan untuk tidur.',
	'Mixagrip Flu & Batuk':
		'Obat ini memiliki beberapa efek samping yang akan dirasakan, seperti mengantuk, sakit kepala, pengelihatan menjadi buram, mual, muntah, kesulitan untuk tidur',
	Zithromax:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, pusing, perut terasa kembung, diare, gangguan pendengaran, gangguan terhadap fungsi hati',
	'Avelox Moxifloxacin':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, nyeri pada bagian perut, diare, sakit perut, gangguan pada indra perasa lidah',
	Azithromycin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, kelelahan, gangguan pengelihatan, kesulitan dalam mencerna makanan, terjadi ruam pada kulit, diare, gangguan irama jantung, gangguan pada pendengaran, peradangan pada pankreas',
	Seretide:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, timbul jamur pada bagian mulut, iritasi pada tenggorokan, tremor, jantung berdebar dengan cepat, suara menjadi serak, kram otot, nyari pada sendi',
	'Trelegy Ellipta':
		'Obat ini memiliki beberapa efek samping yang tidak diharapkan oleh pasien, antara lain sakit kepala, infeksi pada saluran pernapasan hidung dan tenggorokan',
	'Spriva Respimat':
		'Penggunaan obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, penglihatan kabur, takikardi supraventrikuler, disfonia, mulut kering, penyakit refluks gastroesofagitis, pruritus, retensi urin',
	'Erythromycin ':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, kehilangan nafsu makan, gangguan terhadap lambung, seperti nyeri, kram atau kembung, gangguan pendengaran, gangguan pada irama jantung',
	'Proris Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, sakit kepala, mual, muntah, demam, perut terasa kembung, diare, peradangan pada lambung, hingga dapat memicu penyakit maag',
	'Promedex Sirup':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, pusing, mual, muntah, pengelihatan menjadi kabur, kesulitan untuk bernapas, dada terasa sakit, bahkan hingga dapat menimbulkan serangan epilepsi',
	Entrostop: 'Obat ini memiliki efek samping sembelit / konstipasi ringan dan bersifat sementara',
	Diapet:
		'Obat ini memiliki beberapa efek samping, seperti mual, pusing, sakit perut, perut terasa kembung, nyeri pada bagian perut, sembelit',
	Imodium:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, antara lain mengantuk, mual, pusing, tubuh merasa lelah, muncul ruam pada beberapa bagian, sakit perut, kram pada bagian perut, hingga dapat menyebabkan sembelit',
	'Polysilane Suspensi':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mual, muntah, sakit kepala, pusing, diare, sembelit',
	'Promag Suspensi':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sembelit / konstipasi, mual, muntah, sakit kepala, pusing, diare',
	Omeprazole:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mengantuk, vertigo, mual, muntah, diare, sembelit, sakit perut, kesulitan untuk tidur',
	'Promag suspensi':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sembelit / konstipasi, mual, muntah, sakit kepala, pusing, diare',
	Ranitidine:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, sembelit atau konstipasi, diare, mual, vertigo, nafsu makan menurun, rambut rontok',
	Dulcolax:
		'Dulcolax memiliki beberapa efek samping yang dapat ditimbulkan, antara lain pusing, mual, muntah, lemas, nyeri atau kram pada perut, diare, angioedema (pembengkakan yang timbul di bawah jaringan kulit), anafilaktoid',
	Laxatab:
		'Laxatab memiliki beberapa efek samping, seperti muncul ruam pada beberapa bagian di kulit, otot menjadi lemah, kehilangan cairan dan elektrolit tubuh',
	Lactulax:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti perut terasa kembung, flatulensi (buang angin), mual, muntah, timbul kram pada lambung, diare',
	Ambeven:
		'Ambeven merupakan obat yang aman untuk digunakan, sehingga efek samping yang ditimbulkan dari penggunaan obat ini hanya efek samping yang ringan, seperti pusing, mengantuk, atau tubuh merasa lemah',
	'Ardium 500':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, gangguan pada saluran pencernaan, sakit perut, diare, sembelit',
	'Nutrafor Wazzir':
		'Obat ini tergolong ke dlaam obat yang aman untuk dikonsumsi dan jarang ada pasien yang melaporkan efek samping yang dialami ketika setelah menggunakan obat ini. Namun, terdapat beberapa efek samping yang timbul dari penggunaan obat ini, seperti sakit kepala, pusing, mual, iritasi pada bagian kulit, muncul ruam pada beberapa bagian, tekanan darah meningkat',
	'Lanpracid Kapsul':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti badan menjadi lemas, sakit kepala, diare, defisiensi (kekurangan) vitamin B12, fungsi hati menjadi terganggu, osteoporosis',
	'Grafazol Kaplet':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, sakit kepala, mual, muntah, pusing, leukopenia (jumlah sel darah putih dalam tubuh lebih rendah dari biasanya), pengelihatan menjadi buram, hilang keseimbangan, kehilangan nafsu makan, ataksia, nyeri pada saat buang air kecil, diare, sembelit',
	Floxigra:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, sakit kepala, pusing, mual, muntah, kesulitan untuk tidur, nyeri pada bagian perut, muncul ruam pada bagian kulit, agitasi, wajah menjadi merah dan panas',
	'Flagyl Forte':
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti mengantuk, sakit kepala, pusing, mual, muntah, gangguan pernapasan, timbul ruam pada beberapa bagian tubuh, nyeri pada bagian dada, diare, sembelit, hingga dapat menyebabkan kejang-kejang',
	Metronidazole:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti sakit kepala, pusing, mual, muntah, nyeri pada bagian dada, diare, sembelit, kehilangan nafsu makan, gangguan pada koordinasi gerakan tubuh, halusinasi, leukopenia, vertigo, hinga yang paling parah dapat membuat pasien menjadi kejang-kejang',
	Duspatalin:
		'Konsumsi obat yang berlebihan dapat menimbulkan beberapa efek samping, seperti pusing, badan menjadi lelah, terjadi pembengkakan pada beberapa area, seperti kulit, wajah, leher, lidah, atau tenggorokan, muncul ruam pada kulit, kesulitan untuk bernapas, kesulitan untuk tidur, gangguan pencernaan',
};

const imagesObat = {
	'Bodrex Migra': 'https://d2qjkwm11akmwu.cloudfront.net/products/696143_30-5-2022_13-20-28-1665779240.png',
	'Panadol Extra': 'https://d2qjkwm11akmwu.cloudfront.net/products/807265_19-11-2024_13-49-18.png',
	'Farsifen Plus':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1747710064/attached_image/farsifen-plus.jpg',
	Paracetamol: 'https://pimpharma.com/wp-content/uploads/2023/02/paracetamol-box-1.png',
	Ibuprofen: 'https://www.novapharin.co.id/data/plist_pic/96.jpg',
	Amoxicillin: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/05/13090017/amoxilin.jpg',
	'Iliadin Nasal Spray': 'https://d2qjkwm11akmwu.cloudfront.net/products/648286_13-2-2023_11-24-10.webp',
	'Breathy Nasal Drops': 'https://d2qjkwm11akmwu.cloudfront.net/products/1848-1665761088.webp',
	'Betahistine Mesylate':
		'https://d2qjkwm11akmwu.cloudfront.net/products/764246_8-9-2022_10-4-42-1665791755.webp',
	Betaserc: 'https://mimsshst.blob.core.windows.net/drug-resources/SG/packshot/Betaserc6001PPS0.JPG',
	'Mertigo SR':
		'https://www.dexagroup.com/wp-content/uploads/2022/09/dexagroup-mertigo-sr-sustained-release-tablet-id-01.png',
	'Clopidogrel Bisulfate': 'https://primayahospital.b-cdn.net/wp-content/uploads/2024/06/clpopidogrel.jpg',
	Cholestor:
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20231130084117359225_CHOLESTOR-20-2.png',
	Pradaxa: 'https://d2qjkwm11akmwu.cloudfront.net/products/17895-1665790839.webp',
	'Ciprofloxacin Tablet': 'https://kalbemed.com/storage/images/products/0587c152cebb0095b55fa34a217d4fd4.jpg',
	Dexamethasone:
		'https://apollobandung.co.id/wp-content/uploads/2025/02/1660806973_5fb37f4441ab59059e868bf6.jpeg',
	'Zovirax Tablet': 'https://d2qjkwm11akmwu.cloudfront.net/products/3623_15-1-2019_11-38-46-1665769402.webp',
	Tegretol: 'https://d2qjkwm11akmwu.cloudfront.net/products/882563_29-6-2020_14-46-12-1665791840.jpeg',
	Bamgetol:
		'https://img-cdn.medkomtek.com/G3atGP_8p15RcWWqoaGow5eCjd8=/0x0/smart/filters:quality(100):format(webp)/drugs/yIJTSi_OP0qJZy_k2TRmc/original/tty76suwws3vfzuhi3lzyjjjynktcu8x.png',
	Lioresal: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1700907157/attached_image/lioresal.jpg',
	Rogaine:
		'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/11/13/76dde77f-afcb-4315-af2f-8e45db3a6e62.jpg',
	'Regrou Forte': 'https://d2qjkwm11akmwu.cloudfront.net/products/3473-1665769299.jpeg',
	Finasteride:
		'https://www.bambangpharma.com/cdn/shop/files/438246266_356090210353218_8730131290687640927_n.jpg',
	'Amoxsan Tablet': 'https://d2qjkwm11akmwu.cloudfront.net/products/706249_16-10-2023_13-22-46.webp',
	'Cefixime Trihydrate': 'https://primayahospital.b-cdn.net/wp-content/uploads/2024/03/C-26.jpg',
	'Akilen Tetes Telinga': 'https://d2qjkwm11akmwu.cloudfront.net/products/14089-1665786410.webp',
	'Forotic Tetes Telinga':
		'https://d2qjkwm11akmwu.cloudfront.net/products/123308_28-4-2022_14-45-0-1665855625.png',
	'Erlamycetin Tetes Telinga':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1704855007/attached_image/erlamycetin-tetes-telinga.jpg',
	'Alat Bantu Pendengaran':
		'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-90392929/oem_oem_full01.jpg',
	Stapedektomi: 'https://otosurgeryatlas.stanford.edu/wp-content/uploads/2020/06/4c-2.jpg',
	'Cochlear Implant':
		'https://kasoemhearingcenter.com/wp-content/uploads/2023/03/Solusi-Gangguan-Pendengaran-Apa-sih-Manfaat-Cochlear-Implant.jpg',
	'Cendo Floxa': 'https://d2qjkwm11akmwu.cloudfront.net/products/161443_9-4-2019_14-57-5-1665777280.webp',
	'Erlamycetin Tetes Mata':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1705285325/attached_image/erlamycetin-tetes-mata.jpg',
	'Polidemisine Eye Drop': 'https://d2qjkwm11akmwu.cloudfront.net/products/17889-1665790835.webp',
	'Zovirax Cream': 'https://d2qjkwm11akmwu.cloudfront.net/products/4896-1665771397.jpeg',
	'Acyclovir Tablet':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20220104090030359225_ACYCLOVIR-YARINDO-200MG-TAB-100S-removebg-preview.png',
	'Valacyclovir HCL': 'https://bernofarm.com/wp-content/uploads/2021/10/VALACICLOVIR-500MG-depan.png',
	'Vfend Voriconazole':
		'https://5.imimg.com/data5/SELLER/Default/2024/12/471427265/FT/GL/PE/233137923/vfend-200-mg.jpeg',
	'Cendo Natacen': 'https://d2qjkwm11akmwu.cloudfront.net/products/7916-1665777301.webp',
	'Cendo Xitrol':
		'https://images.tokopedia.net/img/cache/700/OJWluG/2023/4/11/e65f78e1-070b-44d0-b885-ec2fc516cb57.jpg',
	'Erlamycetin Salep Mata':
		'https://d2qjkwm11akmwu.cloudfront.net/products/427468_16-12-2021_14-21-28-1665775186.png',
	'Cardio Aspirin':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1727310381/attached_image/cardio-aspirin.jpg',
	Farnormin:
		'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//102/MTA-7892166/hj_farnormin_50mg_box_isi_100_tablet_obat_resep_dokter_full00.jpg',
	Triatec: 'https://d3bbrrd0qs69m4.cloudfront.net/images/product/0102c0044.jpg',
	Concor: 'https://d2qjkwm11akmwu.cloudfront.net/products/314346_30-11-2022_13-16-47.png',
	Spironolactone:
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_2025010311340223085_1.jpeg',
	Rifampicin: 'https://d2qjkwm11akmwu.cloudfront.net/products/18964-1665791829.webp',
	'Nitrokaf Retard':
		'https://img-cdn.medkomtek.com/gTQ7-jVZ7076D1AP6v-ZrisfnN0=/0x0/smart/filters:quality(100):format(webp)/drugs/iGvHOpxfdhWdab4SQ7sZr/original/OBT0009274.jpg',
	'Amlodipine Besylate': 'https://primayahospital.b-cdn.net/wp-content/uploads/2024/06/Amlodipine-1.jpg',
	'Simarc 2':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201224025605359225_SIMARC-2.jpg',
	Lasix: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1734320754/attached_image/lasix.jpg',
	Rifastar: 'https://d2qjkwm11akmwu.cloudfront.net/products/8197-1665777735.webp',
	Isoniazid:
		'https://medicastore.com/images/produk/ISONIAZIDE-TABLET-300-MG-KIMIA-FARMA_0tesi_Medicastore.webp',
	'Ventolin Inhaler': 'https://d2qjkwm11akmwu.cloudfront.net/products/1896-1665761131.jpeg',
	'Seretide Inhaler': 'https://d2qjkwm11akmwu.cloudfront.net/products/2061-1665761275.webp',
	'Symbicort Turbuhaler':
		'https://d2qjkwm11akmwu.cloudfront.net/products/507083_20-6-2019_9-42-37-1665761269.jpeg',
	Tamiflu:
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_2022092308583323085_Wc45DBhErwBvg8nkupZ3wYopkPnLTzEDnYNHlDGP.jpg',
	'Panadol Cold & Flu': 'https://d2qjkwm11akmwu.cloudfront.net/products/766812_19-11-2024_13-59-39.webp',
	'Mixagrip Flu & Batuk': 'https://d2qjkwm11akmwu.cloudfront.net/products/9967-1665780351.jpeg',
	Zithromax: 'https://d2qjkwm11akmwu.cloudfront.net/products/755069_9-7-2023_23-36-6.png',
	'Avelox Moxifloxacin': 'https://d2qjkwm11akmwu.cloudfront.net/products/5736-1665773380.webp',
	Azithromycin:
		'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/drugs/IsiVEWwTFpQvTmE7iq1ri/original/OBT0005492.jpg',
	Seretide: 'https://d2qjkwm11akmwu.cloudfront.net/products/2062-1665761276.webp',
	'Trelegy Ellipta': 'https://asthma.org.au/wp-content/uploads/2022/03/Trelegy-Ellipta-pack-shot.jpg',
	'Spriva Respimat': 'https://d2qjkwm11akmwu.cloudfront.net/products/6984-1665775965.webp',
	'Erythromycin ':
		'https://images.tokopedia.net/img/cache/700/OJWluG/2022/8/11/954f386c-ed95-4ce9-aed4-c1cf1aaf8995.jpg',
	'Proris Sirup': 'https://www.pharos.co.id/wp-content/uploads/2022/11/proris-supspensi.jpg',
	'Promedex Sirup': 'https://d2qjkwm11akmwu.cloudfront.net/products/8743_18-2-2019_10-56-29-1665761218.webp',
	Entrostop: 'https://d2qjkwm11akmwu.cloudfront.net/products/25186_11-1-2022_17-9-28-1665843978.png',
	Diapet: 'https://d2qjkwm11akmwu.cloudfront.net/products/638089_30-6-2019_22-35-32-1665801908.webp',
	Imodium: 'https://storage.googleapis.com/rxstorage/Product/Photos/farmaku_imodium-2-mg-tablet-01.jpg',
	'Polysilane Suspensi': 'https://d2qjkwm11akmwu.cloudfront.net/products/125365_23-5-2022_13-26-54-1.jpeg',
	'Promag Suspensi':
		'https://d3bbrrd0qs69m4.cloudfront.net/images/product/apotek_online_k24klik_20201127030453359225_PROMAG-SUS.jpg',
	Omeprazole: 'https://kalbemed.com/storage/images/products/0acdc35fba8236d929dbf12cf8b020f7.jpg',
	Ranitidine: 'https://primayahospital.b-cdn.net/wp-content/uploads/2024/03/C-19-1024x683.jpg',
	Dulcolax: 'https://d2qjkwm11akmwu.cloudfront.net/products/125380_1-8-2023_14-33-42.png',
	Laxatab: 'https://d2qjkwm11akmwu.cloudfront.net/products/17521-1665790586.webp',
	Lactulax: 'https://d2qjkwm11akmwu.cloudfront.net/products/158297_17-5-2022_17-19-8-1665791278.webp',
	Ambeven: 'https://d2qjkwm11akmwu.cloudfront.net/products/575304_25-8-2021_16-46-54-1665776677.jpeg',
	'Ardium 500':
		'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/100/MTA-114615478/ardium_ardium-500-mg-untuk-meringankan-wasir-15-tablet_full01.jpg',
	'Nutrafor Wazzir':
		'https://d2qjkwm11akmwu.cloudfront.net/products/365393_15-12-2020_13-50-35-1665826288.webp',
	'Lanpracid Kapsul':
		'https://res.cloudinary.com/dk0z4ums3/image/upload/v1704251445/attached_image/lanpracid.jpg',
	'Grafazol Kaplet': 'https://d2qjkwm11akmwu.cloudfront.net/products/616260_6-5-2019_9-11-44-1665790544.jpeg',
	Floxigra: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1709961223/attached_image/floxigra.jpg',
	'Flagyl Forte': 'https://d3bbrrd0qs69m4.cloudfront.net/images/product/0108s0010.jpg',
	Metronidazole:
		'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/drugs/1rJSHlTtsgMDhhQ7R2ObE/original/OBT0008789.jpg',

	Duspatalin:
		'https://images.tokopedia.net/img/cache/700/OJWluG/2022/8/12/92db2a55-2fbb-464e-8eee-dee78df4fcdb.jpg',
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
	'Erythromycin ': 'Erythromycin 500 mg',
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
	'Bodrex Migra': 'Alodokter, Halodoc, Hellosehat, Klikdokter',
	'Panadol Extra': 'Halodoc, Alodokter, Panadol, Hellosehat',
	'Farsifen Plus': 'Alodokter, Halodoc, dan K24Klik',
	Paracetamol: 'Alodokter, Primayahospital, Alomdedika',
	Ibuprofen: 'Alodokter, Halodoc',
	Amoxicillin: 'Alodokter, Halodoc, dan Primayahospital',
	'Iliadin Nasal Spray': 'Halodoc, Alodokter',
	'Breathy Nasal Drops': 'Halodoc, Alodokter, Klikdokter',
	'Betahistine Mesylate': 'Siloam Hospital, Halodoc, Hellosehat, Alodokter, DrugBank',
	Betaserc: 'Halodoc, Alodokter, Klikdokter, Vivaapotek',
	'Mertigo SR': 'Halodoc, Alodokter, dan Medicastore',
	'Clopidogrel Bisulfate': 'Alodokter, Halodoc, Primayahospital',
	Cholestor: 'Klikdokter, Alodokter',
	Pradaxa: 'Alodokter, Klikdokter, Halodoc',
	'Ciprofloxacin Tablet': 'Halodoc, Alodokter',
	Dexamethasone: 'Alodokter, Primayahospital, Halodoc, Alomedika',
	'Zovirax Tablet': 'Klikdokter, Halodoc, Alodokter, goapotik',
	Tegretol: 'Alodokter, drugs.com, klikdokter',
	Bamgetol: 'Alodokter, vivaapotek, medicastore',
	Lioresal: 'Alodokter, Halodoc, Klikdokter, Vivaapotek',
	Rogaine: 'Alodokter, Halodoc, Hellosehat',
	'Regrou Forte': 'Alodokter, detikhealth',
	Finasteride: 'Alodokter, Halodoc, Hellosehat',
	'Amoxsan Tablet': 'K24Klik, Halodoc, Honestdocs',
	'Cefixime Trihydrate': 'Primayahospital, Alodokter, Halodoc, Alomedika',
	'Akilen Tetes Telinga': 'Klikdokter, Alodokter, Halodoc',
	'Forotic Tetes Telinga': 'Alodokter, Halodoc, KalbeMed',
	'Erlamycetin Tetes Telinga': 'Alodokter, Halodoc, Vivaapotek',
	'Alat Bantu Pendengaran': 'Alodokter',
	Stapedektomi: 'Alodokter',
	'Cochlear Implant': 'Alodokter, Mayoclinic, National Institute Deafness and Other Communication Disorders',
	'Cendo Floxa': 'Alodokter, Halodoc, K24Klik',
	'Erlamycetin Tetes Mata': 'Halodoc, Alodokter, Hellosehat, Klikdokter',
	'Polidemisine Eye Drop': 'Halodoc, Alodokter, K24Klik, Klikdokter',
	'Zovirax Cream': 'Alodokter, Halodoc, K24Klik',
	'Acyclovir Tablet': 'Alodokter, Halodoc, Hellosehat, Primayahospital',
	'Valacyclovir HCL': 'Alodokter, Halodoc',
	'Vfend Voriconazole': 'Alodokter, Hellosehat, Klikdokter, Mayoclinic, K24klik',
	'Cendo Natacen': 'Alodokter, Halodoc, Klikdokter',
	'Cendo Xitrol': 'Halodoc, Alodokter',
	'Erlamycetin Salep Mata': 'Alodokter, Mandjur, Halodoc',
	'Cardio Aspirin': 'Alodokter, Halodoc, Hellosehat, Klikdokter',
	Farnormin: 'Alodokter, Halodoc, Hellosehat, Klikdokter',
	Triatec: 'Halodoc, Alodokter, Klikdokter, Honestdocs',
	Concor: 'Alodokter, Halodoc, Hellosehat, Klikdokter',
	Spironolactone: 'Alodokter, Halodoc, Hellosehat',
	Rifampicin: 'Alodokter, Hellosehat, Alomedika, Halodoc',
	'Nitrokaf Retard': 'Alodokter, Halodoc',
	'Amlodipine Besylate': 'Alodokter, Primayahospital, Halodoc',
	'Simarc 2': 'Klikdokter, Halodoc, Alodokter, K24klik',
	Lasix: 'Alodokter, Halodoc, Klikdokter',
	Rifastar: 'Klikdokter, Halodoc, Honestdoc, K24Klik, medicastore',
	Isoniazid: 'Alodokter, Hellosehat, Alomedika, Halodoc, Klikdokter, Siloamhospital',
	'Ventolin Inhaler': 'Halodoc, Alodokter, Honestdocs',
	'Seretide Inhaler': 'Klikdokter, Halodoc, Alodokter',
	'Symbicort Turbuhaler': 'Klikdokter, Alodokter, Halodoc, ',
	Tamiflu: 'Klikdokter, Alodokter, Honestdocs, K24Klik',
	'Panadol Cold & Flu': 'Halodoc, Alodokter, Hellosehat',
	'Mixagrip Flu & Batuk': 'Alodokter, Klikdokter, Halodoc',
	Zithromax: 'Klikdokter, Honestdocs, Halodoc, Alodokter',
	'Avelox Moxifloxacin': 'Halodoc, Alodokter, K24klik',
	Azithromycin: 'Alodokter, Klikdokter, Halodoc, Alomedika',
	Seretide: 'Alodokter, klikdokter, Halodoc',
	'Trelegy Ellipta': 'Alodokter, Halodoc, K24klik',
	'Spriva Respimat': 'Alodokter, Halodoc, K24klik, Klikdokter',
	'Erythromycin ': 'Alodokter, Halodoc',
	'Proris Sirup': 'Alodokter, Halodoc, K24Klik',
	'Promedex Sirup': 'Alodokter, Halodoc, K24klik, Klikdokter',
	Entrostop: 'Alodokter, Halodoc, Hellosehat, Klikdokter, K24klik',
	Diapet: 'Alodokter, Halodoc, Hellosehat, SOHO Global Health, Vivaapotek',
	Imodium: 'Halodoc, Alodokter, K24klik',
	'Polysilane Suspensi': 'Alodokter, Halodoc, Vivaapotek, K24klik',
	'Promag Suspensi': 'Halodoc, Alodokter',
	Omeprazole: 'Alodokter, Halodoc, Primayahospital',
	'Promag suspensi': 'Halodoc, Alodokter',
	Ranitidine: 'Alodokter, Halodoc, Primayahospital',
	Dulcolax: 'Halodoc, Alodokter, Dulcolax, K24klik',
	Laxatab: 'Halodoc, Alodokter, Klikdokter, K24klik',
	Lactulax: 'Halodoc, Alodokter, Klikdokter',
	Ambeven: 'Halodoc, Alodokter, K24klik, Vivaapotek',
	'Ardium 500': 'Alodokter, Halodoc, K24klik, Hellosehat',
	'Nutrafor Wazzir': 'Alodokter, K24klik, Medicastore',
	'Lanpracid Kapsul': 'Klikdokter, Alodokter, K24klik',
	'Grafazol Kaplet': 'Alodokter, Halodoc, K24klik',
	Floxigra: 'Halodoc, Alodokter, Klikdokter, Vivaapotek',
	'Flagyl Forte': 'Alodokter, klikdokter, k24klik, Halodoc, Honestdocs ',
	Metronidazole: 'Alodokter, Halodoc, Primayahospital, K24klik',
	Duspatalin: 'Alodokter, Halodoc, Hellosehat, Klikdokter, K24klik',
};

const kategoriObat = {
	'Bodrex Migra': ['Sakit Kepala'],
	'Panadol Extra': ['Sakit Kepala'],
	'Farsifen Plus': ['Sakit Kepala'],
	Paracetamol: ['Sakit Kepala', 'Sakit Telinga'],
	Ibuprofen: ['Sakit Kepala', 'Sakit Telinga', 'Sakit Pernafasan'],
	Amoxicillin: ['Sakit Kepala', 'Sakit Telinga', 'Sakit Pernafasan'],
	'Iliadin Nasal Spray': ['Sakit Kepala', 'Sakit Telinga'],
	'Breathy Nasal Drops': ['Sakit Kepala'],
	'Betahistine Mesylate': ['Sakit Kepala'],
	Betaserc: ['Sakit Kepala'],
	'Mertigo SR': ['Sakit Kepala'],
	'Clopidogrel Bisulfate': ['Sakit Kepala', 'Sakit Jantung'],
	Cholestor: ['Sakit Kepala'],
	Pradaxa: ['Sakit Kepala'],
	'Ciprofloxacin Tablet': ['Sakit Kepala', 'Sakit Perut'],
	Dexamethasone: ['Sakit Kepala'],
	'Zovirax Tablet': ['Sakit Kepala'],
	Tegretol: ['Sakit Kepala'],
	Bamgetol: ['Sakit Kepala'],
	Lioresal: ['Sakit Kepala'],
	Rogaine: ['Sakit Kepala'],
	'Regrou Forte': ['Sakit Kepala'],
	Finasteride: ['Sakit Kepala'],
	'Amoxsan Tablet': ['Sakit Telinga', 'Sakit Pernafasan'],
	'Cefixime Trihydrate': ['Sakit Telinga', 'Sakit Pernafasan'],
	'Akilen Tetes Telinga': ['Sakit Telinga'],
	'Forotic Tetes Telinga': ['Sakit Telinga'],
	'Erlamycetin Tetes Telinga': ['Sakit Telinga'],
	'Alat Bantu Pendengaran': ['Sakit Telinga'],
	Stapedektomi: ['Sakit Telinga'],
	'Cochlear Implant': ['Sakit Telinga'],
	'Cendo Floxa': ['Sakit Mata'],
	'Erlamycetin Tetes Mata': ['Sakit Mata'],
	'Polidemisine Eye Drop': ['Sakit Mata'],
	'Zovirax Cream': ['Sakit Mata'],
	'Acyclovir Tablet': ['Sakit Mata'],
	'Valacyclovir HCL': ['Sakit Mata'],
	'Vfend Voriconazole': ['Sakit Mata', 'Sakit Jantung'],
	'Cendo Natacen': ['Sakit Mata'],
	'Cendo Xitrol': ['Sakit Mata'],
	'Erlamycetin Salep Mata': ['Sakit Mata'],
	'Cardio Aspirin': ['Sakit Jantung'],
	Farnormin: ['Sakit Jantung'],
	Triatec: ['Sakit Jantung'],
	Concor: ['Sakit Jantung'],
	Spironolactone: ['Sakit Jantung'],
	Rifampicin: ['Sakit Jantung', 'Sakit Pernafasan'],
	'Nitrokaf Retard': ['Sakit Jantung'],
	'Amlodipine Besylate': ['Sakit Jantung'],
	'Simarc 2': ['Sakit Jantung'],
	Lasix: ['Sakit Jantung'],
	Rifastar: ['Sakit Pernafasan'],
	Isoniazid: ['Sakit Pernafasan'],
	'Ventolin Inhaler': ['Sakit Pernafasan'],
	'Seretide Inhaler': ['Sakit Pernafasan'],
	'Symbicort Turbuhaler': ['Sakit Pernafasan'],
	Tamiflu: ['Sakit Pernafasan'],
	'Panadol Cold & Flu': ['Sakit Pernafasan'],
	'Mixagrip Flu & Batuk': ['Sakit Pernafasan'],
	Zithromax: ['Sakit Pernafasan', 'Sakit Perut'],
	'Avelox Moxifloxacin': ['Sakit Pernafasan'],
	Azithromycin: ['Sakit Pernafasan'],
	Seretide: ['Sakit Pernafasan'],
	'Trelegy Ellipta': ['Sakit Pernafasan'],
	'Spriva Respimat': ['Sakit Pernafasan'],
	'Erythromycin ': ['Sakit Pernafasan'],
	'Proris Sirup': ['Sakit Pernafasan'],
	'Promedex Sirup': ['Sakit Pernafasan'],
	Entrostop: ['Sakit Perut'],
	Diapet: ['Sakit Perut'],
	Imodium: ['Sakit Perut'],
	'Polysilane Suspensi': ['Sakit Perut'],
	'Promag Suspensi': ['Sakit Perut'],
	Omeprazole: ['Sakit Perut'],
	'Promag suspensi': ['Sakit Perut'],
	Ranitidine: ['Sakit Perut'],
	Dulcolax: ['Sakit Perut'],
	Laxatab: ['Sakit Perut'],
	Lactulax: ['Sakit Perut'],
	Ambeven: ['Sakit Perut'],
	'Ardium 500': ['Sakit Perut'],
	'Nutrafor Wazzir': ['Sakit Perut'],
	'Lanpracid Kapsul': ['Sakit Perut'],
	'Grafazol Kaplet': ['Sakit Perut'],
	Floxigra: ['Sakit Perut'],
	'Flagyl Forte': ['Sakit Perut'],
	Metronidazole: ['Sakit Perut'],
	Duspatalin: ['Sakit Perut'],
};

const linkObatSatu = {
	'Bodrex Migra': 'Halodoc:\r\nhttps://www.halodoc.com/obat-dan-vitamin/bodrex-migra-4-kaplet',
	'Panadol Extra':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/panadol-extra-10-kaplet?srsltid=AfmBOopQG4Ps5y_pI0LOcerqZl9hTBuSv9PiqNbisYolyGLqwPT6HTv8',
	'Farsifen Plus':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/farsifen-plus-10-tablet?srsltid=AfmBOooncZ-zz7Wx5EkKxe7WATELh7HH55vPaYWlzjKllKYr3F8bLs3P',
	Paracetamol:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/paracetamol-500-mg-10-kaplet?srsltid=AfmBOorXp2gpaQSCH3OsnO9Rdz8Ia8xbtlrE-mQrlXbZKTrh626_1RyN',
	Ibuprofen:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ibuprofen-400-mg-10-tablet?srsltid=AfmBOorQYOptTIQHOY5U_A90YGuZFXNNr8pom8-fk8LOcbWzgknwaifg',
	Amoxicillin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/amoxicillin-500-mg-10-tablet?srsltid=AfmBOoo7LQ1NO7wp1Itxwp711UFZwMNAfpOXuPLIGW4yNx2JbXaun-gr',
	'Iliadin Nasal Spray':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/iliadin-dewasa-0-05-nasal-spray-10-ml?srsltid=AfmBOoqtMZ1w1vdMgHCxv0eCNgdUerQWI0nHBl9PpuXqaiAQXy81nJDl',
	'Breathy Nasal Drops':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/breathy-nasal-drops-30-ml?srsltid=AfmBOooXxUb3OrHBFIhcIDQ-WAzs4NJ4ldavHzaRqrvraGUiW8lYkWdO',
	'Betahistine Mesylate':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/betahistine-6-mg-10-tablet?srsltid=AfmBOopM4vg20GNZTlAp-Dp9sO8MMXPuwu6UJ2cTKDG38C8IO1LU2OUA',
	Betaserc:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/betaserc-24-mg-20-tablet?srsltid=AfmBOoopkOdQWfalZXN-UsXTz9-AINwqC0mJqWcctO5iQ-9k5p-EuKKn',
	'Mertigo SR':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/mertigo-sr-12-mg-10-tablet?srsltid=AfmBOornfvv-dv28QV9zYK-BeRTpAk27YFwHRe8ZomKLoXyOKkAwdNa_',
	'Clopidogrel Bisulfate':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/clopidogrel-75-mg-10-tablet?srsltid=AfmBOoo-O_coA7sr1sO-LQ1srTMmtpvBuVqsCVifMUoH6ExsT6Ne_jJQ',
	Cholestor:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cholestor-20-mg-10-tablet?srsltid=AfmBOooylmU335qRVNzLPHrQOtsY2ueuR-10DTQMMqwLWtNf47FXOhzG',
	Pradaxa:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/pradaxa-150-mg-10-kapsul?srsltid=AfmBOoqKze8TMMjJXDDV_kfa7cIfo-txF45OvFnvuqpL0YeZNnOiFvnj',
	'Ciprofloxacin Tablet':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ciprofloxacin-500-mg-10-tablet?srsltid=AfmBOoqWPgAKXtPGV8qK9snceeT00lwbhimO6C_TQ0p91Y1sqqdk3nxS',
	Dexamethasone:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/dexamethasone-0-5-mg-10-tablet?srsltid=AfmBOoq5FwFIg_7OQr9iM0uDsZkfzgvjqlQHXpGtehcMTex-5rHECe5b',
	'Zovirax Tablet':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/zovirax-200-mg-5-tablet?srsltid=AfmBOorI-RyFyPTrRvoTRhkZtTBn374CBZb6tUJZ6mjEqXWElgRfhWE1',
	Tegretol:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/tegretol-200-mg-10-tablet?srsltid=AfmBOorV3ReEiev-e4-bW5sx4qRfYbaIzrXyYm99mc6mOmPz4L3pPeYR',
	Bamgetol:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/bamgetol-200-mg-10-tablet/652c9fde8473bf5ad6a8ed72',
	Lioresal:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lioresal-10-mg-10-tablet?srsltid=AfmBOorD9J0kWdTY3mvgEc4o9UuUyLZVJMjR3OCCteESl5gte68-uP2_',
	Rogaine:
		'Tokopedia:\nhttps://www.tokopedia.com/naturelo-x-good-store/rogaine-men-solution-liquid-5-minoxidil-perawatan-rambut-rontok-pria-1729840633501419362?extParam=ivf%3Dfalse%26keyword%3Drogaine+minoxidil%26search_id%3D2025061003521734ED066DF378EF138N8L%26src%3Dsearch',
	'Regrou Forte':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/regrou-hair-regrowth-30-ml?srsltid=AfmBOorhBiYKJqMV97nI2LnTjIIfEMFrLAbPh5dHaMZR3iS134i8lnlq',
	Finasteride:
		'Shopee:\nhttps://shopee.co.id/Finasteride-Combiphar-5-Mg-Box-100-Tablet-i.829615599.23067321392',
	'Amoxsan Tablet':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/amoxsan-250-mg-10-kapsul?srsltid=AfmBOoqjAl22t5pNOdGJsuUN6lIJGd1iGHjwhIt6lBhm6Y_Qn1fC04fu',
	'Cefixime Trihydrate': 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cefixime-100-mg-10-kapsul',
	'Akilen Tetes Telinga':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/akilen-ear-drop-5-ml?srsltid=AfmBOopnjiF40oTAd-cbbmmTZwjmL5stc0dLG5fH02Xwwe1WYv3GTea-',
	'Forotic Tetes Telinga':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/forotic-tetes-telinga-5-ml?srsltid=AfmBOor7RhwvMP0Xx4vKMMZLYA9e74Km8NcQjraNojOKxlXgHjhnRxY8',
	'Erlamycetin Tetes Telinga':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/erlamycetin-1-ear-drops-10-ml?srsltid=AfmBOopUXDLLM8uAsxJvE4R9Di_25V77Yycon6yurjkZxuHRDukEa2kU',
	'Alat Bantu Pendengaran':
		'Tokopedia:\nhttps://www.tokopedia.com/metro-kebab-pku/alat-bantu-dengar-tanpa-kabel?src=topads',
	'Cendo Floxa':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-floxa-minidose-0-6-ml?srsltid=AfmBOoolOA8wqAevZThDEiEXZk1GxG5HvjGENqEqBHK0_DTkTqu-A4ks',
	'Erlamycetin Tetes Mata':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/erlamycetin-plus-eye-drops-5-ml?srsltid=AfmBOoo3-lFCyfgyV0FeIbwEqSR19r1toUaQ-DuiYI0avGC_bpfC7lad',
	'Polidemisine Eye Drop':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/polidemisin-eye-drops-5-ml?srsltid=AfmBOopom3KuQS9ek3itVcyJkUHVyuJr3L_8ZOdTA4hsOGtILzyDmE8p',
	'Zovirax Cream':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/zovirax-5-cream-5-g?srsltid=AfmBOooTGAUepIQOJc0PfDjREjX9tiVAnH5qyCiOZjTmr7EOzDuwMUO8',
	'Acyclovir Tablet':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/acyclovir-200-mg-10-tablet?srsltid=AfmBOoqE2SAoK2Xo4bdtkThWO8xjXddmBAICQeRrHouU3q32MKHmPmBo',
	'Valacyclovir HCL':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/valacyclovir-500-mg-10-kaplet?srsltid=AfmBOopsEunHFle5B_smLwT4Cea4kkP6QUMNrhQycUbOyOPaljrncGPB',
	'Vfend Voriconazole': 'Medicastore:\nhttps://medicastore.com/produk/Obat/3879/vfend-200-mg-tablet',
	'Cendo Natacen':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-natacen-minidose-0-6-ml?srsltid=AfmBOoq6VDsMG1ZpUJAFYbRgf-PEoJWNTtgdB6Z3LLEmj25aE9flithR',
	'Cendo Xitrol':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cendo-xitrol-eye-drop-5-ml?srsltid=AfmBOorYej0YTa2vGnXBI1PBq9i0TvQyX2cFAc7G1rytNR7BvJodEg7d',
	'Erlamycetin Salep Mata':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/erlamycetin-1-salep-mata-3-5-g?af_sub1=sub%201&af_force_deeplink=true&af_cost_value=0&source_caller=bulk&pid=Web&is_retargeting=true&af_click_lookback=7d&shortlink=3iavub4p&af_adset=https:%2F%2Fwww.halodoc.com%2Fartikel%2Fini-daftar-salep-mata-bintitan-yang-aman-dan-tersedia-di-apotik&af_ad=Web_erlamycetin-1-salep-mata-3-5-g_article&af_channel=Organic&af_cost_currency=USD&c=ProdRecomSEO',
	'Cardio Aspirin':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/cardio-aspirin-100-mg-10-tablet?srsltid=AfmBOopjJzQVEaoYm_WYcNKgBr-f_Vw0kvU4I69AJhnjzsYCOzphxTGF',
	Farnormin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/farnormin-50-mg-10-tablet?srsltid=AfmBOoqvD0lu4HKuFXqi1o0AKK-JlM6xDuiBkMs29oSkEx7FgR4Anewl',
	Triatec:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/triatec-2-5-mg-10-tablet?srsltid=AfmBOoq0AWNJpqInSBp5a4V1_q_5VYSstWcZIISl15VNbGV4PJXoeVfo',
	Concor:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/concor-1-25-mg-10-tablet?srsltid=AfmBOormdPWk29My6ir1NHw33ZUPKt4xibZ0xL_hQ1wlQ11iDZAJcDTA',
	Spironolactone:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/spironolactone-25-mg-10-tablet?srsltid=AfmBOoqTJb-SFrS3nM9Z-hfZYus8Ch-dmKrRC_0PI3GgJXZ2aR4kBuas',
	Rifampicin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/rifampicin-450-mg-10-tablet?srsltid=AfmBOop8qUTDQfH2lKZNRyXtDzqVcHoyihZ7xU2SwEuyP2Gyj17vBGdS',
	'Nitrokaf Retard':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/nitrokaf-retard-2-5-mg-10-kapsul?srsltid=AfmBOoqfG4qpbc9HuPlbYxVrH2_hHF4LKfuLeJkRZi-U_90mgvgxfzfm',
	'Amlodipine Besylate':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/amlodipine-5-mg-10-tablet?srsltid=AfmBOoqGmthm-EbDoMXNkvx8gubRUseR3z_A03qHHtqqNw7IC0Rc7KwF',
	'Simarc 2':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/simarc-2-mg-10-tablet?srsltid=AfmBOookK8ASQyZG9r7ZsDcODqkIhk86SA0MaBZvsRzlpuFMOP2E7afW',
	Lasix:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lasix-40-mg-10-tablet?srsltid=AfmBOooyCtO_h9UlTBPFhPISpIfTXiJrQhtbBauCmeG9Di3VeMuujT7d',
	Rifastar:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/rifastar-4fdc-10-kaplet?srsltid=AfmBOorJ3J07gq-iZziBQzU3TjkMDf9nqfVhVtYJH1-dGa33tTcd0DvX',
	Isoniazid:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/isoniazid-300-mg-10-tablet?srsltid=AfmBOoq5YOpTyVJQlLGwGnzrZ2KfCK_3trUxJs4TYGT5sLMFk5-qdbE-',
	'Ventolin Inhaler':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ventolin-inhaler-100-mcg-200-doses?srsltid=AfmBOopCY3xQzOyPd7cWWDKLgBVm-v7NTEydS3tKIzDAmRghrjNb8u9L',
	'Seretide Inhaler':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/seretide-inhaler-25-125-mcg-120-dosis-1?srsltid=AfmBOooG2s81lxMkyBAGscwChdHF5AktCRdJ5py61wELtbcBQHDOAQbu',
	'Symbicort Turbuhaler':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/symbicort-160-mcg-4-5-mcg-turbuhaler-60-dosis?srsltid=AfmBOoqMzn5gAMxJ_5rH2hbThuGb5iZCgrxhDXfQ-BKoohp2t_ioBIH8',
	Tamiflu:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/oseltamivir-75-mg-10-kapsul?srsltid=AfmBOopj6jVSAdCTydd3MyU6pDJt4iujOfP7yT8IwX1QRTjrFhoraiz5',
	'Panadol Cold & Flu':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/panadol-cold-dan-flu-10-kaplet?srsltid=AfmBOopmPP6c1vYGN89PGvm1vw2_Pp4vMuhG-52EJ_fX_dRTZzHj6jLf',
	'Mixagrip Flu & Batuk':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/mixagrip-flu-dan-batuk-4-kaplet?srsltid=AfmBOorOQ5uXDZP8L9BnNd1-tARNjpEgoM9K2WiqPzypLU2XjL-8AE1w',
	Zithromax:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/zithromax-500-mg-3-kapsul?srsltid=AfmBOookek1ra5gCfFt4XFomOIPDaXOZkGGfVKrYLG0nsm1ESkWr3kbA',
	'Avelox Moxifloxacin':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/avelox-tablet-400-mg?srsltid=AfmBOooVspiiEByvdwgswhjNVVydTKiZE9VDdV8doAnNvDy2HU9Rf_xH',
	Azithromycin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/azithromycin-200-mg-5-ml-dry-syrup-15-ml?srsltid=AfmBOopQvfDmi1ARXuItxzW0vteUsxgyCgvJUbT3SeNYbw-zCxME87Kj',
	Seretide:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/seretide-diskus-50-250-mcg-60-dosis?srsltid=AfmBOor7r-YgYRp9oGVNZL8Ez_WuiWgUTEjXgTGkTbN1mO6S7Ym2vQp8',
	'Trelegy Ellipta': 'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/trelegy-ellipta-30-dosis',
	'Spriva Respimat':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/spiriva-respimat-inhaler-2-5-mcg?srsltid=AfmBOopq3DYnzMiNnKvjsPQTSk6-W_arKi1KcaYpkvJg-Dm9Qr-1wLVA',
	'Erythromycin ':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/erythromycin-500-mg-10-kaplet?srsltid=AfmBOoopeuxZ6RYAnRPjl1F_quz2y9g9bADO6SC5f-qz51EDJPmcEdjz',
	'Proris Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/proris-suspensi-60-ml?srsltid=AfmBOooWSGqk9-UFQ-3doqnRxRCWc5dqp8_C5QK8lNPmms4yCW-Q6AfW',
	'Promedex Sirup':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/promedex-sirup-60-ml?srsltid=AfmBOopjTYkuRtDb7fRM3-GznEByYLKwOcwtHIXal7iAurdjdZht4d1h',
	Entrostop:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/entrostop-20-tablet?srsltid=AfmBOooXERN4Tb0rd4zoS-9Gbf9MR6DurVY9P9DxzFLmwV3IAJo1nS69',
	Diapet:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/diapet-10-kapsul?srsltid=AfmBOorrqrKaMVt81w4oNHRAYVRvf8gNH80JhpDEIvum1dXccAs6nkSq',
	Imodium:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/imodium-2-mg-10-tablet?srsltid=AfmBOorpQjBLulp4t_6wc7CKfH0PFKDw31YobuSsg2fQqm7RvDfyhnk2',
	'Polysilane Suspensi':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/polysilane-suspensi-100-ml?srsltid=AfmBOopfB1toeTGg13XCffbdcZeMltHFIIAqzU_32sUbTOdeXPMYZsWX',
	'Promag Suspensi':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/promag-suspensi-60-ml?srsltid=AfmBOopC1Zmi-6PogelwDywimno1_u0uqLu3O_mfblEj3Lxd1fJMUBp8',
	Omeprazole:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/omeprazole-20-mg-10-kapsul?srsltid=AfmBOopsCbWW7KQ1lGwk8Ry4-EgahILxbIIULDv2YGqgRPqUQvcs7R7d',
	'Promag suspensi':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/promag-suspensi-60-ml?srsltid=AfmBOopC1Zmi-6PogelwDywimno1_u0uqLu3O_mfblEj3Lxd1fJMUBp8',
	Ranitidine:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ranitidine-150-mg-10-tablet?srsltid=AfmBOop11uPZNC6fPxCT6gHqqv-gWaCRBikf_ehNMv4fp75HPHc3Z2V_',
	Dulcolax:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/dulcolax-5-mg-4-tablet?srsltid=AfmBOoqKWR7kcaf_UVLzat5DulQiZbnh9MTPyMN2CtVj4GnL_LSvq-pd',
	Laxatab:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/laxatab-6-tablet?srsltid=AfmBOork0lIZKTI2WDRgzuTUvy07ic5WNXu6NskCP3HzdEVy2HH3fRn7',
	Lactulax:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lactulax-sirup-60-ml?srsltid=AfmBOopC_ZxW68iDoL7VLRWXPcvG6-we9PbV2DJYrDbEXxQqWz6394oS',
	Ambeven:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ambeven-10-kapsul?srsltid=AfmBOoq3qlmt3QXTIAODwvRvop6A1H6WbziVId8zRTTC1uTVmbtsVvbc',
	'Ardium 500':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/ardium-500-mg-15-tablet?srsltid=AfmBOoog7WO9klFZ1RipvFLvaG7_fj8DqMr73FqOKicf95AbzwNOYNk6',
	'Nutrafor Wazzir':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/nutrafor-wazzir-4-kapsul?srsltid=AfmBOorou8epid98wtUQ-JsDPCeSdP9mcLdXiWENzDlr4idQFUCxuPhV',
	'Lanpracid Kapsul':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/lanpracid-30-mg-10-kapsul?srsltid=AfmBOoqNRYShw6ePmkKlegwHM2LJh4JtqRj-4UpM9b-2eHLkQGltixt_',
	'Grafazol Kaplet':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/grafazol-500-mg-10-kapsul?srsltid=AfmBOorAlHBVrgbcme0UdQKkHk7jMw04vvlj6jwLrBNiA47tQsde3yq6',
	Floxigra:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/floxigra-500-mg-10-kaplet?srsltid=AfmBOorEAHbaZRvdnCuujk5y8rKVC_sLavb2SJd0eSrkRr9ABooWwrZ3',
	'Flagyl Forte':
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/flagyl-forte-500-mg-10-tablet?srsltid=AfmBOopzvZi9i34iBZBWo0ZoIQiQbjQ8AQ6RsTBWMFIOb-bvprMLVI7M',
	Metronidazole:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/metronidazole-500-mg-10-tablet?srsltid=AfmBOor7N4R_aF2Xr0BZdaxzhDz-UTv8SBxm9AqsOXYnWtnGxIpTQwIY',
	Duspatalin:
		'Halodoc:\nhttps://www.halodoc.com/obat-dan-vitamin/duspatalin-135-mg-10-tablet?srsltid=AfmBOopBq_trKoFTqcXd5D609Dhn6WJFul_3b7uf4TJPWJr1RSX6uhPU',
};

const linkObatDua = {
	'Bodrex Migra':
		'\n\nAlodokter:\nhttps://www.alodokter.com/aloshop/products/bodrex-migra-4-kaplet/5fb374c341ab59059e867264',
	'Panadol Extra':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/panadol-extra-10-kaplet/5fb3755241ab59059e8673d9',
	'Farsifen Plus': 'K24Klik:\nhttps://www.k24klik.com/p/farsifen-plus-capl-100s-13892\n',
	Paracetamol: 'K24klik:\nhttps://www.k24klik.com/p/paracetamol-if-500mg-tab-100s-417',
	Ibuprofen:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ibuprofen-400-mg-10-tablet-rama/6492673b94ec340025e54b66',
	Amoxicillin: 'K24klik:\nhttps://www.k24klik.com/p/amoxicillin-hexpharm-500mg-capl-100s-4542#',
	'Iliadin Nasal Spray':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/iliadin-obat-semprot-hidung-dewasa-10-ml/5fb38a4d41ab59059e86a6b4',
	'Breathy Nasal Drops': 'K24klik:\nhttps://www.k24klik.com/p/breathy-tetes-hidung-30ml-1369',
	'Betahistine Mesylate':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/betahistine-6-mg-10-tablet-nulab/62a18f62f15ee840f565f189',
	Betaserc:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/betaserc-24-mg-20-tablet/5fb3894541ab59059e86a41a',
	'Mertigo SR': 'K24klik:\nhttps://www.k24klik.com/p/mertigo-sr-12mg-tab-100s-18979#',
	'Clopidogrel Bisulfate':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/clopidogrel-75-mg-6-tablet-dexa/5fb385cd41ab59059e869b20#:',
	Cholestor:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cholestor-20-mg-10-tablet/62a18ff2f15ee840f565f654',
	Pradaxa: 'K24klik:\nhttps://www.k24klik.com/p/pradaxa-110mg-cap-30s-2187',
	'Ciprofloxacin Tablet':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ciprofloxacin-500-mg-10-kaplet-promed/5fb37adf41ab59059e868156',
	Dexamethasone: 'K24klik:\nhttps://www.k24klik.com/p/dexamethasone-if-0.5mg-tab-100s-24358#',
	'Zovirax Tablet':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/zovirax-200-mg-5-tablet/659fbc0ce8c94800244a07c8',
	Tegretol:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/tegretol-200-mg-10-tablet/5fb3738641ab59059e866f4c',
	Bamgetol: 'Medicastore:\nhttps://medicastore.com/produk/Obat/8527/bamgetol-tablet-200-mg',
	Lioresal:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/lioresal-10-mg-10-tablet/62a18f0af15ee840f565ee7d',
	Rogaine:
		'Blibli:\nhttps://www.blibli.com/p/rogaine-5-minoxidil-penyubur-rambut-60-ml/ps--MEO-26940-00541?ds=MEO-26940-00541-00001&source=BRAND_PAGE&sid=04096d4fc5327dab&cnc=false&pickupPointCode=PP-3003102&pid1=MEO-26940-00541',
	'Regrou Forte':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/regrou-forte-hair-restorer-30-ml/5fb37e1541ab59059e868909',
	Finasteride:
		'Blibli:\nhttps://www.blibli.com/p/finasteride-combiphar-5-mg-box-100-tablet/ps--APA-70260-03288?ds=APA-70260-03288-00001&source=SEARCH&sid=b10eb89594fd93b0&cnc=false&pickupPointCode=PP-3461892&pid1=APA-70260-03288',
	'Amoxsan Tablet':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/amoxsan-250-mg-10-kapsul/5fb37a4641ab59059e868000',
	'Cefixime Trihydrate':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cefixime-100-mg-10-kapsul-hexpharm/5fb3895841ab59059e86a44b',
	'Akilen Tetes Telinga': 'K24klik:\nhttps://www.k24klik.com/p/akilen-ear-drop-5ml-3273#',
	'Forotic Tetes Telinga':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/forotic-tetes-telinga-5-ml/6231ac8489446a1af45d8c11',
	'Erlamycetin Tetes Telinga': 'K24klik:\nhttps://www.k24klik.com/p/erlamycetin-ear-drop-10ml-3922#',
	'Alat Bantu Pendengaran':
		'Blibli:\nhttps://www.blibli.com/p/beurer-ha-50-hearing-aid/ps--BEI-60062-00049?ds=BEI-60062-00049-00001&source=SEARCH&sid=254023c45c9d68bb&cnc=false&pickupPointCode=PP-3263416&pid=BEI-60062-00049&sskey=f849e9ae80134fabbf8f93f5779837f9&irclickid=RA71HB29ExyPTGXxKAwdS2iGUksQaHxqWydCUQ0&irgwc=1&utm_source=affiliates&utm_medium=1329899_Optimise%20SEA',

	'Cendo Floxa':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cendo-floxa-tetes-mata-minidose-0%2C6-ml-5-ampul/5fb3892a41ab59059e86a3d3',
	'Erlamycetin Tetes Mata':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/erlamycetin-tetes-mata-10-ml/61b368e0b5a5e2062d9797e0',
	'Polidemisine Eye Drop': 'K24klik:\nhttps://www.k24klik.com/p/polidemisin-eye-drop-5ml-909#',
	'Zovirax Cream': 'K24klik:\nhttps://www.k24klik.com/p/zovirax-5--cr-5g-618#',
	'Acyclovir Tablet':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/acyclovir-200-mg-10-tablet-novell/64927d7294ec340025e5ac6b',
	'Valacyclovir HCL':
		'K24klik:\nhttps://www.alodokter.com/aloshop/products/valacyclovir-500-mg-10-tablet-infion/64eff8aa7e86957b5a946550',
	'Vfend Voriconazole': 'Tokopedia:\nhttps://www.tokopedia.com/apotekhanna/vfend-200-mg-box-10-tablet',
	'Cendo Natacen': 'K24klik:\nhttps://www.k24klik.com/p/c-natacen-md-0.6ml-2005#',
	'Cendo Xitrol':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/cendo-xitrol-tetes-mata-5-ml/5fb3732741ab59059e866e51',
	'Erlamycetin Salep Mata': 'K24klik:\nhttps://www.k24klik.com/p/erlamycetin-eye-oint-3.5g-4002#',
	'Cardio Aspirin': 'K24klik:\nhttps://www.k24klik.com/p/cardio-aspirin-100mg-tab-30s-213#',
	Farnormin: 'K24klik:\nhttps://www.k24klik.com/p/farnormin-50mg-tab-100s-3554#',
	Triatec: 'K24klik:\nhttps://www.k24klik.com/p/triatec-2.5mg-tab-60s-82#',
	Concor: 'K24klik:\nhttps://www.k24klik.com/p/concor-1.25mg-tab-50s-10979#',
	Spironolactone: 'K24klik:\nhttps://www.k24klik.com/p/spironolactone-dexa-25mg-tab-100s-1287#',
	Rifampicin:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/rifampicin-600-mg-10-tablet-kimia-farma/65386ad88473bf20fe5db15b',
	'Nitrokaf Retard':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/nitrokaf-retard-2%2C5-mg-10-kapsul/62a18714f15ee840f565e6f6',
	'Amlodipine Besylate':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/amlodipine-5-mg-10-tablet-novell/5fb37f1241ab59059e868b5b',
	'Simarc 2': 'K24klik:\nhttps://www.k24klik.com/p/lasix-40mg-tab-100s-159#',
	Lasix: 'K24klik:\nhttps://www.k24klik.com/p/lasix-40mg-tab-100s-159#',
	Rifastar: 'K24klik:\nhttps://www.k24klik.com/p/rifastar-4-fdc-3647#',
	Isoniazid:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/isoniazid-300-mg-10-tablet-kf/659fbc19e8c94800244a09c6',
	'Ventolin Inhaler':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ventolin-inhaler-100-mcg-200-dosis/5fb387ff41ab59059e86a0cd',
	'Seretide Inhaler':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/seretide-25-125-mcg-inhaler-120-dosis/5fb3888c41ab59059e86a23a',
	'Symbicort Turbuhaler':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/symbicort-turbuhaler-160-4%2C5-mcg-60-dosis/5fb388b541ab59059e86a2ac',
	Tamiflu: 'K24klik:\nhttps://www.k24klik.com/p/tamiflu-75mg-cap-10s-28981#',
	'Panadol Cold & Flu':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/panadol-cold-%26-flu-10-kaplet/5fb38a7e41ab59059e86a726',
	'Mixagrip Flu & Batuk': 'K24klik:\nhttps://www.k24klik.com/p/mixagrip-flu&batuk-capl-4s-strip-25s-8817',
	Zithromax:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/zithromax-500-mg-3-tablet/5fb3882b41ab59059e86a147',
	'Avelox Moxifloxacin': 'K24klik:\nhttps://www.k24klik.com/p/avelox-400mg-tab-5s-2879#',
	Azithromycin: 'K24klik:\nhttps://www.k24klik.com/p/azithromycin-infion-200mg-5ml-d-syr-15ml-24838#',
	Seretide:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/seretide-diskus-50-250-mcg-60-dosis/5fb3741141ab59059e8670a5',
	'Trelegy Ellipta': 'K24klik:\nhttps://www.k24klik.com/p/trelegy-ellipta-inh-30-dosis-32279#',
	'Spriva Respimat': 'K24klik:\nhttps://www.k24klik.com/p/spiriva-respimat-2.5mcg-single-pack-17759#',
	'Erythromycin ': 'K24klik:\nhttps://www.k24klik.com/p/erythromycin-if-500mg-cap-100s-24834#',
	'Proris Sirup':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/proris-100-mg-sirup-60-ml/5fb38aac41ab59059e86a785',
	'Promedex Sirup': 'K24klik:\nhttps://www.k24klik.com/p/promedex-syr-60ml-18727',
	Entrostop: 'K24klik:\nhttps://www.k24klik.com/p/entrostop-tab-12s-strip-2s-37',
	Diapet: 'Alodokter:\nhttps://www.alodokter.com/aloshop/products/diapet-10-kapsul/5fb37ed941ab59059e868adf',
	Imodium:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/imodium-2-mg-10-tablet/5fb3873041ab59059e869e6c',
	'Polysilane Suspensi':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/polysilane-suspensi-100-ml/5fb379de41ab59059e867f10',
	'Promag Suspensi':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/promag-suspensi-60-ml/61e782ebe139ec76d1985620',
	Omeprazole: 'K24klik:\nhttps://www.k24klik.com/p/omeprazole-novell-20mg-cap-30s-12#',
	'Promag suspensi':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/promag-suspensi-60-ml/61e782ebe139ec76d1985620',
	Ranitidine:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ranitidine-150-mg-10-tablet-promed/5fb37f2f41ab59059e868bb5',
	Dulcolax: 'K24klik:\nhttps://www.k24klik.com/p/dulcolax-tab-10s-42',
	Laxatab: 'K24klik:\nhttps://www.k24klik.com/p/laxatab-tab-6s-strip-20s-1628',
	Lactulax:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/lactulax-sirup-60-ml/5fb379cc41ab59059e867ee7',
	Ambeven: 'K24klik:\nhttps://www.k24klik.com/p/ambeven-cap-10s-strip-10s-55',
	'Ardium 500':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/ardium-500-mg-15-tablet/5fcd84a441ab590e7c94f7b9',
	'Nutrafor Wazzir': 'K24klik:\nhttps://www.k24klik.com/p/nutrafor-wazzir-cap-10s-strip-12s-35880',
	'Lanpracid Kapsul': 'K24klik:\nhttps://www.k24klik.com/p/lanpracid-30mg-cap-20s-10622#',
	'Grafazol Kaplet': 'K24klik:\nhttps://www.k24klik.com/p/grafazol-500mg-capl-100s-13792#',
	Floxigra:
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/floxigra-500-mg-10-kaplet/62a190baf15ee840f565fd9e',
	'Flagyl Forte':
		'Alodokter:\nhttps://www.alodokter.com/aloshop/products/flagyl-forte-500-mg-10-tablet/5fb3872241ab59059e869e43',
	Metronidazole: 'K24klik:\nhttps://www.k24klik.com/p/metronidazole-bernofarm-500mg-tab-100s-2422#',
	Duspatalin: 'K24klik:\nhttps://www.k24klik.com/p/duspatalin-135mg-tab-50s-16921',
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
