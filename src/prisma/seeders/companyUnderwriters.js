async function seedUnderwriters(prisma) {
    await prisma.underwriter.upsert({
        where: { id: 1 },
        update: {},
        create: {
            company_id: 'XA - NH KORINDO SEKURITAS INDONESIA',
            underwriter_id: 'XA - NH KORINDO SEKURITAS INDONESIA',
            type: 'XA - NH KORINDO SEKURITAS INDONESIA',
        },
    })
}

module.exports = { seedUnderwriters }