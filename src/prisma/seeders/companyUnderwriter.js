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
}

module.exports = { seedCompanyUnderwriter }