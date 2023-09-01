import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(request, { params }) {
    const company = await prisma.company.findFirst({
        where: {
            ticker: params.ticker.toUpperCase(),
        },
        include: {
            subsector: {
                include: {
                    sector: true
                }
            },
            financials: {
                orderBy:  {
                    date_end: 'desc'
                }
            }
        }
    });

    return NextResponse.json(company);
}