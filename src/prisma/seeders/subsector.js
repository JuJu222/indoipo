async function seedSubSectors(prisma) {
    await prisma.subsector.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Business Support Services',
            sector_id: 1,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Recreational & Sports Facilities',
            sector_id: 2,
        },
    })
}

module.exports = { seedSubSectors }