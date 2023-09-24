async function seedFinancials(prisma) {
    await prisma.financial.upsert({
        where: { id: 1 },
        update: {},
        create: {
            net_income: 460384000000,
            liability: 4106897000000,
            asset: 6759546000000,
            interval: 12,
            is_audited: true,
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
            is_audited: true,
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
            is_audited: true,
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
            is_audited: true,
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
            is_audited: false,
            date_end: new Date("2023-03-31"),
            company_id: 1,
        },
    })

    await prisma.financial.upsert({
        where: { id: 6 },
        update: {},
        create: {
            net_income: 29245000,
            liability: 2999019000,
            asset: 3473316000,
            interval: 3,
            is_audited: false,
            date_end: new Date("2023-03-31"),
            company_id: 2,
        },
    })
    await prisma.financial.upsert({
        where: { id: 7 },
        update: {},
        create: {
            net_income: 91126000,
            liability: 2958720000,
            asset: 3393722000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 2,
        },
    })
    await prisma.financial.upsert({
        where: { id: 8 },
        update: {},
        create: {
            net_income: 86097000,
            liability: 2459120000,
            asset: 3441902000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 2,
        },
    })
    await prisma.financial.upsert({
        where: { id: 9 },
        update: {},
        create: {
            net_income: 63705000,
            liability: 2490947000,
            asset: 3332098000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 2,
        },
    })
    await prisma.financial.upsert({
        where: { id: 10 },
        update: {},
        create: {
            net_income: 560957670,
            liability: 14437112292,
            asset: 58698489543,
            interval: 3,
            is_audited: true,
            date_end: new Date("2023-03-31"),
            company_id: 3,
        },
    })
    await prisma.financial.upsert({
        where: { id: 11 },
        update: {},
        create: {
            net_income: 1469641330,
            liability: 50018121764,
            asset: 52163141867,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 3,
        },
    })
    await prisma.financial.upsert({
        where: { id: 12 },
        update: {},
        create: {
            net_income: 2241310875,
            liability: 11606252639,
            asset: 18756164267,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 3,
        },
    })
    await prisma.financial.upsert({
        where: { id: 13 },
        update: {},
        create: {
            net_income: 1262853394,
            liability: 5391983849,
            asset: 10297816779,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 3,
        },
    })
    await prisma.financial.upsert({
        where: { id: 13 },
        update: {},
        create: {
            net_income: ,
            liability: ,
            asset: ,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 3,
        },
    })
}

module.exports = { seedFinancials }