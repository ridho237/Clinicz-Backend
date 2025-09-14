const penyakitLabels = {
	0: 'Alopecia',
	1: 'Ambeien',
	2: 'Angina pektoris',
	3: 'Asma',
	4: 'Barotrauma',
	5: 'Bronkitis',
	6: 'Chalazion',
	7: 'Demam Berdarah',
	8: 'Diare',
	9: 'Disentri',
	10: 'Emfisema',
	11: 'Endokarditis',
	12: 'Ensefalitis',
	13: 'Faringitis',
	14: 'GERD',
	15: 'Gagal Jantung',
	16: 'Gendang telinga pecah',
	17: 'Hordeolum',
	18: 'Influenza',
	19: 'Irritable Bowel Syndrome (IBS)',
	20: 'Keratitis Herpes Simpleks',
	21: 'Keratitis Jamur',
	22: 'Kolesteatoma',
	23: 'Konjungtivitis',
	24: 'Konstipasi',
	25: 'Laringitis',
	26: 'Maag',
	27: 'Mastoiditis',
	28: 'Meningitis',
	29: 'Migrain',
	30: 'Neuralgia Trigeminal',
	31: 'Otitis Media',
	32: 'Otitis Media akut',
	33: 'Otosklerosis',
	34: 'Penyakit Jantung Rematik',
	35: 'Penyakit Katup Jantung',
	36: 'Pneumonia',
	37: 'Serangan Jantung',
	38: 'Sinusitis',
	39: 'Stroke',
	40: 'Tension Headache',
	41: 'Tipes',
	42: 'Tonsillitis',
	43: 'Tuberkulosis',
	44: 'Tukak lambung',
	45: 'Vertigo',
};

