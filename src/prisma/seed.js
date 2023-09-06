const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seedSectors() {
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
}

async function seedSubSectors() {
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

async function seedUnderwriters() {
    await prisma.underwriter.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'XA - NH KORINDO SEKURITAS INDONESIA',
        },
    })
}

async function seedCompanies() {
    await prisma.company.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'PT Nusantara Sejahtera Raya Tbk',
            description: 'Perseroan dan Entitas Anak (selanjutnya disebut "Cinema XXI") berkedudukan di Jakarta Pusat, didirikan pada tahun 1988 berdasarkan peraturan perundang-undangan yang berlaku di Negara Republik Indonesia, dengan nama PT Subentra Nusantara berdasarkan Akta Pendirian No. 67 tanggal 7 Juni 1988 yang ditandai dengan pembukaan Studio 21, multipleks modern pertama di Indonesia. Perseroan merupakan perusahaan yang fokus dalam pemutaran film dan penyediaan F&B untuk memberikan pengalaman hiburan yang berkualitas tinggi.',
            ticker: 'CNMA',
            img: 'CNMA.png',
            address: 'Jl. KH Wahid Hasyim No.96-A Jakarta Pusat 10340 ',
            website: 'https://www.cinema21.co.id',
            prospectus_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=',
            prospectus_summary_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=summary',
            additional_information_url: 'https://www.e-ipo.co.id/id/pipeline/get-additional-info?id=246',
            low_price: 270,
            high_price: 288,
            offered_shares: 8335000000,
            outstanding_shares: 83345000000,
            date_awal_start: new Date("2023-07-16"),
            date_awal_end: new Date("2023-07-18"),
            date_umum_start: new Date("2023-07-19"),
            date_umum_end: new Date("2023-07-20"),
            date_penjatahan: new Date("2023-07-21"),
            date_distribusi: new Date("2023-07-22"),
            date_ipo: new Date("2023-07-23"),
            subsector_id: 1,
        },
    })
    await prisma.company.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'PT Nusantara Sejahtera Raya Tbk',
            description: 'Perseroan dan Entitas Anak (selanjutnya disebut "Cinema XXI") berkedudukan di Jakarta Pusat, didirikan pada tahun 1988 berdasarkan peraturan perundang-undangan yang berlaku di Negara Republik Indonesia, dengan nama PT Subentra Nusantara berdasarkan Akta Pendirian No. 67 tanggal 7 Juni 1988 yang ditandai dengan pembukaan Studio 21, multipleks modern pertama di Indonesia. Perseroan merupakan perusahaan yang fokus dalam pemutaran film dan penyediaan F&B untuk memberikan pengalaman hiburan yang berkualitas tinggi.',
            ticker: 'CNMB',
            img: 'CNMA.png',
            address: 'Jl. KH Wahid Hasyim No.96-A Jakarta Pusat 10340 ',
            website: 'https://www.cinema21.co.id',
            prospectus_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=',
            prospectus_summary_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=summary',
            additional_information_url: 'https://www.e-ipo.co.id/id/pipeline/get-additional-info?id=246',
            final_price: 270,
            offered_shares: 8335000000,
            outstanding_shares: 83345000000,
            date_awal_start: new Date("2023-07-16"),
            date_awal_end: new Date("2023-07-18"),
            date_umum_start: new Date("2023-07-19"),
            date_umum_end: new Date("2023-07-20"),
            date_penjatahan: new Date("2023-07-21"),
            date_distribusi: new Date("2023-07-22"),
            date_ipo: new Date("2023-07-23"),
            subsector_id: 1,
        },
    })
    await prisma.company.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'PT Nusantara Sejahtera Raya Tbk',
            description: 'Perseroan dan Entitas Anak (selanjutnya disebut "Cinema XXI") berkedudukan di Jakarta Pusat, didirikan pada tahun 1988 berdasarkan peraturan perundang-undangan yang berlaku di Negara Republik Indonesia, dengan nama PT Subentra Nusantara berdasarkan Akta Pendirian No. 67 tanggal 7 Juni 1988 yang ditandai dengan pembukaan Studio 21, multipleks modern pertama di Indonesia. Perseroan merupakan perusahaan yang fokus dalam pemutaran film dan penyediaan F&B untuk memberikan pengalaman hiburan yang berkualitas tinggi.',
            ticker: 'CNMC',
            img: 'CNMA.png',
            address: 'Jl. KH Wahid Hasyim No.96-A Jakarta Pusat 10340 ',
            website: 'https://www.cinema21.co.id',
            prospectus_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=',
            prospectus_summary_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=summary',
            additional_information_url: 'https://www.e-ipo.co.id/id/pipeline/get-additional-info?id=246',
            low_price: 270,
            high_price: 288,
            offered_shares: 8335000000,
            outstanding_shares: 83345000000,
            date_awal_start: new Date("2023-07-16"),
            date_awal_end: new Date("2023-07-18"),
            date_umum_start: new Date("2023-07-19"),
            date_umum_end: new Date("2023-07-20"),
            date_penjatahan: new Date("2023-07-21"),
            date_distribusi: new Date("2023-07-22"),
            date_ipo: new Date("2023-07-23"),
            subsector_id: 1,
        },
    })
    await prisma.company.upsert({
        where: { id: 4 },
        update: {},
        create: {
            name: 'PT Nusantara Sejahtera Raya Tbk',
            description: 'Perseroan dan Entitas Anak (selanjutnya disebut "Cinema XXI") berkedudukan di Jakarta Pusat, didirikan pada tahun 1988 berdasarkan peraturan perundang-undangan yang berlaku di Negara Republik Indonesia, dengan nama PT Subentra Nusantara berdasarkan Akta Pendirian No. 67 tanggal 7 Juni 1988 yang ditandai dengan pembukaan Studio 21, multipleks modern pertama di Indonesia. Perseroan merupakan perusahaan yang fokus dalam pemutaran film dan penyediaan F&B untuk memberikan pengalaman hiburan yang berkualitas tinggi.',
            ticker: 'CNMD',
            img: 'CNMA.png',
            address: 'Jl. KH Wahid Hasyim No.96-A Jakarta Pusat 10340 ',
            website: 'https://www.cinema21.co.id',
            prospectus_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=',
            prospectus_summary_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=summary',
            additional_information_url: 'https://www.e-ipo.co.id/id/pipeline/get-additional-info?id=246',
            low_price: 270,
            high_price: 288,
            offered_shares: 8335000000,
            outstanding_shares: 83345000000,
            date_awal_start: new Date("2023-07-16"),
            date_awal_end: new Date("2023-07-18"),
            date_umum_start: new Date("2023-07-19"),
            date_umum_end: new Date("2023-07-20"),
            date_penjatahan: new Date("2023-07-21"),
            date_distribusi: new Date("2023-07-22"),
            date_ipo: new Date("2023-07-23"),
            subsector_id: 1,
        },
    })
}

async function seedFinancials() {
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
    await prisma.financial.upsert({
        where: { id: 10 },
        update: {},
        create: {
            net_income: 460384000000,
            liability: 4106897000000,
            asset: 6759546000000,
            interval: 12,
            date_end: new Date("2022-12-31"),
            company_id: 4,
        },
    })
    await prisma.financial.upsert({
        where: { id: 11 },
        update: {},
        create: {
            net_income: -351315000000,
            liability: 2461178000000,
            asset: 6417741000000,
            interval: 1,
            date_end: new Date("2021-12-31"),
            company_id: 4,
        },
    })
}

async function main() {
    await seedSectors()
    await seedSubSectors()
    await seedUnderwriters()
    await seedCompanies()
    await seedFinancials()
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
