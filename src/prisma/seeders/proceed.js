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
}

module.exports = { seedProceeds }