import Image from 'next/image'
import prisma from "@/lib/prisma";
import CompanyCard from "@/components/CompanyCard";
import {notFound} from "next/navigation";
import Reveal from "../components/animations/Reveal";
import HeroIcon from "../components/animations/HeroIcon";

export const revalidate = 60

export default async function Home() {
    const companies = await prisma.company.findMany({
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
        },
        take: 4,
    });

    if (!companies) {
        return notFound()
    }

    return (
        <section className="dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
               <div className='py-8 pb-20'>
                   <div className='flex w-full justify-between h-0'>
                       <div className='-z-10 text-primary opacity-40'>
                           <HeroIcon delay={1}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-20 h-20" viewBox="0 0 16 16">
                                   <path
                                       d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                                   <path
                                       d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                               </svg>
                           </HeroIcon>
                       </div>
                       <div className='-z-10 text-primary opacity-40'>
                           <HeroIcon delay={3}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-20 h-20" viewBox="0 0 16 16">
                               <path
                                   d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                           </svg>
                           </HeroIcon>
                       </div>
                       <div className='-z-10 text-primary opacity-40'>
                           <HeroIcon delay={2}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-20 h-20" viewBox="0 0 16 16">
                               <path fillRule="evenodd"
                                     d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                           </svg>
                           </HeroIcon>
                       </div>
                       <div className='-z-10 text-primary opacity-40'>
                           <HeroIcon delay={4}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-20 h-20" viewBox="0 0 16 16">
                                   <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                   <path
                                       d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
                               </svg>
                           </HeroIcon>
                       </div>
                       <div className='-z-10 text-primary opacity-40'>
                           <HeroIcon delay={5}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-20 h-20" viewBox="0 0 16 16">
                                   <path
                                       d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                               </svg>
                           </HeroIcon>
                       </div>
                   </div>
                   <Reveal>
                       <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                           Analisa IPO dengan Mudah
                       </h1>
                   </Reveal>
                   <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                       Indoipo membantu anda dalam menyediakan metrik-metrik serta informasi keuangan dari perusahaan yang sedang IPO dalam bentuk yang sederhana.
                   </p>
                   <div
                       className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                       <a href="/ipo"
                          className="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary_hover transition focus:ring-4 focus:ring-green-200 dark:focus:ring-green-200">
                           Lihat semua IPO
                           <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                               <path fillRule="evenodd"
                                     d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                     clipRule="evenodd"></path>
                           </svg>
                       </a>
                       {/*<a href="/tentang-kami"*/}
                       {/*   className="inline-flex bg-white justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">*/}
                       {/*    /!*<svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*!/*/}
                       {/*    /!*     xmlns="http://www.w3.org/2000/svg">*!/*/}
                       {/*    /!*    <path*!/*/}
                       {/*    /!*        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>*!/*/}
                       {/*    /!*</svg>*!/*/}
                       {/*    Tentang Kami*/}
                       {/*</a>*/}
                   </div>
               </div>
                {/*<a href="#"*/}
                {/*   className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"*/}
                {/*   role="alert">*/}
                {/*    <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span>*/}
                {/*    <span className="text-sm font-medium">Flowbite is out! See what&apos;s new</span>*/}
                {/*    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
                {/*         xmlns="http://www.w3.org/2000/svg">*/}
                {/*        <path fillRule="evenodd"*/}
                {/*              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
                {/*              clipRule="evenodd"></path>*/}
                {/*    </svg>*/}
                {/*</a>*/}
                <span className="font-semibold text-xl text-gray-400 uppercase">IPO TERBARU</span>
                <Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                        {companies.map((company, index) => (
                            <CompanyCard key={index} company={company}></CompanyCard>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
