import React from 'react';
import prisma from "@/lib/prisma";
import {notFound} from "next/navigation";
import Reveal from "src/components/animations/Reveal";
import CompanyCard from "src/components/CompanyCard";

export async function generateMetadata({ params }) {
    let firstDate = new Date(Date.UTC(params.year, parseInt(params.month) - 1, 1));

    return {
        title: `IPO ${firstDate.toLocaleString('id-ID', { month: 'short' })} ${firstDate.getFullYear()} | Indoipo - Analisa IPO dengan Mudah`,
        description: `Daftar perusahaan IPO selama periode ${firstDate.toLocaleString('id-ID', { month: 'long' })} ${firstDate.getFullYear()}. Lihat PER, PBV, DER, ROE, dan metrik-metrik lainnya untuk membantu anda dalam menentukan investasi anda. Indoipo membantu anda dalam menyediakan metrik-metrik serta informasi keuangan dari perusahaan yang sedang IPO dalam bentuk yang sederhana.`
    }
}
export const revalidate = 60

async function Period(props) {
    let firstDate = new Date(Date.UTC(props.params.year, parseInt(props.params.month) - 1, 1));
    var lastDate = new Date(Date.UTC(props.params.year, parseInt(props.params.month), 0));

    const companies = await prisma.company.findMany({
        where: {
            financials: { some: {} },
            OR: [
                {
                    date_awal_start: {
                        lte: lastDate,
                        gte: firstDate,
                    }
                },
                {
                    date_awal_end: {
                        lte: lastDate,
                        gte: firstDate,
                    }
                },
                {
                    date_umum_start: {
                        lte: lastDate,
                        gte: firstDate,
                    }
                },
                {
                    date_umum_end: {
                        lte: lastDate,
                        gte: firstDate,
                    }
                },
                {
                    date_penjatahan: {
                        lte: lastDate,
                        gte: firstDate,
                    }
                },
                {
                    date_distribusi: {
                        lte: lastDate,
                        gte: firstDate,
                    }
                },
                {
                    date_ipo: {
                        lte: lastDate,
                        gte: firstDate,
                    }
                }
            ]
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

    if (companies.length === 0) {
        return notFound()
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className='text-center text-4xl font-bold'>IPO - {firstDate.toLocaleString('id-ID', { month: 'long' })} {firstDate.getFullYear()}</h1>
                <h2 className='pt-2 text-lg text-gray-500 text-center'>Terdapat {companies.length} IPO yang berlangsung pada periode {firstDate.toLocaleString('id-ID', { month: 'long' })} {firstDate.getFullYear()}.</h2>
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

export default Period;