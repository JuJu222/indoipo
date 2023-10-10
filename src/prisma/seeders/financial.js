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

    await prisma.financial.upsert({
        where: { id: 31 },
        update: {},
        create: {
            net_income: 11871688903,
            liability: 29744646475,
            asset: 107174464037,
            interval: 3,
            is_audited: true,
            date_end: new Date("2023-03-31"),
            company_id: 7,
        },
    })
    await prisma.financial.upsert({
        where: { id: 32 },
        update: {},
        create: {
            net_income: 7990033001,
            liability: null,
            asset: null,
            interval: 3,
            is_audited: false,
            date_end: new Date("2022-03-31"),
            company_id: 7,
        },
    })
    await prisma.financial.upsert({
        where: { id: 33 },
        update: {},
        create: {
            net_income: 19389883664,
            liability: 16131521548,
            asset: 81533982698,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 7,
        },
    })
    await prisma.financial.upsert({
        where: { id: 34 },
        update: {},
        create: {
            net_income: 11064812782,
            liability: 28956968166,
            asset: 75010279305,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 7,
        },
    })
    await prisma.financial.upsert({
        where: { id: 35 },
        update: {},
        create: {
            net_income: -1427385329,
            liability: 10949699295,
            asset: 45940766046,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 7,
        },
    })
    await prisma.financial.upsert({
        where: { id: 36 },
        update: {},
        create: {
            net_income: 490742929,
            liability: 10881827503,
            asset: 36753905768,
            interval: 3,
            is_audited: true,
            date_end: new Date("2023-03-31"),
            company_id: 8,
        },
    })
    await prisma.financial.upsert({
        where: { id: 37 },
        update: {},
        create: {
            net_income: 669594578,
            liability: null,
            asset: null,
            interval: 3,
            is_audited: false,
            date_end: new Date("2022-03-31"),
            company_id: 8,
        },
    })
    await prisma.financial.upsert({
        where: { id: 38 },
        update: {},
        create: {
            net_income: 1926301880,
            liability: 16425083072,
            asset: 36807470716,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 8,
        },
    })
    await prisma.financial.upsert({
        where: { id: 39 },
        update: {},
        create: {
            net_income: 1654638775,
            liability: 25535869977,
            asset: 35240707473,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 8,
        },
    })

    await prisma.financial.upsert({
        where: { id: 40 },
        update: {},
        create: {
            net_income: 5992302249,
            liability: 22019369145,
            asset: 76025046765,
            interval: 3,
            is_audited: true,
            date_end: new Date("2023-03-31"),
            company_id: 9,
        },
    })
    await prisma.financial.upsert({
        where: { id: 41 },
        update: {},
        create: {
            net_income: 5395425231,
            liability: null,
            asset: null,
            interval: 3,
            is_audited: false,
            date_end: new Date("2022-03-31"),
            company_id: 9,
        },
    })
    await prisma.financial.upsert({
        where: { id: 42 },
        update: {},
        create: {
            net_income: 27669000185,
            liability: 19043277939,
            asset: 73063082134,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 9,
        },
    })
    await prisma.financial.upsert({
        where: { id: 43 },
        update: {},
        create: {
            net_income: 14986809045,
            liability: 17308149098,
            asset: 91603531697,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 9,
        },
    })
    await prisma.financial.upsert({
        where: { id: 44 },
        update: {},
        create: {
            net_income: 9683585042,
            liability: 11307621240,
            asset: 70262986722,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 9,
        },
    })
    await prisma.financial.upsert({
        where: { id: 45 },
        update: {},
        create: {
            net_income: 1603608081,
            liability: 1122288441,
            asset: 15186124530,
            interval: 4,
            is_audited: true,
            date_end: new Date("2023-04-30"),
            company_id: 10,
        },
    })
    await prisma.financial.upsert({
        where: { id: 46 },
        update: {},
        create: {
            net_income: -965946674,
            liability: 245827287,
            asset: 2383823697,
            interval: 4,
            is_audited: false,
            date_end: new Date("2022-04-30"),
            company_id: 10,
        },
    })
    await prisma.financial.upsert({
        where: { id: 47 },
        update: {},
        create: {
            net_income: -16531787,
            liability: 809192523,
            asset: 7205469247,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 10,
        },
    })
    await prisma.financial.upsert({
        where: { id: 48 },
        update: {},
        create: {
            net_income: 86490822,
            liability: 478815588,
            asset: 3421758672,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 10,
        },
    })
    await prisma.financial.upsert({
        where: { id: 49 },
        update: {},
        create: {
            net_income: -5190266540,
            liability: 310757940908,
            asset: 696500300607,
            interval: 2,
            is_audited: true,
            date_end: new Date("2023-02-28"),
            company_id: 11,
        },
    })
    await prisma.financial.upsert({
        where: { id: 50 },
        update: {},
        create: {
            net_income: -15852141665,
            liability: null,
            asset: null,
            interval: 2,
            is_audited: false,
            date_end: new Date("2022-02-28"),
            company_id: 11,
        },
    })
    await prisma.financial.upsert({
        where: { id: 51 },
        update: {},
        create: {
            net_income: 59655776493,
            liability: 369201974729,
            asset: 760075313472,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 11,
        },
    })
    await prisma.financial.upsert({
        where: { id: 52 },
        update: {},
        create: {
            net_income: -34467724894,
            liability: 575153846223,
            asset: 634579577618,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 11,
        },
    })
    await prisma.financial.upsert({
        where: { id: 53 },
        update: {},
        create: {
            net_income: -50474077573,
            liability: 513898958962,
            asset: 626857735418,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 11,
        },
    })
    await prisma.financial.upsert({
        where: { id: 54 },
        update: {},
        create: {
            net_income: -625398563,
            liability: 3986559229,
            asset: 96925615357,
            interval: 2,
            is_audited: true,
            date_end: new Date("2023-02-28"),
            company_id: 12,
        },
    })
    await prisma.financial.upsert({
        where: { id: 55 },
        update: {},
        create: {
            net_income: -2391145549,
            liability: null,
            asset: null,
            interval: 2,
            is_audited: false,
            date_end: new Date("2022-02-28"),
            company_id: 12,
        },
    })
    await prisma.financial.upsert({
        where: { id: 56 },
        update: {},
        create: {
            net_income: -7354587893,
            liability: 53427591950,
            asset: 90988939240,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 12,
        },
    })
    await prisma.financial.upsert({
        where: { id: 57 },
        update: {},
        create: {
            net_income: 2740330704,
            liability: 37039605027,
            asset: 81966583165,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 12,
        },
    })
    await prisma.financial.upsert({
        where: { id: 58 },
        update: {},
        create: {
            net_income: -3883060182,
            liability: 14177074586,
            asset: 56367813679,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 12,
        },
    })
}

module.exports = { seedFinancials }