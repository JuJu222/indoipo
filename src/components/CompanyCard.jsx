import React from 'react';
import Link from "next/link";
import {toRp} from "../helpers/formatter";
import Image from "next/image";

function CompanyCard({company}) {
    let statusClass = ''
    let statusName = ''

    // switch (company.status.id) {
    //     case 1:
    //         statusClass = 'bg-primary'
    //         break;
    //     case 2:
    //         statusClass = 'bg-primary'
    //         break;
    //     case 3:
    //         statusClass = 'bg-secondary'
    //         break;
    //     case 4:
    //         statusClass = 'bg-secondary'
    //         break;
    //     default:
    //         statusClass = 'bg-secondary'
    // }

    let currentDate = new Date().toLocaleDateString();
    currentDate = new Date(currentDate)

    if (new Date(company.date_awal_start).toLocaleDateString() <= currentDate.toLocaleDateString() && new Date(company.date_awal_end).toLocaleDateString() >= currentDate.toLocaleDateString()) {
        statusClass = 'bg-green-600'
        statusName = 'Penawaran Awal'
    } else if (new Date(company.date_umum_start).toLocaleDateString() <= currentDate.toLocaleDateString() && new Date(company.date_umum_end).toLocaleDateString() >= currentDate.toLocaleDateString()) {
        statusClass = 'bg-primary'
        statusName = 'Penawaran Umum'
    } else if (currentDate.toLocaleDateString() == new Date(company.date_distribusi).toLocaleDateString()) {
        statusClass = 'bg-secondary'
        statusName = 'Distribusi Saham'
    } else if (currentDate.toLocaleDateString() == new Date(company.date_penjatahan).toLocaleDateString()) {
        statusClass = 'bg-secondary'
        statusName = 'Penjatahan Efek'
    } else if (currentDate.toLocaleDateString() == new Date(company.date_ipo).toLocaleDateString() || currentDate.toLocaleDateString() > new Date(company.date_ipo).toLocaleDateString()) {
        statusClass = 'bg-secondary'
        statusName = 'IPO'
    } else {
        statusClass = 'bg-primary'
        statusName = 'Penawaran Awal'
    }

    let metrics = {}

    let interval = -1
    for (const [index, financial] of company.financials.entries()) {
        if (index == 0) {
            const equity = financial.asset - financial.liability
            const bvps = equity / company.outstanding_shares
            if (company.final_price) {
                metrics['pbv'] = company.final_price / bvps
            } else {
                metrics['low_pbv'] = company.low_price / bvps
                metrics['high_pbv'] = company.high_price / bvps
            }
        }

        if (interval != financial.interval) {
            interval = financial.interval

            if (interval == 12) {
                const eps = financial.net_income / company.outstanding_shares
                if (company.final_price) {
                    metrics['per'] = company.final_price / eps
                } else {
                    metrics['low_per'] = company.low_price / eps
                    metrics['high_per'] = company.high_price / eps
                }
            }
        }
    }

    return (
        <Link href={'/ipo/' + company.ticker}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 transition overflow-clip">
            <div className={"text-sm font-medium w-full py-1.5 text-white " + statusClass}>{statusName}</div>

            <div className='p-5'>
                <Image
                    src={"/img/companies/" + company.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt='aaa'
                    className='h-20 w-auto mx-auto object-contain'
                />
                <div className="pt-4 flex flex-col gap-4">
                    <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{company.ticker}</h5>
                        <p className='text-black pb-1'>{company.name}</p>
                        <p className='text-black pb-2 text-sm'>{company.subsector.name}</p>
                    </div>
                    {company.final_price ? (
                        <div>
                            <h5 className="font-bold">Harga Final</h5>
                            <span className='text-lg'>{toRp(company.final_price)}</span>
                        </div>
                    ) : (
                        <div>
                            <h5 className="font-bold">Harga Penawaran</h5>
                            <span className='text-lg'>{toRp(company.low_price)}</span>
                            <span className='text-lg font-thin px-1'>-</span>
                            <span className='text-lg'>{toRp(company.high_price)}</span>
                        </div>
                    )}
                    <div>
                        <h5 className="font-bold">PER</h5>
                        {company.final_price ? (
                            <span className='text-lg'>{metrics.per.toFixed(2)}</span>
                        ) : (
                            <>
                                <span className='text-lg'>{metrics.low_per.toFixed(2)}</span>
                                <span className='text-lg font-thin px-1'>-</span>
                                <span className='text-lg'>{metrics.high_per.toFixed(2)}</span>
                            </>
                        )}
                    </div>
                    <div>
                        <h5 className="font-bold">PBV</h5>
                        {company.final_price ? (
                            <span className='text-lg'>{metrics.pbv.toFixed(2)}</span>
                        ) : (
                            <>
                                <span className='text-lg'>{metrics.low_pbv.toFixed(2)}</span>
                                <span className='font-thin px-1'>-</span>
                                <span className='text-lg'>{metrics.high_pbv.toFixed(2)}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CompanyCard;