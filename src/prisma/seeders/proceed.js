async function seedProceeds(prisma) {
    await prisma.proceed.upsert({
        where: { id: 1 },
        update: {},
        create: {
            amount: '50%',
            use: 'Modal belanja dalam rangka mendukung pertumbuhan penambahan kapasitas produksi.',
            company_id: 14,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 2 },
        update: {},
        create: {
            amount: '50%',
            use: 'Memperkuat dana kas perusahaan untuk membiayai biaya kegiatan operasional pabrik, pembelian bahan baku dan pembayaran gaji, dan biaya promosi.',
            company_id: 14,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 3 },
        update: {},
        create: {
            amount: 'Rp 101,572 Juta',
            use: 'Pembayaran sebagian pokok utang kepada PT Bank OCBC NISP Tbk (“Bank OCBC”).',
            company_id: 15,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 4 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja untuk mendukung operasional Perseroan, termasuk gaji, pembelian perangkat keras dan lunak, jasa pihak ketiga, serta biaya operasional lainnya.',
            company_id: 15,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 5 },
        update: {},
        create: {
            amount: 'Rp 14,682 Juta',
            use: 'Pembelian 99% saham dan setoran modal kerja PT Kian Santang.',
            company_id: 13,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 6 },
        update: {},
        create: {
            amount: 'Rp 6,312 Juta',
            use: 'Pembelian 99% saham dan setoran modal kerja PT Karya Instrumindo Simpati.',
            company_id: 13,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 7 },
        update: {},
        create: {
            amount: 'Rp 9,630 Juta',
            use: 'Akuisisi merk Ergas dan Kians.',
            company_id: 13,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 8 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja untuk mendukung operasional Perseroan, termasuk gaji, biaya pelatihan karyawan, pembiayaan proyek, serta biaya operasional lainnya.',
            company_id: 13,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 9 },
        update: {},
        create: {
            amount: 'Rp 40,630 Juta',
            use: 'Pembelian bidang tanah di Desa Ngawis, Kecamatan Karangmojo, Gunungkidul, dan Daerah Istimewa Yogyakarta.',
            company_id: 16,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 10 },
        update: {},
        create: {
            amount: 'Rp 15,520 Juta',
            use: 'Pembelian bidang tanah di Desa Tuksono, Kabupaten Kulonprogo, Daerah Istimewa Yogyakarta dan pembangunan fasilitas Hatchery baru.',
            company_id: 16,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 11 },
        update: {},
        create: {
            amount: 'Rp 11,537 Juta',
            use: 'Pelunasan seluruh utang usaha Perseroan kepada PT Janu Putra Abadi (“JPA”).',
            company_id: 16,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 12 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja Perseroan, termasuk namun tidak terbatas untuk pembelian Parent Stock Day-Old-Chicks dari JPA.',
            company_id: 16,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 13 },
        update: {},
        create: {
            amount: '49.45% ',
            use: 'Capital Expenditure (CAPEX) yang meliputi pengembangan bangunan, mesin produksi, dan lain-lain.',
            company_id: 17,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 14 },
        update: {},
        create: {
            amount: '50.55%',
            use: 'Operational Expenditure (OPEX) yang meliputi penambahan daya listrik di area pabrik, biaya pemasaran, dan lain-lain.',
            company_id: 17,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 15 },
        update: {},
        create: {
            amount: '50.79%',
            use: 'Setoran modal pada anak perusahaan (PT Bumi Prima Konstruksi dan PT Manyar Perkasa Mandiri).',
            company_id: 18,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 16 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja Perseroan (pembayaran material, perlengkapan proyek, gaji karyawan, dan biaya operasional.',
            company_id: 18,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 17 },
        update: {},
        create: {
            amount: 'Seluruh Dana',
            use: 'Modal kerja Perseroan (biaya pokok konstruksi gedung & bangunan, infrastruktur Jalan, produksi aspal hot mix & produksi beton ready mix, gaji dan tunjangan).',
            company_id: 19,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 18 },
        update: {},
        create: {
            amount: '90%',
            use: 'Pembangunan LNG Station (Natural Gas) di Galian Field Tambun Zone 7 Regional 2 - dikategorikan sebagai Capital Expenditure (CAPEX)',
            company_id: 20,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 19 },
        update: {},
        create: {
            amount: '10%',
            use: 'Modal kerja Perseroan - dikategorikan sebagai Operating Expenditure (OPEX).',
            company_id: 20,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 20 },
        update: {},
        create: {
            amount: 'Seluruh Dana',
            use: 'Diterima oleh Para Pemegang Saham Penjual dan Perseroan tidak menerima dana hasil Penawaran Umum Perdana Saham.',
            company_id: 21,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 21 },
        update: {},
        create: {
            amount: 'Rp 6 Miliar',
            use: 'Pembelian 1 (satu) gudang khusus bahan baku.',
            company_id: 22,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 22 },
        update: {},
        create: {
            amount: 'Rp 3.4 Miliar',
            use: 'Pengembangan lab Research & Development untuk dapat menghasilkan prototipe dan formulasi yang lebih cepat dan variative.',
            company_id: 22,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 23 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja berupa pembelian bahan baku.',
            company_id: 22,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 24 },
        update: {},
        create: {
            amount: '30%',
            use: 'Pembelian mesin dalam rangka peningkatan dan otomatisasi proses produksi serta pengembangan produk baru.',
            company_id: 23,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 25 },
        update: {},
        create: {
            amount: '10%',
            use: 'Membayar sebagian utang pokok pinjaman Dollar AS dari PT Bank Woori Saudara 1906 Tbk.',
            company_id: 23,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 26 },
        update: {},
        create: {
            amount: '15%',
            use: 'Sewa gudang dan kantor serta membeli kendaraan operasional dan peralatan gudang di Jawa Tengah dan Jawa Timur.',
            company_id: 23,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 27 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja Perseroan (pembelian kebutuhan bahan baku dan membiayai kegiatan operasional seperti biaya marketing, biaya SDM, dan lain-lain).',
            company_id: 23,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 28 },
        update: {},
        create: {
            amount: '40%',
            use: 'Modal belanja untuk pengembangan perusahaan termasuk pembelian mesin SAP sheet dan gedung pabrik lini produksi SAP sheet.',
            company_id: 24,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 29 },
        update: {},
        create: {
            amount: '30%',
            use: 'Modal kerja untuk untuk pembiayaan kebutuhan operasional seperti gaji karyawan, biaya marketing, dan lain-lain.',
            company_id: 24,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 30 },
        update: {},
        create: {
            amount: '30%',
            use: 'Pembayaran seluruh dan sebagian pinjaman bank untuk fasilitas modal kerja.',
            company_id: 24,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 31 },
        update: {},
        create: {
            amount: '48.76%',
            use: 'Peningkatan sarana hotel seperti pembelian perlengkapan kamar hotel, ruang meeting, dan lain-lain.',
            company_id: 25,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 32 },
        update: {},
        create: {
            amount: '4.13%',
            use: 'Pembuatan 4 gerai restoran cepat saji beserta pembelian peralatan dan perabotan dengan nama The Flamexpress.',
            company_id: 25,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 33 },
        update: {},
        create: {
            amount: '3.36%',
            use: 'Biaya sewa 4 lokasi gerai baru The Flamexpress selama jangka waktu 1 (satu) tahun.',
            company_id: 25,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 34 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja Perseroan (pembelian persediaan hotel, biaya listrik, dan lain-lain).',
            company_id: 25,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 35 },
        update: {},
        create: {
            amount: 'Seluruh Dana',
            use: 'Pembayaran (pemenuhan kontrak) atas pembelian nikel dan batubara dari supplier.',
            company_id: 26,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 36 },
        update: {},
        create: {
            amount: 'Seluruh Dana',
            use: 'Modal kerja Perseroan (pembelian bahan baku sepeda motor listrik dan E-Moped seperti baterai, dinamo, dan lain-lain).',
            company_id: 27,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 37 },
        update: {},
        create: {
            amount: '50%',
            use: 'Dialokasikan untuk entitas anak, yaitu TIP, dalam bentuk penyetoran modal, yang digunakan untuk akuisisi properti berupa tanah dan bangunan serta biaya operasional TIP seperti beban gaji, beban keamanan, dan lain-lain.',
            company_id: 28,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 38 },
        update: {},
        create: {
            amount: '10%',
            use: 'Dialokasikan untuk entitas anak, yaitu TNN, dalam bentuk penyetoran modal, yang digunakan oleh TNN untuk keperluan modal kerja berupa pembelian persediaan produk retail TNN.',
            company_id: 28,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 39 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Keperluan modal kerja Perseroan berupa pembelian persediaan produk digital seperti produk telekomunikasi dan voucher game (75%) serta pengembangan sistem IT (25%).',
            company_id: 28,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 40 },
        update: {},
        create: {
            amount: '75%',
            use: 'Memberikan pinjaman kepada anak perusahaan, MCT, untuk membantu pembayaran atau pelunasan sebagian utang MCT kepada OCP Asia Fund IV (SF 1) Pte. Limited dan OCP Asia Fund V (SF 1) Pte.',
            company_id: 29,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 41 },
        update: {},
        create: {
            amount: '20.64%',
            use: 'Modal belanja (Capital Expenditure) untuk mendukung kegiatan utama Perseroan, khususnya pembelian tongkang sungai.',
            company_id: 29,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 42 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja (Operational Expenditure) untuk mendukung kegiatan operasional Perseroan, mencakup pembelian bahan bakar, pembayaran jasa operator kapal, jasa keamanan, operator alat berat, dan lainnya.',
            company_id: 29,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 43 },
        update: {},
        create: {
            amount: '89%',
            use: 'Pembiayaan modal kerja untuk mendukung operasional Perseroan, mencakup pembelian persediaan produk digital, pembayaran gaji karyawan, biaya pemasaran, dan sewa server.',
            company_id: 30,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 44 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal belanja (Capital Expenditure) untuk renovasi dan sewa hub, sebagai bagian dari rencana jangka panjang Perseroan.',
            company_id: 30,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 45 },
        update: {},
        create: {
            amount: 'Seluruh Dana',
            use: 'Modal kerja Perseroan digunakan untuk biaya operasional, pembayaran kepada pemasok, serta perbaikan alat-alat berat seperti mesin, pompa, dan transmisi.',
            company_id: 31,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 46 },
        update: {},
        create: {
            amount: '24%',
            use: 'Pembelian peralatan kerja proyek baru guna menunjang peralatan kerja proyek Perseroan.',
            company_id: 32,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 47 },
        update: {},
        create: {
            amount: '4%',
            use: 'Sewa bangunan dan kendaraan serta pengembangan sistem informasi dan jaringan.',
            company_id: 32,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 48 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Modal kerja Perseroan melibatkan sejumlah kegiatan, termasuk namun tidak terbatas pada pembelian persediaan bahan baku, biaya kontraktor, desain interior, dan pengadaan furnitur.',
            company_id: 32,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 49 },
        update: {},
        create: {
            amount: '49.2%',
            use: 'Modal kerja guna mendukung strategi perkembangan Perseroan melalui berbagai inisiatif.',
            company_id: 33,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 50 },
        update: {},
        create: {
            amount: '18.5%',
            use: 'Digunakan Perseroan untuk belanja modal.',
            company_id: 33,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 51 },
        update: {},
        create: {
            amount: '13.5%',
            use: 'Pembelian gudang di Jalan Raya Cijayanti, Bogor dilakukan dari pihak afiliasi, yaitu Bpk. Hendrik Yong yang menjabat sebagai Komisaris Utama dan Pemegang Saham Pengendali Perseroan.',
            company_id: 33,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 52 },
        update: {},
        create: {
            amount: '10.8%',
            use: 'Penyetoran modal kepada Perusahaan Anak, yaitu PT Tukang Bersih Indonesia (“PT TBI”).',
            company_id: 33,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 53 },
        update: {},
        create: {
            amount: '8%',
            use: 'Penyetoran modal kepada Perusahaan Anak, yaitu PT Indocitra Pacific (“PT ICP”).',
            company_id: 33,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 54 },
        update: {},
        create: {
            amount: 'Rp 25 Miliar',
            use: 'Melunasi sebagian utangnya kepada PT Bank Central Asia Tbk ("BCA") sejumlah Rp 25 miliar yang akan jatuh tempo.',
            company_id: 34,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 55 },
        update: {},
        create: {
            amount: 'Rp 25 Miliar',
            use: 'Melunasi sebagian utang usaha Perseroan kepada Entitas Anak, PT Trisinar Indopratama ("TSI"). Selanjutnya, TSI akan menggunakan dana tersebut untuk melunasi sebagian utangnya kepada PT Bank Central Asia Tbk ("BCA") yang memiliki fasilitas dengan tingkat bunga tertinggi.',
            company_id: 34,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 56 },
        update: {},
        create: {
            amount: 'Sisa Dana',
            use: 'Pengembangan usaha, terutama sebagai modal kerja. Penggunaan tersebut mencakup, namun tidak terbatas pada, pembelian persediaan (produk dengan Hak Atas Kekayaan Intelektual terdaftar atas nama Perseroan), persediaan bahan penunjang (digunakan untuk pengemasan produk), persediaan barang dagang (produk dari pihak ketiga untuk dijual kembali), pengiriman barang dagang, biaya pemasaran, dan biaya operasional lainnya (termasuk biaya umum dan administratif seperti gaji pegawai dan biaya pengangkutan persediaan).',
            company_id: 34,
        },
    })
}

module.exports = { seedProceeds }