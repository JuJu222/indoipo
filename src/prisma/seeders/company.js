async function seedCompanies(prisma) {
    await prisma.company.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'PT Nusantara Sejahtera Raya Tbk',
            description: 'Perseroan dan Entitas Anak (selanjutnya disebut "Cinema XXI") berkedudukan di Jakarta Pusat, didirikan pada tahun 1988 berdasarkan peraturan perundang-undangan yang berlaku di Negara Republik Indonesia, dengan nama PT Subentra Nusantara berdasarkan Akta Pendirian No. 67 tanggal 7 Juni 1988 yang ditandai dengan pembukaan Studio 21, multipleks modern pertama di Indonesia. Perseroan merupakan perusahaan yang fokus dalam pemutaran film dan penyediaan F&B untuk memberikan pengalaman hiburan yang berkualitas tinggi.',
            ticker: 'CNMA',
            img: 'CNMA.png',
            address: 'Jl. KH Wahid Hasyim No.96-A Jakarta Pusat 10340 ',
            bidang_usaha: 'Bioskop & Restoran',
            website: 'https://www.cinema21.co.id',
            prospectus_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=',
            prospectus_summary_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=summary',
            e_ipo_url: 'https://e-ipo.co.id/id/ipo/246/cnma-pt-nusantara-sejahtera-raya-tbk',
            additional_information_url: 'https://www.e-ipo.co.id/id/pipeline/get-additional-info?id=246',
            low_price: 270,
            high_price: 288,
            waran_numerator: 100,
            waran_denominator: 275,
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
            name: 'PT Nusantara Raya Tbk',
            description: 'Perseroan dan Entitas Anak (selanjutnya disebut "Cinema XXI") berkedudukan di Jakarta Pusat, didirikan pada tahun 1988 berdasarkan peraturan perundang-undangan yang berlaku di Negara Republik Indonesia, dengan nama PT Subentra Nusantara berdasarkan Akta Pendirian No. 67 tanggal 7 Juni 1988 yang ditandai dengan pembukaan Studio 21, multipleks modern pertama di Indonesia. Perseroan merupakan perusahaan yang fokus dalam pemutaran film dan penyediaan F&B untuk memberikan pengalaman hiburan yang berkualitas tinggi.',
            ticker: 'CNMB',
            img: 'CNMA.png',
            address: 'Jl. KH Wahid Hasyim No.96-A Jakarta Pusat 10340 ',
            bidang_usaha: 'Bioskop & Restoran',
            website: 'https://www.cinema21.co.id',
            prospectus_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=',
            prospectus_summary_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=summary',
            e_ipo_url: 'https://e-ipo.co.id/id/ipo/246/cnma-pt-nusantara-sejahtera-raya-tbk',
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
            bidang_usaha: 'Bioskop & Restoran',
            website: 'https://www.cinema21.co.id',
            prospectus_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=',
            prospectus_summary_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=summary',
            additional_information_url: 'https://www.e-ipo.co.id/id/pipeline/get-additional-info?id=246',
            e_ipo_url: 'https://e-ipo.co.id/id/ipo/246/cnma-pt-nusantara-sejahtera-raya-tbk',
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
            bidang_usaha: 'Bioskop & Restoran',
            website: 'https://www.cinema21.co.id',
            prospectus_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=',
            prospectus_summary_url: 'https://www.e-ipo.co.id/id/pipeline/get-propectus-file?id=246&type=summary',
            additional_information_url: 'https://www.e-ipo.co.id/id/pipeline/get-additional-info?id=246',
            e_ipo_url: 'https://e-ipo.co.id/id/ipo/246/cnma-pt-nusantara-sejahtera-raya-tbk',
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

module.exports = { seedCompanies }