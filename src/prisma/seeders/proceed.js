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
}

module.exports = { seedProceeds }