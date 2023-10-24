import React from 'react';
import prisma from "@/lib/prisma";
import {notFound} from "next/navigation";
import Reveal from "../../components/animations/Reveal";
import CompanyCard from "../../components/CompanyCard";

export const metadata = {
    title: 'Semua IPO | Indoipo - Analisa IPO dengan Mudah',
    description: 'Dapatkan informasi yang mudah dimengerti mengenai IPO terbaru. Lihat PER, PBV, DER, ROE, dan metrik-metrik lainnya untuk membantu anda dalam menentukan investasi anda. Indoipo membantu anda dalam menyediakan metrik-metrik serta informasi keuangan dari perusahaan yang sedang IPO dalam bentuk yang sederhana.'
}

export const revalidate = 60

async function Companies(props) {
    const companies = await prisma.company.findMany({
        where: {
            financials: { some: {} }
        },
        orderBy: {
            date_awal_start: 'desc'
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

    if (!companies) {
        return notFound()
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className='text-center text-4xl font-bold'>Semua IPO</h1>
                {/*<Reveal>*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                        {companies.map((company, index) => (
                            <CompanyCard key={index} company={company}></CompanyCard>
                        ))}
                    </div>
                {/*</Reveal>*/}
            </div>
        </section>
    )
}

export default Companies;