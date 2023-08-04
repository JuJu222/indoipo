import React from 'react';
import Link from "next/link";

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

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    });

    return (
        <Link href={'/companies/' + company.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition overflow-clip">
            <div className={"text-sm font-medium w-full py-1.5 text-white " + statusClass}>{statusName}</div>

            <div className='p-5'>
                <img className="rounded-t-lg h-20 mx-auto object-contain" src={"/img/companies/" + company.img} alt="product image"/>
                <div className="pt-4 flex flex-col gap-4">
                    <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{company.ticker}</h5>
                        <p className='text-black pb-1'>PT Multi Makmur Lemindo Tbk</p>
                        <p className='text-black pb-2 text-sm'>{company.subsector.name}</p>
                    </div>
                    {company.final_price ? (
                        <div>
                            <h5 className="font-bold">Harga Final</h5>
                            <p>{formatter.format(company.final_price)}</p>
                        </div>
                    ) : (
                        <div>
                            <h5 className="font-bold">Rentang Harga</h5>
                            <p>Rp224 - Rp250</p>
                        </div>
                    )}
                    <div>
                        <h5 className="font-bold">Rentang Harga</h5>
                        <p>Rp224 - Rp250</p>
                    </div>
                    <div>
                        <h5 className="font-bold">Rentang Harga</h5>
                        <p>Rp224 - Rp250</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CompanyCard;