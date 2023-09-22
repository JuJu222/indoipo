const { PrismaClient } = require('@prisma/client')
const {seedSectors} = require("./sector");
const {seedSubSectors} = require("./subsector");
const {seedUnderwriters} = require("./underwriter");
const {seedCompanies} = require("./company");
const {seedFinancials} = require("./financial");
const {seedCompanyUnderwriter} = require("./companyUnderwriter");
const prisma = new PrismaClient()

async function main() {
    await seedSectors(prisma)
    await seedSubSectors(prisma)
    await seedUnderwriters(prisma)
    await seedCompanies(prisma)
    await seedFinancials(prisma)
    await seedCompanyUnderwriter(prisma)
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
