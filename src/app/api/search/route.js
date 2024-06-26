import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {notFound} from "next/navigation";

export const dynamic = 'force-dynamic'

export async function OPTIONS(request) {
    const origin = request.headers.get('origin')

    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': origin || '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    })
}


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

        if (companies.length === 0) {
            return notFound()
        }

        return NextResponse.json(companies);
    } else {
        const companies = await prisma.company.findMany({
            take: 8,
            orderBy: {
                id: 'asc'
            },
        });

        if (!companies) {
            return notFound()
        }

        return NextResponse.json(companies);
    }
}