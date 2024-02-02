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
        lastModified: company.updated_at,
        priority: 1,
    }));

    const routes = [
        "",
        "/ipo",
        "/kontak",
        "/tentang-kami",
        "/syarat-ketentuan",
        "/kebijakan-privasi",
        "/kebijakan-cookie",
        "/ipo/periode/2024/2",
        "/ipo/periode/2024/1",
        "/ipo/periode/2023/12",
        "/ipo/periode/2023/11",
        "/ipo/periode/2023/10",
        "/ipo/periode/2023/9",
        "/ipo/periode/2023/8",
    ].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
        priority: route === "" ? 0.8 : 0.5,
    }));

    return [...routes, ...posts];
}