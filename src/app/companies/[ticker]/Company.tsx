'use client'

import React, {useEffect, useState} from 'react';
import TimelineCircle from "@/components/TimelineCircle";
import {Property} from "csstype";

function CompanyComponent({company}) {
    const [price, setPrice] = useState(company.high_price);
    const [step, setStep] = useState(() => {
        if (price < 200) {
            return 1;
        } else if (200 <= price && price <= 500) {
            return 2;
        } else if (500 <= price && price <= 2000) {
            return 5;
        } else if (2000 <= price && price <= 5000) {
            return 10;
        } else {
            return 25;
        }
    });
    const bv = Math.round((company.equity / company.shares + Number.EPSILON) * 100) / 100
    const eps = Math.round((company.net_income / company.shares * 100 + Number.EPSILON) * 100) / 100;
    const der = Math.round((company.liability / company.equity * 100 + Number.EPSILON) * 100) / 100;
    const roe = Math.round((company.net_income / company.equity * 100 + Number.EPSILON) * 100) / 100;
    const [pbv, setPbv] = useState(Math.round((price / bv + Number.EPSILON) * 100) / 100);
    const [per, setPer] = useState(Math.round((price / eps + Number.EPSILON) * 100) / 100);

    useEffect(() => {
        if (price < 200) {
            setStep(1)
        } else if (200 <= price && price <= 500) {
            setStep(2)
        } else if (500 <= price && price <= 2000) {
            setStep(5)
        } else if (2000 <= price && price <= 5000) {
            setStep(10)
        } else {
            setStep(25)
        }

        setPbv(Math.round((price / bv + Number.EPSILON) * 100) / 100)
        setPer(Math.round((price / eps + Number.EPSILON) * 100) / 100)
    }, [price])

    let currDate = new Date().toLocaleDateString();
    currDate = new Date(currDate)
    let dateOption1 = {year: 'numeric', month: 'long', day: 'numeric'};
    let dateOption2 = {month: 'long', day: 'numeric'};
    let dateOption3 = {month: 'long', year: 'numeric'};

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

    function toRp(num: number) {
        let currencyFormatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR",
            maximumFractionDigits: 0 })

        return currencyFormatter.format(num)
    }

    console.log(groupedFinancials)

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
                                <p className="text-2xl font-bold leading-none text-gray-900">28.82x</p>
                            </div>
                            <div>
                                <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">PBV</p>
                                <p className="mb-2 text-xs leading-none">Nilai Price to Book</p>
                                <p className="text-2xl font-bold leading-none text-gray-900">{per}</p>
                            </div>
                            <div>
                                <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">DER</p>
                                <p className="mb-2 text-xs leading-none">Rasio Debt to Equity</p>
                                <p className="text-2xl font-bold leading-none text-gray-900">{per}</p>
                            </div>
                            <div>
                                <p className="mb-2 text-lg leading-none text-gray-900 font-semibold">ROE</p>
                                <p className="mb-2 text-xs leading-none">Rasio Return on Equity</p>
                                <p className="text-2xl font-bold leading-none text-gray-900">{per}</p>
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
                    <label htmlFor="minmax-range"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{price}</label>
                    <input id="minmax-range" type="range" value={price} step={step} min={company.low_price}
                           max={company.high_price} onChange={(e) => setPrice(e.target.value)}
                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

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
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{bv}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">PBV</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{pbv}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">PER</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{per}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">DER</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{der}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">ROE</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{roe}</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">EPS</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{eps}</dd>
                        </div>
                    </dl>
                    <div className="relative overflow-x-auto">
                        {groupedFinancials.map((groupedFinancial) => (
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                        {groupedFinancial[0].interval} Bulan
                                    </th>
                                    {groupedFinancial.map((financial) => (
                                        <th scope="col" className="px-6 py-3">
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
                                    {groupedFinancial.map((financial) => (
                                        <td className="px-6 py-4">
                                            {toRp(financial.net_income)}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Total Aset
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        ))}
                    </div>
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li className="mr-2">
                            <a href="#" className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                               aria-current="page">Tab 1</a>
                        </li>
                        <li className="mr-2">
                            <a href="#"
                               className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab
                                2</a>
                        </li>
                        <li className="mr-2">
                            <a href="#"
                               className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab
                                3</a>
                        </li>
                        <li className="mr-2">
                            <a href="#"
                               className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab
                                4</a>
                        </li>
                        <li>
                            <a className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Tab
                                5</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default CompanyComponent;