const deskripsiPenyakit = {
	'Demam Berdarah': 'Demam berdarah atau DBD dapat menyerang anak-anak dan orang dewasa. Penyakit ini menular ketika nyamuk pembawa virus Dengue menggigit penderita demam berdarah, kemudian menggigit orang yang sehat. Penyakit ini banyak ditemukan di daerah beriklim tropis, termasuk Indonesia, dan angka kejadian penyakit ini biasanya meningkat ketika musim hujan. Virus Dengue dapat mengakibatkan dua kondisi, yaitu demam dengue dan demam berdarah dengue (DBD). Bedanya, demam berdarah dengue dapat menyebabkan gejala yang berat, sedangkan demam dengue biasanya hanya menimbulkan gejala ringan. Namun, tahap awal kedua kondisi ini memiliki gejala yang mirip.',
	Migrain:
		'Migrain merupakan jenis sakit kepala yang terasa seperti berdenyut, dan umumnya hanya terjadi pada satu sisi kepala. Gejala sakit kepala lain yang sering menyertai migrain adalah rasa mual, muntah, pucat, rasa dingin pada ekstremitas, dan sensitif terhadap cahaya dan suara. Penyakit migrain biasanya akan mereda dalam kurun waktu 4 - 72 jam. Belum ada penyebab pasti mengapa seseorang mengalami penyakit migrain. Namun, penyakit ini dapat timbul melalui stress, kelelahan, mengkonsumsi makanan yang mengandung MSG, cokelat, keju.',
	'Tension Headache':
		'Tension headache, atau sakit kepala tipe ketegangan, adalah jenis sakit kepala yang paling umum terjadi. Kondisi ini ditandai dengan nyeri tumpul di kedua sisi kepala, sering kali digambarkan seperti ada tali yang mengikat kepala dengan kuat. Nyeri ini biasanya tidak berdenyut dan tidak diperparah oleh aktivitas fisik. Gejala lain yang mungkin menyertai termasuk sensitif terhadap cahaya (fotofobia), sensitif terhadap suara (fonofobia), serta ketegangan pada leher dan bahu. Penyebab utama tension headache adalah kontraksi otot-otot di kepala dan leher, yang dapat dipicu oleh stres, kelelahan, kurang tidur, postur tubuh yang buruk, atau penggunaan kacamata dengan ukuran yang tidak sesuai. Pengobatan meliputi penggunaan obat pereda nyeri seperti parasetamol atau ibuprofen, serta perubahan gaya hidup seperti mengelola stres, tidur yang cukup, dan olahraga teratur.',
	Sinusitis:
		'Sinusitis merupakan penyakit yang terjadi pada bagian hidung dimana terjadi peradangan atau pembengkakan pada lapisan sinus. Sinus merupakan sebuah rongga kecil yang saling terhubung melalui saluran udara di dalam tulang tengkorak. Rongga kecil ini terletak di bagian belakang tulang dahi (frontal), bagian dalam struktur tulang pipi (maxillary), kedua sisi batang hidung (ethmoidal), dan belakang mata (sphenoidalis) yang menjadi alasan mengapa para penderita sinusitis seringkali merasa sakit pada bagian kepala.',
	Vertigo:
		'Vertigo merupakan sebuah kondisi dimana penderitanya merasakan pusing pada bagian kepala yang akan membuat penderitanya merasa kehilangan keseimbangan, karena lingkungan disekitarnya berputar atau bergerak. Vertigo tidak dapat diprediksi oleh siapa pun, karena kondisi tersebut akan terjadi secara tiba-tiba tanpa adanya gejala awal. Vertigo dapat berlangsung selama beberapa menit hingga jam tergantung pada tingkat keparahan yang dirasakan oleh penderitanya. Vertigo terbagi menjadi ke dalam 2 jenis, yakni vertigo sentral yang terjadi akibat gangguan pada otak yang dapat terjadi akibat stroke, cedera kepala, tumor otak atau parkinson dan vertigo sentral yang disebabkan oleh gangguan pada telinga bagian dalam.',
	Stroke:
		'Stroke adalah kondisi yang terjadi ketika pasokan darah ke otak mengalami gangguan atau berkurang akibat penyumbatan (stroke iskemik) atau pecahnya pembuluh darah (stroke hemoragik). Tanpa pasokan darah, otak tidak akan mendapatkan asupan oksigen dan nutrisi, sehingga sel-sel pada sebagian area otak akan mati. Kondisi ini menyebabkan area tertentu pada otak tidak mendapat suplai oksigen dan nutrisi sehingga terjadi kematian sel-sel otak.',
	Meningitis:
		'Meningitis adalah penyakit yang menyerang cairan radang selaput otak dan sumsum tulang belakang karena infeksi menular. Penularannya pun sangat cepat, sehingga penderitanya rentan untuk kehilangan nyawa jika tidak ditangani segera. kondisi ini terjadi akibat peradangan pada selaput pelindung (meningen) di sekitar otak dan sumsum tulang belakang (spinal cord). Meningitis dapat berisiko pada kalangan apa saja, baik itu bayi, anak, dewasa, dan lanjut usia. Bayi dan anak lebih banyak terkena meningitis dari meningokokus, pneumokokus, dan Haemophilus influenzae.',
	Ensefalitis:
		'Radang otak atau ensefalitis adalah peradangan pada jaringan otak yang dapat menyebabkan gejala gangguan saraf. Gejala yang ditimbulkan dapat berupa penurunan kesadaran, kejang, atau gangguan dalam bergerak. Kondisi ini disebabkan oleh infeksi virus, bakteri, atau jamur. Radang otak tergolong dalam kondisi yang memerlukan penanganan dokter. Pada tahap awal, kondisi ini biasanya ditandai dengan beberapa keluhan yang menyerupai flu.',
	'Neuralgia Trigeminal':
		'Trigeminal neuralgia adalah kondisi yang ditandai dengan gejala nyeri wajah yang muncul secara tiba-tiba dan terasa seperti tertusuk atau tersengat listrik. Rasa nyeri ini biasanya muncul hanya pada salah satu sisi wajah, dan paling sering terjadi di wajah bagian bawah serta rahang. Saraf trigeminal adalah saraf yang bertanggung jawab atas sensasi di sekitar wajah.',
	Alopecia:
		'Alopesia atau alopecia adalah kerontokan rambut yang dipicu oleh penyakit autoimun. Kondisi ini sering kali ditandai dengan kebotakan pada rambut kepala atau biasa disebut dengan pitak. Ini adalah penyakit autoimun, yaitu kondisi di mana sistem kekebalan tubuh menyerang sel-sel sehat pada tubuh sendiri. Penyakit ini menyerang folikel rambut. Folikel rambut merupakan struktur tempat rambut akan tumbuh. Penyakit ini menyebabkan folikel rambut yang ada di kepala, wajah, atau tubuh menjadi semakin kecil dan berhenti memproduksi rambut, awalnya menimbulkan rambut rontok hingga mengakibatkan kebotakan jika dibiarkan.',
	'Otitis Media akut':
		'Otitis media Akut adalah peradangan pada telinga bagian tengah akibat infeksi virus atau bakteri. Kondisi ini muncul secara tiba-tiba dan ditandai dengan telinga memerah serta bengkak. Penderitanya juga bisa mengalami demam dan nyeri di telinga akibat cairan dan lendir yang terperangkap di dalam telinga.',
	'Otitis Media':
		'Otitis media atau radang telinga tengah adalah kondisi yang terjadi ketika virus atau bakteri menyebabkan area di belakang gendang telinga meradang. Semua orang bisa mengalami kondisi ini, tapi penyakit ini paling sering terjadi pada anak-anak.  ondisi ini sering kali dipicu oleh flu, batuk pilek, alergi, atau bisa juga karena faktor lain, seperti asap rokok.',
	'Gendang telinga pecah':
		'Gendang telinga pecah adalah kondisi ketika terdapat lubang atau robekan pada gendang telinga (membran timpani). Kondisi ini biasanya disebabkan oleh cedera pada telinga atau komplikasi dari infeksi telinga. Gendang telinga yang pecah dapat menyebabkan gangguan pendengaran. Hal ini juga dapat membuat telinga bagian tengah rentan terhadap infeksi. Gendang telinga yang pecah biasanya sembuh dalam beberapa minggu tanpa pengobatan. Namun, terkadang diperlukan penutup telinga atau operasi untuk menyembuhkannya.',
	Kolesteatoma:
		'Kolesteatoma adalah kumpulan sel-sel kulit yang tumbuh tidak normal di telinga bagian tengah, tepatnya di belakang gendang telinga. Kondisi ini dapat menyebabkan berbagai gangguan pada sistem pendengaran, keseimbangan, dan fungsi otot-otot wajah. kondisi ini juga dapat disebabkan oleh beberapa faktor yang menjadi dasar klasifikasi kolesteatoma yakni Kolesteatoma primer, Kolesteatoma sekunder, Kolesteatoma Kongenital.',
	Otosklerosis:
		'Otosklerosis adalah pengerasan atau pertumbuhan tulang yang tidak normal pada telinga bagian tengah.  Kondisi ini terjadi ketika proses remodeling pada tulang di sekitar telinga bagian tengah terjadi secara tidak normal. Remodeling sendiri merupakan proses alami pergantian tulang yang sudah tua menjadi tulang baru. Namun pada kasus otosklerosis, proses remodeling tulang di dalam telinga akan terjadi secara abnormal sehingga mengganggu kemampuan telinga untuk mendengar suara dari lingkungan sekitarnya.',
	Mastoiditis:
		'Mastoiditis adalah infeksi bakteri yang terjadi pada tulang mastoid, yaitu tulang besar yang terletak di bagian belakang telinga. Kondisi ini kerap terjadi pada anak-anak berusia di bawah usia 2 tahun. Namun, tidak menutup kemungkinan mastoiditis juga dialami oleh orang dewasa, terutama yang memiliki sistem imun lemah. Umumnya disebabkan oleh infeksi telinga tengah (otitis media) yang tidak diobati. Ketika tidak ditangani, kuman yang menginfeksi telinga tengah dapat menyebar ke telinga bagian dalam, kemudian ke tulang mastoid dan menyebabkan kerusakan pada tulang tersebut. ',
	Barotrauma:
		'Barotrauma adalah cedera jaringan yang disebabkan oleh perbedaan tekanan antara bagian dalam tubuh dan lingkungan sekitarnya, umumnya terjadi saat menyelam atau penerbangan. Kondisi ini paling sering memengaruhi telinga tengah dan sinus, tetapi juga dapat terjadi pada paru-paru dan saluran pencernaan. Gejala meliputi rasa sakit, gangguan pendengaran, hingga pusing.',
	Konjungtivitis:
		'Konjungtivitis adalah peradangan atau infeksi pada konjungtiva, yaitu selaput tipis yang melapisi bagian putih mata dan bagian dalam kelopak mata. Penyebabnya bisa berupa infeksi virus, bakteri, atau reaksi alergi. Gejala umum termasuk mata merah, berair, terasa gatal, dan terkadang mengeluarkan cairan.',
	'Keratitis Herpes Simpleks':
		'Keratitis Herpes Simpleks adalah infeksi kornea mata yang disebabkan oleh virus herpes simpleks tipe 1 (HSV-1). Virus ini dapat menyebabkan peradangan ringan hingga kerusakan serius pada kornea. Gejalanya meliputi nyeri mata, kemerahan, penglihatan kabur, dan sensitivitas terhadap cahaya.',
	'Keratitis Jamur':
		'Keratitis Jamur adalah infeksi pada kornea mata yang disebabkan oleh jamur, biasanya terjadi setelah trauma mata oleh benda tanaman atau pemakaian lensa kontak yang tidak higienis. Gejalanya termasuk nyeri, mata merah, gangguan penglihatan, dan keluarnya cairan dari mata.',
	Hordeolum:
		'Hordeolum, atau bintitan, adalah infeksi akut pada kelenjar di kelopak mata yang disebabkan oleh bakteri Staphylococcus aureus. Biasanya ditandai dengan benjolan merah dan nyeri di tepi kelopak mata, mirip jerawat. Bisa terjadi di bagian luar (eksternal) atau dalam (internal) kelopak mata.',
	Chalazion:
		'Chalazion adalah benjolan kecil yang muncul di kelopak mata akibat penyumbatan kelenjar minyak (meibomian). Berbeda dengan hordeolum, chalazion tidak menimbulkan rasa sakit dan berkembang lebih lambat. Benjolan ini bisa menghilang sendiri atau memerlukan perawatan jika membesar.',
	'Serangan Jantung':
		'Serangan jantung, atau infark miokard, terjadi ketika aliran darah ke otot jantung terhambat akibat penyumbatan atau penyempitan pembuluh darah. Penyumbatan ini biasanya disebabkan oleh penumpukan lemak, kolesterol, dan zat lainnya yang membentuk plak di arteri koroner. Jika plak tersebut pecah, dapat terbentuk gumpalan darah yang menghalangi aliran darah ke jantung, menyebabkan kerusakan atau kematian jaringan otot jantung. Gejala umum meliputi nyeri dada yang menjalar ke lengan kiri, leher, atau rahang, sesak napas, mual, dan keringat dingin.',
	'Gagal Jantung':
		'Gagal jantung adalah kondisi di mana jantung tidak mampu memompa darah secara efektif ke seluruh tubuh. Hal ini dapat disebabkan oleh berbagai faktor, termasuk penyakit jantung koroner, tekanan darah tinggi, dan kerusakan otot jantung. Ketika jantung melemah, darah dapat kembali ke paru-paru, menyebabkan penumpukan cairan dan sesak napas. Gejala lainnya meliputi kelelahan, pembengkakan pada kaki dan pergelangan kaki, serta detak jantung yang tidak teratur.',
	Endokarditis:
		'Endokarditis adalah peradangan pada lapisan dalam jantung (endokardium), termasuk katup jantung, yang disebabkan oleh infeksi bakteri atau jamur. Kondisi ini dapat menyebabkan kerusakan pada katup jantung dan komplikasi serius lainnya jika tidak ditangani dengan tepat. Gejala meliputi demam, kelelahan, nyeri otot, dan munculnya bintik-bintik merah pada kulit.',
	'Angina pektoris':
		'Angina pektoris adalah nyeri dada yang disebabkan oleh berkurangnya aliran darah ke otot jantung, sering kali akibat penyempitan arteri koroner. Nyeri ini biasanya dipicu oleh aktivitas fisik atau stres dan mereda dengan istirahat. Gejala meliputi rasa tertekan atau nyeri di dada, yang dapat menjalar ke lengan, leher, atau rahang.',
	'Penyakit Jantung Rematik':
		'Penyakit jantung rematik adalah kerusakan pada katup jantung yang disebabkan oleh demam rematik, suatu komplikasi dari infeksi tenggorokan oleh bakteri Streptococcus. Kondisi ini dapat menyebabkan peradangan dan jaringan parut pada katup jantung, yang mengganggu aliran darah normal. Gejala termasuk nyeri dada, sesak napas, dan kelelahan.',
	'Penyakit Katup Jantung':
		'Penyakit katup jantung terjadi ketika satu atau lebih katup jantung tidak berfungsi dengan baik, yang dapat mengganggu aliran darah melalui jantung. Penyebabnya termasuk kelainan bawaan, infeksi, dan degenerasi terkait usia. Gejala meliputi sesak napas, kelelahan, nyeri dada, dan pembengkakan pada pergelangan kaki atau kaki.',
	Tuberkulosis:
		'Tuberkulosis (TBC) adalah penyakit menular yang disebabkan oleh infeksi bakteri Mycobacterium tuberculosis. Bakteri ini umumnya menyerang paru-paru, namun dapat juga memengaruhi organ lain seperti ginjal, tulang belakang, dan otak. Penyakit ini menyebar melalui udara ketika penderita batuk atau bersin. Gejala TBC meliputi batuk kronis (terkadang berdarah), demam, keringat malam, penurunan berat badan, dan kelelahan. Pengobatan TBC memerlukan kombinasi antibiotik yang harus dikonsumsi secara teratur selama minimal 6 bulan.',
	Asma: 'Asma adalah penyakit kronis pada saluran pernapasan yang ditandai dengan peradangan dan penyempitan saluran napas, menyebabkan kesulitan bernapas. Gejala umum meliputi sesak napas, batuk, mengi (napas berbunyi), dan rasa sesak di dada. Pemicu asma bisa berupa alergen, aktivitas fisik, udara dingin, atau stres. Meskipun tidak dapat disembuhkan, asma dapat dikendalikan dengan pengobatan dan menghindari pemicu.',
	Influenza:
		'Influenza, atau flu, adalah infeksi virus yang menyerang saluran pernapasan, termasuk hidung, tenggorokan, dan paru-paru. Penyakit ini sangat menular dan dapat menyebabkan gejala seperti demam tinggi, batuk, sakit tenggorokan, nyeri otot, dan kelelahan. Influenza dapat sembuh dengan sendirinya, namun pada kelompok rentan seperti anak-anak, lansia, dan penderita penyakit kronis, dapat menyebabkan komplikasi serius. Vaksinasi tahunan dianjurkan untuk pencegahan.',
	Pneumonia:
		'Pneumonia adalah infeksi yang menyebabkan peradangan pada kantung udara (alveoli) di salah satu atau kedua paru-paru. Alveoli dapat terisi dengan cairan atau nanah, menyebabkan batuk berdahak, demam, menggigil, dan kesulitan bernapas. Penyebab pneumonia bisa berupa bakteri, virus, atau jamur. Pneumonia dapat berbahaya, terutama bagi bayi, lansia, dan individu dengan sistem kekebalan tubuh lemah.',
	Bronkitis:
		'Bronkitis adalah peradangan pada saluran bronkus yang menghubungkan tenggorokan dengan paru-paru. Kondisi ini biasanya disebabkan oleh infeksi virus dan berlangsung selama beberapa hari hingga minggu. Gejala utama meliputi batuk berdahak, sesak napas, dan rasa tidak nyaman di dada. Meskipun sering sembuh tanpa pengobatan khusus, penting untuk beristirahat dan menjaga hidrasi.',
	Emfisema:
		'Emfisema adalah penyakit paru-paru kronis yang terjadi akibat kerusakan pada alveoli (kantung udara) di paru-paru, yang menyebabkan kesulitan bernapas. Kondisi ini sering kali disebabkan oleh kebiasaan merokok jangka panjang. Gejala meliputi sesak napas, terutama saat aktivitas fisik, dan batuk kronis. Emfisema termasuk dalam kelompok penyakit paru obstruktif kronis (PPOK) dan tidak dapat disembuhkan, namun pengobatan dapat membantu mengelola gejala.',
	Faringitis:
		'Faringitis adalah peradangan pada faring (bagian belakang tenggorokan) yang menyebabkan sakit tenggorokan, terutama saat menelan. Penyebab umum faringitis adalah infeksi virus, namun bisa juga disebabkan oleh bakteri seperti Streptococcus. Gejala lainnya termasuk demam, batuk, dan pembengkakan kelenjar getah bening di leher. Pengobatan tergantung pada penyebabnya; faringitis virus biasanya sembuh sendiri, sementara faringitis bakteri memerlukan antibiotik.',
	Laringitis:
		'Laringitis atau peradangan pada pita suara merupakan sebuah kondisi dimana terjadinya peradangan yang menyebabkan terjadinya pembengkakan pada pita suara sehingga suara menjadi serak. Kondisi ini dapat disebabkan oleh beberapa faktor, seperti iritasi, infeksi virus, atau penggunaan pita suara secara berlebihan. Penyakit laringitis biasanya ditandai dengan beberapa kondisi, seperti tenggorokan yang terasa sakit, batuk, demam, suara menjadi serak, bahkan hingga kehilangan suara. Laringitis biasanya terjadi selama 2 - 3 minggu lamanya. Penyakit ini dapat berkembang menjadi laringitis kronis, jika penyakit tidak kunjung membaik selama lebih dari 3 minggu. ',
	Tonsillitis:
		'Tonsillitis, atau radang amandel, adalah peradangan pada tonsil (amandel), yaitu dua kelenjar getah bening yang terletak di bagian belakang tenggorokan. Kondisi ini umumnya disebabkan oleh infeksi virus atau bakteri, seperti Streptococcus pyogenes. Gejala tonsillitis meliputi sakit tenggorokan, kesulitan menelan, pembengkakan dan kemerahan pada tonsil, demam, sakit kepala, bau mulut, dan pembengkakan kelenjar getah bening di leher. Pada anak-anak, gejala tambahan bisa berupa kehilangan nafsu makan dan air liur berlebihan. Pengobatan tergantung pada penyebabnya; jika disebabkan oleh virus, perawatan biasanya bersifat suportif, seperti istirahat dan konsumsi cairan hangat. ',
	Diare:
		'Diare adalah kondisi di mana seseorang mengalami buang air besar (BAB) dengan tinja yang lembek atau cair lebih dari tiga kali dalam sehari. Penyebab diare meliputi infeksi virus, bakteri, atau parasit, intoleransi makanan, efek samping obat-obatan, dan gangguan pencernaan lainnya. Gejala yang menyertai dapat berupa kram perut, mual, muntah, demam, dan dehidrasi. Penanganan diare tergantung pada penyebabnya, namun penting untuk menjaga hidrasi dengan minum cairan yang cukup dan, jika perlu, menggunakan oralit. Pada kasus tertentu, terutama jika disebabkan oleh infeksi bakteri, dokter mungkin meresepkan antibiotik.',
	GERD: 'GERD adalah kondisi kronis di mana asam lambung naik ke kerongkongan, menyebabkan gejala seperti nyeri ulu hati, sensasi terbakar di dada, dan rasa asam di mulut. Penyebab utama GERD adalah melemahnya sfingter esofagus bagian bawah, yang seharusnya mencegah asam lambung naik. Faktor risiko meliputi obesitas, kehamilan, merokok, konsumsi alkohol, dan makanan tertentu. Penanganan GERD meliputi perubahan gaya hidup, seperti menghindari makanan pemicu, menurunkan berat badan, dan berhenti merokok, serta penggunaan obat-obatan seperti antasida, H2 blocker, atau proton pump inhibitor (PPI).',
	Maag: 'Maag atau gastritis adalah peradangan pada dinding lambung yang dapat disebabkan oleh infeksi bakteri Helicobacter pylori, penggunaan obat antiinflamasi nonsteroid (OAINS), konsumsi alkohol berlebihan, atau stres. Gejala umum meliputi nyeri ulu hati, mual, muntah, dan perut kembung. Pengobatan tergantung pada penyebabnya, namun umumnya melibatkan penggunaan antasida, H2 blocker, atau PPI, serta menghindari faktor pemicu.',
	Konstipasi:
		'Konstipasi adalah kondisi di mana seseorang mengalami kesulitan buang air besar atau frekuensi BAB yang kurang dari tiga kali seminggu. Penyebabnya meliputi pola makan rendah serat, kurang aktivitas fisik, dehidrasi, atau gangguan pada sistem pencernaan. Gejala termasuk tinja yang keras, perasaan tidak tuntas setelah BAB, dan perut kembung. Penanganan konstipasi meliputi peningkatan asupan serat dan cairan, olahraga teratur, dan, jika perlu, penggunaan laksatif sesuai anjuran dokter.',
	Ambeien:
		'Ambeien atau wasir adalah pembengkakan pembuluh darah di sekitar anus atau rektum bagian bawah. Kondisi ini dapat disebabkan oleh mengejan saat BAB, duduk terlalu lama, atau kehamilan. Gejala meliputi perdarahan saat BAB, rasa gatal atau nyeri di area anus, dan benjolan di sekitar anus. Pengobatan ambeien meliputi perubahan pola makan, penggunaan salep atau supositoria, dan, pada kasus yang parah, prosedur medis seperti ligasi atau operasi.',
	'Tukak lambung':
		'Tukak lambung adalah luka pada lapisan lambung atau usus dua belas jari yang disebabkan oleh ketidakseimbangan antara asam lambung dan faktor pelindung mukosa lambung. Penyebab utamanya adalah infeksi Helicobacter pylori dan penggunaan OAINS. Gejala meliputi nyeri ulu hati, mual, muntah, dan penurunan berat badan. Pengobatan melibatkan penggunaan antibiotik untuk infeksi H. pylori, PPI, dan perubahan gaya hidup.',
	Tipes:
		'Tipes atau demam tifoid adalah infeksi bakteri Salmonella typhi yang menyebar melalui makanan atau air yang terkontaminasi. Gejala meliputi demam tinggi, sakit kepala, nyeri perut, diare atau sembelit, dan ruam kulit. Pengobatan utama adalah antibiotik, serta menjaga hidrasi dan nutrisi yang adekuat. Pencegahan meliputi sanitasi yang baik dan vaksinasi.',
	Disentri:
		'Disentri adalah infeksi usus yang menyebabkan diare disertai darah atau lendir. Penyebabnya bisa berupa bakteri, seperti Shigella, atau parasit, seperti Entamoeba histolytica. Gejala termasuk diare berdarah, kram perut, mual, dan demam. Pengobatan tergantung pada penyebabnya, namun umumnya melibatkan antibiotik atau antiparasit, serta menjaga hidrasi.',
	Hepatitis:
		'Hepatitis adalah peradangan pada hati yang dapat disebabkan oleh infeksi virus, konsumsi alkohol berlebihan, atau penyakit autoimun. Terdapat beberapa jenis hepatitis, yaitu A, B, C, D, dan E, dengan gejala umum seperti mual, muntah, demam, kelelahan, urin berwarna gelap, dan kulit serta mata menguning. Pengobatan tergantung pada jenis hepatitis dan penyebabnya, serta dapat melibatkan antivirus, imunisasi, dan perubahan gaya hidup.',
	'Irritable Bowel Syndrome (IBS)':
		'IBS adalah gangguan fungsional pada usus besar yang ditandai dengan gejala seperti nyeri perut, kembung, diare, atau sembelit. Penyebab pasti IBS belum diketahui. Namun, faktor seperti stres, pola makan, dan gangguan pada sistem saraf usus diduga berperan. Penanganan IBS meliputi perubahan pola makan, manajemen stres, dan, jika perlu, penggunaan obat-obatan untuk meredakan gejala.',
};

