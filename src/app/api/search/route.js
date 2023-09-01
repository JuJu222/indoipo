import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    if (query) {
        const companies = await prisma.company.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    },
                    {
                        ticker: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    }
                ]
            },
            take: 8,
            orderBy: {
                id: 'asc'
            },
            include: {
                subsector: true,
            },
        });

        return NextResponse.json(companies);
    } else {
        const companies = await prisma.company.findMany({
            take: 8,
            orderBy: {
                id: 'asc'
            },
        });

        return NextResponse.json(companies);
    }
}