import {cache} from "react";
import prisma from "@/lib/prisma";

export const getCompany = cache(async (ticker) => {
    return await prisma.company.findFirst({
        where: {
            ticker: ticker.toUpperCase(),
        },
        include: {
            underwriters: {
                include: {
                    underwriter: true
                }
            },
            subsector: {
                include: {
                    sector: true
                }
            },
            financials: {
                orderBy: {
                    date_end: 'desc'
                }
            },
            proceeds: true
        }
    })
});