import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {notFound} from "next/navigation";

export const dynamic = 'force-dynamic'

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

    if (!company) {
        return notFound()
    }

    return NextResponse.json(company);
}