const pencegahanPenyakit = {
	'Demam Berdarah':
		'"1. Menguras atau membersihkan penampungan air\n2. Menutup rapat penampungan air\n3. Menguras atau membersihkan penampungan air\n4. Plus pencegahan tambahan, seperti fogging atau memperbaiki parit yang tidak lancar"',
	Migrain:
		'1. Mencari tahu dan menghindari hal-hal yang dapat memicu migrain, misalnya makanan, kegiatan, atau obat-obatan tertentu\n2. Minum air putih yang cukup agar tetap terhidrasi\n3. Menerapkan pola makan dan pola tidur yang cukup serta teratur\n4. Berolahraga secara rutin dengan intensitas ringan hingga sedang, yang didahului dengan pemanasan\n5. Menjaga berat badan agar tetap ideal\n6. Menurunkan berat badan bila menderita obesitas\n7. Mengelola stres dengan baik, misalnya dengan meditasi, yoga, atau latihan pernapasan',
	'Tension Headache':
		'1. Terapi perilaku kognitif, untuk membantu mengelola stres, serta mengurangi frekuensi dan keparahan gejala sakit kepala tegang\n2. Terapi relaksasi, seperti yoga, meditasi, dan teknik napas dalam, untuk membantu pasien rileks saat sedang stres\n3. Terapi pijat, untuk membantu melemaskan otot-otot yang tegang, terutama pada daerah pundak, leher, dan kepala\n4. Terapi akupunktur, untuk merangsang pelepasan hormon endorfin yang dapat mengurangi nyeri',
	Sinusitis:
		'1. Menghindari paparan alergen jika memiliki alergi, misalnya terhadap debu atau makanan tertentu\n2. Tidak merokok dan sebisa mungkin menghindari paparan asap rokok\n3. Menjaga kebersihan tangan dengan rutin mencuci tangan menggunakan sabun dan air mengalir\n4. Mengelola stres dengan baik dan beristirahat yang cukup\n5. Minum air yang cukup agar tubuh tetap terhidrasi\n6. Mendapatkan vaksinasi flu setiap tahun, untuk menjaga kekebalan tubuh\n7. Menggunakan pelembab udara, terutama ketika cuaca kering\n8. Menghindari kontak langsung dengan orang yang sakit\n9. Berobat ke dokter gigi jika terdapat gigi yang berlubang',
	Vertigo:
		'1. Menghindari gerakan secara tiba-tiba agar tidak terjatuh\n2. Segera duduk jika kondisi ini menyerang\n3. Gunakan beberapa bantal agar posisi kepala saat tidur menjadi lebih tinggi\n4. Gerakkan kepala secara perlahan-lahan\n5. Hindari gerakan kepala mendongak, berjongkok, atau tubuh membungkuk\n6. Bagi pengidap penyakit meniere, batasi konsumsi garam dalam menu sehari-hari',
	Stroke:
		'1. Menjaga tekanan darah agar tetap normal\n2. Tidak merokok dan tidak mengonsumsi minuman beralkohol\n3. Menjaga berat badan ideal\n4. Berolahraga secara rutin Mengonsumsi makanan sehat\n5. Menjalani pemeriksaan rutin untuk kondisi medis yang diderita, misalnya diabetes dan hipertensi',
	Meningitis:
		'1. Vaksin meningitis, bertujuan untuk meningkatkan kekebalan tubuh terhadap bakteri penyebab meningitis, seperti meningokokus, pneumokokus, dan influenzae\n2. Istirahat cukup\n3. Jika terpapar dengan seseorang yang sedang atau memiliki meningitis, segera kunjungi dokter untuk mendapatkan antibiotik\n4. Menjaga kebersihan diri dengan mencuci tangan, menutup hidung saat bersin, menutup mulut saat batuk, menghindari peralatan makan dengan orang yang terinfeksi meningitis\n5. Hindari gigitan serangga yang menyebabkan Sahabat MIKA terjangkit meningitis bakteri',
	Ensefalitis:
		'1. Rajin mencuci tangan, terutama sebelum makan dan setelah dari kamar mandi\n2. Tidak berbagi penggunaan alat makan dengan orang lain\n3. Mencegah gigitan nyamuk, dengan mengenakan pakaian yang tertutup atau menggunakan losion antinyamuk',
	'Neuralgia Trigeminal':
		'1. Menghindari semua faktor risiko yang dapat memicu trigeminal neuralgia\n2. Menghindari olahraga ekstrim\n3. Menjaga kesehatan gigi dan mulut\n4. Kelola stres dengan baik\n5. Menerapkan pola makan yang sehat dan bergizi seimbang\n6. Mencuci muka dengan air hangat yang tidak terlalu dingin atau panas\n7. Mengonsumsi makanan yang lembut atau tidak terlalu keras',
	Alopecia:
		'1. Mengelola stres dengan baik\n2. Menjaga kebersihan kulit kepala dengan cara keramas secara rutin\n3. Mengonsumsi makanan sehat bergizi seimbang\n4. Hindari gaya penataan rambut yang melibatkan tarikan kencang pada rambut\n5. Membatasi penggunaan perangkat perawatan rambut yang berisiko merusak atau membuat rambut kering\n6. Membatasi penggunaan bahan kimia untuk rambut',
	'Otitis Media akut':
		'1. Cegah pilek dan penyakit pernapasan lainnya\n2. Hindari paparan asap rokok\n3. Berikan ASI kepada bayi Anda\n4. Berikan susu botol pada bayi Anda dalam posisi tegak\n5. Tetap ikuti perkembangan vaksinasi untuk anak usia 6 bulan keatas',
	'Otitis Media':
		'1. Cegah pilek dan penyakit pernapasan lainnya\n2. Hindari paparan asap rokok\n3. Berikan ASI kepada bayi Anda\n4. Berikan susu botol pada bayi Anda dalam posisi tegak\n5. Tetap ikuti perkembangan vaksinasi untuk anak usia 6 bulan keatas',
	'Gendang telinga pecah':
		'1. Jangan membersihkan telinga dengan benda apa pun\n2. Segera lakukan pemeriksaan ke dokter jika mengalami infeksi atau gangguan lain pada telinga\n3. Hindari melakukan perjalanan dengan pesawat ketika sedang mengalami pilek atau sinusitis\n4. Gunakan penutup telinga, kunyah permen karet, atau menguap saat terjadi perubahan tekanan telinga, agar tekanan yang ada di dalam telinga tetap stabil\n5. Gunakan penutup telinga jika bekerja di lingkungan yang bising',
	Kolesteatoma:
		'1. Tidak ada langkah pencegahan khusus yang dapat dilakukan jika kolesteatoma disebabkan oleh kelainan kongenital, Meski demikian, anak yang menderita kolesteatoma disarankan untuk menjalani pemeriksaan THT secara rutin untuk mencegah perburukan penyakit\n2. Jika kolesteatoma disebabkan oleh infeksi telinga berulang, pengobatan sejak dini sampai tuntas dapat mencegah terjadinya penyakit ini',
	Otosklerosis:
		'1. Otosklerosis tidak bisa dicegah, karena penyebabnya belum diketahui secara pasti\n2. Selain itu, sejumlah faktor yang dapat meningkatkan risiko terjadinya otosklerosis juga sulit dicegah, terutama faktor keturunan\n3. Oleh karena itu, konseling pranikah disarankan pada pasangan yang memiliki keluarga dengan riwayat otosklerosis',
	Mastoiditis:
		'1. Melakukan imunisasi dasar lengkap anak sesuai dengan jadwal\n2. Mengajari si kecil untuk mencuci tangan dengan sabun antiseptik dan air mengalir setiap selesai bermain, sebelum dan sesudah makan, serta setelah menggunakan toilet\n3. Memastikan kepala si kecil pada posisi yang benar selama sedang menyusu\n4. Hal ini dilakukan untuk menghindari masuknya susu ke dalam saluran pernapasan yang dapat menyebabkan infeksi\n5. Memberikan ASI eksklusif untuk mengoptimalkan daya tahan tubuh si kecil sehingga terhindar dari berbagai risiko penyakit infeksi\n6. Membatasi penggunaan empeng pada anak\n7. Pasalnya, penggunaan empeng dalam jangka panjang dapat meningkatkan risiko terjadinya otitis media\n8. Mengendalikan reaksi alergi sesegera mungkin',
	Barotrauma:
		'1. Minum obat: Jika sedang pilek, gunakan dekongestan sekitar 1 jam sebelum penerbangan\n2. Menggunakan penyumbat telinga (earplugs): Penyumbat telinga khusus untuk perjalanan udara dapat digunakan untuk memperlambat perubahan tekanan dan memberi waktu bagi telinga untuk menyesuaikan diri\n3. Jangan tidur saat pesawat akan mendarat dan cobalah untuk menguap atau menelan ludah untuk meredakan telinga yang pengang\n4. Konsumsi permen atau kunyahlah permen karet, karena gerakan mengunyah dan menelan bisa membantu mengendalikan tekanan udara di dalam telinga\n5. Gunakan manuver valsava saat mendaki gunung atau bepergian ke dataran tinggi\n6. Ulangi beberapa kali guna menyamakan tekanan udara antara telinga tempat yang dikunjungi',
	Konjungtivitis:
		'1. Mencuci tangan secara rutin dan tidak menyentuh mata secara langsung, terutama setelah bersalaman atau menyentuh penderita konjungtivitis\n2. Tidak berbagi pemakaian kosmetik atau barang pribadi, seperti handuk, dengan orang lain\n3. Tidak menggunakan obat tetes mata yang pernah dipakai untuk mata merah, guna menghindari penularan virus atau bakteri\n4. Gunakan handuk dan lap bersih setiap hari\n5. Jangan berbagi handuk atau waslap\n6. Ganti sarung bantal sesering mungkin',
	'Keratitis Herpes Simpleks':
		'1. Mencuci tangan dengan sabun dan air mengalir secara rutin\n2. Beristirahat dan tidur yang cukup\n3. Mengonsumsi makanan sehat, bergizi lengkap, dan seimbang\n4. Mengelola stres dengan baik',
	'Keratitis Jamur':
		'1. Mengenakan pelindung mata saat berada di luar ruangan dapat membantu mencegah infeksi mata akibat jamur yang disebabkan oleh cedera mata yang melibatkan material tanaman\n2. Mengenakan kacamata hitam dapat memberikan perlindungan\n3. Pekerja luar ruangan dan pekerja pertanian harus mengenakan kacamata pelindung yang sesuai\n4. Orang yang memakai lensa kontak harus merawat lensanya dengan benar\n5. Jika Anda menduga Anda mengalami infeksi mata, penting untuk segera menemui penyedia layanan kesehatan atau dokter mata',
	Hordeolum:
		'1. Tidak mengucek mata saat mata gatal, karena dapat memicu iritasi dan infeksi di kelopak mata\n2. Mencuci tangan sebelum menyentuh mata, terutama sebelum dan setelah menggunakan lensa kontak\n3. Memakai kacamata pelindung saat membersihkan rumah agar terhindar dari debu\n4. Tidak berbagi penggunaan handuk dan kosmetik mata dengan orang lain, terutama dengan orang yang sedang bintitan\n5. Memastikan lensa kontak sudah steril sebelum digunakan\n6. Tidak menggunakan kosmetik yang sudah kedaluwarsa dan tidak memakai kembali kosmetik mata yang pernah digunakan saat bintitan\n7. Memeriksakan diri ke dokter jika mengalami infeksi atau peradangan di sekitar kelopak mata\n8. Membersihkan wajah sebelum tidur',
	Chalazion:
		'1. Cuci tangan sebelum menyentuh mata\n2. Periksakan diri ke dokter secara rutin bila menderita kondisi yang meningkatkan risiko terserang kalazion\n3. Menghindari mengucek atau menggaruk mata\n4. Mencuci wajah dengan rutin sebelum tidur untuk menghilangkan kotoran dan riasan\n5. Memastikan kebersihan riasan atau make up yang digunakan, misalnya mengganti maskara atau eyeshadow setiap 2–3 bulan sekali',
	'Serangan Jantung':
		'1. Pemberian obat-obatan untuk mengatasi nyeri, mengatasi gumpalan darah, dan mengurangi beban kerja jantung\n2. Tindakan kateterisasi untuk membuka pembuluh darah arteri yang tersumbat atau pemasangan stent\n3. Operasi Coronary Artery Bypass Graft (CABG) untuk mengembalikan aliran darah ke jantung dengan membuat saluran baru\n4. Hindari merokok, pertahankan berat badan sehat dengan pola makan yang menyehatkan jantung\n5. Selain itu, berolahragalah secara teratur, serta kelola stres\n6. Risiko serangan jantung dapat meningkat jika ada kondisi seperti tekanan darah tinggi dan diabetes\n7. Diskusikan dengan dokter tentang seberapa sering kamu perlu melakukan pemeriksaan\n8. Apabila dokter meresepkan obat untuk melindungi dan meningkatkan kesehatan jantung, jalani perawatan sesuai petunjuknya',
	'Gagal Jantung':
		'1. Menjaga berat badan ideal\n2. Berhenti merokok\n3. Membatasi konsumsi minuman keras\n4. Berolahraga secara teratur\n5. Mengelola stres dengan baik\n6. Menjaga kadar kolesterol dan tekanan darah pada batas sehat\n7. Mengurangi asupan garam untuk menghindari penumpukan cairan',
	Endokarditis:
		'1. Menjaga kebersihan gigi dan mulut\n2. Memeriksakan diri ke dokter gigi secara teratur setiap 6 bulan\n3. Menghindari perilaku yang dapat memicu infeksi, seperti menggunakan jarum suntik yang tidak steril\n4. Melakukan pemeriksaan rutin ke dokter bila memiliki riwayat endokarditis sebelumnya, pernah menjalani operasi cangkok katup jantung, atau memiliki penyakit jantung bawaan',
	'Angina pektoris ':
		'1. Mengonsumsi makanan yang sehat dengan gizi seimbang\n2. Usahakan untuk membatasi asupan makanan berlemak (lemak trans)\n3. Berolahraga secara teratur\n4. Berhenti merokok\n5. Menjaga gula darah, tekanan darah tinggi, dan kolesterol dalam batas normal\n6. Memeriksakan diri ke dokter secara berkala jika menderita hipertensi, hiperkolesterolemia, atau diabetes\n7. Mengonsumsi obat-obatan untuk menurunkan kejadian angina dalam jangka panjang, seperti amlodipine',
	'Penyakit Jantung Rematik ':
		'1. Mencuci tangan dengan sabun dan air mengalir, terutama sebelum mengolah makanan atau sebelum makan\n2. Menghindari penyebaran bakteri dengan tidak berbagi peralatan makan, handuk, dan sarung bantal\n3. Menutup mulut dan hidung saat bersin atau batuk\n4. Mengonsumsi makanan bergizi lengkap seimbang\n5. Selalu mencuci tangan dengan air mengalir dan sabun antiseptik\n6. Mengonsumsi makanan yang bergizi dan seimbang\n7. Mengonsumsi antibiotik sesuai resep dokter',
	'Penyakit Katup Jantung':
		'1. Segera memeriksakan diri ke dokter jika memiliki indikasi atau tanda infeksi pada organ jantung\n2. Lebih aktif secara fisik, contohnya dengan berolahraga rutin selama 30 menit setiap harinya\n3. Mengonsumsi makanan sehat kaya nutrisi\n4. Menjaga berat badan ideal\n5. Mengonsumsi obat tekanan darah tinggi dan kolesterol tinggi untuk mengontrol penyakit',
	Tuberkulosis:
		'1. Makan makanan yang bergizi untuk meningkatkan daya tahan tubuh\n2. Menjaga sirkulasi udara yang baik dengan cara membuka pintu dan jendela tiap pagi  supaya rumah mendapatkan cukup sinar matahari dan udara segar\n3. Menjemur alas tidur agar tidak lembab\n4. Mendapatkan suntik vaksin BCG bagi anak usia di bawah 5 tahun untuk menghindari TB berat (meningitis dan milier)\n5. Olahraga rutin minimal 2x seminggu\n6. Tidak merokok\n7. Tidak membuang dahak atau meludah di sembarang tempat\n8. Terapkan etika batuk saat batuk atau bersin',
	Asma: '1. Menjalani vaksinasi influenza dan pneumonia secara teratur\r\n2. Mengetahui pemicu munculnya gejala asma dan menghindarinya\r\n3. Menerapkan gaya hidup sehat\r\n4. Mengelola stres\r\n5. Melakukan pemeriksaan ke dokter bila gejala tidak juga membaik setelah menjalani pengobatan',
	Influenza:
		'1. Pemberian vaksin flu tahunan adalah cara pencegahan utama\n2. Menghindari area dengan wabah flu\n3. Mencuci tangan dengan sabun dan air mengurangi risiko penularan\n4. Mencegah penyebaran virus ke mata, hidung, dan mulut',
	Pneumonia:
		'1. Mendapatkan vaksinasi pneumonia, baik untuk anak-anak maupun orang dewasa\n2. Membatasi kontak langsung atau tidak bertemu dengan orang yang sedang sakit\n3. Tingkatkan asupan nutrisi dengan konsumsi makanan sehat, terutama buah dan sayuran yang bersifat antiradang dan dapat meningkatkan sistem kekebalan tubuh\n4. Jaga kebersihan diri dan lingkungan dengan mencuci tangan sebelum dan sesudah makan, sebelum mengolah makanan, dan setelah pulang beraktivitas dari luar\n5. Jauhi rokok, minuman beralkohol, dan jaga jarak dengan orang yang sedang sakit batuk, pilek, atau pasien pneumonia itu sendiri',
	Bronkitis:
		'1. Mencuci tangan dengan sabun dan air mengalir secara rutin\n2. Tidak merokok dan menghindari asap rokok\n3. Menutup mulut dan hidung saat bersin\n4. Mendapatkan vaksin flu atau pneumonia\n5. Menghindari paparan zat berbahaya atau polusi udara\n6. Memastikan untuk tidur dan beristirahat yang cukup\n7. Mengonsumsi makanan sehat dan bergizi, seperti sayur atau buah-buahan',
	Emfisema:
		'1. Menghindari paparan asap rokok, asap-asap lain, seperti asap kendaraan, sebisa mungkin juga dihindari\n2. Mengenakan masker untuk mengurangi paparan zat di udara yang dapat mengiritasi paru-paru, terutama jika bekerja atau menetap di lingkungan yang berisiko menyebabkan paparan zat tersebut dalam jangka waktu panjang\n3. Mengubah pola makan\n4. Rutin olahraga\n5. Melakukan vaksinasi\n6. Menghentikan kebiasaan merokok',
	Faringitis:
		'1. Beristirahat yang cukup hingga kondisi terasa lebih baik\n2. Tidak terlalu banyak bicara, terutama bila suara sedang serak\n3. Minum air putih dalam jumlah yang cukup agar tidak mengalami dehidrasi\n4. Menggunakan pelembab udara (humidifier) jika udara dalam ruangan terasa kering\n5. Mengonsumsi makanan yang nyaman di tenggorokan, seperti sup kaldu hangat\n6. Berkumur dengan air garam hangat untuk meredakan nyeri tenggorokan\n7. Mengonsumsi permen pelega tenggorokan yang mengandung antiseptik, seperti amylmetacresol atau dequalinium chloride\n8. Menghindari paparan asap rokok dan polusi\n9. Menggunakan obat panas dalam yang dijual bebas',
	Laringitis:
		'1. Melakukan vaksinasi flu setiap tahun sesuai jadwal\n2. Membatasi konsumsi minuman beralkohol dan berkafein\n3. Tidak merokok\n4. Memperbanyak minum air putih\n5. Membiasakan cuci tangan sebelum dan sesudah makan, atau setelah dari toilet\n6. Menggunakan alat pelindung diri (APD) di tempat kerja\n7. Mengurangi volume suara ketika berbicara\n8. Memperbanyak asupan air putih',
	Tonsillitis:
		'1. Menjaga kebersihan diri\n2. Tidak melakukan kontak dengan orang yang terinfeksi\n3. Menggunakan masker ketika keluar rumah\n4. Mengonsumsi makanan untuk mengecilkan amandel dan mendukung penyembuhan',
	Diare:
		'1. Rajin mencuci tangan dengan sabun dan air mengalir, terutama sebelum dan setelah makan, serta sesudah menggunakan toilet\n2. Mencuci buah dan sayur, serta mengolah bahan makanan, seperti daging sampai benar-benar matang\n3. Minum air yang bersih dan aman\n4. Jika Anda tidak yakin tentang kualitas air, lebih baik meminum air kemasan atau mendidihkan air sebelum minum\n5. Memberikan ASI eksklusif pada 6 bulan pertama bagi bayi, guna membantu membentuk antibodi dalam melawan mikroorganisme penyebab diare\n6. Menjalani vaksinasi rotavirus, untuk melindungi bayi dari serangan virus yang paling umum menyebabkan diare',
	GERD: '1. Menurunkan berat badan, jika memiliki berat badan yang berlebih\n2. Tidak merokok\n3. Meninggikan kepala saat tidur\n4. Tidak berbaring atau tidur setidaknya dalam waktu 2 hingga 3 jam setelah makan\n5. Menghindari makanan atau minuman yang memicu asam lambung naik, seperti alkohol, susu, makanan yang pedas dan berlemak, cokelat, mint, buah asam seperti jeruk nipis, dan kopi\n6. Tidak mengenakan pakaian yang terlalu ketat',
	Maag: '1. Membatasi konsumsi makanan pedas atau berlemak\n2. Mengurangi konsumsi minuman beralkohol dan berkafein, seperti kopi\n3. Bila sakit maag dipicu oleh stres, carilah metode baru untuk mengelola stres seperti bermeditasi\n4. Makan dalam porsi kecil dan secara perlahan\n5. Jangan berolahraga dengan perut penuh\n6. Jangan berbaring tepat setelah makan\n7. Tidak merokok',
	Konstipasi:
		'1. Makan banyak buah-buahan, sayuran, dan biji-bijian\n2. Makan makanan berserat tinggi dan konsumsi suplemen serat bila perlu\n3. Minum banyak air\n4. Hindari alkohol dan kafein karena dapat menyebabkan dehidrasi\n5. Dapatkan olahraga teratur\n6. Konsumsi probiotik secara teratur, seperti yang ada dalam yoghurt dan kefir dengan kultur bakteri baik yang aktif atau hidup',
	Ambeien:
		'1. Konsumsi makanan yang kaya serat\n2. Perbanyak asupan cairan tubuh\n3. Jangan tunda buang air besar\n4. Hindari mengejan berlebihan\n5. Hindari duduk terlalu lama\n6. Lakukan olahraga secara teratur',
	'Tukak lambung':
		'1. Cuci tangan secara rutin, terutama sebelum makan dan setelah dari toilet\n2. Cuci bahan makanan dan masak hingga benar-benar matang\n3. Hindari mengonsumsi minuman beralkohol\n4. Pastikan air yang diminum bersih dan sudah dimasak\n5. Batasi penggunaan obat antiinflamasi nonsteroid (OAINS) sesuai anjuran dokter\n6. Perbanyak makan sayur, buah, dan biji-bijian\n7. Hentikan kebiasaan merokok',
	Tipes:
		'1. Mencuci tangan dengan sabun dan air mengalir\n2. Mengonsumsi makanan yang benar-benar matang\n3. Mencuci sayur dan buah sebelum dikonsumsi\n4. Minum air yang telah terjamin kebersihannya\n5. Menghindari kontak dengan pengidap yang memiliki tipes aktif guna membantu mencegah penularan\n6. Menggunakan masker untuk membantu mengurangi risiko penularan melalui percikan air liur\n7. Merebus air hingga matang sebelum diminum jika menggunakan air keran\n8. Membatasi konsumsi jajanan dan minuman yang dijual di pinggir jalan',
	Disentri:
		'1. Mencuci tangan secara rutin, terutama setelah memakai toilet atau membuang sampah serta sebelum makan atau menyiapkan makanan\n2. Tidak berbagi pakai barang pribadi, seperti handuk dan sikat gigi, dengan orang lain\n3. Mencuci bersih sayur-sayuran dan buah-buahan\n4. Menghindari konsumsi makanan yang tidak matang\n5. Rutin membersihkan toilet dan kamar mandi\n6. Menghindari minum air yang tidak bersih',
	Hepatitis:
		'1. Melakukan hubungan seksual yang aman dengan menggunakan pengaman dan menghindari bergonta-ganti pasangan untuk mengurangi risiko hepatitis B dan C\n2. Menghindari berbagi jarum suntik\n3. Mengurangi konsumsi alkohol\n4. Menjaga kebersihan sumber air\n5. Mencuci bahan makanan yang kamu konsumsi, terutama kerang dan tiram, sayuran, serta buah-buahan\n6. Tidak berbagi pakai sikat gigi, pisau cukur, atau jarum suntik dengan orang lain\n7. Tidak menyentuh darah tanpa sarung tangan pelindung',
	'Irritable Bowel Syndrome (IBS)':
		'1. Menghindari konsumsi makanan dan minuman penyebab IBS\n2. Makan secara perlahan dan tidak terburu-buru\n3. Makan dengan porsi yang tidak berlebihan\n4. Mengonsumsi makanan yang bergizi seimbang\n5. Mengonsumsi makanan yang mengandung prebiotik dan probiotik\n6. Tidur dengan waktu yang cukup dan tidak begadang\n7. Berolahraga secara teratur setidaknya 30 menit sehari',
};

