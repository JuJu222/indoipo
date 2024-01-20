async function seedCompanyUnderwriter(prisma) {
    await prisma.companyUnderwriter.upsert({
        where: { id: 1 },
        update: {},
        create: {
            company_id: 1,
            underwriter_id: 7,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 2 },
        update: {},
        create: {
            company_id: 1,
            underwriter_id: 7,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 2 },
        update: {},
        create: {
            company_id: 1,
            underwriter_id: 8,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 3 },
        update: {},
        create: {
            company_id: 1,
            underwriter_id: 9,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 4 },
        update: {},
        create: {
            company_id: 1,
            underwriter_id: 10,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 5 },
        update: {},
        create: {
            company_id: 2,
            underwriter_id: 2,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 6 },
        update: {},
        create: {
            company_id: 2,
            underwriter_id: 2,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 7 },
        update: {},
        create: {
            company_id: 3,
            underwriter_id: 5,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 8 },
        update: {},
        create: {
            company_id: 3,
            underwriter_id: 5,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 9 },
        update: {},
        create: {
            company_id: 3,
            underwriter_id: 6,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 10 },
        update: {},
        create: {
            company_id: 4,
            underwriter_id: 5,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 11 },
        update: {},
        create: {
            company_id: 4,
            underwriter_id: 5,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 12 },
        update: {},
        create: {
            company_id: 5,
            underwriter_id: 4,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 13 },
        update: {},
        create: {
            company_id: 5,
            underwriter_id: 4,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 14 },
        update: {},
        create: {
            company_id: 6,
            underwriter_id: 11,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 15 },
        update: {},
        create: {
            company_id: 6,
            underwriter_id: 11,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 16 },
        update: {},
        create: {
            company_id: 7,
            underwriter_id: 12,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 17 },
        update: {},
        create: {
            company_id: 7,
            underwriter_id: 12,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 18 },
        update: {},
        create: {
            company_id: 7,
            underwriter_id: 13,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 19 },
        update: {},
        create: {
            company_id: 8,
            underwriter_id: 14,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 20 },
        update: {},
        create: {
            company_id: 8,
            underwriter_id: 14,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 21 },
        update: {},
        create: {
            company_id: 9,
            underwriter_id: 1,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 22 },
        update: {},
        create: {
            company_id: 9,
            underwriter_id: 1,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 23 },
        update: {},
        create: {
            company_id: 10,
            underwriter_id: 15,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 24 },
        update: {},
        create: {
            company_id: 10,
            underwriter_id: 15,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 25 },
        update: {},
        create: {
            company_id: 10,
            underwriter_id: 6,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 26 },
        update: {},
        create: {
            company_id: 11,
            underwriter_id: 12,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 27 },
        update: {},
        create: {
            company_id: 11,
            underwriter_id: 12,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 28 },
        update: {},
        create: {
            company_id: 12,
            underwriter_id: 5,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 29 },
        update: {},
        create: {
            company_id: 12,
            underwriter_id: 5,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 30 },
        update: {},
        create: {
            company_id: 12,
            underwriter_id: 14,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 31 },
        update: {},
        create: {
            company_id: 13,
            underwriter_id: 16,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 32 },
        update: {},
        create: {
            company_id: 13,
            underwriter_id: 16,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 33 },
        update: {},
        create: {
            company_id: 14,
            underwriter_id: 3,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 34 },
        update: {},
        create: {
            company_id: 14,
            underwriter_id: 3,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 35 },
        update: {},
        create: {
            company_id: 15,
            underwriter_id: 10,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 36 },
        update: {},
        create: {
            company_id: 15,
            underwriter_id: 10,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 37 },
        update: {},
        create: {
            company_id: 15,
            underwriter_id: 17,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 38 },
        update: {},
        create: {
            company_id: 16,
            underwriter_id: 12,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 39 },
        update: {},
        create: {
            company_id: 16,
            underwriter_id: 12,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 40 },
        update: {},
        create: {
            company_id: 17,
            underwriter_id: 5,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 41 },
        update: {},
        create: {
            company_id: 17,
            underwriter_id: 5,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 42 },
        update: {},
        create: {
            company_id: 18,
            underwriter_id: 1,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 43 },
        update: {},
        create: {
            company_id: 18,
            underwriter_id: 1,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 44 },
        update: {},
        create: {
            company_id: 19,
            underwriter_id: 4,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 45 },
        update: {},
        create: {
            company_id: 19,
            underwriter_id: 4,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 46 },
        update: {},
        create: {
            company_id: 20,
            underwriter_id: 18,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 47 },
        update: {},
        create: {
            company_id: 20,
            underwriter_id: 18,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 48 },
        update: {},
        create: {
            company_id: 21,
            underwriter_id: 12,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 49 },
        update: {},
        create: {
            company_id: 21,
            underwriter_id: 12,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 50 },
        update: {},
        create: {
            company_id: 21,
            underwriter_id: 6,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 51 },
        update: {},
        create: {
            company_id: 21,
            underwriter_id: 19,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 52 },
        update: {},
        create: {
            company_id: 22,
            underwriter_id: 15,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 53 },
        update: {},
        create: {
            company_id: 22,
            underwriter_id: 15,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 54 },
        update: {},
        create: {
            company_id: 23,
            underwriter_id: 12,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 55 },
        update: {},
        create: {
            company_id: 23,
            underwriter_id: 12,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 56 },
        update: {},
        create: {
            company_id: 24,
            underwriter_id: 20,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 57 },
        update: {},
        create: {
            company_id: 24,
            underwriter_id: 20,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 58 },
        update: {},
        create: {
            company_id: 24,
            underwriter_id: 21,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 59 },
        update: {},
        create: {
            company_id: 25,
            underwriter_id: 14,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 60 },
        update: {},
        create: {
            company_id: 25,
            underwriter_id: 14,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 61 },
        update: {},
        create: {
            company_id: 26,
            underwriter_id: 22,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 62 },
        update: {},
        create: {
            company_id: 26,
            underwriter_id: 22,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 63 },
        update: {},
        create: {
            company_id: 27,
            underwriter_id: 23,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 64 },
        update: {},
        create: {
            company_id: 27,
            underwriter_id: 23,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 65 },
        update: {},
        create: {
            company_id: 27,
            underwriter_id: 20,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 66 },
        update: {},
        create: {
            company_id: 28,
            underwriter_id: 15,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 67 },
        update: {},
        create: {
            company_id: 28,
            underwriter_id: 15,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 68 },
        update: {},
        create: {
            company_id: 28,
            underwriter_id: 16,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 69 },
        update: {},
        create: {
            company_id: 29,
            underwriter_id: 24,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 70 },
        update: {},
        create: {
            company_id: 29,
            underwriter_id: 24,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 71 },
        update: {},
        create: {
            company_id: 29,
            underwriter_id: 25,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 72 },
        update: {},
        create: {
            company_id: 30,
            underwriter_id: 26,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 73 },
        update: {},
        create: {
            company_id: 30,
            underwriter_id: 26,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 74 },
        update: {},
        create: {
            company_id: 31,
            underwriter_id: 27,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 75 },
        update: {},
        create: {
            company_id: 31,
            underwriter_id: 27,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 76 },
        update: {},
        create: {
            company_id: 32,
            underwriter_id: 15,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 77 },
        update: {},
        create: {
            company_id: 32,
            underwriter_id: 15,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 78 },
        update: {},
        create: {
            company_id: 33,
            underwriter_id: 13,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 79 },
        update: {},
        create: {
            company_id: 33,
            underwriter_id: 13,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 80 },
        update: {},
        create: {
            company_id: 34,
            underwriter_id: 25,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 81 },
        update: {},
        create: {
            company_id: 34,
            underwriter_id: 25,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 82 },
        update: {},
        create: {
            company_id: 34,
            underwriter_id: 28,
            type: 'penjamin_emisi_efek',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 83 },
        update: {},
        create: {
            company_id: 35,
            underwriter_id: 15,
            type: 'partisipan_admin',
        },
    })
    await prisma.companyUnderwriter.upsert({
        where: { id: 84 },
        update: {},
        create: {
            company_id: 35,
            underwriter_id: 15,
            type: 'penjamin_emisi_efek',
        },
    })
}

module.exports = { seedCompanyUnderwriter }