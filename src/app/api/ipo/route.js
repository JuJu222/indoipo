import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET() {
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