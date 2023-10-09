import prisma from "@/lib/prisma";

export default async function sitemap() {
    const URL = "https://indoipo.com";

    const companies = await prisma.company.findMany({
        where: {
            financials: { some: {} }
        },
        orderBy: {
            date_awal_start: 'desc'
        },
    });


    const posts = companies.map((company, index) => ({
        url: `${URL}/ipo/${company.ticker}`,
        priority: 1,
    }));

    const routes = ["", "/ipo", "/kontak", "/tentang-kami", "/syarat-ketentuan", "/kebijakan-privasi"].map((route) => ({
        url: `${URL}${route}`,
        priority: route === "" ? 0.8 : 0.5,
    }));

    return [...routes, ...posts];
}