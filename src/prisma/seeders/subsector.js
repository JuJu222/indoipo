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
    await prisma.subsector.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'Electronic Equipment & Instruments',
            sector_id: 3,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 4 },
        update: {},
        create: {
            name: 'Auto Parts & Equipment',
            sector_id: 2,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 5 },
        update: {},
        create: {
            name: 'Real Estate Development & Management',
            sector_id: 4,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 6 },
        update: {},
        create: {
            name: 'Liquors',
            sector_id: 5,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 7 },
        update: {},
        create: {
            name: 'Electric Utilities',
            sector_id: 6,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 8 },
        update: {},
        create: {
            name: 'Heavy Constructions & Civil Engineering',
            sector_id: 6,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 9 },
        update: {},
        create: {
            name: 'Logistics & Deliveries',
            sector_id: 7,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 10 },
        update: {},
        create: {
            name: 'Agricultural & Farm Machinery',
            sector_id: 1,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 11 },
        update: {},
        create: {
            name: 'Fish, Meat, & Poultry',
            sector_id: 5,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 12 },
        update: {},
        create: {
            name: 'Apparel & Textile Retail',
            sector_id: 2,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 13 },
        update: {},
        create: {
            name: 'Healthcare Providers',
            sector_id: 8,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 14 },
        update: {},
        create: {
            name: 'Oil, Gas, and Coal Equipment and Services',
            sector_id: 9,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 15 },
        update: {},
        create: {
            name: 'Pharmaceuticals',
            sector_id: 8,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 16 },
        update: {},
        create: {
            name: 'IT Services & Consulting',
            sector_id: 3,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 17 },
        update: {},
        create: {
            name: 'Healthcare Supplies & Distributions',
            sector_id: 8,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 18 },
        update: {},
        create: {
            name: 'Oil, Gas Storage, and Distribution',
            sector_id: 9,
        },
    })
}

module.exports = { seedSubSectors }