const penyebabPenyakit = {
	'Demam Berdarah': '1. Virus dengue dan ditularkan melalui gigitan nyamuk Aedes aegypt dan Aedes albopictus',
	Migrain:
		'1. Beberapa wanita mengaku terserang migrain ketika kadar hormon estrogen mengalami penurunan, seperti sebelum atau saat haid, hamil, atau menopause\n2. Konsumsi makanan olahan atau makanan dengan rasa asin, makanan yang mengandung pemanis tambahan atau perasa gurih, dan minuman kafein atau beralkohol juga bisa meningkatkan risikonya\n3. Adanya pemicu dari lingkungan, seperti paparan asap rokok, aroma parfum yang menyengat, dan penghapus cat\n4. Mengalami stres, gelisah berlebihan, terlalu gembira, dan depresi\n5. Kebiasaan buruk, seperti tubuh kelelahan, kualitas tidur dan postur tubuh yang buruk, mengalami gangguan tidur, hipoglikemia, dan sehabis berolahraga berat\n6. Efek samping dari konsumsi obat tertentu, misalnya pil KB atau sedang menjalani terapi hormon',
	'Tension Headache':
		'1. Stres\n2. Depresi\n3. Kelaparan\n4. Dehidrasi\n5. Kebiasaan memicingkan mata\n6. Kelelahan atau kurang tidur\n7. Kurang aktivitas atau kurang berolahraga\n8. Kebiasaan merokok\n9. Postur tubuh yang buruk atau posisi tidur yang salah\n10. Paparan sinar matahari yang terik\n11. Aroma yang tajam\n12. Suara berisik\n13. Konsumsi terlalu banyak minuman berkafein atau beralkohol\n14. Kondisi lain, seperti flu, infeksi sinus, pilek, atau gangguan pada gigi dan rahang',
	Sinusitis:
		'1. Pilek\n2. Rhinitis alergi, yaitu peradangan pada rongga hidung akibat reaksi alergi\n3. Polip hidung\n4. Tulang hidung bengkok (deviasi septum)\n5. Infeksi saluran pernapasan',
	Vertigo:
		'1. Vertigo posisi paroksismal jinak (BPPV)\n2. Infeksi\n3. Labirinitis\n4. Vestibular Neuritis\n5. Penyakit meniere\n6. Migrain\n7. Cedera kepala atau leher\n8. Trauma telinga\n9. Penggunaan Obat-obatan',
	Stroke:
		'1. Kelemahan pada salah satu sisi tubuh\n2. Lemah pada otot-otot wajah\n3. Kesulitan mengangkat kedua lengan akibat lemas atau mati rasa\n4. Kesulitan berbicara\n5. Disartria\n6. Kesemutan\n7. Kesulitan mengenal wajah',
	Meningitis:
		'1. Bakteri Neisseria meningitidis (Meningokokus)\n2. Bakteri Streptococcus pneumoniae (Pneumokokus) Bakteri Haemophilus influenzae\n3. Bakteri Streptococcus agalactiae (Streptokokus grup B)',
	Ensefalitis:
		'1. Virus herpes simpleks, penyebab penyakit herpes di mulut dan herpes genital, serta herpes pada bayi\n2. Virus Varicella zoster, penyebab cacar air dan herpes zoster\n3. Virus Epstein-Barr, penyebab penyakit mononukleosis\n4. Virus penyebab penyakit campak (measles), gondongan (mumps), dan rubela\n5. Virus dari hewan, seperti rabies dan virus nipah\n6. Virus SARS-CoV-2 (COVID-19)\n7. Japanese encephalitis virus, penyebab Japanese encephalitis',
	'Neuralgia Trigeminal':
		'1. Hipertensi yang memengaruhi sirkulasi darah, termasuk aliran darah ke saraf trigeminal\n2. Sinusitis yang menyebar ke daerah di sekitar saraf trigeminal\n3. Mengalami gangguan fungsi saraf akibat saraf tertekan oleh pembuluh darah yang melebar atau tumor di sekitarnya\n4. Mengalami cedera pada saraf trigeminal, misalnya akibat trauma pada wajah atau efek dari operasi\n5. Menderita kondisi yang dapat merusak selaput pelindung saraf (mielin), seperti penyakit multiple sclerosis',
	Alopecia:
		'1. Perubahan atau gangguan hormonal, seperti kehamilan, melahirkan, atau menopause\n2. Penyakit kelenjar tiroid\n3. Keadaan stres pada seseorang\n4. Penyakit autoimun\n5. Defisiensi nutrisi, terutama kekurangan asupan zat besi atau protein\n6. Infeksi jamur pada kulit kepala',
	'Otitis Media akut':
		'1. Penurunan kekebalan tubuh akibat human immunodeficiency virus (HIV), diabetes, dan defisiensi imun lainnya\n2. Predisposisi genetik\n3. Musin yang mencakup kelainan ekspresi gen ini, terutama peningkatan regulasi MUC5B\n4. Kelainan anatomi langit-langit dan tensor veli palatini\n5. Disfungsi silia\n6. Implan koklea\n7. Kekurangan Vitamin A\n8. Patogen bakteri,  Streptococcus pneumoniae , Haemophilus influenza, dan Moraxella (Branhamella) catarrhalis  bertanggung jawab atas lebih dari 95%\n9. Patogen virus seperti virus pernapasan syncytial, virus influenza, virus parainfluenza, rhinovirus, dan adenovirus Alergi\n10. Kurangnya pemberian ASI',
	'Otitis Media':
		'1. Infeksi yang berkaitan dengan adenoid: Adenoid merupakan bagian sistem imun tubuh yang berfungsi melawan bakteri dan virus\n2. Infeksi yang berkaitan dengan saluran eustachius: Apabila terjadi infeksi atau reaksi alergi pada organ pernapasan, saluran eustachius bisa ikut tersumbat\n3. Tuba Eustachius pada anak-anak lebih kecil dibandingkan pada orang dewasa\n4. adenoid anak-anak relatif lebih besar dibandingkan orang dewasa',
	'Gendang telinga pecah':
		'1. Infeksi: Infeksi telinga, terutama di telinga bagian tengah (otitis media), merupakan penyebab umum terjadinya gendang telinga pecah\n2. Infeksi telinga membuat cairan di telinga menumpuk sehingga gendang telinga bisa tertekan dan robek\n3. Tekanan: Perbedaan drastis pada tekanan antara telinga luar dan telinga tengah, seperti saat menyelam, naik pesawat, berkendara ke dataran tinggi, atau mendaki gunung, dapat menyebabkan gendang telinga robek\n4. Cedera: Pecahnya gendang telinga juga dapat disebabkan oleh cedera pada telinga atau sisi kepala\n5. Suara keras: Suara yang sangat keras atau suara ledakan, seperti suara tembakan, dapat menyebabkan gendang telinga pecah\n6. Kondisi ini disebut dengan acoustic trauma\n7. Namun, kasus seperti ini jarang terjadi',
	Kolesteatoma:
		'1. Gangguan pada tuba eustachius\n2. Infeksi telinga yang terjadi lama (kronis)\n3. kerusakan pada gendang telinga akibat cedera, infeksi, ataupun efek samping setelah operasi telinga\n4. kelainan kongenital tanpa adanya riwayat infeksi sebelumya\n5. Sinusitis\n6. Batuk pilek\n7. Rhinitis alergi',
	Otosklerosis:
		'1. Otosklerosis terjadi karena adanya pertumbuhan tulang abnormal di telinga bagian tengah, dan paling sering terjadi pada tulang sanggurdi atau stapes (tulang penghubung antara telinga dalam dan telinga tengah)',
	Mastoiditis:
		'1. Infeksi jamur telinga (otomikosis) yang tidak tertangani dengan baik, misalnya jamur Candida atau Aspergillus\n2. Infeksi Bakteri Group A beta-hemolytic streptococci\n3. Infeksi Bakteri Staphylococcus aureus\n4. Infeksi Bakteri Streptococcus pyogenes\n5. Infeksi Bakteri Haemophilus influenzae\n6. Infeksi Bakteri Moraxella catarrhalis',
	Barotrauma:
		'1. Merbedaan tekanan udara di dalam dan di luar telinga\n2. Melakukan aktivitas menyelam (scuba diving)\n3. Mengalami cedera telinga akibat ledakan\n4. Menjalani terapi pengobatan oksigen hiperbarik\n5. Melakukan pendakian ke puncak gunung\n6. Mengendarai kendaraan di perbukitan atau pegunungan',
	Konjungtivitis:
		'1. Konjungtivitis sering kali disebabkan oleh infeksi virus (konjungtivitis virus)\n2. Reaksi terhadap obat tetes mata\n3. Iritan terhadap shampoo, kotoran, asap, dan klorin\n4. Jamur, amuba, dan parasit',
	'Keratitis Herpes Simpleks':
		'1. Memiliki daya tahan tubuh lemah, misalnya karena menderita HIV atau menjalani kemoterapi Mengalami stres berat\n2. Mengalami demam\n3. Sedang menstruasi\n4. Mengalami cedera mata',
	'Keratitis Jamur':
		'1. Cedera mata, terutama dengan bahan tanaman (misalnya duri atau tongkat)\n2. Operasi mata atau prosedur mata invasif\n3. Produk medis yang terkontaminasi merupakan faktor risiko potensial\n4. Penyakit mata kronis yang melibatkan permukaan mata\n5. Mengenakan lensa kontak',
	Hordeolum:
		'1. Minyak dan kotoran yang menyumbat lubang tempat akar bulu mata\n2. Infeksi Bakteri Staphylococcus aureus\n3. Bersalaman dengan penderita yang baru saja menyentuh atau mengucek mata yang terinfeksi',
	Chalazion:
		'1. Tersumbatnya kelenjar minyak di mata yang berfungsi menjaga kelembapan mata, sehingga menimbulkan peradangan\n2. Rosacea (penyakit kulit kemerahan dan berjerawat).\n3. Memiliki kulit kering.\n4. Konsentrasi lemak darah yang tinggi.',
	'Serangan Jantung':
		'1. Spasme arteri koroner, Kondisi ini terjadi ketika terjadi kejang atau kontraksi mendadak pada dinding arteri koroner, yang menyebabkan penyempitan atau penutupan sementara aliran darah ke jantung, meskipun tidak ada sumbatan permanen\n2. Kondisi medis yang langka, Contohnya adalah penyakit apapun yang menyebabkan penyempitan pembuluh darah yang tidak biasa\n3. Trauma, Misalnya, adanya robekan atau pecahnya arteri koroner\n4. Obstruksi yang berasal dari tempat lain di tubuh, Misalnya, adanya gumpalan darah atau gelembung udara (emboli) yang terperangkap di arteri koroner\n5. Gangguan makan, Kondisi tersebut dapat merusak jantung seiring berjalannya waktu, sehingga mengakibatkan serangan jantung\n6. Arteri koroner anomali, Yaitu cacat jantung bawaan yang dimiliki sejak lahir, di mana arteri koroner berada pada posisi yang berbeda dari biasanya di tubuh\n7. Kondisi tersebut dapat menyebabkan serangan jantung',
	'Gagal Jantung':
		'1. Gangguan ritme jantung\n2. Gangguan otot jantung atau kardiomiopati\n3. Infeksi pada jantung atau miokarditis\n4. Muncul karena katup jantung yang rusak\n5. Akibat melemahnya ruang jantung atau ventrikel kiri yang bertugas memompa darah ke seluruh tubuh\n6. Akibat kakunya ventrikel sebelah kiri, sehingga jantung sulit terisi darah\n7. Penyakit jantung koroner\n8. Penyakit jantung bawaan sejak lahir\n9. Kekurangan sel darah merah atau anemia\n10. Memiliki kondisi kesehatan seperti hipertensi, diabetes, ataupun penyakit tiroid',
	Endokarditis:
		'1. Gigi yang berlubang atau infeksi pada rongga mulut, sehingga kuman dapat masuk dengan mudah ke aliran darah\n2. Bagian tubuh lain yang terinfeksi, misalnya infeksi di kulit, infeksi menular seksual, atau infeksi di saluran pencernaan\n3. Kateter urine atau jarum infus, terutama yang telah dipasang dalam jangka waktu lama, misalnya pada pasien stroke atau cuci darah\n4. Jarum suntik yang terkontaminasi kuman, baik pada penggunaan NAPZA suntik, pembuatan tato, maupun pemasangan tindik',
	'Angina pektoris ':
		'1. Kebiasaan merokok\n2. Riwayat tekanan darah tinggi atau hipertensi\n3. Kadar kolestrol jahat (LDL) dan trigliserida yang tinggi\n4. Diabetes\n5. Riwayat penyakit jantung di dalam keluarga\n6. Jarang berolahraga dan tidak aktif bergerak\n7. Obesitas\n8. Usia di atas 45 tahun untuk laki-laki dan di atas 55 tahun untuk wanita\n9. Memiliki gumpalan darah yang juga dapat menyumbat arteri\n10. Adanya pengerasan dan penyempitan arteri akibat plak\n11. Mengidap penyempitan arteri (aterosklerosis)',
	'Penyakit Jantung Rematik ':
		'1. Tidak mendapatkan antibiotik yang cukup sensitif terhadap bakteri penyebab infeksi\n2. Tidak mendapatkan penanganan infeksi bakteri group A streptococcus yang tepat dan cepat\n3. Lingkungan yang padat penduduk, kotor, dan tidak sehat\n4. Jarang mencuci tangan\n5. Kelainan genetik yang mungkin membuat seseorang menjadi lebih rentan terkena penyakit\n6. Jarang mencuci tangan, terutama setelah bersin, batuk, atau sebelum makan',
	'Penyakit Katup Jantung':
		'1. Katup menjadi tebal atau kaku dan terkadang dapat menyatu\n2. Pembukaan katup menjadi menyempit\n3. Katup mungkin tidak menutup rapat, menyebabkan darah bocor kembali\n4. Katup-katup menjadi teregang dan lemas Katup-katup tersebut menonjol ke belakang seperti parasut\n5. Katup tidak terbentuk\n6. Lapisan jaringan padat menghalangi aliran darah di antara ruang-ruang jantung',
	Tuberkulosis:
		'1. Penularan tuberkulosis (TBC) terjadi ketika seseorang tidak sengaja menghirup percikan ludah (droplet) saat seseorang yang terinfeksi TBC bersin atau batuk\n2. Infeksi Primer, Tahap ini terjadi saat udara yang mengandung bakteri penyebab TB terhirup oleh hidung atau mulut hingga masuk menuju paru-paru dan berkembang biak\n3. Infeksi Laten, Ketika bakteri mulai berkembang, sistem imun akan melakukan perlawanan\n4. Ketika sistem imun berhasil melawannya, maka bakteri akan “tertidur” dan tidak aktif menginfeksi\n5. Sehingga, orang yang terinfeksi tidak akan merasakan gejala apapun\n6. Infeksi Aktif, Sebaliknya saat imun tubuh tidak berhasil melawan bakteri yang masuk dan berkembang biak, maka bakteri akan bebas menyerang sel-sel sehat pada paru-paru\n7. Kondisi ini akan membuat pengidapnya merasakan gejala',
	Asma: '1. Asap rokok\n2. Debu\n3. Bulu hewan\n4. Udara dingin\n5. Infeksi virus\n6. Paparan zat kimia\n7. Perubahan emosi atau stres\n8. Serbuk sari\n9. Polusi  udara\n10. Serbuk kayu',
	Influenza:
		'1. Virus influenza menyebar melalui udara dalam tetesan atau percikan liur (droplet) ketika seseorang yang terinfeksi batuk, bersin, atau berbicara\n2. Kamu dapat menghirup tetesannya secara langsung, atau mendapatkan virus saat memegang benda tertentu, dan kemudian menyentuh mata, hidung, atau mulut\n3. Orang yang terinfeksi virus kemungkinan dapat menularkan virusnya sejak sekitar satu hari sebelum gejala muncul, sampai sekitar lima hari setelah gejala muncul\n4. Anak-anak dan orang-orang dengan sistem kekebalan yang lemah mungkin akan menularkannya dalam waktu yang sedikit lebih lama\n5. Virus influenza terus bermutasi, dengan jenis baru yang muncul secara teratur\n6. Jika kamu pernah mengalami influenza sebelumnya, tubuh telah membuat antibodi untuk melawan jenis virus influenza tertentu',
	Pneumonia:
		'1. Perokok aktif\n2. Memiliki riwayat stroke\n3. Bayi berusia 0-2 tahun, dan lansia di atas usia 65 tahun\n4. Penggunaan obat-obatan tertentu yang menyebabkan masalah pada sistem imun, seperti steroid, konsumsi antibiotik dalam jangka panjang, dan lainnya\n5. Memiliki riwayat asma, gagal jantung, diabetes, HIV/AIDS, cystic fibrosis, dan penyakit kronis lainnya\n6. Sedang menjalani kemoterapi\n7. Kondisi ini bisa membuat sistem kekebalan tubuh menurun, sehingga virus dan bakteri mudah menyerang',
	Bronkitis:
		'1. Infeksi Bakteri: Seperti Mycoplasma pneumoniae, Chlamydophila pneumoniae\n2. Infeksi Virus: Seperti Rhinovirus, Coronavirus\n3. Paparan zat yang menyebabkan iritasi, seperti debu dan asap\n4. Penyakit refluks asam lambung (GERD)',
	Emfisema: '1. Asap rokok\n2. Polusi udara\n3. Asap atau debu bahan kimia dari lingkungan',
	Faringitis:
		'1. Infeksi bakteri: Seperti Neisseria gonorrhoeae, Chlamydia trachomatis\n2. Infeksi virus: Seperti Adenovirus, Rhinovirus\n3. Infeksi jamur: Seperti Candida',
	Laringitis:
		'1. Cedera pita suara: penggunaan pita suara yang berlebihan ketika berbicara, bernyanyi, atau berteriak\n2. Infeksi virus: Seperti Respiratory syncytial virus(RSV), Epstein-Barr Virus(EBV)\n3. Infeksi bakteri: Seperti Corynebacterium diphtheria\n4. Perubahan bentuk pita suara karena faktor usia\n5. Kelumpuhan pita suara akibat cedera atau penyakit tertentu, seperti stroke\n6. Sering terpapar bahan yang menyebabkan iritasi atau reaksi alergi, misalnya debu atau bahan kimia',
	Tonsillitis:
		'1. Infeksi virus rubella\n2. Infeksi virus Adenovirus\n3. Infeksi virus Influenza\n4. Infeksi virus Rhinovirus',
	Diare:
		'1. Infeksi virus, seperti rotavirus, yang ditandai dengan diare berair dan biasanya terjadi pada anak-anak\n2. Infeksi bakteri Campylobacter dan Escherichia coli, yang biasanya disebut dengan keracunan makanan, disebabkan oleh konsumsi makanan yang tidak dimasak sampai matang\n3. Infeksi bakteri Clostridium difficile, yang ditandai dengan diare berair dan kram perut setelah konsumsi antibiotik\n4. Infeksi bakteri Salmonella, yang biasanya terjadi akibat konsumsi daging kurang matang, terutama daging ayam, dan telur mentah atau setengah matang\n5. Amebiasis dan infeksi bakteri Shigella, yang ditandai dengan tinja berbau amis, berdarah, atau berlendir\n6. Infeksi Cryptosporidium (kriptosporidiosis), yang terjadi setelah meminum atau tidak sengaja menelan air yang terkontaminasi dan tidak dimasak\n7. Alergi makanan, yang ditandai dengan diare beberapa menit atau maksimal 2 jam setelah mengonsumsi makanan pemicu alergi\n8. Intoleransi laktosa, yang biasanya disertai dengan kembung, feses berbau asam, serta anus perih atau kemerahan setelah konsumsi makanan dengan kandungan susu\n9. Efek samping terapi medis, seperti kemoterapi, radioterapi, atau operasi\n10. Penyakit lain, seperti hepatitis atau kanker usus besar',
	GERD: '1. Melemahnya sfingter esofagus bagian bawah\n2. Sfingter esofagus adalah otot yang memisahkan kerongkongan dan lambung\n3. Dalam kondisi normal, otot ini berfungsi menutup agar isi lambung tidak naik ke kerongkongan\n4. Saat makan, sfingter akan terbuka untuk membiarkan makanan masuk ke lambung\n5. Setelah makanan masuk, sfingter seharusnya kembali menutup rapat\n6. Jika sfingter melemah, ia tidak bisa menutup dengan sempurna\n7. Akibatnya, asam lambung bisa naik kembali ke kerongkongan (terjadi refluks)\n8. Refluks yang terjadi berulang dapat mengiritasi lapisan kerongkongan',
	Maag: '1. Rasa nyeri karena maag akut disebabkan oleh asam lambung yang bersentuhan dengan lapisan mukosa\n2. Sakit maag dapat disebabkan oleh penyakit pada organ di saluran pencernaan, seperti tukak lambung, infeksi bakteri H\n3. pylori, peradangan di lambung (gastritis), dan penyakit refluks asam lambung (GERD)\n4. Sakit maag juga bisa terjadi akibat diabetes yang tidak terkontrol\n5. Kondisi ini disebut gastroparesis diabetik\n6. Mengonsumsi makanan berminyak, berlemak dan pedas\n7. Terlalu banyak mengonsumsi minuman berkafein dan soda',
	Konstipasi:
		'1. Robekan kecil di kulit sekitar anus (fisura anus)\n2. Penyumbatan di usus (obstruksi usus)\n3. Kanker usus besar\n4. Penyempitan usus besar (striktur usus)\n5. Kanker perut lainnya yang menekan usus besar\n6. Kanker rektal\n7. Rektum menonjol melalui dinding belakang vagina (rektokel)\n8. Pola Makan yang Kurang Baik\n9. Efek samping obat',
	Ambeien:
		'1. Sering mengangkat beban berat\n2. Kebiasaan duduk dalam waktu yang lama\n3. Diare yang berkepanjangan Kebiasaan mengejan saat buang air besar\n4. Batuk dan muntah-muntah yang berlangsung lama\n5. Mengonsumsi makanan rendah serat\n6. Terlalu gemuk\n7. Sedang hamil\n8. Riwayat ambeien dalam keluarga\n9. Seks anal',
	'Tukak lambung':
		'1. Luka di lambung terbentuk ketika lapisan mukus lambung terkikis\n2. kebiasaan merokok dan mengonsumsi alkohol\n3. Infeksi Bakteri Helicobacter Pylori\n4. Penggunaan Obat Antiinflamasi Non-steroid',
	Tipes:
		'1. Tidak mencuci tangan setelah menggunakan toilet dan sebelum menyentuh makanan\n2. Mengonsumsi makanan yang terkontaminasi bakteri Salmonella typhi, terutama yang tidak dimasak hingga matang\n3. Mengonsumsi sayuran yang sumber pengairannya tercemar tinja\n4. Mengonsumsi susu sapi yang tidak dipasteurisasi dan terkontaminasi bakteri S\n5. typhi',
	Disentri:
		'1. Disentri bakteri, yang disebabkan oleh infeksi bakteri, seperti Shigella sonnei, Shigella boydii, dan Shigella dysenteriae\n2. Disentri ameba atau amebisasis terjadi akibat infeksi bakteri Entamoeba histolytica, banyak ditemukan di daerah tropis',
	Hepatitis:
		'1. Hepatitis A: Jenis ini terjadi akibat virus hepatitis A (HAV), Dapat menular melalui makanan atau air minum yang terkontaminasi feses dari pengidap\n2. Hepatitis B: Penyebab hepatitis B adalah virus hepatitis B (HBV), Jenis ini umumnya menular melalui cairan tubuh dari pengidap, seperti darah, cairan Miss V, dan air mani\n3. Hepatitis C: Jenis ini terjadi akibat infeksi virus hepatitis C (HCV), Cairan tubuh, terutama melalui berbagi pakai jarum suntik dan hubungan seksual tanpa kondom dapat menularkan penyakit ini\n4. Hepatitis D: Penyebab hepatitis D adalah infeksi virus hepatitis D (HDV), Virus tidak bisa berkembang biak di dalam tubuh manusia tanpa adanya hepatitis\n5. Hepatitis E: Penyebab jenis ini adalah virus hepatitis E (HEV), Jenis ini banyak terjadi di lingkungan yang tidak memiliki sanitasi yang baik, akibat kontaminasi virus pada sumber air\n6. Hepatitis autoimun: Dalam beberapa kasus, sistem kekebalan tubuh dapat salah mengira bahwa hati sebagai organ yang berbahaya dan menyerangnya, Hal tersebut menyebabkan terjadinya peradangan berkelanjutan yang kadarnya ringan hingga berat, dan sering kali menghambat fungsi hati\n7. Hepatitis neonatal: Hepatitis neonatal merupakan peradangan hati yang terjadi hanya pada awal masa bayi, biasanya antara satu hingga dua bulan setelah lahir',
	'Irritable Bowel Syndrome (IBS)':
		'1. Dismotilitas : Anda mungkin mengalami masalah dengan cara otot GI berkontraksi dan menggerakkan makanan melalui saluran GI\n2. Hipersensitivitas visceral : Anda mungkin memiliki saraf ekstra-sensitif di saluran cerna Anda\n3. Bakteri usus : Penelitian telah menunjukkan bahwa penderita IBS mungkin memiliki bakteri yang berubah di saluran pencernaan mereka, yang berkontribusi terhadap gejala-gejala\n4. Intoleransi makanan : Kepekaan atau alergi terhadap makanan tertentu dapat menyebabkan IBS',
};

