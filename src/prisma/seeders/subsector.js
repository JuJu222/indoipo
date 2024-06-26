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
    await prisma.subsector.upsert({
        where: { id: 19 },
        update: {},
        create: {
            name: 'Diversified Metals & Minerals',
            sector_id: 10,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 20 },
        update: {},
        create: {
            name: 'Basic Chemicals',
            sector_id: 10,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 21 },
        update: {},
        create: {
            name: 'Textiles',
            sector_id: 2,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 22 },
        update: {},
        create: {
            name: 'Personal Care Products',
            sector_id: 5,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 23 },
        update: {},
        create: {
            name: 'Hotels, Resorts, and Cruise Lines',
            sector_id: 2,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 24 },
        update: {},
        create: {
            name: 'Sport Equipment & Hobbies Goods',
            sector_id: 2,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 25 },
        update: {},
        create: {
            name: 'Online Applications & Services',
            sector_id: 3,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 26 },
        update: {},
        create: {
            name: 'Coal Distribution',
            sector_id: 9,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 27 },
        update: {},
        create: {
            name: 'Home Furnishings',
            sector_id: 2,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 28 },
        update: {},
        create: {
            name: 'Environmental & Facilities Services',
            sector_id: 1,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 29 },
        update: {},
        create: {
            name: 'Household Appliances',
            sector_id: 2,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 30 },
        update: {},
        create: {
            name: 'Restaurants',
            sector_id: 2,
        },
    })
    await prisma.subsector.upsert({
        where: { id: 31 },
        update: {},
        create: {
            name: 'Office Supplies',
            sector_id: 1,
        },
    })
}

module.exports = { seedSubSectors }