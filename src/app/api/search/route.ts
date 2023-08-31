import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

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
}