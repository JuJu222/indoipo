import React from 'react';
import Search from "@/components/Search";
import prisma from "@/lib/prisma";
import {notFound} from "next/navigation";
import NavbarItem from "@/components/NavbarItem";

export const revalidate = 60

async function Navbar(props) {
    const companies = await prisma.company.findMany({
        take: 8,
        orderBy: {
            id: 'asc'
        },
    });

    if (!companies) {
        return notFound()
    }

    return (
        <>
            <nav
                className="hidden md:block bg-white sticky w-full z-20 top-0 left-0">
                <div className="max-w-screen-xl flex  items-center mx-auto py-3 px-4">
                    <a href="/" className="flex items-center mr-10">
                        <img src="/indoipo.svg" className="h-12" alt="Indoipo Logo"/>
                    </a>
                    <div className='flex items-center gap-5 w-full justify-between'>
                        <NavbarItem href='/'>Beranda</NavbarItem>
                        <NavbarItem href='/ipo'>Semua IPO</NavbarItem>
                        {/*<NavbarItem href='/tentang-kami'>Tentang Kami</NavbarItem>*/}
                        <Search companies={companies}></Search>
                    </div>
                </div>
            </nav>
            <nav
                className="md:hidden block bg-white sticky w-full z-20 top-0 left-0">
                <div className="max-w-screen-xl flex  items-center mx-auto pt-3 px-4">
                    <a href="/" className="flex items-center mr-10">
                        <img src="/indoipo.svg" className="h-12" alt="Indoipo Logo"/>
                    </a>
                    <div className='flex items-center gap-5 w-full'>
                        <NavbarItem href='/'>Beranda</NavbarItem>
                        <NavbarItem href='/ipo'>Semua IPO</NavbarItem>
                        {/*<NavbarItem href='/tentang-kami'>Tentang Kami</NavbarItem>*/}
                    </div>
                </div>
                <div className='px-4 pb-3 pt-1'>
                    <Search companies={companies}></Search>
                </div>
            </nav>
        </>
    );
}

export default Navbar;