const pengobatanPenyakit = {
	'Demam Berdarah':
		'1. Mencukupi kebutuhan cairan dengan minuman selain air putih, seperti susu, jus buah, cairan isotonik, oralit, atau air beras\n2. Mengonsumsi makanan dengan gizi lengkap dan seimbang\n3. Beristirahat yang cukup\n4. Menjaga suhu tubuh di bawah 39°C dengan menggunakan kompres hangat, mandi atau berendam air hangat (tidak panas), mengatur suhu ruangan yang sejuk, dan tidak memakai baju yang tidak terlalu tebal\n5. Minum paracetamol jika demam naik melebihi 390C atau jika sakit kepala dan nyeri otot terasa mengganggu"',
	Migrain:
		'1. Beristirahat atau tidur di kamar yang sepi, gelap, dan sejuk\n2. Mengompres dingin dahi atau belakang leher\n3. Memijat kepala, pelipis, atau leher\n4. Memastikan untuk makan tepat waktu\n5. Tidur yang cukup, setidaknya selama 7–8 jam tiap malam\n6. Memberikan kompres dingin di bagian atas dagu atau belakang leher',
	'Tension Headache':
		'1. Beristirahat yang cukup\n2. Berolahraga secara teratur\n3. Minum air putih yang cukup\n4. Memperbaiki postur tubuh\n5. Mengonsumsi makanan sehat dengan gizi seimbang\n6. Membatasi konsumsi minuman beralkohol dan berkafein\n7. Tidak merokok',
	Sinusitis:
		'1.Menggunakan pelembab udara (humidifier)\r\n2.Menghirup uap dari semangkuk air hangat atau mandi dengan air hangat\r\n3. Menggunakan kompres hangat pada area wajah\r\n4. Membersihkan hidung menggunakan larutan garam yang bisa dibeli di apotek atau dengan buatan sendiri',
	Vertigo:
		'1. Rehabilitasi Vestibular\n2. Canalith repositioning procedure(CRP)\n3. Pembedahan\n4. Manuver Epley dan Manuver Foster (Half Somersault)\n5. Perubahan pola makan dan pengobatan rumahan untuk penyakit Ménière\n6. Berfokus melihat pada satu objek dengan latar belakang kosong atau polos\n7. Gerakkan kepala secara perlahan ke kanan dan ke kiri, lalu ke atas dan ke bawah, lalu ulangi selama beberapa menit',
	Stroke:
		'1. Menjaga tekanan darah agar tetap normal\r\n2 Tidak merokok dan tidak mengonsumsi minuman beralkohol\r\n3. Menjaga berat badan ideal\r\n4. Berolahraga secara rutin\r\n5. Mengonsumsi makanan sehat\r\n6. Menjalani pemeriksaan rutin untuk kondisi medis yang diderita, misalnya diabetes dan hipertensi',
	Meningitis:
		'1. Pemberian antibiotik intravena segera, seperti penisilin, ampisilin, atau ceftriaxone (untuk meningitis bakteri).\n2. Penggunaan kortikosteroid (misalnya deksametason) untuk mengurangi peradangan pada otak.\n3. Pemberian obat antikejang jika pasien mengalami kejang.\n4. Terapi cairan intravena untuk mencegah dehidrasi dan menjaga keseimbangan elektrolit.\n5. Antijamur (seperti amfoterisin B) digunakan jika meningitis disebabkan oleh infeksi jamur (contoh: meningitis kriptokokus).\n6. Perawatan suportif di rumah sakit, termasuk monitoring tekanan intrakranial dan fungsi vital.',
	Ensefalitis:
		'1. Pemberian antibiotik intravena seperti penisilin, ampisilin, atau ceftriaxone.\r\n2. Penggunaan kortikosteroid untuk mengurangi peradangan pada otak.\r\n3. Obat antikejang jika pasien mengalami kejang.\r\n4. Terapi cairan intravena untuk mencegah dehidrasi.\r\n5. Antijamur seperti amfoterisin B jika disebabkan oleh infeksi jamur.\r\n6.Monitoring tekanan intrakranial dan fungsi vital selama perawatan.',
	'Neuralgia Trigeminal':
		'1. Rawat inap di rumah sakit untuk pemantauan intensif.\r\n2. Terapi antivirus seperti acyclovir, terutama bila disebabkan oleh virus herpes.\r\n3. Antibiotik atau antijamur bila penyebabnya bakteri atau jamur.\r\n4. Kortikosteroid untuk mengurangi peradangan otak.\r\n5. Antikonvulsan untuk mengatasi atau mencegah kejang.\r\n6. Obat pereda nyeri dan penurun demam seperti parasetamol.\r\n7. Infus cairan dan nutrisi untuk menjaga hidrasi dan keseimbangan elektrolit.\r\n8. Terapi suportif seperti fisioterapi, terapi bicara, dan terapi okupasi.\r\n9. Imunoterapi seperti IVIG, rituximab, atau plasmapheresis untuk ensefalitis autoimun.\r\n10. Pembedahan pada kasus tertentu seperti ensefalitis Rasmussen.',
	Alopecia:
		'1. Minoxidil topikal untuk merangsang pertumbuhan rambut.\r\n2. Finasteride oral khusus untuk pria dengan alopecia androgenetik.\r\n3. Injeksi kortikosteroid untuk alopecia areata.\r\n4. Terapi sinar (phototherapy) untuk merangsang pertumbuhan rambut.\r\n5. Transplantasi rambut pada kasus kerontokan berat.\r\n6. Asupan nutrisi seimbang dan suplemen seperti zat besi atau biotin jika kekurangan.',
	'Otitis Media akut':
		'1. Pemberian obat pereda nyeri seperti parasetamol atau ibuprofen.\r\n2. Antibiotik seperti amoksisilin sebagai pengobatan utama.\r\n3. Tetes telinga bila disertai dengan pecahnya gendang telinga.\r\n4. Drainase cairan dari telinga tengah (miringotomi) bila infeksi berat.\r\n5. Menjaga kelembapan udara dan menghindari paparan asap rokok.',
	'Otitis Media':
		'1. Obat pereda nyeri oral seperti parasetamol atau ibuprofen.\r\n2. Antibiotik oral jika infeksi bakteri atau jika gejala tidak membaik dalam 2–3 hari \r\n3. Obat tetes telinga topikal (antipyrine/benzocaine) untuk meredakan nyeri \r\n4. Myringotomi dan pemasangan tabung tympanostomy (ear tubes) untuk infeksi berulang atau cairan persisten \r\n5.Hindari decongestant atau antihistamin karena tidak efektif ',
	'Gendang telinga pecah':
		'1. Banyak kasus sembuh sendiri dalam seminggu.\r\n2. Menjaga telinga tetap kering dan bersih.\r\n3. Obat antibiotik oral atau tetes telinga jika ada indikasi infeksi.\r\n4. Tindakan medis seperti tympanoplasti(Operasi penutupan) jika perforasi tidak sembuh.',
	Kolesteatoma:
		'1. Pasang antibiotik oral dan tetes telinga untuk infeksi aktif.\r\n2. Operasi mastoidectomy untuk mengangkat kolesteatoma.\r\n3. Tympanoplasti untuk memperbaiki gendang dan struktur pendengaran.\r\n4. Follow-up berkala karena risiko kambuh tinggi.',
	Otosklerosis:
		'1. Observasi bila gejala ringan dan gangguan pendengaran minimal.\r\n2. Alat bantu dengar jika gangguan mendengarkan signfikan.\r\n3. Operasi stapedotomi atau stapedektomi untuk mengganti stapes.\r\n4. Terapi fluoride atau sodium fluoride kadang digunakan untuk memperlambat perkembangan.',
	Mastoiditis:
		'1. Antibiotik intravena (Misalnya ceftriaxone) segera setelah diagnosis.\r\n2. Drainase cairan telinga tengah dengan miringotomi/tympanocentesis.\r\n3. Mastoidectomy bila tidak membaik dengan antibiotik dan drainase.\r\n4. Antibiotik oral lanjutan sesuai kultur bakteri.\r\n5. Tindakan pembersihan dan pemeriksaan lanjutan untuk mencegah komplikasi.',
	Barotrauma:
		'1. Teknik menyamakan tekanan seperti menguap, menelan, mengunyah permen karet, atau melakukan valsava selama perubahan tekanan (penerbangan, menyelam)\n2. Dekongestan nasal atay semprot steroid untuk barotrauma telinga dan sinus.\n3. Obat analgesik(seperti parasetamol/NSAID) untuk mengurangi nyeri.\n4. Antibiotik jika terjadi infeksi sekunder.\n5. Terapi oksigen hiperbarik dan cairan IV untuk barotrauma pulmonal berat',
	Konjungtivitis:
		'1. Banyak kasus (viral/alergi) sembuh sendiri dalam 2–3 minggu, tanpa antibiotik.\r\n2. Kompres hangat atau dingin dan air mata buatan untuk meredakan ketidaknyamanan.\r\n3. Antibiotik tetes mata diresepkan hanya jika teridentifikasi infeksi bakteri atau gejala tak membaik setelah 24 jam.\r\n4. Jika penyebab virus berat (misalnya herpes, adenovirus), dokter dapat meresepkan antivirus topikal.\r\n5. Kebersihan ketat: cuci tangan, hindari menyentuh mata, ganti handuk dan lap wajah sering.',
	'Keratitis Herpes Simpleks':
		'1. Antiviral topikal seperti ganciclovir gel 0,15% (5×/hari), trifluridine tetes mata (5–9×/hari), atau vidarabine salep \r\n2. Antivirus oral (acyclovir 400 mg 3–5×/hari selama 7–14 hari, atau valacyclovir/famciclovir) \r\n3. Kortikosteroid topikal dipakai hati-hati pada kasus stromal, selalu di bawah pengawasan dokter\r\n4. Abrasi kornea/debridement jika perlu untuk menyingkirkan sel terinfeksi\r\n5.Terapi penekanan (suppressive) jangka panjang pada kasus kambuh berulang dengan antivirus oral',
	'Keratitis Jamur':
		'1. Terapi utama adalah antifungal topikal: natamycin 5% (filamentosa), fluconazole (Candida), atau amphotericin B salep \r\n2. Tambahan antifungal oral/topikal jika infeksi berat atau tahan terhadap obat awal (voriconazole 1%, amphotericin B oral) \r\nreviewofoptometry.com\r\n3. Intervensi bedah bila terjadi perforasi atau tidak merespon terapi: keratoplasty lamelar atau penetrating\r\n4. Monitoring selama berminggu-minggu/berbulan, terapi berlanjut hingga gejala hilang dan kornea sembuh',
	Hordeolum:
		'1. Kompres hangat selama 5–10 menit sebanyak 3–6×/hari sampai stye terbuka dan mengering \r\n2. Kebersihan kelopak mata rutin, hindari makeup dan lensa kontak selama infeksi\r\n3. Jika persisten atau menyebar, gunakan salep/tetes antibiotik (erythromycin, chloramphenicol) atau antibiotik oral\r\n4. Jika tidak membaik dalam 48 jam, drainase bedah kecil oleh dokter (incision and drainage)\r\n5. Intralesional kortikosteroid terkadang digunakan untuk chalazion, jarang pada hordeolum ',
	Chalazion:
		'1. Kompres hangat 4–5 kali sehari selama 10–15 menit\r\n2. Pijatan lembut kelopak mata setelah kompres untuk membantu drainase\r\n3. Salep antibiotik bila terdapat infeksi sekunder\r\n4. Suntikan kortikosteroid jika chalazion tidak mengecil setelah terapi konservatif\r\n5. Prosedur bedah kecil (insisi dan kuretase) jika benjolan menetap dan mengganggu',
	'Serangan Jantung':
		'1. Obat antiplatelet seperti aspirin atau clopidogrel\n2. Nitrat untuk meredakan nyeri dada\n3. Obat pengencer darah (antikoagulan) seperti heparin\n4. Prosedur revaskularisasi seperti angioplasti atau pemasangan stent\n5. Pemasangan bypass jantung jika penyumbatan berat\n6. Rehabilitasi jantung dan perubahan gaya hidup',
	'Gagal Jantung':
		'1. Diuretik untuk mengurangi kelebihan cairan\r\n2. ACE inhibitor atau ARB untuk memperbaiki fungsi jantung\r\n3. Beta-blocker untuk menurunkan beban kerja jantung\r\n4. Obat digitalis (misalnya digoksin) untuk membantu kontraksi jantung\r\n5. Terapi resinkronisasi jantung atau pemasangan alat pacu jantung jika diperlukan\r\n6. Transplantasi jantung pada kasus berat yang tidak merespon terapi',
	Endokarditis:
		'1. Antibiotik intravena dalam jangka panjang sesuai kultur bakteri\r\n2. Pemberian antibiotik profilaksis sebelum prosedur gigi/medis tertentu (untuk pasien risiko tinggi)\r\n3. Pembedahan katup jantung jika terjadi kerusakan atau gagal respon terhadap antibiotik\r\n4. Pemantauan ketat komplikasi seperti emboli dan gagal jantung',
	'Angina pektoris ':
		'1. Nitrogliserin sublingual untuk meredakan nyeri dada saat serangan\r\n2. Obat antiangina seperti beta-blocker atau calcium channel blocker\r\n3. Antiplatelet seperti aspirin untuk mencegah penggumpalan darah\r\n4. Statin untuk menurunkan kolesterol\r\n5. Prosedur angioplasti dan pemasangan stent bila gejala berat\r\n6. Perubahan gaya hidup seperti berhenti merokok, olahraga, dan diet jantung sehat',
	'Penyakit Jantung Rematik ':
		'1. Antibiotik seperti penisilin untuk mencegah infeksi ulang\r\n2. Antiinflamasi non-steroid (NSAID) untuk mengurangi peradangan sendi dan jantung\r\n3. Kortikosteroid jika inflamasi berat atau tidak respon terhadap NSAID\r\n4. Obat untuk gagal jantung jika fungsi jantung terganggu\r\n5. Pembedahan katup jantung bila terdapat kerusakan permanen',
	'Penyakit Katup Jantung':
		'1. Obat diuretik untuk mengurangi cairan berlebih\r\n2. ACE inhibitor atau beta-blocker untuk mengurangi beban jantung\r\n3. Antikoagulan jika ada risiko bekuan darah\r\n4. Operasi perbaikan katup (valvuloplasti)\r\n5. Operasi penggantian katup bila kerusakan berat',
	Tuberkulosis:
		'1. Pengobatan kombinasi antibiotik selama minimal 6 bulan (INH, rifampisin, pirazinamid, etambutol)\r\n2. Pemantauan rutin untuk memastikan kepatuhan dan menghindari resistensi\r\n3. Isolasi sementara bagi pasien dengan TBC aktif menular\r\n4. Nutrisi seimbang untuk mendukung kekebalan tubuh\r\n5. Pemberian vitamin B6 untuk mencegah efek samping INH',
	Asma: '1. Inhaler bronkodilator kerja cepat (misalnya salbutamol) saat serangan\r\n2. Inhaler kortikosteroid sebagai pengendali jangka panjang\r\n3. Leukotriene receptor antagonist sebagai tambahan terapi\r\n4. Imunoterapi atau obat biologis untuk asma berat\r\n5. Edukasi penghindaran pemicu asma dan penggunaan inhaler yang benar',
	Influenza:
		'1. Istirahat total untuk pemulihan\r\n2. Minum banyak cairan untuk mencegah dehidrasi\r\n3. Obat antipiretik seperti parasetamol untuk demam\r\n4. Antiviral seperti oseltamivir dalam 48 jam pertama bila gejala berat\r\n5. Vaksinasi influenza tahunan sebagai pencegahan',
	Pneumonia:
		'1. Antibiotik oral atau intravena sesuai penyebab dan tingkat keparahan\r\n2. Obat antipiretik dan analgesik untuk mengurangi demam dan nyeri\r\n3. Obat batuk jika batuk mengganggu, tapi tidak diberikan rutin agar dahak tetap keluar\r\n4. Terapi oksigen jika saturasi oksigen menurun\r\n5. Istirahat total dan asupan cairan yang cukup',
	Bronkitis:
		'1. Obat pereda demam dan nyeri seperti parasetamol atau ibuprofen\r\n2. Banyak minum air putih untuk mengencerkan dahak\r\n3. Ekspektoran untuk membantu pengeluaran dahak\r\n4. Antibiotik hanya bila ada infeksi bakteri sekunder\r\n5. Hindari paparan asap rokok dan polusi',
	Emfisema:
		'1. Berhenti merokok sebagai langkah utama\r\n2. Inhaler bronkodilator untuk membuka saluran napas\r\n3. Inhaler kortikosteroid untuk mengurangi peradangan paru\r\n4. Terapi oksigen bila kadar oksigen darah rendah\r\n5. Rehabilitasi paru dan latihan pernapasan',
	Faringitis:
		'1. Obat pereda nyeri dan demam seperti parasetamol\r\n2. Antibiotik jika faringitis disebabkan oleh bakteri\r\n3. Berkumur dengan air garam hangat\r\n4. Perbanyak minum air putih dan istirahat cukup\r\n5. Menghindari asap rokok dan iritasi tenggorokan',
	Laringitis:
		'1. Istirahatkan suara dan hindari berbicara berlebihan\r\n2. Perbanyak minum air putih untuk menjaga kelembapan tenggorokan\r\n3. Humidifier untuk menjaga kelembapan udara\r\n4. Obat pereda nyeri jika disertai nyeri tenggorokan\r\n5. Antibiotik hanya jika disebabkan oleh infeksi bakteri',
	Tonsillitis:
		'1. Obat pereda nyeri dan demam seperti parasetamol atau ibuprofen\r\n2. Antibiotik jika disebabkan oleh infeksi bakteri streptokokus\r\n3. Berkumur air garam hangat secara rutin\r\n4. Perbanyak istirahat dan minum air putih\r\n5. Tonsilektomi (operasi pengangkatan amandel) jika sering kambuh atau kronis',
	Diare:
		'1. Oralit untuk mencegah dan mengatasi dehidrasi\r\n2. Perbanyak minum air putih atau cairan lain yang bersih\r\n3. Obat antidiare seperti loperamide hanya pada kasus tertentu\r\n4. Probiotik untuk membantu keseimbangan flora usus\r\n5. Makan makanan rendah serat sementara hingga kondisi membaik',
	GERD: '1. Antasida untuk menetralkan asam lambung\r\n2. Penghambat pompa proton (PPI) seperti omeprazol untuk menurunkan produksi asam\r\n3. H2 blocker seperti ranitidin (jika tersedia) atau famotidin\r\n4. Perubahan gaya hidup: hindari makan malam larut, tidur dengan kepala ditinggikan, dan hindari makanan pemicu\r\n5. Penurunan berat badan jika obesitas',
	Maag: '1. Antasida untuk mengurangi gejala nyeri lambung\r\n2. PPI seperti lansoprazole atau esomeprazole untuk menurunkan produksi asam lambung\r\n3. Antibiotik jika disebabkan oleh infeksi H. pylori\r\n4. Hindari makanan pedas, asam, dan minuman berkafein\r\n5. Makan dalam porsi kecil namun sering',
	Konstipasi:
		'1. Perbanyak konsumsi serat dari sayur dan buah\r\n2. Minum air putih minimal 8 gelas per hari\r\n3. Laksatif ringan seperti laktulosa bila diperlukan\r\n4. Aktivitas fisik rutin untuk membantu gerakan usus\r\n5. Membiasakan buang air besar secara teratur',
	Ambeien:
		'1. Perbanyak konsumsi serat dari makanan dan minum air putih\r\n2. Obat topikal seperti krim atau salep hidrokortison\r\n3. Obat pereda nyeri seperti parasetamol atau ibuprofen\r\n4. Duduk dalam air hangat (sitz bath) beberapa kali sehari\r\n5. Prosedur medis seperti ligasi karet gelang atau hemoroidektomi bila parah',
	'Tukak lambung':
		'1. Penghambat pompa proton (PPI) seperti omeprazole atau pantoprazole\r\n2. Antibiotik untuk membunuh H. pylori jika terinfeksi\r\n3. Antasida untuk meredakan gejala nyeri lambung\r\n4. Hindari NSAID dan makanan pemicu iritasi lambung\r\n5. Pola makan teratur dan menghindari stres',
	Tipes:
		'1. Antibiotik seperti ciprofloxacin atau cefixime sesuai resep dokter\r\n2. Obat pereda demam dan nyeri seperti parasetamol\r\n3. Istirahat total hingga demam turun\r\n4. Diet lunak dan tinggi cairan\r\n5. Rawat inap bila gejala berat atau terjadi komplikasi',
	Disentri:
		'1. Oralit untuk mencegah dehidrasi\r\n2. Antibiotik seperti metronidazole untuk disentri amoeba\r\n3. Antibiotik seperti ciprofloxacin untuk disentri bakteri\r\n4. Makanan lunak dan mudah dicerna\r\n5. Menjaga kebersihan makanan dan minuman',
	Hepatitis:
		'1. Istirahat cukup dan makan bergizi seimbang\r\n2. Antiviral untuk hepatitis B atau C bila direkomendasikan dokter\r\n3. Hindari konsumsi alkohol dan obat yang merusak hati\r\n4. Vaksinasi untuk pencegahan hepatitis A dan B\r\n5. Pemantauan fungsi hati secara berkala',
	'Irritable Bowel Syndrome (IBS)':
		'1. Perubahan pola makan seperti menghindari makanan tinggi gas, pedas, dan tinggi FODMAP\r\n2. Konsumsi serat larut untuk membantu pergerakan usus\r\n3. Obat antispasmodik seperti hyoscine untuk mengurangi kram perut\r\n4. Laksatif ringan jika disertai konstipasi\r\n5. Obat antidiare jika disertai diare\r\n6. Obat antidepresan dosis rendah bila disertai gangguan kecemasan\r\n7. Manajemen stres melalui relaksasi atau terapi kognitif perilaku',
};

