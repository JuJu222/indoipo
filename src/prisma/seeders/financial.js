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
    await prisma.financial.upsert({
        where: { id: 59 },
        update: {},
        create: {
            net_income: 1208248812,
            liability: 1528189938,
            asset: 52583752249,
            interval: 4,
            is_audited: true,
            date_end: new Date("2023-04-30"),
            company_id: 13,
        },
    })
    await prisma.financial.upsert({
        where: { id: 60 },
        update: {},
        create: {
            net_income: 1408444142,
            liability: null,
            asset: null,
            interval: 4,
            is_audited: false,
            date_end: new Date("2022-04-30"),
            company_id: 13,
        },
    })
    await prisma.financial.upsert({
        where: { id: 61 },
        update: {},
        create: {
            net_income: 6274932909,
            liability: 7201334686,
            asset: 47149276099,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 13,
        },
    })
    await prisma.financial.upsert({
        where: { id: 62 },
        update: {},
        create: {
            net_income: 1673276266,
            liability: 13262041839,
            asset: 18938039303,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 13,
        },
    })
    await prisma.financial.upsert({
        where: { id: 63 },
        update: {},
        create: {
            net_income: 1651679734,
            liability: 21482458986,
            asset: 25485243364,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 13,
        },
    })
    await prisma.financial.upsert({
        where: { id: 64 },
        update: {},
        create: {
            net_income: 7820082753,
            liability: 231508464764,
            asset: 415412443911,
            interval: 4,
            is_audited: true,
            date_end: new Date("2023-04-30"),
            company_id: 14,
        },
    })
    await prisma.financial.upsert({
        where: { id: 65 },
        update: {},
        create: {
            net_income: 4724097646,
            liability: null,
            asset: null,
            interval: 4,
            is_audited: false,
            date_end: new Date("2022-04-30"),
            company_id: 14,
        },
    })
    await prisma.financial.upsert({
        where: { id: 66 },
        update: {},
        create: {
            net_income: 16577500654,
            liability: 210854630483,
            asset: 387553016337,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 14,
        },
    })
    await prisma.financial.upsert({
        where: { id: 67 },
        update: {},
        create: {
            net_income: 8125298808,
            liability: 189337621140,
            asset: 385053362680,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 14,
        },
    })
    await prisma.financial.upsert({
        where: { id: 68 },
        update: {},
        create: {
            net_income: 4628192504,
            liability: 317297972790,
            asset: 577044236257,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 14,
        },
    })
    await prisma.financial.upsert({
        where: { id: 69 },
        update: {},
        create: {
            net_income: 49672007236,
            liability: 893732058438,
            asset: 2176120078664,
            interval: 4,
            is_audited: true,
            date_end: new Date("2023-04-30"),
            company_id: 15,
        },
    })
    await prisma.financial.upsert({
        where: { id: 70 },
        update: {},
        create: {
            net_income: 42426286179,
            liability: null,
            asset: null,
            interval: 4,
            is_audited: false,
            date_end: new Date("2022-04-30"),
            company_id: 15,
        },
    })
    await prisma.financial.upsert({
        where: { id: 71 },
        update: {},
        create: {
            net_income: 398942031768,
            liability: 1094937676165,
            asset: 2332330507632,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 15,
        },
    })
    await prisma.financial.upsert({
        where: { id: 72 },
        update: {},
        create: {
            net_income: 326928154617,
            liability: 914676354246,
            asset: 1922139260082,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 15,
        },
    })
    await prisma.financial.upsert({
        where: { id: 73 },
        update: {},
        create: {
            net_income: 312810316486,
            liability: 809738516463,
            asset: 1880365313014,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 15,
        },
    })
    await prisma.financial.upsert({
        where: { id: 74 },
        update: {},
        create: {
            net_income: 4256000000,
            liability: 147279000000,
            asset: 267425000000,
            interval: 5,
            is_audited: true,
            date_end: new Date("2023-05-31"),
            company_id: 16,
        },
    })
    await prisma.financial.upsert({
        where: { id: 75 },
        update: {},
        create: {
            net_income: 2666000000,
            liability: null,
            asset: null,
            interval: 5,
            is_audited: true,
            date_end: new Date("2022-05-31"),
            company_id: 16,
        },
    })
    await prisma.financial.upsert({
        where: { id: 76 },
        update: {},
        create: {
            net_income: 12459000000,
            liability: 146865000000,
            asset: 261840000000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 16,
        },
    })
    await prisma.financial.upsert({
        where: { id: 77 },
        update: {},
        create: {
            net_income: 60580000000,
            liability: 146946000000,
            asset: 225775000000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 16,
        },
    })
    await prisma.financial.upsert({
        where: { id: 78 },
        update: {},
        create: {
            net_income: 1931000000,
            liability: 199614000000,
            asset: 217391000000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 16,
        },
    })
    await prisma.financial.upsert({
        where: { id: 79 },
        update: {},
        create: {
            net_income: -5917269225,
            liability: 55039966261,
            asset: 177093378114,
            interval: 5,
            is_audited: true,
            date_end: new Date("2023-05-31"),
            company_id: 17,
        },
    })
    await prisma.financial.upsert({
        where: { id: 80 },
        update: {},
        create: {
            net_income: 8766310655,
            liability: null,
            asset: null,
            interval: 5,
            is_audited: false,
            date_end: new Date("2022-05-31"),
            company_id: 17,
        },
    })
    await prisma.financial.upsert({
        where: { id: 81 },
        update: {},
        create: {
            net_income: 10226219024,
            liability: 84353287762,
            asset: 187796261619,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 17,
        },
    })
    await prisma.financial.upsert({
        where: { id: 82 },
        update: {},
        create: {
            net_income: 26426688263,
            liability: 122821714088,
            asset: 216078571773,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 17,
        },
    })
    await prisma.financial.upsert({
        where: { id: 83 },
        update: {},
        create: {
            net_income: 28823579996,
            liability: 154125075347,
            asset: 220931954148,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 17,
        },
    })
    await prisma.financial.upsert({
        where: { id: 84 },
        update: {},
        create: {
            net_income: 10748534743,
            liability: 37090185004,
            asset: 382752444311,
            interval: 6,
            is_audited: true,
            date_end: new Date("2023-06-30"),
            company_id: 18,
        },
    })
    await prisma.financial.upsert({
        where: { id: 85 },
        update: {},
        create: {
            net_income: 6779037921,
            liability: null,
            asset: null,
            interval: 6,
            is_audited: false,
            date_end: new Date("2022-06-30"),
            company_id: 18,
        },
    })
    await prisma.financial.upsert({
        where: { id: 86 },
        update: {},
        create: {
            net_income: 17698447800,
            liability: 32026295315,
            asset: 366941854480,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 18,
        },
    })
    await prisma.financial.upsert({
        where: { id: 87 },
        update: {},
        create: {
            net_income: 10087668052,
            liability: 29469532348,
            asset: 99024503124,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 18,
        },
    })
    await prisma.financial.upsert({
        where: { id: 88 },
        update: {},
        create: {
            net_income: 11047764139,
            liability: 43309833206,
            asset: 102795466076,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 18,
        },
    })
    await prisma.financial.upsert({
        where: { id: 89 },
        update: {},
        create: {
            net_income: 402720082,
            liability: 44486491697,
            asset: 114977197199,
            interval: 6,
            is_audited: true,
            date_end: new Date("2023-06-30"),
            company_id: 19,
        },
    })
    await prisma.financial.upsert({
        where: { id: 90 },
        update: {},
        create: {
            net_income: -4278517891,
            liability: null,
            asset: null,
            interval: 6,
            is_audited: false,
            date_end: new Date("2022-06-30"),
            company_id: 19,
        },
    })
    await prisma.financial.upsert({
        where: { id: 91 },
        update: {},
        create: {
            net_income: -10626160057,
            liability: 32813389475,
            asset: 102882880449,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 19,
        },
    })
    await prisma.financial.upsert({
        where: { id: 92 },
        update: {},
        create: {
            net_income: 2940571177,
            liability: 21029627148,
            asset: 79859090765,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 19,
        },
    })
    await prisma.financial.upsert({
        where: { id: 93 },
        update: {},
        create: {
            net_income: 4269142499,
            liability: 112144635908,
            asset: 188553586928,
            interval: 6,
            is_audited: true,
            date_end: new Date("2023-06-30"),
            company_id: 20,
        },
    })
    await prisma.financial.upsert({
        where: { id: 94 },
        update: {},
        create: {
            net_income: 5506174496,
            liability: null,
            asset: null,
            interval: 6,
            is_audited: false,
            date_end: new Date("2022-06-30"),
            company_id: 20,
        },
    })
    await prisma.financial.upsert({
        where: { id: 95 },
        update: {},
        create: {
            net_income: 11331090112,
            liability: 102275450941,
            asset: 179775354436,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 20,
        },
    })
    await prisma.financial.upsert({
        where: { id: 96 },
        update: {},
        create: {
            net_income: 2990564337,
            liability: 90990894329,
            asset: 183227430507,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 20,
        },
    })
    await prisma.financial.upsert({
        where: { id: 97 },
        update: {},
        create: {
            net_income: -3770778792,
            liability: 78047786585,
            asset: 166922087758,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 20,
        },
    })
    await prisma.financial.upsert({
        where: { id: 98 },
        update: {},
        create: {
            net_income: 40546970835,
            liability: 146680524178,
            asset: 265717483617,
            interval: 6,
            is_audited: true,
            date_end: new Date("2023-06-30"),
            company_id: 21,
        },
    })
    await prisma.financial.upsert({
        where: { id: 99 },
        update: {},
        create: {
            net_income: 78128993184,
            liability: null,
            asset: null,
            interval: 6,
            is_audited: false,
            date_end: new Date("2022-06-30"),
            company_id: 21,
        },
    })
    await prisma.financial.upsert({
        where: { id: 100 },
        update: {},
        create: {
            net_income: 108865233355,
            liability: 195351009902,
            asset: 283452899233,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 21,
        },
    })
    await prisma.financial.upsert({
        where: { id: 101 },
        update: {},
        create: {
            net_income: 47490967716,
            liability: 119566417375,
            asset: 168995250531,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 21,
        },
    })
    await prisma.financial.upsert({
        where: { id: 102 },
        update: {},
        create: {
            net_income: -13811241439,
            liability: 82942115917,
            asset: 87109588820,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 21,
        },
    })
    await prisma.financial.upsert({
        where: { id: 103 },
        update: {},
        create: {
            net_income: 2220346422,
            liability: 63448283667,
            asset: 86055664583,
            interval: 6,
            is_audited: true,
            date_end: new Date("2023-06-30"),
            company_id: 22,
        },
    })
    await prisma.financial.upsert({
        where: { id: 104 },
        update: {},
        create: {
            net_income: 1342733502,
            liability: null,
            asset: null,
            interval: 6,
            is_audited: false,
            date_end: new Date("2022-06-30"),
            company_id: 22,
        },
    })
    await prisma.financial.upsert({
        where: { id: 105 },
        update: {},
        create: {
            net_income: 5967241021,
            liability: 59595160109,
            asset: 73990273824,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 22,
        },
    })
    await prisma.financial.upsert({
        where: { id: 106 },
        update: {},
        create: {
            net_income: 4975457055,
            liability: 48842378266,
            asset: 57154204172,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 22,
        },
    })
    await prisma.financial.upsert({
        where: { id: 107 },
        update: {},
        create: {
            net_income: 3598097396,
            liability: 58563085195,
            asset: 61906693859,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 22,
        },
    })
    await prisma.financial.upsert({
        where: { id: 108 },
        update: {},
        create: {
            net_income: 4158520192,
            liability: 48295012099,
            asset: 103972982935,
            interval: 6,
            is_audited: true,
            date_end: new Date("2023-06-30"),
            company_id: 23,
        },
    })
    await prisma.financial.upsert({
        where: { id: 109 },
        update: {},
        create: {
            net_income: 1720418913,
            liability: null,
            asset: null,
            interval: 6,
            is_audited: false,
            date_end: new Date("2022-06-30"),
            company_id: 23,
        },
    })
    await prisma.financial.upsert({
        where: { id: 110 },
        update: {},
        create: {
            net_income: 2474585674,
            liability: 32626759970,
            asset: 84257925986,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 23,
        },
    })
    await prisma.financial.upsert({
        where: { id: 111 },
        update: {},
        create: {
            net_income: 2114260463,
            liability: 31985406579,
            asset: 81253027837,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 23,
        },
    })
    await prisma.financial.upsert({
        where: { id: 112 },
        update: {},
        create: {
            net_income: 2939728553,
            liability: 37338692998,
            asset: 53329815848,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 23,
        },
    })
    await prisma.financial.upsert({
        where: { id: 113 },
        update: {},
        create: {
            net_income: 3554041,
            liability: 27540658,
            asset: 91597961,
            interval: 6,
            is_audited: true,
            date_end: new Date("2023-06-30"),
            company_id: 24,
        },
    })
    await prisma.financial.upsert({
        where: { id: 114 },
        update: {},
        create: {
            net_income: 2369833,
            liability: null,
            asset: null,
            interval: 6,
            is_audited: false,
            date_end: new Date("2022-06-30"),
            company_id: 24,
        },
    })
    await prisma.financial.upsert({
        where: { id: 115 },
        update: {},
        create: {
            net_income: 4778525,
            liability: 30900412,
            asset: 99678303,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 24,
        },
    })
    await prisma.financial.upsert({
        where: { id: 116 },
        update: {},
        create: {
            net_income: 9172294,
            liability: 41620586,
            asset: 111224237,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 24,
        },
    })
    await prisma.financial.upsert({
        where: { id: 117 },
        update: {},
        create: {
            net_income: 14883141,
            liability: 36070919,
            asset: 97886670,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 24,
        },
    })
    await prisma.financial.upsert({
        where: { id: 118 },
        update: {},
        create: {
            net_income: 1430965988,
            liability: 21025042960,
            asset: 73950057594,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 25,
        },
    })
    await prisma.financial.upsert({
        where: { id: 119 },
        update: {},
        create: {
            net_income: -70996801,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 25,
        },
    })
    await prisma.financial.upsert({
        where: { id: 120 },
        update: {},
        create: {
            net_income: 1361504405,
            liability: 35212697591,
            asset: 34505860921,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 25,
        },
    })
    await prisma.financial.upsert({
        where: { id: 121 },
        update: {},
        create: {
            net_income: -346286376,
            liability: 33305951645,
            asset: 31179185920,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 25,
        },
    })
    await prisma.financial.upsert({
        where: { id: 122 },
        update: {},
        create: {
            net_income: -864003455,
            liability: 29454957116,
            asset: 27770765561,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 25,
        },
    })
    await prisma.financial.upsert({
        where: { id: 123 },
        update: {},
        create: {
            net_income: 5555175845,
            liability: 129355861719,
            asset: 296714062702,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 26,
        },
    })
    await prisma.financial.upsert({
        where: { id: 124 },
        update: {},
        create: {
            net_income: 3862505332,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 26,
        },
    })
    await prisma.financial.upsert({
        where: { id: 125 },
        update: {},
        create: {
            net_income: 8313823057,
            liability: 47514887385,
            asset: 212284695437,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 26,
        },
    })
    await prisma.financial.upsert({
        where: { id: 126 },
        update: {},
        create: {
            net_income: 370343779,
            liability: 113192162711,
            asset: 133548056918,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 26,
        },
    })
    await prisma.financial.upsert({
        where: { id: 127 },
        update: {},
        create: {
            net_income: -146192988,
            liability: 78892285678,
            asset: 83705471657,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 26,
        },
    })
    await prisma.financial.upsert({
        where: { id: 128 },
        update: {},
        create: {
            net_income: 46003958181,
            liability: 617469488983,
            asset: 832597453183,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 27,
        },
    })
    await prisma.financial.upsert({
        where: { id: 129 },
        update: {},
        create: {
            net_income: 21475815077,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 27,
        },
    })
    await prisma.financial.upsert({
        where: { id: 130 },
        update: {},
        create: {
            net_income: 42087750707,
            liability: 594667315162,
            asset: 762962183292,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 27,
        },
    })
    await prisma.financial.upsert({
        where: { id: 131 },
        update: {},
        create: {
            net_income: 41010348369,
            liability: 583369392797,
            asset: 745554747573,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 27,
        },
    })
    await prisma.financial.upsert({
        where: { id: 132 },
        update: {},
        create: {
            net_income: 47113400529,
            liability: 478627247031,
            asset: 599351475499,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 27,
        },
    })
    await prisma.financial.upsert({
        where: { id: 133 },
        update: {},
        create: {
            net_income: 1701941000,
            liability: 49635805000,
            asset: 87673817000,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 28,
        },
    })
    await prisma.financial.upsert({
        where: { id: 134 },
        update: {},
        create: {
            net_income: 4258554000,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 28,
        },
    })
    await prisma.financial.upsert({
        where: { id: 135 },
        update: {},
        create: {
            net_income: 4603253000,
            liability: 38146180000,
            asset: 43229580000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 28,
        },
    })
    await prisma.financial.upsert({
        where: { id: 136 },
        update: {},
        create: {
            net_income: 13191070000,
            liability: 31742294000,
            asset: 32103862000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 28,
        },
    })
    await prisma.financial.upsert({
        where: { id: 137 },
        update: {},
        create: {
            net_income: 2187010000,
            liability: 28538963000,
            asset: 31946954000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 28,
        },
    })
    await prisma.financial.upsert({
        where: { id: 138 },
        update: {},
        create: {
            net_income: 163729190000,
            liability: 1240851005000,
            asset: 1855157640000,
            interval: 8,
            is_audited: true,
            date_end: new Date("2023-08-31"),
            company_id: 29,
        },
    })
    await prisma.financial.upsert({
        where: { id: 139 },
        update: {},
        create: {
            net_income: 79511977000,
            liability: null,
            asset: null,
            interval: 8,
            is_audited: false,
            date_end: new Date("2022-08-31"),
            company_id: 29,
        },
    })
    await prisma.financial.upsert({
        where: { id: 140 },
        update: {},
        create: {
            net_income: 163579205000,
            liability: 1056976077000,
            asset: 1404650176000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 29,
        },
    })
    await prisma.financial.upsert({
        where: { id: 141 },
        update: {},
        create: {
            net_income: 189109229000,
            liability: 1020148427000,
            asset: 1216388955000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 29,
        },
    })
    await prisma.financial.upsert({
        where: { id: 142 },
        update: {},
        create: {
            net_income: -48072919000,
            liability: 970802343000,
            asset: 978405812000,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 29,
        },
    })
    await prisma.financial.upsert({
        where: { id: 143 },
        update: {},
        create: {
            net_income: 12065548843,
            liability: 15502541736,
            asset: 55369171422,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 30,
        },
    })
    await prisma.financial.upsert({
        where: { id: 144 },
        update: {},
        create: {
            net_income: 7934002277,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 30,
        },
    })
    await prisma.financial.upsert({
        where: { id: 145 },
        update: {},
        create: {
            net_income: 14340349029,
            liability: 10473161069,
            asset: 28381432916,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 30,
        },
    })
    await prisma.financial.upsert({
        where: { id: 146 },
        update: {},
        create: {
            net_income: 3526987716,
            liability: 5538442822,
            asset: 9113086650,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 30,
        },
    })
    await prisma.financial.upsert({
        where: { id: 147 },
        update: {},
        create: {
            net_income: 582445686,
            liability: 6112727627,
            asset: 6160825320,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 30,
        },
    })
    await prisma.financial.upsert({
        where: { id: 148 },
        update: {},
        create: {
            net_income: 17158994618,
            liability: 110547735439,
            asset: 259699020870,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 31,
        },
    })
    await prisma.financial.upsert({
        where: { id: 149 },
        update: {},
        create: {
            net_income: 6812434197,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 31,
        },
    })
    await prisma.financial.upsert({
        where: { id: 150 },
        update: {},
        create: {
            net_income: 1654741665,
            liability: 105774878718,
            asset: 237946928859,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 31,
        },
    })
    await prisma.financial.upsert({
        where: { id: 151 },
        update: {},
        create: {
            net_income: 15019538975,
            liability: 119021110680,
            asset: 258295431730,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 31,
        },
    })
    await prisma.financial.upsert({
        where: { id: 152 },
        update: {},
        create: {
            net_income: 1079059991,
            liability: 137324188498,
            asset: 260991236280,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 31,
        },
    })
    await prisma.financial.upsert({
        where: { id: 153 },
        update: {},
        create: {
            net_income: 2837036532,
            liability: 18626257449,
            asset: 50287076489,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 32,
        },
    })
    await prisma.financial.upsert({
        where: { id: 154 },
        update: {},
        create: {
            net_income: 3084322754,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: true,
            date_end: new Date("2022-07-31"),
            company_id: 32,
        },
    })
    await prisma.financial.upsert({
        where: { id: 155 },
        update: {},
        create: {
            net_income: 9556471112,
            liability: 20562523599,
            asset: 33634569232,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 32,
        },
    })
    await prisma.financial.upsert({
        where: { id: 156 },
        update: {},
        create: {
            net_income: 618300085,
            liability: 8044722525,
            asset: 11545856128,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 32,
        },
    })
    await prisma.financial.upsert({
        where: { id: 157 },
        update: {},
        create: {
            net_income: 8444769719,
            liability: 61882288446,
            asset: 139829320073,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 33,
        },
    })
    await prisma.financial.upsert({
        where: { id: 158 },
        update: {},
        create: {
            net_income: 3948540498,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 33,
        },
    })
    await prisma.financial.upsert({
        where: { id: 159 },
        update: {},
        create: {
            net_income: 15120977414,
            liability: 56608402262,
            asset: 125585820605,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 33,
        },
    })
    await prisma.financial.upsert({
        where: { id: 160 },
        update: {},
        create: {
            net_income: 10095176833,
            liability: 57808978600,
            asset: 111755613139,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 33,
        },
    })
    await prisma.financial.upsert({
        where: { id: 161 },
        update: {},
        create: {
            net_income: 10915566687,
            liability: 55668061867,
            asset: 99160290758,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 33,
        },
    })
    await prisma.financial.upsert({
        where: { id: 162 },
        update: {},
        create: {
            net_income: 19642378875,
            liability: 123107152847,
            asset: 293600438894,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 34,
        },
    })
    await prisma.financial.upsert({
        where: { id: 163 },
        update: {},
        create: {
            net_income: 6246531646,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 34,
        },
    })
    await prisma.financial.upsert({
        where: { id: 164 },
        update: {},
        create: {
            net_income: 22478457620,
            liability: 161924327784,
            asset: 286784476993,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 34,
        },
    })
    await prisma.financial.upsert({
        where: { id: 165 },
        update: {},
        create: {
            net_income: 4027306808,
            liability: 145389181728,
            asset: 248256939416,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 34,
        },
    })
    await prisma.financial.upsert({
        where: { id: 166 },
        update: {},
        create: {
            net_income: -8058792695,
            liability: 121169446463,
            asset: 219024714980,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 34,
        },
    })
    await prisma.financial.upsert({
        where: { id: 167 },
        update: {},
        create: {
            net_income: 8764077854,
            liability: 14973043982,
            asset: 77719719033,
            interval: 7,
            is_audited: true,
            date_end: new Date("2023-07-31"),
            company_id: 35,
        },
    })
    await prisma.financial.upsert({
        where: { id: 168 },
        update: {},
        create: {
            net_income: 8602703702,
            liability: null,
            asset: null,
            interval: 7,
            is_audited: false,
            date_end: new Date("2022-07-31"),
            company_id: 35,
        },
    })
    await prisma.financial.upsert({
        where: { id: 169 },
        update: {},
        create: {
            net_income: 14949684001,
            liability: 15845663670,
            asset: 69680790192,
            interval: 12,
            is_audited: true,
            date_end: new Date("2022-12-31"),
            company_id: 35,
        },
    })
    await prisma.financial.upsert({
        where: { id: 170 },
        update: {},
        create: {
            net_income: 8741630436,
            liability: 10386218603,
            asset: 29156445486,
            interval: 12,
            is_audited: true,
            date_end: new Date("2021-12-31"),
            company_id: 35,
        },
    })
    await prisma.financial.upsert({
        where: { id: 171 },
        update: {},
        create: {
            net_income: 4726267727,
            liability: 5813155328,
            asset: 15777002183,
            interval: 12,
            is_audited: true,
            date_end: new Date("2020-12-31"),
            company_id: 35,
        },
    })
}

module.exports = { seedFinancials }