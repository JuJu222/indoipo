async function seedProceeds(prisma) {
    await prisma.proceed.upsert({
        where: { id: 1 },
        update: {},
        create: {
            use: 'use 1',
            company_id: 14,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 2 },
        update: {},
        create: {
            use: 'use 2',
            company_id: 14,
        },
    })
    await prisma.proceed.upsert({
        where: { id: 3 },
        update: {},
        create: {
            use: 'use 3',
            company_id: 14,
        },
    })
}

module.exports = { seedProceeds }