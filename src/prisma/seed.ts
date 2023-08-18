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
            low_price: 100,
            high_price: 110,
            offered_shares: 2500000000,
            total_shares: 2500000000,
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
    await prisma.company.upsert({
        where: { id: 1 },
        update: {},
        create: {
            net_profit: 1485562728,
            debt: 37456058142,
            equity: 51794969507,
        },
    })
}

async function main() {
    await seedSectors()
    await seedSubSectors()
    await seedUnderwriters()
    await seedCompanies()
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
