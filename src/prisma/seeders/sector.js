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
            name: 'Technology',
        },
    })
    await prisma.sector.upsert({
        where: {id: 4},
        update: {},
        create: {
            name: 'Properties & Real Estate',
        },
    })
    await prisma.sector.upsert({
        where: {id: 5},
        update: {},
        create: {
            name: 'Consumer Non-Cyclicals',
        },
    })
    await prisma.sector.upsert({
        where: {id: 6},
        update: {},
        create: {
            name: 'Infrastructures',
        },
    })
}

module.exports = { seedSectors }