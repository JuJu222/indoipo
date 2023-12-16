async function seedUnderwriters(prisma) {
    await prisma.underwriter.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'XA - NH KORINDO SEKURITAS INDONESIA',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'NI - BNI SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'TP - OCBC SEKURITAS INDONESIA',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 4 },
        update: {},
        create: {
            name: 'PG - PANCA GLOBAL SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 5 },
        update: {},
        create: {
            name: 'AH - SHINHAN SEKURITAS INDONESIA',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 6 },
        update: {},
        create: {
            name: 'CP - KB VALBURY SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 7 },
        update: {},
        create: {
            name: 'CC - MANDIRI SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 8 },
        update: {},
        create: {
            name: 'AK - UBS SEKURITAS INDONESIA',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 9 },
        update: {},
        create: {
            name: 'BK - J.P. MORGAN SEKURITAS INDONESIA',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 10 },
        update: {},
        create: {
            name: 'PD - INDO PREMIER SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 11 },
        update: {},
        create: {
            name: 'SH - ARTHA SEKURITAS INDONESIA',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 12 },
        update: {},
        create: {
            name: 'AI - UOB KAY HIAN SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 13 },
        update: {},
        create: {
            name: 'HD - KGI SEKURITAS INDONESIA',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 14 },
        update: {},
        create: {
            name: 'SA - ELIT SUKSES SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 15 },
        update: {},
        create: {
            name: 'EP - MNC SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 16 },
        update: {},
        create: {
            name: 'AO - ERDIKHA ELIT SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 17 },
        update: {},
        create: {
            name: 'ZP - MAYBANK SEKURITAS INDONESIA',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 18 },
        update: {},
        create: {
            name: 'PO - PILARMAS INVESTINDO SEKURITAS',
        },
    })
    await prisma.underwriter.upsert({
        where: { id: 19 },
        update: {},
        create: {
            name: 'LG - TRIMEGAH SEKURITAS INDONESIA TBK',
        },
    })
}

module.exports = { seedUnderwriters }