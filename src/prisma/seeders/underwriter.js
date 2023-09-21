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
}

module.exports = { seedUnderwriters }