'use client'

import React, {useState} from 'react';
import {toRp} from "../../../helpers/formatter";

function Financials({groupedFinancials, company}) {
    const [interval, setInterval] = useState(12)
    let dateOption3 = {month: 'long', year: 'numeric'};
    let dateOption1 = {year: 'numeric', month: 'long', day: 'numeric'};

    return (
        <>
            <div className={'flex gap-4 items-center' + (company.kurs_usd ? ' pb-2' : ' pb-4')}>
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
            {company.kurs_usd &&
                <p className='text-sm pb-4'>Seluruh informasi keuangan dan metrik saham dihitung menggunakan kurs USD/IDR dengan nilai {toRp(company.kurs_usd)} per {new Date(company.kurs_date).toLocaleDateString("id-ID", dateOption1)}</p>
            }
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
                                    {
                                        new Date(financial.date_end).toLocaleDateString("id-ID", dateOption3)
                                        +
                                        (financial.is_audited ? '' : ' *')
                                    }
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
                                        <span>{financial.pbv ? financial.pbv.toFixed(2) : '-'}</span>
                                    ) : (
                                        financial.low_pbv && financial.high_pbv ? (
                                            <>
                                                <span>{financial.low_pbv ? financial.low_pbv.toFixed(2) : '-'}</span>
                                                <span className='font-thin px-1'>-</span>
                                                <span>{financial.high_pbv ? financial.high_pbv.toFixed(2) : '-'}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>-</span>
                                            </>
                                        )
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
                                    {financial.eps ? financial.eps.toFixed(2) : '-'}
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
                                        <span>{financial.per ? financial.per.toFixed(2) : '-'}</span>
                                    ) : (
                                        financial.low_per && financial.high_per ? (
                                            <>
                                                <span>{financial.low_per ? financial.low_per.toFixed(2) : '-'}</span>
                                                <span className='font-thin px-1'>-</span>
                                                <span>{financial.high_per ? financial.high_per.toFixed(2) : '-'}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>-</span>
                                            </>
                                        )
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
                                    {financial.der ? financial.der.toFixed(2) : '-'}
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
                                    {financial.roe ? financial.roe.toFixed(2) : '-'}
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
                                    {financial.net_income ? toRp(financial.net_income) : '-'}
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
                                    {financial.equity ? toRp(financial.equity) : '-'}
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
                                    {financial.asset ? toRp(financial.asset) : '-'}
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
                                    {financial.liability ? toRp(financial.liability) : '-'}
                                </td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                )
            ))}
            <p className='text-sm pt-4 border-t border-gray-400'>* : Tidak diaudit</p>
        </>
    );
}

export default Financials;