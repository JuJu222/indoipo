async function seedFinancials(prisma) {
    await prisma.financial.upsert({
        where: { id: 1 },
        update: {},
        create: {
            net_income: 460384000000,
            liability: 4106897000000,
            asset: 6759546000000,
            interval: 12,
            date_end: new Date("2022-12-31"),
            company_id: 1,
        },
    })
    await prisma.financial.upsert({
        where: { id: 2 },
        update: {},
        create: {
            net_income: -351315000000,
            liability: 2461178000000,
            asset: 6417741000000,
            interval: 12,
            date_end: new Date("2021-12-31"),
            company_id: 1,
        },
    })
    await prisma.financial.upsert({
        where: { id: 3 },
        update: {},
        create: {
            net_income: -545744000000,
            liability: 1896939000000,
            asset: 6014057000000,
            interval: 12,
            date_end: new Date("2020-12-31"),
            company_id: 1,
        },
    })
    await prisma.financial.upsert({
        where: { id: 4 },
        update: {},
        create: {
            net_income: 1201312000000,
            liability: 1023568000000,
            asset: 5726343000000,
            interval: 12,
            date_end: new Date("2019-12-31"),
            company_id: 1,
        },
    })
    await prisma.financial.upsert({
        where: { id: 5 },
        update: {},
        create: {
            net_income: -24450000000,
            liability: 4646095000000,
            asset: 6673155000000,
            interval: 3,
            is_operating_income: true,
            is_audited: false,
            date_end: new Date("2023-03-31"),
            company_id: 1,
        },
    })
    await prisma.financial.upsert({
        where: { id: 6 },
        update: {},
        create: {
            net_income: 460384000000,
            liability: 4106897000000,
            asset: 6759546000000,
            interval: 12,
            date_end: new Date("2022-12-31"),
            company_id: 2,
        },
    })
    await prisma.financial.upsert({
        where: { id: 7 },
        update: {},
        create: {
            net_income: -351315000000,
            liability: 2461178000000,
            asset: 6417741000000,
            interval: 1,
            date_end: new Date("2021-12-31"),
            company_id: 2,
        },
    })
    await prisma.financial.upsert({
        where: { id: 8 },
        update: {},
        create: {
            net_income: 460384000000,
            liability: 4106897000000,
            asset: 6759546000000,
            interval: 12,
            date_end: new Date("2022-12-31"),
            company_id: 3,
        },
    })
    await prisma.financial.upsert({
        where: { id: 9 },
        update: {},
        create: {
            net_income: -351315000000,
            liability: 2461178000000,
            asset: 6417741000000,
            interval: 1,
            date_end: new Date("2021-12-31"),
            company_id: 3,
        },
    })
}

module.exports = { seedFinancials }