async function seedUnderwriters(prisma) {
    await prisma.underwriter.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'XA - NH KORINDO SEKURITAS INDONESIA',
        },
    })
}

module.exports = { seedUnderwriters }