'use client'

import React, {useEffect, useState} from 'react';
import TimelineCircle from "@/components/TimelineCircle";
import {Property} from "csstype";

function CompanyComponent({company}) {
    const [activeFinancialId, setActiveFinancialId] = useState(-1);
    const [metrics, setMetrics] = useState(() => {
        if (company.final_price) {
            const equity = {
                date_end: company.financials[0].date_end,
                interval: company.financials[0].interval,
                value: company.financials[0].asset - company.financials[0].liability
            };
            const bvps = {
                date_end: company.financials[0].date_end,
                interval: company.financials[0].interval,
                value: equity.value / company.outstanding_shares
            };
            const pbv = {
                date_end: company.financials[0].date_end,
                interval: company.financials[0].interval,
                value: company.final_price / bvps.value
            }
            const der = {
                date_end: company.financials[0].date_end,
                interval: company.financials[0].interval,
                value: company.financials[0].liability / equity.value
            }
            let eps = {};
            let per = {};
            let roe = {};
            for (const financial of company.financials) {
                if (financial.interval == 12) {
                    eps = {
                        date_end: financial.date_end,
                        interval: financial.interval,
                        value: financial.net_income / company.outstanding_shares
                    };
                    per = {
                        date_end: financial.date_end,
                        interval: financial.interval,
                        value: company.final_price / eps.value
                    };
                    roe = {
                        date_end: financial.date_end,
                        interval: financial.interval,
                        value: financial.net_income / equity.value
                    };
                    break;
                }
            }

            return {
                equity: equity,
                bvps: bvps,
                pbv: pbv,
                eps: eps,
                per: per,
                der: der,
                roe: roe,
            }
        } else {
            const equity = {
                date_end: company.financials[0].date_end,
                interval: company.financials[0].interval,
                value: company.financials[0].asset - company.financials[0].liability
            };
            const bvps = {
                date_end: company.financials[0].date_end,
                interval: company.financials[0].interval,
                value: equity.value / company.outstanding_shares
            };
            const pbv = {
                date_end: company.financials[0].date_end,
                interval: company.financials[0].interval,
                low_value: company.low_price / bvps.value,
                high_value: company.high_price / bvps.value
            }
            const der = {
                date_end: company.financials[0].date_end,
                interval: company.financials[0].interval,
                value: company.financials[0].liability / equity.value
            }
            let eps = {};
            let per = {};
            let roe = {};
            for (const financial of company.financials) {
                console.log(financial)
                if (financial.interval == 12) {
                    eps = {
                        date_end: financial.date_end,
                        interval: financial.interval,
                        value: financial.net_income / company.outstanding_shares
                    };
                    per = {
                        date_end: financial.date_end,
                        interval: financial.interval,
                        low_value: company.low_price / eps.value,
                        high_value: company.high_price / eps.value
                    };
                    roe = {
                        date_end: financial.date_end,
                        interval: financial.interval,
                        value: financial.net_income / equity.value
                    };
                    break;
                }
            }

            return {
                equity: equity,
                bvps: bvps,
                pbv: pbv,
                eps: eps,
                per: per,
                der: der,
                roe: roe,
            }
        }
    });

    // useEffect(() => {
    //     for (const financial of company.financials) {
    //         if (financial.id == activeFinancialId) {
    //             if (company.final_price) {
    //                 const equity = financial.asset - financial.liability;
    //                 const bvps = equity / company.outstanding_shares;
    //                 const eps = financial.net_income / company.outstanding_shares;
    //
    //                 setMetrics({
    //                     equity: equity,
    //                     bvps: bvps,
    //                     pbv: company.final_price / bvps,
    //                     eps: eps,
    //                     per: company.final_price / eps,
    //                     der: financial.liability / equity,
    //                     roe: financial.net_income / equity,
    //                 })
    //             } else {
    //                 const equity = financial.asset - financial.liability;
    //                 const bvps = equity / company.outstanding_shares;
    //                 const eps = financial.net_income / company.outstanding_shares;
    //
    //                 setMetrics({
    //                     equity: equity,
    //                     bvps: bvps,
    //                     low_pbv: company.low_price / bvps,
    //                     high_pbv: company.high_price / bvps,
    //                     eps: eps,
    //                     low_per: company.low_price / eps,
    //                     high_per: company.high_price / eps,
    //                     der: financial.liability / equity,
    //                     roe: financial.net_income / equity,
    //                 })
    //             }
    //
    //             break;
    //         }
    //     }
    // },[activeFinancialId])

    let currDateStr = new Date().toLocaleDateString();
    let currDate = new Date(currDateStr)
    let dateOption1 = {year: 'numeric', month: 'long', day: 'numeric'};
    let dateOption2 = {month: 'long', day: 'numeric'};
    let dateOption3 = {month: 'long', year: 'numeric'};
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

    // groupedFinancials.forEach((financials) => {
    //     financials.sort((a, b) => {
    //         const dateA = new Date(a.date_end);
    //         const dateB = new Date(b.date_end);
    //         return dateA + dateB;
    //     });
    // });

    function toRp(num: number) {
        let currencyFormatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR",
            maximumFractionDigits: 0 })

        return currencyFormatter.format(num)
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
                <div className='flex space-x-10'>
                    <div className='w-1/3'>
                        <img className="rounded-t-lg mx-auto object-contain" src={"/img/companies/" + company.img}
                             alt="product image"/>
                    </div>
                    <div className='w-2/3'>
                        <h2 className="mb-2 text-xl font-bold leading-none text-gray-900 md:text-2xl dark:text-white">{company.name}</h2>
                        <div className='flex justify-between shadow-md rounded-lg p-5 mb-4'>
                            <div>
                                <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">PER</p>
                                <p className="mb-2 text-xs leading-none">Rasio Price to Earnings</p>
                                <p className="text-2xl font-bold leading-none text-gray-900">
                                    {company.final_price ? (
                                        metrics.per.value
                                    ) : (
                                        <>
                                            <span>{metrics.per.low_value.toFixed(2)}</span>
                                            <span className='font-thin px-1'>-</span>
                                            <span>{metrics.per.high_value.toFixed(2)}</span>
                                        </>
                                    )}
                                </p>
                                <p className="mb-2 text-xs leading-none pt-1 text-gray-400">{metrics.per.interval}M - {new Date(metrics.per.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                            </div>
                            <div>
                                <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">PBV</p>
                                <p className="mb-2 text-xs leading-none">Nilai Price to Book</p>
                                <p className="text-2xl font-bold leading-none text-gray-900">
                                    {company.final_price ? (
                                        metrics.pbv.value
                                    ) : (
                                        <>
                                            <span>{metrics.pbv.low_value.toFixed(2)}</span>
                                            <span className='font-thin px-1'>-</span>
                                            <span>{metrics.pbv.high_value.toFixed(2)}</span>

                                        </>
                                    )}
                                </p>
                                <p className="mb-2 text-xs leading-none pt-1 text-gray-400">{metrics.pbv.interval}M - {new Date(metrics.pbv.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                            </div>
                            <div>
                                <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">DER</p>
                                <p className="mb-2 text-xs leading-none">Rasio Debt to Equity</p>
                                <p className="text-2xl font-bold leading-none text-gray-900">{metrics.der.value.toFixed(2)}</p>
                                <p className="mb-2 text-xs leading-none pt-1 text-gray-400">{metrics.der.interval}M - {new Date(metrics.der.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                            </div>
                            <div>
                                <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">ROE</p>
                                <p className="mb-2 text-xs leading-none">Rasio Return on Equity</p>
                                <p className="text-2xl font-bold leading-none text-gray-900">{metrics.roe.value.toFixed(2)}</p>
                                <p className="mb-2 text-xs leading-none pt-1 text-gray-400">{metrics.roe.interval}M - {new Date(metrics.roe.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <ol className="items-center sm:flex">
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
                <div>
                    <dl>
                        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                        <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Standard glass ,3.8GHz
                            8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                            memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet,
                            Magic Mouse 2, Magic Keyboard - US.
                        </dd>
                    </dl>
                    <div className='mb-6'>
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            </svg>
                            Unduh Prospektus
                        </button>
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            </svg>
                            Unduh Informasi Tambahan
                        </button>
                    </div>
                    <dl className="flex items-center space-x-6">
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">BV</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{metrics.bvps.value}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">PBV</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{metrics.pbv.value}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">PER</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{metrics.per.value}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">DER</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{metrics.der.value}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">ROE</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{metrics.roe.value}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">EPS</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{metrics.eps.value}</dd>
                        </div>
                    </dl>
                    <div>
                        <h3 className='text-lg font-semibold pb-4'>Informasi Keuangan </h3>
                        {groupedFinancials.map((groupedFinancial, index) => (
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" key={index}>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                        {groupedFinancial[0].interval} Bulan
                                    </th>
                                    {groupedFinancial.map((financial, index) => (
                                        <th scope="col" className={'px-6 py-3 rounded-lg' + (activeFinancialId == financial.id  ?
                                            ' bg-primary rounded-lg text-white' :
                                            ' hover:bg-gray-100 transition cursor-pointer text-primary_hover')} key={index}
                                        onClick={() => setActiveFinancialId(financial.id)} >
                                        {/*<th scope="col" className="px-6 py-3" key={index}>*/}
                                            {new Date(financial.date_end).toLocaleDateString("id-ID", dateOption3)}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Laba Bersih (Net Income)
                                    </th>
                                    {groupedFinancial.map((financial, index) => (
                                        <td className="px-6 py-4" key={index}>
                                            {toRp(financial.net_income)}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Total Aset
                                    </th>
                                    {groupedFinancial.map((financial, index) => (
                                        <td className="px-6 py-4" key={index}>
                                            {toRp(financial.asset)}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Total Liabilitas
                                    </th>
                                    {groupedFinancial.map((financial, index) => (
                                        <td className="px-6 py-4" key={index}>
                                            {toRp(financial.liability)}
                                        </td>
                                    ))}
                                </tr>
                                </tbody>
                            </table>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyComponent;