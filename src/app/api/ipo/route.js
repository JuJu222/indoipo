import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(request) {
    const companies = await prisma.company.findMany({
        orderBy: {
            id: 'asc'
        },
        include: {
            subsector: true,
        },
    });

    return NextResponse.json(companies);
}