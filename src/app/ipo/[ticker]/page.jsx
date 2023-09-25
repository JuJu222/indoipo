import Head from "next/head";
import prisma from "@/lib/prisma";
import {notFound} from "next/navigation";
import Image from "next/image";
import React from 'react';
import TimelineCircle from "@/components/TimelineCircle";
import Financials from "./Financials";
import {toRp} from "../../../helpers/formatter";

export async function generateMetadata({ params }) {
    return {
        title: params.ticker + ' - Indoipo',
    }
}
export const revalidate = 60

export default async function Company({ params }) {
    let company = await prisma.company.findFirst({
        where: {
            ticker: params.ticker.toUpperCase(),
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
                orderBy:  {
                    date_end: 'desc'
                }
            }
        }
    });

    if (!company) {
        return notFound()
    }

    company = JSON.parse(JSON.stringify(company, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value
    ));

    let cardMetrics = {}

    let interval = -1
    for (const [index, financial] of company.financials.entries()) {
        if (company.kurs_usd) {
            if (financial.asset != null && financial.liability != null) {
                financial.asset = financial.asset * company.kurs_usd
                financial.liability = financial.liability * company.kurs_usd
            }
            financial.net_income = financial.net_income * company.kurs_usd
        }
        if (financial.asset != null && financial.liability != null) {
            financial['equity'] = financial.asset - financial.liability
            financial['bvps'] = financial.equity / company.outstanding_shares
        } else {
            financial['equity'] = null
            financial['bvps'] = null
        }
        financial['eps'] = financial.net_income / company.outstanding_shares
        if (company.final_price) {
            if (financial.asset != null && financial.liability != null) {
                financial['pbv'] = company.final_price / financial.bvps
            } else {
                financial['pbv'] = null
            }
            financial['per'] = company.final_price / financial.eps
        } else {
            if (financial.asset != null && financial.liability != null) {
                financial['high_pbv'] = company.high_price / financial.bvps
                financial['low_pbv'] = company.low_price / financial.bvps
            } else {
                financial['high_pbv'] = null
                financial['low_pbv'] = null
            }
            financial['high_per'] = company.high_price / financial.eps
            financial['low_per'] = company.low_price / financial.eps
        }
        if (financial.asset != null && financial.liability != null) {
            financial['der'] = financial.liability / financial.equity
            financial['roe'] = financial.net_income / financial.equity
        } else {
            financial['der'] = null
            financial['roe'] = null
        }

        if (index == 0) {
            if (company.final_price) {
                cardMetrics['pbv'] = {
                    date_end: financial.date_end,
                    interval: financial.interval,
                    value: financial.pbv
                }
            } else {
                cardMetrics['pbv'] = {
                    date_end: financial.date_end,
                    interval: financial.interval,
                    low_value: financial.low_pbv,
                    high_value: financial.high_pbv
                }
            }
            cardMetrics['der'] = {
                date_end: financial.date_end,
                interval: financial.interval,
                value: financial.der
            }
        }

        if (interval != financial.interval) {
            interval = financial.interval

            if (interval == 12) {
                if (company.final_price) {
                    cardMetrics['per'] = {
                        date_end: financial.date_end,
                        interval: financial.interval,
                        value: financial.per
                    }
                } else {
                    cardMetrics['per'] = {
                        date_end: financial.date_end,
                        interval: financial.interval,
                        low_value: financial.low_per,
                        high_value: financial.high_per
                    }
                }
                cardMetrics['roe'] = {
                    date_end: financial.date_end,
                    interval: financial.interval,
                    value: financial.roe
                }
            }
        }
    }

    let currDate = new Date()
    currDate.setHours(currDate.getHours() - (currDate.getTimezoneOffset() / 60))
    currDate = currDate.toISOString().split("T")[0]
    let dateOption1 = {year: 'numeric', month: 'long', day: 'numeric'};
    let dateOption2 = {month: 'long', day: 'numeric'};
    let dateMYOnly = {month: 'short', year: 'numeric'};

    const groupedFinancials = Object.values(
        company.financials.reduce((result, financial) => {
            const {interval} = financial;
            if (!result[interval]) {
                result[interval] = [];
            }
            result[interval].push(financial);
            return result;
        }, {})
    );
    groupedFinancials.sort((a, b) => {
        // Assuming 'interval' is a string representing a date (e.g., '2023-09-01')
        const dateA = new Date(a[0].interval);
        const dateB = new Date(b[0].interval);

        // Sort in descending order by comparing the dates
        return dateB - dateA;
    });

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-12">
                    <div className='flex space-x-10 flex-col md:flex-row'>
                        <div className='w-full md:w-1/3 flex flex-col items-center justify-center'>
                            {/*<Image src={company.img} className='m-auto object-contain p-4'*/}
                            {/*       alt={'Logo ' + company.ticker} fill={true} />*/}
                            <Image
                                src={company.img}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt='aaa'
                                className='w-full h-auto object-contain p-4'
                            />
                            {company.waran_numerator ? (
                                    <p className='bg-green-600 text-white px-4 py-1.5 rounded w-full text-center font-semibold'>
                                    Bonus {company.waran_denominator} waran setiap {company.waran_numerator} lembar saham
                                    <span className='font-normal block'>
                                        Harga Exercise: {company.exercise_price ? toRp(company.exercise_price) : '-'}
                                    </span>
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='w-full md:w-2/3'>
                           <div className='flex justify-between'>
                               <div>
                                   <h3 className="text-md mb-1 leading-none text-gray-900 dark:text-white">{company.ticker}</h3>
                                   <h1 className="text-xl mb-1 font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">{company.name}</h1>
                                   <h4 className="text-sm mb-2 leading-none text-gray-900 dark:text-white">{company.subsector.name} - {company.subsector.sector.name}</h4>
                                   {company.final_price ? (
                                       <h3 className="mb-4 text-xl font-bold leading-none text-gray-900 md:text-4xl dark:text-white">{toRp(company.final_price)}</h3>
                                   ) : (
                                       <h3 className="mb-4 text-xl font-bold leading-none text-gray-900 md:text-4xl dark:text-white">
                                           <span>{toRp(company.low_price)}</span>
                                           <span className='font-thin px-1'>-</span>
                                           <span>{toRp(company.high_price)}</span>
                                       </h3>
                                   )}
                               </div>
                               <div>
                                   <a href={company.e_ipo_url} target='_blank'
                                      className="cursor-pointer shadow-sm border rounded-md inline-block px-4 py-2 text-sm font-medium text-primary_hover hover:bg-gray-50 focus:relative flex flex-col gap-2 items-center justify-center transition">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                            fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                                           <path
                                               d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                                       </svg>
                                       e-IPO
                                   </a>
                               </div>
                           </div>
                            <div className='flex justify-between shadow-md rounded-lg p-5 mb-4 gap-2'>
                                <div>
                                    <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">PER</p>
                                    <p className="mb-2 text-xs leading-none">Rasio <i>Price to Earnings</i></p>
                                    <p className="text-2xl font-bold leading-none text-gray-900">
                                        {company.final_price ? (
                                            <span>{cardMetrics.per.value.toFixed(2)}</span>
                                        ) : (
                                            <>
                                                <span>{cardMetrics.per.low_value.toFixed(2)}</span>
                                                <span className='font-thin px-1'>-</span>
                                                <span>{cardMetrics.per.high_value.toFixed(2)}</span>
                                            </>
                                        )}
                                    </p>
                                    <p className="text-xs leading-none pt-1 text-gray-400">{cardMetrics.per.interval}M
                                        - {new Date(cardMetrics.per.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                                </div>
                                <div>
                                    <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">PBV</p>
                                    <p className="mb-2 text-xs leading-none">Nilai <i>Price to Book</i></p>
                                    <p className="text-2xl font-bold leading-none text-gray-900">
                                        {company.final_price ? (
                                            <span>{cardMetrics.pbv.value.toFixed(2)}</span>
                                        ) : (
                                            <>
                                                <span>{cardMetrics.pbv.low_value.toFixed(2)}</span>
                                                <span className='font-thin px-1'>-</span>
                                                <span>{cardMetrics.pbv.high_value.toFixed(2)}</span>

                                            </>
                                        )}
                                    </p>
                                    <p className="text-xs leading-none pt-1 text-gray-400">{cardMetrics.pbv.interval}M
                                        - {new Date(cardMetrics.pbv.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                                </div>
                                <div>
                                    <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">DER</p>
                                    <p className="mb-2 text-xs leading-none">Rasio <i>Debt to Equity</i></p>
                                    <p className="text-2xl font-bold leading-none text-gray-900">{cardMetrics.der.value.toFixed(2)}</p>
                                    <p className="text-xs leading-none pt-1 text-gray-400">{cardMetrics.der.interval}M
                                        - {new Date(cardMetrics.der.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                                </div>
                                <div>
                                    <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">ROE</p>
                                    <p className="mb-2 text-xs leading-none"><i>Return on Equity</i></p>
                                    <p className="text-2xl font-bold leading-none text-gray-900">{(cardMetrics.roe.value * 100).toFixed(2)}%</p>
                                    <p className="text-xs leading-none pt-1 text-gray-400">{cardMetrics.roe.interval}M
                                        - {new Date(cardMetrics.roe.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                                </div>
                            </div>
                            <div
                                className='grid grid-cols-3 rounded-md border bg-white shadow-sm w-full overflow-hidden'>
                                <a href={company.prospectus_url} target='_blank'
                                   className="cursor-pointer inline-block px-4 py-2 text-sm font-medium text-white hover:bg-primary_hover focus:relative flex gap-2 items-center justify-center bg-primary transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    Prospektus
                                </a>
                                <a href={company.prospectus_summary_url} target='_blank'
                                    className="cursor-pointer inline-block px-4 py-2 text-sm font-medium text-primary_hover hover:bg-gray-50 focus:relative border-l border-r flex gap-2 items-center justify-center transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                        <path
                                            d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                        <path
                                            d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                    </svg>
                                    Ringkasan Prospektus
                                </a>
                                {company.additional_information_url ? (
                                    <a href={company.additional_information_url} target='_blank'
                                       className="cursor-pointer inline-block px-4 py-2 text-sm font-medium text-primary_hover hover:bg-gray-50 focus:relative flex gap-2 items-center justify-center transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                             className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                            <path
                                                d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                            <path
                                                d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                        </svg>
                                        Informasi Tambahan
                                    </a>
                                ) : (
                                    <div
                                       className="inline-block px-4 py-2 text-sm font-medium text-gray-300 bg-gray-50 focus:relative flex gap-2 items-center justify-center transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                             className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                            <path
                                                d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                            <path
                                                d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                        </svg>
                                        Informasi Tambahan
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='py-8'>
                        <ol className="items-start sm:flex">
                            <li className="w-full mb-6 sm:mb-0">
                                <TimelineCircle currentDate={currDate} startDate={new Date(company.date_awal_start)}
                                                endDate={new Date(company.date_awal_end)}></TimelineCircle>
                                <div className="mt-3 sm:px-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">Penawaran
                                        Awal</h3>
                                    <time
                                        className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-center">
                                        {new Date(company.date_awal_start).toLocaleDateString("id-ID", dateOption2)} - {new Date(company.date_awal_end).toLocaleDateString("id-ID", dateOption1)}
                                    </time>
                                </div>
                            </li>
                            <li className="w-full mb-6 sm:mb-0">
                                <TimelineCircle currentDate={currDate} startDate={new Date(company.date_umum_start)}
                                                endDate={new Date(company.date_umum_end)}></TimelineCircle>
                                <div className="mt-3 sm:px-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">Penawaran
                                        Umum</h3>
                                    <time
                                        className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-center">
                                        {new Date(company.date_umum_start).toLocaleDateString("id-ID", dateOption2)} - {new Date(company.date_umum_end).toLocaleDateString("id-ID", dateOption1)}
                                    </time>
                                </div>
                            </li>
                            <li className="w-full mb-6 sm:mb-0">
                                <TimelineCircle currentDate={currDate}
                                                referenceDate={new Date(company.date_penjatahan)}></TimelineCircle>
                                <div className="mt-3 sm:px-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">Penjatahan
                                        Efek</h3>
                                    <time
                                        className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-center">
                                        {new Date(company.date_penjatahan).toLocaleDateString("id-ID", dateOption1)}
                                    </time>
                                </div>
                            </li>
                            <li className="w-full mb-6 sm:mb-0">
                                <TimelineCircle currentDate={currDate}
                                                referenceDate={new Date(company.date_distribusi)}></TimelineCircle>
                                <div className="mt-3 sm:px-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">Distribusi
                                        Saham</h3>
                                    <time
                                        className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-center">
                                        {new Date(company.date_distribusi).toLocaleDateString("id-ID", dateOption1)}
                                    </time>
                                </div>
                            </li>
                            <li className="w-full mb-6 sm:mb-0">
                                <TimelineCircle currentDate={currDate}
                                                referenceDate={new Date(company.date_ipo)}></TimelineCircle>
                                <div className="mt-3 sm:px-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">IPO</h3>
                                    <time
                                        className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-center">
                                        {new Date(company.date_ipo).toLocaleDateString("id-ID", dateOption1)}
                                    </time>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className='pb-8'>
                        <h2 className='text-lg font-semibold pb-2'>Informasi Perusahaan</h2>
                        <p className='whitespace-pre-wrap'>{company.description.replace('\\n', '\n\n')}</p>
                        <div className='flex justify-between gap-4 w-full'>
                            <table className='text-left mt-2 max-w-[50%] h-fit'>
                                <tbody className='align-top'>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Jumlah Saham Ditawarkan
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'>{company.offered_shares.toLocaleString('id-ID')} Lembar ({(company.offered_shares / company.outstanding_shares * 100).toFixed(2)}%)</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Sektor
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'>{company.subsector.sector.name}</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Subsektor
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'>{company.subsector.name}</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Bidang Usaha
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'>{company.bidang_usaha}</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Partisipan Admin
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'>
                                        {company.underwriters.map((underwriter, index) => (
                                            underwriter.type == 'partisipan_admin' && (
                                                <p key={index}>
                                                    {underwriter.underwriter.name}
                                                </p>
                                            )
                                        ))}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table className='text-left mt-2 max-w-[50%] h-fit'>
                                <tbody className='align-top'>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Total Saham Dicatatkan
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'>{company.outstanding_shares.toLocaleString('id-ID')} Lembar</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Alamat
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'>{company.address}</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Website
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'><a target='_blank' className='underline' href={company.website}>{company.website}</a></td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-2 whitespace-nowrap'>
                                        Penjamin Emisi Efek
                                    </th>
                                    <td className='pt-2 px-2'>:</td>
                                    <td className='pt-2'>
                                        {company.underwriters.map((underwriter, index) => (
                                            underwriter.type == 'penjamin_emisi_efek' && (
                                                <p key={index}>
                                                    {underwriter.underwriter.name}
                                                </p>
                                            )
                                        ))}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <Financials groupedFinancials={groupedFinancials} company={company}></Financials>
                    </div>
                </div>
            </section>
        </>
    );
}
