import React from 'react';
import Link from "next/link";
import {toRp} from "../helpers/formatter";
import Image from "next/image";

function CompanyCard({company}) {
    let statusClass = ''
    let statusName = ''
    let dateMYOnly = {month: 'short', year: 'numeric'};

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

    let currentDate = new Date()
    currentDate.setHours(currentDate.getHours() - (currentDate.getTimezoneOffset() / 60))
    currentDate = currentDate.toISOString().split("T")[0]

    if (new Date(company.date_awal_start).toISOString().split("T")[0] <= currentDate && new Date(company.date_umum_start).toISOString().split("T")[0] > currentDate) {
        statusClass = 'bg-yellow-400'
        statusName = 'Penawaran Awal'
    } else if (new Date(company.date_umum_start).toISOString().split("T")[0] <= currentDate && new Date(company.date_distribusi).toISOString().split("T")[0] > currentDate) {
        statusClass = 'bg-green-500'
        statusName = 'Penawaran Umum'
    } else if (new Date(company.date_distribusi).toISOString().split("T")[0] <= currentDate && new Date(company.date_penjatahan).toISOString().split("T")[0] > currentDate) {
        statusClass = 'bg-secondary'
        statusName = 'Distribusi Saham'
    } else if (new Date(company.date_penjatahan).toISOString().split("T")[0] <= currentDate && new Date(company.date_ipo).toISOString().split("T")[0] > currentDate) {
        statusClass = 'bg-secondary'
        statusName = 'Penjatahan Efek'
    } else if (currentDate == new Date(company.date_ipo).toISOString().split("T")[0] || currentDate > new Date(company.date_ipo).toISOString().split("T")[0]) {
        statusClass = 'bg-secondary'
        statusName = 'IPO'
    } else {
        statusClass = 'bg-orange-500'
        statusName = 'Akan Datang'
    }

    let metrics = {}

    let latestMonthsLatestDate = new Date('01-01-1000')
    let twelveMonthsLatestDate = new Date('01-01-1000')
    for (const [index, financial] of company.financials.entries()) {
        if (financial.interval == 12) {
            if (new Date(financial.date_end) > twelveMonthsLatestDate) {
                let net_income = financial.net_income
                if (company.kurs_usd) {
                    net_income = net_income * company.kurs_usd
                }
                const eps = net_income / company.outstanding_shares
                if (company.final_price) {
                    metrics['per'] = company.final_price / eps
                } else {
                    metrics['low_per'] = company.low_price / eps
                    metrics['high_per'] = company.high_price / eps
                }

                twelveMonthsLatestDate = new Date(financial.date_end)
            }
        } else {
            if (new Date(financial.date_end) > latestMonthsLatestDate) {
                let asset = financial.asset
                let liability = financial.liability
                if (company.kurs_usd) {
                    asset = asset * company.kurs_usd
                    liability = liability * company.kurs_usd
                }
                const equity = asset - liability
                const bvps = equity / company.outstanding_shares
                if (company.final_price) {
                    metrics['pbv'] = company.final_price / bvps
                } else {
                    metrics['low_pbv'] = company.low_price / bvps
                    metrics['high_pbv'] = company.high_price / bvps
                }

                latestMonthsLatestDate = financial.date_end
            }
        }
    }

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

    if (company.kurs_usd) {
        groupedFinancials[0][0].net_income = groupedFinancials[0][0].net_income * company.kurs_usd
        groupedFinancials[1][0].net_income = groupedFinancials[1][0].net_income * company.kurs_usd
        groupedFinancials[1][1].net_income = groupedFinancials[1][1].net_income * company.kurs_usd
        groupedFinancials[1][0].asset = groupedFinancials[1][0].asset * company.kurs_usd
        groupedFinancials[1][0].liability = groupedFinancials[1][0].liability * company.kurs_usd
    }

    if (groupedFinancials[1].length > 1) {
        const ttmNetIncome = groupedFinancials[0][0].net_income + groupedFinancials[1][0].net_income - groupedFinancials[1][1].net_income
        const ttmEPS = ttmNetIncome / company.outstanding_shares
        const ttmEquity = groupedFinancials[1][0].asset - groupedFinancials[1][0].liability
        const ttmBVPS = ttmEquity / company.outstanding_shares
        const ttmDER = groupedFinancials[1][0].liability / ttmEquity
        const ttmROE = ttmNetIncome / ttmEquity

        const ttmFinancial = {
            id: 0,
            interval: 0,
            date_end: groupedFinancials[1][0].date_end,
            net_income: ttmNetIncome,
            liability: groupedFinancials[1][0].liability,
            asset: groupedFinancials[1][0].asset,
            is_audited: false,
            equity: ttmEquity,
            bvps: ttmBVPS,
            eps: ttmEPS,
            der: ttmDER,
            roe: ttmROE
        }
        if (company.final_price) {
            metrics['per'] = company.final_price / ttmEPS
            metrics['pbv'] = company.final_price / ttmBVPS
        } else {
            metrics['high_per'] = company.high_price / ttmEPS
            metrics['low_per'] = company.low_price / ttmEPS
            metrics['high_pbv'] = company.high_price / ttmBVPS
            metrics['low_pbv'] = company.low_price / ttmBVPS
        }
        metrics['interval'] = 0
        metrics['date_end'] = groupedFinancials[1][0].date_end

    }

    return (
        <Link href={'/ipo/' + company.ticker}
            className="w-full bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 transition overflow-clip">
            <div className={"text-sm font-medium w-full py-1.5 text-white " + statusClass}>{statusName}</div>

            <div className='p-5'>
                <Image
                    src={company.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={company.name}
                    className='h-20 w-auto mx-auto object-contain'
                />
                <div className="pt-4 flex flex-col gap-4">
                    <div className='flex flex-col items-center'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{company.ticker}</h5>
                        <p className='text-black font-semibold pb-1 text-sm'>{company.name}</p>
                        <p className='text-black pb-2 text-sm'>{company.subsector.name}</p>
                        {company.waran_numerator && (
                            <p className='text-white font-semibold px-3 py-1 rounded-full text-sm bg-primary w-fit text-sm'>Bonus Waran - {company.waran_numerator} : {company.waran_denominator}</p>
                        )}
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
                        <p className='text-xs leading-none pt-1 text-gray-400'>{metrics.interval > 0 ? metrics.per.interval + 'M ' : 'TTM '}
                            - {new Date(metrics.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
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
                        <p className="text-xs leading-none pt-1 text-gray-400">{new Date(metrics.date_end).toLocaleDateString("id-ID", dateMYOnly).toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CompanyCard;