const kategoriPenyakit = {
	'Demam Berdarah': 'Penyakit Jantung',
	Migrain: 'Penyakit Kepala',
	'Tension Headache': 'Penyakit Kepala',
	Sinusitis: 'Penyakit Kepala',
	Vertigo: 'Penyakit Kepala',
	Stroke: 'Penyakit Kepala',
	Meningitis: 'Penyakit Kepala',
	Ensefalitis: 'Penyakit Kepala',
	'Neuralgia Trigeminal': 'Penyakit Kepala',
	Alopecia: 'Penyakit Kepala',
	'Otitis Media akut': 'Penyakit Telinga',
	'Otitis Media': 'Penyakit Telinga',
	'Gendang telinga pecah': 'Penyakit Telinga',
	Kolesteatoma: 'Penyakit Telinga',
	Otosklerosis: 'Penyakit Telinga',
	Mastoiditis: 'Penyakit Telinga',
	Barotrauma: 'Penyakit Telinga',
	Konjungtivitis: 'Penyakit Mata',
	'Keratitis Herpes Simpleks': 'Penyakit Mata',
	'Keratitis Jamur': 'Penyakit Mata',
	Hordeolum: 'Penyakit Mata',
	Chalazion: 'Penyakit Mata',
	'Serangan Jantung': 'Penyakit Jantung',
	'Gagal Jantung': 'Penyakit Jantung',
	Endokarditis: 'Penyakit Jantung',
	'Angina pektoris ': 'Penyakit Jantung',
	'Penyakit Jantung Rematik ': 'Penyakit Jantung',
	'Penyakit Katup Jantung': 'Penyakit Jantung',
	Tuberkulosis: 'Penyakit Pernafasan',
	Asma: 'Penyakit Pernafasan',
	Influenza: 'Penyakit Pernafasan',
	Pneumonia: 'Penyakit Pernafasan',
	Bronkitis: 'Penyakit Pernafasan',
	Emfisema: 'Penyakit Pernafasan',
	Faringitis: 'Penyakit Pernafasan',
	Laringitis: 'Penyakit Pernafasan',
	Tonsillitis: 'Penyakit Pernafasan',
	Diare: 'Penyakit Perut',
	GERD: 'Penyakit Perut',
	Maag: 'Penyakit Perut',
	Konstipasi: 'Penyakit Perut',
	Ambeien: 'Penyakit Perut',
	'Tukak lambung': 'Penyakit Perut',
	Tipes: 'Penyakit Perut',
	Disentri: 'Penyakit Perut',
	Hepatitis: 'Penyakit Perut',
	'Irritable Bowel Syndrome (IBS)': 'Penyakit Perut',
};

