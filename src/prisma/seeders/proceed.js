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
            amount: 'Seluruh Dana',
            use: 'Pembayaran (pemenuhan kontrak) atas pembelian nikel dan batubara dari supplier.',
            company_id: 26,
        },
    })
}

module.exports = { seedProceeds }