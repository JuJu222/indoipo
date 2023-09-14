async function seedSectors(prisma) {
    await prisma.sector.upsert({
        where: {id: 1},
        update: {},
        create: {
            name: 'Industrials',
        },
    })
    await prisma.sector.upsert({
        where: {id: 2},
        update: {},
        create: {
            name: 'Consumer Cyclicals',
        },
    })
    await prisma.sector.upsert({
        where: {id: 3},
        update: {},
        create: {
            name: 'bbb',
        },
    })
}

module.exports = { seedSectors }