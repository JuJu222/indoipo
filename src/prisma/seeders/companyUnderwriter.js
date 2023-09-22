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
}

module.exports = { seedCompanyUnderwriter }