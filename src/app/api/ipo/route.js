import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {notFound} from "next/navigation";

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

    if (!companies) {
        return notFound()
    }

    return NextResponse.json(companies);
}