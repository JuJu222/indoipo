const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.sector.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Industrials',
        },
    })

    await prisma.subsector.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Business Support Services',
            sector_id: 1,
        },
    })

    await prisma.underwriter.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'XA - NH KORINDO SEKURITAS INDONESIA',
        },
    })

    await prisma.company.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'PT Multi Makmur Lemindo Tbk',
            description: 'PT Carsurin Tbk (“Perseroan”) adalah perusahaan Inspeksi, Pengujian, Sertifikasi dan Verifikasi swasta terkemuka di Indonesia. Perseroan didirikan dengan nama PT Carsurin Limited (dahulu) berdasarkan Akta Pendirian Perseroan Terbatas Perseroan No. 15 tanggal 14 Desember 1968 dan diperbaiki dengan Naskah No. 2 tanggal 2 Desember 1969 yang dibuat dihadapan Than Thong Kie ., Notaris di Kota Jakarta.',
            ticker: 'PIPA',
            img: 'logo1.png',
            address: 'SOHO CAPITAL, 28th Floor Jl. Letjen S. Parman Kav.28, Grogol Petamburan, Jakarta Barat',
            website: 'https://www.carsurin.com',
            net_profit: 1485562728,
            shares: 2500000000,
            total_shares: 2500000000,
            debt: 37456058142,
            equity: 51794969507,
            low_price: 100,
            high_price: 110,
            date_awal_start: new Date("2023-07-16"),
            date_awal_end: new Date("2023-07-18"),
            date_umum_start: new Date("2023-07-19"),
            date_umum_end: new Date("2023-07-20"),
            date_penjatahan: new Date("2023-07-21"),
            date_distribusi: new Date("2023-07-22"),
            date_ipo: new Date("2023-07-23"),
            subsector_id: 1,
            underwriter_id: 1,
        },
    })
    await prisma.company.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'PT Multi Makmur Lemindo Tbk',
            description: 'PT Carsurin Tbk (“Perseroan”) adalah perusahaan Inspeksi, Pengujian, Sertifikasi dan Verifikasi swasta terkemuka di Indonesia. Perseroan didirikan dengan nama PT Carsurin Limited (dahulu) berdasarkan Akta Pendirian Perseroan Terbatas Perseroan No. 15 tanggal 14 Desember 1968 dan diperbaiki dengan Naskah No. 2 tanggal 2 Desember 1969 yang dibuat dihadapan Than Thong Kie ., Notaris di Kota Jakarta.',
            ticker: 'PIPA',
            img: 'logo1.png',
            address: 'SOHO CAPITAL, 28th Floor Jl. Letjen S. Parman Kav.28, Grogol Petamburan, Jakarta Barat',
            website: 'https://www.carsurin.com',
            net_profit: 1485562728,
            shares: 2500000000,
            total_shares: 2500000000,
            debt: 37456058142,
            equity: 51794969507,
            low_price: 100,
            high_price: 110,
            date_awal_start: new Date("2023-07-16"),
            date_awal_end: new Date("2023-07-18"),
            date_umum_start: new Date("2023-07-19"),
            date_umum_end: new Date("2023-07-20"),
            date_penjatahan: new Date("2023-07-21"),
            date_distribusi: new Date("2023-07-22"),
            date_ipo: new Date("2023-07-23"),
            subsector_id: 1,
            underwriter_id: 1,
        },
    })
    await prisma.company.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'PT Multi Makmur Lemindo Tbk',
            description: 'PT Carsurin Tbk (“Perseroan”) adalah perusahaan Inspeksi, Pengujian, Sertifikasi dan Verifikasi swasta terkemuka di Indonesia. Perseroan didirikan dengan nama PT Carsurin Limited (dahulu) berdasarkan Akta Pendirian Perseroan Terbatas Perseroan No. 15 tanggal 14 Desember 1968 dan diperbaiki dengan Naskah No. 2 tanggal 2 Desember 1969 yang dibuat dihadapan Than Thong Kie ., Notaris di Kota Jakarta.',
            ticker: 'PIPA',
            img: 'logo1.png',
            address: 'SOHO CAPITAL, 28th Floor Jl. Letjen S. Parman Kav.28, Grogol Petamburan, Jakarta Barat',
            website: 'https://www.carsurin.com',
            net_profit: 1485562728,
            shares: 2500000000,
            total_shares: 2500000000,
            debt: 37456058142,
            equity: 51794969507,
            low_price: 100,
            high_price: 110,
            date_awal_start: new Date("2023-07-16"),
            date_awal_end: new Date("2023-07-18"),
            date_umum_start: new Date("2023-07-19"),
            date_umum_end: new Date("2023-07-20"),
            date_penjatahan: new Date("2023-07-21"),
            date_distribusi: new Date("2023-07-22"),
            date_ipo: new Date("2023-07-23"),
            subsector_id: 1,
            underwriter_id: 1,
        },
    })
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
