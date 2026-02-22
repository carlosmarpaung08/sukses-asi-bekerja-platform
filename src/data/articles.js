const articles = [
  {
    id: 1,
    title: "Apa Itu ASI Eksklusif?",
    slug: "apa-itu-asi-eksklusif",
    description: "Pelajari definisi ASI eksklusif dan mengapa penting untuk tidak memberikan tambahan lain kepada bayi selama enam bulan pertama.",
    blocks: [
      {
        type: "text",
        content: `
          <p>ASI eksklusif adalah praktik pemberian hanya air susu ibu kepada bayi selama enam bulan pertama kehidupannya. Tidak ada makanan atau cairan lain yang diberikan, termasuk air, kecuali jika diperlukan untuk obat atau vitamin yang diresepkan selama periode ini.</p>
          <p>ASI Eksklusif diberikan sejak bayi baru lahir hingga 6 bulan. Setelah 6 bulan ASI tetap diberikan sampai usia 2 tahun yang disertai dengan MP-ASI.</p>
        `,
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "Kandungan dan Komposisi ASI",
  //   slug: "kandungan-dan-komposisi-asi",
  //   description: "Mengenal makronutrien, mikronutrien, komponen imunologis, dan mikrobiota penting dalam ASI.",
  //   blocks: [
  //     {
  //       type: "text",
  //       content: `
  //         <p>Air Susu Ibu (ASI) adalah cairan kompleks yang tidak hanya menyediakan nutrisi, tetapi juga komponen imunologis dan mikrobiota penting bagi pertumbuhan dan kesehatan bayi. Komposisinya bersifat dinamis, dipengaruhi oleh usia kehamilan, fase menyusui, serta kondisi kesehatan ibu dan bayi.</p>
  //         <h3 class="text-xl font-semibold mb-2">1. Makronutrien dalam ASI</h3>
  //         <ul>
  //           <li>Air (87%) : Pelarut nutrisi dan menjaga keseimbangan cairan bayi.</li>
  //           <li>Karbohidrat : Laktosa (7g/100ml) sebagai sumber energi dan penyerapan kalsium. Juga mengandung HMOs sebagai prebiotik alami.</li>
  //           <li>Lemak : (±3,5g/100ml) menyumbang energi terbesar, penting untuk otak dan retina. Mengandung DHA dan ARA.</li>
  //           <li>Protein : Terdiri dari fraksi whey dan kasein. Fraksi Whey lebih mudah dicerna dan mengandung zat imun seperti IgA dan laktoferin.</li>
  //         </ul>
  //         <h3 class="text-xl font-semibold mb-2 mt-4">2. Mikronutrien</h3>
  //         <p>ASI kaya akan vitamin (A, D, E, K, C, B kompleks) dan mineral (kalsium, zat besi, magnesium, seng) yang mudah diserap oleh tubuh bayi.</p>
  //         <h3 class="text-xl font-semibold mb-2 mt-4">3. Komponen Imunologis dan Bioaktif</h3>
  //         <p>Mengandung zat pertahanan seperti IgA, lisozim, laktoferin, sitokin, sel imun, dan hormon (insulin, leptin) yang mendukung sistem kekebalan dan toleransi imun bayi.</p>
  //         <h3 class="text-xl font-semibold mb-2 mt-4">4. Mikrobiota dalam ASI</h3>
  //         <p>ASI mengandung mikroorganisme bermanfaat yang berasal dari mulut bayi (retrograde flow) dan saluran cerna ibu (jalur entero-mamari), membantu kolonisasi usus dan pembentukan sistem imun bayi.</p>
  //       `,
  //     },
  //   ],
  // },
  {
    id: 3,
    title: "Manfaat ASI Eksklusif",
    slug: "manfaat-asi-eksklusif",
    description: "Dampak positif pemberian ASI bagi kesehatan, tumbuh kembang, kognitif, dan imunitas bayi.",
    blocks: [
      {
        type: "text",
        content: `
          <h3 class="text-xl font-semibold mb-2">Menurunkan riwayat penyakit bayi</h3>
          <p>ASI melindungi bayi dari diare, ISPA, dan infeksi lainnya karena mengandung zat imun alami dan tidak memerlukan air bersih untuk penyajiannya.</p>
          <h3 class="text-xl font-semibold mb-2 mt-4">Meningkatkan imunitas</h3>
          <p>Kolostrum kaya antibodi membantu mengisi kesenjangan imunitas bayi baru lahir. Komponen seperti laktoferin, lisozim, dan oligosakarida mendukung pertahanan tubuh dan mikroflora usus yang sehat.</p>
          <h3 class="text-xl font-semibold mb-2 mt-4">Menurunkan risiko alergi</h3>
          <p>ASI mengandung imunoglobulin dan sel imun yang membantu mencegah sensitisasi terhadap alergen, mengurangi risiko alergi makanan dan penyakit autoimun sejak dini.</p>
          <h3 class="text-xl font-semibold mb-2 mt-4">Menurunkan risiko obesitas</h3>
          <p>Bayi yang menyusu langsung mengatur sendiri kebutuhannya. Kandungan protein ASI yang seimbang tidak mendorong kenaikan berat badan berlebihan seperti susu formula.</p>
          <h3 class="text-xl font-semibold mb-2 mt-4">Meningkatkan tumbuh kembang bayi</h3>
          <p>ASI menyediakan nutrisi lengkap untuk pertumbuhan fisik dan perkembangan otak, tulang, serta jaringan penting lainnya selama masa emas pertumbuhan.</p>
          <h3 class="text-xl font-semibold mb-2 mt-4">Meningkatkan kognitif bayi</h3>
          <p>Kandungan AA, DHA, dan zat penting lainnya dalam ASI mendukung perkembangan otak dan meningkatkan IQ anak di masa depan.</p>
          <h3 class="text-xl font-semibold mb-2 mt-4">Memberikan kasih sayang</h3>
          <p>Menyusui memperkuat hubungan ibu-anak dan mendukung perkembangan psikologis, menurunkan risiko masalah perilaku dan emosional pada anak.</p>
        `,
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Manfaat ASI Bagi Ibu",
  //   slug: "manfaat-asi-bagi-ibu",
  //   description: "Keuntungan menyusui bagi kesehatan ibu, baik jangka pendek maupun jangka panjang, termasuk penurunan risiko penyakit.",
  //   blocks: [
  //     {
  //       type: "text",
  //       content: `
  //         <p>Menyusui memberi keuntungan besar bagi kesehatan ibu, baik segera maupun jangka panjang. Dalam jangka pendek, laktasi membantu menurunkan berat badan pascapersalinan, menstabilkan tekanan darah, meredakan stres, memperbaiki suasana hati, dan berfungsi sebagai kontrasepsi alami. Dalam jangka panjang, durasi menyusui yang lebih lama dikaitkan dengan penurunan risiko penyakit kardiovaskuler (termasuk stroke dan hipertensi), diabetes tipe 2, NAFLD, serta beberapa kanker (payudara, ovarium, endometrium). Secara angka, risiko kanker payudara turun sekitar 4,3% untuk setiap 12 bulan menyusui—bahkan total dapat mencapai ±28% bila durasinya ≥12 bulan—sementara risiko kanker ovarium dapat berkurang 18–34% bergantung lamanya laktasi. Risiko diabetes tipe 2 menurun sekitar 27–32%, dengan tambahan perlindungan ~1% untuk tiap bulan menyusui, dan rata-rata BMI 1% lebih rendah tiap 6 bulan laktasi. Efek-efek ini diduga dimediasi oleh kerja oksitosin, regulasi sistem endokrin, perbaikan sensitivitas insulin, serta perubahan distribusi lemak dan profil lipid.</p>
  //       `,
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Teknik Menyusui yang Benar",
  //   slug: "teknik-menyusui-yang-benar",
  //   description: "Panduan tentang posisi menyusui yang tepat, perlekatan, dan cara bayi menghisap payudara untuk kenyamanan ibu dan bayi.",
  //   blocks: [
  //     {
  //       type: "text",
  //       content: `
  //         <p>Teknik menyusui merupakan gabungan dari posisi menyusui, perlekatan, dan cara bayi menghisap payudara.</p>
  //         <h3 class="text-xl font-semibold mb-2">Posisi Menyusui</h3>
  //         <p>Posisi menyusui merupakan posisi atau teknik menggendong bayi saat menyusui, empat hal utama yang diperhatikan dalam memposisikan bayi ketika menyusui:</p>
  //         <ul>
  //           <li>Lurus. Posisi badan dan kepala bayi berada pada satu garis lurus.</li>
  //           <li>Menghadap payudara. Posisi bayi harus menghadap payudara ibu.</li>
  //           <li>Dekat. Ibu dan bayi harus berdekatan, perut bayi harus menyentuh bagian perut ibu.</li>
  //           <li>Ditopang. Ibu menopang seluruh tubuh bayi, bukan hanya bagian kepala atau bahu bayi sehingga posisi bayi dapat sepenuhnya menghadap payudara, dekat dan membuat badan dan kepala bayi berada pada satu garis lurus.</li>
  //         </ul>
  //       `,
  //     },
  //     {
  //       type: "image",
  //       src: PosisiMenyusuiBenar,
  //       alt: "Posisi Menyusui yang Benar",
  //       caption: "Gambar. posisi menyusui yang benar (Sumber gambar: Unicef, 2015; Kemenkes, 2008)",
  //     },
  //     {
  //       type: "text",
  //       content: `
  //         <p class="mt-4">Berikut ini beberapa posisi menyusui yang umum dilakukan ibu:</p>
  //         <ul>
  //           <li>Posisi normal. Tangan ibu menyangga seluruh badan bayi yang menghadap ke payudara.</li>
  //           <li>Posisi di bawah lengan menyilang.</li>
  //           <li>Posisi berbaring menyamping, posisi yang dilakukan ibu saat ibu sedang beristirahat sambil menyusui.</li>
  //           <li>Posisi bayi di bawah lengan/ketiak. Posisi ini biasanya digunakan setelah operasi Caesar atau menyusui bayi kembar.</li>
  //         </ul>
  //       `,
  //     },
  //     {
  //       type: "image",
  //       src: PerlekatanBaik,
  //       alt: "Posisi Perlekatan yang Baik di Payudara Ibu (Contoh 1)",
  //       caption: "Gambar. Posisi pelekatan yang baik di payudara ibu (Contoh 1)",
  //     },
  //     {
  //       type: "text",
  //       content: `
  //         <h3 class="text-xl font-semibold mb-2 mt-4">Posisi Perlekatan yang Baik</h3>
  //         <p>Posisi perlekatan yang baik yaitu:</p>
  //         <ul>
  //           <li>Kepala bayi diposisikan sepanjang sumbu yang sama dengan punggungnya, dengan telinga, bahu, dan pinggul dalam garis lurus; bayi tengkurap dengan ibunya.</li>
  //           <li>Kepala bayi baru lahir dimiringkan sedikit ke belakang, dagunya terbenam di dada ibu, dan hidungnya tidak tersumbat.</li>
  //           <li>Mulut bayi terbuka lebar dan menyerap sebagian besar areola. Bayi harus menyusu pada payudara, bukan pada ujung putingnya, karena ujung puting dapat menyebabkan puting lecet atau nyeri, atau merangsang payudara tanpa mengosongkannya, sehingga menyebabkan pembengkakan atau mastitis.</li>
  //           <li>Perlekatannya asimetris, dan kedua bibir bergelang. Sebagian areola dapat terlihat di bawah bibir atas, tetapi tidak di bibir bawah. Setelah sesi menyusui, putingnya elastis dan bulat, alih-alih terjepit, menunjukkan bahwa bayi dapat menciptakan segel dan menghisap ASI.</li>
  //         </ul>
  //       `,
  //     },
  //     {
  //       type: "image",
  //       src: PerlekatanBaik2,
  //       alt: "Posisi Perlekatan yang Baik di Payudara Ibu (Contoh 2)",
  //       caption: "Gambar. Posisi pelekatan yang baik di payudara ibu (Contoh 2)",
  //     },
  //     {
  //       type: "text",
  //       content: `
  //         <h3 class="text-xl font-semibold mb-2 mt-4">Cara Menyusui yang Benar</h3>
  //         <p>Sebagai seorang ibu, ibu perlu melatih diri bagaimana cara menyusui yang benar agar ibu dapat menyusui dengan benar dan bayi merasa nyaman. Berikut cara menyusui yang benar yang dapat dipraktikkan ibu:</p>
  //         <ul>
  //           <li>Jagalah kebersihan tangan ibu sebelum menyusui dengan mencuci tangan sebelum menyentuh dan menyusui bayi.</li>
  //           <li>Susuilah bayi dengan posisi yang nyaman untuk ibu dan bayi.</li>
  //           <li>Ibu sebaiknya menggunakan baju yang nyaman dan berkancing depan sehingga memudahkan jika ibu ingin memberikan susu ke bayi kapan saja.</li>
  //         </ul>
  //       `,
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Cara Memperlancar ASI",
  //   slug: "cara-memperlancar-asi",
  //   description: "Berbagai metode untuk meningkatkan produksi ASI, seperti pijat marmet, pijat oksitosin, dan frekuensi menyusui.",
  //   blocks: [
  //     {
  //       type: "text",
  //       content: `
  //         <p>Untuk mendukung keberhasilan pemberian ASI eksklusif, ibu menyusui perlu memahami berbagai cara yang dapat membantu memperlancar produksi ASI. Beberapa langkah yang terbukti efektif secara ilmiah meliputi:</p>
  //         <ul>
  //           <li>Pijat marmet adalah pijat yang dikombinasi cara memerah ASI dan memijat payudara sehingga refleks pengeluaran ASI bisa meningkat. Pijat marmet memiliki manfaat yaitu meningkatkan produksi ASI dengan teknik marmet yang akan memberikan rangsangan kepada kelenjar air susu ibu untuk memproduksi susu.</li>
  //           <li>Pijat oksitosin merupakan salah satu tindakan yang perlu dilakukan untuk memaksimalkan kualitas dan kuantitas ASI. Hormon oksitosin bekerja merangsang otot polos untuk meremas ASI yang ada pada alveoli, lobus serta duktus yang berisi ASI yang dikeluarkan melalui putting susu. Pijatan oksitison tidak dapat dilakukan oleh ibu sendiri karena pijat oksitosin ini dilakukan sepanjang tulang belakang ibu.</li>
  //           <li>Lebih sering menyusui, salah satu cara memperbanyak dan memperlancar produksi ASI yakni dengan meningkatkan frekuensi menyusui. Proses ini dikenal dengan nama <em>let down reflex</em> yang membantu merangsang kontraksi otot-otot payudara, sehingga ASI dapat mengalir dengan lancar sampai nantinya diminum oleh bayi.</li>
  //           <li>Menyusui dengan kedua sisi payudara. Salah satu cara untuk meningkatkan produksi ASI adalah dengan membiarkan bayi menyusu dari kedua sisi payudara secara bergantian dalam satu sesi menyusui. Dimulai dari satu sisi hingga bayi melepaskan sendiri, lalu dilanjutkan ke sisi lainnya. Stimulasi merata pada kedua payudara ini dapat membantu memperlancar pengeluaran ASI.</li>
  //         </ul>
  //       `,
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Produksi dan Penyimpanan ASI",
  //   slug: "produksi-dan-penyimpanan-asi",
  //   description: "Informasi tentang bagaimana ASI diproduksi dan panduan durasi penyimpanan ASI pada berbagai suhu.",
  //   blocks: [
  //     {
  //       type: "text",
  //       content: `
  //         <p>Produksi ASI dipengaruhi oleh hormon prolaktin dan oksitosin, yang distimulasi oleh isapan bayi.</p>
  //         <h3 class="text-xl font-semibold mb-2">Penyimpanan:</h3>
  //         <ul>
  //           <li>Suhu ruang: 4 jam </li>
  //           <li>Lemari es (4°C): 3–5 hari </li>
  //           <li>Freezer: 3–6 bulan (tergantung jenis freezer) </li>
  //         </ul>
  //       `,
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "ASI vs Susu Formula",
  //   slug: "asi-vs-susu-formula",
  //   description: "Perbandingan singkat antara ASI dan susu formula, menyoroti keunggulan ASI.",
  //   blocks: [
  //     {
  //       type: "text",
  //       content: `
  //         <p>ASI memiliki keunggulan nutrisi dan imunologis yang tidak dapat ditandingi oleh susu formula. Kandungan ASI disesuaikan secara alami dengan kebutuhan bayi yang terus berkembang, serta mengandung antibode dan komponen bioaktif yang melindungi bayi dari berbagai penyakit. Susu formula, meskipun dapat menjadi alternatif jika ASI tidak tersedia atau tidak memungkinkan, tidak dapat mereplikasi kompleksitas dan manfaat lengkap dari ASI.</p>
  //       `,
  //     },
  //     {
  //       type: "image",
  //       src: AsiVsFormula,
  //       alt: "Perbandingan ASI vs Susu Formula",
  //       caption: "Ilustrasi perbandingan kandungan ASI dan susu formula.",
  //     },
  //     {
  //       type: "text",
  //       content: `
  //         <p class="mt-4">Penting untuk diingat bahwa setiap tetes ASI memiliki manfaat luar biasa untuk perkembangan bayi, baik dari segi nutrisi maupun perlindungan dari penyakit. Organisasi kesehatan global merekomendasikan ASI eksklusif selama enam bulan pertama kehidupan.</p>
  //       `,
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: "Mitos vs Fakta ASI",
  //   slug: "mitos-vs-fakta-asi",
  //   description: "Mengungkap kebenaran di balik mitos umum seputar menyusui, seperti ukuran payudara, kekenduran, dan kecukupan ASI.",
  //   blocks: [
  //     {
  //       type: "text",
  //       content: `
  //         <h3 class="text-xl font-semibold mb-2">Mitos vs Fakta: Payudara Kendur</h3>
  //         <p><strong>Fakta:</strong> Ibu yang menyusui bayi tidak perlu khawatir akan mengalami kekenduran payudara. Menyusui bayi merupakan kewajiban semua ibu terhadap anaknya, jika ibu menyusui secara teratur ibu akan jauh dari risiko terkena kanker payudara. Pada saat hamil hormon-hormon menambah kelenjar ASI sehingga ukuran payudara lebih besar dari ukuran biasanya. Pasca menyusui, payudara akan kembali kepada ukuran normal dan ibu tidak perlu khawatir. Payudara menjadi kendur disebabkan oleh bertambahnya usia dan kehamilan.</p>

  //         <h3 class="text-xl font-semibold mb-2 mt-4">Mitos: ASI Tidak Cukup untuk Bayi dari 0-6 Bulan</h3>
  //         <p><strong>Faktanya:</strong> ASI eksklusif cukup memenuhi kebutuhan gizi bayi hingga usia 6 bulan. Air susu ibu memiliki peran vital dalam pemenuhan gizi dan kekebalan tubuh bayi. Kandungan gizi ASI menyesuaikan kebutuhan bayi dari waktu ke waktu sehingga tidak perlu penambahan makanan lagi.</p>

  //         <h3 class="text-xl font-semibold mb-2 mt-4">Mitos: Payudara Kecil Tidak Mampu Memproduksi ASI</h3>
  //         <p><strong>Faktanya:</strong> Ukuran payudara tidak berkorelasi langsung dengan kapasitas produksi ASI. Produksi ASI bergantung pada rangsangan hisapan bayi dan hormon prolaktin serta oksitosin, bukan ukuran fisik payudara. Proses produksi ASI mengikuti prinsip "supply and demand" semakin sering bayi menyusu, maka produksi ASI pun meningkat. Oleh karena itu, ibu dengan ukuran payudara kecil tetap dapat menyusui bayinya secara eksklusif dan mencukupi kebutuhannya.</p>
  //       `,
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: "Mengatasi Masalah Menyusui",
  //   slug: "mengatasi-masalah-menyusui",
  //   description: "Solusi untuk masalah umum seperti puting lecet, payudara bengkak, dan teknik memerah ASI secara manual atau menggunakan pompa.",
  //   blocks: [
  //     {
  //       type: "text",
  //       content: `
  //         <p>Masalah menyusui yang umum terjadi pada ibu menyusui antara lain meliputi puting lecet dan payudara membengkak akibat bendungan ASI maka di perlukan Teknik perawatan payudara dimana perawatan payudara merupakan salah satu cara merawat payudara untuk produkasi ASI, selain itu untuk kebersihan payudara dan bentuk putting, mencegah penyumbatan dan memperodukasi ASI</p>

  //         <h3 class="text-xl font-semibold mb-2">Teknik Perawatan Payudara yang Dapat Dilakukan:</h3>
  //         <ul>
  //           <li><strong>Puting lecet:</strong> Untuk mencegah rasa sakit, bersihkan putting susu dengan iar hangat Ketika sedang mandi dan jangan menggunakan sabun, karena sabun bisa membuat putting suus kering dan iritasi.</li>
  //           <li><strong>Putting susu bengkak akibat bendungan ASI:</strong> lakukan pengompresan payudara menggunakan kain basah dan hangat selama 5 menit, urut payudara dari arah pangkal menuju putting susu, keluarkan ASI Sebagian sehingga putting susu menjadi lunak, susukan bayi setiap 2-3 jam, apabila tidak dapat menghisap ASI sisanya di keluarkan dengan tangan letakkan kain dingin pada payudara setelah menyusui.</li>
  //         </ul>

  //         <h3 class="text-xl font-semibold mb-2 mt-4">Teknik Memerah ASI secara Manual atau Menggunakan Pompa</h3>
  //         <p>Memerah ASI merupakan cara mengeluarkan ASI dari payudara (selain dengan hisapan bayi langsung). Berikut ini di uraikan tentang berbagai metode memerah asi dan Teknik pemerahan yang dapat dilakukan,</p>

  //         <h4 class="text-lg font-semibold mb-2">Memerah Langsung Menggunakan Tangan (Manual)</h4>
  //         <p>Memerah ASI dengan tangan merupakan metode yang efektif untuk mengosongkan payudara secara optimal dibandingkan dengan menggunakan pompa. Teknik ini dapat merangsang refleks pengeluaran ASI (<em>let-down reflex</em>) lebih cepat karena adanya kontak langsung antara tangan dan kulit payudara. Selain praktis dan tanpa biaya, metode ini hanya memerlukan kesabaran dan teknik yang tepat.</p>
  //         <p>Langkah-langkah memerah ASI secara manual antara lain:</p>
  //         <ol class="list-decimal list-inside ml-4">
  //           <li>Mencuci tangan dengan sabun di bawah air mengalir.</li>
  //           <li>Menyiapkan wadah penampung ASI yang bersih.</li>
  //           <li>Merangsang <em>Let-Down Reflex</em> (LDR).</li>
  //         </ol>
  //         <p>Teknik ini harus dilakukan dengan hati-hati untuk memaksimalkan pengeluaran ASI dan mencegah terjadinya bendungan. Ilustrasi tahapannya dijelaskan gambar berikut ini: </p>
  //       `,
  //     },
  //     {
  //       type: "image",
  //       src: MemerahAsiManual,
  //       alt: "Langkah-langkah Memerah ASI Manual",
  //       caption: "Langkah-langkah memerah ASI secara manual",
  //     },
  //     {
  //       type: "text",
  //       content: `
  //         <ul class="list-disc list-inside ml-4">
  //           <li>Langkah 1: Melakukan pemijatan lembut pada payudara sebelum memulai memerah ASI. Memberikan penekanan secara lembut mulai dari bagian atas payudara menuju ke arah puting susu. Lakukan pada seluruh permukaan payudara.</li>
  //           <li>Langkah 2: Sangga payudara dengan tangan membentuk seperti huruf "C". Posisikan telapak tangan menopang payudara dengan ibu jari berada di atas areola (bagian yang menghitam), keempat jari lain berada di bagian bawah puting (menopang payudara).</li>
  //           <li>Langkah 3: Tekan payudara ke arah dinding dada. Pertahankan tangan masih menyangga payudara dengan bentuk huruf C.</li>
  //           <li>Langkah 4: Lakukan pemerahan ASI dengan lembut. Ibu jari dan jari-jari lain didekatkan, kemudian dorong ke arah depan (ke arah areola), perah ASI, kemudian lepaskan. Ulang kembali langkah 3 dan 4 hingga payudara kosong, kemudian pindah ke sisi payudara lain.</li>
  //         </ul>

  //         <h4 class="text-lg font-semibold mb-2 mt-4">Memerah ASI Menggunakan Pompa (Pumping)</h4>
  //         <p>Sebagian ibu merasa lebih nyaman memerah dengan menggunakan pompa daripada tangan. Biasanya pada ibu bekerja yang memiliki keterbatasan waktu memerah, lebih memilih menggunakan pompa. Perlu diperhatikan pada saat menggunakan pompa adalah baca dengan seksama prosedur penggunaan dan perawatan pompa yang terdapat pada buku petunjuk.</p>
  //       `,
  //     },
  //   ],
  // },
  
  {
    id: 11,
    title: "Manajemen Laktasi pada Ibu Bekerja",
    slug: "manajemen-laktasi-ibu-bekerja",
    description: "Langkah-langkah untuk mempersiapkan dan mengelola proses laktasi bagi ibu bekerja.",
    blocks: [
      {
        type: "text",
        content: `
          <p>Setiap perempuan, termasuk yang memiliki pekerjaan, memiliki hak untuk tetap menyusui. Suradi (2010) menyatakan bahwa ibu bekerja harus mempersiapkan serta mengelola proses laktasinya dengan baik. Bagian berikut akan menjelaskan langkah-langkah yang dapat dilakukan agar ibu bekerja tetap dapat memberikan ASI secara optimal.</p>
          <h3 class="text-xl font-semibold mb-2 mt-4">A. Persiapan</h3>
          <h4 class="text-lg font-semibold mb-2">1. Selama Kehamilan</h4>
          <ul>
            <li>Membicarakan keputusan untuk tetap menyusui meskipun bekerja dengan atasan atau rekan kerja.</li>
            <li>Menyampaikan kepada atasan mengenai manfaat bagi perusahaan apabila karyawan perempuan tetap menyusui, serta mendiskusikan durasi cuti melahirkan dan menyusui.</li>
            <li>Membahas rencana kembali bekerja, apakah akan bekerja penuh waktu atau paruh waktu, serta kemungkinan bekerja dari rumah jika tersedia fasilitas seperti internet.</li>
            <li>Menanyakan kepada atasan apakah diperbolehkan menyusui anak di tempat kerja atau di rumah.</li>
            <li>Apabila menyusui langsung tidak memungkinkan, diskusikan kesempatan istirahat di jam kerja untuk memerah ASI.</li>
            <li>Mencari tempat yang nyaman dan layak untuk memerah ASI, sebaiknya bukan kamar mandi, serta idealnya ruangan tersebut memang disediakan khusus untuk kegiatan tersebut.</li>
            <li>Memastikan ketersediaan lokasi yang mendukung kegiatan menyusui atau memerah ASI di tempat kerja.</li>
            <li>Pastikan ada tempat yang memadai untuk mengeluarkan dan menyimpan ASI.</li>
            <li>Cari tahu apakah tersedia fasilitas penitipan anak di lingkungan kerja atau di sekitarnya, serta layanan apa saja yang ditawarkan oleh tempat penitipan tersebut.</li>
            <li>Berdiskusilah dengan ibu-ibu bekerja lainnya untuk berbagi pengalaman.</li>
            <li>Libatkan pasangan (suami) dan keluarga dekat dalam pembahasan mengenai waktu kembali bekerja, siapa yang akan merawat bayi ketika Anda bekerja, kemungkinan pasangan mengambil cuti, pembagian tugas rumah tangga, serta pengawasan anak-anak lain di rumah.</li>
          </ul>
          <h4 class="text-lg font-semibold mb-2 mt-4">Menjelang Ibu Kembali Bekerja</h4>
          <ul>
            <li>Susui bayi langsung dari payudara dan hindari penggunaan dot, botol susu, maupun pemberian cairan selain ASI.</li>
            <li>Pastikan mengonsumsi cukup air putih, makan makanan bergizi seimbang, dan mengurangi stres agar produksi ASI tetap lancar.</li>
            <li>Luangkan waktu untuk relaksasi sekitar 20 menit setiap hari tanpa harus memerah ASI.</li>
            <li>Gunakan pakaian yang memudahkan Anda memerah ASI kapan pun diperlukan.</li>
            <li>Biasakan memerah ASI dengan pompa manual, pompa elektrik, atau tangan. Amati durasi yang dibutuhkan untuk mengosongkan payudara; umumnya kedua payudara dapat kosong dalam waktu 15–20 menit. Mulailah memerah ASI secara rutin sejak ASI pertama keluar atau ketika payudara terasa penuh, biasanya pada minggu pertama setelah melahirkan.</li>
            <li>Tetapkan jadwal rutin memerah ASI, misalnya setiap dua hingga tiga jam. ASI perah yang berlebih dapat disimpan di lemari pendingin sebagai cadangan untuk digunakan di kemudian hari.</li>
            <li>Saat berada di tempat kerja, lakukan pemerasan ASI dengan menggunakan cangkir, sendok, atau pipet. Hindari penggunaan botol untuk pemberian ASI perah karena dapat mengganggu kebiasaan menyusu langsung pada bayi.</li>
            <li>Carilah pengasuh yang mampu memberikan ASI perah (ASIP) dan merawat anak ketika ibu bekerja, misalnya nenek, kakek, anggota keluarga lain, babysitter, atau pengasuh profesional. Berikan kesempatan kepada pengasuh untuk lebih mengenal bayi dengan cara menghabiskan waktu bersama selama satu hingga dua minggu sebelum ibu mulai kembali bekerja. Jika tidak tersedia pengasuh, pertimbangkan untuk menggunakan jasa penitipan anak. Pastikan pengasuh memahami cara memberikan ASI perah menggunakan cangkir, sendok, atau pipet.</li>
          </ul>
          <h4 class="text-lg font-semibold mb-2 mt-4">Selama Ibu Bekerja</h4>
          <ul>
            <li>Usahakan memulai kembali pekerjaan pada akhir pekan sehingga hari kerja pertama terasa lebih singkat dan memudahkan proses penyesuaian.</li>
            <li>Hindari penumpukan pekerjaan agar tidak menimbulkan stres yang dapat memengaruhi produksi ASI.</li>
            <li>Pastikan ibu memperoleh waktu tidur yang cukup, mengonsumsi air putih dalam jumlah yang memadai, serta menjaga pola makan yang sehat.</li>
            <li>Tingkatkan frekuensi menyusui bayi di pagi hari sebelum berangkat kerja, pada sore atau malam hari, serta di hari libur. Hal ini dapat membantu mempertahankan produksi ASI sekaligus mempererat ikatan antara ibu dan bayi.</li>
            <li>Jika tempat kerja tidak menyediakan pompa ASI atau fasilitas pemerasan ASI, simpan persediaan ASI perah di lemari pendingin selama ibu bekerja. Upayakan memerah ASI setiap tiga jam sekali.</li>
            <li>Sebelum berangkat bekerja, siapkan kotak pendingin serta wadah penyimpanan ASI perah yang higienis untuk memudahkan pengangkutan dan penyimpanan.</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 12,
    title: "Tips dan Strategi Pemberian ASI bagi Ibu Bekerja",
    slug: "tips-strategi-asi-ibu-bekerja",
    description: "10 tips sukses pemberian ASI Eksklusif pada ibu bekerja agar tetap optimal.",
    blocks: [
      {
        type: "text",
        content: `
          <p>Berikut penulis tuliskan tips sukses untuk ibu bekerja yang ingin tetap memberikan ASI untuk bayinya:</p>
          <ol class="list-decimal list-inside ml-4">
            <li>Menyiapkan persediaan ASIP (air susu ibu perah) dengan baik dengan cara membuat tabungan ASIP sejak hari pertama menyusui.</li>
            <li>Memerah dan menyimpan ASIP (air susu ibu perah) secara rutin sesuai jadwal menyusui di rumah.</li>
            <li>Memberikan ASIP (air susu ibu perah) dengan cangkir, sendok ataupun pipet.</li>
            <li>Mempersiapkan pengasuh sekaligus memberi edukasi yang sesuai dengan misi ibu bekerja.</li>
            <li>Membawa foto bayi saat memerah ASI agar mood tetap baik.</li>
            <li>Memiliki pompa ASI yang benar-benar berkualitas untuk mendukung kelancaran memompa ASI. Jika tidak memerah dengan kedua tangan lebih dianjurkan.</li>
            <li>Mencari teman sesama pejuang ASIP (air susu ibu perah) untuk menambah semangat mengASlhi.</li>
            <li>Pastikan selalu terhidrasi dengan baik melalui makan dan minum yang bernutrisi tinggi.</li>
            <li>Ketahui cara menyimpan ASI dengan benar dan sampaikan juga pada pengasuh cara pengelolaan ASIP (air susu ibu perah).</li>
            <li>Pertimbangkan untuk menggunakan fasilitas penitipan anak yang dekat dengan kantor agar bisa menyusui secara langsung dari payudara di jam kerja.</li>
          </ol>
        `,
      },
    ],
  },
  {
    id: 13,
    title: "Teknik Memerah ASI",
    slug: "teknik-memerah-asi",
    description: "Panduan mengenai dua teknik memerah ASI, yaitu secara manual dan menggunakan pompa.",
    blocks: [
      {
        type: "text",
        content: `
          <h3 class="text-xl font-semibold mb-2">Teknik Memerah ASI Secara Manual</h3>
          <p>Langkah-langkah memerah ASI secara manual antara lain:</p>
          <ol class="list-decimal list-inside ml-4">
            <li>Pijat lembut pada payudara sebelum memerah ASI.</li>
            <li>Sangga payudara dengan tangan membentuk seperti huruf "C".</li>
            <li>Tekan payudara ke arah dinding dada. Pertahankan tangan masih menyangga payudara dengan bentuk huruf "C".</li>
            <li>Lakukan pemerahan ASI dengan lembut.</li>
          </ol>
          <h3 class="text-xl font-semibold mb-2 mt-4">Teknik Memerah ASI Menggunakan Pompa</h3>
          <p>Langkah-langkah memerah ASI menggunakan pompa:</p>
          <ol class="list-decimal list-inside ml-4">
            <li>Keluarkan udara dari dalam bola karet dengan cara ditekan.</li>
            <li>Sisi tabung pompa ASI (corong lebar) diletakkan melekat dengan payudara, posisi puting bagian tengah.</li>
            <li>Aturlah sehingga puting dan areola tertarik ke dalam tabung pompa ASI dengan cara melepaskan bola karet di bagian ujung satunya.</li>
            <li>Operasikan dengan memompa melalui tekan dan lepaskan berulang kali pada tuas atau bola karet, selanjutnya ASI keluar dan tertampung penuh.</li>
            <li>Bila sudah selesai, gunakan air mendidih untuk mencuci pompa ASI yang telah selesai digunakan.</li>
          </ol>
        `,
      },
    ],
  },
  {
    id: 14,
    title: "Teknik Penyimpanan ASI Perah pada Ibu Bekerja",
    slug: "teknik-penyimpanan-asi-perah-pada-ibu-bekerja",
    description: "Panduan tentang cara menyimpan ASI perah agar kualitas dan gizinya tetap terjaga.",
    blocks: [
      {
        type: "text",
        content: `
          <p>Agar kualitas ASI perah dan gizinya terjaga, berikut ini Teknik yang dapat dilakukan dengan baik dan benar dalam menyimpan ASI perah:</p>
          <ol class="list-decimal list-inside ml-4">
            <li>Sebelum menyimpan ASI perah, wadah yang digunakan wajib disterilisasi dengan merebus botol dan pompa ASI selama 5 menit atau menggunakan alat sterilisasi elektrik.</li>
            <li>ASI perah disimpan pada suhu tergantung tempat penyimpanan: suhu ruang 25℃ tahan 4 jam, suhu kulkas 4℃ tahan 4-5 hari, dan di freezer -18℃ tahan 3-6 bulan.</li>
            <li>ASI perah yang ingin dibekukan segera pindahkan ke freezer.</li>
            <li>Tempat penyimpanan ASI perah sebaiknya menggunakan botol kaca untuk menjaga kualitas ASI.</li>
            <li>Saat mencairkan ASI perah, tidak disarankan menggunakan air panas. Jika ASI perah tidak digunakan dalam waktu 12 jam, jangan dibekukan lagi.</li>
          </ol>
        `,
      },
    ],
  }
];

export default articles;