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
            net_income: -47891000000,
            liability: null,
            asset: null,
            interval: 3,
            is_audited: false,
            date_end: new Date("2022-03-31"),
            company_id: 1,
        },
    })

    await prisma.financial.upsert({
        where: { id: 7 },
        update: {},
        create: {
            net_income: 29245000,
            liability: 2999019000,
            asset: 3473316000,
            interval: 3,
            is_audited: true,
            date_end: new Date("2023-03-31"),
            company_id: 2,
        },
    })
    await prisma.financial.upsert({
        where: { id: 8 },
        update: {},
        create: {
            net_income: 22330000,
            liability: null,
            asset: null,
            interval: 3,
            is_audited: false,
            date_end: new Date("2022-03-31"),
            company_id: 2,
        },
    })
    await prisma.financial.upsert({
        where: { id: 9 },
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
        where: { id: 10 },
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
        where: { id: 11 },
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
        where: { id: 12 },
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
        where: { id: 13 },
        update: {},
        create: {
            net_income: 565828193,
            liability: null,
            asset: null,
            interval: 3,
            is_audited: false,
            date_end: new Date("2022-03-31"),
            company_id: 3,
        },
    })
    await prisma.financial.upsert({
        where: { id: 14 },
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
        where: { id: 15 },
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
        where: { id: 16 },
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
        where: { id: 17 },
        update: {},
        create: {
            net_income: 163360086,
            liability: 21342126463,
            asset: 36126118883,
            interval: 2,
            is_audited: true,
            date_end: new Date("2023-02-28"),
            company_id: 4,
        },
    })
    await prisma.financial.upsert({
        where: { id: 18 },
        update: {},
        create: {
            net_income: 97363978,
            liability: null,
            asset: null,
            interval: 2,
            is_audited: false,
            date_end: new Date("2022-02-28"),
            company_id: 4,
        },
    })
    await prisma.financial.upsert({
        where: { id: 19 },
        update: {},
        create: {
            net_income: 825880117,
            liability: 20179273483,
            asset: 34799905817,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 4,
        },
    })
    await prisma.financial.upsert({
        where: { id: 20 },
        update: {},
        create: {
            net_income: 122771910,
            liability: 20578935291,
            asset: 34361026548,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 4,
        },
    })

    await prisma.financial.upsert({
        where: { id: 21 },
        update: {},
        create: {
            net_income: 4276600935,
            liability: 25428861660,
            asset: 77795553564,
            interval: 3,
            is_audited: true,
            date_end: new Date("2023-03-31"),
            company_id: 5,
        },
    })
    await prisma.financial.upsert({
        where: { id: 22 },
        update: {},
        create: {
            net_income: 4652024068,
            liability: null,
            asset: null,
            interval: 3,
            is_audited: false,
            date_end: new Date("2022-03-31"),
            company_id: 5,
        },
    })
    await prisma.financial.upsert({
        where: { id: 23 },
        update: {},
        create: {
            net_income: 21899595818,
            liability: 28467551250,
            asset: 76601770689,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 5,
        },
    })
    await prisma.financial.upsert({
        where: { id: 24 },
        update: {},
        create: {
            net_income: 10197012520,
            liability: 24174972259,
            asset: 36082196755,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 5,
        },
    })
    await prisma.financial.upsert({
        where: { id: 25 },
        update: {},
        create: {
            net_income: -72151806,
            liability: 19587494704,
            asset: 21350412718,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 5,
        },
    })

    await prisma.financial.upsert({
        where: { id: 26 },
        update: {},
        create: {
            net_income: 19681165764,
            liability: 19087673754,
            asset: 70588409490,
            interval: 3,
            is_audited: true,
            date_end: new Date("2023-03-31"),
            company_id: 6,
        },
    })
    await prisma.financial.upsert({
        where: { id: 27 },
        update: {},
        create: {
            net_income: -890248220,
            liability: null,
            asset: null,
            interval: 3,
            is_audited: false,
            date_end: new Date("2022-03-31"),
            company_id: 6,
        },
    })
    await prisma.financial.upsert({
        where: { id: 28 },
        update: {},
        create: {
            net_income: 4549523941,
            liability: 67334507045,
            asset: 39243837039,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 6,
        },
    })
    await prisma.financial.upsert({
        where: { id: 29 },
        update: {},
        create: {
            net_income: -7165672246,
            liability: 89141723549,
            asset: 39302271646,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 6,
        },
    })
    await prisma.financial.upsert({
        where: { id: 30 },
        update: {},
        create: {
            net_income: -6834869379,
            liability: 79994072840,
            asset: 37393171178,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 6,
        },
    })
}

module.exports = { seedFinancials }