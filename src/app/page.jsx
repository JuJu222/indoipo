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
            id: 'asc'
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
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative">
                <div className='relative overflow-clip'>
                    <div className='absolute'>
                        <HeroIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="w-20 h-20" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                        </HeroIcon>
                    </div>
                    <Reveal>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Analisa IPO dengan Mudah
                        </h1>
                    </Reveal>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Indoipo membantu anda dalam menyediakan semua
                    </p>
                    <div
                        className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/ipo"
                           className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary_hover transition focus:ring-4 focus:ring-green-200 dark:focus:ring-green-200">
                            Lihat semua IPO
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#"
                           className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            {/*<svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
                            {/*     xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <path*/}
                            {/*        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>*/}
                            {/*</svg>*/}
                            Tentang Kami
                        </a>
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
                    <div className="grid grid-cols-4 gap-6 my-8">
                        {companies.map((company, index) => (
                            <CompanyCard key={index} company={company}></CompanyCard>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