const sumberPenyakit = {
	'Demam Berdarah': 'Halodoc, Alodokter',
	Migrain: 'Halodoc, Alodokter',
	'Tension Headache': 'Mayo Clinic, Alodoc',
	Sinusitis: 'Halodoc, Alodokter',
	Vertigo: 'Halodoc, Mitra keluarga',
	Stroke: 'Halodoc, Alodoc.',
	Meningitis: 'Mitrakeluarga, SiloamHospitals',
	Ensefalitis: 'Alodokter, SiloamHospitals',
	'Neuralgia Trigeminal': 'SiloamHospitals, Alodokter',
	Alopecia: 'SiloamHospitals, Halodoc',
	'Otitis Media akut': 'StatPearls - National Library of Medicine, Cleveland Clinic\n',
	'Otitis Media': 'nhsinform, Cleveland Clinic',
	'Gendang telinga pecah': 'Alodokter, Mayoclinic',
	Kolesteatoma: 'Alodokter, SiloamHospitals',
	Otosklerosis: 'Alodokter, SiloamHospitals',
	Mastoiditis: 'SiloamHospitals, Alodokter',
	Barotrauma: 'Halodoc, Alodokter',
	Konjungtivitis: 'Halodoc, Alodokter',
	'Keratitis Herpes Simpleks': 'Alodokter, Hellosehat',
	'Keratitis Jamur': 'Alodokter, CDC.gov',
	Hordeolum: 'Alodokter, Hellosehat',
	Chalazion: 'SiloamHospitals, Alodokter',
	'Serangan Jantung': 'Siloam Hospitals, Halodoc',
	'Gagal Jantung': 'Siloam Hospitals, Halodoc',
	Endokarditis: 'Siloam Hospitals, Alodokter',
	'Angina pektoris ': 'Alodokter, Halodoc',
	'Penyakit Jantung Rematik ': 'Siloam Hospitals, Alodokter',
	'Penyakit Katup Jantung': 'Halodoc, Mayo Clinic',
	Tuberkulosis: 'Alodokter, Kementerian Kesehatan RI',
	Asma: 'Alodokter, Kementerian Kesehatan RI',
	Influenza: 'Halodoc, Kementerian Kesehatan RI',
	Pneumonia: 'Alodokter, Halodoc',
	Bronkitis: 'Alodokter, Primaya Hospital',
	Emfisema: 'Alodokter, Siloam Hospitals',
	Faringitis: 'Alodokter, Halodoc',
	Laringitis: 'Alodokter, Halodoc',
	Tonsillitis: 'Siloam Hospital, Alodokter',
	Diare: ' Alodokter, Kementerian Kesehatan RI',
	GERD: 'Alodokter, Siloam Hospitals',
	Maag: 'Alodokter, Halodoc',
	Konstipasi: 'Halodoc, SiloamHospitals',
	Ambeien: 'Alodokter, Halodoc',
	'Tukak lambung': 'Alodokter, SiloamHospitals',
	Tipes: 'Alodokter, Halodoc',
	Disentri: 'Alodokter. Hellosehat',
	Hepatitis: 'Halodoc, Biofarma',
	'Irritable Bowel Syndrome (IBS)': 'Alodokter, Cleveland Clinic',
};

module.exports = {
	penyakitLabels,
	deskripsiPenyakit,
	pencegahanPenyakit,
	penyebabPenyakit,
	pengobatanPenyakit,
	kategoriPenyakit,
	sumberPenyakit,
};
