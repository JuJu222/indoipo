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

export default async function Company({ params }) {
    let company = await prisma.company.findFirst({
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

    company = JSON.parse(JSON.stringify(company, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value
    ));

    let cardMetrics = {}

    let interval = -1
    for (const [index, financial] of company.financials.entries()) {
        financial['equity'] = financial.asset - financial.liability
        financial['bvps'] = financial.equity / company.outstanding_shares
        financial['eps'] = financial.net_income / company.outstanding_shares
        if (company.final_price) {
            financial['pbv'] = company.final_price / financial.bvps
            financial['per'] = company.final_price / financial.eps
        } else {
            financial['high_pbv'] = company.high_price / financial.bvps
            financial['low_pbv'] = company.low_price / financial.bvps
            financial['high_per'] = company.high_price / financial.eps
            financial['low_per'] = company.low_price / financial.eps
        }
        financial['der'] = financial.liability / financial.equity
        financial['roe'] = financial.net_income / financial.equity

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

    let currDateStr = new Date().toLocaleDateString();
    let currDate = new Date(currDateStr)
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
                    <div className='flex space-x-10'>
                        <div className='w-1/3 flex flex-col items-center justify-center'>
                            {/*<Image src={"/img/companies/" + company.img} className='m-auto object-contain p-4'*/}
                            {/*       alt={'Logo ' + company.ticker} fill={true} />*/}
                            <Image
                                src={"/img/companies/" + company.img}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt='aaa'
                                className='w-full h-auto object-contain p-4'
                            />
                            {company.waran_numerator ? (
                                <p className='bg-secondary text-white px-4 py-1.5 rounded w-full text-center'>Tidak Ada
                                    Waran</p>
                            ) : (
                                <p className='bg-green-600 text-white px-4 py-1.5 rounded w-full text-center'>5 Waran
                                    untuk 1 Lembar Saham</p>
                            )}
                        </div>
                        <div className='w-2/3'>
                            <h3 className="text-md mb-1 leading-none text-gray-900 dark:text-white">{company.ticker}</h3>
                            <h1 className="text-xl mb-1 font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">{company.name}</h1>
                            <h4 className="text-sm mb-2 leading-none text-gray-900 dark:text-white">{company.subsector.name} - {company.subsector.sector.name}</h4>
                            {company.final_price ? (
                                <h3 className="mb-4 text-xl font-bold leading-none text-gray-900 md:text-4xl dark:text-white">{company.low_price}</h3>
                            ) : (
                                <h3 className="mb-4 text-xl font-bold leading-none text-gray-900 md:text-4xl dark:text-white">
                                    <span>{toRp(company.low_price)}</span>
                                    <span className='font-thin px-1'>-</span>
                                    <span>{toRp(company.high_price)}</span>
                                </h3>
                            )}
                            <div className='flex justify-between shadow-md rounded-lg p-5 mb-4 gap-2'>
                                <div>
                                    <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">PER</p>
                                    <p className="mb-2 text-xs leading-none">Rasio <i>Price to Earnings</i></p>
                                    <p className="text-2xl font-bold leading-none text-gray-900">
                                        {company.final_price ? (
                                            cardMetrics.per.value
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
                                            cardMetrics.pbv.value
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
                        <p>{company.description}</p>
                        <div className='flex gap-20 w-full'>
                            <table className='text-left mt-2 max-w-[50%]'>
                                <tbody>
                                <tr>
                                    <th className='font-medium pr-2 pt-1'>
                                        Jumlah Saham Ditawarkan
                                    </th>
                                    <td className='pt-1 px-2'>:</td>
                                    <td className='pt-1'>{company.offered_shares.toLocaleString('id-ID')} Lembar</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-1'>
                                        Sektor
                                    </th>
                                    <td className='pt-1 px-2'>:</td>
                                    <td className='pt-1'>{company.subsector.sector.name}</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-1'>
                                        Subsektor
                                    </th>
                                    <td className='pt-1 px-2'>:</td>
                                    <td className='pt-1'>{company.subsector.name}</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className='text-left mt-2 max-w-[50%]'>
                                <tbody>
                                <tr>
                                    <th className='font-medium pr-2 pt-1'>
                                        Total Saham Dicatatkan
                                    </th>
                                    <td className='pt-1 px-2'>:</td>
                                    <td className='pt-1'>{company.outstanding_shares.toLocaleString('id-ID')} Lembar</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-1'>
                                        Alamat
                                    </th>
                                    <td className='pt-1 px-2'>:</td>
                                    <td className='pt-1'>{company.address}</td>
                                </tr>
                                <tr>
                                    <th className='font-medium pr-2 pt-1'>
                                        Website
                                    </th>
                                    <td className='pt-1 px-2'>:</td>
                                    <td className='pt-1'><a target='_blank' className='underline' href={company.website}>{company.website}</a></td>
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
