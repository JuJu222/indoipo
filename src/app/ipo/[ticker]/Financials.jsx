'use client'

import React, {useState} from 'react';

function Financials({groupedFinancials, company}) {
    const [interval, setInterval] = useState(12)
    let dateOption3 = {month: 'long', year: 'numeric'};

    function toRp(num) {
        let currencyFormatter = new Intl.NumberFormat("id-ID", {
            style: "currency", currency: "IDR",
            maximumFractionDigits: 0
        })

        return currencyFormatter.format(num)
    }

    return (
        <>
            <div className='flex gap-4 items-center pb-4'>
                <h2 className='text-lg font-semibold'>Informasi Keuangan</h2>
                <div className="inline-flex roundclassName shadow-sm">
                    {groupedFinancials.map((groupedFinancial, index) => (
                        index == 0 ? (
                            <button key={index} onClick={() => setInterval(groupedFinancial[0].interval)}
                               className={"px-4 py-2 font-semibold bg-white border border-gray-200 rounded-l-lg hover:bg-gray-50 transition dark:bg-gray-700 dark:border-gray-600 dark:text-white" + (interval == groupedFinancial[0].interval ? ' text-primary border border-primary' : ' text-gray-400')}>
                                {groupedFinancial[0].interval} Bulan
                            </button>
                        ) : (
                            index == groupedFinancials.length - 1 ? (
                                <button key={index} onClick={() => setInterval(groupedFinancial[0].interval)}
                                   className={"px-4 py-2 font-semibold bg-white border border-gray-200 rounded-r-md hover:bg-gray-50 transition dark:bg-gray-700 dark:border-gray-600 dark:text-white" + (interval == groupedFinancial[0].interval ? ' text-primary border border-primary' : ' text-gray-400')}>
                                    {groupedFinancial[0].interval} Bulan
                                </button>
                            ) : (
                                <button key={index} onClick={() => setInterval(groupedFinancial[0].interval)}
                                   className={"px-4 py-2 font-semibold bg-white border-t border-b border-gray-200 hover:bg-gray-50 transition dark:bg-gray-700 dark:border-gray-600 dark:text-white" + (interval == groupedFinancial[0].interval ? ' text-primary border border-primary' : ' text-gray-400')}>
                                    {groupedFinancial[0].interval} Bulan
                                </button>
                                )
                            )
                    ))}
                </div>
            </div>
            {groupedFinancials.map((groupedFinancial, index) => (
                groupedFinancial[0].interval == interval && (
                    <table
                        className="w-full text-sm text-left text-gray-500 dark:text-gray-400 block overflow-x-auto"
                        key={index}>
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap w-[1%]">
                                {groupedFinancial[0].interval} Bulan
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <th scope="col" className='px-6 py-3 rounded-lg text-primary_hover' key={index}
                                >
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
                                <p>BVPS <span className='font-light'>(<i>Book Value per Share</i>)</span></p>
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {toRp(financial.net_income)}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>PBV <span className='font-light'>(<i>Price to Book Value</i>)</span></p>
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {company.final_price ? (
                                        financial.pbv.value
                                    ) : (
                                        <>
                                            <span>{financial.low_pbv.toFixed(2)}</span>
                                            <span className='font-thin px-1'>-</span>
                                            <span>{financial.high_pbv.toFixed(2)}</span>
                                        </>
                                    )}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>EPS <span className='font-light'>(<i>Earnings per Share</i>)</span></p>
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {financial.eps.toFixed(2)}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>PER <span className='font-light'>(<i>Price to Earnings Ratio</i>)</span></p>
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {company.final_price ? (
                                        financial.per.value
                                    ) : (
                                        <>
                                            <span>{financial.low_per.toFixed(2)}</span>
                                            <span className='font-thin px-1'>-</span>
                                            <span>{financial.high_per.toFixed(2)}</span>
                                        </>
                                    )}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>DER <span className='font-light'>(<i>Debt to Equity Ratio</i>)</span></p>
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {financial.der.toFixed(2)}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>ROE <span className='font-light'>(<i>Return on Equity</i>)</span></p>
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {financial.roe.toFixed(2)}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Laba Bersih <span className='font-light'>(<i>Net Income</i>)</span>
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {toRp(financial.net_income)}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Total Ekuitas
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {toRp(financial.equity)}
                                </td>
                            ))}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Total Aset
                            </th>
                            {groupedFinancial.map((financial, index) => (
                                <td className="px-6 py-4 font-medium" key={index}>
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
                                <td className="px-6 py-4 font-medium" key={index}>
                                    {toRp(financial.liability)}
                                </td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                )
            ))}
        </>
    );
}

export default Financials;