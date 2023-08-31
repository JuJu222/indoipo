import React from 'react';
import Search from "@/components/Search";
import prisma from "@/lib/prisma";

async function Navbar(props) {
    const companies = await prisma.company.findMany({
        take: 8,
        orderBy: {
            id: 'asc'
        },
    });

    return (
        <nav
            className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex  items-center mx-auto py-3 px-4">
                <a href="/" className="flex items-center mr-10">
                    <img src="/indoipo.svg" className="h-12" alt="Indoipo Logo"/>
                </a>
                <div className='flex items-center gap-10 w-full justify-between'>
                    <div className='flex gap-8'>
                        <a href="/"
                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0 whitespace-nowrap"
                           aria-current="page">Beranda</a>
                    </div>
                    <div className='flex gap-8'>
                        <a href="/ipo"
                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0 whitespace-nowrap"
                           aria-current="page">Semua IPO</a>
                    </div>
                    <div className='flex gap-8'>
                        <a href="/"
                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0 whitespace-nowrap"
                           aria-current="page">Tentang Kami</a>
                    </div>
                    <Search companies={companies}></Search>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;